const addBtn = document.querySelector (".add-btn");
const ListContent= document.querySelector(".list-content");



const addNewItem = () => {
    const StoreInput= document.querySelector(".store-input");
   if(StoreInput.value){
       const ListItem = document.createElement("div");
         const ListText = document.createElement("div");
         const Price= document.createElement("div");
         const Moins= document.createElement("div");
         const Count= document.createElement("input");
         const Plus= document.createElement("div"); 
         const ListDelete = document.createElement("div");
         
        
    //traitement de ListItem:
   ListItem.classList.add("list-item");
   ListContent.appendChild(ListItem);

   //traitemet de list text:
    ListText.classList.add("list-text");
    ListText.innerHTML= StoreInput.value;
    ListItem.appendChild(ListText);

    // traitement de price:
    Price.classList.add("price");
    const priceValue= Math.floor(Math.random() * 101)+1 
    Price.innerHTML= priceValue +" $";
    ListItem.appendChild(Price);
    // traitement de moins:
    Moins.classList.add("moins");
    Moins.innerHTML="-";
    ListItem.appendChild(Moins);
    let m=0;
    Moins.addEventListener("click",()=>{
    if(m > 0){
      m=m-1
      Count.value = m;
    } else return m=0;
  })
  // traitement Count:
  Count.classList.add("count");
  Count.setAttribute("type", "text");
  Count.setAttribute("value", 0);
  ListItem.appendChild(Count);

  //traitement de plus:
  Plus.classList.add("plus");
  Plus.innerHTML="+"
  ListItem.appendChild(Plus);
  Plus.addEventListener("click",()=>{
    m=m+1
    Count.value = m;
})

   

    // traitement du heart:

    const HeartContainer= document.createElement("div");
    const Heart= document.createElement("div");
    HeartContainer.classList.add("h_container");
    Heart.classList.add("far");
    Heart.classList.add("fa-heart");
    HeartContainer.appendChild(Heart);
    ListItem.appendChild(HeartContainer);
    HeartContainer.style.display="flex";

   // heart button color:
  HeartContainer.addEventListener("click",() => {
    HeartContainer.style.backgroundColor="red";
    console.log("heart")
   });
   
    // traitement de ListDelete:
   ListDelete.classList.add("list-delete");
   ListDelete.innerHTML="Delete";
   ListItem.appendChild(ListDelete);
   
   // clearing input bar
   StoreInput.value="";

   //bouton delete
   const index = document.querySelectorAll(".list-item").length - 1;
   ListDelete.addEventListener("click", () => {
    console.log("delete me")
    deleteBtn(index);
  });
  
//total prix:
//1- total price container:
const totalPrice= document.querySelector(".totalPrice");
totalPrice.style.display="flex";
//2- total text:
const total= document.querySelector(".total");
total.innerHTML="Total:"
//3-pricetotal:
const priceTotal=document.querySelector(".priceTotal");

//4- calcul total:
const Prices=document.querySelectorAll(".price");
const Counts=document.querySelectorAll(".count");

 total.addEventListener("click", () => {
    let sum = 0;
    for (let i = 0; i < Prices.length; i++) {
        sum += Prices[i]*Counts[i].value;
       console.log(sum);
    }
    priceTotal.value=sum + " $";
    console.log("sum");
 })
  }};
  //
  const  deleteBtn = (i) => {
    console.log(i);
    const Items = document.querySelectorAll(".list-item");
    Items[i].style.display = "none";
  };

  
addBtn.addEventListener("click", () => {
    console.log("click on me")
    addNewItem();
  });
  

 ////////////////////////
//  const totalPrice=  document.querySelector(".total-price");
// // totalPrice.style.display="flex";

// totalPrice .addEventListener("click", () => {
//     const checks = document.querySelectorAll(".list-check");
//     for (let i = 0; i < checks.length; i++) {
//       if (checks[i].checked) {
//         checks[i].parentNode.remove();
//         // const prices= document.querySelectorAll(".count); 
//         // totalPrice.innerHTML= prices*Count.value +" $";
//         console.log("pti")
       
//       }
//      console.log("pri")
//     }
    
//   });

  