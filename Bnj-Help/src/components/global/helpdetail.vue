<template>
    <div class="outdiv">
        <div class="righttop tac mt10">
            <p class="fs18 tal blod">{{ data.title }}</p>
			<div class="clear mt15 c999 h20">
				<span class="biaoqian fl mr20" v-for="tagsname in data.tags">{{ tagsname }}</span>
				<div class="readnum fl ml20">
					<span>{{ data.pageview }}</span>
				</div>
				<div class="time fr mr20">
					<span>{{ data.updatetime | formatDate }}</span>
				</div>
			</div>
        </div>
        <div class="content">
            <p>{{ data.content }}</p>
        </div>
        <div class="mt30">
            <p class="mb10">以上信息是否解决了您的问题？</p>
            <label class="fg fl">
                <input checked type="radio" name="type" value="0">
                <span>已解决</span>
            </label>
            <label class="fg ml20 fl">
                <input type="radio" name="type" value="1">
                <span>未解决</span>
            </label>
            <select class="ml20 h22 fg b1 fl" name="reason" id="">
                <option value="">请选择原因</option>
                <option value="1">描述不清晰</option>
                <option value="2">操作后不能解决</option>
                <option value="3">内容不正确</option>
                <option value="4">对产品功能不满意</option>
                <option value="5">其他</option>
            </select>
            <span @click="postto" class="btn fl ml30 br2 fg">提交</span>
        </div>
    </div>
</template>

<script>
import {formatDate} from './../../common/js/global.js'
import Bus from './../../common/js/bus.js'
import $ from "jquery"

export default {
  data() {
        return {
			data:{},
			searchobj:{
                code:''
            }
        };
    },
    created() {
		
    },
    props:['helpCode'],
    mounted () {
        // 自适应浏览器高度
        var _this = this;
        _this.searchobj.code = this.$props.helpCode;
		_this.getlist();
    },
    components: {

	},
	filters: {
        formatDate(time) {
            var date = new Date(time);
            return formatDate(date, 'yyyy-MM-dd hh:mm');
        }
    },
    methods: {
		handleSizeChange(val) {
			this.searchobj.pagesize = val;
			this.getlist();
		},
		handleCurrentChange(val) {
			this.searchobj.pageno = val;
			this.getlist();			
		},
		getlist(){
			var _this = this;
			var obj = _this.searchobj;
			console.log(obj)
			// http.post('/show/detail.do',obj,function (response) {
			//     if(response.status == '200'){
					_this.data =  {
                "helpcode": "asdfe2dfsa3",
                "title": "腾讯成长守护平台一周年 充值额度下降37%",
                "tags": ["标签1","标签2","标签3"],
                "pageview": 12,
                "updatetime": 1574874521471 ,
                "content": "这是正文内容"
                }
					// _this.open();
				// } else{
				//     _this.alertmsg = response.errordesc;
				// }
			// })
        },
        postto(){
            var obj = {};
            obj.code = this.searchobj.code;
            obj.type = $('[name="type"]:checked').val();
            obj.reason = $('[name="reason"]').val();
            console.log(obj);
            // http.post('/stats/feedback.do',obj,function (response) {
			//     if(response.status == '200'){
					
					// _this.open();
				// } else{
				//     _this.alertmsg = response.errordesc;
				// }
			// })
        }
    },
    computed: {
        
    },
    watch: {

    }
}
</script>

<style scoped>
    .btn{
        width: 60px;
        height: 23px;
        line-height: 23px;
        text-align: center;
        color: #fff;
        background: #f77f5c;
    }
    .content{
        padding-top: 30px;
    }
	.outdiv{
		width:100%;
        padding: 20px 30px;
		background: #fff;
	}
    .righttop{
        width: 92.2%;
        max-height: 400px;
		background: #fff;
		padding: 20px 30px;
		border-bottom: 1px solid #eee;
	}
	.biaoqian{
		min-width: 35px;
		height: 18px;
		line-height: 18px;
		padding: 1px;
		color: #2aba65;
		background: #ddf7ec;
	}
    .readnum{
		min-width: 80px;
		height: 18px;
		line-height: 18px;
		text-indent: 30px;
		text-align: left;		
		background: url("./../../assets/icon/icon_yuedu.png") no-repeat left;
	}
	.time{
		min-width: 120px;
		height: 18px;
		line-height: 18px;
		text-align: left;
		text-indent: 30px;
		background: url("./../../assets/icon/icon_time.png") no-repeat left;
	}
	.detail{
		color: #707070;
	}
</style>

