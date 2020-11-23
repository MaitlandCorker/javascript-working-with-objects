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
var qualifications = [
    {
    subject : "Maths",
    grade : "A"
    },
    {
    subject : "English",
    grade : "B"
    },
    {
    subject : "French",
    grade : "C"
    },
    {
    subject : "Physics",
    grade : "B"
    }
    ];

console.info(qualifications[1].subject)

console.dir(myObject)
console.info(myObject.getInfo())
//End
})