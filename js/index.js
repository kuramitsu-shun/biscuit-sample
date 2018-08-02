window.onload = function(){
    // デバイスの向きを取得
    window.addEventListener("deviceorientation", function(e) {
        e.preventDefault();
        document.getElementById("oinfo").innerHTML = "alpha: " + parseInt(e.alpha) + " beta: " + parseInt(e.beta) + " gamma: " + parseInt(e.gamma);
    }, true);
    // デバイスの加速度、重力加速度、回転速度を取得
    window.addEventListener("devicemotion", function(e) {
        var a = e.acceleration;
        var g = e.accelerationIncludingGravity;
        var r = e.rotationRate;
        document.getElementById("ainfo").innerHTML = "X: " + a.x.toFixed(3) + " Y: " + a.y.toFixed(3) + " Z: " + a.z.toFixed(3);
        document.getElementById("ginfo").innerHTML = "X: " + g.x.toFixed(3) + " Y: " + g.y.toFixed(3) + " Z: " + g.z.toFixed(3);
        document.getElementById("rinfo").innerHTML = "alpha: " + r.alpha.toFixed(3) + " beta: " + r.beta.toFixed(3) + " gamma: " + r.gamma.toFixed(3);
    }, true);
};
