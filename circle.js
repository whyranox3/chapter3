/* // 상수 선언
const PI=3.141592;

// 원 넓이 구하는 함수 선언
function getArea(r){
    return PI*r*r;
}

// 원 둘레 길이 구하는 함수 선언
function getCircum(r){
    return 2*PI*r;
} */

/* // 상수 선언
export const PI=3.141592;

// 원 넓이 구하는 함수 선언
export function getArea(r){
    return PI*r*r;
}

// 원 둘레 길이 구하는 함수 선언
export function getCircum(r){
    return 2*PI*r;
} */

// 상수 선언
const PI=3.141592;

// 원 넓이 구하는 함수 선언
function getArea(r){
    return PI*r*r;
}

// 원 둘레 길이 구하는 함수 선언
function getCircum(r){
    return 2*PI*r;
}

export default {
    PI, 
    getArea, 
    getCircum
};