import { render } from 'preact'
import { App } from './app'
import { io } from 'socket.io-client'
import { RecoilRoot } from 'recoil'
import RecoilNexus from 'recoil-nexus'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import getSubscriptions from './lib/messages/subscriptions'
export const socketConnection = io(import.meta.env.VITE_APP_API_URL)
getSubscriptions()
render(
  <ChakraProvider>
    <RecoilRoot>
      <RecoilNexus />
      <App />
    </RecoilRoot>
  </ChakraProvider>,
  document.getElementById('app') as HTMLElement
)
