// 1

function getFirstEmployeeFirstName(array,keyword){
    let list=[];
    for (let i = 0; i < array.length; i++) {
       
        if (array[i].firstName===keyword) {
            list.push(array[i])
            
        }
        
    }
    return list
  }

  console.log(getFirstEmployeeFirstName(employees,"Jean"))








  
  function getLastEmployeeLastName(array, keyword){
    let search =[];
    for (let i = 0; i < array.length; i++) {
        if (array[i].lastName===keyword) {

        search.push(array[i])
        }
    }
    return search
  }

  console.log(getLastEmployeeLastName(employees,"Leroy"))







  
function getEmployeeDepartmentById(array,int){
    let id=[];
    for (let i = 0; i < array.length; i++) {
    if(array[i].id===int){
        id.push(array[i])

    }
        
    }

    return id;
}

console.log(getEmployeeDepartmentById(employees,5))