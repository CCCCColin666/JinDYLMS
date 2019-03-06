$(function(){
	$("#submit").click(function(){
		var username=$("#dname").val();
		var password=$("#password").val();
		alert(username)
		alert(password)
		
			$.ajax({
				type:"post",
				url:"../../login/"+username+"/"+password, 
				dataType:"json",
				success:function(data){
					alert(data);
					if(data=="1"){
						window.location.href="main.html?username="+username+"&password="+password;
					}
				}
			});	
		})
     });