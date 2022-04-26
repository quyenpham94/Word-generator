"use strict";

const { NotFoundError, BadRequestError } = require("../expressError");
const db = require("../db.js");
const Word = require("./word.js");
const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  testWordIds,
} = require("./_testCommon");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

/************************************** create */

describe("create", function () {
  let newWord = {
    categoryHandle: "c1",
    name: "Test",
  };

  test("works", async function () {
    let word = await Word.create(newWord);
    expect(word).toEqual({
      ...newWord,
      id: expect.any(Number),
    });
  });
});

/************************************** findAll */

describe("findAll", function () {
  test("works: no filter", async function () {
    let words = await Word.findAll();
    expect(words).toEqual([
      {
        id: testWordIds[0],
        name: "Word1",
        categoryHandle: "c1",
        categoryName: "C1",
      },
      {
        id: testWordIds[1],
        name: "Word2",
        categoryHandle: "c1",
        categoryName: "C1",
      },
    ]);
  });

  test("works: by name", async function () {
    let words = await Word.findAll({ name: "Word1" });
    expect(words).toEqual([
      {
        id: testWordIds[0],
        name: "Word1",
        categoryHandle: "c1",
        categoryName: "C1",
      },
    ]);
  });
});

/************************************** get */

describe("get", function () {
  test("works", async function () {
    let word = await Word.get(testWordIds[0]);
    expect(word).toEqual({
      id: testWordIds[0],
      name: "Word1",
      category: {
        handle: "c1",
        name: "C1",
        description: "Desc1",
      },
    });
  });

  test("not found if no such word", async function () {
    try {
      await Word.get(0);
      fail();
    } catch (err) {
      expect(err instanceof NotFoundError).toBeTruthy();
    }
  });
});

/************************************** update */

describe("update", function () {
  let updateData = {
    name: "New",
  };
  test("works", async function () {
    let word = await Word.update(testWordIds[0], updateData);
    expect(word).toEqual({
      id: testWordIds[0],
      categoryHandle: "c1",
      ...updateData,
    });
  });

  test("not found if no such word", async function () {
    try {
      await Word.update(0, {
        name: "test",
      });
      fail();
    } catch (err) {
      expect(err instanceof NotFoundError).toBeTruthy();
    }
  });

  test("bad request with no data", async function () {
    try {
      await Word.update(testWordIds[0], {});
      fail();
    } catch (err) {
      expect(err instanceof BadRequestError).toBeTruthy();
    }
  });
});

/************************************** remove */

describe("remove", function () {
  test("works", async function () {
    await Word.remove(testWordIds[0]);
    const res = await db.query("SELECT id FROM words WHERE id=$1", [
      testWordIds[0],
    ]);
    expect(res.rows.length).toEqual(0);
  });

  test("not found if no such word", async function () {
    try {
      await Word.remove(0);
      fail();
    } catch (err) {
      expect(err instanceof NotFoundError).toBeTruthy();
    }
  });
});