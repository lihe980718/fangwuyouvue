<template>
<!-- 上下左右3*3轮播 -->
<div>
  <!-- Vue过渡组件，绑定了四个样式类 -->
  <transition :enter-class="oe" :enter-active-class="oea" :leave-active-class="ola" :leave-to-class="olt">
    <!-- 利用行元素ul进行3行循环渲染，并定义行指针rIndex -->
    <ul class="swipeitem" style="list-style:none;" v-for="(rlist,rIndex) in rowSideList" :key="rIndex" v-if="rIndex==currentRIndex">
      <!--将列元素li也用transition组件包裹起来 -->
      <transition :enter-class="oe" :enter-active-class="oea" :leave-active-class="ola" :leave-to-class="olt">
        <!-- 将列元素li循环3次渲染为可滑动元素，并定义列指针cIndex与四个方向滑动的方法 -->
        <v-touch tag="li" class="swipeitem" :style="clist.cstyle" v-for="(clist,cIndex) in rlist.columnSideList" v-if="cIndex==currentCIndex" :key="cIndex" @swipeup="top()" @swipedown="bottom()" @swipeleft="left()" @swiperight="right()">
          {{clist.name+":可替换其他内容的坑位"}}
        </v-touch>
      </transition>
    </ul>
  </transition>
</div>
</template>
<script>
export default {
  name: "Swiper",
  data() {
    return {
      // 定义当前行列指针位置
      currentRIndex: 0,
      currentCIndex: 0,
      // 定义四个样式类，可在方法中进行替换
      oe: 'on-enter',
      oea: 'on-enter-active',
      ola: 'on-leave-active',
      olt: 'on-leave-to',
      // 定义测试数据列表（嵌套）
      rowSideList: [{
          columnSideList: [{
              name: "1-1",
              cstyle: {
                backgroundColor: "lightblue",
              }
            },
            {
              name: "1-2",
              cstyle: {
                backgroundColor: "green",
              }
            },
            {
              name: "1-3",
              cstyle: {
                backgroundColor: "blue",
              }
            }
          ]
        },
        {
          columnSideList: [{
              name: "2-1",
              cstyle: {
                backgroundColor: "red",
              }
            },
            {
              name: "2-2",
              cstyle: {
                backgroundColor: "purple",
              }
            },
            {
              name: "2-3",
              cstyle: {
                backgroundColor: "black",
              }
            }
          ]
        },
        {
          columnSideList: [{
            name: "3-1",
            cstyle: {
              backgroundColor: "yellow",
            }
          }, {
            name: "3-2",
            cstyle: {
              backgroundColor: "orange",
            }
          }, {
            name: "3-3",
            cstyle: {
              backgroundColor: "gray",
            }
          }]
        }
      ],
    }
  },
  methods: {
    left() {
      // 向左滑动时切换样式类，下同
      this.oe = "on-enter-swipeleft";
      this.olt = "on-leave-to-swipeleft";
      // 修改行指针，下同
      if (this.currentCIndex == 2)
        this.currentCIndex = 0;
      else
        this.currentCIndex++;
    },
    right() {
      this.oe = "on-enter-swiperight";
      this.olt = "on-leave-to-swiperight";
      if (!this.currentCIndex)
        this.currentCIndex = 2;
      else
        this.currentCIndex--;
    },
    top() {
      this.oe = "on-enter-swipetop";
      this.olt = "on-leave-to-swipetop";
      if (this.currentRIndex == 2)
        this.currentRIndex = 0;
      else
        this.currentRIndex++;
    },
    bottom() {
      this.oe = "on-enter-swipebottom";
      this.olt = "on-leave-to-swipebottom";
      if (!this.currentRIndex)
        this.currentRIndex = 2;
      else
        this.currentRIndex--;
    }
  }
}
</script>
<style scoped>
/* 对Vue官方的几个类进行样式修改 */
.on-enter-active {
  transition: .5s ease;
}
 
.on-leave-active {
  transition: .5s ease;
}
.on-enter-swiperight {
  opacity: 1;
  transition: .5s ease;
  transform: translateX(-640px);
}
 
.on-leave-to-swiperight {
  opacity: 1;
  transition: .5s ease;
  transform: translateX(640px);
}
 
.on-enter-swipeleft {
  opacity: 1;
  transition: .5s ease;
  transform: translateX(640px);
}
 
.on-leave-to-swipeleft {
  opacity: 1;
  transition: .5s ease;
  transform: translateX(-640px);
}
 
.on-enter-swipetop {
  opacity: 1;
  transition: .5s ease;
  transform: translateY(360px);
}
 
.on-leave-to-swipetop {
  opacity: 1;
  transition: .5s ease;
  transform: translateY(-360px);
}
 
.on-enter-swipebottom {
  opacity: 1;
  transition: .5s ease;
  transform: translateY(-360px);
}
 
.on-leave-to-swipebottom {
  opacity: 1;
  transition: .5s ease;
  transform: translateY(360px);
}
 
.swipeitem {
  height: -webkit-fill-available;
  width: -webkit-fill-available;
  font-size: 50px;
  color: white;
  position: absolute;
}
 
</style>