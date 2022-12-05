

const form = document.getElementById("contact-form")
const fullName = document.getElementById("fullName")
const message = document.getElementById("message")
const email = document.getElementById("email_id")
const address = document.getElementById("address")


form.addEventListener('submit', (e) => {
    e.preventDefault()
    message.innerText = `Thank you ${fullName.value} for contacting us. We will soon contact you in ${email.value}  and check our branches at ${address.value} 😊😊`
    const form  = document.querySelector(".form")
    message.classList.add("message")
    form.style.display = "none"

})

