<template>
    <div class="section">
        <div v-for="items in listData" :key="items.level1cateid">
             <!--子类-->
         <div class="main-tit" >
             <h2>{{items.catetitle}}</h2>
             <p>
 
                 <router-link :to="{name:'gm'}" v-for="item_child in items.level2catelist" :key="item_child.subcateid">{{item_child.subcatetitle}}</router-link>
 
                 <router-link :to="{name:'gm'}">更多
                     <i>+</i>
                 </router-link>
             </p>
         </div>
         <!--/子类-->
         <div class="wrapper clearfix">
             <div class="wrap-box">
                 <ul class="img-list">
                     <li v-for="item in items.datas" :key="item.artID">
                         <router-link :to="{name:'gd',params:{id:item.artID}}">
                             <div class="img-box">
                                 <img :src="item.img_url">
                             </div>
                             <div class="info">
                                 <h3>{{item.artTitle}}</h3>
                                 <p class="price">
                                     <b>¥{{item.sell_price}}</b>元</p>
                                 <p>
                                     <strong>库存 {{item.stock_quantity}}</strong>
                                     <span>市场价：
                                         <s>{{item.market_price}}</s>
                                     </span>
                                 </p>
                             </div>
                         </router-link>
                     </li>
                 </ul>
             </div>
         </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
        return {
            listData:{
                level1cateid:"",
                catetitle:"",
                level2catelist:[],
                datas:[],
            }
        }
    },
    methods: {
        getListData() {
            this.$http.get(this.$api.goodsContent).then(rsp=>{
                this.listData=rsp.data.message
                console.log(rsp.data);
            })
        }
    },
    created(){
        this.getListData();
    },
  }
</script>

<style scoped>

</style>