// Opens the panel
$('.menuButton').on('click',function(){
	$('.menupanel').panel("open");
});

// openTut, tutorial, and closeTut are parts of a whole that works the swipe tutorial.
// openTut brings both a see through overlay picture(dimmer.jpg) and the finger icon (swipePic.jpg) to the front of the screen.
function openTut(){
	$('.swipePic').css('z-index', 100);
	$('.dimmer').css('z-index', 98);
};

// Script for the animations, slides the finger icon to the right and opens the panel,
// then slides the finger back to the right and closes the panel.
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

// Closes the tutorial by sending the finger icon and the overlay to the back of the screen.
function closeTut(){
	$('.swipePic').css('z-index', -10);
	$('.dimmer').css('z-index', -10);
};

// Script for being able to slide the panel open by swiping right on the screen.
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