
var Max = 10;
let firstrandomBoomGenerate = function(oldBoomPosition){
    let randomX =Math.floor(Math.random() * (Max-1));
    let randomY = 0;
    //direction代表移动的方向，0上，1下，2左，3右
    let direction = 0 ;
    return {x:randomX,y:randomY,dir:direction};
}
let nextrandomBoomGenerate = function(oldBoomPosition){
    let ran_num = Math.floor(Math.random() *4);
    //判断是否在角落
    //1、先判断是否在四条边上
    //2.在判断位于哪个方向的边缘
    //3.判断是否在角落
    let direction = null;
    let x=oldBoomPosition.x;
    let y=oldBoomPosition.y;
    if(oldBoomPosition.x === 0 ||oldBoomPosition.x === (Max-1)|| oldBoomPosition.y === (Max-2) ||oldBoomPosition.y === 0){
        if(oldBoomPosition.x === 0 ||oldBoomPosition.x === (Max-1)){
          if(oldBoomPosition.x === 0) {
              if(oldBoomPosition.y === 0||oldBoomPosition.y === (Max-2)){
                if(oldBoomPosition.y === 0){
                    switch(ran_num){
                        case 0:
                        case 1:
                            direction = 3;
                            x += Math.floor(Math.random() *(Max-1-oldBoomPosition.x))+1;
                            return {x:x,y:y,dir:direction};
                        case 2:   
                        case 3:
                            direction = 0;
                            y += Math.floor(Math.random() *(Max-2-oldBoomPosition.y))+1;
                            return {x:x,y:y,dir:direction};
                    }
                 }
                 else{
                    switch(ran_num){
                        case 0:
                        case 1:
                            direction = 3;
                            x += Math.floor(Math.random() *(Max-1-oldBoomPosition.x))+1;      
                            return {x:x,y:y,dir:direction};
                        case 2:   
                        case 3:    
                            direction = 1;
                            y -= Math.floor(Math.random() *(oldBoomPosition.y))+1;
                            return {x:x,y:y,dir:direction};
                    } 
                 }
              }
              else{
                 switch(ran_num){
                     case 0:
                     case 1:
                        direction = 0;
                        y += Math.floor(Math.random() *(Max-2-oldBoomPosition.y))+1;
                        return {x:x,y:y,dir:direction};
                    case 2:
                        direction = 1;
                        y -= Math.floor(Math.random() *(oldBoomPosition.y))+1;
                        return {x:x,y:y,dir:direction};
                    case 3:
                        direction = 3;
                        x += Math.floor(Math.random() *(Max-1-oldBoomPosition.x))+1;
                        return {x:x,y:y,dir:direction};
                 }
              }
           }  
          else{
                if(oldBoomPosition.y === 0||oldBoomPosition.y === (Max-1)){
                    if(oldBoomPosition.y === 0){
                        switch(ran_num){
                            case 0:
                            case 1:
                                let direction = 0;
                                y += Math.floor(Math.random() *(Max-2-oldBoomPosition.y))+1;
                                return {x:x,y:y,dir:direction};
                            case 2:
                            case 3:
                                direction = 2;
                                x -= Math.floor(Math.random() *(oldBoomPosition.x))+1;
                                return {x:x,y:y,dir:direction};
                        }
                    }
                    else{
                        switch(ran_num){
                            case 0:
                            case 1:
                                direction = 1;
                                y -= Math.floor(Math.random() *(oldBoomPosition.y))+1;
                                return {x:x,y:y,dir:direction};
                            case 2:
                            case 3:
                                direction = 2;
                                x -= Math.floor(Math.random() *(oldBoomPosition.x))+1;
                                return {x:x,y:y,dir:direction};
                        }
                    }
                }
                else{
                    switch(ran_num){
                            case 0:
                            case 1:
                                direction = 0;
                                y += Math.floor(Math.random() *(Max-2-oldBoomPosition.y))+1;
                                return {x:x,y:y,dir:direction};
                            case 2:
                                direction = 1;
                                y -= Math.floor(Math.random() *(oldBoomPosition.y))+1;
                                return {x:x,y:y,dir:direction};
                            case 3:
                                direction = 2;
                                x -= Math.floor(Math.random() *(oldBoomPosition.x))+1;
                                return {x:x,y:y,dir:direction};
                        }
                }
           }    
        }
        else{
            if(oldBoomPosition.y === Max-2){
                switch(ran_num){
                            case 0:
                            case 1:
                                direction = 1;
                                y -= Math.floor(Math.random() *(oldBoomPosition.y))+1;
                                return {x:x,y:y,dir:direction};
                            case 2:
                                direction = 3;
                                x += Math.floor(Math.random() *(Max-1-oldBoomPosition.x))+1;
                                return {x:x,y:y,dir:direction};
                            case 3:
                                direction = 2;
                                x -= Math.floor(Math.random() *(oldBoomPosition.x))+1;
                                return {x:x,y:y,dir:direction};
                        }
            }
            else{
                switch(ran_num){
                            case 0:
                            case 1:
                                direction = 0;
                                y += Math.floor(Math.random() *(Max-2-oldBoomPosition.y))+1;
                                return {x:x,y:y,dir:direction};
                            case 2:
                                direction = 3;
                                x += Math.floor(Math.random() *(Max-1-oldBoomPosition.x))+1;
                                return {x:x,y:y,dir:direction};
                            case 3:
                                direction = 2;
                                x -= Math.floor(Math.random() *(oldBoomPosition.x))+1;
                                return {x:x,y:y,dir:direction};
                        }
            }

        }
    }
    else{
        switch(ran_num){
                     case 0:
                        direction = 2;
                        x -= Math.floor(Math.random() *(oldBoomPosition.x))+1;
                        return {x:x,y:y,dir:direction};
                     case 1:
                        direction = 0;
                        y += Math.floor(Math.random() *(Max-2-oldBoomPosition.y))+1;
                        return {x:x,y:y,dir:direction};
                    case 2:
                        direction = 1;
                        y -= Math.floor(Math.random() *(oldBoomPosition.y))+1;
                        return {x:x,y:y,dir:direction};
                    case 3:
                        direction = 3;
                        x += Math.floor(Math.random() *(Max-1-oldBoomPosition.x))+1;
                        return {x:x,y:y,dir:direction};
                 }
    }
};
let finalrandomBoomGenerate = function(oldBoomPosition){
    let x = oldBoomPosition.x;
    let y = Max -1;
    let direction = 0;
    return {x:x,y:y,dir:direction};
};
//获得即将改变的坐标的方法
let changePosition = function(newPosition,oldPosition){
        //先获得director的值
        //根据director的值判断改变的是老坐标中x还是y
        //获得新的坐标
        //老坐标-新坐标 = 改变的距离
        //带入算式
        //..
        if(oldPosition == undefined){
            return null;
        }
        let diff = cc.pSub(newPosition,oldPosition);
        if (diff.x == 0){
            let aug = (Math.random() *Math.abs(diff.y)) + (10 - newPosition.y);
            //return {y1:oldPosition.y;y2:newPosition.y;direction}
            if(oldPosition.y > newPosition.y)
            {
                return Math.floor((oldPosition.y + aug)) + "-" + Math.floor((newPosition.y + aug));
            }
            else{
                return Math.floor((newPosition.y + aug)) + "-" + Math.floor((oldPosition.y + aug));
            }
        }
        else
        {
            let aug = (Math.random() *Math.abs(diff.x)) + (10 - newPosition.x);
            if(oldPosition.x > newPosition.x)
            {
                return Math.floor((oldPosition.x + aug)) + "-" + Math.floor((newPosition.x + aug));
            }
            else{
                return Math.floor((newPosition.x + aug)) + "-" + Math.floor((oldPosition.x + aug));
            }
            //return {x1:oldPosition.x;x2:newPosition.x;direction}
        }
        
        //return Math.abs(diff.x == 0 ? diff.y:diff.x);
    };
module.exports = {
    firstrandomBoomGenerate,
    nextrandomBoomGenerate,
    finalrandomBoomGenerate,
    changePosition
}