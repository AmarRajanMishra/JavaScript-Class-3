// fetch('http://jsonplaceholder.typicode.com/users')
// .then((response)=> response.json())
// .then((data)=> console.log(data))


// fetch('http://127.0.0.1:5500/index.html')
// .then(res => res.text())
// .then(data => console.log(data))





// fetch('http://127.0.0.1:5500/index.html')
// .then((res)=> res.text())
// .then((data)=> console.log(data))

// fetch('http://jsonplaceholder.typicode.com/users')
// .then((response)=> response.json())
// .then((data)=> console.log(data))


// fetch('https://api.github.com/users')
// .then((res)=> res.json())
// .then((data)=> console.log(data))

// const getData = ()=>{
//     let userName = document.getElementById('user').value
//     console.log(userName)
//     let url = 'https://api.github.com/users/'+userName
//     let store = document.getElementById('store')
//     // console.log(url)
//     fetch(url)
//   .then((response)=> response.json())
//   .then((data)=> {
//     console.log(data)
//     store.innerHTML = `<h1>${data.login}</h1>`
// })
// }


// fetch('https://api.github.com/users/amar')
// .then(res => res.json())
// .then(users => console.log(users))

function getData(){
  let userName = document.getElementById('user').value
  let url = 'https://api.github.com/users/'+userName
  // console.log(url)
  let store = document.getElementById('store')
  fetch(url)
  .then(res => res.json())
  .then(user => {
    console.log(user)
    store.innerHTML = `<h1>Username : ${user.login}</h1>
                        <img src='${user.avatar_url}'>
                        <h2>Public Repos : ${user.public_repos}</h2>`
  })
}

// document.write('Hello')