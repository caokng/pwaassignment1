let contacts = []; // Contacts array

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Stop the form from refreshing the page

    const firstName = document.getElementById("first-name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const telephone = document.getElementById("telephone").value;

    const contact = {
        firstName: firstName,
        surname: surname,
        email: email,
        telephone: telephone
    };

    contacts.push(contact); // Add new contact

    const tableBody = document.getElementById("contacts-list");
    const newRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = firstName;
    const surnameCell = document.createElement("td");
    surnameCell.textContent = surname;
    const emailCell = document.createElement("td");
    emailCell.textContent = email;
    const telephoneCell = document.createElement("td");
    telephoneCell.textContent = telephone;

    const deleteButtonCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
        const rowIndex = newRow.rowIndex - 1;
        contacts.splice(rowIndex, 1);
        newRow.remove();
    });

    deleteButtonCell.appendChild(deleteButton);
    newRow.appendChild(firstNameCell);
    newRow.appendChild(surnameCell);
    newRow.appendChild(emailCell);
    newRow.appendChild(telephoneCell);
    newRow.appendChild(deleteButtonCell);

    tableBody.appendChild(newRow);

    // Clear the form after adding
    document.getElementById("contact-form").reset();
});
