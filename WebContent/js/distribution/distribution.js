$(function(){
	function one(){
		$.ajax({
			type:"post",
			url:"../../AAAAA",
			dataType:"json",
			async:false, 
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
		var pagesize=3;
		var pagenum =1;
		$.ajax({
			type:"post",
			url:"../../SelectMerchandise",
			dataType:"json",
			async:false, 
			data:{sdid:sdid,
				  pagesize:pagesize,
				  pagenum:pagenum
				},
			success:function(data){
					var c="<div id='div3_set'>"
				+"<div id='sp1'>商品</div>"
				+"<div id='sp2'>"
				+"<span>商品搜索</span>"
				+"<input type='text' name='shname' id='seachs'/>"
				+"<input type='button' value='搜索' id='btns'/>"
				+"</div>"
				+"</div>"
						$(c).appendTo("#div3")
					for(var i=0;i<data.length;i++){
						var a ="<div class='first'><div class='goods' data_id='"+data[i].meid+"'>"+data[i].mename+"</div><img class='shan4' data_id='"+data[i].meid+"' src='../../img/distribution/shan.png'/><img class='xiu4' data_id='"+data[i].meid+"' src= '../../img/distribution/xiu.png''/></div>"
						$(a).appendTo("#div3")
					}
					var b="<div class='fy'><div class='before'>上一页</div>"+pagenum+"<div class='next'>下一页</div></div>"
						$(b).appendTo("#div3");
					var c="<div id='tjsp'>添加商品</div>"
						$(c).appendTo("#div3");
			}
				
		})
		$(document).on("click",".next",function(){
			pagenum++;
			$.ajax({
				type:"post",
				url:"../../SelectMerchandise",
				dataType:"json",
				async:false, 
				data:{sdid:sdid,
					  pagesize:pagesize,
					  pagenum:pagenum
					},
				success:function(data){
					if(data.length==0){
						pagenum--;
					}else{
						$("#div3").empty();
						var c="<div id='div3_set'>"
							+"<div id='sp1'>商品</div>"
							+"<div id='sp2'>"
							+"<span>商品搜索</span>"
							+"<input type='text' name='shname' id='seachs'/>"
							+"<input type='button' value='搜索' id='btns'/>"
							+"</div>"
							+"</div>"
									$(c).appendTo("#div3")
						for(var i=0;i<data.length;i++){
							var a ="<div class='first'><div class='goods' data_id='"+data[i].meid+"'>"+data[i].mename+"</div><img class='shan4' data_id='"+data[i].meid+"' src='../../img/distribution/shan.png'/><img class='xiu4' data_id='"+data[i].meid+"' src= '../../img/distribution/xiu.png''/></div>"
							$(a).appendTo("#div3")
						}
						var b="<div class='fy'><div class='before'>上一页</div>"+pagenum+"<div class='next'>下一页</div></div>"
							$(b).appendTo("#div3");
						var c="<div id='tjsp'>添加商品</div>"
							$(c).appendTo("#div3");
					}
					
				}
			})		
		})
		$(document).on("click",".before",function(){
			pagenum--;
			if(pagenum==0){
				pagenum++
			}else{
				$("#div3").empty();
				$.ajax({
					type:"post",
					url:"../../SelectMerchandise",
					dataType:"json",
					async:false, 
					data:{sdid:sdid,
						  pagesize:pagesize,
						  pagenum:pagenum
						},
					success:function(data){
						var c="<div id='div3_set'>"
							+"<div id='sp1'>商品</div>"
							+"<div id='sp2'>"
							+"<span>商品搜索</span>"
							+"<input type='text' name='shname' id='seachs'/>"
							+"<input type='button' value='搜索' id='btns'/>"
							+"</div>"
							+"</div>"
									$(c).appendTo("#div3")
						for(var i=0;i<data.length;i++){
							var a ="<div class='first'><div class='goods' data_id='"+data[i].meid+"'>"+data[i].mename+"</div><img class='shan4' data_id='"+data[i].meid+"' src='../../img/distribution/shan.png'/><img class='xiu4' data_id='"+data[i].meid+"' src= '../../img/distribution/xiu.png''/></div>"
							$(a).appendTo("#div3")
						}
						var b="<div class='fy'><div class='before'>上一页</div>"+pagenum+"<div class='next'>下一页</div></div>"
							$(b).appendTo("#div3");
						var c="<div id='tjsp'>添加商品</div>"
							$(c).appendTo("#div3");
					}
				})
			}
		})
			$(document).on("click","#btns",function(){
				$.ajax({
					type:"post",
					url:"../../oneMerchandise",
					data:{
						sdid:sdid,
						mename:$("#seachs").val()
					},
					success:function(data){
						$("#div3").empty();
						var c="<div id='div3_set'>"
							+"<div id='sp1'>商品</div>"
							+"<div id='sp2'>"
							+"<span>商品搜索</span>"
							+"<input type='text' name='shname' id='seachs'/>"
							+"<input type='button' value='搜索' id='btns'/>"
							+"</div>"
							+"</div>"
							$(c).appendTo("#div3")
						for(var i=0;i<data.length;i++){
							var a ="<div class='first'><div class='goods' data_id='"+data[i].meid+"'>"+data[i].mename+"</div><img class='shan4' data_id='"+data[i].meid+"' src='../../img/distribution/shan.png'/><img class='xiu4' data_id='"+data[i].meid+"' src= '../../img/distribution/xiu.png''/></div>"
							$(a).appendTo("#div3")
						}
						var b="<div class='fy'><div class='before'>上一页</div>"+pagenum+"<div class='next'>下一页</div></div>"
							$(b).appendTo("#div3");
						var c="<div id='tjsp'>添加商品</div>"
							$(c).appendTo("#div3");
					}
				})
		
			})
			//添加商品
			$(document).on("click","#tjsp",function(){
				$("#div3").empty();
			var a="<form id='form2'>"
				+"<table class='sp_table1' border='1'  cellspacing='0'>"
				+"<tr><th colspan='4'>添加商品</th></tr>"
				+"<tr>"
				+"<th>商品名称</th>"
				+"<th><input type='text' name='mename' value=''/></th>"
				+"<th>计量单位</th>"
				+"<th><input type='text' name='measurement' value=''/></th>"
				+"</tr>"
				+"<tr>"
				+"<th>原价</th>"
				+"<th><input type='text' name='saleprice'  value=''/></th>"
				+"<th>商品折扣</th>"
				+"<th><input type='text' id='mesrebate' value=''/></th>"
				+"</tr>"
				+"<tr>"
				+"<th>成本价</th>"
				+"<th><input type='text' name='buyprice' value=''/></th>"
				+"<th>型号</th>"
				+"<th><input type='text' name='kind' value=''/></th>"
				+"</tr>"
				+"<tr>"
				+"<th>供应商</th>"
				+"<th><select id='timespan' class='Wdate'  >"
                           
                           +"</select></th>"
				+"<th>厂商</th>"
				+"<th><input type='text' name='factory' value=''/></th>"
				+"</tr>"
				+"<tr>"
				+"<th>保质日期</th>"
				+"<th><input type='text' name='savedays' value=''/></th>"
				+"<th>可否退货</th>"
				+"<th><input type='text' name='isback' value=''/></th>"
				+"</tr>"
				+"<tr>"
				+"<tr>"
				+"<th>可否换货</th>"
				+"<th><input type='text' name='ischange' value=''/></th>"
				+"<th></th>"
				+"<th></th>"
				+"</tr>"
				+"<tr>"
				+"<tr><th>备注</th><th colspan='3'><input type='text' name='mes' value=''/></th></tr>"
				+"</table>"
				+"<button type='button' id='bc1'>保存</button>"
				+"</form>"
					$(a).appendTo("#div3")
					$.ajax({
						type:"post",
						url:"../../saveSupplier",
						dataType:"json",
						success:function(data){
							for(var i=0;i<data.length;i++){
								var option="<option value='"+i+"' >"+data[i].sname+"</option>"
								$(option).appendTo("#timespan");
							}
						}
					})
			$("#bc1").click(function(){
				var sid=parseInt($("select").val())+1;
				var mesrebate=$("#mesrebate").val();
				$.ajax({
					type:"post",
					url:"../../insetMerchandise/"+sid+"/"+mesrebate+"/"+sdid,
					data:$("#form2").serialize(),
					success:function(data){
						alert("添加成功")
					}
				})
			})
					
		})
	})

	//商品删除
	$(document).on("click",".shan4",function(){
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
	//商品详情
	$(document).on("click",".goods",function(){
		$("#div3").empty();
		var meid = $(this).attr("data_id");
		$.ajax({
			type:"post",
			url:"../../details",
			data:{meid:meid},
			dataType:"json",
			success:function(data){
					var a =
						"<table class='sp_table1' border='1'  cellspacing='0'>"
						+"<tr><th colspan='4'>修改商品</th></tr>"
						+"<tr>"
						+"<th>商品代码</th>"
						+"<th>"+data.meid+"</th>"
						+"<th>商品名称</th>"
						+"<th>"+data.mename+"</th>"
						+"</tr>"
						+"<tr>"
						+"<th>一级分类</th>"
						+"<th>"+data.second.first.fname+"</th>"
						+"<th>二级分类</th>"
						+"<th>"+data.second.sdname+"</th>"
						+"</tr>"
						+"<tr>"
						+"<th>计量单位</th>"
						+"<th>"+data.measurement+"</th>"
						+"<th>原价</th>"
						+"<th>"+data.saleprice+"</th>"
						+"</tr>"
						+"<tr>"
						+"<th>商品折扣</th>"
						+"<th>"+data.mesrebate+"</th>"
						+"<th>成本价</th>"
						+"<th>"+data.buyprice+"</th>"
						+"</tr>"
						+"<tr>"
						+"<th>型号</th>"
						+"<th>"+data.kind+"</th>"
						+"<th>供应商</th>"
						+"<th>"+data.sidw.sname+"</th>"
						+"</tr>"
						+"<tr>"
						+"<th>厂商</th>"
						+"<th>"+data.factory+"</th>"
						+"<th>保质日期</th>"
						+"<th>"+data.savedays+"</th>"
						+"</tr>"
						+"<tr>"
						+"<th>可否退货</th>"
						+"<th>"+data.isback+"</th>"
						+"<th>可否换货</th>"
						+"<th>"+data.ischange+"</th>"
						+"</tr>"
						+"<tr><th>备注</th><th colspan='3'>"+data.mes+"</th></tr>"
						+"</table>"
						
				$(a).appendTo("#div3")
				
			}
		})
		
	})
	//修改商品
	$(document).on("click",".xiu4",function(){
		$("#div3").empty();
		var meid = $(this).attr("data_id");
		$.ajax({
			type:"post",
			url:"../../details",
			data:{meid:meid},
			dataType:"json",
			success:function(data){
			var b="<form id='form1'>"
				+"<table class='sp_table1' border='1'  cellspacing='0'>"
				+"<tr><th colspan='4'>修改商品</th></tr>"
				+"<tr>"
				+"<th>商品代码</th>"
				+"<th><input type='text' readonly='readonly' name='meid' value='"+data.meid+"'></th>"
				+"<th>商品名称</th>"
				+"<th><input type='text' name='mename' value='"+data.mename+"'/></th>"
				+"</tr>"
				+"<tr>"
				+"<th>一级分类</th>"
				+"<th>"+data.second.first.fname+"</th>"
				+"<th>二级分类</th>"
				+"<th>"+data.second.sdname+"</th>"
				+"</tr>"
				+"<tr>"
				+"<th>计量单位</th>"
				+"<th>"+data.measurement+"</th>"
				+"<th>原价</th>"
				+"<th><input type='text' name='saleprice' value='"+data.saleprice+"'/></th>"
				+"</tr>"
				+"<tr>"
				+"<th>商品折扣</th>"
				+"<th><input type='text' name='mesrebate' value='"+data.mesrebate+"'/></th>"
				+"<th>成本价</th>"
				+"<th>"+data.buyprice+"</th>"
				+"</tr>"
				+"<tr>"
				+"<th>型号</th>"
				+"<th>"+data.kind+"</th>"
				+"<th>供应商</th>"
				+"<th>"+data.sidw.sname+"</th>"
				+"</tr>"
				+"<tr>"
				+"<th>厂商</th>"
				+"<th>"+data.factory+"</th>"
				+"<th>保质日期</th>"
				+"<th><input type='text' name='savedays' value='"+data.savedays+"'/></th>"
				+"</tr>"
				+"<tr>"
				+"<th>可否退货</th>"
				+"<th><input type='text' name='isback' value='"+data.isback+"'/></th>"
				+"<th>可否换货</th>"
				+"<th><input type='text' name='ischange' value='"+data.ischange+"'/></th>"
				+"</tr>"
				+"<tr><th>备注</th><th colspan='3'><input type='text' name='mes' value='"+data.mes+"'/></th></tr>"
				+"</table>"
						+"<button type='button' id='bc'>保存</button>"
						+"</form>"	
				$(b).appendTo("#div3")
				
			}
		})
		$(document).on("click","#bc",function(){
					var fromData =new FormData(document.getElementById("form1"));
					$.ajax({
						type:"post",
						url:"../../upMerchandise",
						data:fromData,
						contentType:false,
						processData:false,
						success:function(data){
							alert("修改成功")
						}
					})
				})
		
	})
	//缺货单
	$("#warehouse_warrant").click(function(){
		$("#div3").empty();
		var a="<div id='div3_set'>"
			+"<div id='sp1'>缺货商品</div>"
			+"<div id='sp2'>"
			+"<span>商品搜索</span>"
			+"<input type='text' name='shname' id='seachs'/>"
			+"<input type='button' value='搜索' id='btns'/>"
			+"</div>"
			+"</div>"
			+"<table class='sp_table1' border='1'  cellspacing='0'>"
				+"<tr>"
				+"<th>商品代码</th>"
				+"<th>商品名称</th>"
				+"<th>型号</th>"
				+"<th>订单需求</th>"
				+"<th>现有库存</th>"
				+"<th>预警库存量</th>"
				+"<th>缺货数量</th>"
				+"<th>计量单位</th>"
				+"<th>状态</th>"
				+"<th></th>"
				+"</tr>"
				+"</table>"
				$(a).appendTo("#div3")
			$.ajax({
				type:"post",
				url:"../../selectLack",
				success:function(data){
					for(var i=0;i<data.length;i++){
						if(data[i].lgstatus=="未受理"){
							var dq=data[i].orderinfo.itemquantity-data[i].orderinfo.cs.inventory
							var c="<tr>"
							+"<th>"+data[i].orderinfo.itemidwo.meid+"</th>"
							+"<th>"+data[i].orderinfo.itemidwo.mename+"</th>"
							+"<th>"+data[i].orderinfo.itemidwo.kind+"</th>"
							+"<th>"+data[i].orderinfo.itemquantity+"</th>"
							+"<th>"+data[i].orderinfo.cs.inventory+"</th>"
							+"<th>"+data[i].orderinfo.cs.cshmin+"</th>"
							+"<th>"+dq+"</th>"
							+"<th>"+data[i].orderinfo.itemidwo.measurement+"</th>"
							+"<th>"+data[i].lgstatus+"</th>"
							+"<th data_id='"+i+"' id='jh'>进货</th>"
							+"</tr>"
							$(c).appendTo(".sp_table1");
						}
					}
						
					$(document).on("click","#jh",function(){
						$("#div3").empty();
						var i=$(this).attr("data_id");
						var g="<form id='form1'>"
							+"<table class='sp_table1' border='1'  cellspacing='0'>"
							+"<tr><th colspan='7'>修改商品</th></tr>"	
								+"<tr>"
								+"<th>供货商</th>"
								+"<th>商品代码</th>"
								+"<th>商品名称</th>"
								+"<th>计量单位</th>"
								+"<th>单价</th>"
								+"<th>型号</th>"
								+"<th>进货量</th>"
								+"</tr>"
								+"<th><select id='timespan' class='Wdate'>"
								+"</select></th>"
								+"<th><input name='meid' type='text' readonly='readonly' value='"+data[i].orderinfo.itemidwo.meid+"'></th>"
								+"<th><input  type='text' readonly='readonly' value='"+data[i].orderinfo.itemidwo.mename+"'></th>"
								+"<th><input name='' type='text' readonly='readonly' value='"+data[i].orderinfo.itemidwo.measurement+"'></th>"
								+"<th><input name='' type='text' readonly='readonly' id='dan' value='"+data[i].orderinfo.itemidwo.buyprice+"'></th>"
								+"<th><input name='' type='text' readonly='readonly' value='"+data[i].orderinfo.itemidwo.kind+"'/></th>"
								+"<th><input name='wcount' id='shu' type='text'  value=''/></th>"
								+"</tr>"
								+"</table>"
								+"<button type='button' id='bc2'>保存</button>"
								+"</form>"
								$(g).appendTo("#div3");
						$.ajax({
							type:"post",
							url:"../../saveSupplier",
							success:function(data){
								for(var i=0;i<data.length;i++){
									var option="<option value='"+i+"' >"+data[i].sname+"</option>"
									$(option).appendTo("#timespan");
								}
							}
						})
						$(document).on("click","#bc2",function(){
							if($("#shu").val()==""){
								alert("请添加数量")
							}else{
								var sid=parseInt($("select").val())+1;
								var dan=$("#dan").val()
								$.ajax({
									type:"post",
									url:"../../insertReplenish/"+sid+"/"+dan,
									data:$("#form1").serialize(),
									success:function(data){
										alert("添加成功")
									}
								})
							}
							
						})
						
						
					})
				}
			})
	})
})
