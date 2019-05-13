<template>
	<div>
		<header>
			<div>
				<div class="row nav" >
					<img src="../../../static/index/back.png"style="width:2.5rem;height: 2.5rem;position: absolute;top: 0.5rem;left: 1rem;"@click="fanhui"/>
					<router-link  to="">
						<img src="../../assets/down.png"/>
						<p>APP</p>
					</router-link>
					<router-link to="" >
						<img src="../../assets/urse.png"/>
						<p>我的</p>
					</router-link>
				</div>
				<router-link to="/sy" class="zf"><img src="../../assets/logo.png"/></router-link>
				<router-link to="/login" class="dl">登录</router-link>
			</div>
		</header>
		<section>
			<!--<ul>
				<li class="wd"><span><img src="../../assets/icon1.png"/></span>我关注的房源 <d><img src="../../assets/right.png"/></d></li>
				<li  class="xiaoqv"><span><img src="../../assets/icon2.png"/></span>我关注的小区 <d><img src="../../assets/right.png"/></d></li>
				<li><span><img src="../../assets/icon3.png"/></span>我关注的新房 <d><img src="../../assets/right.png"/></d></li>
				<li><span><img src="../../assets/icon4.png"/></span>我的看房记录 <d><img src="../../assets/right.png"/></d></li>
			</ul>-->
			<router-link to="">
				<div class="img"><img src="../../assets/icon1.png"/></div>
				<div class="main">我关注的房源<img src="../../assets/right.png"/></div>
			</router-link>
			<router-link to="">
				<div class="img"><img src="../../assets/icon2.png"/></div>
				<div class="main">我关注的房源<img src="../../assets/right.png"/></div>
			</router-link>
			<router-link to="">
				<div class="img"><img src="../../assets/icon3.png"/></div>
				<div class="main">我关注的房源<img src="../../assets/right.png"/></div>
			</router-link>
			<router-link to="">
				<div class="img"><img src="../../assets/icon4.png"/></div>
				<div class="main"style="border: none;">我关注的房源<img src="../../assets/right.png"/></div>
			</router-link>
		</section>
	</div>
</template>

<script>
	export default{
		methods:{
			fanhui(){
				window.history.back(-1)
			}
		}
	}
</script>

<style>
	*{
	margin: 0;
	padding: 0;
}

html body{
	font-size: 10px;
	/*background: #F5F5F5;*/
}

ul{
	list-style: none;
}
a{
	text-decoration: none;
	color: white;
}
header{
	background: url(../../assets/bg1.png);
	background-size: 100% 100%;
	width: 100%;
	height: 15rem;
	position: relative;
}
header a{
	width: 2.5rem;
}
header img{
	width: 1.2rem;
	height: 1.2rem;
}
.zf{
	position: absolute;
	width: 4.5rem;
	height: 4.5rem;
	left: 50%;
	bottom: 5rem;
	margin-left: -2.25rem;
}
.zf>img{
	width: 100%;
	height: 100%;
}
.dl{
	position: absolute;
	width: 6.5rem;
	height: 2.5rem;
	left: 50%;
	bottom: 1.2rem;
	margin-left: -3.25rem;
	text-align: center;
	border: 0.1rem solid white;
	font-size: 1.2rem;
	border-radius: 0.3rem;
	line-height: 2.5rem;
}
.row{
	width: 100%;
	padding: 0.5rem 0;
}
.row>a{
	float: right;
	margin-right: 1rem;
	text-align: center;
	text-decoration: none;
}
.nav {
	font-size: 1rem;
}
.wd{
	margin-top: 1rem;
	border-top: 0.1rem solid #E4E4E4;
}
section{
	margin-top: 1rem;
	background: white;
	border-top: 0.1rem solid #EEEEEE;
	border-bottom: 0.1rem solid #EEEEEE;
}
section>a{
	width: 100%;
	color: black;
	display: flex;
}
section>a>.img{
	width: 20%;
	padding: 1rem 0;
}
section>a>.img>img{
	width: 2.2rem;
	margin-left: 1.5rem;
}
section>a>.main{
	width: 80%;
	border-bottom: 0.1rem solid #E8E8E8;
	padding: 1rem 0;
	font-size: 1.3rem;
	font-weight: 500;
}
section>a>.main>img{
	float: right;
	margin-right: 1rem;
	width: 0.7rem;
	height: 1rem;
	margin-top: 0.4rem;
}
</style>