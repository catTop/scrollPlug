<template>
  <div class="listItems" id="listItems">
    <ul>
      <li v-for="item in items" class="liItem">
        <span class="setfont">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import scrollPlug from './scroll.js'
  export default{
    props: ['items'],
    mounted(){
      this.$nextTick(() => {
        this.scroll();
      })
    },
    methods: {
      scroll(){
        //第二参数是一个设置参数，display为设置滚动条显示的参数
        new scrollPlug(document.getElementById("listItems"), {display:false})
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./scroll.css"
  .listItems
    flex: 1
    overflow: hidden
    height: 100%
    .liItem
      list-style: none
      display: table
      height: 65px
      line-height: 65px
      font-size: 24px
      font-family "Agency FB"
      border-bottom: 1px solid rgba(33, 161, 33, 0.1)
      text-align: center
      width: 100%

</style>
