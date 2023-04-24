console.log("123");

// JavaScript弱型別
// 變數宣告
let a = "";
// 常數(不能變) //java的final
const b = 45;

//陣列
a = [1, 2, 3]
//物件
a = {
    //key : value
    name: "ABC",
    tel: 123456

}
// JavaScript基礎型別
// 所有東西都是物件
// number
// string
// boolean //true false
// null    //工程師手寫上去的
// undefined   //系統給的空值
// object  //物件
// a = {
//     //key : value
//     name: "ABC",
//     tel: 123456
// }


//1~1000偶數的總和
let total = 0;
for (let i = 1; i <= 1000; i++) {
    if (i % 2 == 0) {
        total += i
    }
}
console.log(total);


let arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

arr.forEach(function (i) {
    console.log(i);
})

//宣告方法/函式
function aa() {
    console.log("這是aa");
};
//執行方法
aa();


// callback 回呼
let arr1 = ["A", "B", "C"];
arr1.forEach(
    function (i) {
        console.log(i);
    }
);

let arr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const filterArr = arr2.filter(function (i) {
    return i % 20 == 0;
});
console.log("filterArr: ");
console.log(filterArr);

const mapArr = arr2.map(function (i) {
    return i + 1
});

console.log("mapArr: ");
console.log(mapArr);


//1~1000的偶數陣列總和(filter)
let filterNum = [];
let filtertotal = 0;

for (i = 1; i <= 1000; i++) {
    filterNum.push(i);
};
const filterArr1 = filterNum.filter(function (i) {
    // if (i % 2 == 0) {
    //     return filtertotal += i;
    // }
    return i % 2 == 0
});

const mapArr1 = filterNum.map(function (i) {
    if (i % 2 == 0) {
        let MapNum = [];
        return i
    }
});
console.log("filterArr1: ");
console.log(filterArr1);
console.log("mapArr1: ");
console.log(mapArr1);


//物件 
const obj = {
    name: "john",
    age: 20,
    email: "123@mail.com"
};//map key:value