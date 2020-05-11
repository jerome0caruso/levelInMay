
const generateTasksIds = tasks => {
  let newTaskIds =[];
  return tasks.map(({...task}) =>{
    if(!task.hasOwnProperty("taskId")){
      let newTaskId;
      do {
        newTaskId = 1000 + Math.floor(Math.random() * 9000);
      } while (
        tasks.find(task => task.taskId === newTaskId) || newTaskIds.includes(newTaskId)
      );
      newTaskIds.push(newTaskId);
      task.taskId = newTaskId;
    }
    return task;
  })
}
const tasksSortedByIds = (tasks, tasksWithIds = generateTasksIds(tasks)) =>{
  console.log(`Quantity of the missing taskIds is ${tasks.filter(task => !task.hasOwnProperty("taskId")).length}`);
  return tasksWithIds.sort((a,b) => a.taskId - b.taskId);

}

const tasks = [
  { title: "Meeting with John", taskId: 4621 },
  { title: "Visit gym", taskId: 6821 },
  { title: "Buy new phone" },
  { title: "Clean the room", taskId: 2721 },
  { title: "Plan a trip" }
];





console.log(
  "Sorted array of tasks with taskIds:",
  "-------------------------",
  tasksSortedByIds(tasks)
);

console.log("--------------------------------")
console.log(
  "Original unsorted array of tasks with missing taskIds:",
  tasks
);
