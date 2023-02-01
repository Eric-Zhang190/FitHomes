// components/bottomDialog/bottomDialog.js
Component({
  properties: {
    item2P2C: {
      type: Object,
      value: {},
    },
    frameTitle: {
      type: String,
      value: '',
    }
  },
  data: {
    flag:false,
    wrapAnimate:'wrapAnimate',
    bgOpacity:0,
    frameAnimate:'frameAnimate',
    item2P2C: {}
  },
  
  methods: {
    showFrame() {
      this.setData({ flag: true, wrapAnimate: 'wrapAnimate', frameAnimate: 'frameAnimate' });
    },
    hideFrame(e) {
      const that= this;
      that.setData({ wrapAnimate: 'wrapAnimateOut', frameAnimate: 'frameAnimateOut' });
      setTimeout(()=>{
        that.setData({ flag: false})
      },400);
    },
    onCancle(e){
      this.hideFrame(e);
      this.triggerEvent('myCancel');
    },
    
    onConfirm(e){      
      this.hideFrame(e);
      this.triggerEvent('myConfirm');
    },
    catchNone(){
      //阻止冒泡
    },
    _showEvent() {
      this.triggerEvent("showEvent");
    },
    _hideEvent() {
      this.triggerEvent("hideEvent");
    }
  }
})

