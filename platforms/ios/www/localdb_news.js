
var News = {};
News.webdb = {};
News.webdb.db = null;
News.webdb.open = function (){
	var dbsize = 5 * 1024;
	News.webdb.db = openDatabase("News","1.0","News Manager",dbsize);
	}

News.webdb.createTable = function (){
	var db = News.webdb.db;
	
	db.transaction(function(e) {
	var query = "DROP TABLE IF EXISTS news";
    e.executeSql(query);
	
	e.executeSql("CREATE TABLE IF NOT EXISTS news(ID INTEGER PRIMARY KEY ASC,Title TEXT,Body TEXT,Sport TEXT,Photo_URL TEXT,Photo_Caption TEXT)", []);
	
	});
	}



function addNews(Title,Body,Sport,Photo_URL,Photo_Caption){
	
	var len = localStorage["len"];
	var db = News.webdb.db;
	var articleTitle = Title;
	var articleBody = Body;
	var articleSport = Sport;
	var photoLink = Photo_URL; 
	var photoCaption = Photo_Caption;
	var tableName = localStorage["tableName"]
	
	db.transaction(function(e){
		
		e.executeSql("INSERT INTO news(Title,Body,Sport,Photo_URL,Photo_Caption) VALUES (?,?,?,?,?)",
			[articleTitle,articleBody,articleSport,photoLink,photoCaption],
			News.webdb.onSuccess,
			News.webdb.onError)
	});
	
	}
	
News.webdb.onError = function(tx, e) {
alert("There has been an error: " + e.message);
}
News.webdb.onSuccess = function(tx, r) {
console.log(r);
}

function init() {

News.webdb.open();
News.webdb.createTable();

}


