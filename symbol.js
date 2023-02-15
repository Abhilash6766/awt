const RED = Symbol('red');
const ORANGE = Symbol('orange');
const YELLOW= Symbol('yellow');
const BLUE= Symbol('blue');
const cat = Symbol('blue');
// BLUE = null;
function getTheartLevel(color)
{
    switch(color){
        case RED:
            return 'APPLE';
        case ORANGE:
                return 'ORANGE';
        case YELLOW:
                    return 'MANGO';
        case BLUE:
                    return 'SKY';
        default:
                return "I don't know that color!"
    }
}
console.log(getTheartLevel(BLUE))