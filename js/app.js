
	
  

  changeSize();

function changeSize() {

	var testPanel = $('#TestPanel');
    var ss = window.sessionStorage;
	var size = $('.textSize', testPanel);
	var size = $('.textSize', testPanel);
	var key = $(this).parent().attr('id');
	var langs = $("input[name='lang']");
	var lineType = $("input[name='linetype']");
	var features = $("input[name='feature[]'");
	var baseline = $("#baseline");
	var Box = $('#TextContainer',testPanel);
	var Shadow = $('.shadow');
	var Blur = $('.blurRange')
	var me = $('.me');

	baseline.click(function(){
		var res = $(this).prop('checked');
		var _base = ss.getItem('TestPanel.baseline');
		if(!res){
			Box.removeClass('grid-line');
			ss.setItem('TestPanel.baseline',false);
		} else {
			Box.addClass('grid-line') ;
			ss.setItem('TestPanel.baseline',true);
		}

		
	})

	lineType.click(function(){
			
			ss.setItem('TestPanel.lineType', $(this).val());	
			refresh();
	});
	
	features.on('click',function(){
		var f = [];
		features.filter(':checked').each(function(){
			f.push(  $(this).val() ) ;
		
		});
		ss.setItem('TestPanel.features',f);
		refresh();	
	})
	


	me.on('keyup',function(){
		var text = $(this).text();
		ss.setItem('TestPanel.text',text);
	})




	size.on('input',function() {
		var val = $(this).val();

	 ss.setItem('TestPanel.size',val);
	 refresh();
	});

	Shadow.on('input',function() {
		var val = $(this).val();

	 ss.setItem('TestPanel.shadow',val);
	 refresh();
	});

	Blur.on('input',function() {
		var val = $(this).val();

	 ss.setItem('TestPanel.blur',val);
	 refresh();
	});

	langs.change(function(){
		var x = $(this).val();
		ss.setItem('TestPanel.lang',x);
		refresh();
	})



		 function refresh(){
		 	var _lang = ss.getItem('TestPanel.lang') || 'fa';
		 	var _size = ss.getItem('TestPanel.size') || '40';
		 	var _lineType = ss.getItem('TestPanel.lineType') || 'pre';
		 	var _shadow = ss.getItem('TestPanel.shadow') || 0;
		 	var _blur = ss.getItem('TestPanel.blur') || 0;
		 	var _text = ss.getItem('TestPanel.text') || 'متن دلخواه شما';
		 	var _fea = ss.getItem('TestPanel.features') || "kern,liga";
		 	var _base = Boolean(ss.getItem('TestPanel.baseline')) || false;
		 	var textStyles = {}
		 	//langs
		 	 langs.filter('[value='+_lang+']').prop('checked', true);
		 	 Box.find('.'+_lang).show().siblings().hide();

		 	 // set test
		 	 me.text(_text);

		 	 //set size

		 	 size.prop('value',_size);
		 	 textStyles['font-size'] = _size+'px';
		 	 //enable baseline grid
		 	 if(_base) {

		 	 	baseline.triggerHandler('click');
		 	 }

		 	 _fea = _fea.split(',');
		 	 var _feaStyle=[]
		 	 features.each(function(){
		 	 	var val = $(this).val();
		 	 	if ( _fea.includes(val)) {
		 	 		$(this).prop('checked',true);
		 	 		_feaStyle.push('"'+val+'"');		
		 	 	} else{
		 	 		_feaStyle.push('"'+val+'" off');	
		 	 	}
		 	 	
		 	 	
		 	 });
		 	 textStyles['-moz-font-feature-settings'] = _feaStyle.join(' ,');
		 	 textStyles['-webkit-font-feature-settings'] = _feaStyle.join(' ,');
			 
			 Shadow.prop('value',_shadow);
			 Blur.prop('value',_blur)
			textStyles['text-shadow'] = 'initial';
			textStyles['filter'] = "initial";
			Box.find('p').css('white-space', _lineType);
		 		textStyles['-webkit-filter'] = "initial";
		 	if(_shadow != 0 ){
		 		
		 		var shadowBlur = _shadow;
		 		if(_shadow >= 10){
		 			shadowBlur = 20;
		 		}	
		 		textStyles['text-shadow'] = `0px ${_shadow /2 }px  ${shadowBlur}px #000, 
		 			${_shadow }px 0px  ${shadowBlur}px #000,
		 			0px -${_shadow }px  ${shadowBlur}px #000,
		 			-${_shadow }px 0px ${shadowBlur}px #000`;
		 	} 
		 		
		 	
		 	if(_blur != 0 ){
		 		textStyles['filter'] = "blur("+_blur+"px)";
		 		textStyles['-webkit-filter'] = "blur("+_blur+"px)";
		 	} 

		 	//console.log(textStyles);
			 	 Box.css(textStyles);

		 	
		 	 
		 }


	refresh();
}


