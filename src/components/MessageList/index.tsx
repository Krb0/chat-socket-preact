import { Flex } from '@chakra-ui/react'
import { Message } from '../../types/message.type'
import MessageItem from './MessageItem'

const MessageList = ({ messages }: { messages: Message[] }) => {
  return (
    <Flex flexDirection={'column'}>
      {messages.map(message => (
        <MessageItem message={message} />
      ))}
    </Flex>
  )
}

export default MessageList
