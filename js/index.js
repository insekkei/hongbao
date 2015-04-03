/*$(function(){
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


});*/

        function start() {
        	$('#host').fadeIn();
            randomOneRed(0, 50);
        }

        function randomOneRed(current, max) {
            if (current >= max) {
                return;
            } else {
                createRedBag();
                setTimeout(randomOneRed, 500, current + 1, max);
            }
        }
        function createRedBag() {
            var width = Math.random() * 60 + 30;
            var height = width * 1.5;
            var pleft = Math.random() * ($(window).width() - width);
            var theight = $(window).height();
            var id = 'bag_' + Math.floor(Math.random() * 10000000);
            $('<div></div>')
                .attr("id", id)
                .width(width)
                .height(height)
                .css(
                    {
                        "background-color": "transparent",
                        "position": "absolute",
                        "left": pleft,
                        "top": 0
                    })
                .appendTo("#host").animate({ top: theight }, 3000, 'linear', function () { $("#" + id).hide(); });
        }