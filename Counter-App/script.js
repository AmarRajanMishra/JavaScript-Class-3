let counter = document.getElementById('counter')
let btn = document.getElementById('counterbtn')
let count = 0;

counterbtn.addEventListener('click', incrementFun)

function incrementFun(){
    count = count+1;
    // console.log(count)
    counter.innerHTML = count
    btn.style= 'background-color : red'
}
decrementbtn.addEventListener('click', decrementFun)
function decrementFun(){
    if(count > 0){
        count =  count-1
        counter.innerHTML = count
    }
    
}