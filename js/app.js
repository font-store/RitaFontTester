
	
  

  changeSize();

function changeSize() {

	var testPanel = $('#TestPanel');
    var ss = window.sessionStorage;
	var size = $('.textSize', testPanel);
	var size = $('.textSize', testPanel);
	var key = $(this).parent().attr('id');
	var langs = $("input[name='lang']");
	
	var Box = $('.boxContainer',testPanel);

		//if (window.sessionStorage.getItem(key+'.total') != null) $('.total', this).val(window.sessionStorage.getItem(key+'.total'))
		//if (window.sessionStorage.getItem(key+'.size') != null) $('.size', this).val(window.sessionStorage.getItem(key+'.size'))	
		

		// size.on('input',function() {
			// setSize(box)
			// window.sessionStorage.setItem(key+'.size',$(this).val());
		// });

		// $('.resetText',box).click(function(){
			// window.sessionStorage.setItem(key+'.text',textTest) 	
			// useText = textTest;
			// $('p',pBox).trigger('refreshed');
		// })
		// $('.total', box).on('change',function() {
			// window.sessionStorage.setItem(key+'.total',$(this).val());
			// makeP(box);
			// setSize(box);
		// });


		 $('.me', Box).on('keyup',function(){
			 var text = $(this).text();
				ss.setItem('TestPanel.text',text);
		 })

		// $(pBox).on('refreshed',"p",function(){
			
			// $(this).text(useText);
			
		// })


		function setText(){
			$('.'+textBox, Box).toggle('show');
		 }

		 
		 size.on('input',function() {
		 	var val = $(this).val();
		 	Box.css('font-Size', val+'px');
			 ss.setItem('TestPanel.size',val);
		 });


		 langs.change(function(){
		 	var x = $(this).val();
		 	ss.setItem('TestPanel.lang',x);
		 	Box.find('.'+x).show().siblings().hide();
		 })



		 function refresh(){
		 	var lang = ss.getItem('TestPanel.lang') || 'fa';
		 	var _size = ss.getItem('TestPanel.size') || '40';
		 	 langs.filter('[value='+lang+']').prop('checked', true).triggerHandler('change');
		 	 size.prop('value',_size).triggerHandler('input');
		 }
		// function setSize(container){
			// var total =  $('.total',container).val();
			// var size =  $('.size',container)[0].value;
				// pBox.map(function(i,e){
					
					// var xsize =parseInt(size)+parseInt(total)-i-1;
					
					// $('p',e).css('fontSize',xsize+"px");
					// $('span',e).html(xsize+"px");
				// })
			
		// }

	// });
	//$('.total', cs).triggerHandler('change');

	refresh();
}


