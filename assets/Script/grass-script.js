cc.Class({
    extends: cc.Component,

    properties: {
        restartModel:cc.Node
    },


    onLoad: function () {
        this.node.on('touchstart',this.onTouchStart,this);
        this.restartModel.on('touchstart',function(){},this)
        this.restartModel.on('touchmove',function(){},this)
        this.restartModel.on('touchend',function(){},this)
        this.restartModel.on('touchcancel',function(){},this)
    },
    
    onTouchStart:function(){
        this.restartModel.active = true;
    }

});
