import Vue from "vue";

export default {
    state: {
        //存放购物车中的购买记录
        shopcartData: JSON.parse(localStorage.getItem('shopcartData')) || {}
    },
    getters: {
        //取原值
        getShopcartData(state) {
            return state.shopcartData;
        },
        //获取商品总数
        getShopcartTotal(state) {
            return Object.values(state.shopcartData).reduce((s, v) => s + v, 0)
        },
        //取出购物车所有商品ID拼成字符串
        getShopcartIDS(state) {
            return Object.keys(state.shopcartData).join(",")
        },
    },
    mutations: {
        //添加或者修改数据
        upShopcartData(state, params) {
            Vue.set(state.shopcartData, params.id, params.val);
            localStorage.setItem("shopcartData", JSON.stringify(state.shopcartData));
        },
        //对已有商品数据进行累加
        addShopcartData(state, params) {
            if (state.shopcartData[params.id]) {
                state.shopcartData[params.id] += params.val;
                localStorage.setItem("shopcartData", JSON.stringify(state.shopcartData));
            } else {
                Vue.set(state.shopcartData, params.id, params.val);
                localStorage.setItem("shopcartData", JSON.stringify(state.shopcartData));
            }
        },
        //删除一条数据
        delShopcartData(state, params) {
            Vue.delete(state.shopcartData, params.id);
            localStorage.setItem("shopcartData", JSON.stringify(state.shopcartData));
        },
    }

}