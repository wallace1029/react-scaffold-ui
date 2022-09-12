// keys
enum storageKeys {
  TID = 'TID'
}

const storage = {
  getTid(): string | null {
    return localStorage.getItem(storageKeys.TID)
  },
  setTid(tid: string) {
    localStorage.setItem(storageKeys.TID, tid)
  },
  removeTid() {
    localStorage.removeItem(storageKeys.TID)
  }
}

export {
  storageKeys,
  storage
}
