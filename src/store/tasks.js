// Utilities
import { defineStore } from 'pinia'
import {ref} from 'vue'
import {openDB} from 'idb'

export const useTasksStore = defineStore('tasks', () => {
  let db = null
  const dbName = 'EasyTask'
  const objectStore = 'tasks'
  const version = 9
  const tasks = ref([])

  initDB()

  async function initDB() {
    db = await openDB(dbName, version, {
      upgrade(db) {
        db.deleteObjectStore(objectStore)
        db.createObjectStore(objectStore, {autoIncrement: true})
        // if (!db.objectStoreNames.contains(objectStore)) {}
      }
    })

    tasks.value = await getAll()
  }

  window.addEventListener('unhandledrejection', event => {
    console.error("Ошибка: " + event.reason.message)
  });

  async function set(task) {
    db.add(objectStore, task);
    tasks.value = await db.getAll(objectStore)
  }

  async function getAll() {
    return await db.getAll(objectStore)
  }

  return {
    set,
    getAll,
    tasks,
  }
})
