<script setup lang="ts">
const taskModal = ref(false);
const taskInput = ref('');
const removeTaskModal = ref(false);
const taskIdToRemove = ref();


const tasks = ref([
  {
    title: 'test task',
    isDone: false,
    date: '12 August',
    id: 1,
  },
  {
    title: 'test task 2',
    isDone: false,
    date: '14 August',
    id: 2,
  }
]);

const hasTasks = computed(() => tasks.value.length > 0);

const addTask = () => {
  tasks.value.push({
    title: taskInput.value,
    isDone: false,
    date: '24 May',
    id: Math.random(),
  });

  taskModal.value = false
  taskInput.value = ''
};

const deleteTask = (taskId: number) => {

  removeTaskModal.value = true;
  taskIdToRemove.value = taskId

};

const completedTasks = computed(()=>{
  return tasks.value.filter(isDone => isDone.isDone === true).length;
})

const closeDeleteModal = () => {
  taskIdToRemove.value = null;
  removeTaskModal.value = false;
};

const confirmDeleteTask = () => {
  tasks.value = tasks.value.filter(task => task.id !== taskIdToRemove.value);
  closeDeleteModal();
};


</script>

<template>
  <div class="tasks">
    <div class="tasks-header">
      <div class="tasks-header__total">
        <NumberBlock title="Total tasks:" text-class="number-text" :number="tasks.length" />
      </div>
      <div class="tasks-header__complited">
        <NumberBlock title="Completed" :number="completedTasks" />
      </div>
    </div>

    <div class="tasks-body">
      <TaskItem
        v-if="hasTasks"
        v-for="task in tasks"
        :key="task.id"
        :title="task.title"
        :date="task.date"
        :isDone="task.isDone"
        @remove-task="deleteTask(task.id)"
        @task-done="task.isDone=!task.isDone"
      />

      <div class="empty" v-else>
        <p>Now your tasks list is empty, add a task to see it here</p>
      </div>


      <Button title="+" class="add-task-btn" @click="taskModal=true"></Button>
    </div>
  </div>

  <ModalsMainModal v-if="removeTaskModal">
    <template v-slot:content>
      <div class="modal-wrap">
        <h5>Are you sure you want to delete this task?</h5>

        <div class="buttons">
          <Button
            class="button"
            type="secondary"
            title="No"
            @click="closeDeleteModal"
          />
          <Button
            class="button"
            type="primary"
            title="Yes"
            @click="confirmDeleteTask"
          />
        </div>
      </div>
    </template>
  </ModalsMainModal>

  <!-- не поняв чому МОдалз треба писати -->
  <ModalsMainModal v-if="taskModal">
    <template v-slot:content>
      <div class="modal-wrap">
        <h5>Create Task</h5>

        <div class="task-input">
          <img src="@/assets/image/pancil.webp" alt="pancil">
          <input v-model="taskInput" type="text" placeholder="Write the task name..." />
        </div>

        <div class="buttons">
          <Button
            class="button"
            type="secondary"
            title="Cansel"
            @click="taskModal=false"
          />
          <Button
            class="button"
            type="primary"
            title="Accept"
            @click="addTask"
          />
        </div>
      </div>
    </template>
  </ModalsMainModal>
</template>

<!-- То мені не обовязково вказувати клас як пропс, бо я можу і з цього уомпонента керувати чайлдом number-text, ааа бля не хуйня, якщо мені треба саме тксту даи то з баті компонента я не можу ним керувати, треба проспс -->

<style lang="scss" scoped>
.number-text {
  color: red;
}

.add-task-btn {
  position: absolute;
  right: -1rem;
}

.modal-wrap {
  padding: 2rem;
  background: #18181C;
  width: 32rem;
  h5 {
    text-align: center;
    font-size: 3.2rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 3.2rem;
  }
  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    :first-child {
      margin-right: 2rem;
    }
  }
  .task-input {
    display: flex;
    width: 100%;
    align-items: center;
    background: #323235;
    padding: 1rem 1.5rem;
    border-radius: 0.8rem;


    img {
      width: 2rem;
      margin-right: 1rem;
    }

    input {
      flex: 1;
      background: transparent;
      border: none;
      color: #ccc;
      font-size: 1.6rem;
      outline: none;
      ::placeholder {
        color: #636366;
      }
    }
  }
}
.tasks {
  margin-top: 2rem;
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: .1rem solid #4B5563;
    padding: .8rem 0;
    margin-bottom: 2.8rem;
    &__total, &__complited {
      display: flex;
      align-items: center;
      p {
        margin-right: 1rem;
        font-size: 1.4rem;
      }
    }
  }
  &-body {
    position: relative;

    .empty {
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        font-size: 3rem;
        font-weight: 600;
      }
    }
  }
}
</style>