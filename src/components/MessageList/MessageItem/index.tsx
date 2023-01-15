import { Flex, Text } from '@chakra-ui/react'
import { Message } from '../../../types/message.type'
import { removeMessage } from '../../../lib/messages/removeMessage'
import { useMemo } from 'preact/hooks'
import { socketConnection } from '../../../main'
import { DeleteIcon } from '@chakra-ui/icons'

const MessageItem = ({ message }: { message: Message }) => {
  const isAuthor = useMemo(() => {
    const authorId = socketConnection.id
    return authorId === message.author
  }, [message])
  return (
    <Flex
      onClick={() => {
        if (!isAuthor) return
        removeMessage(message.id)
      }}
      alignItems={'center'}
    >
      <Text fontWeight='bold'>{message.userName}</Text>
      <Text>:</Text>
      <Text ml='0.5rem'>{message.content}</Text>
      {isAuthor && (
        <DeleteIcon
          color='red'
          cursor='pointer'
          _hover={{
            color: 'red.400'
          }}
        />
      )}
    </Flex>
  )
}

export default MessageItem
