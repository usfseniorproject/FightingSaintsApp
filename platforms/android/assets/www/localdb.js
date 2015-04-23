
var Rosters = {};
Rosters.webdb = {};
Rosters.webdb.db = null;
Rosters.webdb.open = function (){
	var dbsize = 5 * 1024;
	Rosters.webdb.db = openDatabase("Rosters","1.0","Roster Manager",dbsize);
	}
/*
	This function creates the initial tables for the roster databases. 
	Old tables are dropped to ensure new data is inserted into a clean
	table.  
*/
Rosters.webdb.createTable = function (){
	var db = Rosters.webdb.db;
	
	db.transaction(function(e) {
	var query = "DROP TABLE IF EXISTS m_bowling";
    e.executeSql(query);
	var query = "DROP TABLE IF EXISTS m_basketball";
    e.executeSql(query);
	var query = "DROP TABLE IF EXISTS w_basketball";
    e.executeSql(query);
	var query = "DROP TABLE IF EXISTS m_soccer";
    e.executeSql(query);
	var query = "DROP TABLE IF EXISTS w_soccer";
    e.executeSql(query);
	var query = "DROP TABLE IF EXISTS volleyball";
    e.executeSql(query);
	var query = "DROP TABLE IF EXISTS softball";
    e.executeSql(query);
	var query = "DROP TABLE IF EXISTS baseball";
    e.executeSql(query);
	var query = "DROP TABLE IF EXISTS football";
    e.executeSql(query);
    /***************4-7-2015*********************/
    var query = "DROP TABLE IF EXISTS m_track";
    e.executeSql(query);
    var query = "DROP TABLE IF EXISTS w_track";
    e.executeSql(query);
    var query = "DROP TABLE IF EXISTS m_cross_country";
    e.executeSql(query);
    var query = "DROP TABLE IF EXISTS w_cross_country";
    e.executeSql(query);
    var query = "DROP TABLE IF EXISTs m_bowling";
    e.executeSql(query);
    var query = "DROP TABLE IF EXISTS w_bowling";
    e.executeSql(query);
    var query = "DROP TABLE IF EXISTS m_golf";
    e.executeSql(query);
    var query = "DROP TABLE IF EXISTS w_golf";
    e.executeSql(query);
    var query = "DROP TABLE IF EXISTS m_tennis";
    e.executeSql(query);
    var query = "DROP TABLE IF EXISTS w_tennis";
    e.executeSql(query);
    var query = "DROP TABLE IF EXISTS cheerleading";
    e.executeSql(query);
	
	
	e.executeSql("CREATE TABLE IF NOT EXISTS m_bowling(ID INTEGER PRIMARY KEY ASC,Name TEXT,Player_Number TEXT,Class_Name TEXT,Hometown TEXT, OurID TEXT, picLink TEXT)", []);
	e.executeSql("CREATE TABLE IF NOT EXISTS m_basketball(ID INTEGER PRIMARY KEY ASC,Name TEXT,Player_Number TEXT,Class_Name TEXT,Position TEXT,Height TEXT, Weight TEXT, Hometown TEXT, OurID TEXT, picLink TEXT)", []);
	e.executeSql("CREATE TABLE IF NOT EXISTS w_basketball(ID INTEGER PRIMARY KEY ASC,Name TEXT,Player_Number TEXT,Class_Name TEXT,Position TEXT,Height TEXT, Weight TEXT, Hometown TEXT, OurID TEXT, picLink TEXT)", []);
	e.executeSql("CREATE TABLE IF NOT EXISTS m_soccer(ID INTEGER PRIMARY KEY ASC,Name TEXT,Player_Number TEXT,Class_Name TEXT,Position TEXT,Height TEXT, Weight TEXT, Hometown TEXT, OurID TEXT, picLink TEXT)", []);
    e.executeSql("CREATE TABLE IF NOT EXISTS w_soccer(ID INTEGER PRIMARY KEY ASC,Name TEXT,Player_Number TEXT,Class_Name TEXT,Position TEXT,Height TEXT, Weight TEXT, Hometown TEXT, OurID TEXT, picLink TEXT)", []);
	e.executeSql("CREATE TABLE IF NOT EXISTS volleyball(ID INTEGER PRIMARY KEY ASC,Name TEXT,Player_Number TEXT,Class_Name TEXT,Position TEXT,Height TEXT, Weight TEXT, Hometown TEXT, OurID TEXT, picLink TEXT)", []);
	e.executeSql("CREATE TABLE IF NOT EXISTS softball(ID INTEGER PRIMARY KEY ASC,Name TEXT,Player_Number TEXT,Class_Name TEXT,Position TEXT,Height TEXT, Weight TEXT, Hometown TEXT, OurID TEXT, picLink TEXT)", []);
	e.executeSql("CREATE TABLE IF NOT EXISTS baseball(ID INTEGER PRIMARY KEY ASC,Name TEXT,Player_Number TEXT,Class_Name TEXT,Position TEXT,Height TEXT, Weight TEXT, Hometown TEXT, OurID TEXT, picLink TEXT)", []);
	e.executeSql("CREATE TABLE IF NOT EXISTS football(ID INTEGER PRIMARY KEY ASC,Name TEXT,Player_Number TEXT,Class_Name TEXT,Position TEXT,Height TEXT, Weight TEXT, Hometown TEXT, OurID TEXT, picLink TEXT)", []);
	/*************************4-7-2015*************************************/
	e.executeSql("CREATE TABLE IF NOT EXISTS m_track(ID INTEGER PRIMARY KET ASC, Name TEXT, Class TEXT, Hometown TEXT, High_School TEXT, piclink TEXT", []);
	e.executeSql("CREATE TABLE IF NOT EXISTS w_track(ID INTEGER PRIMARY KEY ASC, Name TEXT, Class TEXT, Hometown TEXT, High_School TEXT, picLink TEXT", []);
	e.executeSql("CREATE TABLE IF NOT EXISTS m_cross_country(ID INTEGER PRIMARY KEY ASC, Name TEXT, Class TEXT, Hometown TEXT, High_School TEXT, picLink TEXT", []);
	e.executeSql("CREATE TABLE IF NOT EXISTS w_cross_country(ID INTEGER PRIMARY KEY ASC, Name TEXT, Class TEXT, Hometown TEXT, High_School TEXT, picLink TEXT", []);
	e.executeSql("CREATE TABLE IF NOT EXISTS m_bowling(ID INTEGER PRIMARY KEY ASC, Number INTEGER, Name TEXT, Class TEXT, Hometown TEXT, High_School TEXT, picLink TEXT", []);
	e.executeSql("CREATE TABLE IF NOT EXISTS w_bowling(ID INTEGER PRIMARY KEY ASC, Number INTEGER, Name TEXT, Class TEXT, Hometown TEXT, High_School TEXT, picLink TEXT", []);
	e.executeSql("CREATE TABLE IF NOT EXISTS m_golf(ID INTEGER PRIMARY KEY ASC, Name TEXT, Class TEXT, Hometown TEXT, High_School TEXT, picLink TEXT", []);
	e.executeSql("CREATE TABLE IF NOT EXISTS w_golf(ID INTEGER PRIMARY KEY ASC, Name TEXT, Class TEXT, Hometown TEXT, High_School TEXT, picLink TEXT", []);
	e.executeSql("CREATE TABLE IF NOT EXISTS m_tennis(ID INTEGER PRIMARY KEY ASC, Name TEXT, Class TEXT, Position TEXT, Height TEXT, Weight TEXT, Hometown TEXT, High_School TEXT, picLink TEXT",[]);
	e.executeSql("CREATE TABLE IF NOT EXISTS w_tennis(ID INTEGER PRIMARY KEY ASC, Name TEXT, Class TEXT, Position TEXT, Height TEXT, Weight TEXT, Hometown TEXT, High_School TEXT, picLink TEXT",[]);
	e.executeSql("CREATE TABLE IF NOT EXISTS cheerleading(ID INTEGER PRIMARY KEY ASC, Name TEXT, Class TEXT, Hometown TEXT, High_School TEXT, picLink TEXT", []);
	
	});
}


/*
	This function adds individual players to their respective sport's tables.
*/
Rosters.webdb.addRoster = function (pname,pnumber,cname,pos,pheight,pweight,oid,htown,picLink){
	
	
	var len = localStorage["len"];
	
	var db = Rosters.webdb.db;
	var name = pname;
	var player_number = pnumber;
	var class_name = cname;
	var position = pos; 
	var height = pheight;
	var weight = pweight;
	var hometown = htown;
	var ourid = oid;
	var tableName = localStorage["tableName"]
	
	if(tableName == "m_bowling"){
		console.log("Adding things to the database");
		db.transaction(function(e){
			e.executeSql("INSERT INTO m_bowling(Name,Player_Number,Class_Name,Hometown,OurID,picLink) VALUES (?,?,?,?,?,?)",
				[name,player_number,class_name,hometown,ourid,picLink],
				Rosters.webdb.onSuccess,
				Rosters.webdb.onError)
		});	
	}
	if(tableName == "m_basketball"){
	db.transaction(function(e){
		
		
		e.executeSql("INSERT INTO m_basketball(Name,Player_Number,Class_Name,Position,Height,Weight,Hometown,OurID,picLink) VALUES (?,?,?,?,?,?,?,?,?)",
			[name,player_number,class_name,position,height,weight,hometown,ourid,picLink],
			Rosters.webdb.onSuccess,
			Rosters.webdb.onError)
		});
	}
	
	if(tableName == "w_basketball"){
	db.transaction(function(e){
		
		
		e.executeSql("INSERT INTO w_basketball(Name,Player_Number,Class_Name,Position,Height,Weight,Hometown,OurID,picLink) VALUES (?,?,?,?,?,?,?,?,?)",
			[name,player_number,class_name,position,height,weight,hometown,ourid,picLink],
			Rosters.webdb.onSuccess,
			Rosters.webdb.onError)
		});
	}
	
	if(tableName == "m_soccer"){
	db.transaction(function(e){
		
		
		e.executeSql("INSERT INTO m_soccer(Name,Player_Number,Class_Name,Position,Height,Weight,Hometown,OurID,picLink) VALUES (?,?,?,?,?,?,?,?,?)",
			[name,player_number,class_name,position,height,weight,hometown,ourid,picLink],
			Rosters.webdb.onSuccess,
			Rosters.webdb.onError)
		});
	}
	if(tableName == "w_soccer"){
	db.transaction(function(e){
		
		
		e.executeSql("INSERT INTO w_soccer(Name,Player_Number,Class_Name,Position,Height,Weight,Hometown,OurID,picLink) VALUES (?,?,?,?,?,?,?,?,?)",
			[name,player_number,class_name,position,height,weight,hometown,ourid,picLink],
			Rosters.webdb.onSuccess,
			Rosters.webdb.onError)
		});
	}
	if(tableName == "volleyball"){
	db.transaction(function(e){
		
		
		e.executeSql("INSERT INTO volleyball(Name,Player_Number,Class_Name,Position,Height,Weight,Hometown,OurID,picLink) VALUES (?,?,?,?,?,?,?,?,?)",
			[name,player_number,class_name,position,height,weight,hometown,ourid,picLink],
			Rosters.webdb.onSuccess,
			Rosters.webdb.onError)
		});
	}
	if(tableName == "softball"){
	db.transaction(function(e){
		
		
		e.executeSql("INSERT INTO softball(Name,Player_Number,Class_Name,Position,Height,Weight,Hometown,OurID,picLink) VALUES (?,?,?,?,?,?,?,?,?)",
			[name,player_number,class_name,position,height,weight,hometown,ourid,picLink],
			Rosters.webdb.onSuccess,
			Rosters.webdb.onError)
		});
	}
	if(tableName == "baseball"){
	db.transaction(function(e){
		e.executeSql("INSERT INTO baseball(Name,Player_Number,Class_Name,Position,Height,Weight,Hometown,OurID,picLink) VALUES (?,?,?,?,?,?,?,?,?)",
			[name,player_number,class_name,position,height,weight,hometown,ourid,picLink],
			Rosters.webdb.onSuccess,
			Rosters.webdb.onError)
		});
	}
	if(tableName == "football"){
		db.transaction(function(e){
			e.executeSql("INSERT INTO football(Name,Player_Number,Class_Name,Position,Height,Weight,Hometown,OurID,picLink) VALUES (?,?,?,?,?,?,?,?,?)",
				[name,player_number,class_name,position,height,weight,hometown,ourid,picLink],
				Rosters.webdb.onSuccess,
				Rosters.webdb.onError)
		});
	}
	/***********4-7-2015************/
	if (tableName == "m_track") {
		db.transaction(function(e) {
			e.executeSql("INSERT INTO m_track(Name, Class, Hometown, High_School, picLink) VALUES (?,?,?,?,?)",
					[name, Class, hometown, High_School, picLink ],
					Rosters.webd.onSuccess,
					Rosters.webd.onError)
		});
	}
	if (tableName == "w_track") {
		db.transaction(function(e) {
			e.executeSql("INSERT INTO w_track(Name, Class, Hometown, High_School, picLink) VALUES (?,?,?,?,?)",
					[name, Class, hometown, High_School, picLink ],
					Rosters.webd.onSuccess,
					Rosters.webd.onError)
		});
	}
	if (tableName == "m_cross_country") {
		db.transaction(function(e) {
			e.executeSql("INSERT INTO m_cross_country(Name, Class, Hometown, High_School, picLink) VALUES (?,?,?,?,?)",
				[name, Class,hometown,High_School, piclink],
				Rosters.webd.onSuccess,
				Rosters.webd.onError)
		});
	}
	if (tableName == "w_cross_country") {
		db.transaction(function(e) {
			e.executeSql("INSERT INTO w_cross_country(Name, Class, Hometown, High_School, picLink) VALUES (?,?,?,?,?)",
				[name, Class,hometown,High_School, piclink],
				Rosters.webd.onSuccess,
				Rosters.webd.onError)
		});
	}
	if (tableName == "m_bowling") {
		db.transaction(function(e) {
			e.executeSql("INSERT INTO m_bowling(Number, Name, Class, Hometown, High_School, picLink) VALUES (?,?,?,?,?,?)",
				[number, name, Class, hometown, High_School,picLink],
				Rosters.webd.onSuccess,
				Rosters.webd.onError)
		});
	}
	if (tableName == "w_bowling") {
		db.transaction(function(e) {
			e.executeSql("INSERT INTO w_bowling(Number, Name, Class, Hometown, High_School, picLink) VALUES (?,?,?,?,?,?)",
				[number, name, Class, hometown, High_School,picLink],
				Rosters.webd.onSuccess,
				Rosters.webd.onError)
		});
	}
	if (tableName == "m_golf") {
		db.transaction(function(e) {
			e.executeSql("INSERT INTO m_golf(Name, Class, Hometown, High_School, picLink) VALUES (?,?,?,?,?)",
				[name, Class, hometown, High_School, picLink],
				Rosters.webd.onSuccess,
				Rosters.webd.onError)
		});
	}
	if (tableName == "w_golf") {
		db.transaction(function(e) {
			e.executeSql("INSERT INTO w_golf(Name, Class, Hometown, High_School, picLink) VALUES (?,?,?,?,?)",
				[name, Class, hometown, High_School, picLink],
				Rosters.webd.onSuccess,
				Rosters.webd.onError)
		});
	}
	if (tableName == "m_tennis") {
		db.transaction(function(e) {
			e.executeSql("INSERT INTO m_tennis(Name, Class, Position, Height, Weight, Hometown, High_School, picLink) VALUES (?,?,?,?,?)",
				[name, Class, position, height, weight, hometown, High_School, picLink],
				Rosters.webd.onSuccess,
				Rosters.webd.onError)
		});
	}
	if (tableName == "w_tennis") {
		db.transaction(function(e) {
			e.executeSql("INSERT INTO w_tennis(Name, Class, Position, Height, Weight, Hometown, High_School, picLink) VALUES (?,?,?,?,?)",
				[name, Class, position, height, weight, hometown, High_School, picLink],
				Rosters.webd.onSuccess,
				Rosters.webd.onError)
		});
	}
	if (tableName == "cheerleading") {
		db.transaction(function(e) {
			e.executeSql("INSERT INTO cheerleading(Name, Class, Hometown, High_School, picLink) VALUES (?,?,?,?,?)",
				[name, Class, hometown, High_School, picLink],
				Rosters.webd.onSuccess,
				Rosters.webd.onError)
		});
	}
}

/*
	Generic error handling function.
*/
Rosters.webdb.onError = function(tx, e) {
alert("There has been an error: " + e.message);
}
Rosters.webdb.onSuccess = function(tx, r) {

}

/*
	This function retrives all of the information from a 
	specific roster table.
*/
Rosters.webdb.getAllRosters = function(renderFunc) {
var db = Rosters.webdb.db;
var tableName = localStorage["tableName"]
db.transaction(function(e) {
  e.executeSql("SELECT * FROM ?", [tableName], Rosters.webdb.onSuccess,
	  Rosters.webdb.onError);
});
}

/*
	This function opens the roster database and creates the tables for it.
*/
function init() {

Rosters.webdb.open();
Rosters.webdb.createTable();

}

/*
	This function calls the addRoster function.
*/
function addRoster(pname,pnumber,cname,pos,pheight,pweight,oid,htown,picLink) {
	Rosters.webdb.addRoster(pname,pnumber,cname,pos,pheight,pweight,oid,htown,picLink);
}

	

