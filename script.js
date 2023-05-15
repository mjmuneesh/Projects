
// let records = JSON.parse(localStorage.getItem("records")) ?? [];

// const form = document.querySelector("form");
// form.addEventListener("submit", (e) => {  //event listener checks the form contineously 
//     console.log("Submit");
//     e.preventDefault();
//     const formData = new FormData(form);  // Formdata is a pre-defined constructor in javascript which gets data from the form
//     const fd = Object.fromEntries(formData); // Object.fromEntries put the formdata into object
//     let languages = formData.getAll("Languages"); //getAll will store the selected language into array
//     fd.Languages = languages;
//     records.push(fd);
//     localStorage.setItem("records", JSON.stringify(records));

//     form.reset();
//     document.getElementById("showbtn").style.display = "inline";
//     document.getElementById("submit").disabled = true;


// });




// document.getElementById("showbtn").addEventListener("click", () => {
//     const detail = JSON.parse(localStorage.getItem("records"));
//     document.getElementById("listData").innerHTML="";
//     for (item of detail) {
//         for (obj in item) {
//             document.getElementById("listData").innerHTML += item[obj] + "<br>";
//         }
//         document.getElementById("listData").innerHTML += "<br>";

//     }
//     document.getElementById("details").style.display = "block";
//     document.getElementById("showbtn").style.display = "none";


// });



let records = JSON.parse(localStorage.getItem("records")) ?? [];
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  console.log("Submit");
  e.preventDefault();
  const formData = new FormData(form);
  const fd = Object.fromEntries(formData);
  let languages = formData.getAll("Languages");
  fd.Languages = languages;
  records.push(fd);
  localStorage.setItem("records", JSON.stringify(records));
  form.reset();
  document.getElementById("showbtn").style.display = "inline";
  document.getElementById("submit").disabled = true;
});

document.getElementById("showbtn").addEventListener("click", () => {
  showRecords();
});

function showRecords() {
  const detail = JSON.parse(localStorage.getItem("records"));
  document.getElementById("listData").innerHTML = "";
  for (let i = 0; i < detail.length; i++) {
    const record = detail[i];
    const row = document.createElement("div");
    row.classList.add("record-row");

    for (const key in record) {
      const value = record[key];
      const field = document.createElement("div");
      field.classList.add("record-field");
      field.textContent = value;
      row.appendChild(field);
    }

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = () => {
      editRecord(i);
      let updateButton = document.createElement("button");
      updateButton.innerHTML = "Update";
      updateButton.onclick = () => {
        updateRecord(i);
      };
    row.appendChild(updateButton);
    editButton.style.display = "none";

    }
    row.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteRecord(i);
    });
    row.appendChild(deleteButton);

    document.getElementById("listData").appendChild(row);
  }
  document.getElementById("details").style.display = "block";
  document.getElementById("showbtn").style.display = "none";
}
function editRecord(index) {

  const records = JSON.parse(localStorage.getItem("records"));
  const record = records[index];

  let inputtag = document.querySelectorAll("input[type='text'],select");

  let form= document.querySelector("form");
  form.reset();
  let inputgender = document.querySelectorAll("input[type='radio']");
  let inputlanguage = document.querySelectorAll("input[type='checkbox']");
  for (let item in record) {
    inputtag.forEach((input) => {
      if (input.name == item) {
        input.value = record[item];
      }
      if (item == "Languages") {
        for (let element in record[item]) {
          inputlanguage.forEach((input) => {
            if (input.value == record[item][element]) {
              input.checked = true;
            }
          });
        }
      }
      if (item == "gender") {
        inputgender.forEach((input) => {
          if (input.value == record[item]) {
            input.checked = true;
          }
        });
      }
    });
  }
}

function updateRecord(index){
  console.log(records[index])
  let inputtag = document.querySelectorAll("input[type='text'],select");
  let inputgender = document.querySelectorAll("input[type='radio']");
  let inputlanguage = document.querySelectorAll("input[type='checkbox']");
  let updatedRecord = {};
  for (let input of inputtag) {
    updatedRecord[input.name] = input.value;
  }
  for (let input of inputgender) {
    if (input.checked) {
      updatedRecord["gender"] = input.value;
      break;
    }
  }
  let selectedLanguages = [];
  for (let input of inputlanguage) {
    if (input.checked) {
      selectedLanguages.push(input.value);
    }
  }
  updatedRecord["Languages"] = selectedLanguages;
  records[index] = updatedRecord;
  localStorage.setItem("records", JSON.stringify(records));
  form.reset();
  showRecords();
}

  function deleteRecord(index) {

    const records = JSON.parse(localStorage.getItem("records"));

    // Remove the record
    records.splice(index, 1);
    localStorage.setItem("records", JSON.stringify(records));
  
    // Reload the list of records
    document.getElementById("showbtn").click();

  }

