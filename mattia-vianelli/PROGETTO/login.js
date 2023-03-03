/*  CAMBIO PAGINE */

// da Login a Signin
function mostraSignin() {
    document.getElementById("paginaLogin").style.display = "none"
    document.getElementById("paginaSignin").style.display = "flex"
}
// da Signin a Login
function mostraLogin() {
    document.getElementById("paginaLogin").style.display = "flex"
    document.getElementById("paginaSignin").style.display = "none"
}

/*  ATTIVAZIONE <button> */
document.addEventListener("DOMContentLoaded", function() {

    const inputLogin1 = document.getElementById("inputLogin1")
    const inputLogin2 = document.getElementById("inputLogin2")
    const buttonAccedi = document.getElementById("buttonAccedi")

    inputLogin1.addEventListener("input", mostraButtonAccedi)
    inputLogin2.addEventListener("input", mostraButtonAccedi)

    function mostraButtonAccedi() {
        if (inputLogin1.value && inputLogin2.value) {
            buttonAccedi.disabled = false
            buttonAccedi.setAttribute("class", "buttonAccediRegistrati buttonEnabled")
        } else {
            buttonAccedi.disabled = true
            buttonAccedi.setAttribute("class", "buttonDisabled")
        }
    }
    
})