$(function(){
/*��������*/		   
$(".top_news h2 a:first").addClass("currentBg_news")		   
$(".top_news ul:first").addClass("visible")		   
$(".top_news h2 a").hover(function(){
$(".top_news h2 a").removeClass("currentBg_news");	
$(this).addClass("currentBg_news");
$(".top_news ul").removeClass("visible")		   
j="news_00"+$(this).attr("rel")
$("."+j).addClass("visible")		   
})

/*���������*/		   
$(".news_remen h2 a:first").addClass("currentBg_news")		   
$(".news_remen > div:first").addClass("visible")		   
$(".news_remen h2 a").hover(function(){
$(".news_remen h2 a").removeClass("currentBg_news");	
$(this).addClass("currentBg_news");
$(".news_remen > div").removeClass("visible")		   
k="hdjd00"+$(this).attr("rel")
$("."+k).addClass("visible")		   
})

/*������־*/		   
$(".top_news_rizhi h2 a:first").addClass("currentBg_news")		   
$(".top_news_rizhi ul:first").addClass("visible")		   
$(".top_news_rizhi h2 a").hover(function(){
$(".top_news_rizhi h2 a").removeClass("currentBg_news");	
$(this).addClass("currentBg_news");
$(".top_news_rizhi ul").removeClass("visible")		   
l="rerz00"+$(this).attr("rel")
$("."+l).addClass("visible")		   
})

/*��������Ĭ��ֵ*/
$(".fbpinglun textarea").val("�����������ž�á�")
$(".fbpinglun textarea").focusin(function(){
$(".fbpinglun textarea").val('');	   
})

$(".fbpinglun textarea").focusout(function(){
	if($(".fbpinglun textarea").val()==''){
	$(".fbpinglun textarea").val("�����������ž�á�");		   
	}										   
})








































})