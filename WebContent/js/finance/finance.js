$(function(){
	$(".option").click(function(){
		$(this).next(".option_child").toggle();
		$(this).next(".option_child").next(".option_child").toggle();
	})
	
	
	$(".option").click(function(){
		alert(123);
		$.ajax({
			url:"../../selectInvoiceInfo",
			type:"post",
			success:function(data){
				alert(data);
			}
		});
	
	});
	
});