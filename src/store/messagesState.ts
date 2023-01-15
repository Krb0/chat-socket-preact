import { atom } from 'recoil'
import { Message } from '../types/message.type'

const messagesState = atom<Message[]>({
  key: 'messagesState', // unique ID (with respect to other atoms/selectors)
  default: [] // default value (aka initial value)
})

export default messagesState
