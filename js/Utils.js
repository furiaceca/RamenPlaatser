/**
 * 
 */
jQuery( document ).ready(function() {
	console.log($.cookie("RamenPlaatser_pageName"));
	$.cookie.raw = true;
	if ($.cookie("RamenPlaatser_pageName") != null && $.cookie("RamenPlaatser_pageName") != 'undefined'){
		jQuery( "#main_div" ).load( "pages/" + $.cookie("RamenPlaatser_pageName") + ".html");
	} else {
		jQuery( "#main_div" ).load( "pages/home.html");
	}
    
    jQuery('.menuitem').click(function(){
    	console.log(jQuery(this).attr('id'));
    	var pageName = jQuery(this).attr('id');
    	$.cookie("RamenPlaatser_pageName", pageName.split('_')[1], { expires: 7, path: '/' });
    	jQuery( "#main_div" ).load( "pages/" + pageName.split('_')[1] + ".html");
    });
});