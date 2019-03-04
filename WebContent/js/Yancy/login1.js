$(function(){
	$("#submit").click(function(){
		var username=$("#dname").val();
		var password=$("#password").val();
		alert(username)
		alert(password)
			$.ajax({
				type:"post",
				url:"../../login/"+username+"/"+password, 
				success:function(data){
					alert("报名成功");
				}
			});
		})
});