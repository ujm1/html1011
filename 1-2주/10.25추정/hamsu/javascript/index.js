let i;
window.onload = function () {
  let btn1 = document.getElementById("btn1");
  let num1 = document.getElementById("num1");
  let result1 = document.querySelector("#result1");
  let su;

  btn1.onclick = function () {
    su = Number(num1.value);
    if (su % 2 == 0) {
      result1.innerHTML = "짝수";
    }
    if (su % 2 == 1) {
      result1.innerHTML = "홀수";
    }
  };

  let btn2 = document.getElementById("btn2");
  let num2 = document.getElementById("num2");
  let result2 = document.querySelector("#result2");
  let multiply;

  btn2.onclick = function () {
    multiply = Number(num2.value);
    if (multiply % 3 == 0) {
      result2.innerHTML = "3의 배수";
    } else {
      result2.innerHTML = "3의 배수가 아닙니다.";
    }
  };
  let btn3, num3, result3;
  btn3 = document.getElementById("btn3");
  num3 = document.getElementById("num3");
  result3 = document.querySelector("result3");
  let age;

  btn3.onclick = function () {
    age = Number(num3.value);
    if (age >= 19) {
      result3.innerHTML = " 성인";
    } else {
      result3.innerHTML = "성인이 아닙니다.";
    }
  };

  let btn4 = document.getElementById("btn4");
  let num4 = document.getElementById("num4");
  let result4 = document.querySelector("#result4");
  let rank;

  btn4.onclick = function () {
    age = Number(num4.value);
    if (rank > 60) {
      result4.innerHTML = " 합격";
    } else {
      result4.innerHTML = "불합격";
    }
  };

  let btn5 = document.getElementById("btn5");
  let num5 = document.getElementById("num5");
  let result5 = document.getElementById("result5");
  let point;

  btn5.onclick = function () {
    let ja = Number(num5.value);
    
    point= parseInt(ja / 10);
    switch (point) {
      case 10:
        point = "a";
        break;
      case 9:
        point = "b";
        break;
      case 8:
        point = "c";
        break;
      case 7:
        point = "d";
        break;
      default:
        point = "f";
    
    }
    result5.innerHTML = point;
  };

};
