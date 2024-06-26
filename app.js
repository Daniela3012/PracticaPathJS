const input = document.getElementById("addtarea");
const btnAdd = document.getElementById("addbtn");
const lista = document.getElementById("lista");
const advisor = document.querySelector("span");

//primera tarea: capturar el valor del input en una variable
//tarea 2: guardar la palabra escrita en un array
//tarea 3: limpiar el input
//tarea 4: crear un elemento li
//tarea 5: crear btn de borrar


//eliminar solo las que estan tachadas o finalizadas


let inputValue = "";

const message = ()=>{
  if(lista.querySelectorAll('li').length==0){
    advisor.textContent='No hay tareas pendientes';
  } else {
    advisor.textContent='Tareas pendientes';
  }
}

btnAdd.addEventListener("click", (e) => {
  inputValue = input.value.trim();
  if (inputValue!= "") {

    const newTaskContainer=document.createElement('li');
    lista.appendChild(newTaskContainer);

    const newTask=document.createElement('p');
    newTask.textContent=inputValue;
    newTaskContainer.appendChild(newTask);
    newTask.classList.add('task');

    const btnFinalizar=document.createElement('button');
    btnFinalizar.classList.add('done');
    btnFinalizar.textContent='Done';
    newTaskContainer.appendChild(btnFinalizar);
    btnFinalizar.addEventListener('click', (eve)=>{
      console.log(eve);
      newTask.classList.toggle('task--done');
    });

    const btnDelete=document.createElement('button');
    btnDelete.classList.add('delete');
    btnDelete.textContent='X';
    newTaskContainer.appendChild(btnDelete);
    btnDelete.addEventListener('click', (eve)=>{
      if (newTask.classList.contains('task--done')) {
        newTaskContainer.remove();
        message();

      } else {
        alert('Debe finalizar la tarea antes de eliminarla');
      }
    });
    message();
    input.value = "";
  } else {
    console.log("esta vacio");
  }
});



