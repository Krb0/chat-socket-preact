import { socketConnection } from '../../main'
import { setRecoil } from 'recoil-nexus'
import messagesState from '../../store/messagesState'
import { Message } from '../../types/message.type'
export async function removeMessage (id: string) {
  socketConnection.emit('removeMessage', id, (response: Message[]) => {
    console.log({ response })
    setRecoil(messagesState, response)
  })
}
