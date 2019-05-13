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
			<router-link to="/sy">我的</router-link>
			<img src="../../assets/jiantou_03.png"style="position: absolute;height: 3rem;left: 9rem;"/>
			<router-link to="/sy">登录</router-link>
		</div>
		<div class="ptdl">
			<div v-for="(item,index) in lglist">
				<span :class="{'lgact':item.flag}"@click="toggle(item,index)">{{item.name}}</span>
				<div v-show="item.flag">
					<span class="yzm">{{item.yzm}}</span>
					<input type="text" name="" id="" :placeholder="item.info1"  :class="{'lgact1':item.flag}"/>
						<input type="password":placeholder="item.info2" />
						<div class="lg-dl">
							<div class="lg-dl1"><router-link to="/yidenglu"style="display:inline-block;width: 100%;height: 100%;">{{item.lg}}</router-link></div>
							<div class="lg-dl2">
								<router-link to="/zhuce">{{item.zc}}</router-link>
								<router-link to="/zhmm">{{item.pass}}</router-link>
							</div>
						</div>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				lglist:[
					{
						flag:true,
						name:'普通登录',
						info1:'请输入手机号码',
						info2:'请输入密码',
						lg:'立即登录',
						zc:'立即注册',
						pass:'忘记密码',
					},
					{
						flag:false,
						name:'验证码快捷登录',
						info1:'请输入手机号码',
						yzm:'发送验证码',
						info2:'请输入短信中的验证码',
						lg:'验证并登录',
						zc:'立即注册',
						pass:'忘记密码',
					},
				]
			}
		},
		methods:{
			toggle(item,index){
				this.lglist.forEach(i=>{
					if(i.flag!==this.lglist[index].flag){
						i.flag=false
					}
				})
				if(item.flag==true){
					item.flag=true
				}else{
					
				item.flag=!item.flag
				}
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
		background: #F0EFED;
	}
	a{
		text-decoration: none;
	}
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
	.nn{
		width: 100%;
		height: 3rem;
		line-height: 3rem;
		background: white;
		font-size: 1.2rem;
		border-bottom: 0.067rem solid #D0D0D0;
	}
	.nn a{
		display: inline-block;
		width: 4.5rem;
		text-align: center;
		color: #7E7E7E;
	}
	.ptdl{
		width: 100%;
		display: flex;
		background: white;
	}
	.ptdl>div{
		width: 50%;
	}
	.ptdl>div>span{
		display: inline-block;
		width: 100%;
		text-align: center;
		border-bottom: 0.2rem solid #D1D1D1;
		height: 3rem;
		line-height: 3rem;
		font-size: 1.1rem;
	}
	.ptdl>div>div{
		width: 200%;
	}
	.ptdl>div>div>input{
		width: 95%;
		margin-left: 5%;
		border: none;
		outline: none;
		height: 3rem;
		line-height: 3rem;
		font-size: 1rem;
	}
	.ptdl>div>.lgact{
		border-bottom: 0.2rem solid #FF8B00;
	}
	.ptdl>div:nth-child(2)>div{
		position: relative;
		left: -100%;
	}
	.ptdl>div>div>.lgact1{
		border-bottom: 0.067rem solid #E9E9E9;
	}
	.ptdl .yzm{
		position: absolute;
		top: 0.3rem;
		right: 1rem;
		width: 6rem;
		height: 2.4rem;
		border: 0.067rem solid #C0C0C0;
		font-size: 1rem;
		text-align: center;
		line-height: 2.4rem;
	}
	.ptdl>div:nth-child(1) .yzm{
		display: none;
	}
	.lg-dl{
		border-top: 0.067rem solid #D0D0D0;
		background: #F0EFED;
	}
	.lg-dl>.lg-dl1{
		width: 90%;
		margin: auto;
		background: #FF8A00;
		text-align: center;
		height: 3rem;
		line-height: 3rem;
		color: white;
		font-size: 1.1rem;
		margin-top: 1rem;
	}
	.lg-dl>.lg-dl2{
		width: 90%;
		margin:auto;
		margin-top: 0.8rem;
	}
	.lg-dl>.lg-dl2 a:nth-child(1){
		color: #F9A44A;
		font-size: 1rem;
	}
	.lg-dl>.lg-dl2 a:nth-child(2){
		color: #000000;
		font-size: 1rem;
		position: absolute;
		right: 1rem;
	}
</style>