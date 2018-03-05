<template>
    <div>
        <div class="lefttop tac" v-for="dataindex in data">
            <dl class="menu-list">
				<dt class="fg">
					<span class="re">
						<span>{{ dataindex.categoryname }}</span>
						<i class="listicon"></i>
					</span>
				</dt>
				<dd class="fg" v-for="dataindex2 in dataindex.sublist">
                    <span class="re">
                        <i class="listto"></i>
                        <span :categoryid='dataindex2.categoryid' id="name">{{ dataindex2.categoryname }}</span><span>( {{ dataindex2.amount }} )</span>
                    </span>
				</dd>
            </dl>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import Bus from './../../common/js/bus.js'
    import http from './../../common/js/ajax.js'

    export default {
        data() {
            return {
                data:[],
                listbool:[
                    {id:6},
                    {bool:1},
                    {name:""}
                ],
                alertmsg:"666",

            };
        },
        created() {
            this.getlist();
        },
        mounted () {
            //点击左侧导航
            var _this = this;
            $('.menu-list dt').click(function(){
                $(".menu-list dt").removeClass("active");
                $(this).addClass("active");
                var dl=$(this).closest('dl');
                var speed=60;
                var minh=60;
                var ddsize = dl.find('dd').length;
                var h = ddsize*40 + minh;			
                if(!dl.hasClass('active')){
                    if(dl.siblings('.active').length > 0){
                        dl.siblings('.active').removeClass('active').animate({'height':minh+'px'},speed);
                    }	
                    dl.addClass('active').animate({'height':h+'px'},speed);
                }else{
                    dl.animate({'height':minh+'px'},speed).removeClass('active');
                }
            });
            //点击获取ID
            $('.menu-list dd').click(function(data){
                var dl=$(this).closest('dl');
                var dd=$(this).closest('dd');
                if(!dd.hasClass('active')){
                    $(".menu-list dd").removeClass("active");
                    dd.addClass("active");
                }else{
                    $(".menu-list dd").removeClass("active");
                };
                _this.listbool.name = dd.find("#name").html();
                _this.listbool.id = dd.find("#name").attr("categoryid");
                Bus.$emit('listbool',_this.listbool);
            });
        },
        components: {
            
        },
        methods: {
            open() {
                var _this = this;
                this.$alert(_this.alertmsg, '服务器提醒', {
                confirmButtonText: '确定',
                callback: action => {
                    // this.$message({
                    //     type: 'info',
                    //     message: `action: ${ action }`
                    // });
                }
                });
            },
            getlist(){
                var _this = this;
                var obj = {};
                // http.post('/category/categorylist.do',obj,function (response) {
                //     if(response.status == '200'){
                    	_this.data = [{
                                "categoryid": 1,
                                "categoryname": "办公",
                                "sort": 1,
                                "parentid": 2 ,
                                "amount": 15,
                                "sublist": [{
                                            "categoryid": 3,
                                            "categoryname": "招生",
                                            "sort": 2,
                                            "parentid": 2 ,
                                            "amount": 32
                                        },{
                                    "categoryid": 3,
                                    "categoryname": "招生",
                                    "sort": 2,
                                    "parentid": 2 ,
                                    "amount": 32
                                    }]
                        }]
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
    .lefttop{
        width: 220px;
        background: #fff;
    }
    .leftimg{
        width: 100%;
        height: 100px;
        line-height: 100px;
        background: url("./../../assets/icon/icon_qq.png") no-repeat center;
    }
    .lineqq{
        width: 110px;
        height: 35px;
        line-height: 35px;
        margin: auto;
        text-align: center;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
    .menu-list{
        width: 100%;
        height: 60px;
        line-height: 60px;
        overflow: hidden;
    }
    .menu-list.active .listicon{
        transform: rotate(0deg);
    }
    .menu-list > dt{
        width: 85%;
        height: 58.5px;
        line-height: 58.5px;
        margin: auto;
        font-size: 16px;
        border-bottom: 1.5px solid #eee;
    }
    .menu-list > dd{
        margin-top: 5px;
        height: 30px;
        line-height: 30px;
        color: #707070;
    }
    .menu-list > dd:hover{
        color: #2aba65;
        border-left: 2px solid #2aba65;
    }
    .menu-list > dd.active{
        color: #2aba65;
        border-left: 2px solid #2aba65;
    }
    .listicon{
        width: 10px;
        height: 10px;
        position: absolute;
        top: 5px;
        right: -40px;
        transform: rotate(-90deg);
        background: url("./../../assets/icon/icon_down1.png") no-repeat center;        
    }
</style>

