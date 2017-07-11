<template>
  <div id="app">
    <div class="divScroll">
      <scroll :items="items"></scroll>
    </div>

  </div>
</template>

<script>
  import  scroll from './components/scroll/scroll.vue'
  let items = [{name: "广州"}, {name: "深圳"}, {name: "上海"}, {name: "北京"}, {name: "福州"}, {name: "厦门"},
    {name: "杭州"}, {name: "东莞"}, {name: "珠海"}, {name: "香港"}, {name: "澳门"}, {name: "佛山"}, {name: "北京"}, {name: "福州"}, {name: "厦门"},
    {name: "杭州"}, {name: "东莞"}, {name: "珠海"}, {name: "香港"}, {name: "澳门"}, {name: "佛山"}, {name: "美国省"},{name:"台湾"}];
  export default {
    name: 'app',
    data(){
      return {items}
    },
    components: {
      scroll
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    overflow: hidden
    .divScroll
      display: flex
      position: absolute
      top: 130px
      bottom 80px
      width: 99%
      overflow: hidden


</style>
