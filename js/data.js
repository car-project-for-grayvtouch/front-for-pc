var data = {
	domain: 'http://admin.championcargroup.com/api/pc/',
	common: function(url,fun,form){
		var thatdata = this;
		$.ajax({
			url: thatdata.domain + url,
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