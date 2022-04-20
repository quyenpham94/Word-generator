"use strict";

/** Routes for words. */

const jsonschema = require("jsonschema");

const express = require("express");
const { BadRequestError } = require("../expressError");
const { ensureAdmin } = require("../middleware/auth");
const Word = require("../models/word");
const wordNewSchema = require("../schemas/wordNew.json");
const wordUpdateSchema = require("../schemas/wordUpdate.json");
const wordSearchSchema = require("../schemas/wordSearch.json");

const router = express.Router({ mergeParams: true });

/** POST / { word } => { word }
 *
 * word should be { name, categoryHandle }
 *
 * Returns { id, name, categoryHandle }
 *
 * Authorization required: admin
 */

router.post("/". ensureAdmin, async function (req, res, next) {
    try {
        const validator = jsonschema.validate(req.body, wordNewSchema);
        if (!validator.valid) {
            const errs = validator.errors.map((e) => e.stack);
            throw new BadRequestError(errs);
        }

        const word = await Word.create(req.body);
        return res.status(201).json({ word });
    } catch (err) {
        return next(err);
    }
});

/** GET / =>
 *   { words: [ { id, name, categoryHandle, categoryName }, ...] }
 *
 * Can provide search filter in query:
 * - name (will find case-insensitive, partial matches)
 * 
 * Authorization required: none
 */

router.get("/", async function (req, res, next) {
    const q = req.query;

    try {
        const validator = jsonschema.validate(q, wordSearchSchema);
        if (!validator.valid) {
            const errs = validator.errors.map((e) => e.stack);
            throw new BadRequestError(errs);
        }

        const words = await Word.findAll(q);
        return res.json({ words });
    } catch (err) {
        return next(err);
    }
});

/** GET /[wordId] => { word }
 *
 * Returns { id, name, category }
 *   where category is { handle, name, description }
 *
 * Authorization required: none
 */

router.get("/:id", async function (req, res, next) {
    try {
        const word = await Word.get(req.params.id);
        return res.json({ word });
    } catch (err) {
        return next(err);
    }
});

/** PATCH /[wordId]  { fld1, fld2, ... } => { word }
 *
 * Data can include: { name }
 *
 * Returns { id, name, categoryHandle }
 *
 * Authorization required: admin
 */

router.patch("/:id", ensureAdmin, async function (req, res, next) {
    try {
        const validator = jsonschema.validate(req.body, wordUpdateSchema);
        if (!validator.valid) {
            const errs = validator.errors.map((e) => e.stack);
            throw new BadRequestError(errs);
        }

        const word = await Word.update(req.params.id, req.body);
        return res.json({ word });
    } catch (err) {
        return next(err);
    }
});

/** DELETE /[handle]  =>  { deleted: id }
 *
 * Authorization required: admin
 */

router.delete("/:id", ensureAdmin, async function (req, res, next) {
    try {
        await Word.remove(req.params.id);
        return res.json({ deleted: +req.params.id });
    } catch (err) {
        return next(err);
    }
});

module.exports = router;