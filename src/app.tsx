import { useEffect } from 'preact/hooks'
import { findAll } from './lib/messages'
import { useRecoilState } from 'recoil'
import messagesState from './store/messagesState'
import { Flex } from '@chakra-ui/react'
import MessageList from './components/MessageList'
import { socketConnection } from './main'
export function App () {
  const [messages] = useRecoilState(messagesState)
  useEffect(() => {
    findAll()
  }, [])
  return (
    <div>
      <MessageList messages={messages} />
      <button
        onClick={() =>
          socketConnection.emit('createMessage', {
            content: 'test',
            userName: 'juan'
          })
        }
      >
        Enviar
      </button>
    </div>
  )
}
