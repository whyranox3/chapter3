/* // 배열 선언하고 출력력
let food=["짜장면", "피자","치킨"];
console.log(food[0]);
console.log(food[1]);
console.log(food[2]);

// 배열에 요소 추가

food[2]="파스타";
food[3]="레몬";

console.log(food); */

// truthy & falsy
/* let varA;   // undefined => falsy한 값
if(varA){
    console.log("값이 있음");
} else {
    console.log(varA);  
} */

/* let varA=null;   // undefined => falsy한 값
if(varA){
console.log("값이 있음");
} else {
console.log(varA);  
} */

// AND 단락평가
/* function calcA(){
    console.log("a");
    return false;
}
function calcB(){
    console.log("b");
    return true;
}

console.log(calcA() && calcB()); */

/* function calcA(){
    console.log("a");
    return undefined;
}
function calcB(){
    console.log("b");
    return true;
}

console.log(calcA() && calcB()); */

/* function getName(person){
    if (person !== undefined && person !== null){
        return person.name;
    } else {
        return "매개변수가 객체가 아닙니다.";
    }
}

let person = null;
let name = getName(person);

console.log(name); */

// OR 단락평가
function calcA(){
    console.log("a");
    return true;
}
function calcB(){
    console.log("b");
    return false;
}

console.log(calcA() || calcB());

const name="이수정" || undefined;

console.log(name);

const varA=0;
const varB="이수정";

const resultA=varA||varB;
const resultB=varA??varB;

console.log(resultA);
console.log(resultB);