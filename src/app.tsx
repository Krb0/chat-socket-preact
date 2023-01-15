import { useEffect, useState } from 'preact/hooks'
import './app.css'
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
    <Flex>
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
    </Flex>
  )
}
