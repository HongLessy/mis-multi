let id2key = {
    0: '↑',
    1: '↓',
    2: '←',
    3: '→'
};

cc.Class({
    extends: cc.Component,

    editor: {
        //executeInEditMode: true,
    },

    properties: {
        glass: cc.Node,
        boomPrefab: cc.Prefab,
        _moduleScript: null,
        dirLabel:cc.Label,
        player: cc.Node,
        //cal_Label:cc.Node
    },

    onLoad: function () {
        let moduleScript = require('module-script');
        this._moduleScript = moduleScript;
        window.boomTimes = 10;
        let firstrandomBoomGenerate = this._moduleScript.firstrandomBoomGenerate;
        this.generateBoom(firstrandomBoomGenerate);
        //cc.find('Canvas').on('touch-boom',this.generateBoom,this)
        cc.find('Canvas').on('touch-boom',this.onTouchBoom,this)
    },
    
    onTouchBoom:function(e){
        let boomGenerateFunc = null;
        if(window.boomTimes == 0){
            cc.find('Canvas').emit('win');
        }
        if(window.boomTimes == 1){
            boomGenerateFunc = this._moduleScript.finalrandomBoomGenerate;
        }else if(window.boomTimes <= 10 && window.boomTimes > 1){
            boomGenerateFunc = this._moduleScript.nextrandomBoomGenerate;
        }
        if(boomGenerateFunc){
            this.generateBoom(boomGenerateFunc,e.detail);
        }else{
            console.log('end');
        }
    },

    generateBoom: function(boomGenerateFunc,oldBoomGrid){
        //let boomGrid = this._moduleScript.firstrandomBoomGenerate();
        let boomGrid = boomGenerateFunc(oldBoomGrid);
        let boom = cc.instantiate(this.boomPrefab);
        this.glass.addChild(boom);
        boom.getComponent('sweeper-script').init(boomGrid);
    
        boom.position = cc.v2(boomGrid.x * boom.width, boomGrid.y * boom.height);
        if(window.boomTimes != 10){
            //boom.getComponent('cc.Sprite').enabled = false;
            boom.opacity = 0;        
        }else{
            this.player.position = boom.position;
        }
        window.boomTimes--;
        let deltaDistance = this._moduleScript.changePosition(boomGrid,oldBoomGrid);
        
        this.dirLabel.string = id2key[boomGrid.dir];
        if(deltaDistance){
            this.dirLabel.string += " " +deltaDistance;
        }
        /*if(deltaDistance){
            this.cal_Label.string = deltaDistance;
        }*/
    }
});

