CREATE TABLE Application
(
  ApplicationNo INT NOT NULL,
  ApplicationYear DATE NOT NULL,
  PRIMARY KEY (ApplicationNo)
);

CREATE TABLE Student
(
  StudentID INT NOT NULL,
  StudentName VARCHAR(50) NOT NULL,
  Street VARCHAR(100) NOT NULL,
  State VARCHAR(50) NOT NULL,
  ZipCode VARCHAR(50) NOT NULL,
  ApplicationNo INT NOT NULL,
  PRIMARY KEY (StudentID),
  FOREIGN KEY (ApplicationNo) REFERENCES Application(ApplicationNo)
);

CREATE TABLE PriorSchool
(
  PriorSchoolID INT NOT NULL,
  PriorSchoolAddress VARCHAR(100) NOT NULL,
  GPA FLOAT NOT NULL,
  StudentID INT NOT NULL,
  PRIMARY KEY (PriorSchoolID),
  FOREIGN KEY (StudentID) REFERENCES Student(StudentID)
);

CREATE TABLE Reference
(
  ReferenceName VARCHAR(50) NOT NULL,
  ReferenceInstitution VARCHAR(50) NOT NULL,
  ReferenceState VARCHAR(50) NOT NULL,
  ReferenceID INT NOT NULL,
  PriorSchoolID INT NOT NULL,
  StudentID INT NOT NULL,
  ApplicationNo INT NOT NULL,
  PRIMARY KEY (ReferenceID),
  FOREIGN KEY (PriorSchoolID) REFERENCES PriorSchool(PriorSchoolID),
  FOREIGN KEY (StudentID) REFERENCES Student(StudentID),
  FOREIGN KEY (ApplicationNo) REFERENCES Application(ApplicationNo)
);