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

<Box id="left-side">



        <div id="small-icon">
          
          <div>
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.M-2V3aqNdTHzmbCPBg2x1wAAAA&pid=Api&P=0"
            />
          </div>
          <div>
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.3ekV-Lo6D6L6J4myjhW1wQHaHa&pid=Api&P=0"
            />
          </div>
          <div>
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.ukGPxlDD-k-Qk1mRCpB5bQHaHa&pid=Api&P=0"
            />
          </div>
          <div>
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.tPm72Q0P60ztyjVDYuO8wgHaHa&pid=Api&P=0"
            />
          </div>
       
          
        </div>
</Box>






</Box>
    )
};
