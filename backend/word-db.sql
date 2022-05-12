\echo 'Delete and recreate word-generator db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE word_generator_db;
CREATE DATABASE word_generator_db;
\connect word_generator_db

\i word-schema.sql
\i word-db-seed.sql

\echo 'Delete and recreate word_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE IF EXISTS word_test;
CREATE DATABASE word_test;
\connect word_test

\i word-schema.sql
