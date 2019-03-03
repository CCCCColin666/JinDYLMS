
$(function(){
	$('#dg').datagrid({    
    url:'datagrid_data1.json',    
    columns:[[    
        {field:'productid',title:'商品编号',width:100},    
        {field:'productname',title:'商品名称',width:100},    
        {field:'unitcost',title:'商品价格',width:100,align:'right'},  
        {field:'status',title:'商品状态',width:100,align:'right'},
        {field:'attr1',title:'商品属性',width:100,align:'right'},
        {field:'xxxxx',title:'操作',width:100,align:'left',formatter: function(value,row,index){
					return "<a href=''>修改</a>|<a href=''>删除</a>";
			}
        }
    ]],
    striped:true,
    //显示分页工具栏
    pagination:true,
    pageSize:5,
    pageList:[5,10,15],
    
	});  

	
});

