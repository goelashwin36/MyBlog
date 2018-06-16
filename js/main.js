// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};
// // Get the navbar
// var navbar = document.getElementById("navbar");
// var home=document.getElementById("home").offsetTop;
// var my_projects=document.getElementById("my_projects");
// var about_me=document.getElementById("about_me");
// var gallery=document.getElementById("gallery");
// var contact=document.getElementById("contact");
// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;
//
// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//     if (window.pageYOffset >=contact.pageYOffset) {
//         navbar.classList.add("stickyactive")
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }


$(document).ready(function(){
    for(i=1;i<=4;i++)
    {
        $("#"+i).fadeOut();
        $("#"+i).delay(i*1500).fadeIn(1000);



    }

});