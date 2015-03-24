$('.menuButton').on('click',function(){
	$('.menupanel').panel("open");
});

function openTut(){
	$('.swipePic').css('z-index', 100);
	$('.dimmer').css('z-index', 98);
};

function tutorial(){
    $('.swipePic').animate({'margin-left':'40%'},1000, function(){
							$( '.menupanel' ).panel( "open" );
							
							setTimeout(function(){
								$('.swipePic').animate({'margin-left':'0%'},1000);
							}, 1000);	
							
							setTimeout(function(){
								$( '.menupanel' ).panel( "close" );
							}, 2000);
                        }
					);
};

function closeTut(){
	$('.swipePic').css('z-index', -10);
	$('.dimmer').css('z-index', -10);
};


$( document ).on( "pageinit", function() {
    $( document ).on( "swiperight", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swiperight"  ) {
                $( '.menupanel' ).panel( "open" );
            } 
        }
    });
});