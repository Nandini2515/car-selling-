document.querySelectorAll(".question").forEach((questionElement) => {
    questionElement.addEventListener("mouseover", () => {
        const answerElement = questionElement.querySelector(".answer");
        answerElement.style.display = "block";
    });

    questionElement.addEventListener("mouseout", () => {
        const answerElement = questionElement.querySelector(".answer");
        answerElement.style.display = "none";
    });
});
