import { useState } from 'react'

function useLocalStorage (
  itemName: string,
  initialValue: [] | {} | any
): [] | {} | any {
  const storage = window.localStorage

  const storageItem = storage.getItem(itemName)
  let parsedItem

  if (!storageItem) {
    storage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue
  } else {
    parsedItem = JSON.parse(storageItem)
  }

  const [item, setItem] = useState<{} | []>(parsedItem)

  const saveItem = (newItem: [] | {}): void => {
    const stringifiedItem = JSON.stringify(newItem)
    storage.setItem(itemName, stringifiedItem)
    setItem(newItem)
  }

  const deleteItem = (itemName: string): void => {
    storage.removeItem(itemName)
  }

  return [item, saveItem]
}

export { useLocalStorage }
