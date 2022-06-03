
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
               jQuery('.targetDiv').slideUp("slow");
        });
        jQuery('.showSingle').click(function(){
              jQuery('.targetDiv').slideDown("slow");
              jQuery('#div'+$(this).attr('target')).slideUp("slow");
               
        });
});

$(".buttons a").click(function() {
$(this).addClass('active').siblings().removeClass('active');
});
