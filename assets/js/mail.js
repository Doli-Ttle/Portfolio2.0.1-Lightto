const scriptURL = 'https://script.google.com/macros/s/AKfycbxkkEnZa9MLM4s-fDsWOb-jZ5nRvDs7hB5LhkobjddO9PXDigvFlnSu_P59bhc8VNc/exec'
        const form = document.forms['submit-to-google-sheet']
        let sent = document.getElementById("sent")
    
        form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {sent.innerHTML = "Message sent successful"
                                setTimeout(function(){
                                sent.innerHTML = ""
                            },5000)
                            form.reset()
                        })
            .catch(error => console.error('Error!', error.message))
        })