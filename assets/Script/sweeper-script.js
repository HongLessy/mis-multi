cc.Class({
    extends: cc.Component,

    properties: {
        _boomGrid: null,
    },
    
    init: function(boomGrid){
        this._boomGrid = boomGrid;
    },

    onLoad: function () {
        this.node.on('touchstart',this.onTouchStart,this)
    },  

    onTouchStart: function(){
        cc.find('Canvas').emit('step');
        let modules = require("module-script");
        this._moduleScript = modules;
        let dir = this._moduleScript.firstrandomBoomGenerate();
        cc.find('Canvas').emit('touch-boom',this._boomGrid);
        cc.find('Canvas').emit('player-move',this);
        cc.log(dir);
        //this.node.getComponent('cc.Sprite').enabled = true;
        this.node.opacity = 255;
        this.scheduleOnce(function(){
            this.node.removeFromParent(true);
        }.bind(this),0.3)
        //this.node.removeFromParent(true);
        return false;
    },

});
