var _ = require('common/util');
var layer={
    background:0,
    menuPlay:1,
    menuOption:2,
    menuBelajar:3,
    menuExit:4,
    takeMenu:5,
    count:6
};

var xObj=98,yObj=72;

_.extend(exports, {
    ':load': function() {
        console.log('View was loaded');
        var self=this;
        var scene=this.get('scene');
        scene.setLayers(layer.count);
        scene.defineSpritesheet('bg',app.imageURL('menuJadi.png',320,240));
        scene.setLayerBackground(layer.background,{
            sprite:'bg',
            x:0,
            y:0,
            width:320,
            height:240,
            tile:false
        });
        scene.add({
            sprite:'bg',
            x:0,
            y:0,
            layer:0,
            frame:0
        });
        //menu play
        scene.defineSpritesheet('play',app.imageURL('play.png'),45,23);
        scene.setLayerBackground(layer.menuPlay,{
            sprite:'play',
            x:137,
            y:75,
            width:45,
            height:23,
            tile:false
        });
        scene.add({
            sprite:'play',
            x:0,
            y:0,
            layer:layer.menuPlay,
            frame:0
        });
        //menu option
        scene.defineSpritesheet('option',app.imageURL('option.png'),57,23);
        scene.setLayerBackground(layer.menuOption,{
            sprite:'option',
            x:130,
            y:105,
            width:57,
            height:23,
            tile:false
        });
        scene.add({
            sprite:'option',
            x:0,
            y:0,
            layer:layer.menuOption,
            frame:0
        });
        //menu belajar
        scene.defineSpritesheet('belajar',app.imageURL('belajar.png'),60,23);
        scene.setLayerBackground(layer.menuBelajar,{
            sprite:'belajar',
            x:130,
            y:135,
            width:60,
            height:23,
            tile:false
        });
        scene.add({
            sprite:'belajar',
            x:0,
            y:0,
            layer:layer.menuBelajar,
            frame:0
        });
        //menu exit
        scene.defineSpritesheet('exit',app.imageURL('exit.png'),40,23);
        scene.setLayerBackground(layer.menuExit,{
            sprite:'exit',
            x:140,
            y:165,
            width:40,
            height:23,
            tile:false
        });
        scene.add({
            sprite:'exit',
            x:0,
            y:0,
            layer:layer.menuExit,
            frame:0
        });
        //menu takeMenu
        scene.defineSpritesheet('take',app.imageURL('take.png'),124,29);
        scene.setLayerBackground(layer.takeMenu,{
            sprite:'take',
            x:98,
            y:72,
            width:124,
            height:29,
            tile:false
        });
        scene.add({
            sprite:'take',
            x:0,
            y:0,
            layer:layer.takeMenu,
            frame:0
        });
                
    },

    ':resized': function(width, height) {
        console.log('View was resized to ' + width + 'x' + height);
    },

    ':keydown': function(key) {
        console.log('Key down: '+ key);
    },

    ':keyup': function(key) {
        console.log('Key up: ' + key);
    },

    ':keypress': function(key) {
        console.log('Key press: ' + key);
        var self = this;
        var scene = this.get('scene');
		
        if(key === 'up'){
            yObj-=30;
            if(yObj<72){
                yObj=162;
                scene.changeLayer(layer.takeMenu, {
                    x: xObj, 
                    y: 162, 
                    width:124, 
                    height:29, 
                    visible:true
                });
            }else{
                scene.changeLayer(layer.takeMenu, {
                    x: xObj, 
                    y: yObj, 
                    width:124, 
                    height:29, 
                    visible:true
                });
            }
			
			
        }
        else if(key === 'down'){
            yObj+=30;
            if(yObj>162){
                yObj=72;
                scene.changeLayer(layer.takeMenu, {
                    x: xObj, 
                    y: 72, 
                    width:124, 
                    height:29, 
                    visible:true
                });
            }else{
                scene.changeLayer(layer.takeMenu, {
                    x: xObj, 
                    y: yObj, 
                    width:124, 
                    height:29, 
                    visible:true
                });
            }
			
        }
        else if(key === 'left'){
            yObj-=30;
            if(yObj<72){
                yObj=162;
                scene.changeLayer(layer.takeMenu, {
                    x: xObj, 
                    y: 162, 
                    width:124, 
                    height:29, 
                    visible:true
                });
            }else{
                scene.changeLayer(layer.takeMenu, {
                    x: xObj, 
                    y: yObj, 
                    width:124, 
                    height:29, 
                    visible:true
                });
            }
        }
        else if(key === 'right'){
            yObj+=30;
            if(yObj>162){
                yObj=72;
                scene.changeLayer(layer.takeMenu, {
                    x: xObj, 
                    y: 72, 
                    width:124, 
                    height:29, 
                    visible:true
                });
            }else{
                scene.changeLayer(layer.takeMenu, {
                    x: xObj, 
                    y: yObj, 
                    width:124, 
                    height:29, 
                    visible:true
                });
            }
        }
    },

    ':active': function() {
        console.log('View is active');
    },

    ':inactive': function() {
        console.log('View is inactive');
    }
});
