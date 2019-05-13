<template>
	<div>
		<div class="aaa">
			<div class="a">
				<router-link to=""><img src="../../assets/index/logo.jpg" style="width: 7rem;height: 3rem;margin-top: 0.5rem;margin-left: 0.75rem;"/></router-link>
			</div>
			<div class="b">
				<router-link to="/my"><img src="../../assets/index/my.jpg" style="width: 2.8rem;height: 3rem;"/></router-link>
			</div>
			<div class="c" @click="xztoggle">
				<router-link to=""><img src="../../assets/index/xiazai.jpg" style="width: 2.8rem;height: 3rem;"/></router-link>
			</div>
  		</div>
  		<div class="banner">
  			<div class="inpu_a">
				<router-link to=""style="width: 10%;" class="search"><img src="../../assets/index/seach.jpg"/></router-link>
				<router-link to=""style="width: 90%;"><input type="text" id="" value="输入小区或商圈名开始找房咯！" style="width: 100%; height: 3rem;outline: none;border: 0px;background: transparent;"onfocus="if(this.value==this.defaultValue){this.value=''}" onblur="if(this.value==''){this.value=this.defaultValue}"/></router-link>
			</div>
  		</div>
  		<div class="ershou">
			<div v-for="item in list">
				<router-link :to="item.dz"tag="a"><img :src="item.src"/></router-link>
				<p>{{item.info}}</p>
			</div>
		</div>
		<div class="bg2">
			<img src="../../assets/sy_03.png"/>
		</div>
		<div class="rmfy">
			<h2>热门房源</h2>
			<p>Hot house</p>
		</div>
		<div class="rm-main">
			<div v-for="item in list1":class="{'active':item.flag}">
				<img :src="item.src" />
				<div>
					<h1 style="font-size: 1.3rem;">{{item.info1}}</h1>
					<h3 style="font-size: 1rem;"class="hh1">{{item.info2}}<span class="price"style="float: right;">{{item.price}}</span></h3>
					<h3 style="font-size: 0.8rem;" class="hh2">{{item.name}}<span style="float: right;">{{item.count}}</span></h3>
					<h4 style="color: #000000;"><span>{{item.bq1}}</span><span>{{item.bq2}}</span><span>{{item.bq3}}</span></h4>
				</div>
			</div>
		</div>
		<div style="width: 100%;height:1rem;border-top: 0.1rem solid #EEEEEE;border-bottom: 0.1rem solid #EEEEEE;background: #F5F5F5;"></div>
		<div class="fot">
			<div v-for="(item,index) in list2">
				<span :class="{'acbot':item.flag}"@click="toggle(item,index)">{{item.name}}</span>
				<ul v-show="item.flag">
					<li v-for="info in item.child">{{info}}</li>
				</ul>
			</div>
		</div>
		<footer>
			<h2 class="f1">北京找房无忧网 <span style="font-weight: 500;">></span> 首页</h2>
			<div class="f2">
				<div class="f21">
					<a href=""><img src="../../assets/xqy1_07.png"/></a>
					<div>
						<p>iphone</p>
						<p>客户端</p>
					</div>
				</div>
				<div class="f21">
					<a href=""><img src="../../assets/xqy_10.png"/></a>
					<div>
						<p>Android</p>
						<p>客户端</p>
					</div>
				</div>
			</div>
			<p>北京找房无忧房地产经纪有限公司</p><br />
			<p style="font-size: 0.8rem;">网络经营许可证 京ICP备20160812号-12</p>
		</footer>
		<div class="xiazai"v-show="xzshow">
			<div class="xzleft">
				<div class="close"@click="close">×</div>
				<img src="../../../static/download.png"/>
				<div>
					<h1>找房无忧</h1>
					<h3>市场行情，一手掌握</h3>
				</div>
			</div>
			<div class="xzright">
				免费下载
			</div>
		</div>
	</div>
</template>

<script>
	// 导入组件
//import my from './my.vue'

export default{
		data(){
			return{
				xzshow:false,
				list:[
					{
						dz:'/ershou',
						src:"../../../static/index/index_03.png",
						info:"二手房"
					},
					{
						dz:'/ershou',
						src:"../../static/index/index_05.png",
						info:"新房"
					},
					{
						dz:'/zufang',
						src:"../../static/index/index_07.png",
						info:"租房"
					},
					{
						dz:'/ershou',
						src:"../../static/index/index_09.png",
						info:"卖房"
					},
				],
				list1:[
					{
						flag:true,
						src:"../../../static/index/img1.jpg",
						info1:"文化部最T中间层 一层带..",
						info2:"2室一厅 96m² 南北",
						price:"1105万",
						name:"红庙北里",
						count:"14268元/平",
						bq1:"学区房",
						bq2:"独家",
					},
					{
						flag:true,
						src:"../../../static/index/img2.png",
						info1:"光大水墨 精装复式 稀缺..",
						info2:"2室一厅 96m² 南北",
						price:"280万",
						name:"光大水墨",
						count:"14268元/平",
						bq1:"学区房",
						bq2:"独家",
						bq3:"满五唯一"
					},
					{
						flag:false,
						src:"../../../static/index/img3.png",
						info1:"南北通透两居 精装修 无..",
						info2:"2室一厅 96m² 南北",
						price:"1105万",
						name:"北京新天地",
						count:"14268元/平",
						bq1:"地铁房",
						bq2:"独家"
					},
				],
				list2:[
					{
						flag:true,
						id:0,
						name:"热门关注",
						child:['北京二手房','北京找房无忧','北京二手房价','青年家园','海淀日租房','免税房源','朝阳新房','满五年唯一免税']
					},
					{
						flag:false,
						id:1,
						name:"友情链接",
						child:['上海二手房','上海找房无忧','上海二手房价','青年家园','海淀日租房','免税房源','朝阳新房','满五年唯一免税']
					},
				]
			}
		},
		methods:{
			toggle(item,index){
				this.list2.forEach(i=>{
					if(i.flag!==this.list2[index].flag){
						i.flag=false
					}
				})
				if(item.flag==true){
					item.flag=true
				}else{
					item.flag=!item.flag
				}
			},
			xztoggle(){
				this.xzshow=!this.xzshow
			},
			close(){
				this.xzshow=false
			}
		}
	}
 	
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	html,body{
	font-size: 10px;
}
li{
	list-style: none;
}
a{
	text-decoration: none;
}
	.aaa{
		width: 100%;
		height: 4rem;
		background: #FF8A00;
		display: flex;
	}
	.b{
		margin-top: 0.5rem;
		margin-left: 10rem;
	}
	.c{
		margin-top: 0.5rem;
		margin-left: 1rem;
	}
	.banner{
		width: 100%;
		height: 22rem;
		background: url(../../../static/index/banner.png)center;
		background-size: 100% 100%;
		position: relative;
	}
	.inpu_a{
		position: absolute;
		width: 90%;
		height: 3rem;
		display: flex;
		box-shadow: inset 0 0 0.5rem silver;
		left: 5%;
		bottom: 1rem;
		border-radius: 5px;
		/*border: 2px solid red;*/
		background: white;
	}
	.inpu_a>.search img{
		width: 80%;
		height: 60%;
		margin-top: 30%;
		margin-left: 20%;
	}
	.inpu_a input{
		color: #979797;
		font-size: 1rem;
	}
	.ershou{
		width: 100%;
		background: #FF8A00;
		display: flex;
		justify-content: space-around;
		padding: 1rem 0;
		height: 5.6rem;
		font-size: 1rem;
	}
	.ershou>div{
		/*height: 1.5rem;*/
		text-align: center;
		color: white;
	}
	.ershou>div>a>img{
		width: 4rem;
		height: 4rem;
	}
	.bg2{
		width: 100%;
		border-top: 1rem solid #F5F5F5;
		border-bottom: 1rem solid #F5F5F5;
	}
	.bg2 img{
		width: 100%;
	}
	.rmfy{
		width: 100%;
		background: #FF8A00;
		padding: 1rem 0;
	}
	.rmfy>h2{
		margin-left: 5%;
		color: white;
		font-size: 1.5rem;
	}
	.rmfy>p{
		margin-left: 5%;
		color: white;
		font-size: 1rem;
	}
	.active{
		border-bottom: 0.1rem solid #FDA230;
	}
	.rm-main{
		background: white;
	}
	.rm-main>div{
		width: 90%;
		margin-left: 5%;
		padding: 1rem 5% 1rem 0;
		display: flex;
		color: black;
	}
	.rm-main>div>img{
		width: 7rem;
		height: 7rem;
		margin-right: 0.5rem;
	}
	.rm-main>div>div>h3{
		line-height: 2rem;
	}
	.rm-main>div>div>.hh1>span{
		color: #FE9925;
	}
	.rm-main>div>div>.hh2{
		color: #BFBFBF;
	}
	.rm-main>div>div>h4>span{
		background: #F5F6FA;
		color: #9BABBA;
		font-size: 0.8rem;
	}
	.rm-main>div>div>h4>span:nth-child(n+2){
		margin-left: 0.5rem;
	}
	.fot{
		width: 100%;
		display: flex;
		background: white;
	}
	.fot>div{
		width: 50%;
		text-align: center;
		font-size: 1.2rem;
	}
	.fot>div>span{
		display: block;
		width: 100%;
		height: 3.5rem;
		line-height: 3.5rem;
		box-sizing: border-box;
		border-bottom: 0.1rem solid #FEC177;
	}
	.fot>div>ul{
		width: 200%;
	}
	.fot>div:nth-child(2)>ul{
		position: relative;
		right: 100%;
	}
	.fot>div>ul>li{
		width: 50%;
		float: left;
		text-align: left;
		padding: 0.8rem 0 0.8rem 5%;
		box-sizing: border-box;
		font-size: 1rem;
		color: #6C6C6C;
	}
	.fot>div>.acbot{
		color: #FC8B00;
		box-sizing: border-box;
		border-bottom: 0.2rem solid #FC8B00;
	}
	footer{
		width: 100%;
		background: #2F3130;
	color: #6B6D6C;
	padding-bottom: 2rem;
	}
	.f1{
	width: 90%;
	margin-left: 5%;
	padding: 1rem 0;
	font-size: 1.2rem;
	border-bottom: 1.2px solid #3C3E3D;
}
.f2{
	padding: 1rem;
	display: flex;
}
.f21{
	display: flex;
	font-size: 1rem;
	margin-left: 3rem;
}
.f21>a>img{
	width: 2.5rem;
	height: 2.5rem;
}
.f21>div{
	margin-left: 0.7rem;
	margin-top: -0.5rem;
}
.f21>div>p{
	color: #6B6D6C;
}
footer>p{
	text-align: center;
	font-size: 1.1rem;
	color: #6B6D6C;
}
.xiazai{
	position: fixed;
	width: 100%;
	height: 4rem;
	bottom: 0;
	left: 0;
	color: white;
	display: flex;
}
.xiazai>.xzleft{
	width: 70%;
	height: 4rem;
	display: flex;
	background: rgba(24,24,24,.5);
	/*line-height: 4rem;*/
}
.xiazai>.xzleft>.close{
	position: absolute;
	top: 0;
	left: 0;
	width: 1.5rem;
	height: 1.5rem;
	background: rgba(24,24,24,.6);
	color: #737270;
	font-size: 1rem;
	text-align: center;
	line-height: 1.5rem;
	border-radius: 0 50% 50% 50%;
	position: relative;
	left: -0.2rem;
}
.xiazai>.xzleft>img{
	width: 2.5rem;
	height: 2.5rem;
	margin-left: 0.5rem;
	/*position: relative;
	top: 1rem;*/
	margin-top: 0.75rem;
	margin-right: 0.5rem;
}
.xiazai>.xzleft>div>h1{
	margin-top: 0.75rem;
	font-weight: 500;
	font-size: 1rem;
}
.xiazai>.xzleft>div>h3{
	font-weight: 500;
	font-size: 0.8rem;
}
.xiazai>.xzright{
	width: 30%;
	height: 4rem;
	background: #FF8A00;
	font-size: 1.2rem;
	text-align: center;
	line-height: 4rem;
}
</style>