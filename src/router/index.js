import VueRouter from "vue-router";

import GoodsDetailComponent from "../component/goods/detail/GoodsDetail.vue";
import GoodsMoreComponent from "../component/goods/more/GoodsMore.vue";
import GoodsHomeComponent from "../component/goods/GoodsHome.vue";
import ShopcartComponent from "../component/shopcart/Shopcart.vue";

const routerConfig = [
    { path: '/', redirect: '/goods' },
    { name: "g", path: '/goods', component: GoodsHomeComponent },
    { name: "gd", path: '/goods/detail/:id', component: GoodsDetailComponent },
    { name: "gm", path: '/goods/more', component: GoodsMoreComponent },
    { name: "c", path: '/cart', component: ShopcartComponent },
];

export default new VueRouter({
    routes: routerConfig
})