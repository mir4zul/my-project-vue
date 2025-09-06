import {ref, watch} from "vue";

export function useStorage(key, initialValue) {
  let storageValue = localStorage.getItem(key)
  let value = ref(storageValue)

  watch(value, () => {
    write()
  })

  function write() {
    if (value.value === "") {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, value.value);
    }
  }

  return value
}