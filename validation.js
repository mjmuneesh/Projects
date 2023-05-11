


const emptyChecker = {
    name: true,
    email: true,
    contact: true,
    address: true,
    Languages: true,
    hobbies: true
};
const isValid = {
    name: false,
    email: false,
    contact: false
};
const userInput = document.querySelectorAll("input, select");  //getting all input and select tags as an array
userInput.forEach((input) => {   //iterating the array
    input.addEventListener("blur", (event) => {
        let target= event.target; //getting current input field 
        let parent=target.parentNode; //getting parent of current input field
        let tagName = target.name; //getting current input field name
        let empty = false, valid = true;
        if(target.id=="search"){
            return;
        }
        


        if(parent.querySelector("#error")){}
        else{
            let error = document.createElement("span"); // we create a span tag for error
            error.setAttribute("id","error"); // we gave an id to the span tag which is error
            parent.appendChild(error); // now we append the span tag in the parent node
        }

        // Checking if any input field is empty or not
        if(target.value.length === 0){
            emptyChecker[tagName] = true;
        }
        else if(emptyChecker[tagName] == true) {
            emptyChecker[tagName] = false;
        }




        // Checking if name field contains only alphabets or not
        if (target.name == "name" && emptyChecker[tagName] == false) {
            if(/^[a-zA-Z\s]{2,30}$/.test(target.value)){
               
               isValid[tagName] = true;
            }
            else{
                parent.querySelector("#error").innerHTML="*Name should only be alphabets";
                isValid[tagName] = false; 
            }
        }

        
        // Checking if email is valid or not
        if(target.name == "email" && emptyChecker[tagName] ==false){
            // let regex = RegExp();
            if(/^([a-zA-Z0-9\_\.\-])+\@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{2,4})+$/g.test(target.value)){
               
                isValid[tagName] = true;
             }
             else{
                parent.querySelector("#error").innerHTML="*Invalid Email";
                isValid[tagName] = false; 

             }
        }

        // Checking if contact is of 10 digits and number contains only digits
        if (target.name == "contact" && emptyChecker[tagName] == false) {
            if (target.value.length === 10 && /^\d+$/.test(target.value)) {
             
                isValid[tagName] = true;
            }
            else {
                parent.querySelector("#error").innerHTML = "Please provide a valid number."
                isValid[tagName] = false;
            }
        }

        // Checking if any language is selected or not
        if(target.name == "Languages"){
            let selectedLang = document.querySelectorAll("input[type='checkbox']:checked");
            if(selectedLang.length == 0){
                emptyChecker[tagName]=true;
            }
            else if(emptyChecker[tagName]==true){ 
                emptyChecker[tagName] = false
            }
        }
        

        // Checking if a hobby is selected or not
        if(target.name == "hobbies"){
            if(target.value == "select hobbies"){
                emptyChecker[tagName] = true;
            }
            else if(emptyChecker[tagName] == true){
                emptyChecker[tagName] = false;
            }
        }

        // checks validity of input tag
        if(isValid[tagName]){
            parent.querySelector("#error").innerHTML="";
        }

        // checks if input field is empty or not
        if (emptyChecker[tagName]) {
            parent.querySelector("#error").innerHTML ="*Field Can't Be Empty."
        }
        else if(isValid[tagName] == true || isValid[tagName] == undefined){
            parent.querySelector("#error").innerHTML="";
        }

        
        // Checking if any input field is left empty
        for(let key in emptyChecker){
            if(emptyChecker[key]==true){
                empty = true;
            }
        }
        // Checking if any input field is invalid
        for(let key in isValid){
            if(isValid[key]==false){
                valid = false;
            }
        }

        // Enabling submit button if all fields are filled and each field is valid.
        if(empty == false && valid == true){
            document.querySelector("#submit").disabled = false;
        }
        else{
            document.querySelector("#submit").disabled = true;
        }

    })
});

