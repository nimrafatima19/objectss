var purseList ={
    Gucci:{
        Hand_Bag:{
            name:"Hand Bag",
            price:"PKR 10,000",
            image:"images/gucci1.png"
         },
        calches:{
            name:"Calche",
            price:"PKR 8000",
            image:"images/gucci2.png"
        }

    },
    Prada:{
        bagpacks:{
            name:"Bag Pack",
            price:"PKR 5000",
            image:"images/prada2.png"

        },
        shoulderbags:{

            name:"Shoulder Bag",
            price:"PKR 6000",
            image:"images/prada1.png"
        }

    },
   
    Chanel:{

    },
    Fendi:{

    },
    Aldo:{

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








