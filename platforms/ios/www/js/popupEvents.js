// Replays the tutorial animations when the button selected on the about popup.
$('#replayTut').on('click',function(){

	$( '.menupanel' ).panel( "close" );
	
	openTut();
				
	setTimeout(function(){
		tutorial();
	}, 2000);
				
	setTimeout(function(){
		tutorial();
	}, 7000);
				
	setTimeout(function(){
		closeTut();
	}, 11000);
});
