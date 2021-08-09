
//homework for hack your future of javascript week2
//flight Booking fullName function
// By Dejene Daba



let firstName = "dejene";
let lastName = "daba";
let  useFormalFullName = true;
   
function getFormalFullName(firstName, lastName, useFormalName) {
        if (useFormalName) {
            return  "lord" + " " + firstName + " " + lastName;
        } else {
           return firstname + " " + lastname;
        }
}

console.log(getFormalFullName(firstName, lastName, useFormalFullName ));
