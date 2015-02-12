
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
	
	
	e.executeSql("CREATE TABLE IF NOT EXISTS m_basketball(ID INTEGER PRIMARY KEY ASC,Name TEXT,Player_Number TEXT,Class_Name TEXT,Position TEXT,Height TEXT, Weight TEXT, Hometown TEXT, OurID TEXT, picLink TEXT)", []);
	e.executeSql("CREATE TABLE IF NOT EXISTS w_basketball(ID INTEGER PRIMARY KEY ASC,Name TEXT,Player_Number TEXT,Class_Name TEXT,Position TEXT,Height TEXT, Weight TEXT, Hometown TEXT, OurID TEXT, picLink TEXT)", []);
	e.executeSql("CREATE TABLE IF NOT EXISTS m_soccer(ID INTEGER PRIMARY KEY ASC,Name TEXT,Player_Number TEXT,Class_Name TEXT,Position TEXT,Height TEXT, Weight TEXT, Hometown TEXT, OurID TEXT, picLink TEXT)", []);
    e.executeSql("CREATE TABLE IF NOT EXISTS w_soccer(ID INTEGER PRIMARY KEY ASC,Name TEXT,Player_Number TEXT,Class_Name TEXT,Position TEXT,Height TEXT, Weight TEXT, Hometown TEXT, OurID TEXT, picLink TEXT)", []);
	e.executeSql("CREATE TABLE IF NOT EXISTS volleyball(ID INTEGER PRIMARY KEY ASC,Name TEXT,Player_Number TEXT,Class_Name TEXT,Position TEXT,Height TEXT, Weight TEXT, Hometown TEXT, OurID TEXT, picLink TEXT)", []);
	e.executeSql("CREATE TABLE IF NOT EXISTS softball(ID INTEGER PRIMARY KEY ASC,Name TEXT,Player_Number TEXT,Class_Name TEXT,Position TEXT,Height TEXT, Weight TEXT, Hometown TEXT, OurID TEXT, picLink TEXT)", []);
	e.executeSql("CREATE TABLE IF NOT EXISTS baseball(ID INTEGER PRIMARY KEY ASC,Name TEXT,Player_Number TEXT,Class_Name TEXT,Position TEXT,Height TEXT, Weight TEXT, Hometown TEXT, OurID TEXT, picLink TEXT)", []);
	e.executeSql("CREATE TABLE IF NOT EXISTS football(ID INTEGER PRIMARY KEY ASC,Name TEXT,Player_Number TEXT,Class_Name TEXT,Position TEXT,Height TEXT, Weight TEXT, Hometown TEXT, OurID TEXT, picLink TEXT)", []);
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

//var prayers = document.getElementById("prayers");
Rosters.webdb.addRoster(pname,pnumber,cname,pos,pheight,pweight,oid,htown,picLink);
//prayers.value = "";
}

	

