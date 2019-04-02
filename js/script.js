$(document).ready(function(){

    $(".language-selector .dropdown-menu a").click(function() {
         $(".language-selector .dropdown-menu a").removeClass("active")
        $(".language-selector .btn").text($(this).text())
        $(this).addClass("active")
    })

   


})