/*
1. db.C12809080_schema.find({"Course.Mark": {"$lte": "40"}}).pretty()

2. db.C12809080_schema.find({"Course.Mark": {"$gte": "40"}, $and: [{"Course.Course_id": "DB"}, {"Course.Course_id": "MA"},
{"Course.Course_id": "PR"}]}).pretty() // Marks greater than equal to 40 in each of the 3 courses resulted in showing the people who had passed

3. db.C12809080_schema.aggregate([
{ $project : { markAvg: {$avg: ["Course": {"Course.Mark", "Course.Mark", "Course.Mark", "Course.$Mark"}]}}}]).sort({"student_id": "1"}).pretty() // Add up the marks in each course to find the highest average and sort them with the student with the highest average */


// Code for the JSON objects
db.C12809080_schema.insert({
    "Student": {
		Student_id: "1",
		Name: "Mary",
		Surname: "Murray",
		Nationality: "Irish",
		Age: "45",
	},
		
		"Course": [
		{
			Course_id: "DB",
			Course_name: "Databases",
			Credits: "10",
			Mark: "56",
			Exam_date: "10/10/2011"
		},
		{
			Course_id: "MA",
			Course_name: "Maths",
			Credits: "5",
			Mark: "76",
			Exam_date: "09/11/2012"
		},
		{
			Course_id: "PR",
			Course_name: "Programming",
			Credits: "15",
			Mark: "45",
			Exam_date: "02/07/2014"
		},
		
		]
});

db.C12809080_schema.insert({
    "Student": {
		Student_id: "2",
		Name: "Bill",
		Surname: "Bellichick",
		Nationality: "American",
		Age: "32",
	},
		
		"Course": [
		{
			Course_id: "DB",
			Course_name: "Databases",
			Credits: "10",
			Mark: "55",
			Exam_date: "10/10/2011"
		},
		{
			Course_id: "MA",
			Course_name: "Maths",
			Credits: "5",
			Mark: "87",
			Exam_date: "09/11/2012"
		},
		{
			Course_id: "PR",
			Course_name: "Programming",
			Credits: "15",
			Mark: "45",
			Exam_date: "10/10/2011"
		},
		
		]
});

db.C12809080_schema.insert({
    "Student": {
		Student_id: "3",
		Name: "Tom",
		Surname: "Brady",
		Nationality: "Canadian",
		Age: "22",
	},
		
		"Course": [
		{
			Course_id: "DB",
			Course_name: "Databases",
			Credits: "10",
			Mark: "34",
			Exam_date: "09/11/2012"
		},
		{
			Course_id: "MA",
			Course_name: "Maths",
			Credits: "5",
			Mark: "56",
			Exam_date: "02/07/2014"
		},
		{
			Course_id: "PR",
			Course_name: "Programming",
			Credits: "15",
			Mark: "0",
			Exam_date: "00/00/0000"
		},
		
		]
});

db.C12809080_schema.insert({
    "Student": {
		Student_id: "4",
		Name: "John",
		Surname: "Bale",
		Nationality: "English",
		Age: "24",
	},
		
		"Course": [
		{
			Course_id: "DB",
			Course_name: "Databases",
			Credits: "10",
			Mark: "71",
			Exam_date: "10/10/2011"
		},
		{
			Course_id: "MA",
			Course_name: "Maths",
			Credits: "5",
			Mark: "88",
			Exam_date: "10/10/2011"
		},
		{
			Course_id: "PR",
			Course_name: "Programming",
			Credits: "15",
			Mark: "95",
			Exam_date: "09/11/2012"
		},
		
		]
});