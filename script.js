$(document).ready(function() {
    $("#search").on("click", function() {
        $(".hidden").slideToggle();
    });
    
    // var urlRandom = 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/wiki/Special:Random';
    var urlRandom = 'https://en.wikipedia.org/wiki/Special:Random';
    var urlSearch = 'https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=5&search=cat&callback=?';    
  
        
    $("#random").on("click", function() {
            $(".hidden-random").slideDown();
            $(".hidden-button").fadeIn();
            $("#frame").attr("src", urlRandom);
    }); 
    
    $("#hide-random").on("click", function() {
            $(".hidden-random").slideUp();
            $(".hidden-button").fadeOut(); 
    });
    
/*    
    
    
    function loadRandom() {
        
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            $("#random-text").html("new article");
            console.log();
        };
  
    // https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exlimit=max&format=json&exsentences=1&exintro=&explaintext=&generator=search&gsrlimit=10&gsrsearch=    
        
       // xhttp.open("GET", 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/wiki/Special:Random', true);
        xhttp.open("GET", urlSearch, true);
        xhttp.send();
    loadRandom();
      
      //if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("demo").innerHTML = this.responseText;
    //}
  };
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
    });         
//        });
    
    
//}); 