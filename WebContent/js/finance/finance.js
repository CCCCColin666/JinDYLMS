$(function(){
	$(".option").click(function(){
		$(this).next(".option_child").slideToggle("fast");
		$(this).next(".option_child").next(".option_child").slideToggle("fast");
	})
	
	
	$(".option_child:eq(0)").click(function(){
		$("#div2_function1").toggle();
		$("#div2_function2").hide();
	})
	
	$(".option_child:eq(1)").click(function(){
		$("#div2_function2").toggle();
		$("#div2_function1").hide();
	})
	
	
	$("#select>input").focus(function(){
		$("#tip1").show();
	})
	
	$("#select>input").blur(function(){
		$("#tip1").hide();
	})
	
	$(".option").click(function(){
		$.ajax({
			url:"../../selectInvoiceInfo",
			type:"post",
			success:function(data){
				
			}
		});
	});
	
	
	
	
});