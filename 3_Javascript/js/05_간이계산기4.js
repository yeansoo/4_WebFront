const num1=document.getElementById("num1");
const num2=document.getElementById("num2");
const result=document.getElementById("result");

function calc(btn){
    
    // 현재 input요소에 작성된 값을 얻어와 변수에 저장
    const n1=Number(num1.value);
    const n2=Number(num2.value);
    const op=btn.innerText;

    // eval("코드 형식의 문자열")
    // -> 매개변수의 문자열을 JS코드로 해석/수행하는 함수 
    // -> 속도가 느림 + 보안이슈 

    // 해결 방법 : new Function() 사용

    // result.innerText=eval(n1+op+n2);

    result.innerText=new Function("return "+ n1+op+n2)();
}