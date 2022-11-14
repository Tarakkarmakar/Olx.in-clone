import { Show,Select, Hide ,Box,Stack, Flex,Input,InputGroup,InputRightAddon,InputLeftAddon, InputRightElement} from '@chakra-ui/react'
import { SearchIcon,ChevronDownIcon,ChatIcon,BellIcon,AddIcon} from '@chakra-ui/icons'
import  styles from "./Navbar.css"

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Alert,

AlertIcon ,
AlertTitle,
AlertDescription,
  ModalBody,
  ModalCloseButton,} from '@chakra-ui/react'
import {
  useDisclosure,
    Button,
  
  } from '@chakra-ui/react'
  import { useState } from 'react'
import LoginModal from './LoginModal'


export default function Navbar({fun}) {

  const [mail,setMail]=useState("")

const alerting =()=>{

if(mail.length>7){

  onClose()
  fun()
}
else{
  alert("Please enter a valid Mail")
}

}

  const { isOpen, onOpen, onClose } = useDisclosure()
return (
   <>
  <Show breakpoint='(max-width: 400px)'>
 
 <Stack >

    <Box><img src=""></img></Box>
 </Stack>

</Show>

<Show breakpoint='(min-width:401px)'>

    
 <Stack className='main'>
    <Flex className='large_nav_flex'>

<Box><img className='logo_nav' src="https://www.underconsideration.com/brandnew/archives/olx_logo.png"></img></Box>
<Box  className='first_option_nav'>
<InputGroup   >
    <InputLeftAddon children={<SearchIcon />} style={{border:"none",background:"white"}} />
    <Input type='text'   value="India" width={300} />
    <InputRightAddon style={{background:"white"}} children={<select style={{border:"none",background:'white' ,width:"30px"}}>
        <option ><ChevronDownIcon/></option>
        <option value="Ind">India</option>
        <option> USA</option>
    </select>}/>

  </InputGroup>
  </Box>

    <Box className='search_input_nav'>
        <Input className='search_inp' placeholder="Find Cars ,Mobile Phones and More "></Input>
    <button  className='searh_click_nav'><SearchIcon /></button>
    </Box>
    <Box><select name="select_language" id="lang">
        <option value="ENG"><h1>ENGLISH</h1></option>
        <option value="Hindi"><h1>हिंदी</h1></option>

    </select>
    </Box>
    <Box ><button ><ChatIcon w={6} h={6}/></button></Box>
    <Box><button><BellIcon w={6} h={6} /></button></Box>
    <Box><Button colorScheme="white" color="black" onClick={onOpen}> Login</Button></Box>

    <Button onClick={()=>window.location.href="https://www.olx.in/post"} style={{marginRight:"1%",border:" 2px solid yellow",borderRadius:"9px"}}   colorScheme='teal' size='lg'>
    <AddIcon />
    &nbsp;  SELL
  </Button>
<LoginModal isOpen={isOpen}  onClose={onClose} onOpen={onOpen} alerting={alerting} mail={mail} setMail={setMail}/>

    </Flex>
</Stack>
 
</Show>
</>

)
};
