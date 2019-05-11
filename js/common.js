$(function(){
	new Swiper('.text-container', {
		direction:'vertical',
		loop:true,
		autoplay: {
			delay: 2500,
			disableOnInteraction:false
		}
	});
})
var orifun = {
	getInfo:function (messageen,messagecn){
		var message;
		if(localStorage.locale == 'en'){
			message = messageen;
		}else{
			message = messagecn;
		}
		return message;
	},
	initStatu: function(obj){
		if(locale){
			i18n.locale = locale;
			locale == 'zh-cn'?obj.enshow = 'english':obj.enshow = '中文';
		}else{
			(locale = i18n.locale);
		}
		var login;
		 if(localStorage.login){
			login = JSON.parse(localStorage.login);
		 }
		if(login){
			obj.switchlogin = false;
		}else{
			obj.switchlogin = true;
		}
	},
	login: function(obj){
		if(obj.logindata.username == ''){
			// alert("请填写用户名!");
			obj.$Message.warning('请填写用户名!');
			return;
		}
		else if(obj.logindata.password == ''){
			// alert("请填写密码!");
			obj.$Message.warning('请填写密码!');
			return;
		}
		data.common('Login/login',function(d){
			// that.slideArr = d;
			if(d != 400){
				// console.log(d)
				localStorage.token = d;
				obj.switchlogin = !obj.switchlogin;
				obj.loginshow = !obj.loginshow;
				obj.$Notice.success({
					title: '登录成功! ',
				});
				localStorage.login = true;
			}else{
				obj.$Message.warning('登录失败,请检查用户名或密码是否正确!');
			}
		},obj.logindata)
	},
	register:function(obj){
		if(obj.registerdata.username == ''){
			// alert("请填写用户名!");
			obj.$Message.warning('请填写用户名!');
			return;
		}
		else if(obj.registerdata.password == ''){
			// alert("请填写密码!");
			obj.$Message.warning('请填写密码!');
			return;
		}
		data.common('Login/register',function(d){
				if(d == 400 || d.code == 400){
					obj && obj.$Message.warning('此用户名已被使用，请更换!');
				}else{
					obj.$Notice.success({
						title: '注册成功!去登陆>>',
					});
				}
		},obj.registerdata)
	},
	consult:function(obj){
		obj.botshow = !obj.botshow;
		setTimeout(function(){
			obj.$Notice.info({
				title: orifun.getInfo('Fully functional!','功能完善中!'),
			});
		},700)
	},
	change :function(obj) {
		obj.enshow = obj.enshow == 'english' ? "中文" : "english";
		setTimeout(function(){
			if(i18n.locale == 'en'){
				i18n.locale = 'zh-cn';
			}else if(i18n.locale == 'zh-cn'){
				i18n.locale = 'en';
			}
			localStorage.locale = i18n.locale;
		},1100)
	},
};