$(function(){
/*ע��ɹ�ȫѡ��ѡ*/
$(":checkbox").attr("checked",false);
$(".lianxiren h4 :checkbox").click(function(){
if(this.checked){  
$(".lianxiren input[name='checkbox']").each(function(){this.checked=true;});
$(this).attr("value","��ѡ");  
}else{  
	$(".lianxiren input[name='checkbox']").each(function(){this.checked=false;});  
	$(this).attr("value","��ȫѡ");
}  
}); 



$(".lxr_ll h4 :checkbox").click(function(){  
if(this.checked){ 
$(".lxr_ll input[name='checkbox']").each(function(){this.checked=true;});
$(this).attr("value","��ѡ");  
}else{  
	$(".lxr_ll input[name='checkbox']").each(function(){this.checked=false;});  
	$(this).attr("value","��ȫѡ");
}  
}); 

/*�������Ĭ��ֵ*/
$("textarea").val("����ˣ���ʷ������������ж�Ӽ�����")
$("textarea").focusin(function(){
$("textarea").val('');	   
})

$("textarea").focusout(function(){
	if($("textarea").val()==''){
	$("textarea").val("����ˣ���ʷ������������ж�Ӽ�����");		   
	}										   
})


/*��������*/
$(".chushiss").addClass("visible")						 
$(".cjss").click(function(){
$(".chushiss").removeClass("visible");
$(".chaojiss").addClass("visible");
})
/*��ʾ����*/
$(".input8").focusin(function(){
$(".sslist").addClass("visible")
$(".wsd").addClass("visible")
})
/*��ʧ����*/
$(".input8").focusout(function(){
$(".sslist").removeClass("visible")
$(".wsd").removeClass("visible")
})
/*��������*/
$(".ssjd_btn").click(function(){
$(".sslist").addClass("visible")
$(".wsd").removeClass("visible")
$(".ssd").addClass("visible")
})
/*ѡ�񾰵�*/
$(".ssd a").click(function(){
$(".chaojiss").removeClass("visible");
$(".xiugaiss").addClass("visible");
$("input[name='jingdian']").attr("value",$(this).html());
})
/*�޸�*/
$(".xgss").click(function(){
$(".xiugaiss").removeClass("visible");
$(".sslist").removeClass("visible")
$(".chaojiss").addClass("visible");
})









})