console.log('hello');

window.onload = function() {
  console.log('onLoad');
  var play = false;
  var volumeArray = [0, 0.33, 0.66, 1];
  var volumeIndex = volumeArray.length;
  var volumeDirection = -1;

  var player = document.getElementById('player');

  var playBtn = document.getElementsByClassName('play-btn')[0];

  console.log('playBtn', playBtn);

  playBtn.onclick = function() {
    if (play) {
      player.pause();
    } else {
      player.play();
    }
    play = !play;

  };

  // var svg = document.getElementsByClassName('svg')[0];

  // svg.setAttribute('height', '100px');

  // svg.setAttribute('width', '100px');

  // var svgPlayBtn = document.getElementsByClassName('svg-play-btn')[0];

  // svgPlayBtn.setAttribute('r', '10px');




  // var svgAnimate = document.getElementsByClassName('svg-animate')[0];

  // console.log('svgAnimate', svgAnimate);

  // var setValue = `M 0,0
  //   C 50,0 50,0 100,0
  //   100,50 100,50 100,100
  //   50,100 50,100 0,100
  //   0,50 0,50 0,0
  //   Z;

  //   M 50,0
  //   C 50,0 50,0 50,0
  //   50,0 100,100 100,100
  //   50,100 50,100 0,100
  //   12.5,75 12.5,75 25,50
  //   Z;

  //   M 0,0
  //   C 50,0 50,0 100,0
  //   100,50 100,50 100,100
  //   50,100 50,100 0,100
  //   0,50 0,50 0,0
  //   Z;`;

  // svgAnimate.setAttribute('values', setValue);


  var svgAnimatePlay = document.getElementsByClassName('svg-animate-play')[0];

  function cCoord(x, y) {
    if (typeof y === 'undefined') {
      y = 0;
    }
    return `${x},${y} 0,0 ${x},${y}`;
  }

  var heightSizeStart = 2.5;
  var heightSizeEnd = 5;

  var widthSizeStart = 5;
  var widthSizeEnd = 1;

  var setPlayValue = `

    M 0,5
    c ${cCoord(widthSizeEnd, 0)}
    ${cCoord(0, -heightSizeEnd)}
    ${cCoord(-widthSizeEnd/2, 0)}
    Z;`;
    //${heightSizeEnd - heightSizeStart/2}

    svgAnimatePlay.setAttribute('values', setPlayValue);

  // playBtn.onclick = function() {
  //   if (volumeIndex > 0 || volumeIndex < ) {
  //     volumeIndex *= -1;
  //   }
  //   volumeIndex += volumeDirection;

  //   console.log('volume ' + volumeArray[volumeIndex]);
  //   player.volume = volumeArray[volumeIndex];
  // }
}



