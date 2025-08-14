import { ref } from "vue";
import type { Task } from "~/types";
import Storage from '~/services/Storage';

const TASK_LIST_LS_KEY = "task-list";

export function useList() {
  const storedTaskList = ref<Task[]>([]);

  onMounted(() => {
    const data = Storage.get<Task[]>(TASK_LIST_LS_KEY);

    storedTaskList.value = data || [];
  });

  const saveToStorage = () => {
    Storage.set<Task[]>(TASK_LIST_LS_KEY, storedTaskList.value);
  }

  const addTask = (task: Task) => {
    storedTaskList.value = [...storedTaskList.value, task];

    saveToStorage()
  };

  const deleteTask = (id: string | number) => {
    storedTaskList.value = storedTaskList.value.filter(task => task.id !== id);

    saveToStorage()
  };

  const completeTask = (id: number) => {
    storedTaskList.value.forEach(task => {
      if (task.id === id) {
        task.isDone = !task.isDone;
      }
    });

    saveToStorage()
  }

  //TODO: replace it in the future to separate composable?
  // watch(storedTaskList.value, () => {

  //   console.log('watch-storedTaskList', storedTaskList.value);

  //   Storage.set<Task[]>(TASK_LIST_LS_KEY, storedTaskList.value);
  // })

  return {
    storedTaskList,
    addTask,
    deleteTask,
    completeTask
  };
}

