function check() {
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let tel = document.getElementById("tel");
    let dogsAmount = document.getElementById("dogsAmount");
    let agreement = document.getElementById("agreement");
    let message = "";

    if (firstName.value === "") {
        message += "Please enter your first name\n"
    }

    if (lastName.value === "") {
        message += "Please enter your last name\n"
    }

    if (tel.value === "") {
        message += "Please enter your telephone number\n"
    }

    if (dogsAmount.value === "" || dogsAmount.value < 0 || dogsAmount.value > 100) {
        message += "Please enter your current number of dogs between 0 - 100\n"
    }

    if (!agreement.checked) {
        message += "กรุณารับทราบว่าการส่งแบบฟอร์มนี้เป็นการแจ้งความสนใจ โดยไม่รับรองการได้รับอุปการะสุนัข\n"
    }

    if (message !== "") {
        alert(message);
        return false;
    }

    return true;
}
