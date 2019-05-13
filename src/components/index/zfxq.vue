<template>
	<div style="background: #F6F6F6;">
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
			<router-link to="/my"style="width: 6rem;">北京租房</router-link>
			<img src="../../assets/jiantou_03.png"style="position: absolute;height: 3rem;left: 10.5rem;"/>
			<router-link to="/my"style="width: 6rem;">房源信息</router-link>
		</div>
		<div class="zfbanner">
			<div class="fenx">分享</div>
			<img src="../../../static/banner.png"/>
			<!--<img src="../../../static/xin.png"/>-->
		</div>
		<div class="zf-sec1">
			<div>天鹅湖西北3.8米高厅两居，业主换房急售</div>
			<div @click="toggle"><img src="../../../static/xin.png"/><p style="color: black;">{{msg}}</p></div>
		</div>
		<div class="zf-sec2">
			<div>租金<br /><span>2300元/月</span></div>
			<div>房型<br /><span>2室1厅</span></div>
			<div>面积<br /><span>204平米</span></div>
		</div>
		<div class="zf-sec3">
			<div style="border-bottom: 0.067rem solid #DFDFDF;"><div>楼层：<span>高楼层/17层</span></div><div>朝向：<span>南北</span></div></div>
			<div style="border-bottom: 0.067rem solid #DFDFDF;"><div>装修：<span>精装</span></div><div>供暖：<span>集体供暖</span></div></div>
			<div><div>年代：<span>2007年</span></div><div>楼型：<span>板楼</span></div></div>
		</div>
		<div class="zf-sec4">
			<div class="title">
				经纪人房评
				<img src="../../../static/zf-jt.png"/>
			</div>
			<div class="sec4-main">
				地理位置：晶都国际处于酒仙桥中心地带，毗邻北京三大商圈，紧邻丽都商圈，隔四环与望京商圈相望，西南紧挨燕莎商圈，地理位置优越。周边配套：颐堤港商业中心，兆维大厦…
			</div>
		</div>
		<div class="zf-sec4">
			<div class="title">
				客户看房记录
				<img src="../../../static/zf-jt.png"/>
			</div>
			<div class="sec4-main">
				近一个月新增<span> 0 </span>位看房客户，共<span> 50 </span>位
			</div>
		</div>
		<div class="zf-sec4">
			<div class="title">
				位置及周边
				<img src="../../../static/zf-jt.png"/>
			</div>
			<div class="sec4-dt">
				<div class="sec4-dtmain">
					地址：[黄村]时代龙和
				</div>
			</div>
		</div>
		<div class="zf-sec4" style="margin-bottom: 6rem;">
			<div class="title"style="color: black !important;">
				小区成交历史（24）
				<img src="../../../static/zf-jt.png"/>
			</div>
			<div class="sec4-main">
				3 室 2 厅，146 平米，<span><b>5000</b>元</span><br />
				签约日期：2015-02-06
			</div>
		</div>
		<div class="zfxqbot">
			<div>
				<img src="../../../static/man.png"/>
				<div class="l1"><span class="name">张三</span><br /><span class="phone">4001581855转0008</span></div>
				<div class="r1"><img src="../../../static/icon1.png"/><br />致电</div>
				<div class="r2"><img src="../../../static/icon2.png"/><br />短信</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:'关注',
				flag:true,
			}
		},
		methods:{
		toggle(){
			if(this.flag){
				this.msg="已关注";
				this.flag=false;
			}else{
				this.msg="关注";
				this.flag=true;
			}
		}
	}
	}
</script>

<style>
	.zfbanner{
		width: 100%;
		height: 12rem;
		position: relative;
	}
	.zfbanner>img{
		width: 100%;
		height: 100%;
	}
	.zfbanner>.fenx{
		position: absolute;
		bottom: 0.8rem;
		right: 0;
		width:4rem;
		height: 3rem;
		line-height: 3rem;
		background: rgba(0,0,0,.6);
		color: white;
		font-size: 1rem;
		border-radius: 48% 0 0 48%;
		box-sizing: border-box;
		padding-left: 1.4rem;
	}
	.zf-sec1{
		display: flex;
		background: #F9F9F9;
	}
	.zf-sec1>div:nth-child(1){
		width: 80%;
		box-sizing: border-box;
		padding: 1rem;
		border-right: 0.067rem solid #DCDCDC;
		font-size: 1.2rem;
	}
	.zf-sec1>div:nth-child(2){
		width: 20%;
		text-align: center;
		font-size: 1rem;
		padding: 1rem 0;
		color: black;
	}
	.zf-sec1>div:nth-child(2)>img{
		width: 2rem;
	}
	.zf-sec2{
		width: 100%;
		background: white;
		display: flex;
		border-top: 0.067rem solid #DFDFDF;
		border-bottom: 0.067rem solid #DFDFDF;
		padding: 1rem 0;
	}
	.zf-sec2>div{
		width: 33.33%;
		text-align: center;
		font-size: 1rem;
	}
	.zf-sec2>div:nth-child(2){
		border-left: 0.067rem solid #DFDFDF;
		border-right: 0.067rem solid #DFDFDF;
	}
	.zf-sec2>div>span{
		color: #FE8E0E;
	}
	.zf-sec3{
		width: 100%;
		background: white;
		border-bottom: 0.067rem solid #DFDFDF;
	}
	.zf-sec3>div{
		width: 95%;
		margin-left: 5%;
		display: flex;
		padding: 1rem 0;
	}
	.zf-sec3>div>div{
		width: 50%;
		font-size: 1.1rem;
	}
	.zf-sec3>div>div>span{
		color: #696969;
	}
	.zf-sec4{
		width: 95%;
		margin: auto;
		background: white;
		margin-top: 1rem;
		border: 0.067rem solid #DFDFDF;
	}
	.zf-sec4>.title{
		box-sizing: border-box;
		font-size: 1.3rem;
		padding: 0 1rem;
		height: 3.5rem;
		line-height: 3.5rem;
		position: relative;
		color: #FDB162;
		border-bottom: 0.067rem solid #DFDFDF;
	}
	.zf-sec4>.title>img{
		position: absolute;
		height: 2rem;
		top: 50%;
		margin-top: -1rem;
		right: 1rem;
	}
	.zf-sec4>.sec4-main{
		box-sizing: border-box;
		padding: 0.8rem 1rem;
		font-size: 1rem;
		color: #696969;
	}
	.zf-sec4>.sec4-main>span{
		color: #DE6740;
	}
	.sec4-dt{
		width: 95%;
		margin: 0.8rem auto;
		height: 14rem;
		border: 0.067rem solid #DFDFDF;
		background: url(../../../static/map.png)no-repeat center;
		background-size: 100% 100%;
	}
	.sec4-dt>.sec4-dtmain{
		width: 100%;
		height: 2.5rem;
		font-size: 1rem;
		background: rgba(255,255,255,.9);
		line-height: 2.5rem;
		color: #696969;
		padding-left: 2.5%;
		border-bottom: 0.067rem solid #DFDFDF;
	}
	.zfxqbot{
		background: white;
		margin-top: 1rem;
		box-shadow: 0 -0.15rem 0.3rem gray;
		padding: 0.7rem 0;
		position: fixed;
		width: 100%;
		bottom: 0;
		left: 0;
	}
	.zfxqbot>div{
		display: flex;
		width: 95%;
		margin: auto;
	}
	.zfxqbot>div>img{
		width: 13%;
		height: 3rem;
		margin-right: 0.5rem;
	}
	.zfxqbot>div>.l1{
		width: 47%;
	}
	.zfxqbot>div>div>.name{
		font-size: 1.1rem;
		color: black;
	}
	.zfxqbot>div>div>.phone{
		display: block;
		font-size: 1rem;
		color: #696969;
		margin-top: 0.2rem;
	}
	.zfxqbot>div>div>img{
		width: 2rem;
	}
	.zfxqbot>div>.r1{
		width: 20%;
		font-size: 0.7rem;
		text-align: center;
		color: #5ECB96;
	}
	.zfxqbot>div>.r2{
		width: 20%;
		font-size: 0.7rem;
		text-align: center;
		color: #5BB0E6;
	}
</style>