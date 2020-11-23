(function(){
//Start
var staff =
 [
 {
 name : "Bob Smith",
 email : "b.smith@busy.com"
 },
 {
 name : "Jane Johnson",
 email : "j.johnson@busy.com"
 },
 {
 name : "Ethan Hawkson",
 email : "e.hawkson@busy.com"
 },
 {
 name : "Julie Grant",
 email : "j.grant@busy.com"
 }
]
staff.forEach(function(element) {
    var newStaffRow = document.createElement("tr");
    var newStaffName = document.createElement("td");
    newStaffName.innerHTML = element.name;
    var newStaffEmail = document.createElement("td");
    newStaffEmail.innerHTML = element.email;
    newStaffRow.appendChild(newStaffName);
    newStaffRow.appendChild(newStaffEmail);
    document.getElementById('staffTable').appendChild(newStaffRow);
    });

    localStorage.setItem("count", 1);

//End
})