System.register("chunks:///_virtual/GameManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,o,i,a,n,r,s,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,i=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){n=e.cclegacy,r=e._decorator,s=e.Label,l=e.Component}],execute:function(){var c,h,v,m,f;n._RF.push({},"7b7f1pRemtLS43j3K4dJ7x7","GameManager",void 0);var u=r.ccclass,g=r.property;e("GameManager",(c=u("GameManager"),h=g(s),c((f=t((m=function(e){function t(){for(var t,o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return t=e.call.apply(e,[this].concat(n))||this,i(t,"movesLabel",f,a(t)),t.movesLeft=30,t.solution=[0,90,90,180,270,90,90,90,0,90,90,180,0,90,90,90],t}o(t,e);var n=t.prototype;return n.start=function(){this.movesLabel&&(this.movesLabel.string="Moves Left: "+this.movesLeft);var e=this.node.getChildByName("WinPanel"),t=this.node.getChildByName("LosePanel");e&&(e.active=!1),t&&(t.active=!1)},n.consumeMove=function(){if(!(this.movesLeft<=0)&&(this.movesLeft--,this.movesLabel&&(this.movesLabel.string="Moves Left: "+this.movesLeft),this.movesLeft<=0)){var e=this.node.getChildByName("LosePanel");e&&(e.active=!0)}},n.checkPath=function(){var e=this.node.getChildByName("Grid");if(e){for(var t=e.children,o=!0,i=0;i<t.length;i++){var a=t[i].getComponent("Tile");if(!a){o=!1;break}console.log("Tile",i,"Expected:",this.solution[i],"Actual:",a.rotationState),a.rotationState!==this.solution[i]&&(o=!1)}var n=this.node.getChildByName("StatusLabel");if(o){var r=this.node.getChildByName("WinPanel");if(r&&(r.active=!0),n){var l=n.getComponent(s);l&&(l.string="Correct Path!")}console.log("PUZZLE SOLVED")}else{if(n){var c=n.getComponent(s);c&&(c.string="Wrong Path!")}console.log("PUZZLE NOT SOLVED")}}},t}(l)).prototype,"movesLabel",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=m))||v));n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./GameManager.ts","./Tile.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Tile.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,n,i,r,a;return{setters:[function(t){e=t.inheritsLoose},function(t){o=t.cclegacy,n=t._decorator,i=t.Node,r=t.find,a=t.Component}],execute:function(){var s;o._RF.push({},"19133YSo7NGOL8CtQ4EhchE","Tile",void 0);var c=n.ccclass;t("Tile",c("Tile")(s=function(t){function o(){for(var e,o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))||this).rotationState=0,e}e(o,t);var n=o.prototype;return n.start=function(){this.node.on(i.EventType.TOUCH_END,this.rotateTile,this)},n.rotateTile=function(){this.rotationState+=90,this.rotationState>=360&&(this.rotationState=0),this.node.setRotationFromEuler(0,0,this.rotationState);var t=r("Canvas");if(t){var e=t.getComponent("GameManager");e&&e.consumeMove()}},o}(a))||s);o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});