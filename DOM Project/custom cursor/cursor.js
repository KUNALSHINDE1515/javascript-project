const main = document.querySelector("#main")

const cursor = document.querySelector('.cursor')

main.addEventListener('mousemove', function (para){
    cursor.style.left = para.x+"px"
    cursor.style.left = para.y+"px"
})