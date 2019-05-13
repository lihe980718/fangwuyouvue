<template>
	<div style="background: #F5F5F5;">
		<nav class="lg-nav">
			<router-link to="/sy"class="logo"></router-link>
			<router-link  to="" class="xz">
				<img src="../../assets/down.png"style="width: 1.2rem;height: 1.2rem;"/>
				<p style="color: white;">APP</p>
			</router-link>
			<router-link to="/my" class="my">
				<img src="../../assets/urse.png"style="width: 1.2rem;height: 1.2rem;"/>
				<p style="color: white;">我的</p>
			</router-link>
		</nav>
		<div class="er-banner">
			<div v-for="(item,index) in list"@mousemove="move(item,index)"v-show="item.flag">
				<img :src="item.src"/>
				<div class="num">{{item.num}}/5</div>
			</div>
		</div>
		<div class="er-sec1">
			<h1>天鹅湾小区精装两居，满五唯一，业主换房急售</h1>
			<p style="color: black;font-size: 1.2rem;"><span style="color: #DC4E41;font-size: 1.4rem;font-weight: 600;">576 </span>万元（单价：46327元/平） <img src="../../../static/phone.png"style="float: right;width: 1rem;height: 1.5rem;position: relative;margin-top:0.5rem ;"/></p>
			<p style="color: #B3B3B3;font-size: 1.1rem;">挂牌时间2015年6月20日</p>
			<p class="p4"><span>学区房</span><span>独家</span><span>满五唯一</span></p>
		</div>
		<div class="er-sec2">
			<div><div><span>户型：</span>3室2厅</div><div><span>面积：</span>100平</div></div>
			<div><div><span>楼层：</span>中楼层</div><div><span>朝向：</span>南西</div></div>
			<div><div><span>装修：</span>精装</div><div><span>楼型：</span>塔楼</div></div>
			<div><div><span>年底：</span>2004年</div><div><span>区域：</span>西二旗</div></div>
			<div><div><span>首付：</span>123万</div><div><span>月供：</span>15683元</div></div>
			<div><div style="width: 80%;"><span>地铁：</span>离西二旗地铁站800米</div></div>
			<div><div style="width: 100%;"><span>小区：</span>珠江帝景</div><img src="../../../static/zf-jt.png"style="float: right;margin-right: 1rem;width: 1.3rem;height: 1.3rem;position: relative;top: 0.1rem;"/></div>
			<div><div style="width: 100%;"><span>学校：</span>北京市第二实验中学</div><img src="../../../static/zf-jt.png"style="float: right;margin-right: 1rem;width: 1.3rem;height: 1.3rem;position: relative;top: 0.1rem;"/></div>
			<div style="border: none;color: #9F9F9F;font-size: 1.3rem;width: 100%;margin: 0;text-align: center;display: block;">更多房源信息</div>
		</div>
		<div class="er-sec3">
			<div>
				<h2 style="font-size: 1.4rem;color: #FD8A00;font-weight: 500;">房源特色</h2>
			</div>
			<div style="font-size: 1.19rem;">
				小区环境优雅，虽处闹市中（小区南200米有美廉美超市、西30米有华联商城、星美国际影城、东北角就是大中电器、小区东100米有汇佳幼儿园、昌平实验一小，昆泰国际大酒…
			</div>
			<div style="border: none;color: #9F9F9F;font-size: 1.3rem;width: 100%;margin: 0;text-align: center;display: block;">更多特色</div>
		</div>
		<div class="er-sec4">
			<div style="border-bottom: 0.067rem solid #EBEBEB;">
				<h2 style="font-size: 1.4rem;color: #FD8A00;font-weight: 500;">户型分间</h2>
			</div>
			<div class="ma1" style="border-bottom: 0.067rem solid #FF8E0C;">
				<img src="../../../static/index/img2.png"/>
				<div>
					<h2>当前格局</h2>
					<h4 style="font-size: 1.1rem;font-weight: 500;margin-top: 0.5rem;">分间信息：客厅 25平米 南北通…</h4>
					<h4 style="font-weight: 500;color: #98A8B8;margin-top: 1rem;"><span style="display:inline-block;background: #F3F7FA;padding: 0.1rem 0.2rem;margin-right: 0.4rem;">南北通透</span><span style="display:inline-block;background: #F3F7FA;padding: 0.1rem 0.2rem;">全明格局</span></h4>
				</div>
			</div>
			<div class="ma1">
				<img src="../../../static/index/img3.png"/>
				<div>
					<h2>原始格局</h2>
					<h4 style="font-size: 1.1rem;font-weight: 500;margin-top: 0.5rem;">分间信息：客厅 25平米 南北通…</h4>
					<h4 style="font-weight: 500;color: #98A8B8;margin-top: 1rem;"><span style="display:inline-block;background: #F3F7FA;padding: 0.1rem 0.2rem;margin-right: 0.4rem;">南北通透</span><span style="display:inline-block;background: #F3F7FA;padding: 0.1rem 0.2rem;">全明格局</span></h4>
				</div>
			</div>
		</div>
		<div class="er-sec5">
			<div>
				<h2 style="font-size: 1.4rem;font-weight: 500;">对口学校</h2>
			</div>
			<div><span>学校名称：</span>北京市第二实验小学</div>
			<div><span>升学方式：</span>直升 派位</div>
			<div><span>对口中学：</span>团结湖中学</div>
			<div><span>划片小区：</span>3个划片小区 在售房源150套</div>
			<div><span>学校特色：</span>包食宿、有学校</div>
			<div style="border: none;color: #9F9F9F;font-size: 1.3rem;width: 100%;margin: 0;text-align: center;display: block;">查看学校详情</div>
		</div>
		<div class="er-sec5">
			<div>
				<h2 style="font-size: 1.4rem;font-weight: 500;">位置及周边</h2>
			</div>
			<div style="width: 100%;border: none;margin: 0;"><img src="../../../static/map.png"style="width: 90%;height: 14rem;margin-left: 5%;"/></div>
		</div>
		<div class="er-sec6">
			<div class="active">
				<h2 style="font-size: 1.4rem;font-weight: 500;">推荐房源</h2>
			</div>
			<div v-for="item in list1":class="{'active':item.flag}">
				<div>
					<img :src="item.src" />
					<div>
						<h1 style="font-size: 1.3rem;">{{item.info1}}</h1>
						<h3 style="font-size: 1rem;"class="hh1">{{item.info2}}<span class="price"style="float: right;">{{item.price}}</span></h3>
						<h3 style="font-size: 0.8rem;" class="hh2">{{item.name}}<span style="float: right;">{{item.count}}</span></h3>
						<h4 style="color: #000000;"><span>{{item.bq1}}</span><span>{{item.bq2}}</span><span>{{item.bq3}}</span></h4>
					</div>
				</div>
				<div class="ly">
					<span></span>推荐理由：同户型、通风好、采光好
				</div>
			</div>
			<div style="border: none;color: #9F9F9F;font-size: 1.3rem;width: 100%;margin: 0;text-align: center;display: block;padding: 1rem 0;">查看更多相似房源</div>
		</div>
		<footer style="margin-top: 1rem;">
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
		<div class="lxjjr">
			<div>
				<div>
					<img src="../../../static/user.png"/>
					联系经纪人
				</div>
				<div><img src="../../../static/xin.png"/>关注</div>
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
						src:'../../../static/img.png',
						flag:true,
						num:1,
					},
					{
						src:'../../../static/img1.png',
						flag:false,
						num:2,
					},
					{
						src:'../../../static/img2.png',
						flag:false,
						num:3,
					},
					{
						src:'../../../static/img3.png',
						flag:false,
						num:4,
					},
					{
						src:'../../../static/img4.png',
						flag:false,
						num:5,
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
					},
				],
			}
		},
		methods:{
			move(item,index){
				
			}
		}
	}
</script>

<style>
	.er-banner{
		width: 100%;
		height: 13rem;
	}
	.er-banner>div{
		width: 100%;
		height: 100%;
		position: relative;
	}
	.er-banner>div>img{
		width: 100%;
		height: 100%;
	}
	.er-banner>div>.num{
		position: absolute;
		bottom: 0.7rem;
		right: 0.5rem;
		width: 4rem;
		height: 1.5rem;
		color: white;
		border-radius: 0.75rem;
		background: rgba(24,24,24,.6);
		text-align: center;
		line-height: 1.5rem;
		font-size: 0.9rem;
	}
	.er-sec1{
		width: 100%;
		box-sizing: border-box;
		padding: 1rem;
		background: white;
		border-bottom: 0.067rem solid #EBEBEB;
	}
	.er-sec1>h1{
		font-size: 1.4rem;
		margin-bottom: 0.7rem;
	}
	.er-sec1>p{
		line-height: 2rem;
	}
	.er-sec1>.p4{
		color: #9FB1C0;
		font-size: 1rem;
	}
	.er-sec1>.p4>span{
		margin-right: 0.5rem;
		padding: 0.1rem 0.5rem;
		background: #F4F8FB;
	}
	.er-sec2{
		margin-top: 1rem;
		border-top: 0.067rem solid #EBEBEB;
		border-bottom: 0.067rem solid #EBEBEB;
		background: white;
	}
	.er-sec2>div{
		width: 95%;
		margin-left: 5%;
		padding: 1rem 0;
		border-bottom: 0.067rem solid #EBEBEB;
		display: flex;
	}
	.er-sec2>div>div{
		width: 50%;
		font-size: 1.2rem;
	}
	.er-sec2>div>div>span{
		 color: #9F9F9F;
	}
	.er-sec3{
		width: 100%;
		margin-top: 1rem;
		border-top: 0.067rem solid #EBEBEB;
		border-bottom: 0.067rem solid #EBEBEB;
		background: white;
	}
	.er-sec3>div{
		width: 95%;
		margin-left: 5%;
		padding: 1rem 0;
		border-bottom: 0.067rem solid #EBEBEB;
	}
	.er-sec4{
		width: 100%;
		margin-top: 1rem;
		border-top: 0.067rem solid #EBEBEB;
		border-bottom: 0.067rem solid #EBEBEB;
		background: white;
	}
	.er-sec4>div{
		display: flex;
		width: 95%;
		margin-left: 5%;
		padding: 1rem 0;
	}
	.er-sec4>.ma1>img{
		width: 6rem;
		height: 6rem;
		margin-right:0.7rem;
	}
	.er-sec4>.ma1>div>h2{
		font-size: 1.4rem;
	}
	.er-sec5{
		width: 100%;
		margin-top: 1rem;
		border-top: 0.067rem solid #EBEBEB;
		border-bottom: 0.067rem solid #EBEBEB;
		background: white;
	}
	.er-sec5>div{
		width: 95%;
		margin-left: 5%;
		padding: 1rem 0;
		border-bottom: 0.067rem solid #EBEBEB;
	}
	.er-sec5>div{
		font-size: 1.1rem;
	}
	.er-sec6{
		width: 100%;
		background: white;
		margin-top: 1rem;
		border-top: 0.067rem solid #EBEBEB;
		border-bottom: 0.067rem solid #EBEBEB;
	}
	.er-sec5>div>span{
		color: #9F9F9F;
	}
	.er-sec6>div{
		width: 90%;
		margin-left: 5%;
		padding: 1rem 5% 1rem 0;
		color: black;
	}
	.er-sec6>div>div{
		width: 100%;
		display: flex;
	}
	.er-sec6>div>div>img{
		width: 7rem;
		height: 7rem;
		margin-right: 0.5rem;
	}
	.er-sec6>div>div>div>h3{
		line-height: 2rem;
	}
	.er-sec6>div>div>div>.hh1>span{
		color: #FE9925;
	}
	.er-sec6>div>div>div>.hh2{
		color: #BFBFBF;
	}
	.er-sec6>div>div>div>h4>span{
		display: inline-block;
		background: #F5F6FA;
		color: #9BABBA;
		font-size: 0.8rem;
	}
	.er-sec6>div>div>div>h4>span:nth-child(n+2){
		margin-left: 0.5rem;
	}
	.er-sec6>.active{
		border-bottom: 0.067rem solid #EBEBEB;
	}
	.er-sec6>div>.ly{
		width: 100%;
		box-sizing: border-box;
		background: #F2F2F2;
		padding: 0.5rem 0.7rem;
		margin-top: 1rem;
		position: relative;
		color: #6E6E6E;
		font-size: 0.9rem;
	}
	.er-sec6>div>.ly>span{
		position: absolute;
		top: -1rem;
		left: 0.5rem;
		display: block;
		border: 0.5rem solid;
		border-color: transparent transparent #F2F2F2 transparent;
	}
	.lxjjr{
		width: 100%;
		margin-top:1rem;
		background: white;
		padding: 0.7rem 0;
		box-shadow: 0 0 0.5rem gray;
	}
	.lxjjr>div{
		width: 95%;
		margin: auto;
		margin-left: 5%;
		display: flex;
		font-size: 1.2rem;
	}
	.lxjjr>div>div:nth-child(1){
		border-radius: 0.3rem;
		background: #FF8A00;
		color: white;
		width: 70%;
		height: 3.5rem;
		line-height: 3.5rem;
		text-align: center;
	}
	.lxjjr>div>div:nth-child(1)>img{
		width: 2rem;
		height: 2rem;
		position: relative;
		top: 0.5rem;
	}
	.lxjjr>div>div:nth-child(2){
		color: #717171;
		width: 30%;
		height: 3.5rem;
		line-height: 3.5rem;
		text-align: center;
	}
	.lxjjr>div>div:nth-child(2)>img{
		width: 1.5rem;
		height: 1.5rem;
		position: relative;
		top: 0.3rem;
		right: 0.2rem;
	}
</style>