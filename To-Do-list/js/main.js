// massive with tasks
let tasks = [];
const btn = document.querySelector('.input__button');
btn.addEventListener('click', addNewTask);

// adding new tasks
function addNewTask() {
   const outputText = document.querySelector(".output__text");

    const ul = document.querySelector('.output');

// remove and add a output text
    if (tasks.length !== -1){
        outputText.classList.add('hidden');
        ul.classList.add('active');
    }else{
        outputText.classList.remove('hidden');
        ul.classList.remove('active');
    };

// creating a li 
    const li = document.createElement('li');
    li.classList.add('output__item');

// creating a text with task
    const taskTitle = document.getElementById('input-title');
    const itemTitle = document.createElement('div');
    itemTitle.classList.add('item__text');
    itemTitle.append(taskTitle.value);

    ul.append(li);

// creating a button, wich deletes li     
    const btn2 = document.createElement('div');
    btn2.classList.add('item__button');
    btn2.onclick = () =>{
        li.remove();
        tasks.shift({task: taskTitle.value});

        if (tasks.length !== 0){
            outputText.classList.add('hidden');
            ul.classList.add('active');
        }else{
            outputText.classList.remove('hidden');
            ul.classList.remove('active');
        };

    };

    // adding a task and button to the massive
    tasks.unshift({task: taskTitle.value});
    li.append(itemTitle, btn2 );
}

