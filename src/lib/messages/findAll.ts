import { socketConnection } from '../../main'
import { setRecoil } from 'recoil-nexus'
import messagesState from '../../store/messagesState'
export async function findAll () {
  socketConnection.emit('findAllMessages', {}, (response: any) => {
    console.log({ response })
    setRecoil(messagesState, response)
  })
}
