const qus = document.querySelector("#qus");
const min = document.querySelector("#min");
const max = document.querySelector("#max");
const input = document.querySelector("#input");
const button = document.querySelector("#btn");

let ars;
const minNum = 1;
const maxNum = 100;

ars = Math.ceil(Math.random() * (maxNum - minNum + 1) + minNum);
console.log(ars);

button.addEventListener("click", function () {
    const num = input.value;
    // qus.classList.toggle("color");

    if (num == ars) {
        alert("猜對了");
        location.reload();
        return

    } else if (num === "" || num < minNum || num > maxNum) {
        qus.innerText = "請輸入正確數字";
        qus.classList.toggle("color");

    } else if (num < ars) {
        min.innerText = num;
        qus.innerText = "猜錯了，再大一點";

    } else if (num > ars) {
        max.innerText = num;
        qus.innerText = "猜錯了，再小一點";
    }

})