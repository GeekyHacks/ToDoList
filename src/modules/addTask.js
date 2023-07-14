export default (taskDescription, tasks) => {
  const newTask = {
    description: taskDescription,
    completed: false,
    index: tasks.length,
  };
  tasks.push(newTask);

  return tasks;
};

 addtask =(taskDescription, tasks) => {
    const newTask = {
      description: taskDescription,
      completed: false,
      index: tasks.length,
    };
    tasks.push(newTask);
  
    return tasks;
  };

let Ab = new addtask('asdasdadsa',1);
let Bb = new addtask('aa',1);
let Cb = new addtask('asdasdaaadadsa',1);