document.addEventListener("DOMContentLoaded", () => {
    const taskText = document.getElementById("add-text");
    const addBtn = document.getElementById("add-button");

    const addTask = () => {
        if (taskText.value.length == 0) {
            alert("No task submitted.");
        } else {
            const task = taskText.value; // get task entered by user
            let div = document.createElement("div"); // create div element
            div.classList.add("tasks-to-do"); // add tasks class for CSS purposes

            let display = `
                <input type="checkbox"> 
                <label>${task}</label>
            `;

            div.innerHTML = display; // put display variable as html for div
            document.getElementById("tasks-to-do").appendChild(div);

            taskText.value = ""; // clear textbox once done
        }
    };

    addBtn.addEventListener("click", addTask);

    // when enter is pressed, button is clicked
    document.addEventListener("keypress", event => {
        if (event.key === 'Enter') {
            addBtn.click();
        }
    });
});