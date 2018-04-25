$(document).ready(function(){
    
    
    // jQuery Function Number #1
    $(function() {
        $('body').removeClass('fade-out');
    });
    
    // jQuery Function Number #2 and #3
    $(".projectPicture").hover(function(){
        $(this).css("opacity", 0.5);
        
        //jQuery Function Number #4
        $("#constructionBox").show();
        
        
    }, function () {
        $(this).css("opacity", 1);
        
        //jQuery Function Number #5
        $("#constructionBox").hide();
    
    });
    



    

    
})