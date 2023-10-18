
// Port for this app must be 8005



document.getElementById("f").addEventListener("submit", (event)=>{
    event.preventDefault();
    let t = document.getElementById("time").value;
    let message = document.getElementById("message").value;
    let date = document.getElementById("date").value;
    
    

    let alerm = {}
    alerm[t] = message
    // alerm.setItem(t, message)
    console.log(alerm)
    let i = localStorage.getItem(date)
    if (i != null)
    {
        let json = JSON.parse(i)
        json[t] = message
        console.log(json)
        localStorage.setItem(date+"", JSON.stringify(json))
    } else {
        localStorage.setItem(date+"", JSON.stringify(alerm))
    }

    // submission complete
    document.getElementById("date").value = null
    document.getElementById("time").value = null
    document.getElementById("message").value = null
})