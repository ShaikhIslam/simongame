var $player1 = $('');


function jump () {
    
}




function walkLeft () {
    
}




function walkRight () {
    
}




function punch () {

};




$(document).on('keydown keyup', function(e) {
    if (e.type == 'keydown') { 
        
        
        if ( e.keyCode == 38 && !$player1.hasClass('jump') ) { 
            
        }
        
        
        if (e.keyCode == 37) { 

        }
        
        
        if (e.keyCode == 39) { 
            walkRight(); 
        }
        
        
        if ( e.keyCode == 65 && !$player1.hasClass('punch') ) { 
            punch(); 
        }
        
        
    } else {
        
    }
});