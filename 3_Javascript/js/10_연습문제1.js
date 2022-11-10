// 색 출력 영역

// 요소를 얻어와서 변수에 저장

// 클래스명, 태그명, name 속성값, querySelectorAll()같은 경우
// 요소를 얻어올 때 배열 형식으로 반환!

const container=document.getElementsByClassName("container")[0];
const area=document.getElementsByClassName("area");
const box=document.getElementsByClassName("box");
const boxColor=document.getElementsByClassName("box-color");


// JS로 CSS 추가하기 


// container클래스 요소에 display flex 추가
container.style.display="flex";


for(let item of area){
    // item == area 배열에 담긴 요소를 순차적으로 하나씩 꺼내 저장하는 변수 
    item.style.border="1px solid black";
    item.style.width="150px";
    item.style.height="170px";
    item.style.display="flex";
    item.style.flexDirection="column";

}

for(let item of box){
    // item == area 배열에 담긴 요소를 순차적으로 하나씩 꺼내 저장하는 변수 
    item.style.borderBottom="1px solid black";
    item.style.height="150px";
}

for(let item of boxColor){
    item.style.border="none";
    item.style.outline="none";
}




// box-color 클래스 요소의 입력된 값이 변했을 때
// 위에 있는 box 클래스 요소의 배경색을 변경
// + 입력된 input 요소 글씨색도 변경 
for(let i=0;i<boxColor.length;i++){

    // change : 포커스를 잃고 나서 또는 엔터 입력시 
    //          작성된 값이 이전 값과 다를 경우 

    // blur : 포커스를 잃었을 때
    
    boxColor[i].addEventListener("change",function(){
        /// box-color input 태그와 같은 인덱스번째 box 요소 배경색 변경 
        box[i].style.backgroundColor=this.value;
        // boxColor[i].style.color=this.value;
        this.style.color=this.value; // 글자색 변경

    })
}


// transition-duration 변경 버튼 클릭 시
// #input1에 작성된 값 만큼의 transition-duration을
// 모든 box 요소에 추가
// + #print1 요소의 내용을 #input1에 작성된 값을 변경

// hint.  transition-duration에 세팅되는 값은 초단위(s) 입니다.


const print1=document.getElementById("print1");
const input1=document.getElementById("input1");
const btn1=document.getElementById("btn1");

btn1.addEventListener("click",function(){
    print1.innerHTML=input1.value;
    for(let i=0;i<box.length;i++){
        box[i].style.transitionDuration=input1.value+"s";
    }
    
})





// #clearBtn 클릭시 
// .box의 모든 배경색을 없애고
// .box-color에 작성된 값도 없애기
const clearBtn=document.getElementById("clearBtn");

clearBtn.addEventListener("click",function(){

    for(let i=0;i<box.length;i++){
        box[i].style.transitionDuration=0;
        box[i].style.backgroundColor="";
        boxColor[i].value='';
        boxColor[i].style.color='';
    }
    print1.innerHTML="0";
    input1.value="";
})

