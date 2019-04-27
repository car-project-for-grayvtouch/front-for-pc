var data = {
	domain: 'http://admin.championcargroup.com/api/pc/',
	common: function(url,fun,form){
		var that = this;
		$.ajax({
			url: that.domain + url,
			method: 'post' ,
			data: form,
			success(data) {
				if(data.code == 200){
					fun(data.data);
				}
			}
		});
	}
}