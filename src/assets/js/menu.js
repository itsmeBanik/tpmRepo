$(document).ready(function() {
 
    $(document).on('click','.menu_trigger',function(){
      $(".side_nav").toggleClass("expanded");
      $(".page").toggleClass("lnOpen");
      $(this).toggleClass('open');
    });
  
    $(document).on("click",".cDropDown a",function() {
      $(this).parents(".cDropDown").find("ul").toggle();
    });
  
  });