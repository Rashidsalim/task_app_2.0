window.addEventListener('load',()=> {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");
    const number_list = document.getElementById("numbered_list");


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value;
        const task_el = document.createElement('div');
        task_el.classList.add('task');
        // Form Validation on Null Submit
        if (task == "" || task == null) {
            alert("Please Add A Task");
            return false;
            }
        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;

        task_input_el.setAttribute("readonly", "readonly");
        task_content_el.appendChild(task_input_el);

        const task_action_el = document.createElement('div');
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

        task_el.appendChild(task_action_el);

        input.value = '';

        for (var i = 0; i < number_list.length; i++) {
            list_el += "<li>" + number_list[i] + "</li>";
        }
        
        list_el.appendChild(task_el);

        // number the list
        // order a list from last submission

    })


});