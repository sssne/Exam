describe('Suite to test classes',()=>{

    let emp=null;
    beforeAll(()=>{
        console.log("this executed before any op begin");
    })
    beforeEach(()=>{
        emp=new employee(123,"Neema","Mysore");
    })
    afterEach(()=>{
        console.log("this executed after any op ");
    })
    afterAll(()=>{
        console.log("this executed after all op ");
    })
      

    it('should set id',()=>{
        const emp=new employee(123,"Neema","Mysore")
        expect(emp.id).toBe(123);
    });
    it('should set name',()=>{
        const emp=new employee(123,"Neema","Mysore")
        expect(emp.name).toBe("Neema")
    });
    it('should set address',()=>{
        const emp=new employee(123,"Neema","Mysore")
        expect(emp.address).toBe("Mysore")
    });
});






   describe('Testing for empmanager',()=>{
        let mgr =null;
        beforeAll(()=>{
            mgr=new empManager();
            mgr.addEmployee(new employee(123,"Neema","Mysore"));
            mgr.addEmployee(new employee(234,"Riya","kerala"));
            mgr.addEmployee(new employee(555,"Shahana","Wayanad"));

        })

        const func=()=>{
            mgr.addEmployee(null);
            
        }
    
    it('should throw exception if invalid emp is added',()=>{
        let emp;
    
        expect(func).toThrow();
    })
    it('shound add the emp',()=>{
    
        mgr.addEmployee(new employee(888,"Neema","India"));
        expect(mgr.employees.length).toBe(4);

    })
    it('shound update the emp',()=>{
        const emp=new employee(123,"Neema","Bathery");
        mgr.updateEmployee(emp);
        expect(mgr.employees[0]).toEqual(emp);
    })

   it("delete element",()=>{
        mgr.removeEmployee(123);
        expect(mgr.employees).not.toContain(new employee(123,"Neema","M"));
    });


});













describe('Check fo Arrays',()=>{
    it('should check for Arrays',()=>{
        let arr=[2,3,4];
        expect(arr).toEqual([2,3,4]);
    });
    it('should check for same sequence',()=>{
        let arr=[2,3,4];
        expect(arr).not.toEqual([3,2,4]);
    });
    it('same content',()=>{
        let arr=[4,5,6];
        expect(arr.sort()).toEqual([5,6,4].sort());
    });

})