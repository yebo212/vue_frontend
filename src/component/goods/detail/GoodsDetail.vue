<template>
<div>

  <app-breadcumd></app-breadcumd>
  <!-- 商品详情 -->
<div class="section">
    <div class="wrapper clearfix">
        <div class="wrap-box">
            <!--页面左边-->
            <div class="left-925">
                <div class="goods-box clearfix">
                    <!--商品图片-->
                    <div class="pic-box">
                      <app-left-img :imglist="goodsDetail.imglist"></app-left-img>
                    </div>
                    <!--/商品图片-->

                    <!--商品信息-->
                    <app-left-info :goodsinfo="goodsDetail.goodsinfo"></app-left-info>
                    <!--/商品信息-->
                </div>

                

                    <!--选项卡-->
                      <el-tabs v-model="activeName" type="border-card">
                        <el-tab-pane label="商品介绍" name="first">
                          <!--选项内容-->
                          <div class="tab-content entry" v-html="goodsDetail.goodsinfo.content" style="display:block;">
                          </div>
                        </el-tab-pane>
                        <el-tab-pane label="商品评论" name="second">
                          <div class="tab-content" style="display: block;">
                              <!--网友评论-->
                              <app-comment tablename="goods" :artID="id"></app-comment>
                              <!--/网友评论-->
                          </div>
                        </el-tab-pane>
                      </el-tabs>
                    <!--/选项卡-->
            </div>
            <!--/页面左边-->

            <!--页面右边-->
            <div class="left-220">
                <div class="bg-wrap nobg">
                   <app-right :hotgoodslist="goodsDetail.hotgoodslist"></app-right>
                </div>
            </div>
            <!--/页面右边-->
        </div>
    </div>
</div>
</div>
</template>

<script>
import LeftImgComponent from "./frame/LeftImg.vue";
import LeftInfoComponent from "./frame/LeftInfo.vue";
import RightComponent from "./frame/Right.vue";
import BreadcumdComponent from "./frame/Breadcumd.vue";
import CommentComponent from "../../common/Comment.vue";

  export default {
    data() {
      return {
        activeName: 'second',
        id:this.$route.params.id,
        goodsDetail:{
          goodsinfo:{},
          imglist:[],
          hotgoodslist:[],
        }
      }
    },
    methods: {
      getGoodsDetail() {
        this.$http.get(this.$api.goodsDetail+this.id).then(rsp=>{
          this.goodsDetail=rsp.data.message;
          console.log( this.goodsDetail);
        })
      }
    },
    created(){
      this.getGoodsDetail();
    },
    components:{
      appComment:CommentComponent,
      appBreadcumd:BreadcumdComponent,
      appRight:RightComponent,
      appLeftInfo:LeftInfoComponent,
      appLeftImg:LeftImgComponent,
    },
    watch:{
      $route(){
        this.id=this.$route.params.id;
        this.getGoodsDetail();
      }
    }
  }
</script>

<style scoped>

</style>