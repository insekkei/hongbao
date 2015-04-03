$(function(){
	var num=0,
	     k = 200;
	     html = '<a href=""></a>';
	for (k=0;k<200;k++){
		$('#hongbao').append(html);
		$('#hongbao a:nth-child('+k+')').css({
			'left':k+'%',
			'-webkit-animation':'translation 4s '+k+'s  linear'
		});
	}
	$('.get-hb').click(function(e){
		$('#hongbao').fadeIn(0);
		e.preventDefault();
	});
	$(document).on('click','#hongbao a',function(e){
		$(this).addClass('visited');
		num+=1;
		$('#num').html(num);
		e.preventDefault();
	});


});