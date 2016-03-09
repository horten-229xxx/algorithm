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