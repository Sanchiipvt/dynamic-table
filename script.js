function addRow() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const course = document.getElementById("course").value;

    if (name === "" || age === "" || course === "") {
        alert("Please fill all fields");
        return;
    }

    const table = document.getElementById("studentTable");
    const row = table.insertRow();

    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = age;
    row.insertCell(2).innerText = course;

    const actionCell = row.insertCell(3);
    const btn = document.createElement("button");
    btn.innerText = "Delete";

    btn.onclick = function () {
        table.deleteRow(row.rowIndex);
    };

    actionCell.appendChild(btn);

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
}
