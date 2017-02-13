--
-- 1. One to Many
--
DROP TABLE 'E1';
CREATE TABLE 'E1' (
  'E1_ID' int(10) NOT NULL,
  PRIMARY KEY ('E1_ID')
)

DROP TABLE 'E2';
CREATE TABLE 'E2' (
  'E2_ID' int(10) NULL,
  PRIMARY KEY ('E2_ID')
)
--
-- 2. Many to Many
--
DROP TABLE 'E1';
CREATE TABLE 'E1' (
  'E1_ID' int(10) NULL,
  PRIMARY KEY ('E1_ID')
)

DROP TABLE 'E2';
CREATE TABLE 'E2' (
  'E2_ID' int(10) NULL,
  PRIMARY KEY ('E2_ID')
)

DROP TABLE 'E0';
CREATE TABLE 'E0' (
  'E0_STUFF' int(10) NULL,
  PRIMARY KEY ('E0_STUFF'),
  FOREIGN KEY('E1_ID') REFERENCES 'E1'('E1_ID'),
  FOREIGN KEY('E2_ID') REFERENCES 'E2'('E2_ID')
)

--
-- 3 One to One
--
DROP TABLE 'E1';
CREATE TABLE 'E1' (
  'E1_ID' int(10) NULL,
  PRIMARY KEY ('E1_ID')
)

DROP TABLE 'E2';
CREATE TABLE 'E2' (
  'E2_ID' int(10) NULL,
  PRIMARY KEY ('E2_ID')
)