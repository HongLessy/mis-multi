cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        
    },
    //开始按钮
    on_start_click:function(){
        //这里是防误触操作
        if(this.started === true){
            return;
        }
        this.started = true;
        cc.director.loadScene("Game");
    },
    on_exit_click:function(){
        cc.director.end();
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});