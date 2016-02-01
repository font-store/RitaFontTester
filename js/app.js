
	
  

  changeSize();

function changeSize() {

	var testPanel = $('#TestPanel');
    var ss = window.sessionStorage;
	var textBox = ss.getItem('TestPanel.lang') || 'me';
	var key = $(this).parent().attr('id');
	
	
	var Box = $('.boxContainer',testPanel);

		//if (window.sessionStorage.getItem(key+'.total') != null) $('.total', this).val(window.sessionStorage.getItem(key+'.total'))
		//if (window.sessionStorage.getItem(key+'.size') != null) $('.size', this).val(window.sessionStorage.getItem(key+'.size'))	
		
		$('.resetTextFA',TestPanel).click(function(){
			ss.setItem('test.lang','FA')	
			refreshText()
		});
    
	    $('.resetTextAR',testPanel).click(function(){
			ss.setItem('test.lang','AR')
			refreshText()
		});


	    function refreshText(){
	    	var lang = ss.getItem('test.lang');

	    }
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

		 setText();
		 $('.textSize').on('input',function() {
		 	var val = $(this).val();
		 	Box.css('font-Size', val+'px');
			 ss.setItem(key+'.size',$(this).val());
		 });


		 $("input[name='lang']").change(function(){
		 	var x = $(this).val();
		 	Box.find('.'+x).show().siblings().hide();
		 })
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


}


