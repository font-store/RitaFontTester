$(document).ready(function(){
	
	var pp = $('#container');
	for(i=6;i<=120;i++) {
		  var $out = '<span>'+i+'px</span>'+$text;
		 var box = $('<div/>').html($out).addClass('boxText').css('fontSize',i);
		pp.append(box);
		//i = i+2;
	}	
});
