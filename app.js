var purseList ={
    Gucci:{
        Hand_Bag:{
            name:"Hand Bag",
            price:"PKR 10,000",
            image:"images/gucci1.png"
         },
        calches:{
            name:"Calche",
            price:"PKR 8,000",
            image:"images/gucci2.png"
        }

    },
    Prada:{
        bagpacks:{
            name:"Bag Pack",
            price:"PKR 5,000",
            image:"images/prada4.png"

        },
        shoulderbags:{

            name:"Shoulder Bag",
            price:"PKR 6,000",
            image:"images/prada3.png"
        }

    },
   
    Chanel:{
      shoulderbags:{
        name:"Shoulder Bag",
        price:"PKR 5,000",
        image:"images/chanel1.png"
      },
      bagpacks:{
        name:"Bag Pack",
        price:"PKR 8,000",
        image:"images/chanel2.png"
      }
},
    Fendi:{
        shoulderbags:{
            name:"Shoulder Bags",
            price:"PKR 10,000",
            image:"images/fendi1.png"
        },
        bagpacks:{
            name:"Bag Pack",
            price:"PKR 12,000",
            image:"images/fendi2.png"


        }

    },
    Aldo:{
        shoulderbags:{
            name:"Shoulder Bag",
            price:"PKR 30,000",
            image:"images/aldo2.png"
        },
        bagpacks:{
            name:"Bag Pack",
            price:"PKR 15,000",
            image:"images/aldo1.png"
        }

    }
}
var main = document.getElementById("main");
for(var key in purseList){
    for(var key1 in purseList[key]){
        var obj = purseList[key][key1];
        main.innerHTML +=`
        <div class="card1">
 <div class="cardImg"><img src="${obj.image}"></div>
 <div class="card_price">${obj.name} </div>
 <div class="card_type">${obj.price}</div>
 </div>
        `
    }
}








