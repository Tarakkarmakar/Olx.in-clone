import { background, Box,Button,color,Flex,Select, Stack} from "@chakra-ui/react";
import Navbar from "../Navbar";
import { StarIcon} from '@chakra-ui/icons'
import  Styles  from "./Home.css";
import Footer from "../Footer";

export default function Home(){
     

    return(
        <>

        <Navbar />

        <Box className="menu_bar_box">
            <Flex style={{justifyContent:"space-between"}}
            >
                <Box>
            <Select name="" id="">
                =
            <option value=""></option>
                <option value="">Bike</option>
               
                <option value="">Mobile</option>
                <option value="">Cars</option>
                <option value="">PLot</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>


            </Select>
            </Box>
            <Box> <h2>Cars</h2> </Box>
            <Box>MotorCycl...</Box>
            <Box>For Sale:Houses & Apartme...</Box>
            <Box>OLX Renew (Mobil...</Box>
            <Box>Scoot...</Box>
            <Box>For Rent:Houses & Apartme...</Box>
        

      
            </Flex>
        </Box>
     


<Box className="Banner_box">

<Box className="banner_left">

<img className="left_logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZsAAAB7CAMAAACVdd38AAAAkFBMVEX///87dv7///4jbP7h6v/w8/45df4daP4ucP7x9v9bif6iu/9Rhv42c/64yf8qbv5Hf/5nkP7B0f/3+v/I1/+yxv/N2/94nv7U3/6btv6rwf7q8P7Y4/7D0/6Rr/5Mgv6HqP6duP5vmP4AYv49ev5ejf6Wsv4AWv6NrP6uw/91nP6Bo/7k6/1rlf4AXv67zP1lRJ85AAAOK0lEQVR4nO1di3bqrBJOQJGoFGu81Uu1Nnps1e37v92BXMyQQEKsunv24Vv/Xn+rCZf5GJgZBup5Dg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg73BPJaZYQI/e12OQi0/+AiPluOm1+BNvaLwK2/3SiHGI6b3wvHzTOhLBa1C4fj5qlAEl7MS/2i7rh5JlJmco4q4bh5DiQV7cn8uItiGUe743wSyM8rpjbHzTMgmFl+dBmmjKRgjGKym5+qFMhx8wyE4y5mJUH7PsW7i1lxHDdPQI9womFGgvBojAwTm+PmsRBif6HUxEyiPGSon9YcN48FanV5FTGx7uDzQveu4+aBEOowr9aZFIwNpYYVtOef5wbFszlK7KF4Yq/2KxKvEKX4aeXTsngNqvNeru7f5yZx+BbL2awVJGKvfj5dmREyLdH2CLvUjhoBvi017F/nRsh3Of8eYIw5x9jfbVZhtcAX483r2idR/7wZL37EDWqvdXazCXRX3Dd7GjeLP50c3ZL+fn1ev/x8K74b5W/+R/w6gkUV8B/wmhz6i32EOcvmfMIox+eVfrKSj7/0O5QxljiHtNMf3z6zobDfhBpBzmtBp5/GzRyqNz8VO/ySf017xXf7+XraEb9OKiyfDhAOQq0pLq/FhPtjncCRNxkU/BDhfUxuXnS6zagRHd96f4ebPuw1/Sh2+P7cIBQeqEE8fD3RcPOOZT2R8iTB81u4EdxP7deaa7Peb+GmYLWoY6m+8QidlHrY+tHciNbOIrP9SvCmsJkihKkvVpBzAztobmmhqXWNYBlV3Ey7uyvEzAs4QJN+/lV3V9t4hN6oMh7x7MFzGhLCqfbG18pKj7y9qVTR1obsCFG1bqFGrIcBqKmKm1dKcnTGWQORlA74hpH6xqK+Kii2eSw3CG3qhEOYMj9MjM+TfmPFKfXXFmxry40yW+Ov1DdAaKQIh/j1bV0WqyGh+sRduTFPUEoT8DIXOhqYhYlXjbmZ11dvqGuU12XPjc+/0j07lRorbt6LizIdPpIb71Avm8gn5HQVxLDiBXZuOqeFtbWbQNZ5MQ24kZojIxpF7bfhZlBqw/lR3Eh3fmw325N1GE8F4r+dYkZyxfQmRSWv7e6+uY2WgY9v4sbH0i8oScaCG81kjtvKYGzATd6CyC+hg5osxPQ7nQoCIEzC9pPWcAc+wctm3IT+batNXPvgNm4kOeVBa8HNpuxnUNVvaMLN6DNJQIUtIWlS6h9pU63LoiHCzWflj/EwyXoBvSK0FTsM07zN9NKAGPHq/Ha1EYqzygziZtz4+FCu1oIbohHWWnmiCTdemGCRD0/SzT4UatMraTbH3eNhs41wqfUsESeQJntLPvLy0sstquZGMzbswV7Rbdz4mo/quCnadVk1yxvntCsCArm5VhcURgLB51WYOM+nt6jADt3HLfzIP+ajNA6dK3tDbpZVhgihnHNTvCIRTPtGbnS11XHjTXUFscODuHlTxc/7s2wzRvwL94VgAQ+L3KyScYvmHRqD085HA24qLQFG+/vxcHxYV2y50fETuQnhQpv/GMGoyf24CVULgW8KrZmpCzXvSdIAN5lbjJZf4wwzW17iFwdGueHvVjpKlq9G5SLbJ3IzBB3/zgWDR94juFE9lUL4UOrIIoLksIEUFfQV6SixD0zhwxogjUizklfJ3l7Mj9nOpxbc7Cy5YTWt3V7LYf1TLgT2Dfp/P27OiqfyXYrEItRS5hy57qEVJFSoksJHs3CaWhaEGiTyJqapLzPZq7jp2bkJ9FjVdDHF58UIwzm3YQgFLs6duBG1KZZypG3SGEqPvolWnBQ5cdJr376n9maQOR/BEqXmGEjkL8kjlXsEHzbk0Gl1L9A4byteoB4gYXz3Oa3gGvNhsajkIbhZTHaShoIbS9l2ZLP5oStda/kIrSkOYYRe9QYBe08eqOIGeW/15EitqeAGwRaQrjJCye4Bc1oPGh6lbaK0TXBNIr4M3JT8Noajt9Mt5KCuXuL4VHpyplccNk2+r95bQ291MUOpNdVNXVxriOiX+B1EroQHnj12N705glFL9bavGC+Qibi/rXJWLKH4PGueL4D0ARvyWipGaKv+0V3yfaXeCI2o0Zy6CU0U8pXTS9vigy/Awv762N24gQkUqnsLhbIl+STG5WajfiZi+PXUmJuOXlKacYI0sSyJNGRSx031msOndcMKARWPhw4KgCpG95/TQFDAHD9GPahdculFgSbaJsA689p0w0LZeoHxleZRfeAtC3fW5QsIl9k4rUW1E5oAMJqTkCE653Lhk4zau3ED+sPWRqFeoD8zj/s5MgxCfGyWRBgauJmUnkToojfp0o3kGm5ks44mNye2cOqaCjxuEsRFAhrYMSvgEdyQvlGmIyCUlBt0MSQY8GMz/0bPDbXXG99Ob2RugNkDpeP6Vuf+DPtO/G04sLD3UL0xjp1LmRsPjZheVLEvao3nrDdxk43eayypl5r8YhiT5ZM03WCai5pnOyN3swXU9cbUNmhp09TVQ17wrT1dJlMdK/pY7LJeVORV86g+ScHGTvPgHqMeuEZzYKIA2xw2G/HvAFwudr7vnGZnp3neN7QFslQNmQh61CSC+mxb1cdilxv4N/rpj3wn39fYaTXUZOSYRKBa8DLFOMk2Bu+np4IUborFAXnXcaPsR5RLypql+DeZ0OKH229R2dXBDbLWLeMC0sA961lkh+SRam5qqfEJHpunNWTyfHNk4qvm5pFxAd8P1S+94bm4fU2/7L0cy3iaNIoMliG1iKdZUCOrHJtbjQ61oex03Rsqc1qhxEGDOU2Np2mMo2Jmnwwkqd8idNr7ioCZhbNwfV+7yxvX1MqNcVSxknOLOLQVNbFBYJzT6pMa0oA4CKzTQ1H580mGMFBXfRyaRCWdluJR49D7QmJ0/L/wHQqGDBqY0cb9G0KvhxLkcRKjdLHF/o1hUStXaWy4cQjlkNuM4nUw+Qm3SeUG5LkLl7mSG0+dxKPygJdaUd6/QeDr9Afonl7FZQFk3PeMfDxNZYuW54p9TzPJ+b6nJTe+kRuj2wpbHB/XWkCnRw21IBCBY9tqvZG+dvW+p6fZ90RoNcqwCrKCNjBDzT4ygNDe3GtGu2+X1ct+XZHN8Yx8ATm/WLye5E7AR+mXuiEMVgcKRW2VL4APKDvkmWwGL9Xgr7A8REM/eYbPNDcAQVX2cWDPjVeTZ0N59YUDuO09gRvj7iwEi7NvkZL0Ck8+KhMzH9boTdlOot1ldjGWxEcpz0ZQBrdmr0dgYHZop4EtgKry3i3kcd1MaMqNplYjN9DDY1wFKCfeOVCy2ZXk8CVsBYaXJBi4aZfy07Zp1gha9Mr5aTFjuRTYPms98AwJaRSK/lFeJ13dmDtI+/Z5nSjIhyibroYKQPI6ldnZquVJu63shP+LkjXehxUYuIHb3mntnL5u3g/TQdnpp6FXiPREWSYM2Aol9ce/IMIf6I00CW/ihk41m21GbsBkxAvZ3tDxiT1E5CliI/g8nrVakw91nNMxLETPjShLmw/NdBs0+JIsRKCr0tyQgIOlYNbX4WfnCK6LbSNu4l3OEjlGbvL3Sw66clhKVljasScUy1WzUJViwRm4QY3OESQLERQmW49bp9FROdc9aqQ3KLCsvwxwjKARN8lWWokcEzcL7eZzJj+Q6pLM+cKL0ZzZUBugHq826Y31QVgyCNPWKG424Rhz2PfaDLxi77w5r+uLAcnBhsbcxFoj5+LCqVUTN2BF5K2SlwGsKRLFxRo2M3KwKLTkBm1sLMT8xCc8NKCBGDzNuLn5KIFiBdlzw1Nq5AygvCR8T20Lc7ekfJpVPdSOJ3L1rT1RhAv3MBi5EeUf62d85bxn5QrBGp5bE2jpd9jqQANrbvLD0DDZSa454Jy0Ni6gREZ0ZyTgyGLTeNavCVrj4s5hBTeCnNpz0nQJXNxQc0ToWvGlcZ6amNVuul9giCy52Q4AjteMGvnDWwS+WusWSmjJ4lPRPUBIcQJofOUreqm6EgAXj71Xc4N6FvcLgDjayihLvrkh/Rah7+a2mjQHQU32d6Yo93JYNC53jvXewQLaqC/JzWZD472WPt6XCqniRu5wFP1MAIKPodIPyaWh4sp0b3P/b7jPpnAe+1H32UA7Nk6WKD8BojTkNY2qtAZ6edJIc3lTNTceCjfcIB4+GJUUWa9oBH/clLMuxloQNSOHdb0ncQMW1472NkoljZ6esvmyR0oCZZS/h5okxTpuhKOz1SRnMO6Pdds6aFbajWZ83fjClLz6diNyWL+YefIwbmgn+3s6na6+c0EH/M2d9+ti5r3sOlxuChMZxyKM4sE80E6jQf5+Z1D+OlbE07uPwQ4zoRTvtNfKxgboRVSdPCxqprRzbnwjBywQhZoIlwERL18w8bA7uoIc+kwkhAIIYAWicLWfdmXELeqfD5eFYeQiWEdgaIZ4dfmxHaQU0u7mElSkCSO0uBzOfeE3RuvzYRjcqDJZP4RBYF5AFRBp6RRre5jewK1E0yPaX1DarbyDpkv7LY+Wye/C02w2Wy6SdyoeTqvLf/oJOxJzK3IYvWgq+tfv6/zbQK1+fYgC70664ee4eTAQmvO6e9Uv+mx4x83DIe80MLJDODFmWztuHg5p3Mz7ulxeIozGF/OS5rh5OJKtuuW+T3n892/85LZGylm316o6s+i4eR4Wo963sM+J8KCi7nQ+adcYgY6b5yG9VSdoB9mP1eQ4bp6HxFGDnpzTm/9VOG5+Lxw3vxdabn4YQ3K4D/TcOHJ+A9p/cBGfTm9+CVplNM/4cXBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHD4P8F/ATwb1SlxhmV3AAAAAElFTkSuQmCC"></img>
</Box>
<Box className="banner_text_box"><h1 className="banner_text1">OLX AUTOS HI DETA HAI AAPKI CAR KA BEST PRICE</h1>
<h2 className="banner_text2">Free Doorstep Inspection</h2></Box>

<Box><button style={{width:"80px" ,padding:"8px", background:"white" ,borderRadius:"6px"}}>Sell car</button></Box>
    
</Box>
<br />
        <br />

<Box className="data_box">
    <Flex style={{justifyContent:"space-between"}}>
    <Box className="min_box_product" ><img  src="https://apollo-singapore.akamaized.net/v1/files/kx877vtqwwe93-IN/image;s=300x600;q=60" alt="" />
    <h1>$ 99,00,0</h1>
    <h2>15 Cents Aparment  </h2>
    <p> Mumbai</p>
    </Box>
    <Box className="min_box_product" ><img  src="https://apollo-singapore.akamaized.net/v1/files/t4i3gx7jeh303-IN/image;s=300x600;q=60" alt="" />
    <h1>$ 10,500</h1>
    <h2>Honda jazz 1.2 VX i VTEC,2018,Petrol</h2>
    <p> AVARAMPALAYAM,COIMBATORE</p>
    </Box>

    <Box className="min_box_product" ><img  src="https://apollo-singapore.akamaized.net/v1/files/a5q90435cdqh3-IN/image;s=300x600;q=60" alt="" />
    <h1>$ 100</h1>
    <h2>Apple iPhone 7s new 128gb</h2>
    <p> SAMUDRAPUR,MAHARASTRA</p>
    </Box>

    <Box className="min_box_product" ><img  src="https://apollo-singapore.akamaized.net/v1/files/bl3pz3edh1f4-IN/image;s=300x600;q=60" alt="" />
    <h1>$ 500</h1>
    <h2>Brand new original IphoneXS/64gb av...</h2>
    <p> SAMUDRAPUR,MAHARASTRA</p>
    </Box>
   


    </Flex>

</Box>
<Box className="data_box">
    <Flex style={{justifyContent:"space-between"}}>
<Box className="min_box_product" ><img  src="https://apollo-singapore.akamaized.net/v1/files/gqwiw7an9k0y2-IN/image;s=300x600;q=60" alt="" />
<h1>$  ̶1̶3̶,̶5̶0̶0̶1 ,$12,500 </h1>
    <h2>Honda jazz 1.2 VX i VTEC,2018,Petrol</h2>
    <p> AVARAMPALAYAM,COIMBATORE</p>
    </Box>
    <Box className="min_box_product" ><img  src="https://apollo-singapore.akamaized.net/v1/files/30g2mocb7y3k-IN/image;s=300x600;q=60" alt="" />
    <h1>$ 16,800</h1>
    <h2>Honda jazz 1.2 VX i VTEC,2018,Petrol</h2>
    <p> AVARAMPALAYAM,COIMBATORE</p>
    </Box>
   

    <Box className="min_box_product" ><img  src="https://apollo-singapore.akamaized.net/v1/files/bl3pz3edh1f4-IN/image;s=300x600;q=60" alt="" />
    <h1>$ 500</h1>
    <h2>Brand new original IphoneXS/64gb av...</h2>
    <p> SAMUDRAPUR,MAHARASTRA</p>
    </Box>
    
    <Box className="min_box_product" ><img  src="https://apollo-singapore.akamaized.net/v1/files/t4i3gx7jeh303-IN/image;s=300x600;q=60" alt="" />
    <h1>$ 10,500</h1>
    <h2>Honda jazz 1.2 VX i VTEC,2018,Petrol</h2>
    <p> AVARAMPALAYAM,COIMBATORE</p>
    </Box>

    </Flex>
</Box>


<Box className="data_box">
    <Flex style={{justifyContent:"space-between"}}>
   
    <Box className="min_box_product" ><img  src="https://apollo-singapore.akamaized.net/v1/files/t4i3gx7jeh303-IN/image;s=300x600;q=60" alt="" />
    <h1>$ 10,500</h1>
    <h2>Honda jazz 1.2 VX i VTEC,2018,Petrol</h2>
    <p> AVARAMPALAYAM,COIMBATORE</p>
    </Box>
    <Box className="min_box_product" ><img  src="https://apollo-singapore.akamaized.net/v1/files/kx877vtqwwe93-IN/image;s=300x600;q=60" alt="" />
    <h1>Rs.99,00,00,000</h1>
    <h2>15 Cents Aparment  </h2>
    <p> Mumbai</p>
    </Box>

   

    <Box className="min_box_product" ><img  src="https://apollo-singapore.akamaized.net/v1/files/bl3pz3edh1f4-IN/image;s=300x600;q=60" alt="" />
    <h1>$ 500</h1>
    <h2>Brand new original IphoneXS/64gb av...</h2>
    <p> SAMUDRAPUR,MAHARASTRA</p>
    </Box>
   
    <Box className="min_box_product" ><img  src="https://apollo-singapore.akamaized.net/v1/files/a5q90435cdqh3-IN/image;s=300x600;q=60" alt="" />
    <h1> $100</h1>
    <h2>Apple iPhone 7s new 128gb</h2>
    <p> SAMUDRAPUR,MAHARASTRA</p>
    </Box>


    </Flex>

</Box>


<Box className="data_box">
    <Flex style={{justifyContent:"space-between"}}>
    <Box className="min_box_product" ><img  src="https://apollo-singapore.akamaized.net/v1/files/kx877vtqwwe93-IN/image;s=300x600;q=60" alt="" />
    <h1>$ 99,00,0</h1>
    <h2>15 Cents Aparment  </h2>
    <p> Mumbai</p>
    </Box>
    <Box className="min_box_product" ><img  src="https://apollo-singapore.akamaized.net/v1/files/oa77zaprfm2g-IN/image;s=300x600;q=60" alt="" />
    <h1>$ 400</h1>
    <h2>MRJ Sportd kids bicycle</h2>
    <p> ABERDEEN BAZAR ,PORT BLAIR</p>
    </Box>

    <Box className="min_box_product" ><img  src="https://apollo-singapore.akamaized.net/v1/files/a5q90435cdqh3-IN/image;s=300x600;q=60" alt="" />
    <h1>$ 100</h1>
    <h2>Apple iPhone 7s new 128gb</h2>
    <p> SAMUDRAPUR,MAHARASTRA</p>
    </Box>

    <Box className="min_box_product" ><img  src="https://apollo-singapore.akamaized.net/v1/files/te8i1vwr3ycn2-IN/image;s=300x600;q=60" alt="" />
    <h1>$ 30, 500</h1>
    <h2>NO.1 CUSTOM JEEP_JAIN MOTOR_A</h2>
    <p>ABERDEEN BAZAR ,PORT BLAIR <StarIcon/> </p>
    
    </Box>
   


    </Flex>

</Box>


<Box className="banner_last"><img style={{borderRadius:"50%"}} src="https://tse4.mm.bing.net/th?id=OIP.w4jZ9YfyztDySj8EA1HAswHaEK&pid=Api&P=0"/>


<Box className="banner_last_text"><h1>TRY THE OLX APP</h1> <h2>Buy ,sell and find just about anything using the app on your mobile</h2></Box>
<Box className="divide"></Box>
<Box><h2>GET YOUR APP TODAY</h2>
<div id="btn-box1">
          <button class="app">
            <img src="https://img.icons8.com/ios-filled/2x/mac-os.png" />
            <p>App Store</p>
            
          </button>
          <button>
            <img src="https://img.icons8.com/ios-filled/344/google-play.png" />
            <p>Google Play</p>
          </button>
        </div>
</Box>

</Box>


<Footer />






        </>
    )

};

