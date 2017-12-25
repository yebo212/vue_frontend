<template>
    <div class="comment-box">
        <!--取得评论总数-->
        <form id="commentForm" name="commentForm" class="form-box" @submit.prevent="subComment">
            <div class="avatar-box">
                <i class="iconfont icon-user-full"></i>
            </div>
            <div class="conn-box">
                <div class="editor">
                    <textarea v-model="commentContent" name="txtContent" sucmsg=" " nullmsg="请填写评论内容！"></textarea>
                    <span class="Validform_checktip"></span></div>
                <div class="subcon">
                    <button id="btnSubmit" name="submit" type="submit" class="submit">提交评论</button>
                    <span class="Validform_checktip"></span></div>
            </div>
        </form>
        <ul id="commentList" class="list-box">
            <p v-if="!commentList.length" style="margin:5px 0 15px 69px;line-height:42px;text-align:center;border:1px solid #f7f7f7;">暂无评论，快来抢沙发吧！</p>
            <li v-for="(item,i) in commentList" :key="item.i">
                <div class="avatar-box"><i class="iconfont icon-user-full"></i></div>
                <div class="inner-box">
                    <div class="info">
                      <span>{{item.user_name}}</span>
                      <span>{{item.user_ip}}</span>
                      <span>{{item.add_time|date}}</span>
                    </div>
                    <p>{{item.content}}</p>
                </div>
            </li>
        </ul>
        <!--放置页码-->
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-sizes="[5, 10, 20, 50]"
            :page-size="5"
            layout="total, sizes, prev, pager, next, jumper"
            :total="commentList.totalcount">
        </el-pagination>
        <!--/放置页码-->
    </div>
</template>

<script>
  export default {
    props:['tablename','artID'],
    data() {
      return {
        commentContent: '',
        commentList: [],
        query:{
          pageIndex:1,
          pageSize:5
        }
      }
    },
    methods: {
        getCommentList() {
            this.$http.get(
                this.$api.commentList+this.tablename+"/"+this.artID,{params:this.query}
            ).then(rsp=>this.commentList=rsp.data.message)
        },
        subComment(){
            this.$http.post(
                this.$api.comment+this.tablename+"/"+this.artID,
                {commenttxt:this.commentContent}
            ).then(rsp=>{
                this.$message({
                    message:"发表成功",
                    type:'success'
                });
                this.commentList.unshift({
                    user_name:"匿名用户",
                    user_ip:"127.0.0.1",
                    add_time:new Date(),
                    content:this.commentContent
                });
                this.commentContent=""
            })
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    },
    created(){
        this.getCommentList();
    },
    watch:{
        artID(){
            this.getCommentList();
            this.commentContent=""
        }
    }
  }
</script>

<style scoped>

</style>