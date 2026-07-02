const name1 = document.getElementById("name1");
const name2 = document.getElementById("name2");
const calculate = document.getElementById("calculate");
const result = document.getElementById("result");

// Helper function to sanitize and format names
function formatName(name) {
    return name.trim().toLowerCase().replace(/[^a-z]/g, "");
}

calculate.addEventListener("click", () => {
    const name1Value = formatName(name1.value);
    const name2Value = formatName(name2.value);

    if (!name1Value || !name2Value) {
        alert("Please enter both names!");
        return;
    }
    if (name1Value === name2Value) {
        alert("Please enter two different names!");
        return;
    }

    // Combine names in alphabetical order for consistency
    const [first, second] = [name1Value, name2Value].sort();
    const combined = first + second;

    // Improved calculation: use a simple hash for more variety
    let total = 0;
    for (let i = 0; i < combined.length; i++) {
        total += combined.charCodeAt(i) * (i + 1);
    }
    const percentage = total % 101;

    let message = "";
    if (percentage >= 90) {
        message = "Perfect match 💖💍";
    } else if (percentage >= 70) {
        message = "Strong connection ❤️‍🔥✨";
    } else if (percentage >= 50) {
        message = "You've got potential 💌";
    } else if (percentage >= 30) {
        message = "Needs a spark 🤔";
    } else {
        message = "Just friends 💔";
    }

    result.innerText = `❤️ ${percentage}% Compatible!\n${message}`;
    result.style.display = "block";
});

[name1, name2].forEach(input => {
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") calculate.click();
    });
});
