
const NUMBER_OF_LEAVES = 30;

function init()
{
    var container = document.getElementById('leafContainer');
    for (var i = 0; i < NUMBER_OF_LEAVES; i++) 
    {
        container.appendChild(createALeaf());
    }
}
//求一个最接近的整数
function randomInteger(low, high)
{
    return low + Math.floor(Math.random() * (high - low));
}

//随机浮点数
function randomFloat(low, high)
{
    return low + Math.random() * (high - low);
}

function pixelValue(value)
{
    return value + 'px';
}

// 持续时间
function durationValue(value)
{
    return value + 's';
}

function createALeaf()
{
    /* Start by creating a wrapper div, and an empty img element */
    var leafDiv = document.createElement('div');
    var image = document.createElement('img');

    //获取不同图片路径
    image.src = 'images/realLeaf' + randomInteger(1, 5) + '.png';
    
    leafDiv.style.top = "-100px";

    leafDiv.style.left = pixelValue(randomInteger(0, 500));

    var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip';

    leafDiv.style.webkitAnimationName = 'fade, drop';
    image.style.webkitAnimationName = spinAnimationName;

    var fadeAndDropDuration = durationValue(randomFloat(5, 11));

    var spinDuration = durationValue(randomFloat(4, 8));

    leafDiv.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;

    var leafDelay = durationValue(randomFloat(0, 5));
    leafDiv.style.webkitAnimationDelay = leafDelay + ', ' + leafDelay;

    image.style.webkitAnimationDuration = spinDuration;

    leafDiv.appendChild(image);

    return leafDiv;
}

window.addEventListener('load', init, false);
