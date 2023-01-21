const btnSubmit = document.getElementById("btn-submit")
const fieldName = document.getElementById("field-name")
const fieldEmail = document.getElementById("field-email")
const fieldTelephone = document.getElementById("field-telephone")
const fieldCpf = document.getElementById("field-cpf")
const fieldPassword = document.getElementById("field-password")

const messageName = document.getElementById("message-name")
const messageEmail = document.getElementById("message-email")
const messageTelephone = document.getElementById("message-telephone")
const messageCpf = document.getElementById("message-cpf")
const messagePassword = document.getElementById("message-password")
const messageButton = document.getElementById("message-button")

const formRegister = document.getElementById("form-register")

function required(i) {
    document.getElementById(i).innerHTML = "Campo Obrigatório! *"
    document.getElementById(i).style.color = "#E73550"
    messageButton.innerHTML = "Campos obrigatórios não registrados!"
    messageButton.style.color = "#E73550"
}

function cleanForm() {
    fieldName.innerHTML = ""
    fieldEmail.innerHTML = ""
    fieldTelephone.innerHTML = ""
    fieldCpf.innerHTML = ""
    fieldPassword.innerHTML = ""
    messageName.innerHTML = ""
    messageEmail.innerHTML = ""
    messageTelephone.innerHTML = ""
    messageCpf.innerHTML = ""
    messagePassword.innerHTML = ""
    messageButton.innerHTML = ""
}

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault()
    cleanForm()

    if (!fieldName.value) required("message-name")
    if (!fieldEmail.value) required("message-email")
    if (!fieldTelephone.value) required("message-telephone")
    if (!fieldCpf.value) required("message-cpf")
    if (!fieldPassword.value) required("message-password")
    
    if (
           (fieldName.value) 
        && (fieldEmail.value)
        && (fieldTelephone.value)
        && (fieldCpf.value)
        && (fieldPassword.value)
    ) {
        messageButton.innerHTML = "Sucesso!"
        messageButton.style.color = "#0F7B0F"
        formRegister.reset()
    }
})