import { Show,Select, Hide ,Box,Stack, Flex,Input} from '@chakra-ui/react'
import { SearchIcon,ChevronDownIcon,ChatIcon,BellIcon} from '@chakra-ui/icons'
import  styles from "./Navbar.css"


import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    
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
<Box className='first_option_nav'> 

<Flex>


<SearchIcon w={30}/>

<input value="India" className='India_Input'/>
<select value="" >
<option><ChevronDownIcon/></option>
    <option value="India">India</option>
    <option value="USA">USA</option>


</select>


</Flex>

    </Box>
    <Box className='search_input_nav'>
        <Input className='search_inp'></Input>
    <Button className='searh_click_nav'><SearchIcon /></Button>
    </Box>
    <Box><select name="select_language" id="lang">
        <option value="ENG"><h1>ENGLISH</h1></option>
        <option value="ENG"><h1>हिंदी</h1></option>

    </select>
    </Box>
    <Box ><button ><ChatIcon/></button></Box>
    <Box><button><BellIcon /></button></Box>
    <Box></Box>
    <Box></Box>

    </Flex>
</Stack>
 
</Show>
</>

)
};
