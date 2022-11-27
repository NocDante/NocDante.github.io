var ALeft = document.getElementById('ActivityArrow_Left');
var ARight = document.getElementById('ActivityArrow_Right');
x=0;
cache=""

var imgArray = [
    './Image/Article/Activity/0.jpg',
    './Image/Article/Activity/1.jpg',
    './Image/Article/Activity/2.jpg',
    './Image/Article/Activity/3.jpg',
    './Image/Article/Activity/4.jpg',
    './Image/Article/Activity/5.jpg']


    ARight.onclick = function(){
    for(i=x;i<i+3;i++)
    {
        cache+=imgArray[i];
        if(i>2)
        {
          i-=2;
        }
        document.getElementById("Activity_Button"+i).innerHTML=cache;
    }
    x+=3;
}