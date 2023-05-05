
let records=[];

const form = document.querySelector("form"); 
form.addEventListener("submit",(e)=>{  //event listener checks the form contineously 
    e.preventDefault();
    const formData = new FormData(form);  // Formdata is a pre-defined constructor in javascript which gets data from the form
    const fd = Object.fromEntries(formData); // Object.fromEntries put the formdata into object
    let languages = formData.getAll("Languages"); //getAll will store the selected language into array
    fd.Languages= languages;
    records.push(fd);
    localStorage.setItem("records",JSON.stringify(records)); 

    let getValue = JSON.parse(localStorage.getItem("records")); //json.parse converts string back to array

    console.log(getValue);

    document.getElementById("showbtn").style.display="inline";

})

document.getElementById("showbtn").addEventListener("click", () =>{
const detail = JSON.parse(localStorage.getItem("records"));
 
for(item of detail){
for(obj in item){
    document.getElementById("details").innerHTML+= item[obj]+"<br>";
}
document.getElementById("details").innerHTML+= "<br>";

}
document.getElementById("details").style.display="block";

});







//ANOTHER WAY OF DOING IT BUT IT IS NOT A BEST PRACTICE

// function saveData(){
// let Name=document.getElementById("name").value
// let email=document.getElementById("email").value
// let contact=document.getElementById("contact").value
// let address=document.getElementById("address").value
// let gender;
// let genderList = document.querySelectorAll("#gender");
// for(let item of genderList){
//     if(item.checked == true){
//         gender=(item.value);
//     }
// }

// let languages="";
// let languagesList = document.querySelectorAll("#Languages");
// for(let Item of languagesList){
//     if(Item.checked==true){
//         languages = languages.concat(Item.value, ",");
//     }
// }
// let hobbies = document.getElementById("hobbies").value;

// localStorage.setItem("Name",Name);
// localStorage.setItem("Email",email);
// localStorage.setItem("Contact",contact);
// localStorage.setItem("address",address);
// localStorage.setItem("gender",gender);
// localStorage.setItem("languages",languages);
// localStorage.setItem("hobbies",hobbies);


// document.getElementById("showbtn").style.display="inline";
// }

// function showData(){
// let name=localStorage.getItem("Name");
// let email=localStorage.getItem("Email");
// let contact=localStorage.getItem("Contact");
// let address =localStorage.getItem("address");
// let gender=localStorage.getItem("gender");
// let languages=localStorage.getItem("languages");
// let hobbies =localStorage.getItem("hobbies");
// document.getElementById("details").innerHTML=name+" "+email+" "+contact+" "+address+" "+gender+" "+languages+" "+hobbies;
// document.getElementById("details").style.display="block";
// }



















// let records=[];

// const form = document.querySelector("form"); 
// form.addEventListener("submit",(e)=>{   
//     e.preventDefault();
//     const formData = new FormData(form);  
//     const Detail = Object.fromEntries(formData);  
//     let languages = formData.getAll("Languages"); 
//     Detail.Languages= languages;
//     records.push(Detail);
//     localStorage.setItem("records",JSON.stringify(records));
//     form.reset();
    
//     document.getElementById("showDetails").style.display="none"; 
//     document.getElementById("showbtn").style.display="inline";
// });

// document.getElementById("showbtn").addEventListener("click", ()=> {
//     let details =document.getElementById("showDetails");
//     let row=document.getElementById("gridRow");
//     row.innerHTML="";

//     records = JSON.parse(localStorage.getItem("records"));

//     for (eachRecord of records){
//         let col=document.createElement("div");
//         col.classList.add("col-md-4", "col-sm-12");
//         row.appendChild(col);
//         let individual = document.createElement("div");
//         individual.classList.add("individual");
//         col.appendChild(individual);
//         let table = document.createElement("table");
//         individual.appendChild(table);
//         for(Item in eachRecord ){
//             let tr=document.createElement("tr");
//             table.appendChild(tr);
//             let th =document.createElement("th");
//             let td= document.createElement("td");
//             let key =document.createTextNode(item.touppercase());
//             let value= document.createTextNode(eachRecord[item]);
//             th.appendChild(key);
//             td.appendChild(value);
//             tr.appendChild(th);
//             tr.appendChild(td);
//         }
//     }
//     details.style.display ="block";
//     document.getElementById("showbtn").style.display="none";
// })