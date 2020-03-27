<template>
    <div class="foot">

     <div class="guide_item" @click="goto('/msite')" :class="{on: isCurrent('/msite')}">
      <span class="item_icon"> 
          <i class="iconfont  icon_waimai"></i> 
      </span>
      <div>
      <span>外卖</span>  
      </div>
   
    </div>
     
     <div class="guide_item" @click="goto('/search')" :class="{on: isCurrent('/search')}">
        <span class="item_icon"> 
            <i class="iconfont iconsousuo" ></i> 
        </span>
        <div>
            <span>搜索</span>  
        </div>
     </div>
     
 
     <div class="guide_item" @click="goto('/order')"  :class="{on: isCurrent('/order')}">
        <span class="item_icon"> 
            <i class=" iconfont icondingdan"></i> 
        </span>
        <div>
            <span>订单</span>  
        </div>
     </div>
  
   
     <div class="guide_item" @click="goto('/profile')" :class="{on: isCurrent('/profile')}">
        <span class="item_icon"> 
            <i class=" iconfont iconwodedangxuan"></i> 
        </span>
        <div>
            <span>我的</span>  
        </div>
     </div>
   </div>
</template>
<script>
export default {
    methods:{
       goto(path) { 
           console.log(path)
           console.log(this.$route.path)
           if(this.$route.path==path){
               return
           }else{
                this.$router.replace(path) 
           }
          
           },
       isCurrent(path) { 
        // console.log(this.$route.path) 
       return this.$route.path === path 

       }
    }
    
}
</script>
<style scoped>
.foot{
    width: 100%;
    position:fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    border: 1px
}

.guide_item{
    display :flex ;
    flex :1 ;
    text-align :center ;
    flex-direction :column ;
    align-items: center;
    margin :5px ;
    color: #999999;
  
}
.on{
    color: red
}
</style>


