import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Box,
    CloseButton,
    Button,
    useDisclosure

  } from '@chakra-ui/react'
export default function SuccessAlert({onOpen,isOpen,onClose,useDisclosure,isVisible,fun}) {
 

        return isVisible ? (
          <Alert status='success'   variant='subtle'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='200px'
          width="30%" marginLeft="36%"  position='absolute'>
            <AlertIcon />
            <Box>
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>
               Congratulations Login is Successfull!
              </AlertDescription>
            </Box>
            <CloseButton
              alignSelf='flex-end'
              position='relative'
              right={-1}
              top={-1}
              onClick={onClose}
            />
          </Alert>
        ) : (
        fun
        )
      
};
