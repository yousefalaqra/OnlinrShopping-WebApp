const baseUrl = "https://localhost:5001/api/items";
let items = [];
let isDialogOn = false;

$( document ).ready(function() {
    fetchItems();
});

function fetchItems() {
    fetch(baseUrl)
      .then((resp) => resp.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          alterDom(data[i]);
        }
      });
  }





// function ShowPopup(){
//   //! the container 
//   let containerDivElement = document.querySelector('#form-container'); 
//   // creat buton elemnt
//   let colAutoDivButton = document.createElement('div');
//   let form = document.createElement('form');
//   let button = document.createElement('a');

//   // add the styles
//   colAutoDivButton.classList.add('col-auto');
//   button.classList.add('btn', 'btn-warning', 'mb-2', 'post');
//   button.id = "saveItem";
//   button.type = 'submit';
//   button.innerHTML = "Save";

//   // append elemnt to the container div 
//   form.appendChild(button);
//   colAutoDivButton.appendChild(form);
//   containerDivElement.appendChild(colAutoDivButton);
  
//   // add click eventlisten to the button

// }


function alterDom(item) {
  // seocond, crate the reaured html eelnts to add the item
  /*
        <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="https://experiencelife.com/wp-content/uploads/2011/07/Coconuts-1280x720.jpg" alt="Card image cap">
                    <div class="card-body">
                        <div class="card-flex-container">
                            <h5 class="card-title">Coconut</h5>
                            <h5 card="price">36$</h5>
                        </div>
                        <div class="card-flex-container">
                            <p class="card-text">Good for the health and make you stronger!</p>
                            <a href="#" class="btn btn-primary">More info</a>
                        </div>
                    </div>
                </div> 
    */

  let cardContainerElemnt = document.querySelector("#cards-container");

  let cardDivElement = document.createElement("div");
  let itemImgElement = document.createElement("img");
  let cardBodyDiv = document.createElement("div");
  let cardFlexContainerDiv = document.createElement("div");
  let itemNameTextElement = document.createElement("h5");
  let itemPriceTextElement = document.createElement("h5");
  let itemDescreptionTextElement = document.createElement("p");
  let showMoreButton = document.createElement("a");
  let cardFlexContainerDescDiv = document.createElement("div");

  cardDivElement.classList.add('card');
  cardDivElement.classList.add('card-added-item');

  itemImgElement.classList.add("card-img-top");
  itemImgElement.src = item["itemImg"]; //! itemImg

  cardBodyDiv.classList.add("card-body");

  cardFlexContainerDiv.classList.add("card-flex-container");

  itemNameTextElement.innerHTML = item["itemName"]; //! itemsName
  itemPriceTextElement.innerHTML = item["itemPrice"].toString() + "$"; //! itemPrice
  itemDescreptionTextElement.innerText = item["itemDescription"]; //! itemDexcreption

  showMoreButton.innerHTML = "More info";
  showMoreButton.classList.add("btn");
  showMoreButton.classList.add("btn-primary");

  cardDivElement.appendChild(itemImgElement);
  cardDivElement.appendChild(cardBodyDiv);
  cardBodyDiv.appendChild(cardFlexContainerDiv);
  cardFlexContainerDiv.appendChild(itemNameTextElement);
  cardFlexContainerDiv.appendChild(itemPriceTextElement);
  cardBodyDiv.appendChild(itemDescreptionTextElement);
  cardBodyDiv.appendChild(showMoreButton);

  cardContainerElemnt.appendChild(cardDivElement);
}




document.querySelector('#addItemButton').addEventListener('click', ShowAddItemPopup)

function ShowAddItemPopup(){
    /*
        <div class="card-form-container">
            <div class="card text-white bg-info mb-3" style="max-width: 100rem;">
                <div class="card-header">Add Item</div>
                <div class="card-body">
                    <form>
                        <div class="form-col align-items-center">

                            <div class="col-auto">
                                <label class="sr-only" for="inlineFormInputGroup">Name</label>
                                <div class="input-group mb-2">
                                  <div class="input-group-prepend"> 
                                  </div>
                                  <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Item Name">
                                </div>
                              </div>

                          <div class="col-auto">
                            <label class="sr-only" for="inlineFormInputGroup">Descreption</label>
                            <div class="input-group mb-2">
                              <div class="input-group-prepend"> 
                              </div>
                              <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Item Descreption">
                            </div>
                          </div>

                          <div class="col-auto">
                            <label class="sr-only" for="inlineFormInputGroup">Image</label>
                            <div class="input-group mb-2">
                              <div class="input-group-prepend"> 
                              </div>
                              <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Image URL">
                            </div>
                          </div>

                          <div class="col-auto">
                            <label class="sr-only" for="inlineFormInputGroup">Price</label>
                            <div class="input-group mb-2">
                              <div class="input-group-prepend"> 
                              </div>
                              <input type="number" class="form-control" id="inlineFormInputGroup" placeholder="Item Price">
                            </div>
                          </div>

                          <div class="col-auto">
                            <button type="submit" class="btn btn-warning mb-2">Submit</button>
                          </div>
                        </div>
                      </form>
                </div>
              </div>        
        </div>
    */

    // first, let's define out html elents
    //! the container 
    let containerDivElement = document.querySelector('#form-container'); 

    let cardDiv = document.createElement('div');
    let cardHeaderDiv = document.createElement('div');
    let cardBodyDiv = document.createElement('div');
    let form = document.createElement('form');
    let formControlsDiv = document.createElement('div');
    // the followng will be repated 4x times for each input
    // item name
    let colAutoDivItemName = document.createElement('div');
    let lableItemName = document.createElement('lable');
    let inputDivItemName = document.createElement('lable');
    let inputItemName = document.createElement('input');
    // ItemDescreption
    let colAutoDivItemDescreption = document.createElement('div');
    let lableItemDescreption = document.createElement('lable');
    let inputDivItemDescreption = document.createElement('lable');
    let inputItemDescreption = document.createElement('input');
    // item image
    let colAutoDivItemImage = document.createElement('div');
    let lableItemImage = document.createElement('lable');
    let inputDivItemImage = document.createElement('lable');
    let inputItemImage = document.createElement('input');
    // item price
    let colAutoDivItemPrice = document.createElement('div');
    let lableItemPrice = document.createElement('lable');
    let inputDivItemPrice = document.createElement('lable');
    let inputItemPrice = document.createElement('input');
    // item nutton
    let colAutoDivButton = document.createElement('div');
    let button = document.createElement('a');
    // secondly, we must add the required classes and atrebuites for each elemnts we've created so far!
    cardDiv.classList.add('card', 'text-white', 'bg-info', 'mb-3');
    cardDiv.id = "cardFormContainer";
    cardDiv.style.maxWidth = 300;
    
    cardHeaderDiv.classList.add('card-header');
    cardHeaderDiv.innerHTML = "Add Item";

    cardBodyDiv.classList.add('card-body');

    formControlsDiv.classList.add('form-col' ,'align-items-center');

    colAutoDivItemName.classList.add('col-auto');
    lableItemName.classList.add('sr-only');
    lableItemName.innerHTML = "Item Name";
    inputDivItemName.classList.add('input-group', 'mb-2');
    inputItemName.type = "text";
    inputItemName.classList.add('form-control');
    inputItemName.id = "itemName";
    inputItemName.placeholder = "Item Name";
    
    colAutoDivItemDescreption.classList.add('col-auto');
    lableItemDescreption.classList.add('sr-only');
    lableItemDescreption.innerHTML = "Item Descreption";
    inputDivItemDescreption.classList.add('input-group', 'mb-2');
    inputItemDescreption.type = "text";
    inputItemDescreption.classList.add('form-control');
    inputItemDescreption.id = "itemDesc";
    inputItemDescreption.placeholder = "Item Descreption";

    colAutoDivItemImage.classList.add('col-auto');
    lableItemImage.classList.add('sr-only');
    lableItemImage.innerHTML = "Item Image";
    inputDivItemImage.classList.add('input-group', 'mb-2');
    inputItemImage.type = "text";
    inputItemImage.classList.add('form-control');
    inputItemImage.id = "itemImg";
    inputItemImage.placeholder = "Item Image URL";

    colAutoDivItemPrice.classList.add('col-auto');
    lableItemPrice.classList.add('sr-only');
    lableItemPrice.innerHTML = "Item Price";
    inputDivItemPrice.classList.add('input-group', 'mb-2');
    inputItemPrice.type = "number";
    inputItemPrice.classList.add('form-control');
    inputItemPrice.id = "itemPrice";
    inputItemPrice.placeholder = "Item Price";

    colAutoDivButton.classList.add('col-auto');
    button.classList.add('btn', 'btn-warning', 'mb-2', 'post');
    button.id = "saveItem";
    button.type = 'submit';
    button.innerHTML = "Save";


    // finally, let's append all the elemnt to the dom

    colAutoDivButton.appendChild(button);

    inputDivItemPrice.appendChild(inputItemPrice);
    colAutoDivItemPrice.appendChild(lableItemPrice);
    colAutoDivItemPrice.appendChild(inputDivItemPrice);

    inputDivItemImage.appendChild(inputItemImage);
    colAutoDivItemImage.appendChild(lableItemImage);
    colAutoDivItemImage.appendChild(inputDivItemImage);

    inputDivItemDescreption.appendChild(inputItemDescreption);
    colAutoDivItemDescreption.appendChild(lableItemDescreption);
    colAutoDivItemDescreption.appendChild(inputDivItemDescreption);

    inputDivItemName.appendChild(inputItemName);
    colAutoDivItemName.appendChild(lableItemName);
    colAutoDivItemName.appendChild(inputDivItemName);

    formControlsDiv.appendChild(colAutoDivItemName);
    formControlsDiv.appendChild(colAutoDivItemDescreption);
    formControlsDiv.appendChild(colAutoDivItemImage);
    formControlsDiv.appendChild(colAutoDivItemPrice);
    formControlsDiv.appendChild(colAutoDivButton);
    
    form.appendChild(formControlsDiv);

    cardBodyDiv.appendChild(form);

    cardDiv.appendChild(cardHeaderDiv);
    cardDiv.appendChild(cardBodyDiv);
    containerDivElement.appendChild(cardDiv);

    // we must rempve the add item button
    document.querySelector('#addItemButton').removeEventListener('click', ShowAddItemPopup);
    
     //button.onclick = postItem(form);
    var saveItemButton = document.querySelector('#saveItem');
    saveItemButton.addEventListener('click', function(){
      createItemModel(form);
    }, false);
  
}

function createItemModel(form){
  let itemPrice = parseFloat(form.itemPrice.value);
  let itemModel = {'itemName': form.itemName.value, 'itemDescription': form.itemDesc.value, 'itemImg': form.itemImg.value, 'itemPrice': itemPrice};
  
  postItem(baseUrl ,itemModel)
  .then((data) => {
    alterDom(data);
  });

  document.querySelector('#cardFormContainer').remove();
  document.querySelector('#addItemButton').addEventListener('click', ShowAddItemPopup);
}


async function postItem(url = '', itemModel = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(itemModel) // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

