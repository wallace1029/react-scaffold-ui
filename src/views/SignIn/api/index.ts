import {ILoginFormValues} from '../types'

export default {
  // login
  login(data: ILoginFormValues): Promise<string> {
    return fetch('/mock/login.json').then(r => r.json()).then(r => r.data)
  }
}
