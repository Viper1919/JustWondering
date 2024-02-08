var i = 60;
var e = 80;
function IfNo()
{
    e += 10;
    i += 10;
    document.getElementById("Y").style.height = i + "px";
    document.getElementById("Y").style.width = e + "px";
    if(i == 130)
    {
        window.alert("PLEASEEEE")
    }
}

function IfYes()
{

    document.getElementById("Y").style.height = 60 + "px";
    document.getElementById("Y").style.width = 80 + "px";
    window.alert("HEHE I love u you");
}
