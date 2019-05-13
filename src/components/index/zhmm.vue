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
			<router-link to="/my"style="width: 6.5rem;">找回密码</router-link>
		</div>
		<div class="inp">
			<div class="fasong"@click="fasong":class="{'faact':flag}">
				{{msg}}
			</div>
			<input type="text"placeholder="请输入手机号码":class="{'inpact':true}"v-model="val" />
			<input type="text"placeholder="请输入短信中的验证码":class="{'inpact':true}" />
			<input type="password"placeholder="输入新密码":class="{'inpact':true}" />
			<input type="password"placeholder="确认新密码":class="{'inpact':false}" />
		</div>
		<div class="ljzc">
			<router-link to='/login'style="display:inline-block;width: 100%;height: 100%;">立即注册</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				val:'',
				msg:'发送验证码',
				flag:false,
				time:60,
			}
		},
		methods:{
			setInt(){
				this.time--
			},
			fasong(){
				var reg=/^1(3|4|5|7|8)\d{9}$/
				if(reg.test(this.val)==true){
					this.msg="("+this.time+"秒)重发";
					this.flag=true;
					setInterval(this.setint(),1000)
				}else{
					alert("请正确输入手机号码")
				}
				
			}
		}
	}
</script>

<style>
	.inp{
		width: 100%;
		background: white;
		border-bottom: 0.067rem solid #CFCFCD;
		position: relative;
	}
	.inp>input{
		width: 95%;
		margin-left: 5%;
		border: none;
		outline: none;
		height: 3rem;
		line-height: 3rem;
		font-size: 1rem;
	}
	.inp>.inpact{
		border-bottom: 0.067rem solid #E9E9E9;
	}
	.ljzc{
		margin: 1rem auto;
		width: 90%;
		height: 3rem;
		text-align: center;
		line-height: 3rem;
		color: white;
		font-size: 1.1rem;
		background: #FF8A00;
	}
	.fasong{
		position: absolute;
		color: black;
		top: 0.3rem;
		right: 1rem;
		width: 6rem;
		height: 2.4rem;
		border: 0.067rem solid #C0C0C0;
		font-size: 1rem;
		text-align: center;
		line-height: 2.4rem;
	}
	.inp>.faact{
		color: #BCBCBC;
	}
</style>