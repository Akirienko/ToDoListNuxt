import { ref } from "vue";
import type { Task } from "~/types";

export function useList() {

  const storedTaskList = ref<Task[]>([])

  const getList = () => {

    const data = localStorage.getItem("task-list");
    storedTaskList.value = data ? JSON.parse(data) as Task[] : [];
    return storedTaskList.value;

  }

  const saveList = (tasks: Task[]) => {

    localStorage.setItem("task-list", JSON.stringify(tasks));

  }

  const addTask = (newTask: Task) => {

    const updated = [...storedTaskList.value, newTask];
    saveList(updated);

  }

  const deleteTask = (deleteTask: string | number) => {
    const updatedList = storedTaskList.value.filter(task => {task.id !== deleteTask})

    saveList(updatedList);
  }

  return {
    storedTaskList,
    getList,
    addTask,
    deleteTask
  }


}

