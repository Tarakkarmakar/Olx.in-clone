import styles from "./footer.css"
import { background, Box,Button,color,Flex,Select, Stack} from "@chakra-ui/react";
export default function Footer(params) {
    

    return(
        <Box className='footer'>

<Box className="sub_box">
    <h1 className="title">POPULAR LOCATIONS</h1>
    <p>Kolkata</p>
    <p>Mumbai</p>
    <p>Chennai</p>
    <p>Pune</p>
</Box>
<Box className="sub_box">
    <h1 className="title" >
    TRENDING LOCATIONS
    </h1>

    <p>Bhubaneshwar</p>
    <p>Hyderabad</p>
    <p>Chandigarh</p>
    <p>Nashik</p>
   
</Box>

<Box className="sub_box">


<h1 className="title">ABOUT US</h1>

<p>About OLX Group </p>
<p>Careers</p>
<p>Contact Us</p>
<p>OLXPeople</p>
<p>Waah Jobs</p>
</Box>


<Box className="sub_box">

<h1 className="title">OLX</h1>
<p>Help</p>
<p>Sitemap</p>
<p>Legal & Privacy information</p>
<p>Blog</p>
<p>
OLX Autos Sell Car</p>
</Box>








</Box>
    )
};
