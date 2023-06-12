const btn = document.querySelector('#btn')
const box = document.querySelector('#panel')


btn.onclick = () => {
    box.classList.toggle("active")
}

console.log(box);
console.log(btn);