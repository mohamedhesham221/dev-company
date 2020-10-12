$(function(){
'use strict';

//smooth scroll to  any section  
$(".nav-link, .dropdown-item").on("click", function(){

    let to = $(this).attr("href");
    $("html,body").animate({scrollTop: $(to).offset().top}, 1500);
})


//option box moving when click on toggler by if condition method   code ? true : false
$(".navbar-toggler").on("click", function(){

$(".collapse").toggleClass("is-visible")

    $(".collapse").hasClass("is-visible") ? $(".option-box").animate({marginTop: "250px"}, 295) : $(".option-box").animate({marginTop:"0"}, 295)
})

//add class active to nav-item
$(".nav-item").on("click", function(){
    $(this).addClass("active").siblings().removeClass("active")
})


// carousel interval to slow slider speed
$('.carousel').carousel({interval: 4000})


//fa-cog when click on it the color option slide toggle
$(".fa-cog").click(function(){
    $(".color-option").slideToggle()
})

//change  colors by click on colorLi = $(".color-option ul li") 
let colorLi = $(".color-option ul li")   

colorLi
.eq(0).css("backgroundColor","#e42e2e").end()
.eq(1).css("backgroundColor","#318fb5").end()
.eq(2).css("backgroundColor","#e36387").end()
.eq(3).css("backgroundColor","#8fc0a9").end()

colorLi.click(function(){

    $("link[href*=theme]").attr("href",$(this).attr("data-value"))
})


//make a button to scroll to top with if condition    code ? true : false
var scrollButton = $(".btnTop");
$(window).scroll(function () { 

    $(this).scrollTop() >= 700 ? scrollButton.fadeIn(500) : scrollButton.fadeOut(500);
});

scrollButton.on("click",function () {  
    $("html,body").animate({ scrollTop : 0 }, 600, function() {
     scrollButton.css("bottom","700px").fadeOut(400, function(){
        scrollButton.css("bottom","37px")
     });
    });    
})

 // add class active on first ele of navbar when scroll to top by scroll button   
$(".nav-item").eq(0).addClass("active").siblings().removeClass("active")
});


//loading page fade out after 2s with show scroll by over flow : auto
$(window).on("load", function(){


    $(".loading-overlay, cube").fadeOut(2000)

    $('body').css('overflow','auto')

})
