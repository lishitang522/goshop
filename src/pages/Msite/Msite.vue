<template>
    
    <div class="msite">
      <HeaderTop title="昌平区北七家宏福科技园(337 省道北)"> 
        <router-link slot="search" to="/search" class="header_search"> 
        <i class="iconfont icon-sousuo" id='msitesousuo'></i> 
        </router-link>
        <router-link slot="login" to="/login" class="header_login">
         <span class="header_login_text">登录|注册</span> 
        </router-link> 
      </HeaderTop>
        <!-- 首页导航 -->
      <nav class="swipernav">
          <div class="swiper-container"> 
          <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
             <div class="food_container">
                 <img src="../../../public/images/nav/1.jpg">
             </div> 
             <span>甜品饮品</span>
            </a>
           <a href="javascript:" class="link_to_food">
            <div class="food_container">
                 <img src="../../../public/images/nav/2.jpg">
            </div> 
             <span>超市便利</span>
             </a>
              <a href="javascript:" class="link_to_food">
            <div class="food_container">
                 <img src="../../../public/images/nav/3.jpg">
            </div> 
             <span>美食</span>
             </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
                 <img src="../../../public/images/nav/4.jpg">
            </div> 
            <span>简餐</span>
          </a>
           <a href="javascript:" class="link_to_food">
            <div class="food_container">
                 <img src="../../../public/images/nav/6.jpg">
            </div> 
             <span>新店特惠</span>
            </a>
             <a href="javascript:" class="link_to_food">
               <div class="food_container">
                 <img src="../../../public/images/nav/7.jpg">
               </div> 
             <span>准时达</span>
             </a>
              <a href="javascript:" class="link_to_food">
               <div class="food_container">
                 <img src="../../../public/images/nav/8.jpg">
               </div> 
               <span>预定早餐</span>
               </a>
                <a href="javascript:" class="link_to_food">
               <div class="food_container">
                 <img src="../../../public/images/nav/9.jpg">
               </div> 
               <span>土豪推荐</span>
                </a>
               <a href="javascript:" class="link_to_food">
               <div class="food_container">
                 <img src="../../../public/images/nav/10.jpg">
               </div> 
               <span>甜品饮品</span>
               </a>
              
               <a href="javascript:" class="link_to_food">
               <div class="food_container">
                 <img src="../../../public/images/nav/11.jpg">
               </div> 
                <span>超市便利</span>
               </a>

              <a href="javascript:" class="link_to_food">
               <div class="food_container">
                 <img src="../../../public/images/nav/12.jpg">
               </div> 
               <span>美食</span>
               </a>
               <a href="javascript:" class="link_to_food">
               <div class="food_container">
                 <img src="../../../public/images/nav/13.jpg">
               </div> 
               <span>简餐</span>
               </a>

            
           </div>
           </div> 
           <div class="swiper-pagination"></div>
           </div>
        </nav>
       

    
    </div>
</template>
<script>
import HeaderTop from '../../components/Header/Header'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  mounted(){
  //  创建一个Swiper对象来实现轮播
  new Swiper('.swiper-container',{
    loop:true,//可以循环轮播
    //如果需要分页器
     pagination: {
      el: '.swiper-pagination',
    },
  })
  },
  components: {
    HeaderTop
  },
}
</script>
<style  scoped>
.header_search {
   position :absolute;
   left: 15px;
   top: 50%;
   transform: translateY(-50%);
   width: 10%;
   height: 50%
}
.header_login {
    font-size :14px;
    color: #fff; 
    position: absolute; 
    right: 15px; 
    top: 50% ;
    transform :translateY(-50%)
    }
.header_login_text {
    color :#fff
    }
.swipernav{
  border-bottom:1px,#e4e4e4;
  margin-top :45px;
  height: 200px;
  background: #fff;
}
.swiper-container {
  width: 100%; 
  height: 100%;
  }
.swiper-wrapper{
  width :100%; 
  height: 100%
  }
.swiper-slide {
  display :flex; 
  justify-content: center; 
  align-items: flex-start;
   flex-wrap: wrap
   }
.link_to_food{
  width: 25%
  }
.food_container{ 
  display: block ;
  width :100% ;
  text-align: center;
  padding-bottom: 10px;
   font-size: 0
   }
img{
  display :inline-block;
   width: 50px; 
   height: 50px
   }
span{
  display :block; 
  width: 100%; 
  text-align: center; 
  font-size: 13px; 
  color: #666
  }
.swiper-pagination >span.swiper-pagination-bullet-active {background :#02a774}

</style>


