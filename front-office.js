const url = "https://striveschool-api.herokuapp.com/api/product/";

window.onload = async () => {
  getProducts();
};

const getProducts = async () => {
  try {
    const response = await fetch(url, {
      headers: new Headers({
        "Content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2Q0OGU3MzczODAwMTUzNzQzOTkiLCJpYXQiOjE2NzQxMzUyMjIsImV4cCI6MTY3NTM0NDgyMn0.a3QS_kdC_im2Zwew_X9_2guvcUx973YAzetYp5Ws6mw",
      }),
    });
    const products = await response.json();
    console.log(products);
    renderProducts(products);
  } catch (error) {
    console.log(error);
  }
};

const renderProducts = (products) => {
  const row = document.querySelector(".row");
  row.innerHTML = "";

  products.forEach((product) => {
    const { name, description, brand, imageUrl, price, _id } = product;
    row.innerHTML += `
     <div class="col>>
        <div class="card" style="width: 18rem;">
        <img src="${imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <h6 class="card-brand">${brand}</h6>
        <p class="card-text">${description}</p>
        <span class="badge badge-warning">${price}</span>
        <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
     </div>
     `;
  });
};

/*{
  "_id": "5d318e1a8541744830bef139", //SERVER GENERATED
  "name": "app test 1",  //REQUIRED
  "description": "somthing longer", //REQUIRED
  "brand": "nokia", //REQUIRED
  "imageUrl": "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", //REQUIRED
  "price": 100, //REQUIRED
  "userId": "admin", //SERVER GENERATED
  "createdAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
  "updatedAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
  "__v": 0 //SERVER GENERATED
} */
