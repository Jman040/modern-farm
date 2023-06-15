

export const catalog = (seedArray) =>{
    var htmlString = "";
    
    for (const seed of seedArray) {
        htmlString += `\n
        <p class="plant">${seed.type}</p>
        \n`;

    }

        document.querySelector(".container").innerHTML=htmlString  

};