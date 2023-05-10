const box = document.querySelector(".box")

const colors = ["red","green","blue","black"]
let index = 0

setInterval(() => {
    box.style.border = `40px solid ${colors[index]}`
    index > 3 ? index = 0 : index++

}, 3000)