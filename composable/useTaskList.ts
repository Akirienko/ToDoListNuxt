import { ref } from "vue";
import type { Task } from "~/types";

export function useList() {
  const userStore = useUserStore();

  const client = useSupabaseClient();

  const storedTaskList = ref<Task[]>([]);

  const getTasks = async () => {
    if (!userStore.userInfo) return
    const { data, error } = await client
      .from('todos')
      .select('*')
      .eq('user_id', userStore.userInfo.id)
      .order('created_at', { ascending: false })

    if (error) throw error
    storedTaskList.value = data

    console.log('getTasks storedTaskList.value', storedTaskList.value);

  }

  onMounted(() => {
    if (userStore.isUser) {
      getTasks();
    }
  });

  watch(() => userStore.isUser, (newVal) => {
    if (newVal) {
      getTasks();
    } else {
      storedTaskList.value = [];
    }
  });

  const addTask = async (task: Task) => {
    storedTaskList.value = [...storedTaskList.value, task];

    const { data, error } = await client
    .from('todos')
    .insert([
      { title: task.title, isDone: task.isDone, user_id: userStore.userInfo.id },
    ])
    .select()

    if (error) throw error

  };

  const deleteTask = async (id: string | number) => {
    storedTaskList.value = storedTaskList.value.filter(task => task.id !== id);

    const response = await client
    .from('todos')
    .delete()
    .eq('id', id)

  };

  const completeTask = async (id: string | number) => {
    const task = storedTaskList.value.find(task => task.id === id)

    if (!task) return
    task.isDone = !task.isDone

    const { error } = await client
      .from('todos')
      .update({ isDone: task.isDone })
      .eq('id', task.id)
    if (error) {
      console.log(error);
      throw error
    }

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

