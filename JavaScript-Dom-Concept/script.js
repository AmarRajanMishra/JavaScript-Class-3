
// const obj = {
//     Name : 'Sachin',
//     obj2 : {
//         Age : 29,
//         obj3 : {
//             Gender : 'Male'
//         }
//     }
// }
// console.log(obj.Name)
// console.log(obj.obj2.Age)


// console.log(document)
// console.log(document.body)
// console.log(window)
// console.log(window.document)
// console.log(document.body.childNodes)
// console.log(document.body.children[0].textContent)
// document.body.children[0].textContent = 'DOM CONCEPT in JavaScript'

// console.log(document.body.children[1])
// console.log(document.body.children[1].innerHTML)
// document.body.children[1].innerHTML = '<p>Welcome back in JavaScript Classes</p>'

// let a = 20;
// a = 30
// console.log(a)


// console.log(document.body.firstChild)
// console.log(document.body.lastChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

// Siblings

// let a = document.body.children[1].previousElementSibling
// let b = document.body.children[1].nextElementSibling
// a.innerHTML = 'Updated JavaScript'
// a.style.backgroundColor = 'red'
// b.style.backgroundColor = 'green'
// b.style = 'background-color : red'
// console.log(a)
// console.log(b)



// console.log(document.body.children[1])
// let a = document.body.children[0]
// a.style = "background-color: red"

// console.log(document.body.children[1])
// document.body.children[0]
// console.log(divTag)
// const ulTag = document.body.children[0];
// // const firstLi = ulTag.children[0]
// const secondLi = ulTag.children[1]
// console.log(secondLi.previousElementSibling.textContent);
// console.log(ulTag.style = "font-size: 20px")

// console.log(document.body.children[1])
// let heading1 = document.body.children[1]
// console.log(heading1.nextElementSibling.textContent)


// Searching Method in DOM
// Search By ID

// let a = document.getElementById('l1')
// a.innerHTML = 'New Page'
// console.log(a)

// Search By Class Name 
// let a = document.getElementsByClassName('container')
// console.log(a)

// Search By Tag Name
// let a = document.getElementsByTagName('li')
// console.log(a)

// querySelector 

// let a = document.querySelector('.container')
// console.log(a)

// querySelectorAll
// let a = document.querySelectorAll('.container')
// console.log(a)


// Event Handling

// function demo(){
//     // console.log('Welcome')
//     let a = document.getElementById('heading')
//     // console.log(a)
//     a.style.color = 'red'
// }

// function demo2(){
//     let a = document.getElementById('heading')
//     a.style.color = 'green'
// }

// btn.onclick = hello

// function hello(){
//     alert('Hello')
// }

// btn.onclick = hello2
// function hello2(){
//     alert('Hello 2 Fun')
// }
// btn.onclick = function(){
//     alert('Am Anonymouse Fun')
// }

// btn.addEventListener('click', hello3)

// function hello3(){
//     alert('Add Event Listner')
// }

// btn.addEventListener('click', hello4)
// function hello4(){
//     alert('Hello 4 Fun')
// }
// btn.addEventListener('click', function(){
//     alert('Anonymouse Fun')
// })
// btn.addEventListener('click', function(){
//     alert('Anonymouse Fun')
// })


// btn.removeEventListener('click', hello4)
// btn.removeEventListener('click', function(){
//     alert('Anonymouse Fun')
// })



