
$(document).ready(function(){
 $(".btn_hamr").click(function(){
   $(".menu_mobile").toggle();
 });
});

function myFunction(x) {
    x.classList.toggle("change");
  }

jQuery(function(){
         jQuery('#showall').click(function(){
               jQuery('.targetDiv').slideDown("slow");
        });
        jQuery('.showSingle').click(function(){
              jQuery('.targetDiv').slideUp();
              jQuery('#div'+$(this).attr('target')).slideDown("slow");
               
        });
});

$(".buttons a").click(function() {
$(this).addClass('active').siblings().removeClass('active');
});
