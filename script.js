$(document).ready(function() {

// To reveal/hide search bar
    
    $("#search").on("click", function() {
        $(".hidden").slideToggle();
        $(".entry-display").addClass("hidden-search-display");
    });
    
// To invoke search     
    
// searches using enter/return key from within search box 
//function searchBar() {    
    $('#search-bar').keyup(function() {
        if ( event.which == 13 ) {    
            var inputVal = $('#search-bar').val();
            var urlSearch = 'https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=5&search=' + inputVal + '&callback=?';  
             $.getJSON(urlSearch, function(data) {
                
                var titleArr = data[1];
                var descArr = data[2];
                var linkArr = data[3];
                
                var entries = [];
                
                function createEntry(i) {
                    var title = titleArr[i];
                    var description = descArr[i];
                    var link = linkArr[i];
                    var html = "";
                    html += "<div class = 'entry'>";
                    html += "<a href='" + link + "'><h2>" + title + "</h2></a>";
                    html += "<p>" + description + "</p>";
                    html += "</div>";
                    //console.log(titleArr[i], descArr[i], linkArr[i]);
                    return html;
                }; 
                
                for (var i = 0; i < 5; i++) {
                    entries[i] = createEntry(i);
                };
                 
                 $(".entry-display").removeClass("hidden-search-display");
                 $("#entry").html(entries);
            });
        };
    });  
    
// add highlight on left side of entry when hover on that entry only
    //currently not working
/*    function highlightEdge() {
        $(".entry").toggleClass("border");
        console.log("highlight edge here");
    }
    
    //$(".entry").on("mouseenter", highlightEdge);
    $(".entry").on("focusin", highlightEdge);
  */  
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
