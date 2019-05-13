<template>
	<div style="background: #F5F5F5;">
		<nav class="lg-nav">
			<router-link to="/sy"class="logo"></router-link>
			<span>北京 ⅴ</span>
			<router-link  to="" class="xz">
				<img src="../../assets/down.png"style="width: 1.2rem;height: 1.2rem;"/>
				<p style="color: white;">APP</p>
			</router-link>
			<router-link to="/my" class="my">
				<img src="../../assets/urse.png"style="width: 1.2rem;height: 1.2rem;"/>
				<p style="color: white;">我的</p>
			</router-link>
		</nav>
		<div class="search">
			<input type="text"value="请输入小区或商圈名称" onfocus="if(this.value==this.defaultValue){this.value=''}" onblur="if(this.value==''){this.value=this.defaultValue}"/>
			<span></span>
		</div>
		<div class="es-nav">
			<div v-for="(item,i) in list":class="{'act1':item.flag,'act2':item.border}"@click="toggle(item,i)">
				{{item.name}} <span :class="{'act3':item.flag1,'act4':item.flag2}"></span>
				<div class="chi">
					<main1 v-if="i==0"v-show="item.flag"></main1>
					<main2 v-if="i==1"v-show="item.flag"></main2>
					<main3 v-if="i==2"v-show="item.flag"></main3>
					<main4 v-if="i==3"v-show="item.flag"></main4>
				</div>
			</div>
		</div>
	<div class="rm-main">
			<router-link to="/erxq" v-for="item in list1":class="{'active':item.flag}">
				<img :src="item.src" />
				<div>
					<h1 style="font-size: 1.3rem;">{{item.info1}}</h1>
					<h3 style="font-size: 1rem;"class="hh1">{{item.info2}}</h3>
					<h3 style="font-size: 1rem;width: 15rem;" class="hh2">{{item.name}}<span class="price"style="float: right;color: #FC8801;font-size: 1.2rem;">{{item.price}}</span></h3>
					<h4 style="color: #B5B5B5;font-size: 1rem">{{item.bq1}}</h4>
				</div>
			</router-link>
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
	</div>
</template>

<script>
import main1 from './main1.vue'
import main2 from './main2.vue'
import main3 from './main3.vue'
import main4 from './main4.vue'
export default{
	data(){
		return{
			list:[
				{
					name:'区域',
					flag:false,
					flag1:true,
					flag2:false,
					border:true,
					show:true,
				},
				{
					name:'价格',
					flag:false,
					flag1:false,
					flag2:false,
					border:true,
				},
				{
					name:'房型',
					flag:false,
					flag1:false,
					flag2:false,
					border:true,
				},
				{
					name:'更多',
					flag:false,
					flag1:false,
					flag2:false,
					border:false,
				},
			],
			list1:[
					{
						flag:true,
						src:"../../../static/index/img1.jpg",
						info1:"西便门大街 2室1厅 89平",
						info2:"南北 高层/6层",
						price:"1105万",
						name:"签约价格：13244元/平",
						bq1:"签约日期：2015年11月10日"
					},
					{
						flag:true,
						src:"../../../static/index/img2.png",
						info1:"金桥国际 1室1厅 63平",
						info2:"南北 高层/6层",
						price:"905万",
						name:"签约价格：13244元/平",
						bq1:"签约日期：2015年11月10日",
					},
					{
						flag:false,
						src:"../../../static/index/img3.png",
						info1:"花涧溪二期 2室2厅 90平",
						info2:"南北 高层/6层",
						price:"1322万",
						name:"签约价格：13244元/平",
						bq1:"签约日期：2015年11月10日",
					},
				],
		}
},
methods:{
	toggle(item,i){
				this.list.forEach(f=>{
					if(f.flag!==this.list[i].flag){
						f.flag=false
					}
				})
				item.flag=!item.flag
			}
},
components:{
	main1,
	main2,
	main3,
	main4,
}
}
</script>

<style>
	.lg-nav{
		width: 100%;
		height: 4rem;
		background: #FF8A00;
	}
	.lg-nav>.logo{
		width: 5rem;
		height: 2rem;
		background: url(../../assets/lblogo_03.png)no-repeat center;
		background-size: 100% 100%;
		position: absolute;
		left: 1rem;
		top: 1rem;
	}
	.lg-nav>span{
		position: absolute;
		left: 7.5rem;
		line-height: 4rem;
		color: white;
		font-size: 1.1rem;
	}
	.lg-nav>.xz{
		position: absolute;
		right: 1rem;
		top: 0.8rem;
		text-align: center;
		font-size: 0.9rem;
	}
	.lg-nav>.my{
		position: absolute;
		right: 3.5rem;
		width: 2rem;
		top: 0.8rem;
		text-align: center;
		font-size: 0.9rem;
	}
	.search{
		width: 90%;
		margin: 1rem auto;
		background: white;
		border: 0.067rem solid #D5D5D5;
		padding: 0.5rem 0;
		display: flex;
		border-radius: 0.25rem;
	}
	.search>input{
		display: inline-block;
		border: none;
		box-sizing: border-box;
		border-right: 0.067rem solid #D5D5D5;
		outline: none;
		width: 80%;
		height: 2.5rem;
		color: #ABABAB;
		padding-left: 0.5rem;
		font-size: 1.2rem;
	}
	.search>span{
		display: inline-block;
		width: 20%;
		height: 2.5rem;
		background: url(../../../static/search_03.png)no-repeat center;
		background-size: 45% 75%;
	}
	.es-nav{
		width: 100%;
		border-bottom: 0.067rem solid #DADADA;
		border-top: 0.067rem solid #DADADA;
		background: white;
		display: flex;
		padding: 0.8rem 0;
		position: relative;
	}
	.es-nav>div{
		width: 25%;
		text-align: center;
		font-size: 1.1rem;
	}
	.es-nav>div>span{
		display: inline-block;
		border: 0.4rem solid;
		position: relative;
		top: 0.3rem;
		border-color: #CCCCCC transparent transparent transparent;
	}
	.es-nav>.act1{
		color: #FA9C25;
	}
	.es-nav>.act2{
		border-right: 0.067rem solid #DADADA;
	}
	.es-nav>div>.act3{
		border-color: #FA9C25 transparent transparent transparent;
	}
	.es-nav>div>.act4{
		border-color: transparent transparent #FA9C25 transparent;
		top: -0.05rem;
	}
	.es-nav>div>.chi{
		position: absolute;
		width: 100%;
		top: 3rem;
		left: 0;
	}
	.rm-main{
		background: white;
	}
	.rm-main>a{
		display: block;
		width: 90%;
		margin-left: 5%;
		padding: 1rem 5% 1rem 0;
		display: flex;
		color: black;
		text-decoration: none;
	}
	.rm-main>a>img{
		width: 7rem;
		height: 7rem;
		margin-right: 0.5rem;
	}
	.rm-main>a>div>h3{
		line-height: 2rem;
	}
	.rm-main>a>div>.hh1>span{
		color: #FE9925;
	}
	.rm-main>a>div>.hh2{
		color: #BFBFBF;
	}
	.rm-main>a>div>h4>span{
		background: #F5F6FA;
		color: #9BABBA;
		font-size: 0.8rem;
	}
	.rm-main>a>div>h4>span:nth-child(n+2){
		margin-left: 0.5rem;
	}
</style>