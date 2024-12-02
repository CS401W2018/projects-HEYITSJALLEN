document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default HTTP request

    // Collect form inputs into an object
    const formData = {
        firstName: document.getElementById("first").value.trim(),
        lastName: document.getElementById("last").value.trim(),
        email: document.getElementById("email").value.trim(),
        dob: document.getElementById("dob").value,
        password: document.getElementById("password").value.trim(),
        comments: document.getElementById("comments").value.trim(),
        core: document.getElementById("class").value,
        year: document.querySelector("input[name='year']:checked")?.value || "",
        remember: document.getElementById("remember").checked
    };

    // Validation
    const errors = [];
    if (!formData.firstName) errors.push("First name is required.");
    if (!formData.email) errors.push("Email is required.");
    if (!formData.year) errors.push("Year selection is required.");

    // Validate number (e.g., password length within range)
    if (formData.password.length < 6 || formData.password.length > 20) {
        errors.push("Password must be between 6 and 20 characters.");
    }

    // Show errors or proceed
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return;
    }

    console.log("Form Data:", formData); // Log form data

    // AJAX call to mock response
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "response.json", true); // Use "GET" for GitHub-hosted sites
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            alert(response.message); // Show success message
            document.getElementById("myForm").reset(); // Optionally reset the form
        } else {
            alert("There was an error submitting the form.");
        }
    };

    xhr.send(JSON.stringify(formData));
});
