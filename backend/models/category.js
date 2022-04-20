"use strict";

const db = require("../db");
const { BadeRequestError, NotFoundError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");

/** Related functions for categories. */

class Category {
     /** Create a category (from data), update db, return new category data.
   *
   * data should be { handle, name }
   *
   * Returns { handle, name }
   *
   * Throws BadRequestError if category already in database.
   * */

    static async create({ handle, name }) {
        const duplicateCheck = await db.query(
             `SELECT handle
                FROM categories
                WHERE handle = $1`,
            [handle]
         );

        if (duplicateCheck.rows[0])
            throw new BadeRequestError(`Duplicate category: ${handle}`);

        const result = await db.query(
            `INSERT INTO categories
                (handle, name)
                VALUES ($1, $2, $3)
                RETURNING handle, name`,
            [handle, name]
        );
        const category = result.rows[0];

        return category;
     }

     /** Find all categories (optional filter on searchFilters).
   *
   * searchFilters (all optional):
   * - name (will find case-insensitive, partial matches)
   *
   * Returns [{ handle, name }, ...]
   * */

    static async findAll(searchFilters = {}) {
        let query = `SELECT handle,
                            name
                    FROM categories`;
        let whereExpressions = [];
        let queryValues = [];

        const { name } = searchFilters;

        // For each possible search term, add to whereExpressions and queryValues so 
        // we can generate the right SQL

        if (name) {
            queryValues.push(`%${name}%`);
            whereExpressions.push(`name ILIKE $${queryValues.length}`);
        }

        if (whereExpressions.length > 0) {
            query += "WHERE " + whereExpressions.join(" AND");
        }

        // Finalize query and return results
        
        query += " ORDER BY name";
        const categoriesRes = await db.query(query, queryValues);
        return categoriesRes.rows;
    }
    
     /** Given a category handle, return data about category.
   *
   * Returns { handle, name, words }
   *   where words is [{ id, name }, ...]
   *
   * Throws NotFoundError if not found.
   **/

    static async get(handle) {
        const categoryRes = await db.query( 
            `SELECT handle, 
                    name,
                FROM categories
                WHERE handle = $1`,
            [handle]
        );

        const category = categoryRes.rows[0];

        if (!category) throw new NotFoundError(`No category: ${handle}`);

        const wordsRes = await db.query(
            `SELECT id, name
                FROM words
                WHERE category_handle = $1
                ORDER BY id`,
            [handle]
        );

        category.words = wordsRes.rows;

        return category;
    }
  /** Update category data with `data`.
   *
   * This is a "partial update" --- it's fine if data doesn't contain all the
   * fields; this only changes provided ones.
   *
   * Data can include: {name}
   *
   * Returns {handle, name}
   *
   * Throws NotFoundError if not found.
   */

    static async update(handle, data) {
        const { setCols, values } = sqlForPartialUpdate(data, {});
        const handleVarIdx = "$" + (values.length + 1);

        const querySql  = `UPDATE categories
                           SET ${setCols}
                           WHERE handle = ${handleVarIdx}
                           RETURNING handle,
                                     name`;
        const result = await db.query(querySql, [...values, handle]);
        const category = result.rows[0];

        if (!category) throw new NotFoundError(`No category: ${handle}`);

        return category;
    }

  /** Delete given category from database; returns undefined.
   *
   * Throws NotFoundError if category not found.
   **/

    static async remove(handle) {
        const result = await db.query(
            `DELETE
                FROM categories
                WHERE handle = $1
                RETURNING handle`,
            [handle]
        );
        const category = result.rows[0];

        if (!category) throw new NotFoundError(`No category: ${handle}`);
    }
}

module.exports = Category;