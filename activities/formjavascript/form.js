document.getElementById('myForm').addEventListener('submit', function(event) {
    const firstName = document.getElementById('first').value;
    const lastName = document.getElementById('last').value;
    const dob = document.getElementById('dob').value;
    const Core = document.getElementById('core').value;

    if (!firstName || !lastName) {
        alert("First and last name are required!");
        event.preventDefault();
        return;
    }

    // Check if age is above 18
    if (dob) {
        const birthDate = new Date(dob);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        if (age < 18) {
            alert("You must be 18 years old to sign up!");
            event.preventDefault();
            return;
        }
    }

    const formData = {
        firstName: firstName,
        lastName: lastName,
        password: document.getElementById('password').value
    };
    const xhr = new XMLHttpRequest();
    xhr.open("POST, submit.js", true);
    xhr.setRequestHeader("Content-type", "application/json;charset=UTF8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status ===200){
            const response = JSON.parse(xhr.responseText)
            message = JSON.parse(xhr.response).
            alert('Form submitted successfully.');
        } else if (xhr.readyState === 4) {
            alert ('Error submitting form');
        }
    }
    console.log(formData);
    alert("Form submitted successfully!");
});