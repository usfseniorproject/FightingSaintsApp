/*
	This function takes in a time and returns converted military time.
	It will be used when we compare it to the current hour to see if 
	a game has started.
	
*/
function timeConverter(time){
	if(time.match(/PM/g)){
		var newTime = time.substring(0,time.indexOf(":"));
		var temp = parseInt(newTime);
		if(temp != 12){
		temp = temp + 12;	
			}
		
		newTime = temp.toString();
		return newTime;
		}
	if(time.match(/pm/g)){
		var newTime = time.substring(0,time.indexOf(":"));
		var temp = parseInt(newTime);
		if(temp != 12){
		temp = temp + 12;	
			}
		
		newTime = temp.toString();
		return newTime;
		}
	if(time.match(/AM/g)){
		var newTime = time.substring(0,time.indexOf(":"));
		return newTime;
		}
	if(time.match(/am/g)){
		var newTime = time.substring(0,time.indexOf(":"));
		return newTime;
		}
	
	}

/*
	This function checks to see if there are any games today. If there are two games,
	two scoreboards are created. If a single game is today then a single scoreboard is 
	populated. Otherwise, no games are displayed. 
*/
localStorage["count2"] = "0";

function checkForGamesToday(){
	
	SportsAPI.getGamesToday(
			{
				
				success: function(json)
				{
					console.log(json);
					var date = new Date();
					var convertedTime;
					
					if(json.length == 2){
						var sport = json[0]["sport"];//json[0]["sport"];
						var sport2 = json[1]["sport"];

						$('#nogames').hide();
						$('#gamechoice').show();
						$('#outerWrapper').show();
				
						
						switch(sport){
						
						case 'baseball':
							 $('#sportTitleText').text('Baseball');
							 var currentHour = date.getHours();
							 var time = json[0].game_time;
							 
							 convertedTime = timeConverter(time);
							//alert("Current Time: " + time +"Game Time:"+convertedTime);
							 if(currentHour >= convertedTime){
							
							    getmensbaseball();
								 getmensbaseball();
								 $('#scoreboard').show();
								 }
							 else{
								  $('#scoreboard').hide();
								  $('#sportStartTime').text("Game Starts At " + json[0].game_time);
								 }
						
							
							break;
						case 'softball':
							 $('#sportTitleText').text('Softball');
							 var currentHour = date.getHours();
							 var time = json[0].game_time;
							 convertedTime = timeConverter(time);
						
							
							 if(currentHour >= convertedTime){
								 getwomenssoftball();
							 	 getwomenssoftball();
								 $('#scoreboard').show();
								 }
							 else{
								  $('#scoreboard').hide();
								  $('#sportStartTime').text("Game Starts At " + json[0].game_time);
								 }
							
							 
							 

							 break;
						case 'mensbasketball':
							$('#sportTitleText').text("Men's Basketball");
							 var currentHour = date.getHours();
							 var time = json[0].game_time;
							 convertedTime = timeConverter(time);
							 getmensbasketball();
							 getmensbasketball();
							
							 if(currentHour >= convertedTime){
							   
								 $('#scoreboard').show();
								 }
							 else{
								  $('#scoreboard').hide();
								  $('#sportStartTime').text("Game Starts At " + json[0].game_time);
								 }
							
						    break;
						case 'womensbasketball':
							$('#sportTitleText').text("Women's Basketball");
							
							 var currentHour = date.getHours();
							 var time = json[0].game_time;
							 convertedTime = timeConverter(time);
						
							
							 if(currentHour >= convertedTime){
							  getwomensbasketball();
							  getwomensbasketball();
								 $('#scoreboard').show();
								 }
							 else{
								  $('#scoreboard').hide();
								  $('#sportStartTime').text("Game Starts At " + json[0].game_time);
								 }
						    break;
						case 'volleyball':
							$('#sportTitleText').text("Volleyball");
							 var currentHour = date.getHours();
							 var time = json[0].game_time;
							 convertedTime = timeConverter(time);
						
							
							 if(currentHour >= convertedTime){
							    getvolleyball();
								getvolleyball();
								 $('#scoreboard').show();
								 }
							 else{
								  $('#scoreboard').hide();
								  $('#sportStartTime').text("Game Starts At " + json[0].game_time);
								 }
						
						
							break;
						case 'menssoccer':
							$('#sportTitleText').text("Men's Soccer");
							 var currentHour = date.getHours();
							 var time = json[0].game_time;
							 convertedTime = timeConverter(time);
						
							
							 if(currentHour >= convertedTime){
							    getmenssoccer();
								 getmenssoccer();
								 $('#scoreboard').show();
								 }
							 else{
								  $('#scoreboard').hide();
								  $('#sportStartTime').text("Game Starts At " + json[0].game_time);
								 }
							
						    break;
						case 'womenssoccer':
							$('#sportTitleText').text("Women's Soccer");
							 var currentHour = date.getHours();
							 var time = json[0].game_time;
							 convertedTime = timeConverter(time);
						
							
							 if(currentHour >= convertedTime){
							    getwomenssoccer();
							    getwomenssoccer();
								 $('#scoreboard').show();
								 }
							 else{
								  $('#scoreboard').hide();
								  $('#sportStartTime').text("Game Starts At " + json[0].game_time);
								 }
							
							break;
						case 'football':
							$('#sportTitleText').text("Football");
							 var currentHour = date.getHours();
							 var time = json[0].game_time;
							 convertedTime = timeConverter(time);
						
							
							 if(currentHour >= convertedTime){
							   getmensfootball();
							   getmensfootball();
								 $('#scoreboard').show();
								 }
							 else{
								  $('#scoreboard').hide();
								  $('#sportStartTime').text("Game Starts At " + json[0].game_time);
								 }
						
							
							break;
						}
						switch(sport2){
						
						case 'baseball':
							$('#sportTitleText1').text('Baseball');
							 var currentHour = date.getHours();
							 var time = json[1].game_time;
							 convertedTime = timeConverter(time);
						
							 if(currentHour >= convertedTime){
							    getmensbaseballSS();
								getmensbaseballSS();
								 $('#scoreboard1').show();
								 }
							 else{
								 
								  $('#scoreboard1').hide();
								  $('#sportStartTime1').text("Game Starts At " + json[1].game_time);
								 }
							break;
						case 'softball':
							 $('#sportTitleText1').text('Softball');
							 var currentHour = date.getHours();
							 var time = json[1].game_time;
							 convertedTime = timeConverter(time);
						
							
							 if(currentHour >= convertedTime){
								 getwomenssoftballSS();
							 	 getwomenssoftballSS();
								 $('#scoreboard1').show();
								 }
							 else{
								  $('#scoreboard1').hide();
								  $('#sportStartTime1').text("Game Starts At " + json[1].game_time);
								 }
							 break;
						case 'mensbasketball':
							$('#sportTitleText1').text("Men's Basketball");
							 var currentHour = date.getHours();
							 var time = json[1].game_time;
							 convertedTime = timeConverter(time);
							 getmensbasketballSS();
							 getmensbasketballSS();
							
							 if(currentHour >= convertedTime){
							   
								 $('#scoreboard1').show();
								 }
							 else{
								  $('#scoreboard1').hide();
								  $('#sportStartTime1').text("Game Starts At " + json[1].game_time);
								 }
							
						    break;
						case 'womensbasketball':
							$('#sportTitleText1').text("Women's Basketball");
							
							 var currentHour = date.getHours();
							 var time = json[1].game_time;
							 convertedTime = timeConverter(time);
						
							
							 if(currentHour >= convertedTime){
							  getwomensbasketballSS();
							  getwomensbasketballSS();
								 $('#scoreboard1').show();
								 }
							 else{
								  $('#scoreboard1').hide();
								  $('#sportStartTime1').text("Game Starts At " + json[1].game_time);
								 }
						    break;
						case 'volleyball':
							$('#sportTitleText1').text("Volleyball");
							var currentHour = date.getHours();
							 var time = json[0].game_time;
							 convertedTime = timeConverter(time);
						
							
							 if(currentHour >= convertedTime){
							     getvolleyballSS();
								  getvolleyballSS();
								 $('#scoreboard1').show();
								 }
							 else{
								  $('#scoreboard1').hide();
								  $('#sportStartTime1').text("Game Starts At " + json[0].game_time);
								 }
							
							
							break;
						case 'menssoccer':
							$('#sportTitleText1').text("Men's Soccer");
							var currentHour = date.getHours();
							 var time = json[0].game_time;
							 convertedTime = timeConverter(time);
							 
							
							 if(currentHour >= convertedTime){
							     getmenssoccerSS();
								  getmenssoccerSS();
								 $('#scoreboard1').show();
								 }
							 else{
								  $('#scoreboard1').hide();
								  $('#sportStartTime1').text("Game Starts At " + json[0].game_time);
								 }
							
							
						    break;
						case 'womenssoccer':
							$('#sportTitleText1').text("Women's Soccer");
							var currentHour = date.getHours();
							 var time = json[0].game_time;
							 convertedTime = timeConverter(time);
							 
							
							 if(currentHour >= convertedTime){
							     getwomenssoccerSS();
								  getwomenssoccerSS();
								 $('#scoreboard1').show();
								 }
							 else{
								  $('#scoreboard1').hide();
								  $('#sportStartTime1').text("Game Starts At " + json[0].game_time);
								 }
							
							break;
						case 'football':
							$('#sportTitleText1').text("Football");
							 var currentHour = date.getHours();
							 var time = json[1].game_time;
							 convertedTime = timeConverter(time);
						
							
							 if(currentHour >= convertedTime){
							   getmensfootballSS();
							   getmensfootballSS();
								 $('#scoreboard1').show();
								 }
							 else{
								  $('#scoreboard1').hide();
								  $('#sportStartTime1').text("Game Starts At " + json[1].game_time);
								 }
						
							
							break;
						}
						
					}
					
					else{
					$('#nogames').hide();
					$('#gamechoice').hide();
					$('#outerWrapper').show();	
					$('#outerWrapper1').hide();
					var sport = json[0]["sport"];
					switch(sport){
						
						case 'baseball':
							$('#sportTitleText').text('Baseball');
							 var currentHour = date.getHours();
							 var time = json[0].game_time;
							 convertedTime = timeConverter(time);
							// alert(convertedTime);
							
							 if(currentHour >= convertedTime){
							    getmensbaseball();
								 getmensbaseball();
								 $('#scoreboard').show();
								 }
							 else{
								  $('#scoreboard').hide();
								  $('#sportStartTime').text("Game Starts At " + json[0].game_time);
								 }
						
							
							break;
						case 'softball':
							 $('#sportTitleText').text('Softball');
							 var currentHour = date.getHours();
							 var time = json[0].game_time;
							 convertedTime = timeConverter(time);
						
							
							 if(currentHour >= convertedTime){
								 getwomenssoftball();
							 	 getwomenssoftball();
								 $('#scoreboard').show();
								 }
							 else{
								  $('#scoreboard').hide();
								  $('#sportStartTime').text("Game Starts At " + json[0].game_time);
								 }
							
							 
							 

							 break;
						case 'mensbasketball':
							$('#sportTitleText').text("Men's Basketball");
							 var currentHour = date.getHours();
							 var time = json[0].game_time;
							 convertedTime = timeConverter(time);
							 getmensbasketball();
							getmensbasketball();
							
							 if(currentHour >= convertedTime){
							   
								 $('#scoreboard').show();
								 }
							 else{
								  $('#scoreboard').hide();
								  $('#sportStartTime').text("Game Starts At " + json[0].game_time);
								 }
							
						    break;
						case 'womensbasketball':
							$('#sportTitleText').text("Women's Basketball");
							
							 var currentHour = date.getHours();
							 var time = json[0].game_time;
							 convertedTime = timeConverter(time);
							 if(currentHour >= convertedTime){
							  getwomensbasketball();
							  getwomensbasketball();
								 $('#scoreboard').show();
								 }
							 else{
								  $('#scoreboard').hide();
								  $('#sportStartTime').text("Game Starts At " + json[0].game_time);
								 }
						    break;
						case 'volleyball':
							$('#sportTitleText').text("Volleyball");
							var currentHour = date.getHours();
							 var time = json[0].game_time;
							 convertedTime = timeConverter(time);
							 if(currentHour >= convertedTime){
							     getvolleyball();
								 getvolleyball();
								 $('#scoreboard').show();
								 }
							 else{
								  $('#scoreboard').hide();
								  $('#sportStartTime').text("Game Starts At " + json[0].game_time);
								 }
						
							
							break;
						case 'menssoccer':
							$('#sportTitleText').text("Men's Soccer");
							var currentHour = date.getHours();
							 var time = json[0].game_time;
							 convertedTime = timeConverter(time);
						
							
							 if(currentHour >= convertedTime){
							     getmenssoccer();
								 getmenssoccer();
								 $('#scoreboard').show();
								 }
							 else{
								  $('#scoreboard').hide();
								  $('#sportStartTime').text("Game Starts At " + json[0].game_time);
								 }
						
							
						    break;
						case 'womenssoccer':
							$('#sportTitleText').text("Women's Soccer");
							var currentHour = date.getHours();
							 var time = json[0].game_time;
							 convertedTime = timeConverter(time);
						
							
							 if(currentHour >= convertedTime){
							     getwomenssoccer();
								 getwomenssoccer();
								 $('#scoreboard').show();
								 }
							 else{
								  $('#scoreboard').hide();
								  $('#sportStartTime').text("Game Starts At " + json[0].game_time);
								 }
							
							break;
						case 'football':
							$('#sportTitleText').text("Football");
							 var currentHour = date.getHours();
							 var time = json[0].game_time;
							 convertedTime = timeConverter(time);
						
							
							 if(currentHour >= convertedTime){
							   getmensfootball();
							   getmensfootball();
								 $('#scoreboard').show();
								 }
							 else{
								  $('#scoreboard').hide();
								  $('#sportStartTime').text("Game Starts At " + json[0].game_time);
								 }
						
							
							break;
						}
					}
				},
				error: function()
				{
					
					alert("Failed To Retrieve Today's Games");
				}
			});
	}
	
/*

	16 individual functions for getting live stats data for 8 different sports, 
	and two different scoreboards.
	
	-- "SS" on the end of a function denotes that it is a function for the second
	scoreboard. Otherwise the function feeds into the first scoreboard.
	
*/
function getvolleyball(){
		if (localStorage["count"] == "1"){
			window.setInterval(function (){
			SportsAPI.getWomensVolleyballStats(
			{
				
				success: function(json)
				{
					console.log(json);
					var teamTitle = json[0]["Home_Team"] + " V.S. " + json[0]["Away_Team"];
					$('#scoreboardTitle').text(teamTitle);
					var awayPeriod  = "Away -  |";
					var homePeriod = "Home -  |";
					
					var breakdownTitle = "Sets - |   1   |   2   |   3   |   4   |   5   |";
					for(var i = 1; i<=5;i++){
						var awayPeriodData = json[0]["Away_Set_"+i];
						var homePeriodData = json[0]["Home_Set_"+i];
						
						if((typeof(parseInt(awayPeriodData)) == "number") && (typeof(awayPeriodData) != "object")){
							awayPeriod += " " +awayPeriodData + "  |  ";
							
							}
						else{
						
						awayPeriod += "  0  " + "  |  ";
						
						}
						if((typeof(parseInt(homePeriodData)) == "number") && (typeof(homePeriodData) != "object")){
							homePeriod += " " +homePeriodData + "  |  ";
							}
						else{
						homePeriod += "  0  " + "  |  ";
						
						}
						}
					$('#label').text(breakdownTitle);
					$('#home').text(homePeriod);
					$('#away').text(awayPeriod);
					var over = json[0]["Status"];
					var currentperiod = json[0]["Current_Set"];
					$('#hscore').text(json[0]["Home_Set_"+currentperiod]);
					$('#vscore').text(json[0]["Away_Set_"+currentperiod]);
					
					
					if((parseInt(currentperiod) > 3)){
						currentperiod = currentperiod + "th";
						}
					switch(currentperiod){
						case "1":
						currentperiod = currentperiod + "st";
						break;
						case "2":
						currentperiod = currentperiod + "nd";
						break;
						case "3":
						currentperiod = currentperiod + "rd";
						break;
						
						}
				    if(over == "Y"){
						currentperiod = "Final Score";
						$('#gameTime').text(currentperiod);
						}
					currentperiod = currentperiod + " set";
					
					$('#gameTime').text(currentperiod);
					$('#gameTime').addClass("volleyball");
					
				},
				error: function()
				{
					alert("Failed To Retrieve Stats");
				}
			});
			},60000);
		}
		else{
			localStorage["count"] = "1";
			SportsAPI.getWomensVolleyballStats(
			{
				
				success: function(json)
				{
					console.log(json);
					var teamTitle = json[0]["Home_Team"] + " V.S. " + json[0]["Away_Team"];
					$('#scoreboardTitle').text(teamTitle);
						var awayPeriod  = "Away -  |";
					var homePeriod = "Home -  |";
					var breakdownTitle = "Sets - |   1   |   2   |   3   |   4   |   5   |";
					for(var i = 1; i<=5;i++){
						var awayPeriodData = json[0]["Away_Set_"+i];
						var homePeriodData = json[0]["Home_Set_"+i];
						
						if((typeof(parseInt(awayPeriodData)) == "number") && (typeof(awayPeriodData) != "object")){
							awayPeriod += " " + awayPeriodData + "  |  ";
							
							}
						else{
						
						awayPeriod += "  0  " + "  |  ";
						
						}
						if((typeof(parseInt(homePeriodData)) == "number") && (typeof(homePeriodData) != "object")){
							homePeriod += " " + homePeriodData + "  |  ";
							}
						else{
						homePeriod += "  0  " + "  |  ";
						
						}
						}
					$('#label').text(breakdownTitle);
					$('#home').text(homePeriod);
					$('#away').text(awayPeriod);
					var over = json[0]["Status"];
					var currentperiod = json[0]["Current_Set"];
					$('#hscore').text(json[0]["Home_Set_"+currentperiod]);
					$('#vscore').text(json[0]["Away_Set_"+currentperiod]);
					
					if((parseInt(currentperiod) > 3)){
						currentperiod = currentperiod + "th";
						}
					switch(currentperiod){
						case "1":
						currentperiod = currentperiod + "st";
						break;
						case "2":
						currentperiod = currentperiod + "nd";
						break;
						case "3":
						currentperiod = currentperiod + "rd";
						break;
						
						}
					
					currentperiod = currentperiod + " set";
				    if(over == "Y"){
						currentperiod = "Final Score";
						$('#gameTime').text(currentperiod);
						}
					$('#gameTime').text(currentperiod);
					$('#gameTime').text(currentperiod);
					$('#gameTime').addClass("football");
					
				},
				error: function() 
				{
					alert("Failed To Retrieve Stats");
				}
			});
			}
		}

function getwomenssoccer(){
		if (localStorage["count"] == "1"){
			window.setInterval(function (){
			SportsAPI.getWomensSoccerStats(
			{
				
				success: function(json)
				{
					console.log(json);
					var teamTitle = json[0]["Home_Team"] + " V.S. " + json[0]["Away_Team"];
					$('#scoreboardTitle').text(teamTitle);
					var awayPeriod  = "Away -  |";
					var homePeriod = "Home -  |";
					var over = json[0]["Status"];
					var breakdownTitle = "Period - |  1  |  2  |";
					for(var i = 1; i<=2;i++){
						var awayPeriodData = json[0]["Away_Period_"+i];
						var homePeriodData = json[0]["Home_Period_"+i];
						
						if((typeof(parseInt(awayPeriodData)) == "number") && (typeof(awayPeriodData) != "object")){
							awayPeriod += "  " +awayPeriodData + "  |  ";
							
							}
						else{
						
						awayPeriod += "  0  " + "  |  ";
						
						}
						if((typeof(parseInt(homePeriodData)) == "number") && (typeof(homePeriodData) != "object")){
							homePeriod += "  " +homePeriodData + "  |  ";
							}
						else{
						homePeriod += "  0  " + "  |  ";
						
						}
						}
					$('#label').text(breakdownTitle);
					$('#home').text(homePeriod);
					$('#away').text(awayPeriod);
					$('#hscore').text(json[0]["Home_Final_Score"]);
					$('#vscore').text(json[0]["Away_Final_Score"]);
					var currentperiod = json[0]["Period"];
					if((parseInt(currentperiod) > 3)){
						currentperiod = currentperiod + "th";
						}
					switch(currentperiod){
						case "1":
						currentperiod = currentperiod + "st";
						break;
						case "2":
						currentperiod = currentperiod + "nd";
						break;
						case "3":
						currentperiod = currentperiod + "rd";
						break;
						
						}
						
					currentperiod = currentperiod + " period";
					if(over == "Y"){
						currentperiod = "Final Score";
						$('#gameTime').text(currentperiod);
						}
					$('#gameTime').text(currentperiod);
					$('#gameTime').addClass("soccer");
					
				},
				error: function()
				{
					alert("Failed To Retrieve News Articles");
				}
			});
			},60000);
		}
		else{
			localStorage["count"] = "1";
			SportsAPI.getWomensSoccerStats(
			{
				
				success: function(json)
				{
					console.log(json);
					var teamTitle = json[0]["Home_Team"] + " V.S. " + json[0]["Away_Team"];
					$('#scoreboardTitle').text(teamTitle);
					var awayPeriod  = "Away -  |";
					var homePeriod = "Home -  |";
					var over = json[0]["Status"];
					var breakdownTitle = "Period - |  1  |  2  |";
					for(var i = 1; i<=2;i++){
						var awayPeriodData = json[0]["Away_Period_"+i];
						var homePeriodData = json[0]["Home_Period_"+i];
						
						if((typeof(parseInt(awayPeriodData)) == "number") && (typeof(awayPeriodData) != "object")){
							awayPeriod += "  " +awayPeriodData + "  |  ";
							
							}
						else{
						
						awayPeriod += "  0  " + "  |  ";
						
						}
						if((typeof(parseInt(homePeriodData)) == "number") && (typeof(homePeriodData) != "object")){
							homePeriod += "  " +homePeriodData + "  |  ";
							}
						else{
						homePeriod += "  0  " + "  |  ";
						
						}
						}
					$('#label').text(breakdownTitle);
					$('#home').text(homePeriod);
					$('#away').text(awayPeriod);
					$('#hscore').text(json[0]["Home_Final_Score"]);
					$('#vscore').text(json[0]["Away_Final_Score"]);
					var currentperiod = json[0]["Period"];
					
					if((parseInt(currentperiod) > 3)){
						currentperiod = currentperiod + "th";
						}
					switch(currentperiod){
						case "1":
						currentperiod = currentperiod + "st";
						break;
						case "2":
						currentperiod = currentperiod + "nd";
						break;
						case "3":
						currentperiod = currentperiod + "rd";
						break;
						
						}
					
					currentperiod = currentperiod + " period";
				    if(over == "Y"){
						currentperiod = "Final Score";
						$('#gameTime').text(currentperiod);
						}
					$('#gameTime').text(currentperiod);
					$('#gameTime').addClass("soccer");
					
				},
				error: function() 
				{
					alert("Failed To Retrieve News Articles");
				}
			});
			}
		}
function getmenssoccer(){
		if (localStorage["count"] == "1"){
			window.setInterval(function (){
			SportsAPI.getMensSoccerStats(
			{
				
				success: function(json)
				{
					console.log(json);
					var teamTitle = json[0]["Home_Team"] + " V.S. " + json[0]["Away_Team"];
					$('#scoreboardTitle').text(teamTitle);
					var awayPeriod  = "Away -  |";
					var homePeriod = "Home -  |";
					var over = json[0]["Status"];
					var breakdownTitle = "Period - |  1  |  2  |";
					for(var i = 1; i<=2;i++){
						var awayPeriodData = json[0]["Away_Period_"+i];
						var homePeriodData = json[0]["Home_Period_"+i];
						
						if((typeof(parseInt(awayPeriodData)) == "number") && (typeof(awayPeriodData) != "object")){
							awayPeriod += "  " + awayPeriodData + "  |  ";
							
							}
						else{
						
						awayPeriod += "   0  " + "  |  ";
						
						}
						if((typeof(parseInt(homePeriodData)) == "number") && (typeof(homePeriodData) != "object")){
							homePeriod += "  " +homePeriodData + "  |  ";
							}
						else{
						homePeriod += "   0  " + "  |  ";
						
						}
						}
					$('#label').text(breakdownTitle);
					$('#home').text(homePeriod);
					$('#away').text(awayPeriod);
					$('#hscore').text(json[0]["Home_Final_Score"]);
					$('#vscore').text(json[0]["Away_Final_Score"]);
					var currentperiod = json[0]["Period"];
					if((parseInt(currentperiod) > 3)){
						currentperiod = currentperiod + "th";
						}
					switch(currentperiod){
						case "1":
						currentperiod = currentperiod + "st";
						break;
						case "2":
						currentperiod = currentperiod + "nd";
						break;
						case "3":
						currentperiod = currentperiod + "rd";
						break;
						
						}
						
					currentperiod = currentperiod + " period";
					if(over == "Y"){
						currentperiod = "Final Score";
						$('#gameTime').text(currentperiod);
						}
					$('#gameTime').text(currentperiod);
					$('#gameTime').addClass("soccer");
					
				},
				error: function()
				{
					alert("Failed To Retrieve News Articles");
				}
			});
			},60000);
		}
		else{
			localStorage["count"] = "1";
			SportsAPI.getMensSoccerStats(
			{
				
				success: function(json)
				{
					console.log(json);
					var teamTitle = json[0]["Home_Team"] + " V.S. " + json[0]["Away_Team"];
					$('#scoreboardTitle').text(teamTitle);
					var awayPeriod  = "Away -  |";
					var homePeriod = "Home -  |";
					var over = json[0]["Status"];
				
					var breakdownTitle = "Period - |  1  |  2  |";
					for(var i = 1; i<=2;i++){
						var awayPeriodData = json[0]["Away_Period_"+i];
						var homePeriodData = json[0]["Home_Period_"+i];
						
						if((typeof(parseInt(awayPeriodData)) == "number") && (typeof(awayPeriodData) != "object")){
							awayPeriod += "  " +awayPeriodData + "  |  ";
							
							}
						else{
						
						awayPeriod +=  "   0  " + "  |  ";
						
						}
						if((typeof(parseInt(homePeriodData)) == "number") && (typeof(homePeriodData) != "object")){
							homePeriod += "  " +homePeriodData + "  |  ";
							}
						else{
						homePeriod += "   0  " + "  |  ";
						
						}
						}
					$('#label').text(breakdownTitle);
					$('#home').text(homePeriod);
					$('#away').text(awayPeriod);
					$('#hscore').text(json[0]["Home_Final_Score"]);
					$('#vscore').text(json[0]["Away_Final_Score"]);
					var currentperiod = json[0]["Period"];
					
					if((parseInt(currentperiod) > 3)){
						currentperiod = currentperiod + "th";
						}
					switch(currentperiod){
						case "1":
						currentperiod = currentperiod + "st";
						break;
						case "2":
						currentperiod = currentperiod + "nd";
						break;
						case "3":
						currentperiod = currentperiod + "rd";
						break;
						
						}
					
					currentperiod = currentperiod + " period";
					
				    if(over == "Y"){
						currentperiod = "Final Score";
						$('#gameTime').text(currentperiod);
						}
					$('#gameTime').text(currentperiod);
					$('#gameTime').addClass("soccer");
					
				},
				error: function() 
				{
					alert("Failed To Retrieve News Articles");
				}
			});
			}
		}
function getwomensbasketball(){
		if (localStorage["count"] == "1"){
			window.setInterval(function (){
			SportsAPI.getWomensBasketballStats(
			{
				
				success: function(json)
				{
					console.log(json);
					var awayPeriod  = "Away -  ";
					var homePeriod = "Home -  ";
					var breakdownTitle = "Period - | 1  |  2  |";
					var teamTitle = json[0]["Home_Team"] + " V.S. " + json[0]["Away_Team"];
					$('#scoreboardTitle').text(teamTitle);
					
					for(var i = 1; i<=2;i++){
						var awayPeriodData = json[0]["Away_Period_"+i +"_Score"];
						var homePeriodData = json[0]["Home_Period_"+i + "_Score"];
						
						if((typeof(parseInt(awayPeriodData)) == "number") && (typeof(awayPeriodData) != "object")){
							awayPeriod += awayPeriodData + "  |  ";
							
							}
						else{
						
						awayPeriod += "  0  " + "  |  ";
						
						}
						if((typeof(parseInt(homePeriodData)) == "number") && (typeof(homePeriodData) != "object")){
							homePeriod += homePeriodData + "  |  ";
							}
						else{
						homePeriod += "  0  " + "  |  ";
						
						}
						}
					$('#label').text(breakdownTitle);
					$('#home').text(homePeriod);
					$('#away').text(awayPeriod);
					var over = json[0]["Status"];
					$('#scoreboardTitle').text(teamTitle);
					$('#hscore').text(json[0]["Home_Total_Score"]);
					$('#vscore').text(json[0]["Away_Total_Score"]);
					var currentperiod = json[0]["Period"];
					if((parseInt(currentperiod) > 3)){
						currentperiod = currentperiod + "th";
						}
					switch(currentperiod){
						case "1":
						currentperiod = currentperiod + "st";
						break;
						case "2":
						currentperiod = currentperiod + "nd";
						break;
						case "3":
						currentperiod = currentperiod + "rd";
						break;
						
						}
						
					currentperiod = currentperiod + " period";
					 if(over == "Y"){
						currentperiod = "Final Score";
						$('#gameTime').text(currentperiod);
						}
					$('#gameTime').text(currentperiod);
					$('#gameTime').addClass("basketball");
					
				},
				error: function()
				{
					alert("Failed To Retrieve News Articles");
				}
			});
			},60000);
		}
		else{
			localStorage["count"] = "1";
			
			SportsAPI.getWomensBasketballStats(
			{
				
				success: function(json)
				{
					console.log(json);
					var awayPeriod  = "Away -  ";
					var homePeriod = "Home -  ";
					var breakdownTitle = "Period - |  1  |  2  |";
					var teamTitle = json[0]["Home_Team"] + " V.S. " + json[0]["Away_Team"];
					$('#scoreboardTitle').text(teamTitle);
					
					for(var i = 1; i<=2;i++){
						var awayPeriodData = json[0]["Away_Period_"+i +"_Score"];
						var homePeriodData = json[0]["Home_Period_"+i + "_Score"];
						
						if((typeof(parseInt(awayPeriodData)) == "number") && (typeof(awayPeriodData) != "object")){
							awayPeriod += awayPeriodData + "  |  ";
							
							}
						else{
						
						awayPeriod += "  0  " + "  |  ";
						
						}
						if((typeof(parseInt(homePeriodData)) == "number") && (typeof(homePeriodData) != "object")){
							homePeriod += homePeriodData + "  |  ";
							}
						else{
						homePeriod += "  0  " + "  |  ";
						
						}
						}
					$('#label').text(breakdownTitle);
					$('#home').text(homePeriod);
					$('#away').text(awayPeriod);
					var over = json[0]["Status"];
					$('#scoreboardTitle').text(teamTitle);
					$('#hscore').text(json[0]["Home_Total_Score"]);
					$('#vscore').text(json[0]["Away_Total_Score"]);
					var currentperiod = json[0]["Period"];
					
					if((parseInt(currentperiod) > 3)){
						currentperiod = currentperiod + "th";
						}
					switch(currentperiod){
						case "1":
						currentperiod = currentperiod + "st";
						break;
						case "2":
						currentperiod = currentperiod + "nd";
						break;
						case "3":
						currentperiod = currentperiod + "rd";
						break;
						
						}
					
					currentperiod = currentperiod + " period";
				     if(over == "Y"){
						currentperiod = "Final Score";
						$('#gameTime').text(currentperiod);
						}
					$('#gameTime').text(currentperiod);
					$('#gameTime').addClass("basketball");
					
				},
				error: function() 
				{
					alert("Failed To Retrieve News Articles");
				}
			});
			}
		}
function getmensfootball(){
		if (localStorage["count"] == "1"){
			window.setInterval(function (){
			SportsAPI.getMensFootballStats(
			{
				
				success: function(json)
				{
					console.log(json);
					var awayPeriod  = "Away -  ";
					var homePeriod = "Home -  ";
					var breakdownTitle = "Period - | 1  |  2  |  3  |  4  |";
					var teamTitle = json[0]["Home_Team"] + " V.S. " + json[0]["Away_Team"];
					$('#scoreboardTitle').text(teamTitle);
					
					for(var i = 1; i<=4;i++){
						var awayPeriodData = json[0]["Away_Period_"+i +"_Score"];
						var homePeriodData = json[0]["Home_Period_"+i + "_Score"];
						
						if((typeof(parseInt(awayPeriodData)) == "number") && (typeof(awayPeriodData) != "object")){
							awayPeriod += " " + " " + awayPeriodData + "  |  ";
							
							}
						else{
						
						awayPeriod += "  0  " + "  |  ";
						
						}
						if((typeof(parseInt(homePeriodData)) == "number") && (typeof(homePeriodData) != "object")){
							homePeriod +=  " " + " " +homePeriodData + "  |  ";
							}
						else{
						homePeriod += "  0  " + "  |  ";
						
						}
						}
					$('#label').text(breakdownTitle);
					$('#home').text(homePeriod);
					$('#away').text(awayPeriod);
					var over = json[0]["Status"];
					$('#scoreboardTitle').text(teamTitle);
					$('#hscore').text(json[0]["Home_Total_Score"]);
					$('#vscore').text(json[0]["Away_Total_Score"]);
					var currentperiod = json[0]["Period"];
					if((parseInt(currentperiod) > 3)){
						currentperiod = currentperiod + "th";
						}
					switch(currentperiod){
						case "1":
						currentperiod = currentperiod + "st";
						break;
						case "2":
						currentperiod = currentperiod + "nd";
						break;
						case "3":
						currentperiod = currentperiod + "rd";
						break;
						
						}
						
					currentperiod = currentperiod + " period";
					if(over == "Y"){
						currentperiod = "Final Score";
						$('#gameTime').text(currentperiod);
						}
					$('#gameTime').text(currentperiod);
					$('#gameTime').addClass("basketball");
					
				},
				error: function()
				{
					alert("Failed To Retrieve News Articles");
				}
			});
			},60000);
		}
		else{
			localStorage["count"] = "1";
			
			SportsAPI.getMensFootballStats(
			{
				
				success: function(json)
				{
					console.log(json);
					var awayPeriod  = "Away -  ";
					var homePeriod = "Home -  ";
					var breakdownTitle = "Period - |  1  |  2  |  3  |  4  |";
					var teamTitle = json[0]["Home_Team"] + " V.S. " + json[0]["Away_Team"];
					$('#scoreboardTitle').text(teamTitle);
					
					for(var i = 1; i<=4;i++){
						var awayPeriodData = json[0]["Away_Period_"+i +"_Score"];
						var homePeriodData = json[0]["Home_Period_"+i + "_Score"];
						
						if((typeof(parseInt(awayPeriodData)) == "number") && (typeof(awayPeriodData) != "object")){
							awayPeriod +=  " " + " " +awayPeriodData + "  |  ";
							
							}
						else{
						
						awayPeriod += "  0  " + "  |  ";
						
						}
						if((typeof(parseInt(homePeriodData)) == "number") && (typeof(homePeriodData) != "object")){
							homePeriod +=  " " + " " +homePeriodData + "  |  ";
							}
						else{
						homePeriod += "  0  " + "  |  ";
						
						}
						}
					$('#label').text(breakdownTitle);
					$('#home').text(homePeriod);
					$('#away').text(awayPeriod);
					var over = json[0]["Status"];
					$('#scoreboardTitle').text(teamTitle);
					$('#hscore').text(json[0]["Home_Total_Score"]);
					$('#vscore').text(json[0]["Away_Total_Score"]);
					var currentperiod = json[0]["Period"];
					
					if((parseInt(currentperiod) > 3)){
						currentperiod = currentperiod + "th";
						}
					switch(currentperiod){
						case "1":
						currentperiod = currentperiod + "st";
						break;
						case "2":
						currentperiod = currentperiod + "nd";
						break;
						case "3":
						currentperiod = currentperiod + "rd";
						break;
						
						}
					
					currentperiod = currentperiod + " period";
				    if(over == "Y"){
						currentperiod = "Final Score";
						$('#gameTime').text(currentperiod);
						}
					$('#gameTime').text(currentperiod);
					$('#gameTime').addClass("basketball");
					
				},
				error: function() 
				{
					alert("Failed To Retrieve News Articles");
				}
			});
			}
		}
function getmensbasketball(){
		if (localStorage["count"] == "1"){
			window.setInterval(function (){
			SportsAPI.getMensBasketballStats(
			{
				
				success: function(json)
				{
					console.log(json);
					var awayPeriod  = "Away -  ";
					var homePeriod = "Home -  ";
					var breakdownTitle = "Period - |  1  |  2  | ";
					var teamTitle = json[0]["Home_Team"] + " V.S. " + json[0]["Away_Team"];
					$('#scoreboardTitle').text(teamTitle);
					
					for(var i = 1; i<=2;i++){
						var awayPeriodData = json[0]["Away_Period_"+i +"_Score"];
						var homePeriodData = json[0]["Home_Period_"+i + "_Score"];
						
						if((typeof(parseInt(awayPeriodData)) == "number") && (typeof(awayPeriodData) != "object")){
							awayPeriod += awayPeriodData + "  |  ";
							
							}
						else{
						
						awayPeriod += "  0  " + "  |  ";
						
						}
						if((typeof(parseInt(homePeriodData)) == "number") && (typeof(homePeriodData) != "object")){
							homePeriod += " " + " " + homePeriodData + "  |  ";
							}
						else{
						homePeriod += "  0  " + "  |  ";
						
						}
						}
					$('#label').text(breakdownTitle);
					$('#home').text(homePeriod);
					$('#away').text(awayPeriod);
					var over = json[0]["Status"];
					$('#scoreboardTitle').text(teamTitle);
					$('#hscore').text(json[0]["Home_Total_Score"]);
					$('#vscore').text(json[0]["Away_Total_Score"]);
					var currentperiod = json[0]["Period"];
					if((parseInt(currentperiod) > 3)){
						currentperiod = currentperiod + "th";
						}
					switch(currentperiod){
						case "1":
						currentperiod = currentperiod + "st";
						break;
						case "2":
						currentperiod = currentperiod + "nd";
						break;
						case "3":
						currentperiod = currentperiod + "rd";
						break;
						
						}
						
					currentperiod = currentperiod + " period";
					 if(over == "Y"){
						currentperiod = "Final Score";
						$('#gameTime').text(currentperiod);
						}
					$('#gameTime').text(currentperiod);
					$('#gameTime').addClass("basketball");
					
				},
				error: function()
				{
					alert("Failed To Retrieve News Articles");
				}
			});
			},60000);
		}
		else{
			localStorage["count"] = "1";
			
			SportsAPI.getMensBasketballStats(
			{
				
				success: function(json)
				{
					console.log(json);
					
					var teamTitle = json[0]["Home_Team"] + " V.S. " + json[0]["Away_Team"];
					$('#scoreboardTitle').text(teamTitle);
					var awayPeriod  = "Away -  ";
					var homePeriod = "Home -  ";
					var breakdownTitle = "Period - |  1  |  2  |";
					for(var i = 1; i<=2;i++){
						var awayPeriodData = json[0]["Away_Period_"+i +"_Score"];
						var homePeriodData = json[0]["Home_Period_"+i + "_Score"];
						
						if((typeof(parseInt(awayPeriodData)) == "number") && (typeof(awayPeriodData) != "object")){
							awayPeriod +=  " " + " " + awayPeriodData + "  |  ";
							
							}
						else{
						
						awayPeriod += "  0  " + "  |  ";
						
						}
						if((typeof(parseInt(homePeriodData)) == "number") && (typeof(homePeriodData) != "object")){
							homePeriod += homePeriodData + "  |  ";
							}
						else{
						homePeriod += "  0  " + "  |  ";
						
						}
						}
					$('#label').text(breakdownTitle);
					$('#home').text(homePeriod);
					$('#away').text(awayPeriod);
					$('#scoreboardTitle').text(teamTitle);
					var over = json[0]["Status"];
					$('#hscore').text(json[0]["Home_Total_Score"]);
					$('#vscore').text(json[0]["Away_Total_Score"]);
					var currentperiod = json[0]["Period"];
					
					if((parseInt(currentperiod) > 3)){
						currentperiod = currentperiod + "th";
						}
					switch(currentperiod){
						case "1":
						currentperiod = currentperiod + "st";
						break;
						case "2":
						currentperiod = currentperiod + "nd";
						break;
						case "3":
						currentperiod = currentperiod + "rd";
						break;
						
						}
					
					currentperiod = currentperiod + " period";
				     if(over == "Y"){
						currentperiod = "Final Score";
						$('#gameTime').text(currentperiod);
						}
					$('#gameTime').text(currentperiod);
					$('#gameTime').addClass("basketball");
					
				},
				error: function() 
				{
					alert("Failed To Retrieve News Articles");
				}
			});
			}
		}
function getmensbaseball(){
		if (localStorage["count"] == "1"){
			window.setInterval(function (){
			SportsAPI.getMensBaseballStats(
			{
				
				success: function(json)
				{
					console.log(json);
					var teamTitle = json[0]["Home_Team_Name"] + " V.S. " + json[0]["Away_Team_Name"];
					var awayInning  = "Away -  ";
					var homeInning = "Home -  ";
					var over = json[0]["Status"];
					var breakdownTitle = "Inning -  1  |  2  |  3  | 4  |  5  |  6  |  7  |  8  |  9  |";
					$('#scoreboardTitle').text(teamTitle);
					for(var i = 1; i<=9;i++){
						var awayInn = json[0]["Away_Inning"+i];
						var homeInn = json[0]["Home_Inning"+i];
						
						if((typeof(parseInt(awayInn)) == "number")  && (typeof(awayInn) != "object")){
							awayInning += awayInn + "  |  ";
							
							}
						else{
						
						awayInning += "  0  " + "  |  ";
						
						}
						if((typeof(parseInt(homeInn)) == "number")  && (typeof(homeInn) != "object")){
							homeInning += homeInn + "  |  ";
							}
						else{
						homeInning += "  0  " + "  |  ";
						
						}
						}
					$('#hscore').text(json[0]["Home_Final_Score"]);
					$('#vscore').text(json[0]["Away_Final_Score"]);
					$('#label').text(breakdownTitle);
					$('#home').text(homeInning);
					$('#away').text(awayInning);
					var currentinning = json[0]["Current_Inning"];
					if((parseInt(currentinning) > 3)){
						currentinning = currentinning + "th";
						}
					switch(currentinning){
						case "1":
						currentinning = currentinning + "st";
						break;
						case "2":
						currentinning = currentinning + "nd";
						break;
						case "3":
						currentinning = currentinning + "rd";
						break;
						
						}
						
					currentinning = currentinning + " inning";
					if(over == "Y"){
						currentinning = "Final Score";
						$('#gameTime').text(currentinning);
						}
					$('#gameTime').text(currentinning);
					$('#gameTime').addClass("baseball");
					
				},
				error: function()
				{
					alert("Failed To Retrieve News Articles");
				}
			});
			},60000);
		}
		else{
			localStorage["count"] = "1";
			SportsAPI.getMensBaseballStats(
			{
				
				success: function(json)
				{
					console.log(json);
					var awayInning  = "Away -  ";
					var homeInning = "Home -  ";
				    var over = json[0]["Status"];
					
					var breakdownTitle = "Inning -  1  |  2  |  3  | 4  |  5  |  6  |  7  |  8  |  9 |";
					var teamTitle = json[0]["Home_Team_Name"] + " V.S. " + json[0]["Away_Team_Name"];
					$('#scoreboardTitle').text(teamTitle);
					
					for(var i = 1; i<=9;i++){
						var awayInn = json[0]["Away_Inning"+i];
						var homeInn = json[0]["Home_Inning"+i];
						
						if((typeof(parseInt(awayInn)) == "number") && (typeof(awayInn) != "object")){
							
							awayInning += awayInn + "  |  ";
							
							}
						else{
						
						awayInning += "  0  " + "  |  ";
						
						}
						if((typeof(parseInt(homeInn)) == "number")  && (typeof(homeInn) != "object")){
							homeInning += homeInn + "  |  ";
							}
						else{
							
						homeInning += "  0  " + "  |  ";
						
						}
						}
					$('#label').text(breakdownTitle);
					$('#home').text(homeInning);
					$('#away').text(awayInning);
					$('#hscore').text(json[0]["Home_Final_Score"]);
					$('#vscore').text(json[0]["Away_Final_Score"]);
					
					var currentinning = json[0]["Current_Inning"];
					if((parseInt(currentinning) > 3)){
						currentinning = currentinning + "th";
						}
					switch(currentinning){
						case "1":
						currentinning = currentinning + "st";
						break;
						case "2":
						currentinning = currentinning + "nd";
						break;
						case "3":
						currentinning = currentinning + "rd";
						break;
						
						}
						
					currentinning = currentinning + " inning";
					if(over == "Y"){
						currentinning = "Final Score";
						$('#gameTime').text(currentinning);
						}
					$('#gameTime').text(currentinning);
					$('#gameTime').addClass("baseball");
					
				},
				error: function() 
				{
					alert("Failed To Retrieve News Articles");
				}
			});
			}
		}
function getwomenssoftball(){
		if (localStorage["count"] == "1"){
			window.setInterval(function (){
			SportsAPI.getWomensSoftballStats(
			{
				
				success: function(json)
				{
					console.log(json);
					var awayInning  = "Away -  ";
					var homeInning = "Home -  ";
					var over = json[0]["Status"];
					var breakdownTitle = "Inning -  1  |  2  |  3  | 4  |  5  |  6  |  7  |  8  |  9 |";
					var teamTitle = json[0]["Home_Team_Name"] + " V.S. " + json[0]["Away_Team_Name"];
					$('#scoreboardTitle').text(teamTitle);
					
					for(var i = 1; i<=9;i++){
						var awayInn = json[0]["Away_Inning"+i];
						var homeInn = json[0]["Home_Inning"+i];
						
						if((typeof(parseInt(awayInn)) == "number")  && (typeof(awayInn) != "object")){
							awayInning += awayInn + "  |  ";
							
							}
						else{
						
						awayInning += "  0  " + "  |  ";
						
						}
						if((typeof(parseInt(homeInn)) == "number")  && (typeof(homeInn) != "object")){
							homeInning += homeInn + "  |  ";
							}
						else{
						homeInning += "  0  " + "  |  ";
						
						}
						}
					$('#label').text(breakdownTitle);
					$('#home').text(homeInning);
					$('#away').text(awayInning);
					$('#scoreboardTitle').text(teamTitle);
					$('#hscore').text(json[0]["Home_Final_Score"]);
					$('#vscore').text(json[0]["Away_Final_Score"]);
					var currentinning = json[0]["Current_Inning"];
					if((parseInt(currentinning) > 3)){
						currentinning = currentinning + "th";
						}
					switch(currentinning){
						case "1":
						currentinning = currentinning + "st";
						break;
						case "2":
						currentinning = currentinning + "nd";
						break;
						case "3":
						currentinning = currentinning + "rd";
						break;
						
						}
						
					currentinning = currentinning + " inning";
					if(over == "Y"){
						currentperiod = "Final Score";
						$('#gameTime').text(currentperiod);
						}
					$('#gameTime').text(currentinning);
					$('#gameTime').addClass("softball");
					
				},
				error: function()
				{
					alert("Failed To Retrieve News Articles");
				}
			});
			},60000);
		}
		else{
			localStorage["count"] = "1";
			SportsAPI.getWomensSoftballStats(
			{
				
				success: function(json)
				{
					console.log(json);
				   var awayInning  = "Away -  ";
				   var over = json[0]["Status"];
					var homeInning = "Home -  ";
					var breakdownTitle = "Inning -  1  |  2  |  3  | 4  |  5  |  6  |  7  |  8  |  9 |";
					var teamTitle = json[0]["Home_Team_Name"] + " V.S. " + json[0]["Away_Team_Name"];
					$('#scoreboardTitle').text(teamTitle);
					
					for(var i = 1; i<=9;i++){
						var awayInn = json[0]["Away_Inning"+i];
						var homeInn = json[0]["Home_Inning"+i];
						
						if((typeof(parseInt(awayInn)) == "number")  && (typeof(awayInn) != "object")){
							awayInning += awayInn + "  |  ";
							
							}
						else{
						
						awayInning += "  0  " + "  |  ";
						
						}
						if((typeof(parseInt(homeInn)) == "number")  && (typeof(homeInn) != "object")){
							homeInning += homeInn + "  |  ";
							}
						else{
						homeInning += "  0  " + "  |  ";
						
						}
						}
					$('#label').text(breakdownTitle);
					$('#home').text(homeInning);
					$('#away').text(awayInning);
					$('#scoreboardTitle').text(teamTitle);
					$('#hscore').text(json[0]["Home_Final_Score"]);
					$('#vscore').text(json[0]["Away_Final_Score"]);
					var currentinning = json[0]["Current_Inning"];
					if((parseInt(currentinning) > 3)){
						currentinning = currentinning + "th";
						}
					switch(currentinning){
						case "1":
						currentinning = currentinning + "st";
						break;
						case "2":
						currentinning = currentinning + "nd";
						break;
						case "3":
						currentinning = currentinning + "rd";
						break;
						
						}
						
					currentinning = currentinning + " inning";
					if(over == "Y"){
						currentperiod = "Final Score";
						$('#gameTime').text(currentperiod);
						}
					$('#gameTime').text(currentinning);
					$('#gameTime').addClass("baseball");
					
				},
				error: function() 
				{
					alert("Failed To Retrieve News Articles");
				}
			});
			}
		}
function getvolleyballSS(){
		if (localStorage["count2"] == "1"){
			window.setInterval(function (){
			SportsAPI.getWomensVolleyballStats(
			{
				
				success: function(json)
				{
					console.log(json);
					var teamTitle = json[0]["Home_Team"] + " V.S. " + json[0]["Away_Team"];
					$('#scoreboardTitle1').text(teamTitle);
					var awayPeriod  = "Away -  |";
					var over = json[0]["Status"];
					var homePeriod = "Home -  |";
					var breakdownTitle = "Sets - |  1  |  2  |  3  |  4  |  5  |";
					for(var i = 1; i<=5;i++){
						var awayPeriodData = json[0]["Away_Period_"+i];
						var homePeriodData = json[0]["Home_Period_"+i];
						
						if((typeof(parseInt(awayPeriodData)) == "number") && (typeof(awayPeriodData) != "object")){
							awayPeriod += awayPeriodData + "  |  ";
							
							}
						else{
						
						awayPeriod += "  0  " + "  |  ";
						
						}
						if((typeof(parseInt(homePeriodData)) == "number") && (typeof(homePeriodData) != "object")){
							homePeriod += homePeriodData + "  |  ";
							}
						else{
						homePeriod += "  0  " + "  |  ";
						
						}
						}
					$('#label1').text(breakdownTitle);
					$('#home1').text(homePeriod);
					$('#away1').text(awayPeriod);
					var currentperiod = json[0]["Current_Set"];
					$('#hscore1').text(json[0]["Home_Set_"+currentperiod]);
					$('#vscore1').text(json[0]["Away_Set_"+currentperiod]);
				
					if((parseInt(currentperiod) > 3)){
						currentperiod = currentperiod + "th";
						}
					switch(currentperiod){
						case "1":
						currentperiod = currentperiod + "st";
						break;
						case "2":
						currentperiod = currentperiod + "nd";
						break;
						case "3":
						currentperiod = currentperiod + "rd";
						break;
						
						}
						
					currentperiod = currentperiod + " set";
					if(over == "Y"){
						currentperiod = "Final Score";
						$('#gameTime1').text(currentperiod);
						}
					$('#gameTime').text(currentperiod);
					$('#gameTime').addClass("volleyball");
					
				},
				error: function()
				{
					alert("Failed To Retrieve Stats");
				}
			});
			},60000);
		}
		else{
			localStorage["count2"] = "1";
			SportsAPI.getWomensVolleyballStats(
			{
				
				success: function(json)
				{
					console.log(json);
					var teamTitle = json[0]["Home_Team"] + " V.S. " + json[0]["Away_Team"];
					$('#scoreboardTitle').text(teamTitle);
				    var awayPeriod  = "Away -  |";
					var homePeriod = "Home -  |";
					var over = json[0]["Status"];
					var breakdownTitle = "Sets - |  1  |  2  |  3  |  4  |  5  |";
					for(var i = 1; i<=5;i++){
						var awayPeriodData = json[0]["Away_Period_"+i ];
						var homePeriodData = json[0]["Home_Period_"+i];
						
						if((typeof(parseInt(awayPeriodData)) == "number") && (typeof(awayPeriodData) != "object")){
							awayPeriod += awayPeriodData + "  |  ";
							
							}
						else{
						
						awayPeriod += "  0  " + "  |  ";
						
						}
						if((typeof(parseInt(homePeriodData)) == "number") && (typeof(homePeriodData) != "object")){
							homePeriod += homePeriodData + "  |  ";
							}
						else{
						homePeriod += "  0  " + "  |  ";
						
						}
						}
					$('#label').text(breakdownTitle);
					$('#home').text(homePeriod);
					$('#away').text(awayPeriod);
					var currentperiod = json[0]["Current_Set"];
					$('#hscore1').text(json[0]["Home_Set_"+currentperiod]);
					$('#vscore1').text(json[0]["Away_Set_"+currentperiod]);
					
					if((parseInt(currentperiod) > 3)){
						currentperiod = currentperiod + "th";
						}
					switch(currentperiod){
						case "1":
						currentperiod = currentperiod + "st";
						break;
						case "2":
						currentperiod = currentperiod + "nd";
						break;
						case "3":
						currentperiod = currentperiod + "rd";
						break;
						
						}
					
					currentperiod = currentperiod + " set";
				    if(over == "Y"){
						currentperiod = "Final Score";
						$('#gameTime1').text(currentperiod);
						}
					$('#gameTime').text(currentperiod);
					$('#gameTime').addClass("football");
					
				},
				error: function() 
				{
					alert("Failed To Retrieve Stats");
				}
			});
			}
		}

function getwomenssoccerSS(){
		if (localStorage["count"] == "1"){
			window.setInterval(function (){
			SportsAPI.getWomensSoccerStats(
			{
				success: function(json)
				{
					console.log(json);
					var teamTitle = json[0]["Home_Team"] + " V.S. " + json[0]["Away_Team"];
					$('#scoreboardTitle').text(teamTitle);
					var awayPeriod  = "Away -  |";
					var homePeriod = "Home -  |";
					var over = json[0]["Status"];
					var breakdownTitle = "Period - |  1  |  2  |";
					for(var i = 1; i<=2;i++){
						var awayPeriodData = json[0]["Away_Period_"+i];
						var homePeriodData = json[0]["Home_Period_"+i];
						
						if((typeof(parseInt(awayPeriodData)) == "number") && (typeof(awayPeriodData) != "object")){
							awayPeriod += "  " +awayPeriodData + "  |  ";
							
							}
						else{
						awayPeriod += "  0  " + "  |  ";
						
						}
						if((typeof(parseInt(homePeriodData)) == "number") && (typeof(homePeriodData) != "object")){
							homePeriod += "  " +homePeriodData + "  |  ";
							}
						else{
						homePeriod += "  0  " + "  |  ";
						
						}
						}
					$('#label').text(breakdownTitle);
					$('#home').text(homePeriod);
					$('#away').text(awayPeriod);
					$('#hscore').text(json[0]["Home_Final_Score"]);
					$('#vscore').text(json[0]["Away_Final_Score"]);
					var currentperiod = json[0]["Period"];
					if((parseInt(currentperiod) > 3)){
						currentperiod = currentperiod + "th";
						}
					switch(currentperiod){
						case "1":
						currentperiod = currentperiod + "st";
						break;
						case "2":
						currentperiod = currentperiod + "nd";
						break;
						case "3":
						currentperiod = currentperiod + "rd";
						break;
						
						}
						
					currentperiod = currentperiod + " period";
					if(over == "Y"){
						currentperiod = "Final Score";
						$('#gameTime1').text(currentperiod);
						}
					$('#gameTime').text(currentperiod);
					$('#gameTime').addClass("soccer");
					
				},
				error: function()
				{
					alert("Failed To Retrieve News Articles");
				}
			});
			},60000);
		}
		else{
			localStorage["count"] = "1";
			SportsAPI.getWomensSoccerStats(
			{
				
				success: function(json)
				{
					console.log(json);
					var teamTitle = json[0]["Home_Team"] + " V.S. " + json[0]["Away_Team"];
					$('#scoreboardTitle').text(teamTitle);
					var awayPeriod  = "Away -  |";
					var homePeriod = "Home -  |";
					var over = json[0]["Status"];
					var breakdownTitle = "Period - |  1  |  2  |";
					for(var i = 1; i<=2;i++){
						var awayPeriodData = json[0]["Away_Period_"+i];
						var homePeriodData = json[0]["Home_Period_"+i];
						
						if((typeof(parseInt(awayPeriodData)) == "number") && (typeof(awayPeriodData) != "object")){
							awayPeriod += "  " +awayPeriodData + "  |  ";
							
							}
						else{
						
						awayPeriod += "  0  " + "  |  ";
						
						}
						if((typeof(parseInt(homePeriodData)) == "number") && (typeof(homePeriodData) != "object")){
							homePeriod += "  " +homePeriodData + "  |  ";
							}
						else{
						homePeriod += "  0  " + "  |  ";
						
						}
						}
					$('#label').text(breakdownTitle);
					$('#home').text(homePeriod);
					$('#away').text(awayPeriod);
					$('#hscore').text(json[0]["Home_Final_Score"]);
					$('#vscore').text(json[0]["Away_Final_Score"]);
					var currentperiod = json[0]["Period"];
					
					if((parseInt(currentperiod) > 3)){
						currentperiod = currentperiod + "th";
						}
					switch(currentperiod){
						case "1":
						currentperiod = currentperiod + "st";
						break;
						case "2":
						currentperiod = currentperiod + "nd";
						break;
						case "3":
						currentperiod = currentperiod + "rd";
						break;
						
						}
					
					currentperiod = currentperiod + " period";
				   if(over == "Y"){
						currentperiod = "Final Score";
						$('#gameTime1').text(currentperiod);
						}
					$('#gameTime').text(currentperiod);
					$('#gameTime').addClass("soccer");
					
				},
				error: function() 
				{
					alert("Failed To Retrieve News Articles");
				}
			});
			}
		}
function getmenssoccerSS(){
		if (localStorage["count"] == "1"){
			window.setInterval(function (){
			SportsAPI.getMensSoccerStats(
			{
				
				success: function(json)
				{
					console.log(json);
					var teamTitle = json[0]["Home_Team"] + " V.S. " + json[0]["Away_Team"];
					$('#scoreboardTitle').text(teamTitle);
					var awayPeriod  = "Away -  |";
					var homePeriod = "Home -  |";
					var over = json[0]["Status"];
					var breakdownTitle = "Period - |  1  |  2  |";
					for(var i = 1; i<=2;i++){
						var awayPeriodData = json[0]["Away_Period_"+i];
						var homePeriodData = json[0]["Home_Period_"+i];
						
						if((typeof(parseInt(awayPeriodData)) == "number") && (typeof(awayPeriodData) != "object")){
							awayPeriod += "  " +awayPeriodData + "  |  ";
							
							}
						else{
						
						awayPeriod += "  0  " + "  |  ";
						
						}
						if((typeof(parseInt(homePeriodData)) == "number") && (typeof(homePeriodData) != "object")){
							homePeriod += "  " +homePeriodData + "  |  ";
							}
						else{
						homePeriod += "  0  " + "  |  ";
						
						}
						}
					$('#label').text(breakdownTitle);
					$('#home').text(homePeriod);
					$('#away').text(awayPeriod);
					$('#hscore').text(json[0]["Home_Final_Score"]);
					$('#vscore').text(json[0]["Away_Final_Score"]);
					var currentperiod = json[0]["Period"];
					if((parseInt(currentperiod) > 3)){
						currentperiod = currentperiod + "th";
						}
					switch(currentperiod){
						case "1":
						currentperiod = currentperiod + "st";
						break;
						case "2":
						currentperiod = currentperiod + "nd";
						break;
						case "3":
						currentperiod = currentperiod + "rd";
						break;
						
						}
						
					currentperiod = currentperiod + " period";
					if(over == "Y"){
						currentperiod = "Final Score";
						$('#gameTime1').text(currentperiod);
						}
					$('#gameTime').text(currentperiod);
					$('#gameTime').addClass("soccer");
					
				},
				error: function()
				{
					alert("Failed To Retrieve News Articles");
				}
			});
			},60000);
		}
		else{
			localStorage["count"] = "1";
			SportsAPI.getMensSoccerStats(
			{
				
				success: function(json)
				{
					console.log(json);
					var teamTitle = json[0]["Home_Team"] + " V.S. " + json[0]["Away_Team"];
					$('#scoreboardTitle').text(teamTitle);
					var awayPeriod  = "Away -  |";
					var homePeriod = "Home -  |";
					var over = json[0]["Status"];
					var breakdownTitle = "Period - |  1  |  2  |";
					for(var i = 1; i<=2;i++){
						var awayPeriodData = json[0]["Away_Period_"+i];
						var homePeriodData = json[0]["Home_Period_"+i];
						
						if((typeof(parseInt(awayPeriodData)) == "number") && (typeof(awayPeriodData) != "object")){
							awayPeriod += "  " +awayPeriodData + "  |  ";
							
							}
						else{
						
						awayPeriod += "  0  " + "  |  ";
						
						}
						if((typeof(parseInt(homePeriodData)) == "number") && (typeof(homePeriodData) != "object")){
							homePeriod += "  " +homePeriodData + "  |  ";
							}
						else{
						homePeriod += "  0  " + "  |  ";
						
						}
						}
					$('#label').text(breakdownTitle);
					$('#home').text(homePeriod);
					$('#away').text(awayPeriod);
					$('#hscore').text(json[0]["Home_Final_Score"]);
					$('#vscore').text(json[0]["Away_Final_Score"]);
					var currentperiod = json[0]["Period"];
					
					if((parseInt(currentperiod) > 3)){
						currentperiod = currentperiod + "th";
						}
					switch(currentperiod){
						case "1":
						currentperiod = currentperiod + "st";
						break;
						case "2":
						currentperiod = currentperiod + "nd";
						break;
						case "3":
						currentperiod = currentperiod + "rd";
						break;
						
						}
					
					currentperiod = currentperiod + " period";
				    if(over == "Y"){
						currentperiod = "Final Score";
						$('#gameTime1').text(currentperiod);
						}
					$('#gameTime').text(currentperiod);
					$('#gameTime').addClass("soccer");
					
				},
				error: function() 
				{
					alert("Failed To Retrieve News Articles");
				}
			});
			}
		}
function getwomensbasketballSS(){
		if (localStorage["count2"] == "1"){
			window.setInterval(function (){
			SportsAPI.getWomensBasketballStats(
			{
				
				success: function(json)
				{
					console.log(json);
					var awayPeriod  = "Away -  ";
					var homePeriod = "Home -  ";
					var breakdownTitle = "Period - | 1  |  2  |";
					var over = json[0]["Status"];
					var teamTitle = json[0]["Home_Team"] + " V.S. " + json[0]["Away_Team"];
					$('#scoreboardTitle1').text(teamTitle);
					
					for(var i = 1; i<=2;i++){
						var awayPeriodData = json[0]["Away_Period_"+i +"_Score"];
						var homePeriodData = json[0]["Home_Period_"+i + "_Score"];
						
						if((typeof(parseInt(awayPeriodData)) == "number") && (typeof(awayPeriodData) != "object")){
							awayPeriod += awayPeriodData + "  |  ";
							
							}
						else{
						
						awayPeriod += "  0  " + "  |  ";
						
						}
						if((typeof(parseInt(homePeriodData)) == "number") && (typeof(homePeriodData) != "object")){
							homePeriod += homePeriodData + "  |  ";
							}
						else{
						homePeriod += "  0  " + "  |  ";
						
						}
						}
					$('#label1').text(breakdownTitle);
					$('#home1').text(homePeriod);
					$('#away1').text(awayPeriod);
					$('#scoreboardTitle1').text(teamTitle);
					$('#hscore1').text(json[0]["Home_Total_Score"]);
					$('#vscore1').text(json[0]["Away_Total_Score"]);
					var currentperiod = json[0]["Period"];
					if((parseInt(currentperiod) > 3)){
						currentperiod = currentperiod + "th";
						}
					switch(currentperiod){
						case "1":
						currentperiod = currentperiod + "st";
						break;
						case "2":
						currentperiod = currentperiod + "nd";
						break;
						case "3":
						currentperiod = currentperiod + "rd";
						break;
						
						}
						
					currentperiod = currentperiod + " period";
					 if(over == "Y"){
						currentperiod = "Final Score";
						$('#gameTime1').text(currentperiod);
						}
					$('#gameTime1').text(currentperiod);
					$('#gameTime1').addClass("basketball");
					
				},
				error: function()
				{
					alert("Failed To Retrieve News Articles");
				}
			});
			},60000);
		}
		else{
			localStorage["count2"] = "1";
			
			SportsAPI.getWomensBasketballStats(
			{
				
				success: function(json)
				{
					console.log(json);
					var awayPeriod  = "Away -  ";
					var homePeriod = "Home -  ";
					var breakdownTitle = "Period - |  1  |  2  |";
					var over = json[0]["Status"];
					var teamTitle = json[0]["Home_Team"] + " V.S. " + json[0]["Away_Team"];
					$('#scoreboardTitle1').text(teamTitle);
					
					for(var i = 1; i<=2;i++){
						var awayPeriodData = json[0]["Away_Period_"+i +"_Score"];
						var homePeriodData = json[0]["Home_Period_"+i + "_Score"];
						
						if((typeof(parseInt(awayPeriodData)) == "number") && (typeof(awayPeriodData) != "object")){
							awayPeriod += awayPeriodData + "  |  ";
							
							}
						else{
						
						awayPeriod += "  0  " + "  |  ";
						
						}
						if((typeof(parseInt(homePeriodData)) == "number") && (typeof(homePeriodData) != "object")){
							homePeriod += homePeriodData + "  |  ";
							}
						else{
						homePeriod += "  0  " + "  |  ";
						
						}
						}
					$('#label1').text(breakdownTitle);
					$('#home1').text(homePeriod);
					$('#away1').text(awayPeriod);
					$('#scoreboardTitle1').text(teamTitle);
					$('#hscore1').text(json[0]["Home_Total_Score"]);
					$('#vscore1').text(json[0]["Away_Total_Score"]);
					var currentperiod = json[0]["Period"];
					
					if((parseInt(currentperiod) > 3)){
						currentperiod = currentperiod + "th";
						}
					switch(currentperiod){
						case "1":
						currentperiod = currentperiod + "st";
						break;
						case "2":
						currentperiod = currentperiod + "nd";
						break;
						case "3":
						currentperiod = currentperiod + "rd";
						break;
						
						}
					
					currentperiod = currentperiod + " period";
				    if(over == "Y"){
						currentperiod = "Final Score";
						$('#gameTime1').text(currentperiod);
						}
					$('#gameTime1').text(currentperiod);
					$('#gameTime1').addClass("basketball");
					
				},
				error: function() 
				{
					alert("Failed To Retrieve News Articles");
				}
			});
			}
		}
function getmensfootballSS(){
		if (localStorage["count2"] == "1"){
			window.setInterval(function (){
			SportsAPI.getMensFootballStats(
			{
				
				success: function(json)
				{
					console.log(json);
					var awayPeriod  = "Away -  ";
					var homePeriod = "Home -  ";
					var over = json[0]["Status"];
					var breakdownTitle = "Period - | 1  |  2  |  3  |  4  |";
					var teamTitle = json[0]["Home_Team"] + " V.S. " + json[0]["Away_Team"];
					$('#scoreboardTitle1').text(teamTitle);
					
					for(var i = 1; i<=4;i++){
						var awayPeriodData = json[0]["Away_Period_"+i +"_Score"];
						var homePeriodData = json[0]["Home_Period_"+i + "_Score"];
						
						if((typeof(parseInt(awayPeriodData)) == "number") && (typeof(awayPeriodData) != "object")){
							awayPeriod += awayPeriodData + "  |  ";
							
							}
						else{
						
						awayPeriod += "  0  " + "  |  ";
						
						}
						if((typeof(parseInt(homePeriodData)) == "number") && (typeof(homePeriodData) != "object")){
							homePeriod += homePeriodData + "  |  ";
							}
						else{
						homePeriod += "  0  " + "  |  ";
						
						}
						}
					$('#label1').text(breakdownTitle);
					$('#home1').text(homePeriod);
					$('#away1').text(awayPeriod);
					$('#scoreboardTitle1').text(teamTitle);
					$('#hscore1').text(json[0]["Home_Total_Score"]);
					$('#vscore1').text(json[0]["Away_Total_Score"]);
					var currentperiod = json[0]["Period"];
					if((parseInt(currentperiod) > 3)){
						currentperiod = currentperiod + "th";
						}
					switch(currentperiod){
						case "1":
						currentperiod = currentperiod + "st";
						break;
						case "2":
						currentperiod = currentperiod + "nd";
						break;
						case "3":
						currentperiod = currentperiod + "rd";
						break;
						
						}
						
					currentperiod = currentperiod + " period";
					 if(over == "Y"){
						currentperiod = "Final Score";
						$('#gameTime1').text(currentperiod);
						}
					$('#gameTime1').text(currentperiod);
					$('#gameTime1').addClass("basketball");
					
				},
				error: function()
				{
					alert("Failed To Retrieve News Articles");
				}
			});
			},60000);
		}
		else{
			localStorage["count2"] = "1";
			
			SportsAPI.getMensFootballStats(
			{
				
				success: function(json)
				{
					console.log(json);
					var awayPeriod  = "Away -  ";
					var homePeriod = "Home -  ";
					var breakdownTitle = "Period - |  1  |  2  |  3  |  4  |";
					var teamTitle = json[0]["Home_Team"] + " V.S. " + json[0]["Away_Team"];
					$('#scoreboardTitle1').text(teamTitle);
					
					for(var i = 1; i<=4;i++){
						var awayPeriodData = json[0]["Away_Period_"+i +"_Score"];
						var homePeriodData = json[0]["Home_Period_"+i + "_Score"];
						
						if((typeof(parseInt(awayPeriodData)) == "number") && (typeof(awayPeriodData) != "object")){
							awayPeriod += awayPeriodData + "  |  ";
							
							}
						else{
						
						awayPeriod += "  0  " + "  |  ";
						
						}
						if((typeof(parseInt(homePeriodData)) == "number") && (typeof(homePeriodData) != "object")){
							homePeriod += homePeriodData + "  |  ";
							}
						else{
						homePeriod += "  0  " + "  |  ";
						
						}
						}
					$('#label1').text(breakdownTitle);
					$('#home1').text(homePeriod);
					$('#away1').text(awayPeriod);
					var over = json[0]["Status"];
					$('#scoreboardTitle1').text(teamTitle);
					$('#hscore1').text(json[0]["Home_Total_Score"]);
					$('#vscore1').text(json[0]["Away_Total_Score"]);
					var currentperiod = json[0]["Period"];
					
					if((parseInt(currentperiod) > 3)){
						currentperiod = currentperiod + "th";
						}
					switch(currentperiod){
						case "1":
						currentperiod = currentperiod + "st";
						break;
						case "2":
						currentperiod = currentperiod + "nd";
						break;
						case "3":
						currentperiod = currentperiod + "rd";
						break;
						
						}
					
					currentperiod = currentperiod + " period";
				      if(over == "Y"){
						currentperiod = "Final Score";
						$('#gameTime1').text(currentperiod);
						}
					$('#gameTime1').text(currentperiod);
					$('#gameTime1').addClass("basketball");
					
				},
				error: function() 
				{
					alert("Failed To Retrieve News Articles");
				}
			});
			}
		}
function getmensbasketballSS(){
		if (localStorage["count2"] == "1"){
			window.setInterval(function (){
			SportsAPI.getMensBasketballStats(
			{
				
				success: function(json)
				{
					console.log(json);
					var awayPeriod  = "Away -  ";
					var homePeriod = "Home -  ";
					var over = json[0]["Status"];
					var breakdownTitle = "Period - |  1  |  2  | ";
					var teamTitle = json[0]["Home_Team"] + " V.S. " + json[0]["Away_Team"];
					$('#scoreboardTitle1').text(teamTitle);
					
					for(var i = 1; i<=2;i++){
						var awayPeriodData = json[0]["Away_Period_"+i +"_Score"];
						var homePeriodData = json[0]["Home_Period_"+i + "_Score"];
						
						if((typeof(parseInt(awayPeriodData)) == "number") && (typeof(awayPeriodData) != "object")){
							awayPeriod += awayPeriodData + "  |  ";
							
							}
						else{
						
						awayPeriod += "  0  " + "  |  ";
						
						}
						if((typeof(parseInt(homePeriodData)) == "number") && (typeof(homePeriodData) != "object")){
							homePeriod += homePeriodData + "  |  ";
							}
						else{
						homePeriod += "  0  " + "  |  ";
						
						}
						}
					$('#label1').text(breakdownTitle);
					$('#home1').text(homePeriod);
					$('#away1').text(awayPeriod);
					$('#scoreboardTitle1').text(teamTitle);
					$('#hscore1').text(json[0]["Home_Total_Score"]);
					$('#vscore1').text(json[0]["Away_Total_Score"]);
					var currentperiod = json[0]["Period"];
					if((parseInt(currentperiod) > 3)){
						currentperiod = currentperiod + "th";
						}
					switch(currentperiod){
						case "1":
						currentperiod = currentperiod + "st";
						break;
						case "2":
						currentperiod = currentperiod + "nd";
						break;
						case "3":
						currentperiod = currentperiod + "rd";
						break;
						
						}
						
					currentperiod = currentperiod + " period";
					if(over == "Y"){
						currentperiod = "Final Score";
						$('#gameTime1').text(currentperiod);
						}
					$('#gameTime1').text(currentperiod);
					$('#gameTime1').addClass("basketball");
					
				},
				error: function()
				{
					alert("Failed To Retrieve News Articles");
				}
			});
			},60000);
		}
		else{
			localStorage["count2"] = "1";
			
			SportsAPI.getMensBasketballStats(
			{
				
				success: function(json)
				{
					console.log(json);
					
					var teamTitle = json[0]["Home_Team"] + " V.S. " + json[0]["Away_Team"];
					$('#scoreboardTitle1').text(teamTitle);
					var awayPeriod  = "Away -  ";
					var homePeriod = "Home -  ";
					var over = json[0]["Status"];
					var breakdownTitle = "Period - |  1  |  2  |";
					for(var i = 1; i<=2;i++){
						var awayPeriodData = json[0]["Away_Period_"+i +"_Score"];
						var homePeriodData = json[0]["Home_Period_"+i + "_Score"];
						
						if((typeof(parseInt(awayPeriodData)) == "number") && (typeof(awayPeriodData) != "object")){
							awayPeriod += awayPeriodData + "  |  ";
							
							}
						else{
						
						awayPeriod += "  0  " + "  |  ";
						
						}
						if((typeof(parseInt(homePeriodData)) == "number") && (typeof(homePeriodData) != "object")){
							homePeriod += homePeriodData + "  |  ";
							}
						else{
						homePeriod += "  0  " + "  |  ";
						
						}
						}
					$('#label1').text(breakdownTitle);
					$('#home1').text(homePeriod);
					$('#away1').text(awayPeriod);
					$('#scoreboardTitle1').text(teamTitle);
					$('#hscore1').text(json[0]["Home_Total_Score"]);
					$('#vscore1').text(json[0]["Away_Total_Score"]);
					var currentperiod = json[0]["Period"];
					
					if((parseInt(currentperiod) > 3)){
						currentperiod = currentperiod + "th";
						}
					switch(currentperiod){
						case "1":
						currentperiod = currentperiod + "st";
						break;
						case "2":
						currentperiod = currentperiod + "nd";
						break;
						case "3":
						currentperiod = currentperiod + "rd";
						break;
						
						}
					
					currentperiod = currentperiod + " period";
				    if(over == "Y"){
						currentperiod = "Final Score";
						$('#gameTime1').text(currentperiod);
						}
					$('#gameTime1').text(currentperiod);
					$('#gameTime1').addClass("basketball");
					
				},
				error: function() 
				{
					alert("Failed To Retrieve News Articles");
				}
			});
			}
		}
function getmensbaseballSS(){
		if (localStorage["count2"] == "1"){
			window.setInterval(function (){
			SportsAPI.getMensBaseballStats(
			{
				
				success: function(json)
				{
					console.log(json);
					var teamTitle = json[0]["Home_Team_Name"] + " V.S. " + json[0]["Away_Team_Name"];
					var awayInning  = "Away -  ";
					var homeInning = "Home -  ";
					var breakdownTitle = "Inning -  1  |  2  |  3  | 4  |  5  |  6  |  7  |  8  |  9  |";
					$('#scoreboardTitle1').text(teamTitle);
					for(var i = 1; i<=9;i++){
						var awayInn = json[0]["Away_Inning"+i];
						var homeInn = json[0]["Home_Inning"+i];
						
						if((typeof(parseInt(awayInn)) == "number")  && (typeof(awayInn) != "object")){
							awayInning += awayInn + "  |  ";
							
							}
						else{
						
						awayInning += "  0  " + "  |  ";
						
						}
						if((typeof(parseInt(homeInn)) == "number")  && (typeof(homeInn) != "object")){
							homeInning += homeInn + "  |  ";
							}
						else{
						homeInning += "  0  " + "  |  ";
						
						}
						}
					$('#hscore1').text(json[0]["Home_Final_Score"]);
					$('#vscore1').text(json[0]["Away_Final_Score"]);
					$('#label1').text(breakdownTitle);
					$('#home1').text(homeInning);
					$('#away1').text(awayInning);
					var over = json[0]["Status"];
					var currentinning = json[0]["Current_Inning"];
					if((parseInt(currentinning) > 3)){
						currentinning = currentinning + "th";
						}
					switch(currentinning){
						case "1":
						currentinning = currentinning + "st";
						break;
						case "2":
						currentinning = currentinning + "nd";
						break;
						case "3":
						currentinning = currentinning + "rd";
						break;
						
						}
						
					currentinning = currentinning + " inning";
					if(over == "Y"){
						currentinning = "Final Score";
						$('#gameTime1').text(currentinning);
						}
					$('#gameTime1').text(currentinning);
					$('#gameTime1').addClass("baseball");
					
				},
				error: function()
				{
					alert("Failed To Retrieve News Articles");
				}
			});
			},60000);
		}
		else{
			localStorage["count2"] = "1";
			SportsAPI.getMensBaseballStats(
			{
				
				success: function(json)
				{
					console.log(json);
					var awayInning  = "Away -  ";
					var homeInning = "Home -  ";
					var breakdownTitle = "Inning -  1  |  2  |  3  | 4  |  5  |  6  |  7  |  8  |  9 |";
					var over = json[0]["Status"];
					var teamTitle = json[0]["Home_Team_Name"] + " V.S. " + json[0]["Away_Team_Name"];
					$('#scoreboardTitle1').text(teamTitle);
					
					for(var i = 1; i<=9;i++){
						var awayInn = json[0]["Away_Inning"+i];
						var homeInn = json[0]["Home_Inning"+i];
						
						if((typeof(parseInt(awayInn)) == "number") && (typeof(awayInn) != "object")){
							
							awayInning += awayInn + "  |  ";
							
							}
						else{
						
						awayInning += "  0  " + "  |  ";
						
						}
						if((typeof(parseInt(homeInn)) == "number")  && (typeof(homeInn) != "object")){
							homeInning += homeInn + "  |  ";
							}
						else{
							
						homeInning += "  0  " + "  |  ";
						
						}
						}
					$('#label1').text(breakdownTitle);
					$('#home1').text(homeInning);
					$('#away1').text(awayInning);
					$('#hscore1').text(json[0]["Home_Final_Score"]);
					$('#vscore1').text(json[0]["Away_Final_Score"]);
					
					var currentinning = json[0]["Current_Inning"];
					if((parseInt(currentinning) > 3)){
						currentinning = currentinning + "th";
						}
					switch(currentinning){
						case "1":
						currentinning = currentinning + "st";
						break;
						case "2":
						currentinning = currentinning + "nd";
						break;
						case "3":
						currentinning = currentinning + "rd";
						break;
						
						}
						
					currentinning = currentinning + " inning";
					if(over == "Y"){
						currentinning = "Final Score";
						$('#gameTime1').text(currentinning);
						}
					$('#gameTime1').text(currentinning);
					$('#gameTime1').addClass("baseball");
					
				},
				error: function() 
				{
					alert("Failed To Retrieve News Articles");
				}
			});
			}
		}
function getwomenssoftballSS(){
		if (localStorage["count2"] == "1"){
			
			window.setInterval(function (){
			SportsAPI.getWomensSoftballStats(
			{
				
				success: function(json)
				{
					console.log(json);
					var awayInning  = "Away -  ";
					var homeInning = "Home -  ";
				    var over = json[0]["status"];
				
					
					var breakdownTitle = "Inning -  1  |  2  |  3  | 4  |  5  |  6  |  7  |  8  |  9 |";
					var teamTitle = json[0]["Home_Team_Name"] + " V.S. " + json[0]["Away_Team_Name"];
					$('#scoreboardTitle1').text(teamTitle);
					
					for(var i = 1; i<=9;i++){
						var awayInn = json[0]["Away_Inning"+i];
						var homeInn = json[0]["Home_Inning"+i];
						
						if((typeof(parseInt(awayInn)) == "number")  && (typeof(awayInn) != "object")){
							awayInning += awayInn + "  |  ";
							
							}
						else{
						
						awayInning += "  0  " + "  |  ";
						
						}
						if((typeof(parseInt(homeInn)) == "number")  && (typeof(homeInn) != "object")){
							homeInning += homeInn + "  |  ";
							}
						else{
						homeInning += "  0  " + "  |  ";
						
						}
						}
					$('#label1').text(breakdownTitle);
					$('#home1').text(homeInning);
					$('#away1').text(awayInning);
					$('#scoreboardTitle1').text(teamTitle);
					$('#hscore1').text(json[0]["Home_Final_Score"]);
					$('#vscore1').text(json[0]["Away_Final_Score"]);
					var currentinning = json[0]["Current_Inning"];
					if((parseInt(currentinning) > 3)){
						currentinning = currentinning + "th";
						}
					switch(currentinning){
						case "1":
						currentinning = currentinning + "st";
						break;
						case "2":
						currentinning = currentinning + "nd";
						break;
						case "3":
						currentinning = currentinning + "rd";
						break;
						
						}
						
					currentinning = currentinning + " inning";
					if(over == "Y"){
						currentinning = "Final Score";
						$('#gameTime1').text(currentinning);
						}
					$('#gameTime1').text(currentinning);
					$('#gameTime1').addClass("softball");
					
				},
				error: function()
				{
					alert("Failed To Retrieve News Articles");
				}
			});
			},60000);
		}
		else{
			localStorage["count2"] = "1";
			SportsAPI.getWomensSoftballStats(
			{
				
				success: function(json)
				{
					console.log(json);
				    var awayInning  = "Away -  ";
					var homeInning = "Home -  ";
				    var over = json[0]["status"];
					var breakdownTitle = "Inning -  1  |  2  |  3  | 4  |  5  |  6  |  7  |  8  |  9 |";
					var teamTitle = json[0]["Home_Team_Name"] + " V.S. " + json[0]["Away_Team_Name"];
					$('#scoreboardTitle1').text(teamTitle);
					
					for(var i = 1; i<=9;i++){
						var awayInn = json[0]["Away_Inning"+i];
						var homeInn = json[0]["Home_Inning"+i];
						
						if((typeof(parseInt(awayInn)) == "number")  && (typeof(awayInn) != "object")){
							awayInning += awayInn + "  |  ";
							
							}
						else{
						
						awayInning += "  0  " + "  |  ";
						
						}
						if((typeof(parseInt(homeInn)) == "number")  && (typeof(homeInn) != "object")){
							homeInning += homeInn + "  |  ";
							}
						else{
						homeInning += "  0  " + "  |  ";
						
						}
						}
					$('#label1').text(breakdownTitle);
					$('#home1').text(homeInning);
					$('#away1').text(awayInning);
					$('#scoreboardTitle1').text(teamTitle);
					$('#hscore1').text(json[0]["Home_Final_Score"]);
					$('#vscore1').text(json[0]["Away_Final_Score"]);
					var currentinning = json[0]["Current_Inning"];
					if((parseInt(currentinning) > 3)){
						currentinning = currentinning + "th";
						}
					switch(currentinning){
						case "1":
						currentinning = currentinning + "st";
						break;
						case "2":
						currentinning = currentinning + "nd";
						break;
						case "3":
						currentinning = currentinning + "rd";
						break;
						
						}
						
					currentinning = currentinning + " inning";
					if(over == "Y"){
						currentinning = "Final Score";
						$('#gameTime1').text(currentinning);
						}
					$('#gameTime1').text(currentinning);
					$('#gameTime1').addClass("baseball");
					
				},
				error: function() 
				{
					alert("Failed To Retrieve News Articles");
				}
			});
			}
		}