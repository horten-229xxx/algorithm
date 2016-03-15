/*
* 判断数组是否存在并且是否是数组
*/
function normalize(arr) {
	// 判断传入的参数是否为数组
	if(arr && Array.isArray(arr)) {
		// str用于存储之后去重后的数组
		// obj用于标记该字段是否出现过
		var str = [],obj = {};
		// 遍历数组
		arr.forEach(function(item,index){
			if(!obj[item]) {
				// obj中不存在该属性则添加并且把字段加入到str中
				obj[item] = true;
				str.push(item);
			}
		});
		return str;
	} else {
		console.log('参数为非数组！');
	}
}

function normalize1(arr) {
	for(var i = 0;i < len;i++) { 
 	// 利用类型和数值做键值 
	 	var key = typeof(arr[i]) + arr[i]; 
	 	if(!obj[key]) { 
	 	// obj中不存在该属性则添加并且把字段加入到str中 
		 	obj[key] = true; 
		 	str.push(arr[i]); 
	 	} 
	} 
}

/*
* 来自Rbin的点拨
*/
function normalize2(arr) {
	var str=[],obj={};
	arr.forEach(function(item,index){
		// 把数组值转换为字符串，因为obj[key]会去掉字符串中的引号
		var key = JSON.stringify(item);
	  	if( !obj[key] ){
		 	obj[key] = true;
		 	str.push(item);
		}
	});
}
