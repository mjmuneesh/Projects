
let records = JSON.parse(localStorage.getItem("records")) ?? [];

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {  //event listener checks the form contineously 
    console.log("Submit");
    e.preventDefault();
    const formData = new FormData(form);  // Formdata is a pre-defined constructor in javascript which gets data from the form
    const fd = Object.fromEntries(formData); // Object.fromEntries put the formdata into object
    let languages = formData.getAll("Languages"); //getAll will store the selected language into array
    fd.Languages = languages;
    records.push(fd);
    localStorage.setItem("records", JSON.stringify(records));

    form.reset();
    document.getElementById("showbtn").style.display = "inline";
    document.getElementById("submit").disabled = true;


});




document.getElementById("showbtn").addEventListener("click", () => {
    const detail = JSON.parse(localStorage.getItem("records"));
    document.getElementById("listData").innerHTML="";
    for (item of detail) {
        for (obj in item) {
            document.getElementById("listData").innerHTML += item[obj] + "<br>";
        }
        document.getElementById("listData").innerHTML += "<br>";

    }
    document.getElementById("details").style.display = "block";
    document.getElementById("showbtn").style.display = "none";


});




