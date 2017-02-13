DROP TABLE TEAMS;
CREATE TABLE TEAMS
(
  TeamID INT NOT NULL,
  TeamName VARCHAR(50) NOT NULL,
  TeamCountry VARCHAR(50) NOT NULL,
  PRIMARY KEY (TeamID)
);

DROP TABLE MATCHES;
CREATE TABLE MATCHES
(
  MatchID INT NOT NULL,
  TeamA_ID INT NOT NULL,
  TeamB_ID INT NOT NULL,
  Goal_A INT NOT NULL,
  Goal_B INT NOT NULL,
  Competition VARCHAR(50) NOT NULL,
  PRIMARY KEY (MatchID)
);

--SELECT * FROM TEAMS;
--SELECT * FROM MATCHES;

INSERT INTO TEAMS (TeamID, TeamName, TeamCountry) VALUES ('1', 'Arsenal', 'England');
INSERT INTO TEAMS (TeamID, TeamName, TeamCountry) VALUES ('2', 'Manchester United', 'England');
INSERT INTO TEAMS (TeamID, TeamName, TeamCountry) VALUES ('3', 'Chelsea', 'England');
INSERT INTO TEAMS (TeamID, TeamName, TeamCountry) VALUES ('4', 'Manchester City', 'England');
INSERT INTO TEAMS (TeamID, TeamName, TeamCountry) VALUES ('5', 'Barcelona', 'Spain');
INSERT INTO TEAMS (TeamID, TeamName, TeamCountry) VALUES ('6', 'Real Madrid', 'Spain');
INSERT INTO TEAMS (TeamID, TeamName, TeamCountry) VALUES ('7', 'Getafe', 'Spain');
INSERT INTO TEAMS (TeamID, TeamName, TeamCountry) VALUES ('8', 'Seville', 'Spain');


-- a)
CREATE OR REPLACE TRIGGER test_TABLE_ENTRY
AFTER INSERT OR UPDATE ON TEAMS
BEGIN
  IF Inserting 
    THEN INSERT INTO TABLE_ENTRY VALUES('new', TEAMS);
  ELSE
    INSERT INTO TABLE_ENTRY VALUES('update done', TEAMS);
  END IF;
END;

-- b)
SELECT * FROM MATCHES
WHERE Competition='Champions League' OR 'Europa League' OR 'Premier League' OR 'La Liga';

-- c)
SELECT * FROM MATCHES
WHERE Country='Spain' OR 'England';

-- d)
SELECT * FROM MATCHES
WHERE COUNT('Goals') >= 0;

-- e)
CREATE OR REPLACE TRIGGER test_MATCH_ENTRY
AFTER INSERT OR UPDATE ON MATCHES
BEGIN
	IF 'Premier League' OR 'La Liga'
		THEN SELECT 'England' OR 'Spain';
END;

-- f)
CREATE OR REPLACE TRIGGER test_MATCH_MATCHES
AFTER INSERT OR UPDATE ON MATCHES
BEGIN
	IF COUNT('Goals') >= 3
		THEN SELECT Country;
END;