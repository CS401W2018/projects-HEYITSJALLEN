document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form inputs into an object
    const formData = {
        firstName: document.getElementById("first").value.trim(),
        lastName: document.getElementById("last").value.trim(),
        email: document.getElementById("email").value.trim(),
        dateOfVisit: document.getElementById("dov").value,
        contactNumber: document.getElementById("contactNumber").value.trim(),
        comments: document.getElementById("comments").value.trim(),
        reasonOfVisit: document.getElementById("class").value,
        consent: document.getElementById("remember").checked,
    };

    // Validation
    const errors = [];
    if (!formData.firstName) errors.push("First name is required.");
    if (!formData.lastName) errors.push("Last name is required.");
    if (!formData.email) errors.push("Email is required.");
    if (formData.reasonOfVisit === "Empty") errors.push("Please select a reason for your visit.");

    // Display errors or proceed
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return;
    }

    console.log("Form Data:", formData); // Log the form data

    // Mock AJAX call to process the data
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "processing.html", true); // Update endpoint as needed
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
        if (xhr.status === 200) {
            alert("Form submitted successfully!"); // Show success message
            document.getElementById("myForm").reset(); // Reset the form
        } else {
            alert("Error submitting the form. Please try again later.");
        }
    };

    // Send the form data as JSON
    xhr.send(JSON.stringify(formData));
});
