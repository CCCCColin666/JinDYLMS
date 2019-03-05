$(function(){
	function one(){
		$.ajax({
			type:"post",
			url:"../../AAAAA",
			dataType:"json",
			success:function(data){
				var c="<div id='yj'>一级分类</div>"
					$(c).appendTo("#div3")
				for(var i=0;i<data.length;i++){
					var a ="<div class='first'>" +
							"<div class='one' data_id='"+data[i].fid+"'>"+data[i].fname+"</div>" +
							"<img class='shan' data_id='"+data[i].fid+"'" +
							" src='../../img/distribution/shan.png'/>" +
							"<img class='xiu' data_id='"+data[i].fid+"'" +
							" src= '../../img/distribution/xiu.png'/></div>"
					$(a).appendTo("#div3")
				}
				var b ="<div id='To'>+添加</div>";
				$(b).appendTo("#div3")
			}
		})
	}
	
	//查询一级分类
	$("#sp").click(function(){
		$("#div3").empty();
		one();
		$("#tj").empty();
		$("#tj").hide();
	});
	
	//添加一级分类
	$(document).on("click","#To",function(){
		$("#div3").empty();
		var a ="<div>"
			+"<h3>添加一级分类</h3>"
			+"名称：<input type='text' id='inp1'/></br>"
			+"备注：<textarea rows='3' cols='20' id='text1'></textarea>"
			+"</div></br>"
			+"<button id='qd'>确定</button><button id='fh'>返回</button>";
		$(a).appendTo("#tj");
		$("#tj").show();
		$("#qd").click(function(){
			if($("#inp1").val()==""){
				alert("请填写信息")
			}else{
				$.ajax({
					type:"post",
					url:"../../insertFirst",
					data:{fname:$("#inp1").val(),
						  fdescription:$("#text1").val()},
					success:function(data){
						alert("添加成功");
						one();
						$("#tj").empty();
						$("#tj").hide();
					}
				})
			}
		})
		$("#fh").click(function(){
			one();
			$("#tj").empty();
			$("#tj").hide();
		})
	})
	//删除一级分类
	$(document).on("click",".shan",function(){
		var a=$(this).attr("data_id");
		$("#div3").empty();
		$.ajax({
			type:"post",
			url:"../../deleteFirst",
			data:{fid:a},
			success:function(data){
				if(data=="2"){
					alert("不可以删除")
				}else{
					alert("删除成功");
				}
				one();
			}
		})
	})
	//修改一级分类
	$(document).on("click",".xiu",function(){
		var fid=$(this).attr("data_id");
		$("#div3").empty();
		var a ="<div>"
			+"<h3>修改一级分类</h3>"
			+"名称：<input type='text' id='inp1'/></br>"
			+"备注：<textarea rows='3' cols='20' id='text1'></textarea>"
			+"</div></br>"
			+"<button id='qd'>确定</button><button id='fh'>返回</button>";
		$(a).appendTo("#tj");
		$("#tj").show();
		$("#qd").click(function(){
			if($("#inp1").val()==""){
				alert("请填写信息")
			}else{
				$.ajax({
					type:"post",
					url:"../../updateFirst",
					data:{fname:$("#inp1").val(),
						  fdescription:$("#text1").val(),
						  fid:fid},
					success:function(data){
						alert("修改成功");
						one();
						$("#tj").empty();
						$("#tj").hide();
					}
				})
			}
		})
		$("#fh").click(function(){
			$("#div3").empty();
			one();
			$("#tj").empty();
			$("#tj").hide();
		})
		
	})
	//查询二级分类
	$(document).on("click",".one",function two(){
		$("#div3").empty();
		var fid =$(this).attr("data_id");
		$.ajax({
			type:"post",
			url:"../../twoAll",
			data:{fid:fid},
			dataType:"json",
			success:function(data){
				var c="<div id='yj'>二级分类</div>"
					$(c).appendTo("#div3")
				for(var i=0;i<data.length;i++){
					var a ="<div class='first'><div class='two' data_id='"+data[i].sdid+"'>"+data[i].sdname+"</div><img class='shan2' data_id='"+data[i].sdid+"' src='../../img/distribution/shan.png'/><img class='xiu2' data_id='"+data[i].sdid+"' src= '../../img/distribution/xiu.png''/></div>"
					$(a).appendTo("#div3")
				}
				var b ="<div id='TT'>+添加</div>";
				$(b).appendTo("#div3")
				//添加二级分类
				$("#TT").click(function(){
					$("#div3").empty();
					var a ="<div>"
						+"<h3>添加二级分类</h3>"
						+"名称：<input type='text' id='inp3'/></br>"
						+"备注：<textarea rows='3' cols='20' id='text3'></textarea>"
						+"</div></br>"
						+"<button id='qd'>确定</button><button id='fh'>返回</button>";
					$(a).appendTo("#tj");
					$("#tj").show();
					$("#qd").click(function(){
						if($("#inp3").val()==""){
							alert("请添加信息")
						}else{
							$.ajax({
								type:"post",
								url:"../../insetSecond",
								data:{sdname:$("#inp3").val(),
									sddescription:$("#text3").val(),
									  fid:fid},
								success:function(data){
									alert("添加成功")
									$("#div3").empty();
									one();
									$("#tj").empty();
									$("#tj").hide();
								}
							})
						}
						
					})
					$("#fh").click(function(){
						$("#div3").empty();
						one();
						$("#tj").empty();
						$("#tj").hide();
					})
					
				})
			}
		})		
	})
	//二级分类修改
	$(document).on("click",".xiu2",function (){
		var sdid=$(this).attr("data_id");
		$("#div3").empty();
		var a ="<div>"
			+"<h3>修改二级分类</h3>"
			+"名称：<input type='text' id='inp2'/></br>"
			+"备注：<textarea rows='3' cols='20' id='text2'></textarea>"
			+"</div></br>"
			+"<button id='qd'>确定</button><button id='fh'>返回</button>";
		$(a).appendTo("#tj");
		$("#tj").show();
		$("#qd").click(function(){
			if($("#inp2").val()==""){
				alert("请填写信息")
			}else{
				$.ajax({
					type:"post",
					url:"../../updateSecond",
					data:{sdname:$("#inp2").val(),
						sddescription:$("#text2").val(),
						  sdid:sdid},
					success:function(data){
						alert("修改成功");
						one();
						$("#tj").empty();
						$("#tj").hide();
					}
				})
			}
		})
		$("#fh").click(function(){
			$("#div3").empty();
			one();
			$("#tj").empty();
			$("#tj").hide();
		})
		
	})
	//删除二级分类
	$(document).on("click",".shan2",function(){
		$("#div3").empty();
		var a=$(this).attr("data_id");
		$.ajax({
			type:"post",
			url:"../../deleteSecond",
			data:{sdid:a},
			success:function(data){
				if(data=="2"){
					alert("不可以删除")
				}else{
					alert("删除成功");
				}
				one();
			}
		})
	})
	//查询商品
	$(document).on("click",".two",function(){
		$("#div3").empty();
		var sdid =$(this).attr("data_id");
		var pagesize=2;
		var pagenum =1;
		$.ajax({
			type:"post",
			url:"../../SelectMerchandise",
			dataType:"json",
			data:{sdid:sdid,
				  pagesize:pagesize,
				  pagenum:pagenum
				},
			success:function(data){
				for(var i=0;i<data.length;i++){
					var c="<div id='yj'>商品</div>"
						$(c).appendTo("#div3")
					for(var i=0;i<data.length;i++){
						var a ="<div class='first'><div class='goods' data_id='"+data[i].meid+"'>"+data[i].mename+"</div><img class='shan3' data_id='"+data[i].meid+"' src='../../img/distribution/shan.png'/><img class='xiu3' data_id='"+data[i].meid+"' src= '../../img/distribution/xiu.png''/></div>"
						$(a).appendTo("#div3")
					}					
				}
			}
		})
	})
	$(document).on("click",".shan3",function(){
		$("#div3").empty();
		var meid = $(this).attr("data_id");
		$.ajax({
			type:"post",
			url:"../../deleteMerchandise",
			data:{meid:meid},
			success:function(data){
				if(data=="2"){
					alert("有订单不可以删除")
				}else{
					alert("删除成功")
				}
			}
		})
	})
})
