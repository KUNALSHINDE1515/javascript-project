const con = document.querySelector('#container')
const love= document.querySelector('i')

con.addEventListener('dblclick', function(){
    love.style.transform = 'translate(-50%,-50%) scale(1)'
    love.style.opacity = 0.8
    setTimeout(() =>{
        love.style.transform = 'translate(-50%,-50%) scale(0)'
    },3000)
    setTimeout(() =>{
        love.style.opacity = 0
    },3000)
})


// setTimeout(() => {
//     console.log("hello kunal");
// },5000)

// setTimeout(() => {
//     console.log("hello three");
// },2000)