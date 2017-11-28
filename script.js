$(document).ready(function() {
    $("#search").on("click", function() {
        $(".hidden").slideToggle();
    });
    
    
    var urlSearch = 'https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=5&search=cat&callback=?';    

// To get and display a random Wikipedia entry    
    
    var urlRandom = 'https://en.wikipedia.org/wiki/Special:Random';
    
    $("#random").on("click", function() {
            $("#random").html("Another Random Entry");
            $(".hidden-random").slideDown();
            $(".hidden-button").fadeIn();
            $("#frame").attr("src", urlRandom);
    }); 
    
    $("#hide-random").on("click", function() {
            $(".hidden-random").slideUp();
            $(".hidden-button").fadeOut(); 
            $("#random").html("View a Random Entry");
    });
    
});
    
/*    
    
    
 
  
    // https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exlimit=max&format=json&exsentences=1&exintro=&explaintext=&generator=search&gsrlimit=10&gsrsearch=    
        
  */  

        
        
// EXAMPLES FROM https://www.reddit.com/r/FreeCodeCamp/comments/46me96/wikipedia_viewer/
        
    // this entire function     
    /*    $.ajax({
            url: 'https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=5&search=cat',
            jsonp: "callback",
            dataType: 'jsonp',
            xhrFields: {
              withCredentials: true
            },
            success: function(data){
                console.log(data)
            }
        });
            
    // does the same thing as this function
        $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=5&search=cat&callback=?', function(data) {
            console.log(data)
        });
    // 
        
        */
