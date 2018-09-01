console.log('running');

// let data = document.querySelectorAll('.tweet-text');
// let newdata = [];
// data.forEach(key => newdata.push(key.innerText));
// console.log(newdata);
// let tosend = {
//    messages : newdata
// }
// console.log(JSON.stringify(tosend));

let data = document.querySelectorAll('.userContent p');
let newdata = [];
data.forEach(key => newdata.push(key.innerText));
console.log(newdata);

var postData = {
  messages: newdata,
};

let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
  }
};

const PATH = 'http://localhost:5000/predict';

axios.post(PATH, postData, axiosConfig)
.then((value) => {
   alert(`Predicted Age : ${value.data.age} , Predicted Gender : ${value.data.gender}`);
});
