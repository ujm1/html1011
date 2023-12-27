let i, str="";
let box1, dan2, dan3;
window.onload=function() {
    // 반복문 복습 - 구구단
/*
    box1=document.querySelector(".box1");
    for(i=1; i<9; i++) {
        str+="<br>2 * " + i + " = " + 2*i;
    }
    box1.innerHTML=str;
*/
    // 2단 버튼을 클릭하면 box1에 2단 출력 되록록 하라
    dan2=document.getElementById("dan2");
    box1=document.querySelector(".box1");
    // dan2.onclick=function() {
    //     str="";
    //     for(i=1; i<=9; i++) {
    //         str+="<br>2 * " + i + " = " + 2*i;
    //     }
    //     box1.innerHTML = str;
    // }

    // dan2.addEventListener("click", function() {
    //     str="";
    //     for(i=1; i<=9; i++) {
    //         str+="<br>2 * " + i + " = " + 2*i;
    //     }
    //     box1.innerHTML = str;
    // })

    // dan2.addEventListener("click", dan2_func  );
    // function dan2_func() {
    //     str="";
    //     for(i=1; i<=9; i++) {
    //         str+="<br>2 * " + i + " = " + 2*i;
    //     }
    //     box1.innerHTML = str;
    // }

    dan3=document.getElementById("dan3");
    dan3.addEventListener("click", dan3_func);

    let all=document.querySelector("#all");
    all.addEventListener("click", all_func);
    function all_func() {
        str="";
        for(i=1; i<=9; i++) {
            for(k=2; k<10; k++) {
                str += "&nbsp; &nbsp; &nbsp; "  + k + "*" + i + "=" + k*i;
            }
            str += "<br>";
        }
        box1.innerHTML = str;
    }

    
}

function dan3_func() {
    str="";
    for(i=1; i<=9; i++) {
        str+="<br>3 * " + i + " = " + 3*i;
    }
    box1.innerHTML = str;
}

// 여기가 4단
function dan4_func() {
    box1=document.querySelector(".box1");
    str="";
    for(i=1; i<=9; i++) 
        str+="<br>4 * " + i + " = " + 4*i;
    
    box1.innerHTML = str;
}
// 여기가 5단
function dan5_func() {
    str="";
    for(i=1; i<=9; i++) 
        str+="<br>5 * " + i + " = " + 5*i;
    
    box1.innerHTML = str;
}
/*
    str = 10;	// str에 10으로 덮어쓰기(str에 어떤 값이 있든 상관없이)
str += 10;	// str에 10으로 누적하기(str에 어떤 값(숫자)에 더하라, 어떤 값(문자) 연결 시켜라)
----------
str = str + 10;

function=함수=실행문 모아놓은 코드=처리문
1. 선언 : function 함수명( )	// ()가 의미하는 것은 함수다 라는 뜻
	function 함수명() {
		실행 코드 작성;
	}
2. 함수는 호출하지 않으면 실행 되지 않는다.
	함수 호출하는 방법 : 함수명();
3. 태그 안에서 onclick으로 찾아오는 함수는 반드시 onload 바깥쪽에 있어야 함
     (onload 안에서 "click"으로 찾아오는 함수는 onload 안쪽에 있어도 되고 바깥쪽에 있어도 됨)
*/
// 6단, 7단 클릭하면 찾아오는 곳
function func_comm(js) {
    str="";
    for(i=1; i<=9; i++) 
        str+="<br>" + js + " * " + i + " = " + js*i;
    
    box1.innerHTML = str;
}