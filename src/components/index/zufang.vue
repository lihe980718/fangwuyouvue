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
			<router-link to="/my"style="width: 6rem;">北京租房</router-link>
		</div>
		<div class="search">
			<input type="text" />
			<span></span>
		</div>
		<div class="zfnav">
			<div class="zfact"style="color: #FF8805;">区域<span class="daosj"style="border-color: #FF8805 transparent transparent transparent;"></span></div>
			<div class="zfact">月租<span class="daosj"></span></div>
			<div class="zfact">房型<span class="daosj"></span></div>
			<div>更多<span class="daosj"></span></div>
		</div>
		<div class="zfmain">
			<router-link to="/zfxq"v-for="item in list":class="{'zfmainact':item.flag}">
				<img :src="item.src"/>
				<div>
					<h2>{{item.name}}</h2>
					<h4>{{item.hx}}</h4>
					<h4>{{item.info}}</h4>
					<h4><span class="zfgn">{{item.gn}}</span><span class="zfprice">{{item.price}}</span></h4>
				</div>
			</router-link>
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
						name:'南沙滩小区 超低价出售',
						hx:'2室一厅  96㎡  南北',
						info:'青岛新天地',
						gn:'集中供暖',
						price:'3700元/月',
						flag:true,
					},
					{
						src:'../../../static/img2.png',
						name:'青年汇二期 免税三居',
						hx:'3室2厅  129㎡  南北',
						info:'青年汇家园',
						gn:'集中供暖',
						price:'1610元/月',
						flag:true,
					},
					{
						src:'../../../static/img3.png',
						name:'博雅德源稀缺两居 钥匙房源',
						hx:'2室2厅  126㎡  南北',
						info:'西二旗',
						gn:'天然气供暖',
						price:'3420元/月',
						flag:true,
					},
					{
						src:'../../../static/img4.png',
						name:'朝阳北路 赠车库 自住首选！',
						hx:'5室3厅 260㎡  南北',
						info:'武夷花园二手房',
						gn:'集中供暖',
						price:'5480元/月',
						flag:true,
					},
					{
						src:'../../../static/img5.png',
						name:'金汉旭城 东南金角一居',
						hx:'1室1厅  60㎡  东南',
						info:'鲁谷二手房',
						gn:'集中供暖',
						price:'3300元/月',
						flag:false,
					},
				]
			}
		}
	}
</script>

<style>
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
	.zfnav{
		width: 100%;
		border-bottom: 0.09rem solid #D5D5D5;
		border-top: 0.09rem solid #D5D5D5;
		background: white;
		display: flex;
	}
	.zfnav>div{
		width: 25%;
		text-align: center;
		padding: 1rem 0;
		font-size: 1.1rem;
	}
	.zfnav>div>.daosj{
		display: inline-block;
		border: 0.4rem solid;
		border-color:#A4A4A4 transparent transparent transparent;
		position: relative;
		top: 0.2rem;
		left: 0.3rem;
	}
	.zfnav>.zfact{
		border-right: 0.09rem solid #D5D5D5;
	}
	.zfmain{
		width: 100%;
		background: white;
	}
	.zfmain>a{
		display: block;
		width: 90%;
		margin: auto;
		padding: 1rem 0;
		display: flex;
	}
	.zfmain>a>img{
		width: 8rem;
		height: 6rem;
		margin-right: 0.5rem;
	}
	.zfmain>a>div>h2{
		font-size: 1rem;
		line-height:0;
		color: #000000;
		font-weight: 500;
		line-height: 1rem;
	}
	.zfmain>a>div>h4{
		font-size: 0.85rem;
		line-height:1.8rem;
		color: #828282;
		width: 13.5rem;
		font-weight: 500;
	}
	.zfmain>a>div>h4>.zfgn{
		padding: 0.09rem;
		color: #84B43B;
		border: 0.067rem solid #84B43B;
	}
	.zfmain>a>div>h4>.zfprice{
		float: right;
		color: #84B43B;
	}
	.zfmainact{
		border-bottom: 0.067rem solid #FDC57F;
	}
</style>