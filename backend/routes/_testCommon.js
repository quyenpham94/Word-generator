"use strict";

const db = require("../db.js");
const User = require("../models/user");
const Category = require("../models/category");
const Word = require("../models/word");
const { createToken } = require("../helpers/tokens");

const testWordIds = [];

async function commonBeforeAll() {
  // noinspection SqlWithoutWhere
  await db.query("DELETE FROM users");
  // noinspection SqlWithoutWhere
  await db.query("DELETE FROM categories");

  await Category.create({
    handle: "c1",
    name: "C1",
  });
  await Category.create({
    handle: "c2",
    name: "C2",
  });
  await Category.create({
    handle: "c3",
    name: "C3",
  });

  testWordIds[0] = (await Word.create({ name: "I1", categoryHandle: "c1" })).id;
  testWordIds[1] = (await Word.create({ name: "I2", categoryHandle: "c1" })).id;
  testWordIds[2] = (await Word.create({ name: "I3", categoryHandle: "c1" })).id;

  await User.register({
    username: "u1",
    firstName: "U1F",
    lastName: "U1L",
    email: "user1@user.com",
    password: "password1",
    isAdmin: false,
  });
  await User.register({
    username: "u2",
    firstName: "U2F",
    lastName: "U2L",
    email: "user2@user.com",
    password: "password2",
    isAdmin: false,
  });
  await User.register({
    username: "u3",
    firstName: "U3F",
    lastName: "U3L",
    email: "user3@user.com",
    password: "password3",
    isAdmin: false,
  });

  await User.viewWord("u1", testWordIds[0]);
}

async function commonBeforeEach() {
  await db.query("BEGIN");
}

async function commonAfterEach() {
  await db.query("ROLLBACK");
}

async function commonAfterAll() {
  await db.end();
}

const u1Token = createToken({ username: "u1", isAdmin: false });
const u2Token = createToken({ username: "u2", isAdmin: false });
const adminToken = createToken({ username: "admin", isAdmin: true });

module.exports = {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  testWordIds,
  u1Token,
  u2Token,
  adminToken,
};