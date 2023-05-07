
let records = [];

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {  //event listener checks the form contineously 
    e.preventDefault();
    // validateForm();
    const formData = new FormData(form);  // Formdata is a pre-defined constructor in javascript which gets data from the form
    const fd = Object.fromEntries(formData); // Object.fromEntries put the formdata into object
    let languages = formData.getAll("Languages"); //getAll will store the selected language into array
    fd.Languages = languages;
    records.push(fd);
    localStorage.setItem("records", JSON.stringify(records));

    let getValue = JSON.parse(localStorage.getItem("records")); //json.parse converts string back to array

    console.log(getValue);

    document.getElementById("showbtn").style.display = "inline";

});

const textInput = document.querySelectorAll('input[type="text"]');

textInput.forEach((input) => {
    input.addEventListener("blur", (event) => {  //escapes input field 
        let target = event.target; //takes indiviual input tag
        let error = document.createElement("span");
        error.setAttribute("id", "error");  //it gives id to the span tag 
        let parent = target.parentNode;

        
        //for checking empty fields
        if (target.value.length == 0) {
            if (!parent.querySelector("#error")) {  //it checks if there is error tag already or not if not then go to below step
                parent.appendChild(error);
                error.innerHTML = "*field can't be empty";
            }
        } else {
            if (parent.querySelector("#error")) {
                parent.querySelector("#error").innerHTML = "";
            }
        }
        //for checking contact validity
        if (target.name == "contact") {
            // alert(target.value.length);
            if (target.value.length != 10) {
                if (!parent.querySelector("#error")) {
                    parent.appendChild(error);
                    error.innerHTML = " *Contact should be 10 digits long.";
                }
                else{
                    parent.querySelector("#error").innerHTML += " *Contact should be 10 digits long.";
                }
            }
        }
    })

})






// function validateForm() {
//     const nameInput = form.querySelector('input[name="name"]');
//     const emailInput = form.querySelector('input[name="email"]');
//     const contactInput = form.querySelector('input[name="contact"]');
//     const addressInput = form.querySelector('input[name="address"]');
//     const genderInput = form.querySelector('input[name="gender"]');

// if (!nameInput.value){
//     alert('Please enter your name.');
//     return;
// }
// if (!emailInput.value){
//     alert('Please enter your email.');
//     return;
// }
// if (!contactInput.value){
//     alert('Please enter your contact.');
//     return;
// }
// if (!addressInput.value){
//     alert('Please enter your address.');
//     return;
// }
// if (!genderInput.value){
//     alert('Please choose a gender');
//     return;
// }

// }

document.getElementById("showbtn").addEventListener("click", () => {
    const detail = JSON.parse(localStorage.getItem("records"));

    for (item of detail) {
        for (obj in item) {
            document.getElementById("details").innerHTML += item[obj] + "<br>";
        }
        document.getElementById("details").innerHTML += "<br>";

    }
    document.getElementById("details").style.display = "block";

});




