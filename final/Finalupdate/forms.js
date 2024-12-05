document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Collect form inputs into an object
    const formData = {
        fullName: document.getElementById("fullName").value.trim(),
        email: document.getElementById("email").value.trim(),
        contactNumber: document.getElementById("contactNumber").value.trim(),
        visitDate: document.getElementById("visitDate").value,
        guests: document.getElementById("guests").value,
        learn: document.getElementById("learn").value,
        comments: document.getElementById("comments").value.trim(),
        favoriteDestination: document.getElementById("favoriteDestination").value,
        updates: document.getElementById("updates").checked
    };

    // Validation
    const errors = [];
    if (!formData.fullName) errors.push("Full name is required.");
    if (!formData.email) errors.push("Email address is required.");
    if (!formData.contactNumber) errors.push("Contact number is required.");
    if (!formData.visitDate) errors.push("Preferred date of visit is required.");
    if (!formData.guests || formData.guests <= 0) errors.push("Please enter a valid number of guests.");
    if (formData.learn === "-Select-") errors.push("Please select how you learned about the attractions.");
    if (formData.favoriteDestination === "-Select-") errors.push("Please select your favorite type of destination.");

    // Show errors or proceed
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return;
    }

    console.log("Form Data:", formData); // Log the form data

    // Simulate an AJAX call to a mock endpoint
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "response.json", true); // Ensure this matches the location of your JSON file
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            alert(response.message); // Show success message
            document.querySelector("form").reset(); // Optionally reset the form
        } else {
            alert("There was an error submitting the form.");
        }
    };

    xhr.send();
});
