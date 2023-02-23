const promise= await fetch("http://localhost:8080/EsercizioAPI/api");
const respone= await promise.json();
console.log(respone);