<<<<<<< HEAD
window.addEventListener('load',()=> {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value;
        const task_el = document.createElement('div');
        task_el.classList.add('task');
        

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
=======
window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        // Prevent page from reloading when submit button is clicked
        e.preventDefault();

        // create a variable and assign the value of task input
        const task = input.value;
        // create a div eleemnt and assin it to variable task_el
        const task_el = document.createElement('div');
        // assign the class 'task' to the eleemnt created
        task_el.classList.add('task');

        // same workflow as above
        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        // make the task_conent_el a child of the task_el (div)
        task_el.appendChild(task_content_el);

        // create an input field to store the task values
        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        // assign the task to the input field created above
>>>>>>> 0cbd94ea4e83de0d617052918910d7f1ee021770
        task_input_el.value = task;

        task_input_el.setAttribute("readonly", "readonly");
        task_content_el.appendChild(task_input_el);

        const task_action_el = document.createElement('div');
<<<<<<< HEAD
        task_action_el.classList.add('action');

        const task_edit = document.createElement('button');
        task_edit.classList.add('edit');
        task_edit.innerText = 'Edit';
        task_edit.addEventListener('click', (e) => {
            if (task_edit.innerText.toLowerCase() == "edit") {
                task_edit.innerText = 'Save';
                task_input_el.removeAttribute('readonly');
                task_input_el.focus();
            } else {
                task_edit.innerText('Edit');
                task_input_el.setAttribute("readonly", "readonly");
            }
        });

        const task_delete = document.createElement('button');
        task_delete.classList.add('delete');
        task_delete.innerText = 'Delete';
        task_delete.addEventListener('click', (e) => {
            list_el.removeChild(task_el);
        })

        task_action_el.appendChild(task_edit);
        task_action_el.appendChild(task_delete);
=======
        task_action_el.classList.add('actions');

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = 'Edit';

        const task_del_el = document.createElement('button');
        task_del_el.classList.add('delete');
        task_del_el.innerText = 'Delete';

        task_action_el.appendChild(task_edit_el);
        task_action_el.appendChild(task_del_el);
>>>>>>> 0cbd94ea4e83de0d617052918910d7f1ee021770

        task_el.appendChild(task_action_el);

        input.value = '';

        list_el.appendChild(task_el);

<<<<<<< HEAD
        // number the list
        // order a list from last submission

    })


=======
        task_edit_el.addEventListener('click', (e) => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_edit_el.innerText = "Save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
            } else {
                task_edit_el.innerText = "Edit";
                task_input_el.setAttribute("readonly", "readonly");
            }
        });
        task_del_el.addEventListener('click', (e) => {
            list_el.removeChild(task_el);
        });
    });
>>>>>>> 0cbd94ea4e83de0d617052918910d7f1ee021770
});