<template>
	<div>
		<div class="es-nav">
			<div v-for="(item,i) in list":class="{'act1':item.flag,'act2':item.border}"@click="toggle(item,i)">
				{{item.name}} <span :class="{'act3':item.flag1,'act4':item.flag2}"></span>
				<div>
					<main1 v-if="i==0"v-show="item.flag"></main1>
				</div>
			</div>
		</div>
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
	.qvyv{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 5rem;
	background: black;
	color: black;
	z-index: 99;
}	
</style>