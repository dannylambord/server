

    var acc = {
        name : "Danny"
    };

class Account{
    constructor(name){
        this.name = name;
    }
}

function fetchData(type,ext,sen) {
    let x = sen;

    return new Promise((resolve, reject)=>{

            const req = new XMLHttpRequest();
                    
        req.onreadystatechange = () =>{
            if (req.readyState === 4) {
                if (req.status === 200) {
                    resolve(req);
                    console.log("connected");
                } else {
                    reject("Failed");
                }
            }

        };
            
    req.open(type, "http://localhost:8080/JavaEEServer-1.0/api" + ext);
    req.setRequestHeader("Content-Type","application/json");
    req.send(x);
        
    })
}



    function butFunc(){
       var text = document.getElementById("user").value;
       sessionStorage.setItem("user", text);
       console.log(sessionStorage.getItem("user").value)
       fetchData("GET", "/accounts/" + text,null).then((req)=>{
    console.log(req.responseText);
      
    })};

    function butFunc1(){
        let s = new Account("Danny");
        s = JSON.stringify(s);
       fetchData("POST","/accounts",s).then((req)=>{ 
    console.log(req.responseText);
    })};

    function butFunc2(){
        let y = new Account("Lambord");
        y = JSON.stringify(y);
        var text = document.getElementById("user").value;
       fetchData("PUT","/accounts/" + text, y).then((req)=>{
    console.log(req.responseText);
    })};

    function butFunc3(){
        var text = document.getElementById("user").value;
       fetchData("DELETE","/accounts/" + text, null ).then((req)=>{
    console.log(req.responseText);
    })};

    function next(){
          window.location.href = "page2.html";
    }

    function session(){
        document.getElementById("result").innerHTML = sessionStorage.getItem("user").value;
    }
