$(function(){
	$('#hongbao a').click(function(e){
		parseInt($('#num').html())+=1;
		e.preventDefault();
	});

});