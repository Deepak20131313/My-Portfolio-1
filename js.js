
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
               jQuery('.targetDiv').show();
        });
        jQuery('.showSingle').click(function(){
              jQuery('.targetDiv').hide();
              jQuery('#div'+$(this).attr('target')).show();
               
        });
});

$(".buttons a").click(function() {
$(this).addClass('active').siblings().removeClass('active');
});
