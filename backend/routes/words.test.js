"use strict";

const request = require("supertest");

const app = require("../app");

const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  testWordIds,
  u1Token,
  adminToken,
} = require("./_testCommon");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

/************************************** POST /words */

describe("POST /words", function () {
  test("ok for admin", async function () {
    const resp = await request(app)
      .post(`/words`)
      .send({
        categoryHandle: "c1",
        name: "I-new",
      })
      .set("authorization", `Bearer ${adminToken}`);
    expect(resp.statusCode).toEqual(201);
    expect(resp.body).toEqual({
      word: {
        id: expect.any(Number),
        name: "I-new",
        categoryHandle: "c1",
      },
    });
  });

  test("unauth for users", async function () {
    const resp = await request(app)
      .post(`/words`)
      .send({
        categoryHandle: "c1",
        name: "I-new",
      })
      .set("authorization", `Bearer ${u1Token}`);
    expect(resp.statusCode).toEqual(401);
  });

  test("bad request with missing data", async function () {
    const resp = await request(app)
      .post(`/words`)
      .send({
        categoryHandle: "c1",
      })
      .set("authorization", `Bearer ${adminToken}`);
    expect(resp.statusCode).toEqual(400);
  });
});

/************************************** GET /words */

describe("GET /words", function () {
  test("ok for anon", async function () {
    const resp = await request(app).get(`/words`);
    expect(resp.body).toEqual({
      words: [
        {
          id: expect.any(Number),
          name: "I1",
          categoryHandle: "c1",
          categoryName: "C1",
        },
        {
          id: expect.any(Number),
          name: "I2",
          categoryHandle: "c1",
          categoryName: "C1",
        },
        {
          id: expect.any(Number),
          name: "I3",
          categoryHandle: "c1",
          categoryName: "C1",
        },
      ],
    });
  });

  test("works: filtering", async function () {
    const resp = await request(app).get(`/words`).query({ name: "I1" });
    expect(resp.body).toEqual({
      words: [
        {
          id: expect.any(Number),
          name: "I1",
          categoryHandle: "c1",
          categoryName: "C1",
        },
      ],
    });
  });

  test("bad request on invalid filter key", async function () {
    const resp = await request(app).get(`/words`).query({ nope: "nope" });
    expect(resp.statusCode).toEqual(400);
  });
});

/************************************** GET /words/:id */

describe("GET /words/:id", function () {
  test("works for anon", async function () {
    const resp = await request(app).get(`/words/${testWordIds[0]}`);
    expect(resp.body).toEqual({
      word: {
        id: testWordIds[0],
        name: "I1",
        category: {
          handle: "c1",
          name: "C1",
          description: "Desc1",
        },
      },
    });
  });

  test("not found for no such word", async function () {
    const resp = await request(app).get(`/words/0`);
    expect(resp.statusCode).toEqual(404);
  });
});

/************************************** PATCH /words/:id */

describe("PATCH /words/:id", function () {
  test("works for admin", async function () {
    const resp = await request(app)
      .patch(`/words/${testWordIds[0]}`)
      .send({
        name: "I-New",
      })
      .set("authorization", `Bearer ${adminToken}`);
    expect(resp.body).toEqual({
      word: {
        id: expect.any(Number),
        name: "I-New",
        categoryHandle: "c1",
      },
    });
  });

  test("unauth for others", async function () {
    const resp = await request(app)
      .patch(`/words/${testWordIds[0]}`)
      .send({
        name: "I-New",
      })
      .set("authorization", `Bearer ${u1Token}`);
    expect(resp.statusCode).toEqual(401);
  });

  test("not found on no such word", async function () {
    const resp = await request(app)
      .patch(`/words/0`)
      .send({
        handle: "new",
      })
      .set("authorization", `Bearer ${adminToken}`);
    expect(resp.statusCode).toEqual(400);
  });

  test("bad request on handle change attempt", async function () {
    const resp = await request(app)
      .patch(`/words/${testWordIds[0]}`)
      .send({
        handle: "new",
      })
      .set("authorization", `Bearer ${adminToken}`);
    expect(resp.statusCode).toEqual(400);
  });
});

/************************************** DELETE /words/:id */

describe("DELETE /words/:id", function () {
  test("works for admin", async function () {
    const resp = await request(app)
      .delete(`/words/${testWordIds[0]}`)
      .set("authorization", `Bearer ${adminToken}`);
    expect(resp.body).toEqual({ deleted: testWordIds[0] });
  });

  test("unauth for others", async function () {
    const resp = await request(app)
      .delete(`/words/${testWordIds[0]}`)
      .set("authorization", `Bearer ${u1Token}`);
    expect(resp.statusCode).toEqual(401);
  });

  test("unauth for anon", async function () {
    const resp = await request(app).delete(`/words/${testWordIds[0]}`);
    expect(resp.statusCode).toEqual(401);
  });

  test("not found for no such word", async function () {
    const resp = await request(app)
      .delete(`/words/0`)
      .set("authorization", `Bearer ${adminToken}`);
    expect(resp.statusCode).toEqual(404);
  });
});