const URL = 'https://japceibal.github.io/emercado-api/'



const getProducts = async (endpoint) => {
  try {
    const response = await fetch(`${URL}/cats_products/101.json`)
    let data = await response.json();
    console.log('getProducts()');
    return data
  } catch (error) {
    console.log(error);
  }
}

  document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('getProducts-container')
    const users = await getProducts() //onclick="setCatID(${e.name})"
    console.log('users Loaded');
    console.log(users);
    for(e of users.products){

      container.innerHTML += `
      <div class="list-group-item list-group-item-action cursor-active"> 
                  <div class="row">
                      <div class="col-3">
                          <img src="${e.image}" alt="${e.description}" class="img-thumbnail">
                      </div>
                      <div class="col">
                          <div class="d-flex w-100 justify-content-between">
                              <h4 class="mb-1">${e.name} - ${e.currency} ${e.cost}</h4>
                              <small class="text-muted">${e.soldCount} Vendidos</small>
                          </div>
                          <p class="mb-1">${e.description}</p>
                      </div>
                  </div>
              </div>
      `
  }

  })  
  







/* con la información (precio, nombre, descripción, cantidad vendidos e imagen) respectiva a cada producto, y mostrar el listado en products.html.
En principio haremos uso únicamente de la categoría 101 (Autos), pero en entregas posteriores nos encargaremos de mostrarle al usuario los productos de la categoría seleccionada.
*imagen meramente ilustrativa */


