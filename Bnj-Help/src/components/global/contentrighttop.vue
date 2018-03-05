<template>
    <div>
        <div class="righttop">
            <div class="searchdiv">
                <input class="searchinput fl" type="text" placeholder="钢琴" v-model="searchname">
                <span @click="search" class="searchbtn fr fg">搜索</span>
            </div>
            <div class="ml10 mt5 c999" v-for="dataindex in data">
                <span class="ml20 fl">{{ dataindex }}</span>
            </div>
        </div>
        <div class="whiteband h10 wp100 beee"></div>
    </div>
</template>

<script>
import Bus from './../../common/js/bus.js'

export default {
  data() {
        return {
            data:[],
            searchname:'',
        };
    },
    created() {
        var _this = this;
        _this.getlist();
		
    },
    mounted () {
        // 自适应浏览器高度
        
    },
    components: {

    },
    methods: {
		getlist(){
            var _this = this;
            var obj = {};
            // http.post('/show/hotword.do',obj,function (response) {
            //     if(response.status == '200'){
                    _this.data = ["排课","收费","收入","咨询师", "提成"]
                    // _this.open();
                // } else{
                //     _this.alertmsg = response.errordesc;
                // }
            // })
        },
        search(){
            var _this = this;
            Bus.$emit('searchname',_this.searchname);
        }
    },
    computed: {
        
    },
    watch: {

    }
}
</script>


<style scoped>
    .righttop{
        width: 760px;
        height: 85px;
        padding-top: 25px; 
        background: #fff;
    }
    .searchdiv{
        width: 520px;
        height: 40px;
        margin-left: 30px;
        border: 2px solid #2aba65;
    }
    .searchinput{
        width: 410px;
        height: 40px;
        font-size: 16px;
        border: 0px;
        text-indent: 50px;
        color: #707070;
        background: url("./../../assets/icon/icon_serch.png") no-repeat left;
        background-position-x: 20px;
    }
    .searchbtn{
        width: 100px;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        text-align: center;
        color: #fff;
        background: #2aba65;
    }
</style>

