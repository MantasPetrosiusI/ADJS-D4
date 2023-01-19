const url = "https://striveschool-api.herokuapp.com/api/product/";

const params = new URLSearchParams(location.search);
const id = params.get("id");
console.log(id); //this can either an id or null


const postData = async(product) 
try {
      let res = await fetch(url,{
        method: "POST",
    body: JSON.stringify(product),
    heardrs: {
      "Content-Type": "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2Q0OGU3MzczODAwMTUzNzQzOTkiLCJpYXQiOjE2NzQxMzUyMjIsImV4cCI6MTY3NTM0NDgyMn0.a3QS_kdC_im2Zwew_X9_2guvcUx973YAzetYp5Ws6mw"
    },
      })
} catch (error) {
  console.log(error)
}
const submitProduct = async () => {
    addProduct.preventDefault()
    const singleProduct = {
      imgUrl: document.querySelector("#prodImg").value,
      name: document.querySelector("#prodName").value,
      brand: document.querySelector("#prodbrand").value,
      description: document.querySelector("#prodDescription").value,
      price: document.querySelector("#prodPrice").value,
    };
    handleNewEvent(singleProduct);
  }
const editProduct = async () =>{
  let res = await fetch(url +"/"+id, {
    method: "PUT",
    body: JSON.stringify(product),
    heardrs: {
      "Content-Type": "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2Q0OGU3MzczODAwMTUzNzQzOTkiLCJpYXQiOjE2NzQxMzUyMjIsImV4cCI6MTY3NTM0NDgyMn0.a3QS_kdC_im2Zwew_X9_2guvcUx973YAzetYp5Ws6mw"
    }
  });
  if(res.ok){
    let data = await res.json(){

    }
  }
}