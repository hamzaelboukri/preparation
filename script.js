




// const produits = [
//     { id: 1, nom: "Casque Bluetooth", prix: 120 },
//     { id: 2, nom: "Clavier Mécanique", prix: 85 },
//     { id: 3, nom: "Souris Gamer", prix: 45 }
//   ];

  
//  function filter01(array,keyword){
//     let prodects=[];
//     for (let i = 0; i < array.length; i++) {
//        if  ( array[i].nom===keyword) {
//         prodects.push(array[i]);
//        }
//     }
// return prodects;
//  }

//  console.log(filter01(produits,"Clavier Mécanique"))





// // ====================================================================================================



// const etudiants = [
//   { nom: "Amina", moyenne: 15 },
//   { nom: "Hassan", moyenne: 8 },
//   { nom: "Samira", moyenne: 12 }
// ];





// let etudiantscount= 0;

// function moyaenne(array ){
//     let sum=0;

//     for(let i=0;i<array.length;i++){
//         sum += array[i].moyenne
//         etudiantscount++;
//     }
// return sum/array.length;
// }


// console.log(moyaenne(etudiants));


// console.log(etudiantscount)



// // ======================================================================================


// const calculatrice ={

//     sum: function ( a,b){
//         return a+b;
//     },

//     na9is: function (a,b){
//         return a-b;
//     },
   
//     darb: function (a,b){
//         return a*b;
//     },

//     kisma: function (a,b){
//         return a/b;
//     },  
// }

// console.log(calculatrice.darb(4 ,2))




// // =========================================================================================================



// let tab1=[ 1,3,4,5,6,]
// let tab2=[2,3,4,7]
// let tab3=[];

// for (let i = 0; i < tab1.length; i++) {
//   for (let j = 0; j < tab2.length; j++) {

//     if (tab1[i]==tab2[j]) {
//         tab3.push(tab1[i])
//          }  
// }    
// }
// console.log(tab3)




// // ========================================================================


// let name ="aaaannnnsjssss" ;
// let counts =[];

// for (let i = 0; i < name.length; i++) {
//     let char = name[i];
//     if (counts[char]) {
//         counts[char]++;
//     } else {
//         counts[char] = 1;
//     }
// }

// console.log(counts);

// console.log("=======================================")

// let tab=[2,3,4,5,6,7,8,2];

// let sum=[]

// for (let i = 0; i < tab.length; i++) {
    
//     sum=tab[i]+tab[i]+1;
//     console.log(sum)

// }


// =======================================================================================



// let arr =[1,2,3,4,5,6,7];

// for (let i = 0; i < arr.length; i ++) {
// if (arr[i]%2 ===0) {    
//     console.log("is per",arr[i])  
// }

// else{
//     console.log("is imper",arr[i])
// }

// }





// const items = [
//     { category: 'fruit', name: 'apple' },
//     { category: 'fruit', name: 'banana' },
//     { category: 'vegetable', name: 'carrot' }
//   ];
// //   console.log(groupByCategory(items)); 
// //   { 
// // fruit: [{ category: 'fruit', name: 'apple' }, 
// //   { category: 'fruit', name: 'banana' }],
// //    vegetable: [{ category: 'vegetable', name: 'carrot' }] }



// function getfruit(array,keyword){
//     let fruit=[]
//     let vegetable=[]
//     let itemss=[]
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].category===keyword) {
//             fruit.push(array[i])
//         }
//         else{
//             vegetable.push(array[i])
//         }
//     }
//     itemss.push(fruit,vegetable)
//    return itemss ;
// }
// console.log(getfruit(items,"fruit"))


// let word="hello";

// function namew(arr){
//   let obje={}
//   for (var i = 0; i<arr.length; i++ ) {
//    let char=arr[i];
//    if (obje[char]) {
//      obje[char]++;
//    }
   
//    else
//    obje[char]=1;
//   }
  
//   return obje;
// }

// console.log(namew(word))


let tab=[1,2,3]

let tab1=[2,4,5,6,7,8,9,3,2,1]

let nams=true
function arr(array,array1){
    for (let i = 0; i < array.length; i++) {
       for (let j = 0; j < array1.length; j++) {
        if (array[i]===array1[j]) {
            nams=true
            
        }
        else 
        nams=false
        
       }
    }
    return nams

}

console.log(nams)