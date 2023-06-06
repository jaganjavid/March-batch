// STORAGE CONTROLLER, ITEM CONTROLLER, UI CONTROLLER


// STORAGE CONTROLLER
// const StorageCtrl = (function(){
//   console.log("Im Storage")
// })();


// ITEM CONTROLLER

const ItemCtrl = (function(){


    const Item = function(id, name, money){
        this.id = id;
        this.name = name;
        this.money = money
    }

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
        },
        addItem: function(name, money){
            let ID;

            // CREATE A ID
            if(data.items.length > 0){
                ID = data.items[data.items.length - 1].id + 1
            } else{
                ID = 0;
            }
        
            // CONVERT STRING INTO MONEY
            money = parseInt(money);

            // CREATE A NEW ITEM 
            const newItem = new Item(ID, name, money);

           // ADD TO ITEM ARRAY
           data.items.push(newItem);
            
           return newItem;
        },
        getTotalMoney: function(){
            let total = 0;

            if(data.items.length > 0){
                data.items.forEach(function(item){
                    total += item.money
                    data.totalMoney = total;
                })
            } else{
                return data.totalMoney = 0;
            }

            return total;
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
    showEditState: function(){
        document.querySelector(".add-btn").style.display = "none";
        document.querySelector(".update-btn").style.display = "inline";
        document.querySelector(".delete-btn").style.display = "inline";
        document.querySelector(".back-btn").style.display = "inline";
    },
    getItemInput: function(){
        return {
            name: document.querySelector("#item-name").value,
            money: document.querySelector("#item-money").value
        }
    },
    addListItem: function(item){
     // CREATE A LI ELEMENT
     const li = document.createElement("li");

    //  ADD CLASS TO LI
    li.className = "collection-item";

    // ADD ID
    li.id = `item-${item.id}`;

    // INSERT HTML
    li.innerHTML = `<strong>${item.name} : <em>${item.money}$</em></strong>
    <a href="#" class="secondary-content edit-item">
        <i class="fa fa-pencil"></i>
    </a>`;

    // INSERT ITEM TO UL
    document.querySelector(".collection").appendChild(li);

    },
    showTotalMoney: function(totalMoney){
        document.querySelector(".total-money").textContent = totalMoney;
    },
    clearInputState: function(){
        document.querySelector("#item-name").value = "";
        document.querySelector("#item-money").value = "";
    }

  }
})()


const App = (function(ItemCtrl, UICtrl){

    const loadEventListeners = function(){

        // ADD ITEM EVENT
        document.querySelector(".add-btn").addEventListener("click", itemAddSubmit);

        // ITEM TO EDIT
        document.querySelector(".collection").addEventListener("click", itemToEdit);
    }


    const itemAddSubmit = function(e){
       e.preventDefault();

       // GET INPUT FROM UI
       const input = UICtrl.getItemInput();

       // Validate

       if(input.name === "" || input.money === ""){
        alert("Please fill the fileds");
       }else {
        //  Add Item   
        const newItem = ItemCtrl.addItem(input.name, input.money);

        // ADD ITEM TO UI LIST
        UICtrl.addListItem(newItem);

        // GET TOTAL MONEY 
        const totalMoney = ItemCtrl.getTotalMoney(); 
        
        // ADD TOTAL MONEY TO UI
        UICtrl.showTotalMoney(totalMoney);

        // CLEAR A UI INPUT
        UICtrl.clearInputState();
        
       }

    }


    const itemToEdit = function(e){
        e.preventDefault();

        if(e.target.parentElement.classList.contains("edit-item")){
            
            // SHOW ALL BUTTON
            UICtrl.showEditState();
        }
    
    }


    return {
        init: function(){

            UICtrl.clearEditState();

            const items = ItemCtrl.getItems();
            
            if(items.length > 0){
                UICtrl.populateItemsList(items);
                
                // GET TOTAL MONEY 
                const totalMoney = ItemCtrl.getTotalMoney(); 
                
                // ADD TOTAL MONEY TO UI
                UICtrl.showTotalMoney(totalMoney);

                document.querySelector(".no-item").style.display = "none";
            } else {
                document.querySelector(".no-item").style.display = "block";
            }

            loadEventListeners();
        }
    }
    
})(ItemCtrl, UICtrl);

App.init();