function onReady() {
  //ezek a "tesztek"
  //pont olyan ronda, mint a html, ebbol ne tanuljunk :)
  var mockArray1 = [1,4,1,1,4];
  var mockResult1 = [0,1,'end'];
  var mockArray2 = [1,2,3,4,5,6];
  var mockResult2 = [0,1,3,'end'];
  var mockArray3 = [7,1,1,1,9];
  var mockResult3 = [0, 'end'];
  var mockArray4 = [1,1,1,1,1,1];
  var mockResult4 = [0,1,2,3,4,5,'end'];
  var mockArray5 = [1,3,6,1,2,3,4];
  var mockResult5 = [0,1,2,'end'];
  var mockArray6 = [1,6,5,2,1,4,1,1,1];
  var mockResult6 = [0,1,5,'end'];
  var mockArray7 = [1,6,5,2,1,4,1,1,1,1];
  var mockResult7 = [0,1,5,9,'end'];

  var expectElement = document.querySelector('.expect pre');
  expectElement.innerHTML += '<b>.generateArray(100, 5)</b> should return an <b>array </b><br/>';
  expectElement.innerHTML += '<b>.generateArray(100, 5)</b> should return an <b>array with 100 elements </b><br/>';
  expectElement.innerHTML += '<b>.generateArray(100, 5)</b> should return an <b>array with maximum value 5 </b><br/>';
  expectElement.innerHTML += '<b>.calculateSteps(['+ mockArray1 +'])</b> should return <b>['+ mockResult1 +'] </b><br/>';
  expectElement.innerHTML += '<b>.calculateSteps(['+ mockArray2 +'])</b> should return <b>['+ mockResult2 +'] </b><br/>';
  expectElement.innerHTML += '<b>.calculateSteps(['+ mockArray3 +'])</b> should return <b>['+ mockResult3 +'] </b><br/>';
  expectElement.innerHTML += '<b>.calculateSteps(['+ mockArray4 +'])</b> should return <b>['+ mockResult4 +'] </b><br/>';
  expectElement.innerHTML += '<b>.calculateSteps(['+ mockArray5 +'])</b> should return <b>['+ mockResult5 +'] </b><br/>';
  expectElement.innerHTML += '<b>.calculateSteps(['+ mockArray6 +'])</b> should return <b>['+ mockResult6 +'] </b><br/>';
  expectElement.innerHTML += '<b>.calculateSteps(['+ mockArray7 +'])</b> should return <b>['+ mockResult7 +'] </b><br/>';

  var assertElement = document.querySelector('.assert pre');
  assertElement.innerHTML += 'Expected: <b>array</b>, got: <b>' + (Array.isArray(generateArray(100, 5)) ? 'array' : typeof generateArray(100, 5)) + '</b><br/>';
  assertElement.innerHTML += 'Expected: <b>100</b>, got: <b>' + generateArray(100, 5).length + '</b><br/>';
  assertElement.innerHTML += 'Expected: <b>5 or less</b>, got: <b>' + Math.max.apply(Math, generateArray(100, 5)) + '</b><br/>';
  assertElement.innerHTML += 'Expected: <b>'+ mockResult1 +'</b>, got: <b>' + calculateSteps(mockArray1) +'</b><br/>';
  assertElement.innerHTML += 'Expected: <b>'+ mockResult2 +'</b>, got: <b>' + calculateSteps(mockArray2) +'</b><br/>';
  assertElement.innerHTML += 'Expected: <b>'+ mockResult3 +'</b>, got: <b>' + calculateSteps(mockArray3) +'</b><br/>';
  assertElement.innerHTML += 'Expected: <b>'+ mockResult4 +'</b>, got: <b>' + calculateSteps(mockArray4) +'</b><br/>';
  assertElement.innerHTML += 'Expected: <b>'+ mockResult5 +'</b>, got: <b>' + calculateSteps(mockArray5) +'</b><br/>';
  assertElement.innerHTML += 'Expected: <b>'+ mockResult6 +'</b>, got: <b>' + calculateSteps(mockArray6) +'</b><br/>';
  assertElement.innerHTML += 'Expected: <b>'+ mockResult7 +'</b>, got: <b>' + calculateSteps(mockArray7) +'</b><br/>';

  var correctElement = document.querySelector('.correct pre');
  correctElement.innerHTML += Array.isArray(generateArray(100, 5)) + '<br/>';
  correctElement.innerHTML += (generateArray(100, 5).length === 100) + '<br/>';
  correctElement.innerHTML += (Math.max.apply(Math, generateArray(100, 5)) <= 5) + '<br/>';
  correctElement.innerHTML += (JSON.stringify(mockResult1) === JSON.stringify(calculateSteps(mockArray1))) + '<br/>';
  correctElement.innerHTML += (JSON.stringify(mockResult2) === JSON.stringify(calculateSteps(mockArray2))) + '<br/>';
  correctElement.innerHTML += (JSON.stringify(mockResult3) === JSON.stringify(calculateSteps(mockArray3))) + '<br/>';
  correctElement.innerHTML += (JSON.stringify(mockResult4) === JSON.stringify(calculateSteps(mockArray4))) + '<br/>';
  correctElement.innerHTML += (JSON.stringify(mockResult5) === JSON.stringify(calculateSteps(mockArray5))) + '<br/>';
  correctElement.innerHTML += (JSON.stringify(mockResult6) === JSON.stringify(calculateSteps(mockArray6))) + '<br/>';
  correctElement.innerHTML += (JSON.stringify(mockResult7) === JSON.stringify(calculateSteps(mockArray7))) + '<br/>';

}

function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(onReady);