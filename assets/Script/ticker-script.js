cc.Class({
    extends: cc.Component,

    properties: {
        _startTimeStamp: null,
        deltaTime: 5,
        tickerLabel: cc.Label,
        restartModel: cc.Node,
        _win: false,
    },

    onLoad: function () {
        cc.find('Canvas').on('step',this.onStep,this);
        cc.find('Canvas').on('win',this.onWin,this);
    },
    
    onWin:function(){
        this._win = true;  
    },
    
    start: function(){
      this._startTimeStamp = Date.now();  
    },
    
    onStep: function(){
      this._startTimeStamp = Date.now();  
    },
    
    update: function (dt) {
        if(this._win){return;}
    let currentTimeStamp = Date.now();
       if(currentTimeStamp< (this._startTimeStamp + this.deltaTime * 1000)){
           this.tickerLabel.string = Math.floor((this.deltaTime * 1000 - (currentTimeStamp - this._startTimeStamp))/1000);
       }else{
           this.restartModel.active = true;
       }
    }

});
