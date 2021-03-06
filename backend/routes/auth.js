"use strict";

/** Routes for authentication. */

const jsonschema = require("jsonschema");

const User = require("../models/user");
const Category = require("../models/category");
const Word = require("../models/word");
const express = require("express");
const router = new express.Router();
const { createToken } = require("../helpers/tokens");
const userAuthSchema = require("../schemas/userAuth.json");
const userRegisterSchema = require("../schemas/userRegister.json");
const { BadRequestError } = require("../expressError");
const categoryNewSchema = require("../schemas/categoryNew.json");
const wordNewSchema = require("../schemas/wordNew.json");
const { ensureLoggedIn } = require("../middleware/auth");

/** POST /auth/token:  { username, password } => { token }
 *
 * Returns JWT token which can be used to authenticate further requests.
 *
 * Authorization required: none
 */

router.post("/token", async function (req, res, next) {
    try {
        const validator = jsonschema.validate(req.body, userAuthSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }

        const { username, password } = req.body;
        const user = await User.authenticate(username, password);
        const token = createToken(user);
        return res.json({ token }); 
    } catch (err) {
        return next(err);
    }
})

/** POST /auth/register:   { user } => { token }
 *
 * user must include { username, password, firstName, lastName, email }
 *
 * Returns JWT token which can be used to authenticate further requests.
 *
 * Authorization required: none
 */

router.post("/register", async function (req, res, next) {
    try {
        const validator = jsonschema.validate(req.body, userRegisterSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }
        
        const newUser = await User.register({ ...req.body, isAdmin: false });
        const token = createToken(newUser);
        return res.status(201).json({ token });
    } catch (err) {
        return next(err);
    }
});

// to create new category

/** POST /auth/newcategory:   { newcategory } => { token }
 *
 * category must include { handle, name, description }
 *
 * Returns JWT token which can be used to authenticate further requests.
 *
 * Authorization required: none
 */

router.post("/newcategory",  ensureLoggedIn, async function (req, res, next) {
    try {
        const validator = jsonschema.validate(req.body, categoryNewSchema);
        if(!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }

        const newCategory = await Category.create({ ...req.body });
        const token = createToken(newCategory);
        return res.status(201).json({ token });
    } catch(err) {
        return next(err);
    }
});

router.post("/addingwords",  ensureLoggedIn, async function (req, res, next) {
    try {
        const validator = jsonschema.validate(req.body, wordNewSchema);
        if(!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }

        const addingWords = await Word.create({ ...req.body });
        const token = createToken(addingWords);
        return res.status(201).json({ token });
    } catch(err) {
        return next(err);
    }
});

module.exports = router;