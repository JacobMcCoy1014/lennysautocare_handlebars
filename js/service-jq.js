$('#basic-package').on('click',  function() {
    // use .fadeTo() method to change the opacities of all images to 0.5
    $('.packageim').fadeTo("fast", "0.5");
    
    // use .fadeTo() method to change the opacities of all images to 1
    $(this).fadeTo("slow" , 1);
    
    // use .load method to loads new HTML content into the selected element with .fadeIn() effect
    $("#details").load('data/basicpackage.html').hide().fadeIn("slow"); 
});

$('#premium-package').on('click',  function() {
    // use .fadeTo() method to change the opacities of all images to 0.5
    $('.packageim').fadeTo("fast", "0.5");
    
    // use .fadeTo() method to change the opacities of all images to 1
    $(this).fadeTo("slow" , 1);
    
    // use .load method to loads new HTML content into the selected element with .fadeIn() effect
    $("#details").load('data/premiumpackage.html').hide().fadeIn("slow"); 
});