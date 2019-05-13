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
		</div>
		<div class="ydl-main">
			<div class="tx">
				<img src="../../assets/urse2.png"/>
			</div>
			<div class="p">欢迎你，18666668888</div>
		</div>
		<div class="ydl-sec">
			<router-link to="":class="{'acttt':true}">我关注的房源<img src="../../assets/right.png"/></router-link>
			<router-link to="/xiaoqv":class="{'acttt':true}">我关注的小区<img src="../../assets/right.png"/></router-link>
			<router-link to="":class="{'acttt':false}">我的看房记录<img src="../../assets/right.png"/></router-link>
		</div>
		<div class="tuizhu">
			<router-link to="/my"class="tcdl">退出登录</router-link>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.ydl-main{
		width: 100%;
		height: 12rem;
		background: url(../../assets/bg2.png)no-repeat center;
		background-size: 100% 100%;
		position: relative;
	}
	.ydl-main>.tx{
		width: 4.5rem;
		height: 4.5rem;
		position: absolute;
		left: 50%;
		top: 10%;
		margin-left: -2.25rem;
	}
	.ydl-main>.tx img{
		width: 100%;
		height: 100%;
	}
	.ydl-main>.p{
		position: absolute;
		bottom: 20%;
		left: 0;
		width: 100%;
		text-align: center;
		font-size: 1.3rem;
		color: white;
	}
	.ydl-sec{
		width: 100%;
		background: white;
		border-bottom: 0.067rem solid #D6D6D5;
	}
	.ydl-sec>a{
		display: block;
		width: 95%;
		margin-left: 5%;
		color: black;
		height: 4rem;
		line-height: 4rem;
		font-size: 1.2rem;
		position: relative;
	}
	.ydl-sec>.acttt{
		border-bottom: 0.067rem solid #E4E4E4;
	}
	.ydl-sec>a img{
		position: absolute;
		height: 1.5rem;
		top: 1.25rem;
		right: 5%;
	}
	.tuichu{
		width: 100%;
		background: #F0EFED;
	}
	.tcdl{
		display: block;
		width: 90%;
		height: 3.5rem;
		margin: 1.25rem auto;
		border: 0.067rem solid #CACACA;
		color: #FE8C01;
		font-size: 1.2rem;
		text-align: center;
		line-height: 3.5rem;
		background: white;
	}
</style>