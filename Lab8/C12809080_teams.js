/*2.
- db.C12809080_teams.update({"name": "Manchester United"}, {$push: {"players": {"p_id": "Keane", "goal": "33", "caps": "125", "age": "44"}}}).pretty()

- db.C12809080_teams.update({"name": "AC Milan"}, {$push: {"players": {"p_id": "Kaka", "goal": "53", "caps": "112", "age": "32"}}}).pretty()

3. db.C12809080_teams.find({$or: [{"league": "Serie A"}, {"league": "Premier League"}, {"league": "La Liga"}]}).sort({"date_founded": 1}).limit(1).pretty()

4. db.C12809080_teams.update({"name": "Real Madrid"}, {$inc: {"players": {"players.goal": 2}}})  // Increment the goals of each player in the Real Madrid team

5. CURSORRRRRR

6. db.C12809080_teams.update({"name": "Arsenal"}, {$set: {"points": "80"}}) // Setting the points of Arsenal to 80 to equal as Barca

7. db.C12809080_teams.find({"players": {"players.age": {"$gt": 30}}}).sort("p_id: 5") // If the Age of a player is over 30 than give the names sorting with the p_id

8. db.C12809080_teams.aggregate([{$group: "league", $totalPoints: { $sum: {$multiply: ["$points"]}}, count: {$sum: 1}}]) // Listing the total sum of points scored in each league

9. db.C12809080_teams.find({"points": {"$lte": 100}}).sort({"points": -1}) // Points less than hundred, sort the points in descending order
	
10. Compute the average number of goal per match per player and store the output in a collection 
named student_id_avg_goals. 
db.C12809080_teams.aggregate([{"players": {$avg: {"players.goal"}}}.sort({"players" : {"players.p_id"}}), {$out: "C12809080_avg_goals"}]) // Gets the average of all the goals and sorts them by the players and puts them out
*/
/* 1 */
db.C12809080_teams.insert({
	team_id: "eng1",
	date_founded: new Date("Oct 04, 1896"),
     league: "Premier League",
	 points: 62,
	 name: "Manchester United",
     players: [ { p_id: "Rooney", goal: 85, caps: 125, age: 28 },
              { p_id: "Scholes", goal: 15, caps: 225, age: 28 },
			  { p_id: "Giggs", goal: 45, caps: 359, age: 38 } ]
	 });

db.C12809080_teams.insert({
	team_id: "eng2",
	date_founded: new Date("Oct 04, 1899"),
     league: "Premier League",
	 points: 52,
	 name: "Arsenal",
     players: [ { p_id: "Mata", goal: 5, caps: 24, age: 27 },
              { p_id: "Bergkamp", goal: 95, caps: 98, age: 48 } ]
	 });

db.C12809080_teams.insert({
	team_id: "eng3",
	date_founded: new Date("Oct 04, 1912"),
     league: "Premier League",
	 points: 65,
	 name: "Chelsea",
     players: [ { p_id: "Costa", goal: 15, caps: 25, age: 28 },
              { p_id: "Ivanov", goal: 5, caps: 84, age: 28 },
			  { p_id: "Drogba", goal: 105, caps: 125, age: 35 } ]
	 });

db.C12809080_teams.insert({
	team_id: "spa1",
	date_founded: new Date("Oct 04, 1912"),
     league: "La Liga",
	 points: 80,
	 name: "Barcelona",
     players: [ { p_id: "Messi", goal: 195, caps: 189, age: 30 },
              { p_id: "Valdes", goal: 0, caps: 158, age: 27 },
			  { p_id: "Iniesta", goal: 72, caps: 25, age: 31},
			  { p_id: "Pique", goal: 9, caps: 201, age: 38 } ]
	 });

db.C12809080_teams.insert({
	team_id: "spa2",
	date_founded: new Date("Nov 04, 1914"),
     league: "La Liga",
	 points: 72,
	 name: "Real Madrid",
     players: [ { p_id: "Ronaldo", goal: 135, caps: 134, age: 28 },
				 { p_id: "Bale", goal: 75, caps: 45, age: 27 },
				 { p_id: "Marcelo", goal: 11, caps: 25, age: 31 },
              { p_id: "Benzema", goal: 125, caps: 95, age: 22 } ]
	 });

db.C12809080_teams.insert({
	team_id: "spa3",
	date_founded: new Date("Oct 04, 1912"),
     league: "La liga",
	 points: 68,
	 name: "Valencia",
     players: [ { p_id: "Martinez", goal: 26, caps: 54, age: 21 },
              { p_id: "Aimar", goal: 45, caps: 105, age: 29 } ]
	 });

db.C12809080_teams.insert({
	team_id: "ita1",
	date_founded: new Date("Oct 04, 1922"),
     league: "Serie A",
	 points: 69,
	 name: "Roma",
     players: [ { p_id: "Totti", goal: 198, caps: 350, age: 35 },
              { p_id: "De Rossi", goal: 5, caps: 210, age: 30 },
			  { p_id: "Gervinho", goal: 43, caps: 57, age: 24 } ]
	 });

db.C12809080_teams.insert({
	team_id: "ita2",
	date_founded: new Date("Oct 04, 1899"),
     league: "Serie A",
	 points: 52,
	 name: "Juventus",
     players: [ { p_id: "Buffon", goal: 0, caps: 225, age: 37 },
              { p_id: "Pirlo", goal: 45, caps: 199, age: 35 },
			  { p_id: "Pogba", goal: 21, caps: 42, age: 20 } ]
	 });

db.teams.insert({
	team_id: "ita3",
	date_founded: new Date("Oct 04, 1911"),
     league: "Serie A",
	 points: 62,
	 name: "AC Milan",
     players: [ { p_id: "Inzaghi", goal: 115, caps: 189, age: 35 },
              { p_id: "Abbiati", goal: 0, caps: 84, age: 24 },
			  { p_id: "Van Basten", goal: 123, caps: 104, age: 35 } ]
	 });

db.C12809080_teams.insert({
	team_id: "ita4",
	date_founded: new Date("Oct 04, 1902"),
     league: "Serie A",
	 points: 71,
	 name: "Inter Milan",
     players: [ { p_id: "Handanovic", goal: 0, caps: 51, age: 29 },
              { p_id: "Cambiasso", goal: 35, caps: 176, age: 35 },
			  { p_id: "Palacio", goal: 78, caps: 75, age: 31 } ]
	 });
	 