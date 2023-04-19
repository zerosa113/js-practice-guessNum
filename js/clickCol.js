// $(document).ready(function () {

//     $("#btn").click(function (e) {
//         e.preventDefault()
//         $("#title").empty()
//         $("#title").append(`<p>123456</p>`)
//     })
// })

// 操作DOM

// 抓出要得HTML元素(DOM節點)
const title = document.getElementById("title");
// title.innerText = "這是Js來的"
// console.log(title);
// console.log(title.textContent);

// const title2 = document.querySelector(".titleB");
const button = document.querySelector("#btn");
const input = document.querySelector("#input");

let amount = 0;
button.addEventListener("click", function () {
    // amount += 1
    // title2.innerText = amount;
    // console.log(amount); 
    const num = input.value;

    if (num == "") {

        title.innerText = 0;
        input.value = 0;
    } else {

        title.innerText = num;
        input.value = 0;
    }
});


// 語法糖:寫更少的code 但功能一樣

