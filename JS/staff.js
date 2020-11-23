(function(){
//Start

console.info("Hello")

var myObject = { 
    name : "Maitland", 
    surname : "Corker", 
    email : "mcorker7@gmail.co.uk", 
    qualifications :{
        gcse : true, 
        ALevels : true , 
        beng : false},

getInfo : function(){
    return this.name + " " + this.surname
    }
}

console.dir(myObject)
console.info(myObject.getInfo())
//End
})