window.addEventListener('load',()=>{
    const form = document.querySelector('#new-task')
    const input = document.querySelector('#nt-input')
    const list_el = document.querySelector('#tasks')

    form.addEventListener('submit', (e)=>{
        e.preventDefault();

            const task = input.value;

        if(task.length == 0 ){
            alert( ' enter the tasks');
            return;
        } 

        const task_el = document.createElement('div');    
        task_el.classList.add("tasks");

        const content_el = document.createElement('div');    
        content_el.classList.add("content");
        

        task_el.appendChild(content_el);

        const task_input = document.createElement('input')
        task_input.classList.add('text')
        task_input.type = 'text';
        task_input.value = task;
        task_input.setAttribute("readonly", " readonly");
        content_el.appendChild(task_input)

       
        
        const task_action = document.createElement('div');
        task_action.classList.add('action');

        const dlt_el = document.createElement('button');
        dlt_el.classList.add('dlt');
        dlt_el.innerHTML = " DELETE";



        task_action.appendChild(dlt_el);

        task_el.appendChild(task_action);



        list_el.appendChild(task_el);
         input.value = "";


         dlt_el.addEventListener('click', ()=>{
             list_el.removeChild(task_el);
         })
    })


})
