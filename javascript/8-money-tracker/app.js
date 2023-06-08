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
        },
        getItemById: function(id){
            let found = null;

            // Loop through items
            data.items.forEach(function(item){
                if(item.id === id){
                    found = item;
                }
            })

            return found;
        },
        setCurrentItem: function(editableItem){
            data.currentItem = editableItem;
        },
        getCurrentItem:function(){
            return data.currentItem;
        },
        updateItem: function(name, money){
            money = parseInt(money);
            let found = null;

            data.items.forEach(function(item){
                if(item.id === data.currentItem.id){
                    item.name = name;
                    item.money = money;
                    found = item;
                }
            })

            return found;
        },
        deleteItem: function(id){
            // GET IDS
            const ids = data.items.map(function(item){
                return item.id;
            })

            // GET INDEX
            const index = ids.indexOf(id);

            data.items.splice(index, 1);

        },
        clearAllItems: function(){
            data.items = [];
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
    },
    addItemToForm: function(){
        document.querySelector("#item-name").value = ItemCtrl.getCurrentItem().name;
        document.querySelector("#item-money").value = ItemCtrl.getCurrentItem().money;
    },
    updateListItem: function(item){

        let listItems = document.querySelectorAll("li");

        listItems.forEach(function(listItem){

            const itemID = listItem.getAttribute("id");

            if(itemID === `item-${item.id}`){
                document.querySelector(`#${itemID}`).innerHTML = `
                    <strong>${item.name} : <em>${item.money}$</em></strong>
                    <a href="#" class="secondary-content edit-item">
                        <i class="fa fa-pencil"></i>
                    </a>
                `
            }
        })
    },
    deleteListItem: function(id){
        const itemID = `#item-${id}`;
        const item = document.querySelector(itemID);
        item.remove();
    },
    clearItems: function(){
       const itemLi = document.querySelectorAll("li");
       itemLi.forEach(function(li){
         li.remove();
       })
    },
    addActive: function(){
        const lables = document.querySelectorAll("label");
        lables.forEach(function(lable){
          lable.classList.add("active");
        })
    },
    removeActive: function(){
        const lables = document.querySelectorAll("label");
        lables.forEach(function(lable){
          lable.classList.remove("active");
        })
    }

  }
})()


const App = (function(ItemCtrl, UICtrl){

    const loadEventListeners = function(){

        // ADD ITEM EVENT
        document.querySelector(".add-btn").addEventListener("click", itemAddSubmit);

        // ITEM TO EDIT
        document.querySelector(".collection").addEventListener("click", itemToEdit);

        // Update Item Event
        document.querySelector(".update-btn").addEventListener("click", itemUpdateSubmit);

        // Delete Item Event
        document.querySelector(".delete-btn").addEventListener("click", itemDeleteSubmit);

        // Back Item Event
        document.querySelector(".back-btn").addEventListener("click", function(e){
            e.preventDefault();
            UICtrl.clearEditState();
            UICtrl.clearInputState();
            UICtrl.removeActive();
        })

        // Clear Item Event
        document.querySelector(".clear-btn").addEventListener("click", clearAllItemsClick);
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

        // Remove Active class
        UICtrl.removeActive();

        // CLEAR A UI INPUT
        UICtrl.clearInputState();
        
       }

    }


    const itemToEdit = function(e){
        e.preventDefault();

        if(e.target.parentElement.classList.contains("edit-item")){
    
            // SHOW ALL BUTTON
            UICtrl.showEditState();

            // Add active Class
            UICtrl.addActive();

            const listID = e.target.parentElement.parentElement.id;

            // BREAK INTO AN ARRAY
            const listArr = listID.split("-");

            // GET THE AUTUAL ID
            const id = parseInt(listArr[1]);

            // GET ITEM
            const itemToEdit = ItemCtrl.getItemById(id);

            // SET CURRENT ITEM
            ItemCtrl.setCurrentItem(itemToEdit);

            // ADD ITEM TO FROM
            UICtrl.addItemToForm();


        }
    
    }

    const itemUpdateSubmit = function(e){
        e.preventDefault(e);

        // GET ITEM INPUT
        const input = UICtrl.getItemInput();

        // UPDATE ITEM
        const updateItem = ItemCtrl.updateItem(input.name, input.money);

        // UPDATE UI
        UICtrl.updateListItem(updateItem);

        // GET TOTAL MONEY 
        const totalMoney = ItemCtrl.getTotalMoney(); 
        
        // ADD TOTAL MONEY TO UI
        UICtrl.showTotalMoney(totalMoney);

        // CLEAR A UI INPUT
        UICtrl.clearInputState();

        // Clear All button
        UICtrl.clearEditState();

         // Remove Active class
         UICtrl.removeActive();
    }

    const itemDeleteSubmit = function(e){
        e.preventDefault();
        // GET CURRENT ITEM
        const currentItem = ItemCtrl.getCurrentItem();

       // Delete from the data structure
       ItemCtrl.deleteItem(currentItem.id); 

       // Delete from ui
       UICtrl.deleteListItem(currentItem.id);

        // GET TOTAL MONEY 
        const totalMoney = ItemCtrl.getTotalMoney(); 
        
        // ADD TOTAL MONEY TO UI
        UICtrl.showTotalMoney(totalMoney);

        // CLEAR A UI INPUT
        UICtrl.clearInputState();

        // Clear All button
        UICtrl.clearEditState();

         // Remove Active class
         UICtrl.removeActive();

         if(ItemCtrl.getItems().length === 0){
            document.querySelector(".no-item").style.display = "block";
         }
    }

    const clearAllItemsClick = function(e){
        e.preventDefault();

       // Clear All From data structure
       ItemCtrl.clearAllItems(); 

       // CLear All from UI
       UICtrl.clearItems();

        // GET TOTAL MONEY 
        const totalMoney = ItemCtrl.getTotalMoney(); 
        
        // ADD TOTAL MONEY TO UI
        UICtrl.showTotalMoney(totalMoney);

        // CLEAR A UI INPUT
        UICtrl.clearInputState();

        document.querySelector(".no-item").style.display = "block";
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