// working with search input 
$(".search-input input").click(function() {
		$(".search-input input").css("transition" , "2s");
});

// working with modal 

function cssChange(selector , css) {
	$(selector).css(css);
}


$(".sign-up-span").click(function() {
	cssChange(".sign-up-span" , {"color" : "green" , "opacity" : "1"});
	cssChange(".login-span" , {"color" : "black" , "opacity" : ".5"});
	cssChange("#login-modal" , {"display" : "none"});
	cssChange("#sign-up-modal" , {"display" : "block"});
});
$(".login-span").click(function() {
	cssChange(".login-span" , {"color" : "green" ,"opacity" : "1"});
	cssChange(".sign-up-span" ,{"color" : "black" , "opacity" : ".5"});
	cssChange("#sign-up-modal" , {"display" : "none"});
	cssChange("#login-modal" , {"display" : "block"});
});

// jquery playing 

$('input').keypress(function(e) { // keyup when the button released from click , keydown when the button pressed and not released

	if(e.which == 90) {
		alert("Z is pressed");
	}

});

