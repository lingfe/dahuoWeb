
$(window).load(function() {
	var url="https://web.daho.club/";
	$('#slider').nivoSlider();
	//ajax
	$.post(
		"/deal/get/releaseinfo/Query",
		{reqJson: JSON.stringify({
			 pagesize:3,
			 rows: [{
			 	top:1,
              	df:0                                //发布信息状态0=正常显示，1=已下架，2=未发布，4=审核中，5=未通过
              }]
		})},
		function(result){
			//$('#ul_list').empty();
			var data = result.rows;
			var str='';
			for (var i = 0; i < data.length; i++) {
				var arrimg=data[i].imageArray.split(',')[0];
    			str+='<li> \
	    					<a href="https://static.daho.club/static/upload/'+arrimg+'" class="magnifier"> \
	    						<img src="https://static.daho.club/static/upload/'+arrimg+'" height="200" alt=""> \
								<span></span> \
							</a> \
							<div class="dc-head1"> \
								<h3>'+data[i].title+'</h3> \
								<span>'+data[i].projectDescription+'</span> \
							</div> \
						</li>';
			}
			str+='<div class="clear"> </div>';

			$('#ul_list').append(str);
			$('#ul_list li:last').addClass('last');

    	}
    );

});

$(function() {
	$('.gallery a').lightBox();
	
	//关于我们 的内容，文字跳动效果
	$("#slideshow > div:gt(0)").hide();
	window.setInterval(function() { 
	  $('#slideshow > div:first').fadeOut().next().fadeIn(500).end().appendTo('#slideshow');
	},  2000);
	
	//返回顶部
	$('.toTop ').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
	
});
	    
$(document).ready(function() {
    $('#closeTog').click(function() {
    	$('.adpack').slideToggle('hide');
    });
});