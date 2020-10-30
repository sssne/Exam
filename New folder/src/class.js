class employee{
    constructor(id, name , address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }

    display(){
        return `${this.id} with name as ${this.name} from ${this.address}`;
    }
}

class empManager{
    constructor(){
        this.employees = [];

    }
    addEmployee(emp){
        if(emp == null)
          throw " Employee not created"
        this.employees.push(emp);
    }

    removeEmployee(id){
        for(let index =0; index <this.employees.length; index++){
           const element = this.employees[index];
        if(element.id == id){
            this.employees.splice(index,1);
            return;
        }
         
        
    }
throw "employee not found to delete"
}

updateEmployee(emp){
    let selected=this.employees.find((e)=>e.id==emp.id);
    if(selected==undefined)
        throw "Employee not found to update";
        selected.name=emp.name;
        selected.address=emp.address;
}

getAllEmployees(){
    return this.employees;
}
getEmployee(id){
    return this.employees.find((e)=>e.id==id);
}
}