
    const aritGeo = (chkArray) => {
        let arith=0;          //variable declaration initialized with 0
        let geo=0;            //variable declaration initialized with 0
          for (let i=0;i<chkArray.length-2;i++){      //loops through the array
              if(chkArray[i+1]-chkArray[i]===chkArray[i+2]-chkArray[i+1]){       //compares difference between two element if equal
                  arith++;           //increment count of arith variable
              }
              else if(chkArray[i+1]/chkArray[i]===chkArray[i+2]/chkArray[i+1]){     //compares ratio between two elements of array if equal
                  geo++;         //increment count of geo variable
              }
          }
          
          if(chkArray.length === 0){       //returns 0 for empty array
                return 0;
                console.log(0);
          }else if(chkArray.length < 3){                   //progression can only be calculated for 3 or more elements
                return "Array length not sufficient";
                console.log("Array length not sufficient")
          }else if(typeof chkArray === "string"){      //returns error if element is string
              console.log("False Value");  
              return "False Value";
                
          }
          else if(arith===chkArray.length-2)     //validates arithmetic sequence if iterations is same through the array
          {
            return "Arithmetic";
            console.log("Arithmetic")
          }else if(geo===chkArray.length-2)      //validates geometric sequence if iterations is same through the array
          {
            return "Geometric";
            console.log("Geometric");
          }
          else {
            return -1;           //returns -1 if sequence is neither arithmetic nor geometric
            console.log(-1);
          }
              
      }
  
      export default aritGeo;