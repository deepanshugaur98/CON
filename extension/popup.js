document.getElementById('button').addEventListener('click', () => {


   var postData = {
     messages: document.getElementById('data').value,
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
   }).catch((err) => {alert(err)});
})
