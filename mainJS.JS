var iniPos = $('h1').offset();
var currentPosition = $('h1').offset();

let movement = function () {
    if((currentPosition.top === iniPos.top)&&(currentPosition.left < iniPos.left +200)){
        $('h1').offset({left: currentPosition.left});
        currentPosition.left++;
    }
    else if ((currentPosition.left === iniPos.left+200)&&(currentPosition.top < iniPos.top+200)){
        $('h1').offset({top: currentPosition.top});
        currentPosition.top++;
    }
    else if ((currentPosition.top === iniPos.top+200)&&(iniPos.left < currentPosition.left)){
        $('h1').offset({left: currentPosition.left});
        currentPosition.left--;
    }
    else if ((currentPosition.left === iniPos.left)&&(iniPos.top < currentPosition.top)){
        $('h1').offset({top: currentPosition.top});
        currentPosition.top--;
    }
};

setInterval(movement,  30);
