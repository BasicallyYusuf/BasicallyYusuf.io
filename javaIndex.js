function checkPassword() {
    var password = document.getElementById("passwordInput").value;
    var correctPassword = "Sunflower2112"; // Replace with your desired password

    if (password === correctPassword) {
        document.getElementById("passwordForm").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        alert("Incorrect password. Please try again.");
    }
}
