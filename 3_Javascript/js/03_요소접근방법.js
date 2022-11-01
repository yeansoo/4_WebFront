// id로 접근하기
function fnTest1(){
    // id가 div1인 요소를 얻어와 상수형 변수 div1에 저장
    const div1=document.getElementById("div1");

    // 접근한 요소의 배경색을 얻어와 변수에 저장 
    const bgColor=div1.style.backgroundColor;

    if(bgColor=='red'){
        div1.style.backgroundColor="yellow";
    }else{
        div1.style.backgroundColor="red";
    }
}


// class로 접근하기 
function fnTest2(){
    // 요소 여러개를 한번에 접근하는 경우 배열 형태로 반환됨
    const arr=document.getElementsByClassName("div2");

    // console.log(arr[0]);
    // console.log(arr[1]);
    // console.log(arr[2]);

    arr[0].style.backgroundColor="red";
    arr[1].style.backgroundColor="yellow";
    arr[2].style.backgroundColor="green";

    const colorarr=["red","yellow","green"];

    // Java와 for문 형식 같음
    for(let i=0;i<arr.length;i++){
        arr[i].innerText=i+"번째 요소 입니다.";

       
    }
}

// 태그명으로 접근하기 
function fnTest3(){
    const arr=document.getElementsByTagName("li");

    for(let i=0;i<arr.length;i++){
        const num=arr[i].innerText;

        arr[i].style.backgroundColor="rgb(100,"+num+",130)";
    }

}

// input태그의 값(value) 얻어오기/ 변경하기
function fnTest4(){
    // input 요소 접근하기
    const input=document.getElementById("inputTest");

    // input 관련 태그에 작성된 값을 나타내는 속성 
    // == value

    // input요소에 작성된 값을 얻어와 alert로 출력
    alert(input.value);

    // input요소에 ""(빈문자열) 대입 == 값을 삭제
    input.value="";
}