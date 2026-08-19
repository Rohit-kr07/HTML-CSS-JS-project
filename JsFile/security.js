let Form = document.getElementById("myForm1");
let Clear1 = document.getElementById("clear1");
let text = document.getElementById("Message1");
let update = document.getElementById("update1");

Clear1.addEventListener('click', () => {
    Form.reset();
});

update.addEventListener('click', () => {
    text.textContent = "Update password successfully";
    text.style.display = "inline";
    text.style.color = "green";

    Form.reset();

    setTimeout(() => {
        text.style.display = "none";
    }, 2000);
});
