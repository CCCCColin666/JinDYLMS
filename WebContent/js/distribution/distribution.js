$(function(){
	function one(){
		$.ajax({
			type:"post",
			url:"../../AAAAA",
			dataType:"json",
			success:function(data){
				var c="<div>一级分类</div>"
					$(c).appendTo("#div3")
				for(var i=0;i<data.length;i++){
					var a ="<div class='first'><div class='one' data_id='"+data[i].fid+"'>"+data[i].fname+"</div><img class='shan' data_id='"+data[i].fid+"' src='../../img/distribution/shan.png'/><img class='xiu' data_id='"+data[i].fid+"' src= '../../img/distribution/xiu.png'/></div>"
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
		$("#div3").empty();
		var a=$(this).attr("data_id");
		$.ajax({
			type:"post",
			url:"../../deleteFirst",
			data:{fid:a},
			success:function(data){
				alert("删除成功");
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
	$(document).on("click",".one",function(){
		$("#div3").empty();
		var fid =$(this).attr("data_id");
		$.ajax({
			type:"post",
			url:"../../twoAll",
			data:{fid:fid},
			dataType:"json",
			success:function(data){
				var c="<div>二级分类</div>"
					$(c).appendTo("#div3")
				for(var i=0;i<data.length;i++){
					var a ="<div class='first'><div class='one' data_id='"+data[i].sdid+"'>"+data[i].sdname+"</div><img class='shan' data_id='"+data[i].sdid+"' src='../../img/distribution/shan.png'/><img class='xiu' data_id='"+data[i].sdid+"' src= '../../img/distribution/xiu.png''/></div>"
					$(a).appendTo("#div3")
				}
				var b ="<div id='To'>+添加</div>";
				$(b).appendTo("#div3")
			}
		})		
	})
	//修改二级分类
	//查询商品
	$(document).on("click",".two",function(){
		var twid =$(this).attr("data_id");
		$.ajax({
			type:"post",
			url:"../../two/"+oneid,
			dataType:"json",
			success:function(data){
				for(var i=0;i<data.length;i++){
					var a ="<div class='two' data_id='"+data[i].id+"'>"+data[i].name+"</div>"
					$(a).appendTo("#填上id")
				}
			}
		})
	})
})
