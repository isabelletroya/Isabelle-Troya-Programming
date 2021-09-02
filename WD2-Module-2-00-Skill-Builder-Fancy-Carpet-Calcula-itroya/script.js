const widthElement = document.getElementById('width');
const lengthElement = document.getElementById('length');
const areaElement = document.getElementById('area-box');

function showCarpetArea(width, length, area) {
  let widthPx;
  let lengthPx;
  
  if (width > length) {
    widthPx = 300;
    lengthPx = Math.max(20, (length / width) * 300); 
  } else {
    widthPx = (width / length) * 300;   
    lengthPx = 300;
  }

  areaElement.style.opacity = 1;
  window.setTimeout(()=> {
    widthElement.innerHTML = width;
    widthElement.style.opacity = 1;
    areaElement.style.width = widthPx + "px";
    window.setTimeout(()=> {
      lengthElement.innerHTML = length;
      lengthElement.style.opacity = 1;
      areaElement.style.height = lengthPx + "px";
      window.setTimeout(()=> {
        areaElement.style.fontSize = Math.min(lengthPx, 60) + "px";
        areaElement.style.lineHeight = lengthPx + "px";
        areaElement.innerHTML = area;
      }, 700);
    }, 700);
  }, 700);
}

/* 
The showCarpetArea function takes three values:
	1. The width of the carpet
	2. The height of the carpet
	3. The area of the carpet

Try passing different values to showCarpetArea() 
to see how it changes the visualization!
*/

// Your code here
let width = Number(prompt("Room width in feet"));
let length = Number(prompt("Room length in feet"));

let area = Number(width * length);


showCarpetArea(width, length, area);

// There are some inconsistenceses with the use of the words "length" and "height". I was advised to leave it as length and width as the showCarpetArea(width, length, area) states the use of length. I was not sure if the use of the word height and switching everything around would cause my code to crash.
//
