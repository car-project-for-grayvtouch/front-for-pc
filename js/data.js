var data = {
	domain: 'http://admin.championcargroup.com/api/pc/',
	common: function(url,fun,form){
		var thatdata = this;
		var locale = localStorage.locale;
		if(!locale){
			locale = i18n.locale;
		}
		if(locale == 'zh-cn'){
			locale = 'cn';
		}
		if(form){
			form.language = locale;
		}
		console.log(locale)
		if(!localStorage.token){
			$.ajax({
				url: thatdata.domain + url,
				method: 'post' ,
				data: form,
				success(data) {
					if(data.code == 200){
						fun(data.data);
					}else if(data.code == 400){
						fun(data);
					}
					else{
						console.log(data);
					}
				},
				error(data){
					console.log('请求出错了!' + data);
				}
			});
		}else{
			$.ajax({
				url: thatdata.domain + url,
				method: 'post' ,
				headers: {
					'Authorization':localStorage.token
				},
				data: form,
				success(data) {
					if(data.code == 200){
						// console.log(data)
						fun(data.data);
					}else if(data.code == 400){
						fun(data);
						console.log(data)
					}
					else{
						console.log(data);
					}
				},
				error(data){
					console.log('请求出错了!' + data);
				}
			});
		}
	}
}