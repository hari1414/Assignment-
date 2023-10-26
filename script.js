document.addEventListener("DOMContentLoaded", function () {
    const surveyForm = document.getElementById("surveyForm");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");

    const submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", showPopup);

    const resetBtn = document.getElementById("resetBtn");
    resetBtn.addEventListener("click", resetForm);

    closePopup.addEventListener("click", closePopupHandler);

    function showPopup() {
        if (validateForm()) {
            const response = collectResponses();
            const responseElement = document.getElementById("response");
            responseElement.innerHTML = response;
            popup.style.display = "block";
            surveyForm.reset();
        }
    }

    function validateForm() {
        // Perform necessary form validations here
        // For example, check if all required fields are filled.
        // Return true if the form is valid, otherwise return false.
        return true; // Placeholder for validation logic
    }

    function collectResponses() {
        // Collect and format the survey responses
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const dob = document.getElementById("dob").value;
        const country = document.getElementById("country").value;
        const genderCheckboxes = document.querySelectorAll('input[name="gender"]:checked');
        const profession = document.getElementById("profession").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;

        const genderValues = Array.from(genderCheckboxes).map(checkbox => checkbox.value);

        const responseMessage = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <
