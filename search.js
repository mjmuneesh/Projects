document.querySelector("#search").addEventListener("keyup",()=>{
    
    const detail = JSON.parse(localStorage.getItem("records"));
    let searchValue = document.getElementById("search").value;

    let filter = detail.filter((item)=>{
        if(item.name.includes(searchValue)){
            return item;

            
        }
    });


    document.getElementById("listData").innerHTML="";

    for (let item of filter) {
        for (let obj in item) {
            document.getElementById("listData").innerHTML += item[obj] + "<br>";
        }
        document.getElementById("listData").innerHTML += "<br>";

    }
    document.getElementById("listData").style.display = "block";
});