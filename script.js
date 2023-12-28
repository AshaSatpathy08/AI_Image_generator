const generateForm = document.querySelector(".generate-form");

const handleFormSubmission = (e) => {
    e.preventDefault();
    // console.log(e.srcElement)
    const userPrompt = e.srcElement[0].value;
    const userPrompt = e.srcElement[0].value;
    
}

generateForm.addEventListener("submit", handleFormSubmission);
