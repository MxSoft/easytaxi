$(function(){
$(".input_ss").focusin(function(){
$(".input_ss").val("");					  
});
$(".input_ss").focusout(function(){
	if($(".input_ss").attr("value")==''){
	$(".input_ss").val("������ؼ���");					  
	}
});

/*�������������˵�*/		   
$(".down").click(function(){
$(".selectcon ul").slideToggle(100)
},function(){
$(".selectcon ul").slideUp("fast");
});

$(".selectcon ul li a").click(function(){
$(".down").html($(this).html());
$(".selectcon ul").slideUp("fast");
});

$(".down").focusout(function(){
$(".selectcon ul").slideUp("fast");
});

/*��¼Ĭ��*/		   
$(".df0").focusin(function(){
$(".df0").val("");					  
});
$(".df0").focusout(function(){
	if($(".df0").attr("value")==''){
	$(".df0").val("��������/�û���");					  
	}
});

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


/*�ҵ�ˣ��top�����˵�*/
$(".xialacd li").hover(function(){
   $(this).find(".layer").slideToggle(500)
},function(){
  $(this).find(".layer").slideUp();
});

































})







