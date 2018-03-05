<template>
    <div class="outdiv">
		<div v-if="listbool">
			<div v-for="index in data" class="righttop tac">
				<p v-on:click="lineto(index)" :helpcode="index.helpcode" class="fs18 tal blod fg">{{ index.title }}</p>
				<div class="clear mt15 c999 h20">
					<span class="biaoqian fl mr20" v-for="index2 in index.tags">{{ index2 }}</span>
					<div class="readnum fl ml20">
						<span>{{ index.pageview }}</span>
					</div>
					<div class="time fr mr20">
						<span>{{ index.updatetime | formatDate }}</span>
					</div>
				</div>
				<p class="detail tal mt20">{{ index.content }}</p>
			</div>
			<div class="tac mt20 mb10">
				<div class="block">
					<el-pagination
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:current-page="currentPage4"
					:page-sizes="[10, 20, 50, 100]"
					:page-size="100"
					layout="total, sizes, prev, pager, next, jumper"
					:total="totalnum">
					</el-pagination>
				</div>
			</div>
		</div>
		<help-detail :help-code="helpcode" v-if="detailbool"></help-detail>
    </div>
</template>

<script>
import helpDetail from './helpdetail.vue'
import Bus from './../../common/js/bus.js'
import {formatDate} from './../../common/js/global.js'

export default {
  data() {
        return {
			data:[1,2,3,4],
			listbool:true,
			detailbool:false,
			currentPage1: 5,
			currentPage2: 5,
			currentPage3: 5,
			currentPage4: 4,
			totalnum:6,
			helpcode:"",
			searchobj:{
				categoryid:"",
				word:"",
				pageno:1,
				pagesize:10,
			}
        };
    },
    created() {
		var _this = this;
		_this.getlist();
		Bus.$on('listbool', function (data) {
        	if(data[1].bool == "1"){
				_this.listbool = true;
				_this.detailbool = false;
			}
			_this.searchobj.categoryid = data.id;
			_this.getlist();
		});
		Bus.$on('searchname', function (data) {
			_this.searchobj.word = data;
			_this.getlist();
        })
    },
    mounted () {
        // 自适应浏览器高度
        
    },
    components: {
        helpDetail
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
			// console.log(obj)
			// http.post('/category/categorylist.do',obj,function (response) {
			//     if(response.status == '200'){
					_this.data = [{
						"helpcode": "a1da2efesc",
						"title": "舌尖3回应质疑",
						"tags": ["标签1","标签2","标签3"],
						"content": "吴系挂",
						"updatetime": 1436864169 ,
						"pageview": 593
						},{
						"helpcode": "a1da2efesc",
						"title": "舌尖3回应质疑",
						"tags": ["标签1","标签2","标签3"],
						"content": "吴系挂",
						"updatetime": 1436864169 ,
						"pageview": 593
						},{
						"helpcode": "a1da2efesc",
						"title": "舌尖3回应质疑",
						"tags": ["标签1","标签2","标签3"],
						"content": "吴系挂",
						"updatetime": 1436864169 ,
						"pageview": 593
						},{
						"helpcode": "a1da2efesc",
						"title": "舌尖3回应质疑",
						"tags": ["标签1","标签2","标签3"],
						"content": "吴系挂",
						"updatetime": 1436864169 ,
						"pageview": 593
						},{
						"helpcode": "a1da2efesc",
						"title": "舌尖3回应质疑",
						"tags": ["标签1","标签2","标签3"],
						"content": "吴系挂",
						"updatetime": 1436864169 ,
						"pageview": 593
						}]
					// _this.open();
				// } else{
				//     _this.alertmsg = response.errordesc;
				// }
			// })
		},
		lineto(index){
			this.helpcode = index.helpcode;		
			this.listbool = false;
			this.detailbool = true;
		},
		listBool() {
			this.$emit('list-bool', false)
			console.log(111)			
		}
    },
    computed: {
        
    },
    watch: {

    }
}
</script>


<style scoped>
	.outdiv{
		width:92.2%;
		background: #fff;
	}
    .righttop{
        width: 100%;
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
	.righttop:hover{
		background: #eee;
	}
</style>

