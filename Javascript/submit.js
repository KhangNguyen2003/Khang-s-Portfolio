let submitBtn = document.getElementById('sendBtn');
console.log(submitBtn)

submitBtn.addEventListener('click',function(){
    console.log("clicked")
    let values = {
        email : document.getElementById('email').value,
        message : document.getElementById('message').value
    } 

    const serviceID = "service_8qo0f35"
    const templateID = "template_zos5trt"

    emailjs.send(serviceID,templateID,values)
    .then(
        res => {
            document.getElementById('email').value = " "
            document.getElementById('message').value = " "
            console.log(res)

            alert("Your message was sent!");
        }
        
    )
})