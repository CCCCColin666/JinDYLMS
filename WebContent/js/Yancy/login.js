$(function(){
	

	$("#send-btn").click(function(){
		var username=$("#username").val();
		var password=$("#password").val();
		alert(username)
		alert(password)
			$.ajax({
				type:"post",
				url:"../../login/"+username+"/"+password, // **.action,getUserInfo?username=**&age=**;Restful
				success:function(data){
					alert(data)
				}
			});
		})
});