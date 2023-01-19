const url = "https://striveschool-api.herokuapp.com/api/products";

const params = new URLSearchParams(location.search);
const id = params.get("id");
console.log(id); //this can either an id or null

//if null => POST
//if not null => PUT

window.onload = async () => {
  try {
    if (id !== null) {
      //we are trying to edit something
      const postButton = document.querySelector(".btn-primary");
      postButton.remove();

      let res = await fetch(url + "/" + id);

      if (res.ok) {
        let { name, description, price, brand, imgUrl } = await res.json();
        document.querySelector("prodImg").value = imgUrl;
        document.querySelector("#prodName").value = name;
        document.querySelector("#prodBrand").value = brand;
        document.querySelector("#prodDescription").value = description;
        document.querySelector("#prodPrice").value = price;
      } else {
        console.log(res);
        throw res.status + " " + res.statusText;
      }
    } else {
      //we are trying to post
      const putButton = document.querySelector(".btn-success");
      putButton.remove();
    }
  } catch (error) {
    handleError(error);
  }
};

const handdleProducts = async (addProd) => {
  try {
    addProd.preventDefault();
    const prodToAdd = {
      imgUrl: document.querySelector("#prodImg").value,
      name: document.querySelector("#prodName").value,
      brand: document.querySelector("#prodBrand").value,
      description: document.querySelector("#prodDescription").value,
      price: document.querySelector("#prodPrice").value,
    };
    const options = {
      headers: new Headers({
        "Content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2Q0OGU3MzczODAwMTUzNzQzOTkiLCJpYXQiOjE2NzQxMzUyMjIsImV4cCI6MTY3NTM0NDgyMn0.a3QS_kdC_im2Zwew_X9_2guvcUx973YAzetYp5Ws6mw",
      }),
      body: JSON.stringify(prodToAdd),
    };
    let finalURL = url;
    if (id === null) {
      options.method = "POST";
    } else {
      finalURL += `/${id}`;
      options.method = "PUT";
    }
    const res = await fetch(finalURL, options);
    if (res.ok) {
      successAlert();
    } else {
      throw res.status + " " + res.statusText;
    }
  } catch (error) {
    handleError(error);
  }
};
const handleError = (errorText) => {
  const alert = document.querySelector(".alert span.alert-text");
  alert.innerText = errorText;
  alert.parentElement.classList.replace("d-none", "d-block");
};

const successAlert = () => {
  const alert = document.querySelector(".alert-success");
  alert.classList.add("show");
  alert.classList.remove("d-none");
};
