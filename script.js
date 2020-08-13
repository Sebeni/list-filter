let adventuresDivs = document.getElementsByClassName("adventure");
let searchBar = document.getElementById("search-bar");

searchBar.addEventListener("keyup", (event)=> {
    let inputText = searchBar.value;
    
    for (let i = 0; i < adventuresDivs.length; i++) {
        let div = adventuresDivs[i];
        if(div.innerHTML.toLowerCase().includes(inputText.toLowerCase())){
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }
})