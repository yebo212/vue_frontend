<template>
  <div>
    <div class="goods-spec">
      <h1>{{goodsinfo.title}}</h1>
      <p class="subtitle">{{goodsinfo.sub_title}}</p>
      <div class="spec-box">
          <dl>
              <dt>货号</dt>
              <dd id="commodityGoodsNo">{{goodsinfo.goods_no}}</dd>
          </dl>
          <dl>
              <dt>市场价</dt>
              <dd>
                  <s id="commodityMarketPrice">¥{{goodsinfo.market_price}}</s>
              </dd>
          </dl>
          <dl>
              <dt>销售价</dt>
              <dd>
                  <em class="price" id="commoditySellPrice">¥{{goodsinfo.sell_price}}</em>
              </dd>
          </dl>
      </div>

      <div class="spec-box">
          <dl>
              <dt>购买数量</dt>
              <dd>
                  <div class="stock-box">
                      <el-input-number v-model="num" @change="handleChange" :min="1" :max="goodsinfo.stock_quantity" size="small"></el-input-number>
                  </div>
                  <span class="stock-txt">
                  库存
                  <em id="commodityStockNum">{{goodsinfo.stock_quantity}}</em>件
                  </span>
              </dd>
          </dl>
          <dl>
              <dd>
                  <div class="btn-buy" id="buyButton">
                      <button class="buy" >立即购买</button>
                      <button class="add" @click="addShopcart">加入购物车</button>
                  </div>
              </dd>
          </dl>
      </div>

  </div>
</div>
</template>

<script>
  export default {
    props:['goodsinfo'],
    data() {
      return {
        num: 1,
        goodsCount:1
      }
    },
    methods:{
      addShopcart(){
        this.$store.commit("addShopcartData",{id:this.$route.params.id,val:this.goodsCount})
      },
      handleChange(value){
          console.log(value);
          this.goodsCount=value;
      }
    },
    watch:{
        goodsinfo(){
           this.num=1;
           this.goodsCount=1;
        }
    }
  }
</script>

<style scoped>

</style>