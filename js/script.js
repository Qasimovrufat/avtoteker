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

    $("#ex2").slider({});
    $("#ex1").slider({});

    // Without JQuery
   $(".Reset").click(function(params) {
      
       $(this).parents("form").reset()
   })

   $(".tab-list a").click(function(e) {
       console.log("sdsad")
       e.preventDefault()
       $(".tab-list a").removeClass("active");
       $(this).addClass("active");
       $(".tab-content").removeClass("active")
       var activetab=$(this).attr("href")
       $(activetab).addClass("active")
   })
})