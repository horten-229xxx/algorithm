/*
* 交换函数，交换数组中两个位置的数
*/
function swap(list,i,j) {
	var temp = list[i];
	list[i] = list[j];
	list[j] = temp;
}
var mylist = [34,29,88,56,99,70,17,42,64];
console.log(mylist);

//插入排序：直接插入排序+希尔排序
//直接插入排序
function dinsert(list){
	var len = list.length,key = null;
	for(var i = 1;i < len;i++){
		key = list[i];
		for(var j = i-1;j >= 0;j--){
			if(list[j] > key){
				list[j+1] = list[j];
				if(j == 0){
					list[j] = key;
				}
			}else{
				break;
			}
		}
		list[j+1] = key;
	}
	return list;
}
//console.log("直接插入排序结果：" + dinsert(mylist));

//希尔排序
function shell(list){
	if(list == null || list.length == 0) {
		console.log("sort error!");
		return list;
	}
	var len = list.length,temp = null,group = null;
	for(group = Math.floor(list.length/2);group > 0;group = Math.floor(group/2)){
		//增量的次数
		for(var i = group; i < len;i++){
			for(var j = i - group; j >= 0;j -= group){
				if (list[j] > list[j + group]) {
					temp = list[j];
					list[j] = list[j + group];
					list[j + group] = temp;
				};
			}
		}
	}
	return list
}
/*
* 一趟希尔排序
*/
function shellInsert(list,dk) {
	var i,j,len=list.length,key=null;
	for(i = 0;i < len - dk;i++) {
		// 将i+dk插入有序序列
		if(list[i+dk] < list[i]) {
			key = list[i+dk];
			j = i + dk;
			do{
				// 记录后移
				j -=dk;
				list[j+dk] = list[j];
			}while(j-dk > 0 && key < list[j-dk]);
			list[j] = key;
		}
	}
}
function shell2(list) {
	var group = null;
	// group为增量，直到1的时候排序结束
	for(group = Math.floor(list.length/2);group > 0; group = Math.floor(group/2)) {
		shellInsert(list,group);
	}
	return list;
}
// console.log("希尔排序结果：" + shell(mylist));

//选择排序：直接选择排序+堆排序
//直接选择排序

function choose(list) {
	var len = list.length,temp = null;
	for (var i = 0; i < len; i++){
		for(var j = i + 1;j < len;j++){
			if(list[i] > list[j]) {
				temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
		}
	}
	return list;
}
// console.log("直接选择排序结果：" + choose(mylist));

//堆排序 

function buildMaxHeap(list,lastIndex) {
	for(var i = Math.floor((lastIndex-1)/2);i >= 0;i--) {
		// i为lastIndex的父节点
		// k保存当前正在判断的节点
		var k = i;
		// 当k存在左节点时，即k存在子节点
		while(2*k+1 <= lastIndex) {
			// 暂时保存左节点的值到biggerIndex即最大值
			var biggerIndex = 2*k+1;
			if(biggerIndex < lastIndex) {
				// 当左节点不是最后的节点的时候
				// 判断左右节点哪个大，把大的序号保存到biggerIndex
				if(list[biggerIndex] < list[biggerIndex+1]) {
					biggerIndex++;
				}
			}
			if(list[k] < list[biggerIndex]) {
				// 比较父节点与左右节点最大值，把大值交换到父节点
				// 交换后把k修改为biggerIndex，继续循环判断子节点
				swap(list,k,biggerIndex);
				k = biggerIndex;
			}else {
				break;
			}
		}
	}
}
function heapSort(list){
	var len = list.length;
	for(var i = 0;i < len-1;i++) {
		// 建堆，每次减去最后的数进行建堆
		buildMaxHeap(list,len-1-i);
		swap(list,0,len-1-i);
	}
	return list;
}
// console.log("堆排序：" + heapSort(mylist));

//交换排序：冒泡排序+快速排序
//冒泡排序
function bubbling(list) {
	var len = list.length,temp;
	// i表示本次冒泡参与的个数
	for (var i = len - 1; i >= 0; i--) {
		// j表示交换的次数
		for (var j = 0;j < i;j++) {
			if(list[j] > list[j+1]) {
				temp = list[j];
				list[j] = list[j+1];
				list[j+1] = temp;
			}
		};
	};
	return list;
}
// console.log(bubbling(mylist));

//快速排序
function quick(list) {
	// begin表示第一个数的序号，end表示最后一个数的序号
	function sort(begin,end) {
		var i = begin,
			j = end,
			// flag表示基准
			flag = list[begin];
		if(begin < end){
			while(i < j) {
				// 从后开始向前扫描，找到比基准小的数，放到list[i]
				for (;i < j;j--) {
					if(list[j] < flag) {
						list[i++] = list[j];
						break;
					}
				}
				// 再从前向后扫描，找到比基准大的数，放到list[j]
				for(;i < j;i++) {
					if(list[i] > flag) {
						list[j--] = list[i];
						break;
					}
				}
			}
			// 最后i，j相同，所指向的位置就是flag的正确位置
			list[i] = flag;
			sort(0,i-1);
			sort(i+1,end);
		}
	}
	sort(0,list.length-1);
	return list;
}

// 三数取中
function chooseMiddle(list,start,middle,end) {
	// 最后为中，小，大；
	if(list == null && list.length == 0) {
		console.log("list error");
		return 0;
	}
	var middleNum = list[start];
	if(list[middle] > list[end]) {
		swap(list,middle,end);
	}
	if(list[start] > list[end]) {
		swap(list,start,end);
	}
	if(list[middle] > list[start]) {
		swap(list,start,middle);
	}
}

function quick2(list,start,end) {
	var mid = Math.floor(((end-start+1)/2)+start);
	chooseMiddle(list,start,mid,end);
	var flag = list[start],
		i = start,
		j = end+1;
	if(start < end){
		while(i < j) {
			// 从前向后找，找到比基准大的数
			while(i < end && list[++i] <= flag);
			// 从后向前找，找到比基准小的数
			while(j > start && list[--j] >= flag);
			// 交换两个数
			if(i < j) {
				swap(list,i,j);
			}else {
				break;
			}
		}
		swap(list,start,j);
		quick2(list,start,j);
		quick2(list,j+1,end);
	}
	
}
function quickSort2(list) {
	quick2(list,0,list.length-1);
	return list;
}

// console.log("快速排序：" + quick(mylist));
// console.log("快速排序2：" + quickSort2([6,4,6,7,1,6,7,6]));
console.log([6,4,0,2,6,8,7,1,6,7,6]);
console.log("快速排序3：" + quickSort3([6,4,0,2,6,8,7,1,6,7,6]));

// 归并排序
function merge(left,right){
	var result = [];
	while(left.length > 0 && right.length > 0) {
		if (left[0] < right[0]) {
			result.push(left.shift());
		}else{
			result.push(right.shift());
		}
		
	}
	result = result.concat(left,right);
	return result;
}
function mergeSort(list){
	// 当数组只有一个元素的时候就返回该数组
	if(list.length == 1) {
		return list;
	}
	// 否则把数组分成左右两部分
	var middle = Math.floor(list.length/2);
	var left = list.slice(0,middle),
		right = list.slice(middle);
	// 对左右两边进行拆分后进行归并排序
	return merge(mergeSort(left),mergeSort(right));
}
// console.log("归并排序：" + mergeSort(mylist));


/*
* 折半查找法
*/
function binarySearch(list,key,low,height) {
	var mid = Math.floor((low+height)/2);
	if (low > height) {
		console.log('查找失败！');
		return -1;
	}
	if(list[mid] == key) {
		// 找到要查找的值
		return mid;
	}else if(list[mid] < key) {
		// 所要查找的值比中间值大
		low = mid + 1;
		return binarySearch(list,key,low,height);
	}else if(list[mid] > key) {
		// 所要查找的值比中间值小
		height = mid - 1;
		return binarySearch(list,key,low,height);
	}
}
function BinSearch(list,key) {
	var result = null;
	result = binarySearch(list,key,0,list.length-1);
	console.log('查找结果：'+result);
}