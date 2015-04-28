var SportsAPI = {
	getMensBaseball : function (callObj) 
	{
		if(callObj)
		{
			$.ajax(
			{
				url:localStorage["ServerAddress"]+"/Baseball_Roster",
				dataType: 'jsonp',
				success:function(json)
				{
					if($.isFunction(callObj))
					{
						callObj(json, true);
					}
					else if(callObj.success && $.isFunction(callObj.success))
					{
						callObj.success(json);
					}
				},
				error:function()
				{
					if($.isFunction(callObj))
					{
						callObj(json, false);
					}
					else if(callObj.error && $.isFunction(callObj.error))
					{
						callObj.error();
					}
					else if(callObj.fail && $.isFunction(callObj.fail))
					{
						callObj.fail();
					}
				}
			});
		}
	},
	getMensSoccer : function (callObj) 
	{
		if(callObj)
		{
			$.ajax(
			{
				url:localStorage["ServerAddress"]+"/Mens_Soccer_Roster",
				dataType: 'jsonp',
				success:function(json)
				{
					if($.isFunction(callObj))
					{
						callObj(json, true);
					}
					else if(callObj.success && $.isFunction(callObj.success))
					{
						callObj.success(json);
					}
				},
				error:function()
				{
					if($.isFunction(callObj))
					{
						callObj(json, false);
					}
					else if(callObj.error && $.isFunction(callObj.error))
					{
						callObj.error();
					}
					else if(callObj.fail && $.isFunction(callObj.fail))
					{
						callObj.fail();
					}
				}
			});
		}
	},
	getWomensSoftball : function (callObj) 
	{
		if(callObj)
		{
			$.ajax(
			{
				url:localStorage["ServerAddress"]+"/Softball_Roster",
				dataType: 'jsonp',
				success:function(json)
				{
					if($.isFunction(callObj))
					{
						callObj(json, true);
					}
					else if(callObj.success && $.isFunction(callObj.success))
					{
						callObj.success(json);
					}
				},
				error:function()
				{
					if($.isFunction(callObj))
					{
						callObj(json, false);
					}
					else if(callObj.error && $.isFunction(callObj.error))
					{
						callObj.error();
					}
					else if(callObj.fail && $.isFunction(callObj.fail))
					{
						callObj.fail();
					}
				}
			});
		}
	},
	getWomensSoccer : function (callObj) 
	{
		if(callObj)
		{
			$.ajax(
			{
				url:localStorage["ServerAddress"]+"/Womens_Soccer_Roster",
				dataType: 'jsonp',
				success:function(json)
				{
					if($.isFunction(callObj))
					{
						callObj(json, true);
					}
					else if(callObj.success && $.isFunction(callObj.success))
					{
						callObj.success(json);
					}
				},
				error:function()
				{
					if($.isFunction(callObj))
					{
						callObj(json, false);
					}
					else if(callObj.error && $.isFunction(callObj.error))
					{
						callObj.error();
					}
					else if(callObj.fail && $.isFunction(callObj.fail))
					{
						callObj.fail();
					}
				}
			});
		}
	},
	getMensFootball : function (callObj) 
	{
		if(callObj)
		{
			$.ajax(
			{
				url:localStorage["ServerAddress"]+"/football",
				dataType: 'jsonp',
				success:function(json)
				{
					if($.isFunction(callObj))
					{
						callObj(json, true);
					}
					else if(callObj.success && $.isFunction(callObj.success))
					{
						callObj.success(json);
					}
				},
				error:function()
				{
					if($.isFunction(callObj))
					{
						callObj(json, false);
					}
					else if(callObj.error && $.isFunction(callObj.error))
					{
						callObj.error();
					}
					else if(callObj.fail && $.isFunction(callObj.fail))
					{
						callObj.fail();
					}
				}
			});
		}
	},
	getMensBasketball : function (callObj) 
	{
		if(callObj)
		{
			$.ajax(
			{
				url:localStorage["ServerAddress"]+"/mens_basketball",
				dataType: 'jsonp',
				success:function(json)
				{
					if($.isFunction(callObj))
					{
						callObj(json, true);
					}
					else if(callObj.success && $.isFunction(callObj.success))
					{
						callObj.success(json);
					}
				},
				error:function()
				{
					if($.isFunction(callObj))
					{
						callObj(json, false);
					}
					else if(callObj.error && $.isFunction(callObj.error))
					{
						callObj.error();
					}
					else if(callObj.fail && $.isFunction(callObj.fail))
					{
						callObj.fail();
					}
				}
			});
		}
	},
	getWomensVolleyball : function (callObj) 
	{
		if(callObj)
		{
			$.ajax(
			{
				url:localStorage["ServerAddress"]+"/volleyball_Roster",
				dataType: 'jsonp',
				success:function(json)
				{
					if($.isFunction(callObj))
					{
						callObj(json, true);
					}
					else if(callObj.success && $.isFunction(callObj.success))
					{
						callObj.success(json);
					}
				},
				error:function()
				{
					if($.isFunction(callObj))
					{
						callObj(json, false);
					}
					else if(callObj.error && $.isFunction(callObj.error))
					{
						callObj.error();
					}
					else if(callObj.fail && $.isFunction(callObj.fail))
					{
						callObj.fail();
					}
				}
			});
		}
	},
	getWomensBasketball : function (callObj) 
	{
		if(callObj)
		{
			$.ajax(
			{
				url:localStorage["ServerAddress"]+"/womens_basketball",
				dataType: 'jsonp',
				success:function(json)
				{
					if($.isFunction(callObj))
					{
						callObj(json, true);
					}
					else if(callObj.success && $.isFunction(callObj.success))
					{
						callObj.success(json);
					}
				},
				error:function()
				{
					if($.isFunction(callObj))
					{
						callObj(json, false);
					}
					else if(callObj.error && $.isFunction(callObj.error))
					{
						callObj.error();
					}
					else if(callObj.fail && $.isFunction(callObj.fail))
					{
						callObj.fail();
					}
				}
			});
		}
	},
	getMensBowlingRoster : function (callObj) 
	{
		if(callObj)
		{
			$.ajax(
			{
				url:localStorage["ServerAddress"]+"/Mens_Bowling_Roster",
				dataType: 'jsonp',
				success:function(json)
				{
					if($.isFunction(callObj))
					{
						callObj(json, true);
					}
					else if(callObj.success && $.isFunction(callObj.success))
					{
						callObj.success(json);
					}
				},
				error:function()
				{
					if($.isFunction(callObj))
					{
						callObj(json, false);
					}
					else if(callObj.error && $.isFunction(callObj.error))
					{
						callObj.error();
					}
					else if(callObj.fail && $.isFunction(callObj.fail))
					{
						callObj.fail();
					}
				}
			});
		}
	},
	getMensCrossCountry : function (callObj) 
	{
		if(callObj)
		{
			$.ajax(
			{
				url:localStorage["ServerAddress"]+"/Mens_Cross_Country_Roster",
				dataType: 'jsonp',
				success:function(json)
				{
					if($.isFunction(callObj))
					{
						callObj(json, true);
					}
					else if(callObj.success && $.isFunction(callObj.success))
					{
						callObj.success(json);
					}
				},
				error:function()
				{
					if($.isFunction(callObj))
					{
						callObj(json, false);
					}
					else if(callObj.error && $.isFunction(callObj.error))
					{
						callObj.error();
					}
					else if(callObj.fail && $.isFunction(callObj.fail))
					{
						callObj.fail();
					}
				}
			});
		}
	},
	getMensGolf : function (callObj) 
	{
		if(callObj)
		{
			$.ajax(
			{
				url:localStorage["ServerAddress"]+"/Mens_Golf_Roster",
				dataType: 'jsonp',
				success:function(json)
				{
					if($.isFunction(callObj))
					{
						callObj(json, true);
					}
					else if(callObj.success && $.isFunction(callObj.success))
					{
						callObj.success(json);
					}
				},
				error:function()
				{
					if($.isFunction(callObj))
					{
						callObj(json, false);
					}
					else if(callObj.error && $.isFunction(callObj.error))
					{
						callObj.error();
					}
					else if(callObj.fail && $.isFunction(callObj.fail))
					{
						callObj.fail();
					}
				}
			});
		}
	},
	getMensTrack : function (callObj) 
	{
		if(callObj)
		{
			$.ajax(
			{
				url:localStorage["ServerAddress"]+"/mens_track_roster",
				dataType: 'jsonp',
				success:function(json)
				{
					if($.isFunction(callObj))
					{
						
						callObj(json, true);
					}
					else if(callObj.success && $.isFunction(callObj.success))
					{
						callObj.success(json);
					}
				},
				error:function()
				{
					if($.isFunction(callObj))
					{
						callObj(json, false);
					}
					else if(callObj.error && $.isFunction(callObj.error))
					{
						callObj.error();
					}
					else if(callObj.fail && $.isFunction(callObj.fail))
					{
						callObj.fail();
					}
				}
			});
		}
	},
	getMensTennis : function (callObj) 
	{
		if(callObj)
		{
			
			$.ajax(
			{
				url:localStorage["ServerAddress"]+"/mens_tennis_roster",
				dataType: 'jsonp',
				success:function(json)
				{
					if($.isFunction(callObj))
					{
						callObj(json, true);
					}
					else if(callObj.success && $.isFunction(callObj.success))
					{
						callObj.success(json);
					}
				},
				error:function()
				{
					alert("Error");
					if($.isFunction(callObj))
					{
						callObj(json, false);
					}
					else if(callObj.error && $.isFunction(callObj.error))
					{
						callObj.error();
					}
					else if(callObj.fail && $.isFunction(callObj.fail))
					{
						callObj.fail();
					}
				}
			});
		}
	},
	getWomensBowling : function (callObj) 
	{
		if(callObj)
		{
			$.ajax(
			{
				url:localStorage["ServerAddress"]+"/womens_bowling_roster",
				dataType: 'jsonp',
				success:function(json)
				{
					if($.isFunction(callObj))
					{
						callObj(json, true);
					}
					else if(callObj.success && $.isFunction(callObj.success))
					{
						callObj.success(json);
					}
				},
				error:function()
				{
					if($.isFunction(callObj))
					{
						callObj(json, false);
					}
					else if(callObj.error && $.isFunction(callObj.error))
					{
						callObj.error();
					}
					else if(callObj.fail && $.isFunction(callObj.fail))
					{
						callObj.fail();
					}
				}
			});
		}
	},
	getWomensCrossCountry : function (callObj) 
	{
		if(callObj)
		{
			$.ajax(
			{
				url:localStorage["ServerAddress"]+"/womens_cross_country_roster",
				dataType: 'jsonp',
				success:function(json)
				{
					if($.isFunction(callObj))
					{
						callObj(json, true);
					}
					else if(callObj.success && $.isFunction(callObj.success))
					{
						callObj.success(json);
					}
				},
				error:function()
				{
					if($.isFunction(callObj))
					{
						callObj(json, false);
					}
					else if(callObj.error && $.isFunction(callObj.error))
					{
						callObj.error();
					}
					else if(callObj.fail && $.isFunction(callObj.fail))
					{
						callObj.fail();
					}
				}
			});
		}
	},
	getWomensGolf : function (callObj) 
	{
		if(callObj)
		{
			$.ajax(
			{
				url:localStorage["ServerAddress"]+"/womens_golf_roster",
				dataType: 'jsonp',
				success:function(json)
				{
					if($.isFunction(callObj))
					{
						callObj(json, true);
					}
					else if(callObj.success && $.isFunction(callObj.success))
					{
						callObj.success(json);
					}
				},
				error:function()
				{
					if($.isFunction(callObj))
					{
						callObj(json, false);
					}
					else if(callObj.error && $.isFunction(callObj.error))
					{
						callObj.error();
					}
					else if(callObj.fail && $.isFunction(callObj.fail))
					{
						callObj.fail();
					}
				}
			});
		}
	},
	getWomensTennis : function (callObj) 
	{
		if(callObj)
		{
			$.ajax(
			{
				url:localStorage["ServerAddress"]+"/womens_tennis_roster",
				dataType: 'jsonp',
				success:function(json)
				{
					if($.isFunction(callObj))
					{
						callObj(json, true);
					}
					else if(callObj.success && $.isFunction(callObj.success))
					{
						callObj.success(json);
					}
				},
				error:function()
				{
					if($.isFunction(callObj))
					{
						callObj(json, false);
					}
					else if(callObj.error && $.isFunction(callObj.error))
					{
						callObj.error();
					}
					else if(callObj.fail && $.isFunction(callObj.fail))
					{
						callObj.fail();
					}
				}
			});
		}
	},
	getWomensTrack : function (callObj) 
	{
		if(callObj)
		{
			$.ajax(
			{
				url:localStorage["ServerAddress"]+"/womens_track_roster",
				dataType: 'jsonp',
				success:function(json)
				{
					if($.isFunction(callObj))
					{
						callObj(json, true);
					}
					else if(callObj.success && $.isFunction(callObj.success))
					{
						callObj.success(json);
					}
				},
				error:function()
				{
					if($.isFunction(callObj))
					{
						callObj(json, false);
					}
					else if(callObj.error && $.isFunction(callObj.error))
					{
						callObj.error();
					}
					else if(callObj.fail && $.isFunction(callObj.fail))
					{
						callObj.fail();
					}
				}
			});
		}
	},
	getCheerleading : function (callObj) 
	{
		if(callObj)
		{
			$.ajax(
			{
				url:localStorage["ServerAddress"]+"/cheerleading",
				dataType: 'jsonp',
				success:function(json)
				{
					if($.isFunction(callObj))
					{
						callObj(json, true);
					}
					else if(callObj.success && $.isFunction(callObj.success))
					{
						callObj.success(json);
					}
				},
				error:function()
				{
					if($.isFunction(callObj))
					{
						callObj(json, false);
					}
					else if(callObj.error && $.isFunction(callObj.error))
					{
						callObj.error();
					}
					else if(callObj.fail && $.isFunction(callObj.fail))
					{
						callObj.fail();
					}
				}
			});
		}
	},

	getWomensVolleyballStats : function (callObj) 
	{
		if(callObj)
		{
			$.ajax(
			{
				url:localStorage["ServerAddress"]+"/volleyball_live_stats",
				dataType: 'jsonp',
				success:function(json)
				{
					if($.isFunction(callObj))
					{
						callObj(json, true);
					}
					else if(callObj.success && $.isFunction(callObj.success))
					{
						callObj.success(json);
					}
				},
				error:function()
				{
					if($.isFunction(callObj))
					{
						callObj(json, false);
					}
					else if(callObj.error && $.isFunction(callObj.error))
					{
						callObj.error();
					}
					else if(callObj.fail && $.isFunction(callObj.fail))
					{
						callObj.fail();
					}
				}
			});
		}
	},
	getMensBaseballStats : function (callObj) 
	{
		if(callObj)
		{
			$.ajax(
			{
				url:localStorage["ServerAddress"]+"/Baseball_Stats",
				dataType: 'jsonp',
				success:function(json)
				{
					if($.isFunction(callObj))
					{
						callObj(json, true);
					}
					else if(callObj.success && $.isFunction(callObj.success))
					{
						callObj.success(json);
					}
				},
				error:function()
				{
					if($.isFunction(callObj))
					{
						callObj(json, false);
					}
					else if(callObj.error && $.isFunction(callObj.error))
					{
						callObj.error();
					}
					else if(callObj.fail && $.isFunction(callObj.fail))
					{
						callObj.fail();
					}
				}
			});
		}
	},
	getWomensSoftballStats : function (callObj) 
	{
		if(callObj)
		{
			$.ajax(
			{
				url:localStorage["ServerAddress"]+"/Softball_Stats",
				dataType: 'jsonp',
				success:function(json)
				{
					if($.isFunction(callObj))
					{
						callObj(json, true);
					}
					else if(callObj.success && $.isFunction(callObj.success))
					{
						callObj.success(json);
					}
				},
				error:function()
				{
					if($.isFunction(callObj))
					{
						callObj(json, false);
					}
					else if(callObj.error && $.isFunction(callObj.error))
					{
						callObj.error();
					}
					else if(callObj.fail && $.isFunction(callObj.fail))
					{
						callObj.fail();
					}
				}
			});
		}
	},
	getMensFootballStats : function (callObj) 
	{
		if(callObj)
		{
			$.ajax(
			{
				url:localStorage["ServerAddress"]+"/football_stats",
				dataType: 'jsonp',
				success:function(json)
				{
					if($.isFunction(callObj))
					{
						callObj(json, true);
					}
					else if(callObj.success && $.isFunction(callObj.success))
					{
						callObj.success(json);
					}
				},
				error:function()
				{
					if($.isFunction(callObj))
					{
						callObj(json, false);
					}
					else if(callObj.error && $.isFunction(callObj.error))
					{
						callObj.error();
					}
					else if(callObj.fail && $.isFunction(callObj.fail))
					{
						callObj.fail();
					}
				}
			});
		}
	},
	
	getMensBasketballStats : function (callObj) 
	{
		if(callObj)
		{
			$.ajax(
			{
				url:localStorage["ServerAddress"]+"/mens_basketball_stats",
				dataType: 'jsonp',
				success:function(json)
				{
					if($.isFunction(callObj))
					{
						callObj(json, true);
					}
					else if(callObj.success && $.isFunction(callObj.success))
					{
						callObj.success(json);
					}
				},
				error:function()
				{
					if($.isFunction(callObj))
					{
						callObj(json, false);
					}
					else if(callObj.error && $.isFunction(callObj.error))
					{
						callObj.error();
					}
					else if(callObj.fail && $.isFunction(callObj.fail))
					{
						callObj.fail();
					}
				}
			});
		}
	},
	getMensSoccerStats : function (callObj) 
	{
		if(callObj)
		{
			$.ajax(
			{
				url:localStorage["ServerAddress"]+"/mens_soccer_live_stats",
				dataType: 'jsonp',
				success:function(json)
				{
					if($.isFunction(callObj))
					{
						callObj(json, true);
					}
					else if(callObj.success && $.isFunction(callObj.success))
					{
						callObj.success(json);
					}
				},
				error:function()
				{
					if($.isFunction(callObj))
					{
						callObj(json, false);
					}
					else if(callObj.error && $.isFunction(callObj.error))
					{
						callObj.error();
					}
					else if(callObj.fail && $.isFunction(callObj.fail))
					{
						callObj.fail();
					}
				}
			});
		}
	},
	getWomensBasketballStats : function (callObj) 
	{
		if(callObj)
		{
			$.ajax(
			{
				url:localStorage["ServerAddress"]+"/womens_basketball_stats",
				dataType: 'jsonp',
				success:function(json)
				{
					if($.isFunction(callObj))
					{
						callObj(json, true);
					}
					else if(callObj.success && $.isFunction(callObj.success))
					{
						callObj.success(json);
					}
				},
				error:function()
				{
					if($.isFunction(callObj))
					{
						callObj(json, false);
					}
					else if(callObj.error && $.isFunction(callObj.error))
					{
						callObj.error();
					}
					else if(callObj.fail && $.isFunction(callObj.fail))
					{
						callObj.fail();
					}
				}
			});
		}
	},
	getWomensSoccerStats : function (callObj) 
	{
		if(callObj)
		{
			$.ajax(
			{
				url:localStorage["ServerAddress"]+"/womens_soccer_live_stats",
				dataType: 'jsonp',
				success:function(json)
				{
					if($.isFunction(callObj))
					{
						callObj(json, true);
					}
					else if(callObj.success && $.isFunction(callObj.success))
					{
						callObj.success(json);
					}
				},
				error:function()
				{
					if($.isFunction(callObj))
					{
						callObj(json, false);
					}
					else if(callObj.error && $.isFunction(callObj.error))
					{
						callObj.error();
					}
					else if(callObj.fail && $.isFunction(callObj.fail))
					{
						callObj.fail();
					}
				}
			});
		}
	},
	getNews : function (callObj) 
	{
		if(callObj)
		{
			$.ajax(
			{
				url:localStorage["ServerAddress"]+"/news",
				dataType: 'jsonp',
				success:function(json)
				{
					if($.isFunction(callObj))
					{
						callObj(json, true);
					}
					else if(callObj.success && $.isFunction(callObj.success))
					{
						callObj.success(json);
					}
				},
				error:function()
				{
					if($.isFunction(callObj))
					{
						callObj(json, false);
					}
					else if(callObj.error && $.isFunction(callObj.error))
					{
						callObj.error();
					}
					else if(callObj.fail && $.isFunction(callObj.fail))
					{
						callObj.fail();
					}
				}
			});
		}
	},
	getGamesToday : function (callObj) 
	{
		if(callObj)
		{
			$.ajax(
			{
				url:localStorage["ServerAddress"]+"/games_today",
				dataType: 'jsonp',
				success:function(json)
				{
					if($.isFunction(callObj))
					{
						callObj(json, true);
					}
					else if(callObj.success && $.isFunction(callObj.success))
					{
						callObj.success(json);
					}
				},
				error:function()
				{
					if($.isFunction(callObj))
					{
						callObj(json, false);
					}
					else if(callObj.error && $.isFunction(callObj.error))
					{
						callObj.error();
					}
					else if(callObj.fail && $.isFunction(callObj.fail))
					{
						callObj.fail();
					}
				}
			});
		}
	}
}