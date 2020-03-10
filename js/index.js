// Your code goes here


document.querySelector('.nav-link').addEventListener('mouseover', () => {
    console.log('mouseover')
    document.querySelector('.nav-link').style.backgroundColor = 'green'
})
document.querySelector('.nav-link').addEventListener('mouseout', () => {
    console.log('mouseout')
    document.querySelector('.nav-link').style.backgroundColor = 'white'
})
// Prevent Reloading of Page
document.querySelector('.nav-link').addEventListener('click', () => {
    console.log('click')
    event.preventDefault()    
})


document.addEventListener('keydown', () => {
    if (event.keyCode === 220){
        alert("Don't Let Me Go!")
    }
})
document.addEventListener('keyup', () => {
    if (event.keyCode === 221){
        alert("You Let Them Go!")
    }
})


document.querySelector('.logo-heading').addEventListener('wheel', () => {
    document.querySelector('.logo-heading').style.transform = 'scale(2)'
})


document.querySelector('.img-content').addEventListener('drag', () => {
    console.log('drag')
    document.querySelector('.img-content').style.display = 'none'
}, false)


// Can't figure out, come back to it?
// document.querySelector('.img-content').addEventListener('drop', (event) => {
//     event.preventDefault()
//     if (event.target == body){
//     console.log('dropped')
//     document.querySelector('.img-content').style.display = 'unset'

//     }
// }, false)

window.addEventListener('scroll', () => {
    document.body.style.backgroundColor = 'green'
})

window.addEventListener('load', () => {
    alert('Wow, this is loaded!')
})

// COME BACK?
// document.addEventListener('resize', () => {
//     document.querySelector('.nav-links').style.fontSize = '3rem'
// })

document.querySelector('textarea').addEventListener('select', () => {
    console.log('selecting')
    document.querySelector('textarea').style.color = 'purple'
    document.querySelector('textarea').style.fontSize = '2rem'
})

document.querySelector('img:nth-of-type(1)').addEventListener('dblclick', () => {
    document.querySelector('img:nth-of-type(1)').style.transform = 'scale(.5)'
    console.log('dblclicked')
})



function dblHandler(event) {
    console.log(event.currentTarget)
}

document.querySelector('nav').addEventListener('dblclick', dblHandler)
document.querySelector('header').addEventListener('dblclick', dblHandler)
document.body.addEventListener('dblclick', dblHandler)
document.addEventListener('dblclick', dblHandler)
window.addEventListener('dblclick', dblHandler)

document.querySelector('header').addEventListener('dblclick', () => {
    console.log('prevented')
    event.stopPropagation()
})
