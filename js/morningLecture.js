

// This function will run on 
// function clickEventHandler(event) {
//     event.preventDefault()
//     console.log(event.type + '!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//     console.log(event.target)
//     console.log(event.currentTarget)
//     // You can grab ANY element in the DOM
//     // You can do ANTYING you want with it
//     // you can create new elements and attach them to the DOM
//     // you can trigger network requests to send data to the server
// }

//   function mouseOverHandle(event) {
//       console.log(event.type + '$$$$$')
//       console.log(event.target)
//   }

// document.querySelector('a').addEventListener('mouseover', mouseOverHandle)
// document.querySelector('header').addEventListener('click', event => {
//     //we are sabotaging bubbling
//     event.stopPropagation()
//     console.log('sabotage')
// })
// document.querySelector('nav').addEventListener('click', clickEventHandler)
// document.querySelector('header').addEventListener('click', clickEventHandler)
// document.body.addEventListener('click', clickEventHandler)
// document.addEventListener('click', clickEventHandler)
// window.addEventListener('click', clickEventHandler)


// LONG FORM OF WHAT IS ABOVE
// homeLink.addEventListener(
//     'click', //string with the name of the event
//     () => {
//         //things we want happening when this link gets clicked
//         console.log('the link got clicked')
//     }
// )

// document.querySelector('nav').addEventListener('click', () => {
//     console.log('the nav got clicked')
// })

// // attach a 'click' eventListener to the header element and console.log

// document.querySelector('header').addEventListener ('click', () => {
//     console.log('header clicked')
// })

// document.body.addEventListener('click', () => {
//     //console.log(stuff.path) stuff goes back into the callback // adding the callback function and console.log the PATH
//     console.log('the body gets clicked')
// })

// document.addEventListener('click', () => {
//     console.log('document clicked')
// })

// window.addEventListener('clock', () =>{
//     console.log('window clicked')
// })

// END CLASS LESSON CODE


