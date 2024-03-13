const form = document.querySelector ('form');

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "aabinashgautam29@gmail.com",
        Password : "utsab29gautam",
        To : 'utsabgautam47@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Project detail",
        Body : "Name: " + document.getElementById("-name").value + 
        "\n\nEmail: "+ document.getElementById("email").value+
        "\n\nPhone: "+document.getElementById("phone").value+
        "\n\nSubject:\n"+document.getElementById("subject").value+
        "\n\nMessage: \n"+document.getElementById("message").value
    }).then(
    message => alert("Message Sent Succesfully")
    );
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});