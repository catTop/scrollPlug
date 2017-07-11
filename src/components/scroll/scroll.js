/**
 * Created by catTop on 2017/7/11.
 */
export default class scrollPlug {
  /*
  * el:传入的待滚动的dom对象
  * options 是一个{}对象，里面是插件设计者自定义的一些参数，用于自定义添加新的功能
  * */
  constructor(el, options) {
    if (el instanceof HTMLElement) {
      this.domEl = el;
      this.domStyle = this.domEl.style;
      this.domStyle.overflow = "auto";
      if(!options.display){
        this.domEl.classList.toggle("noscrollbar");//隐藏滚动条
      }else{
        this.domEl.classList.toggle("scrollbar");//动态添加滚动条样式
      }
    }else{
      alert("第一个参数请传入一个DOM对象！")
    }

  }
}
