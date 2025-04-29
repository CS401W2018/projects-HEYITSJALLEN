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
    if (!formData.contactNumber) errors.push("Contact number is required.");
    if (formData.reasonOfVisit === "Empty") errors.push("Please select a reason for your visit.");

    // Display errors or proceed
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return;
    }

    console.log("Form Data:", formData); // Log the form data

    // Simulate server response
    alert("Form submitted successfully!");
    document.getElementById("myForm").reset(); // Reset the form
});
