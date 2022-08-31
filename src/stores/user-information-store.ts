import {makeAutoObservable} from 'mobx'

interface IUserInformation {
  id: null | number
  nickname: string
}

class UserInformationStore {
  id: null | number = null
  nickname: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  setUserInformation(userInformation: IUserInformation) {
    const {id, nickname} = userInformation
    this.id = id
    this.nickname = nickname
  }
}

export default UserInformationStore
