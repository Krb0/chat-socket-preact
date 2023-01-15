import { Flex, Text } from '@chakra-ui/react'
import { Message } from '../../../types/message.type'

const MessageItem = ({ message }: { message: Message }) => {
  return (
    <Flex>
      <Text fontWeight='bold'>{message.userName}</Text>
      <Text>:</Text>
      <Text ml='0.5rem'>{message.content}</Text>
    </Flex>
  )
}

export default MessageItem
