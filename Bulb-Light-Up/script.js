

console.log('Hello')
let bulbBtn = document.getElementById('bulbBtn')
let bulb = document.getElementById('bulb')

bulbBtn.addEventListener('click', turnOnLight)

function turnOnLight(){
    
    if(bulbBtn.textContent.includes('On')){
        bulbBtn.textContent = 'Turn Off Light'
        // console.log(bulb.src)
        bulb.src = './images/ONbulb.png'
    }else{
        bulbBtn.textContent = 'Turn On Light'
        bulb.src = './images/OFFbulb.png'
    }

}

// console.log('Hello')

// let a = bulbBtn.getAttribute('class')
// bulbBtn.setAttribute('data' , 'My Data Atribute')
// let b = bulbBtn.hasAttribute('data')
// console.log(b)
// console.log(a)