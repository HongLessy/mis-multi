let id2key = {
    0: 'up',
    1: 'down',
    2: 'left',
    3: 'right'
};
cc.Class({
    extends: cc.Component,

    properties: {
        _anim: null,
        moveSpeed:50,
        _initSpriteFrame:null,
        _action:null,
    },

    onLoad: function () {
        this._anim = this.getComponent(cc.Animation);
        cc.find('Canvas').on('player-move',this.onPlayerMove,this);
        this.node.zIndex = 1000;
        this._initSpriteFrame = this.getComponent(cc.Sprite).spriteFrame;
    },  

    onPlayerMove:function(e){
        let boomGrid = e.detail._boomGrid;
        let boomNode = e.detail.node;
        this._anim.stop();
        if(this._action){
            this.node.stopAction(this._action);
        }
        this._anim.play(id2key[boomGrid.dir]);
        let distance = cc.pSub(boomNode.position,this.node.position);
        let distance1D = Math.abs(distance.x +distance.y);
        this._action =  cc.sequence(
                cc.moveTo(distance1D/this.moveSpeed,boomNode.x,boomNode.y),
                cc.callFunc(this.onMoveEnd,this)
            );
        this.node.runAction(
           this._action
        );
    },
    onMoveEnd:function(){
                console.log('move-end');
                this._action = null;
                this._anim.stop();
                this.getComponent(cc.Sprite).spriteFrame = this._initSpriteFrame;

    },

});
