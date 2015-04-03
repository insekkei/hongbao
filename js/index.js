$(function(){
	var num=0;
	$('.get-hb').click(function(e){
		$('#hongbao').fadeIn(0);
		e.preventDefault();
	});
	$('#hongbao a').click(function(e){
		//alert(typeof Number($('#num').html()));
		num+=1;
		$('#num').html(num);
		e.preventDefault();
	});

});