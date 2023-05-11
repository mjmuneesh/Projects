document.querySelector("#search").addEventListener("keyup",()=>{
    
    const detail = JSON.parse(localStorage.getItem("records"));
    let searchValue = document.getElementById("search").value;

    let filter = detail.filter((item)=>{
        if(item.name.includes(searchValue)){
            return item;

            
        }
    });


    document.getElementById("details").innerHTML="";

    for (let item of filter) {
        for (let obj in item) {
            document.getElementById("details").innerHTML += item[obj] + "<br>";
        }
        document.getElementById("details").innerHTML += "<br>";

    }
    document.getElementById("details").style.display = "block";
});