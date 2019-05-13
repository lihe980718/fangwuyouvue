import sy from './components/index/sy.vue'
import my from './components/index/my.vue'
import login from './components/index/login.vue'
import zhuce from './components/index/zhuce.vue'
import zhmm from './components/index/zhmm.vue'
import yidenglu from './components/index/yidenglu.vue'
import xiaoqv from './components/index/xiaoqv.vue'
import zufang from './components/index/zufang.vue'
import zfxq from './components/index/zfxq.vue'
import ershou from './components/index/ershou.vue'
import erxq from './components/index/erxq.vue'
import main1 from './components/index/main1.vue'
import newf from './components/index/new_file.vue'
const routers = [
  {
    path: '/sy',
    name: 'sy',
    component: sy,
  },
  {
    path: '/',
    redirect:'/sy',
    component: sy,
  },
	{
		 path: '/my',
	    name: 'my',
	    component: my
	},
	{
		 path: '/login',
	    name: 'login',
	    component: login
	},
	{
		 path: '/zhuce',
	    name: 'zhuce',
	    component: zhuce
	},
	{
		 path: '/zhmm',
	    name: 'zhmm',
	    component: zhmm
	},
	{
		 path: '/yidenglu',
	    name: 'yidenglu',
	    component: yidenglu
	},
	{
		 path: '/xiaoqv',
	    name: 'xiaoqv',
	    component: xiaoqv
	},
	{
		 path: '/zufang',
	    name: 'zufang',
	    component: zufang
	},
	{
		 path: '/zfxq',
	    name: 'zfxq',
	    component: zfxq
	},
	{
		 path: '/ershou',
	    name: 'ershou',
	    component: ershou
	},
	{
		 path: '/erxq',
	    name: 'erxq',
	    component: erxq
	},
	{
		 path: '/main1',
	    name: 'main1',
	    component: main1
	},
	{
		 path: '/newf',
	    name: 'newf',
	    component: newf
	},
]
export default routers
