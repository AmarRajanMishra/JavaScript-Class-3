
let btn = document.getElementById('btn')
let body = document.getElementById('body')
let text = document.getElementById('heading')
btn.addEventListener('click', darkLightTheme)

function darkLightTheme(){
    if(btn.textContent.includes('Dark')){
        btn.textContent = 'Light Mode'
        body.style.backgroundColor = 'black'
        text.style = 'color : white'
    }else{
        btn.textContent = 'Dark Mode'
        body.style.backgroundColor = 'white'
        text.style = 'color : black'
    }

}

// let str = 'My Name is Amar'
// console.log(str.includes('are'))