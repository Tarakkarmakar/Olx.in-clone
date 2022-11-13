import  React  from 'react'


import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
FormControl,
FormLabel,
Alert,
Input,
AlertIcon ,
AlertTitle,
AlertDescription} from '@chakra-ui/react'
  import {
    useDisclosure,
      Button,
      Box
    
    } from '@chakra-ui/react'
import { useState } from 'react'
  
  

export default function LoginModal({isOpen, onOpen, onClose ,alerting,mail,setMail}) {
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)




   
    return(

<Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} 
initialFocusRef={initialRef}
finalFocusRef={finalRef}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log in Using email ID</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={120}>
       
          <FormControl>
                  <FormLabel>Email-Id</FormLabel>
                  <Input ref={initialRef} placeholder='Email-id' type="email"  onChange={(e)=>setMail(e.target.value)} />
                </FormControl>

        
          </ModalBody>

          <ModalFooter >
            <Button colorScheme='blue' mr={8} onClick={alerting}>
              Login
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )



};
