var kyle = {
	getMensBaseball : function (callObj) 
	{
		if(callObj)
		{
			$.ajax(
			{
				url:"http://ec2-54-205-114-37.compute-1.amazonaws.com:8888/Baseball_Roster",
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
				url:"http://ec2-54-205-114-37.compute-1.amazonaws.com:8888/Mens_Soccer_Roster",
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
				url:"http://ec2-54-205-114-37.compute-1.amazonaws.com:8888/Softball_Roster",
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
				url:"http://ec2-54-205-114-37.compute-1.amazonaws.com:8888/Womens_Soccer_Roster",
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
				url:"http://ec2-54-205-114-37.compute-1.amazonaws.com:8888/football",
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
				url:"http://ec2-54-205-114-37.compute-1.amazonaws.com:8888/mens_basketball",
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
				url:"http://ec2-54-205-114-37.compute-1.amazonaws.com:8888/volleyball_Roster",
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
				url:"http://ec2-54-205-114-37.compute-1.amazonaws.com:8888/womens_basketball",
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
				url:"http://ec2-54-205-114-37.compute-1.amazonaws.com:8888/volleyball_live_stats",
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
				url:"http://ec2-54-205-114-37.compute-1.amazonaws.com:8888/Baseball_Stats",
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
				url:"http://ec2-54-205-114-37.compute-1.amazonaws.com:8888/Softball_Stats",
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
				url:"http://ec2-54-205-114-37.compute-1.amazonaws.com:8888/football_stats",
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
				url:"http://ec2-54-205-114-37.compute-1.amazonaws.com:8888/mens_basketball_stats",
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
				url:"http://ec2-54-205-114-37.compute-1.amazonaws.com:8888/mens_soccer_live_stats",
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
				url:"http://ec2-54-205-114-37.compute-1.amazonaws.com:8888/womens_basketball_stats",
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
				url:"http://ec2-54-205-114-37.compute-1.amazonaws.com:8888/womens_soccer_live_stats",
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
				url:"http://ec2-54-205-114-37.compute-1.amazonaws.com:8888/news",
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
				url:"http://ec2-54-205-114-37.compute-1.amazonaws.com:8888/games_today",
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