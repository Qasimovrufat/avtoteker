$(document).ready(function(){

    $(".language-selector .dropdown-menu a").click(function() {
         $(".language-selector .dropdown-menu a").removeClass("active")
        $(".language-selector .btn").text($(this).text())
        $(this).addClass("active")
    })

    $(".btn-cancel").click(function(params) {
        params.preventDefault()
        $(".dropdown-menu").removeClass("show")
    })
   
    $('select').selectpicker();

})