// STORAGE CONTROLLER, ITEM CONTROLLER, UI CONTROLLER


// STORAGE CONTROLLER
// const StorageCtrl = (function(){
//   console.log("Im Storage")
// })();


// ITEM CONTROLLER

const ItemCtrl = (function(){

    //  DATA STRUCTURE / STATE

    const data = {
        items: [
            {id:0, name:"clothes", money: 200},
            {id:1, name:"shopping", money: 500},
            {id:2, name:"food", money: 700},
        ],
        currentItem:null,
        totalMoney:0
    }

    return {
        getItems: function(){
            return data.items;
        }
    }

})()


// UI CONTROLLER

const UICtrl = (function(){
  
  return{
    populateItemsList: function(items){
        let html = "";

        items.forEach(function(item){
            html += `<li class="collection-item" id="item-${item.id}">
            <strong>${item.name} : <em>${item.money}$</em></strong>
            <a href="#" class="secondary-content edit-item">
                <i class="fa fa-pencil"></i>
            </a>
          </li>` 
        });

        // Insert list item 
        document.querySelector("#item-list").innerHTML = html;
    },
    clearEditState: function(){
        document.querySelector(".add-btn").style.display = "inline";
        document.querySelector(".update-btn").style.display = "none";
        document.querySelector(".delete-btn").style.display = "none";
        document.querySelector(".back-btn").style.display = "none";
    },
    getItemInput: function(){
        return {
            name: document.querySelector("#item-name").value,
            money: document.querySelector("#item-money").value
        }
    }

  }
})()


const App = (function(ItemCtrl, UICtrl){

    const loadEventListeners = function(){

        // ADD ITEM EVENT
        document.querySelector(".add-btn").addEventListener("click", itemAddSubmit);
    }


    const itemAddSubmit = function(e){
       e.preventDefault();

       // GET INPUT FROM UI
       const input = UICtrl.getItemInput();

       // Validate

       if(input.name === "" || input.money === ""){
        alert("Please fill the fileds")
       }else {
        console.log(input);
       }

    }


    return {
        init: function(){

            UICtrl.clearEditState();

            const items = ItemCtrl.getItems();
            
            if(items.length > 0){
                UICtrl.populateItemsList(items);
                document.querySelector(".no-item").style.display = "none";
            } else {
                document.querySelector(".no-item").style.display = "block";
            }

            loadEventListeners();
        }
    }
    
})(ItemCtrl, UICtrl);

App.init();