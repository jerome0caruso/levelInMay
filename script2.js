
const tasks = [
    { title: "Meeting with John", taskId: 4 },
    { title: "Visit gym", taskId: 6},
    { title: "Buy new phone" },
    { title: "Clean the room", taskId: 2 },
    { title: "Plan a trip" }
  ];
  
  let copyTask = JSON.parse(JSON.stringify(tasks))
  let count = 0;
  
  const generateTasksIds = () => {
    copyTask.map(iter => iter.taskId === undefined? iter.taskId = 1000 + Math.floor(Math.random() * 9000): iter.taskId);
    return copyTask;
    
  }
  
  const tasksSortedByIds = (tasks, tasksWithIds = generateTasksIds())=>{
    for(element of tasks){
      if(element.taskId === undefined){
        count++;
      }
    }console.log(`Quantity of the missing taskIds is ${count}`)
  
    copyTask.sort((a,b) => a.taskId - b.taskId);
    
    copyTask.map((element, index, array) => element.taskId === array[index].taskId? taskId = element.taskId = 1000 + Math.floor(Math.random() * 9000): iter.taskId);
    return copyTask;
  }
  
  
  
  console.log(
    "Sorted array of tasks with taskIds:",
    tasksSortedByIds(tasks)
  );
  
  
  console.log(
    "Original unsorted array of tasks with missing taskIds:",
   tasks
  );
  
  