var apple = 1;
const a = "Fruit/apple-g56a141b7e_640.png";
var orange = 2;
const o = "Fruit/orange-g37e0fbbbb_640.png";
var pear = 3;
const p = "Fruit/pear-gf679252a5_1280.png";
var pineapple = 4;
const pi = "Fruit/pineapple-g0b83a3b6c_640.png";

var fruit = 1;

var player;

function myFunction(choice)
{
    player = choice;
    if(player == fruit) //I couldn't find a reasonable way to make it switch once it went to play again.
    {
        document.getElementById("con").innerHTML= "You got it right!"
        document.body.style.backgroundColor = "green";
    }
    else
    {
        document.getElementById("con").innerHTML= "You got it wrong!"
        document.body.style.backgroundColor = "red";
    }
}

function choosePic() 
{
    document.getElementById("con").innerHTML= "What fruit is this?"
    document.body.style.backgroundColor = "white";
    var index = Math.random();
    if(index <0.25)
    {
        document.getElementById("myPicture").src = o;
        fruit = 2;
    }
    if(index >0.25 && index < 0.5)
    {
        document.getElementById("myPicture").src = a;
        fruit = 1;
    }
    if(index >0.5 && index < 0.75)
    {
        document.getElementById("myPicture").src = p;
        fruit = 3;
    }
    else
    {
        document.getElementById("myPicture").src = pi;
        fruit = 4;
    }
}
