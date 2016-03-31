/*
* 数列的定义如下：
* 数列的第一项为n，以后各项为前一项的平方根，求数列的前m项的和。
*/ 
function arrSum(n,m) {
	if(typeof(n) != 'number' || typeof(m) != 'number') {
    	console.log('m or n is not a number!');
        return;
    } 
    if(m < 0) {
    	console.log('m is not belog( m > 0 )');
        return;
    }
	var arr = [],
        nowData = n,
        sum = 0;
    for(var i = 0;i < m;i++) {
    	arr[i] = nowData;
        sum += arr[i];
        nowData = Math.sqrt(nowData);
    }
    sum = +sum.toFixed(2);
    console.log(sum);
    return sum;
}
arrSum(2,2);
arrSum(81,4);
arrSum('aa',2);
arrSum(81,-1);