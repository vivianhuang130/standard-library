
    document.getElementById("showImage").onclick = function() {
      document.getElementById("theImage").style.visibility = "visible";
    }

    document.getElementById("hideImage").onclick = function() {
      document.getElementById("theImage").style.visibility = "hidden";
    }

    //
    // var img = new Image();
    // // // img = document.getElementById("theImage").src
    // img.src = "https://static.pexels.com/photos/356378/pexels-photo-356378.jpeg";
    // var canvas = document.getElementById('canvas');
    // var ctx = canvas.getContext('2d');
    // img.crossOrigin="anonymous";
    // window.img.onload = function() {
    //   ctx.drawImage(img, 0, 0);
    //   img.style.display = 'none';
    // };
    // var color = document.getElementById('color');
    // function pick(event) {
    //   var x = event.layerX;
    //   var y = event.layerY;
    //   var pixel = ctx.getImageData(x, y, 1, 1);
    //   var data = pixel.data;
    //   var rgba = 'rgba(' + data[0] + ', ' + data[1] +
    //              ', ' + data[2] + ', ' + (data[3] / 255) + ')';
    //   color.style.background =  rgba;
    //   color.textContent = rgba;
    // }
    // canvas.addEventListener('mousemove', pick);
