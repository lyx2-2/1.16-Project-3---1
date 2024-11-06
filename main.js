import axios from 'axios'
import { setupCounter } from './counter.js'
import javascriptLogo from './javascript.svg'
import './style.css'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <button id="fetch">Click to Fetch data</button>
    <button id="post">Click to Post data</button>
    <button id="put">Click to Update data</button>
    <button id="delete">Click to Delete data</button>
  </div>
`

setupCounter(document.querySelector('#counter'))



// 异步 过一会儿才能看见 1000ms 1s
// setTimeout(function (){
//   console.log('here');
// }, 1000)

// setInterval(function (){
//   console.log('here');
// }, 1000)
const dataAddress = "http://localhost:4567/user"

// function getData() {
//   console.log("Click Start"); //同步, 虽然是异步里面的同步但还是先执行

//   axios.get("http://localhost:4567/user").then(function(response) {
//     console.log(response);
//     return response.data;
//   }).then(function(data) {
//     console.log(data);
//     return data[0]
//   }).then(function (user1){
//     console.log(user1);
//   }).catch(function ( error ){
//     console.error("Error getting data", error)
//   })
//   console.log("Click End");  //同步, 虽然是异步里面的同步但还是先执行
// }

// function postData(){
//   axios.post("http://localhost:4567/user", {
//     name: "Topcoder",
//     age: 100
//   }).then(function(response){
//     console.log(response);
//   }).catch(function ( error ){
//     console.error("Error posting data", error)
//   })
// }

async function getData() {
  try {
    const response = await axios.get(dataAddress)
    const data = response.data
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

async function postData() {
  try {
    const response = await axios.post(dataAddress, {
      id: "22",
      name: "Lu",
      age: 20
    })
    console.log(response.data);
  } catch (error) {
    console.error("Error posting data", error);
  }
}



async function putData() {
  try {
    const currentData = await axios.get(`${dataAddress}/1`);
    const response = await axios.put(`${dataAddress}/1`, {
      id: currentData.data.id,
      name: currentData.data.name,
      age: 500
    })
    console.log(response.data);
  } catch (error) {
    console.error("Error updating data", error);
  }
}

async function deleteData() {
  try {
    const response = await axios.delete(`${dataAddress}/22`);
    console.log(response.data);
  } catch (error) {
    console.error("Error deleting data", error);
  }
}


// async function getData2(){
//   try{
//     const response = await axios.get(dataAddress);  // 等待请求完成
//     const data = response.data;  // 提取数据
//     console.log(data);  // 打印数据
//   } catch (error) {
//     console.log(error);  // 捕获和打印错误
//   }
// }



const button1 = document.querySelector("#fetch")
button1.addEventListener("click", function (event) {
  getData()
})

const button2 = document.querySelector("#post")
button2.addEventListener("click", function (event) {
  postData()
})

const button3 = document.querySelector("#put")
button3.addEventListener("click", function (event) {
  putData()
})

const button4 = document.querySelector("#delete")
button4.addEventListener("click", function (event) {
  deleteData()
})

// console.log("hello world 1");
// console.log("hello world 2");
// console.log("hello world 3");