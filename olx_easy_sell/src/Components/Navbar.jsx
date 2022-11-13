import { Show,Select, Hide ,Box,Stack, Flex,Input,InputGroup,InputRightAddon,InputLeftAddon, InputRightElement} from '@chakra-ui/react'
import { SearchIcon,ChevronDownIcon,ChatIcon,BellIcon,AddIcon} from '@chakra-ui/icons'
import  styles from "./Navbar.css"


import {

    Button,
  } from '@chakra-ui/react'


export default function Navbar() {


return (
   <>
  <Show breakpoint='(max-width: 400px)'>
 
 <Stack >

    <Box><img src="https://scontent.fccu13-1.fna.fbcdn.net/v/t39.30808-6/315002987_1801734266854939_7038530819874117418_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=mZOnteQGlIoAX9QsIFl&_nc_ht=scontent.fccu13-1.fna&oh=00_AfB5j1POvfVtG1MsVSxa4Cb3hXcs_N9s3eqlqXDigOUYFQ&oe=6370BB18"></img></Box>
 </Stack>

</Show>

<Show breakpoint='(min-width:401px)'>

    
 <Stack className='main'>
    <Flex className='large_nav_flex'>

<Box><img className='logo_nav' src="https://scontent.fccu13-1.fna.fbcdn.net/v/t39.30808-6/315002987_1801734266854939_7038530819874117418_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=mZOnteQGlIoAX9QsIFl&_nc_ht=scontent.fccu13-1.fna&oh=00_AfB5j1POvfVtG1MsVSxa4Cb3hXcs_N9s3eqlqXDigOUYFQ&oe=6370BB18"></img></Box>
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
    <Box><Button colorScheme="white" color="black"> Login</Button></Box>

    <Button style={{marginRight:"1%",border:" 2px solid yellow",borderRadius:"9px"}}   colorScheme='teal' size='lg'>
    <AddIcon />
    &nbsp;  SELL
  </Button>

    </Flex>
</Stack>
 
</Show>
</>

)
};
