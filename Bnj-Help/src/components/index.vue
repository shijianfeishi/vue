<template>
  <div class="wp100 indexdiv">
      <div class="indexheader">
          <div class="indexheaderinder">
            <page-header></page-header>
          </div>
      </div>
      <div class="indexcontent">
          <div class="indexcontentinder">
              <div class="contentleft fl">
                  <div class="contentlefttop">
                      <content-lefttop></content-lefttop>
                  </div>
                  <div class="contentleftbottom">
                       <content-leftbottom></content-leftbottom>
                  </div>
              </div>
              <div class="contentright fr">
                    <div class="contentrighttop">
                        <content-righttop></content-righttop>
                    </div>
                    <div class="contentrightbottom">
                        <content-rightbottom></content-rightbottom>
                    </div>
              </div>
          </div>
      </div>
      <div class="indexfooter"></div>
  </div>
</template>

<script>
import pageHeader from './global/head.vue'
import contentLefttop from './global/contentlefttop.vue'
import contentRighttop from './global/contentrighttop.vue'
import contentLeftbottom from './global/contentleftbottom.vue'
import contentRightbottom from './global/contentrightbottom.vue'
import $ from 'jquery'
import Vue from 'vue'

export default {
    data() {
        return {
           
        };
    },
    created() {

    },
    mounted () {
        // 自适应浏览器高度
        var _this = this;
        _this.h = $(window).height();
        $('.indexcontent').css('height',(_this.h-160)+'px');
        $('.contentrightbottom').css('height',(_this.h-280)+'px');        
        $('.contentleftbottom').css('height',(_this.h-380)+'px');        
        window.onresize = function temp() {
            var _this = this;
            _this.h = $(window).height();
            $('.indexcontent').css('height',(_this.h-160)+'px');
            $('.contentrightbottom').css('height',(_this.h-280)+'px');
            $('.contentleftbottom').css('height',(_this.h-380)+'px');
        };
    },
    components: {
        pageHeader,
        contentLefttop,
        contentRighttop,
        contentLeftbottom,
        contentRightbottom
    },
    methods: {
        
    },
    computed: {
        
    },
    watch: {

    }
}
</script>

<style scoped>
    .indexdiv{
        width: 100%;
        height: 100%;
        background: #e8e8e8;
    }
    .indexheader{
        width: 100%;
        height: 80px;
        margin-bottom: 20px;
        background: #fff;
    }
    .indexheaderinder{
        width: 1000px;
        height: 80px;
        margin: auto;
    }
    .indexcontent{
        width: 100%;
        background: #e8e8e8;
    }
    .indexcontentinder{
        width: 1000px;
        height: 100%;
        margin: auto;
    }
    .contentleft{
        width: 220px;
        height: 100%;
        background: #fff;
    }
    .contentright{
        width: 760px;
        height: 100%;
        background: #fff;
    }
    .indexfooter{
        width: 100%;
        height: 60px;
        background: #fff;
        position: fixed;
        bottom: 0px;
        left: 0px;
    }
    .contentrightbottom,.contentleftbottom{
        overflow-y: auto;
        overflow-x: hidden;
    }
</style>


