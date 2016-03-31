/*
* “水仙花数”是指一个三位数，它的各位数字的立方和等于其本身
* 比如：153=1^3+5^3+3^3
* 现在要求输出所有在m和n范围内的水仙花数。
*/ 
function flower(m,n) {
    // m或n为空
	if( !m || !n) {
        console.log('m or n is null');
        return;
    }
    // m或n不为数字
    if(typeof(m) != 'number' || typeof(n) != 'number') {
    	console.log('m and m must be number');
        return;
    }
    // m>n
    if( m > n ) {
    	console.log('m <n!');
        return;
    }
    // m>=100且n<=999
    if(m >= 100 && n <= 999) {
         var arr = [],
            nowData,
            sum;
        for(var i = m; i <= n; i ++) {
            i += '';
            nowData = i.slice('');
            sum = nowData[0]*nowData[0]*nowData[0]+
                  nowData[1]*nowData[1]*nowData[1]+
                  nowData[2]*nowData[2]*nowData[2];
            if( sum == i ) {
                arr.push(+i);
            }
        }
        if( arr == []) {
            console.log('no');
        }else {
            arr.forEach(function(item,index){
                console.log(item);
            });
        }
        return arr;
    }else {
        console.log('m < 100 or n > 999');
        return;
    }
   
}
flower(300,380);
flower(5,380);
flower(400,380);
flower('aa',380);
flower(380);
flower();