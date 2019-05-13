<template>
	<div>
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
		<div class="nn">
			<router-link to="/sy">首页</router-link>
			<img src="../../assets/jiantou_03.png"style="position: absolute;height: 3rem;left: 4rem;"/>
			<router-link to="/my">我的</router-link>
			<img src="../../assets/jiantou_03.png"style="position: absolute;height: 3rem;left: 9rem;"/>
			<router-link to="/my"style="width: 8rem;">我关注的小区</router-link>
		</div>
		<div class="xiaoqv">
			<div v-for="item in list":class="{'xqact':item.flag}">
				<img :src="item.src"/>
				<div>
					<h2>{{item.name}}</h2>
					<h4>{{item.dz}}</h4>
					<h4>{{item.time}}<span class="xqprice">{{item.price}}</span></h4>
					<h4>{{item.jg}}</h4>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:[
				{
					src:'../../../static/img1.png',
					name:'辉煌国际',
					dz:'昌平区-回龙观',
					time:'2007年建成',
					price:'37050元/平',
					jg:'板塔结合',
					flag:true,
				},
				{
					src:'../../../static/img2.png',
					name:'万寿园',
					dz:'昌平区-回龙观',
					time:'2007年建成',
					price:'56447元/平',
					jg:'板塔结合',
					flag:true,
				},
				{
					src:'../../../static/img3.png',
					name:'红莲南里5号',
					dz:'昌平区-回龙观',
					time:'2007年建成',
					price:'89776元/平',
					jg:'板塔结合',
					flag:true,
				},
				{
					src:'../../../static/img4.png',
					name:'万寿西街16号',
					dz:'昌平区-回龙观',
					time:'2007年建成',
					price:'90778元/平',
					flag:false,
				},
			]
			}
			
		}
	}
</script>

<style>
	.xiaoqv{
		width: 100%;
		background: white;
	}
	.xiaoqv>div{
		width: 90%;
		margin: auto;
		padding: 0.8rem 0 0.8rem 0;
		display: flex;
	}
	.xiaoqv>div>img{
		width: 9rem;
		height: 6rem;
		margin-right: 0.5rem;
	}
	.xiaoqv>.xqact{
		border-bottom: 0.067rem solid #FDA02B;
	}
	.xiaoqv>div>div>h2{
		font-size: 1.2rem;
		font-weight: 500;
	}
	.xiaoqv>div>div>h4{
		width: 13rem;
		font-size: 1rem;
		color: #6C6C6C;
		font-weight: 500;
		line-height: 1.5rem;
	}
	.xiaoqv>div>div>h4>.xqprice{
		display: inline-block;
		color: #FF8C00;
		font: ;
		float: right;
	}
</style>