function addItem(time, message, date) {
    let table = document.getElementById("table");
    let tr = document.createElement("tr");
    let timeNode = document.createElement("td")
    timeNode.innerText = time+""
    timeNode.classList.add("width-fixed");
    tr.appendChild(timeNode);

    let messageNode = document.createElement("td");
    messageNode.innerText = message
    messageNode.classList.add("width-fixed");
    tr.appendChild(messageNode)

    let dateNode  = document.createElement("td");
    dateNode.innerText = date+""
    dateNode.classList.add("width-fixed");
    tr.appendChild(dateNode);


    // <button type="button" class="btn btn-primary">Primary</button>
    let doneButton = document.createElement("button");
    doneButton.type = "button"
    doneButton.id = "db";

    doneButton.classList.add("btn", "btn-primary")    
    doneButton.addEventListener("click", (ev)=>{
        doneButton.disabled = true
        doneButton.classList.remove("btn-primary")
        doneButton.classList.add("btn-secondary")
        doneButton.innerText = "Completed"
        doneButton.parentElement.parentElement.remove()
        let childs = doneButton.parentElement.parentElement.childNodes
        let time = childs[0].innerText;
        let message = childs[1].innerText;
        let date = childs[2].innerText;
        console.log(time, message, date)
        let json = JSON.parse(localStorage.getItem(date+""))
        console.log(json)
        delete json[time+""]
        console.log(json)
        localStorage.setItem(date+"", JSON.stringify(json))
        if (localStorage.getItem(date+"") === "{}")
        {
            localStorage.removeItem(date+"");
        }
    })
    doneButton.innerText = "Done"

    let optionsNode = document.createElement("td");
    optionsNode.classList.add("width-fixed");
    optionsNode.appendChild(doneButton)
    tr.appendChild(optionsNode);

    table.appendChild(tr);
}


function updateTable() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const item = localStorage.getItem(key);
        const json = JSON.parse(item);
        const json_key = Object.keys(json)
        json_key.forEach(k => {
            let time = k;
            let message = json[k];
            addItem(time, message, key)
        });
        
    }
    
}