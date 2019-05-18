	
// 通过选项创建 VueI18n 实例
	let i18n = new VueI18n({
	    locale: localStorage.getItem('locale') || 'en', // 设置地区
		// silentTranslationWarn: true,
	    messages: {
		    en: {
				//头部导航
				header: {
				  home: 'HOME',
				  buy: 'BUY',
				  sale: 'SALE',
				  bargain: 'CAR OUTLET',
				  hire: 'LOAN',
				  about: 'ABOUT',
				  center: 'PERSONAL CENTER',
						top: 'top',
						online: 'consult<br>ation',
				},
				// 搜索
				search: {
					place: "What's in your mind?"
				},
				//首页价格
				carPrice: 'CAR Price',
				price: [{id:1, detail:'Under $10000'},{id:2, detail:'$10000-$15000'},{id:3, detail:'$15000-$20000'},{id:4,detail:'$20000-$30000'},{id:5,detail:'$30000-$40000'},{id:6,detail:'$40000 Over'}],
				//首页品牌
				carBrand: 'CAR brand',
				cartype:[],
				more: 'More',
				//cham推荐
				seltype: ['Latest-hot','ECO-Car','Prospective-new-car','luxury-car'],
				recom: 'CHAMPION Recommoned',
				explain: [],
				extip: 'remind',
				extipc: 'No comment, please inform customer service',
				// 媒体声音
				mediaVoice: 'Media voice',
				media: [],
				metip: 'remind',
				metipc: 'No articles, notice customer service on the new',
				tipsArr:['Free transfer','A variety of financial loan services','Within a year the national road rescue service','Multiple payment channels (POS machine, WeChat, alipay, etc.)','There is no 100% commission'],
				wantBuy: 'Search',
				hotSearch: 'Hot Search',
				hotsearchArr: [],
				comment: [],
				adv1: 'CHAMPION is dedicated to delivering a premium car experience',
				storyTitle: 'CHAMPION Story',
				storyDes: 'Buy Car description',
				froms: 'from ',
				scom: "'s comment",
				strongRecom: 'is highly recommended',
				score: 'score',
				miles: 'Miles',
				door: 'Dr',
				cylinder: 'cylinder',
				//登录注册
				login: 'login in',
				log: 'login',
				register: 'register',
				pname: 'Please enter your username',
				ppass: 'Please enter the password',
				loginagree: 'Login is consent',
				registeragree: 'Register is consent',
				useragree: 'User agreement',
				and: 'and',
				privacyPolicy: 'Privacy policy',
				//首页步骤
				indexstep: {
					step0: 'Step one',
					step1: 'Step two',
					step2: 'Step three',
					step3: 'Step four',
					step4: 'Step five',
					step5: 'Step six',
				},
				// 页面footer
				misc: [{"content":'Service agreement','src':"serivceAgreement.html"},
				{"content":'Privacy statement','src':"private.html"},
				{"content":'Contact us','src':"contactUs.html"}],
				address: 'Massachusetts state',
				other: 'other',
				champion: 'CHAMPION WECHAT',
				addressphone: '617-481-7697',
				addressDetail: '134 east Howard st，Quincy，ma，02169，usa',
				// 卖车页
				sale: {
					personPosi: 'Please enter your location',
					vin: 'Please enter 17 bits vin code',
					mileage: "mileage",
					pmileage: 'Please enter the current mileage',
					preprice: 'The expected price',
					ppreprice: 'Please enter your desired price',
					owner: 'The Car owner information',
					phoneNumber: 'Please enter your mobile phone number',
					wxNumber: 'Please enter your WeChat ID',
					serifyCode: 'Please enter your verification code',
					body: 'The body color',
					interior: 'Interior color',
					remark: 'remark',
					premark: 'Please input the configuration of your car so that we can know more about your car.',
					submit: 'submit',
					facecolor: ['white', 'black', 'silver grey', 'gray', 'yellow', 'champagne', 'red pink and purple', 'blue', 'green and coffee', 'the other'],
					insidecolor: ['white', 'black', 'silver grey', 'gray', 'yellow', 'champagne', 'red pink and purple', 'blue', 'green and coffee', 'the other'],
				},
				loan: {
					service: 'Please make sure that your mobile phone number is available, support China, the United States mobile phone number.',
					pphone: 'Please enter your mobile phone number',
					weixin: 'Please enter your WeChat ID',
					verifyCode: 'Please enter your verification code',
					identity: 'Choose your identity',
					work: 'work',
					student: 'student',
					ssn: 'Is there a SSN',
					yes: 'yes',
					no: 'no',
					apply: 'Apply immediately',
					payment: 'Lower down payment',
					paymentc: 'Down payment as low as 30%',
					lending: 'Lending fast',
					lendingc: 'Ninety-eight percent is available as soon as the day',
					threshold: 'The low threshold',
					thresholdc: 'Over 80% pass rate',
					customized: 'customized',
					customizedc: 'Professional customer service throughout the service',
					loanProcess: 'Loan process',
					tapply: 'For 30 seconds',
					tapplyc: 'Fill in 4 basic information online (name, id number, savings card number, mobile phone number), and the result will come out in seconds',
					Telephone: 'Telephone pays a return visit',
					Telephonec: 'Financial specialist one-to-one explanation, customized financial solutions',
					approval: 'Online examination and approval',
					approvalc: 'Materials submitted immediately after approval, no running water, no home visit, the fastest 30 minutes out of the results',
					pickup: 'Pick up the car loan',
					pickupc: 'CHAM to help you complete the transfer of vehicles, mortgages and other procedures, the day loan',
				},
				bargin: {
					existing: 'existing',
					request:  "people submitted a vehicle request",
					find: 'Looking for a car on the way is not lonely, leave your contact information, we contact you.',
					service: 'CHAMPION for you',
					brand: 'Please enter your desired brand and model.',
					brandc: 'Example: BMW428i in 2016',
					price: 'Please enter your expected price',
					pricec: 'Example: 3w to 4.5w',
					mileage: 'Please enter your expected mileage',
					mileagec: 'Example: 10,000-30,000 (miles)',
					tip: 'Please make sure that your mobile phone number is available, support China, the United States mobile phone number.',
					remark: 'remark',
					remarkc: 'Please input the configuration of your car so that we can know more about your car',
					phone: 'Please enter your mobile phone number',
					weixin: 'Please enter your WeChat ID',
					verifyCode: 'Please enter your verification code',
					submit: 'Confirm to submit',
					special: 'CHAMPION of car ownership',
					specialone: 'Wholesale price of high quality vehicles',
					specialtwo: 'No need to see the car directly online purchase',
					specialthree: 'ASE certified engineer with over 300 full-vehicle tests',
					specialfour: 'All 49 states within 7 days',
					process: 'CHAMPION values the process of buying a car',
					processone: 'Customer service will contact you at the appropriate time',
					processtwo: 'CHAM will help you choose your car more accurately',
					processthree: 'Value of car purchase source look ahead',
					processfour: 'CHAM is responsive to your needs',
				},
				buy:{
					screeningCondition: screeningConditionen,
					conditions: 'Filter',
					clearAll: 'Clear all',
					Determine: 'Determine the screening',
					brand: 'Brand',
					series: 'Series',
					price: 'price',
					model: 'Model',
					mileage: 'Mileage',
					age: 'Age',
					color: 'Color',
					gearbox: 'Gearbox',
					defaultSort: 'The default sort',
					priceSort: 'The price sorted',
					ageSort: 'The age sorted',
					mileageSort: 'The mileage sorted',
					tips: 'Tips',
					tipsc: 'There is no selected vehicle at present, please inform the customer service of the new one.',
					searchArr: [],
				},
				detail:{
					collect: '',
					topinfo:{
						name: '',
						price: '',
					},
					mileage: '',
					level: 'A',
					transfer: '',
					point: [],
					// 初始配置
					config: {
						displacement: '0',
						gearbox: '',
						cityfuelConsumption: '0.00',
						speedfuelConsumption: '0.00',
						type: '',
						size: '',
						seat: '0',
					},
					// 配置表格一
					columns: [
						{
							title: 'The basic parameters',
							key: 'name'
						},{
							title: 'Engine parameters',
							key: 'age'
						},{
							title: 'Chassis and braking',
							key: 'address'
						},
					],
					datada: [],
					// 配置表格二
					columnss: [
						{
							title: 'Security configuration',
							key: 'name'
						},{
							title: 'External configuration',
							key: 'age'
						},{
							title: 'The internal configuration',
							key: 'address'
						}
					],
					datads: [],
					// 检测报告
					reportTime: '',
					reportresult: [{},{},{},{}],
					accidentArrone: [],
					accidentArrtwo: [],
					facecheck: [],
					autodeviceone: [],
					autodevicetwo: [],
					autodevicethree: [],
					autodevicefour: [],
					autodevicefive: [],
					autodevicesix: [],
					dirveSysone: [],
					dirveSystwo: [],
					dirveSysthree: [],
					dirveSysfour: [],
					dirveSysfive: [],
					carreport: 'true',
					championprice: 'CHAMPION price',
					minloan: 'The minimum loan',
					proposal: 'View the loan proposal',
					appointment: 'To make an appointment car',
					consultant: 'online consultant',
					date: 'option date',
					time: 'selection time',
					phone: 'cell-phone number',
					weixin: 'Wechat ID',
					verifycode: 'verification code',
					tipsp: 'Mass car source, custom demand!You can choose CHAMPIONAUTO value and purchasing',
					cv: 'click to view',
					td: 'travlled distance',
					mile: 'mileage',
					reviewlevel: 'Review of the level',
					tranferRecord: 'The transfer record',
					degr: 'time',
					Highlight: 'Highlight the configuration',
					displace: 'displacement',
					gear:　'gearbox',
					fuel: 'oil wear',
					ci: 'city',
					hs: 'high speed',
					le: 'Level',
					si: 'size',
					sc: 'Carrying amount',
					c: 'seat',
					vd: 'vehicle disposition',
					vtr: 'Vehicle test report',
					dt: 'detection time',
					dm: 'Detection models',
					normal: 'normal',
					repair: 'Sheet metal repair',
					update: 'There was a change of cover',
					norepair: 'Minor defects, not yet repaired',
					launch: 'launch',
					starting: 'starting',
					speedup : 'speed up',
					constant : 'Driving at a constant speed',
					dab: 'Deceleration and braking',
					tips: 'Tips',
					tipsc: 'No vehicle report, waiting for test',
					wp: 'Whole process',
					sw: 'Suppose you want to see',
					guesswant: [],
				}
			},
		    'zh-cn':{
					header: {
						home: '首页',
						buy: '我要买车',
						sale: '我要卖车',
						bargain: '车行值购',
						hire: '分期购车',
						about: '关于车行',
						center: '个人中心',
						top: '返回<br>顶部',
						online: '在线<br>咨询',
					},
					search: {
						place: "此处搜索车型！！！"
					},
					price: [{id:1,detail:'$1万以下'},{id:2,detail:'$1万-$1.5万'},{id:3,detail:'$1.5万-$2万'},{id:4,detail:'$2万-$3万'},{id:5,detail:'$3万-$4万'},{id:6,detail:'$4万以上'}],
					cartype: [],
					more: '更多',
					recom: '车行推荐',
					seltype: ['最新最热','经济实惠','准新车','豪华车'],
					explain: [],
					extip: '提示',
					extipc: '暂无评论，通知客服上新',
					mediaVoice: '媒体声音',
					media: [],
					metip: '提示',
					metipc: '暂无文章，通知客服上新',
					misc: [{"content":'服务协议','src':"serivceAgreement.html"},
					{"content":'隐私声明','src':"private.html"},
					{"content":'联系我们','src':"contactUs.html"}],
					tipsArr:['免费代办过户','多种金融贷款服务','一年内全美道路救援服务','多种支付渠道（POS机、微信、支付宝等）多种支付渠道（POS机、微信、支付宝等）','100%无佣金'],
					wantBuy: '我要买车',
					hotSearch: '热门搜索',
					hotsearchArr: [],
					comment: [],
					adv1: 'CHAMPION 专为用户带来更加优质的购车体验',
					storyTitle: 'CHAMPION 故事',
					storyDes: '购车描述',
					froms: '来自',
					scom: '的评价',
					strongRecom: '强烈推荐',
					score: '分',
					miles: '英里',
					door: '门',
					cylinder: '缸',
					login: '登录',
					log: '登录',
					register: '注册',
					pname: '请输入用户名',
					ppass: '请输入密码',
					loginagree: '登录即为同意',
					registeragree: '注册即为同意',
					useragree: '用户使用协议',
					and: '及',
					privacyPolicy: '隐私权条款',
					carPrice: '车辆价格',
					carBrand: '车辆品牌',
					indexstep: {
						step0: '步骤一',
						step1: '步骤二',
						step2: '步骤三',
						step3: '步骤四',
						step4: '步骤五',
						step5: '步骤六',
					},
					// 页面footer
					address: '马塞诸萨州',
					other: '其他',
					champion: 'CHAMPION WXchat',
					addressphone: '617-481-7697',
					addressDetail: '134 east Howard st，Quincy，ma，02169，usa',
					sale:{
						personPosi: '请输入您的所在地',
						vin: '请输入17位的vin码',
						mileage: "行驶里程",
						pmileage: '请输入当前英里数',
						preprice: '预期价格',
						ppreprice: '请输入您的预期价格',
						owner: '车主信息',
						phoneNumber: '请输入您的手机号',
						wxNumber: '请输入您的微信号',
						serifyCode: '请输入您的验证码',
						body: '车身颜色',
						interior: '内饰颜色',
						remark: '备注',
						premark: '请输入您爱车的配置,以便我们对您的车辆有更多的了解。',
						submit: '提交',
						facecolor: ['白色','黑色','银灰','灰色','黄色','香槟','红色 粉红','紫色','蓝色','绿色','咖啡','其他'],
						insidecolor: ['白色','黑色','银灰','灰色','黄色','香槟','红色 粉红','紫色','蓝色','绿色','咖啡','其他'],
					},
					loan: {
						service: '请确保您的手机号可用，支持中国，美国手机号',
						pphone: '请输入您的手机号',
						weixin: '请输入您的微信号',
						verifyCode: '请输入您的验证码',
						identity: '选择你的身份',
						work: '工作',
						student: '学生',
						ssn: '是否有SSN',
						yes: '是',
						no: '否',
						apply: '立即申请',
						payment: '低首付',
						paymentc: '首付低至3成',
						lending: '放款快',
						lendingc: '98%最快当天放款',
						threshold: '低门槛',
						thresholdc: '80%以上通过率',
						customized: '定制化',
						customizedc: '专业客服全程服务',
						loanProcess: '贷款流程',
						tapply: '30秒申请',
						tapplyc: '在线填写4项基本信息（姓名、身份证号、储蓄卡号、手机号)，秒出结果',
						Telephone: '电话回访',
						Telephonec: '金融专员一对一讲解，定制金融方案',
						approval: '线上审批',
						approvalc: '资料提交后立即审批，免流水、免家访，最快30分钟出结果',
						pickup: '放款提车',
						pickupc: 'CHAM助您完成车辆过户、抵押等手续后，当天放款',
					},
					bargin: {
						existing: '已有',
						request:  "人提交了车辆需求",
						find: '寻找爱车的路上不孤单，留下您的联系方式，我们联系您!',
						service: 'CHAMPION 为您服务',
						brand: '请输入您心仪的品牌和车型',
						brandc: '例:2016年BMW428i',
						price: '请输入您的预期价格',
						pricec: '例:3w-4.5w',
						mileage: '请输入您的预期里程',
						mileagec: '例:10000-30000(英里)',
						tip: '请确保您的手机号可用，支持中国，美国手机号',
						remark: '备注',
						remarkc: '请输入您爱车的配置,以便我们对您的车辆有更多的了解',
						phone: '请输入您的手机号',
						weixin: '请输入您的微信号',
						verifyCode: '请输入您的验证码',
						submit: '确认提交',
						special: 'CHAMPION值购车特点',
						specialone: '优质车源批发价',
						specialtwo: '无需现场看车直接网上购买',
						specialthree: 'ASE认证工程师300+项全车检测',
						specialfour: '全美49个州7日内送达',
						process: 'CHAMPION值购车流程',
						processone: '客服会在适当的时间与您联系',
						processtwo: 'CHAM会更精确的帮您选择您的爱车',
						processthree: '值购车源抢先看',
						processfour: 'CHAM及时响应您的需求',
					},
					buy:{
						screeningCondition:screeningConditioncn,
						conditions: '条件筛选',
						clearAll: '清除所有',
						Determine: '确定筛选',
						brand: '品牌',
						series: '车系',
						price: '价格',
						model: '车型',
						mileage: '里程',
						age: '车龄',
						color: '颜色',
						gearbox: '变速箱',
						defaultSort: '默认排序',
						priceSort: '价格排序',
						ageSort: '车龄排序',
						mileageSort: '里程排序',
						tips: '提示',
						tipsc: '暂无所选车辆,通知客服上新',
						searchArr: [],
					},
					detail:{
						collect: '',
						topinfo:{
							name: '',
							price: '',
						},
						mileage: '0',
						level: 'A',
						transfer: '0',
						point: [],
						// 初始配置
						config: {
							displacement: '0',
							gearbox: '',
							cityfuelConsumption: '0.00',
							speedfuelConsumption: '0.00',
							type: '',
							size: '',
							seat: '0',
						},
						// 配置表格一
						columns: [
							{
								title: '基本参数',
								key: 'name'
							},{
								title: '发动机参数',
								key: 'age'
							},{
								title: '底盘及制动',
								key: 'address'
							},
						],
						datada: [],
						// 配置表格二
						columnss: [
							{
								title: '安全配置',
								key: 'name'
							},{
								title: '外部配置',
								key: 'age'
							},{
								title: '内部配置',
								key: 'address'
							}
						],
						datads: [],
						// 检测报告
						reportTime: '',
						reportresult: [{},{},{},{}],
						accidentArrone: [],
						accidentArrtwo: [],
						facecheck: [],
						autodeviceone: [],
						autodevicetwo: [],
						autodevicethree: [],
						autodevicefour: [],
						autodevicefive: [],
						autodevicesix: [],
						dirveSysone: [],
						dirveSystwo: [],
						dirveSysthree: [],
						dirveSysfour: [],
						dirveSysfive: [],
						carreport: 'true',
						championprice: 'CHAMPION 价格',
						minloan: '最低贷款',
						proposal: '查看贷款方案',
						appointment: '预约看车',
						consultant: '在线咨询',
						date: '选择日期',
						time: '选择时间',
						phone: '手机号',
						weixin: '微信号',
						verifycode: '验证码',
						tipsp: '海量车源、定制需求！您可以选择CHAMPIONAUTO值购',
						cv: '点击查看',
						td: '行驶里程',
						mile: '英里',
						reviewlevel: '复查等级',
						tranferRecord: '过户记录',
						degr: '次',
						Highlight: '亮点配置',
						displace: '排量',
						gear:　'变速箱',
						fuel: '油耗',
						ci: '城市',
						hs: '高速',
						le: '级别',
						si: '尺寸',
						sc: '承载数量',
						c: '座',
						vd: '车辆配置',
						vtr: '车辆检测报告',
						dt: '检测时间',
						dm: '检测车型',
						normal: '正常',
						repair: '曾有钣金修复',
						update: '曾有覆盖件更换',
						norepair: '轻微瑕疵，尚未修复',
						launch: '启动',
						starting: '起步',
						speedup : '加速',
						constant : '匀速驾驶',
						dab: '减速及制动',
						tips: '提示',
						tipsc: '暂无车辆报告,等待检测',
						wp: '购车流程',
						sw: '猜你想看',
						guesswant: [],
					}
				}
		}// 设置地区信息
	})