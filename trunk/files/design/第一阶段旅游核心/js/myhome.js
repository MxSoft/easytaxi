$(function(){
/*�������õ�����*/
$(".user_set").hover(function(){
   $(this).find('.dangan').slideToggle(500)
   //slideDown(),slideUp() �˷���ʵ�����¡����϶���ʵ�������˵��ĸо���
},function(){
  $(this).find('.dangan').slideUp();
});
/*�������˳�ʼֵ*/
$(".input0").focusin(function(){
$(".input0").val("");					  
});
$(".input0").focusout(function(){
	if($(".input0").attr("value")==''){
	$(".input0").val("��������Ҫ�������ˡ�");					  
	}
});
/*�����¼*/
$(".jlxq").focusin(function(){
$(".jlxq").val("");					  
});
$(".jlxq").focusout(function(){
	if($(".jlxq").attr("value")==''){
	$(".jlxq").val("������ʲôҪ˵���𣿲�����¼��������ѷ���ɡ�");					  
	}
});
/*��̬ѡ�*/
//��ʼ��
$(".tab h2 a:first").addClass("currentBg_sw");
$(".tab .tabContent:first").addClass("visible");
$(".tab .tabContent div:first").addClass("visible");

$(".tab h2 a").click(function(){
							  
var dd="dnr00"+$(this).attr("rel");
var xx="xnr001";
var subtt=dd+" "+"h3"+" "+"a:first";

$(".tab h2 a").removeClass("currentBg_sw");
$(".tab .tabContent").removeClass("visible");
$(".tab .tabContent div").removeClass("visible");
$(".tabContent"+" "+"h3"+" "+"a").removeClass("currentBg_sw2");

$(this).addClass("currentBg_sw");
$("."+dd).addClass("visible");
$("."+xx).addClass("visible");
$("."+subtt).addClass("currentBg_sw2");

$("."+dd+" "+"h3"+" "+"a").click(function(){
	$(".tabContent"+" "+"h3"+" "+"a").removeClass("currentBg_sw2");
	$(this).addClass("currentBg_sw2");
	$(".tabContent"+" "+"div").removeClass("visible");
	
	var x0="xnr00"+$(this).attr("rel");
	//alert(dd+" "+x0);
	$("."+dd+" "+"."+x0).addClass("visible");
	})
})































})