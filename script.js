




const produits = [
    { id: 1, nom: "Casque Bluetooth", prix: 120 },
    { id: 2, nom: "Clavier Mécanique", prix: 85 },
    { id: 3, nom: "Souris Gamer", prix: 45 }
  ];

  
 function filter01(array,keyword){
    let prodects=[];
    for (let i = 0; i < array.length; i++) {
       if  ( array[i].nom===keyword) {
        prodects.push(array[i]);
       }
    }
return prodects;
 }

 console.log(filter01(produits,"Clavier Mécanique"))





// ====================================================================================================



const etudiants = [
  { nom: "Amina", moyenne: 15 },
  { nom: "Hassan", moyenne: 8 },
  { nom: "Samira", moyenne: 12 }
];





let etudiantscount= 0;

function moyaenne(array ){
    let sum=0;

    for(let i=0;i<array.length;i++){
        sum += array[i].moyenne
        etudiantscount++;
    }
return sum/array.length;
}


console.log(moyaenne(etudiants));


console.log(etudiantscount)



// ======================================================================================


const calculatrice ={

    sum: function ( a,b){
        return a+b;
    },

    na9is: function (a,b){
        return a-b;
    },
   
    darb: function (a,b){
        return a*b;
    },

    kisma: function (a,b){
        return a/b;
    },  
}

console.log(calculatrice.darb(4 ,2))




// =========================================================================================================

























