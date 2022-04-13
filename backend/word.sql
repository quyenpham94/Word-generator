\echo 'Delete and recreate jobly db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE word-generator;
CREATE DATABASE word-generator;
\connect word-generator

\i word-schema.sql
\i word-seed.sql

\echo 'Delete and recreate word_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE word;
CREATE DATABASE word_test;
\connect word_test

\i word-schema.sql