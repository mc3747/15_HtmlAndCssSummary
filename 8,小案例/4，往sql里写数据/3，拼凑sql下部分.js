var string = 'WHERE id IN (';
	var first = 200;
	var last = 218;
	for(var i = first; i <= last; i++) {
		if (i<last) {
			string = string + i + ','
		}else {
			string = string + i + ')'
		}
		
	};
	console.log(string);
	
//⚠️：此处结果要和上半部分一起组装成sql语句