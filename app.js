
    const form = document.querySelector("#message-from")
    const messageContent = document.querySelector('.message-content')
    const message = document.querySelector('#message')
    const feedback = document.querySelector('.feedback')
    
    form.addEventListener('submit', function(e){
        e.preventDefault()

        if(message.value == ''){
            feedback.classList.add('show')
            setTimeout(function(){
            feedback.classList.remove('show')
            }, 4000)
        } else {
            messageContent.innerHTML = message.value
            message.value = ''
        }
    })



