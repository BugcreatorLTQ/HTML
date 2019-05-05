"use scrict"

function draw() {
    var c = document.getElementById("test");
    var ctx = c.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 200);
    ctx.lineTo(170, 50);
    ctx.closePath();
    ctx.stroke();


    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI * 2);
    ctx.stroke();

    ctx.font = "40px Arial";
    ctx.fillText("TEST", 100, 100);
    ctx.strokeText("RUA", 20, 100);

    var grd = ctx.createLinearGradient(0, 0, 5, 200, 0, 5);
    grd.addColorStop(0, "#FFF");
    grd.addColorStop(1, "#000");

    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.arc(50, 50, 50, 0, Math.PI * 2);
    ctx.fill();

}

$(function() {
    $("#out").click(function() {
        $("p").fadeOut(2000);
    })
    $("#in").click(function() {
        $("p").fadeIn(2000);
    })
    $("#test_button").click(function(){
        $("canvas").slideToggle(2000);
    })
})