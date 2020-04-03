const baseUrl = 'https://localhost:5001/api/items';
let items = [];

function fetchItems() {
    fetch(baseUrl)
        .then(resp => resp.json())
        .then(data =>{
            for(let i = 0; i< data.length; i++){
                alterDom(data[i]);
            }            

        });
}

function alterDom(item){
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

    let cardContainerElemnt = document.querySelector('#cards-container');

    let cardDivElement = document.createElement('div');
    let itemImgElement =  document.createElement('img');
    let cardBodyDiv =  document.createElement('div');
    let cardFlexContainerDiv =  document.createElement('div');
    let itemNameTextElement =  document.createElement('h5');
    let itemPriceTextElement =  document.createElement('h5');
    let itemDescreptionTextElement =  document.createElement('p');
    let showMoreButton =  document.createElement('a');
    let cardFlexContainerDescDiv =  document.createElement('div');


    
    cardDivElement.classList.add('card');
    cardDivElement.style.width = 80;

    itemImgElement.classList.add('card-img-top');
    itemImgElement.src = item['itemImg']; //! itemImg


    cardBodyDiv.classList.add('card-body');

    cardFlexContainerDiv.classList.add('card-flex-container');

    itemNameTextElement.innerHTML = item['itemName']; //! itemsName
    itemPriceTextElement.innerHTML = item['itemPrice'].toString() + '$'; //! itemPrice
    itemDescreptionTextElement.innerText  = item['itemDescription']; //! itemDexcreption

    showMoreButton.innerHTML = "More info";
    showMoreButton.classList.add('btn');
    showMoreButton.classList.add('btn-primary');

    cardDivElement.appendChild(itemImgElement);
    cardDivElement.appendChild(cardBodyDiv);
    cardBodyDiv.appendChild(cardFlexContainerDiv);
    cardFlexContainerDiv.appendChild(itemNameTextElement);
    cardFlexContainerDiv.appendChild(itemPriceTextElement);
    cardBodyDiv.appendChild(itemDescreptionTextElement);
    cardBodyDiv.appendChild(showMoreButton);

    cardContainerElemnt.appendChild(cardDivElement);
    
}