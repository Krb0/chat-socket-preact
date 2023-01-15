import { socketConnection } from '../../../main'
import { setRecoil } from 'recoil-nexus'
import messagesState from '../../../store/messagesState'
import { Message } from '../../../types/message.type'

export default function Subscriptions () {
  socketConnection.on('newMessage', (message: Message) => {
    setRecoil(messagesState, messages => [...messages, message])
  })
}
