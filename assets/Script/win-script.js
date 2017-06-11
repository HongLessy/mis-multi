cc.Class({
    extends: cc.Component,

    properties: {
        winModel:cc.Node,
    },

    onLoad: function () {
        cc.find('Canvas').on('win',this.onWin,this)
    },
    
    onWin: function(){
        this.winModel.active = true;
    }

});
