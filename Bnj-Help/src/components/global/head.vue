<template>
  <div class="wp100%">
      <div @click='reloadwindow' class="fl headleft fg">
          <slot>帮助中心</slot>
      </div>
      <div class="fr headright">
          <span>400-091-2819</span>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        };
    },
    created() {
        
    },
    mounted () {
        
    },
    components: {
        
    },
    methods: {
        reloadwindow(){
            window.location.reload();
        }
    },
    computed: {
        
    },
    watch: {

    }
}
</script>

<style scoped>
    .headleft{
        width: 240px;
        height: 80px;
        line-height: 80px;
        color: #4f5151;
        text-indent: 120px;
        font-size: 22px;
        background: url("./../../assets/logo/bnj-logo.png") no-repeat left;
    }
    .headright{
        width: 200px;
        height: 80px;
        line-height: 80px;
        color: #4f5151;
        text-indent: 30px;
        font-size: 22px;
        background: url("./../../assets/icon/icon_phone.png") no-repeat left;
    }
</style>


