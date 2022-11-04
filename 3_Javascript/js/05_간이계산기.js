function getResult(method){
    const input1=Number(document.getElementById("input-1").value);
    const input2=Number(document.getElementById("input-2").value);

    let result;
    switch(method){
        
        case '+': result=input1+input2; break;
        case '-': result=input1-input2; break;
        case '*': result=input1*input2; break;
        case '/': result=input1/input2; break;
        case '%': result=input1%input2; break;
            default:
                break;
    }
    

    document.getElementById("result").innerText=result;
    
}

function minus(){
    method="-";

    getResult(method);
}
function plus(){
    method="+";

    getResult(method);
}
function multi(){
    method="*";

    getResult(method);
}
function div(){
    method="/";

    getResult(method);
}
function rest(){
    method="%";

    getResult(method);
}








// function getResult(method){

//     const input1=document.getElementById("input-1");
//     const input2=document.getElementById("input-2");
//     console.log(method);

//     switch(method){
//         case '+': result=Number(input1.value)+Number(input2.value); break;
//         case '-': result=Number(input1.value)-Number(input2.value); break;
//         case '*': result=Number(input1.value)*Number(input2.value); break;
//         case '/': result=Number(input1.value)/Number(input2.value); break;
//         case '%': result=Number(input1.value)%Number(input2.value); break;
//             default:
//                 break;
//     }

//     document.getElementById("result").innerText=result;
// }


function calc(op){
    // op에는 +-*/% 중 하나가 전달되어짐
    const input1=Number(num1.value);
    const input2=Number(num2.value);

    switch(op){
        
        case '+': result.innerText=input1+input2; break;
        case '-': result.innerText=input1-input2; break;
        case '*': result.innerText=input1*input2; break;
        case '/': result.innerText=input1/input2; break;
        case '%': result.innerText=input1%input2; break;
            default:
                break;
    }

}