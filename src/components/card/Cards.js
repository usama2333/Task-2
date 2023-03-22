import React , {Fragment} from 'react';
import { Container , Stack,Typography,Box,} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import celebs from '../../assests/images/celebs.png';
import line from '../../assests/images/line.png';
import firstlogo from '../../assests/images/firstlogo.png';
import greenarrow from "../../assests/images/greenarrow.png";
import mlppic from "../../assests/images/mlppic.png";
import third from "../../assests/images/third.png";
import dollars from "../../assests/images/dollars.png";
import cardprofile1 from "../../assests/images/cardprofile1.png";
import cardprofile2 from "../../assests/images/cardprofile2.png";
import cardprofilepic3 from "../../assests/images/cardprofilepic3.png";
import {cardHeaderText, cardV2fText , cardIconText} from '../../styles/style';

const Cards = () => {
  return (
    <Fragment>

     <Container maxWidth='custom'
      sx={{ backgroundColor: "#f9f0f6" }}
      >
       <Stack
        sx={{pt : '100px' , pb : '85px' , flexWrap : 'wrap'}}
        direction= 'row'
        justifyContent= 'space-between'
        alignItems='center'
       >
         <Box
          sx={{display : 'flex', flexDirection : 'column'}}
         >
            <Box 
            component='img'
            src={celebs}
            sx={{width : '300px' , height : '140px'}}
            >
            </Box>
            <Box
              component="img"
              src={line}
              sx={{ width: "139px", height: "7px" , mt : '40px', display : 'inline-block' ,ml : '150px'}}
            ></Box>
         </Box>

     <Box
      sx={{position : 'relative'}}
     >

     
     <Card sx={{ maxWidth: '500px',  height: '238px', width : '379px' , }}>
      <CardMedia
        sx={{ pt : '25px', pb : '25px',backgroundColor: '#b11705' }}
      >
        
        <Box
         sx={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , width : '70%' , ml : '130px'}} 
        >
           <Typography
            sx={cardHeaderText}
           >
            MARIA LAPIEDRA
           </Typography>
           <Box
            component='img'
            src={firstlogo}
            sx={{textAlign :'right' , display : 'inline-block' , mr : '30px'}}
           >

           </Box>
      </Box>
    </CardMedia>
     
      <CardContent>
     
    
      <Box
         component='img'
         src = {cardprofile1}
         sx={{position : 'absolute' , left : '-65px',top : '30px' , zIndex : 9999, overflow : 'visible'}}
        >

        </Box>
      <Box
         sx={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , width : '60%' , ml : '118px'}} 
        >
           <Typography
            sx={cardV2fText}
           >
            v2f Value
           </Typography>
          
           <Box
            sx={{display : 'flex' , flexDirection : 'row' , alignItems : 'center'}} 
           >
               <Box
                component='img'
                src = {greenarrow}
                sx={{width : '29px' , height : '29px' , mr : '7px'}}
               >
               </Box>
               <Typography
                sx={cardIconText}
               >
               $0.012
               </Typography>
           </Box>
      </Box>


      <Box
         sx={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , width : '60%' , ml : '118px' , mt : '10px'}} 
        >
           <Typography
            sx={cardV2fText}
           >
            Coin
           </Typography>
          
           <Box
            sx={{display : 'flex' , flexDirection : 'row' , alignItems : 'center'}} 
           >
               <Box
                component='img'
                src = {mlppic}
                sx={{width : '29px' , height : '29px' , mr : '7px'}}
               >
               </Box>
               <Typography
                sx={cardIconText}
               >
               MLP
               </Typography>
           </Box>
      </Box>

      
      <Box
         sx={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , width : '60%' , ml : '118px' , mt : '10px'}} 
        >
           <Typography
            sx={cardV2fText}
           >
            Price
           </Typography>
          
           <Box
            sx={{display : 'flex' , flexDirection : 'row' , alignItems : 'center'}} 
           >
               <Box
                component='img'
                src = {dollars}
                sx={{width : '29px' , height : '29px' , mr : '7px'}}
               >
               </Box>
               <Typography
                sx={cardIconText}
               >
               $ 1.90
               </Typography>
           </Box>
      </Box>
      </CardContent>

     
    </Card>
    </Box>



    
    <Box
      sx={{position : 'relative'}}
     >

     
     <Card sx={{ maxWidth: '500px',  height: '238px', width : '379px' , }}>
      <CardMedia
        sx={{ pt : '25px', pb : '25px',backgroundColor: '#b11705' }}
      >
        
        <Box
         sx={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , width : '70%' , ml : '130px'}} 
        >
           <Typography
            sx={cardHeaderText}
           >
            MARIA LAPIEDRA
           </Typography>
           <Box
            component='img'
            src={firstlogo}
            sx={{textAlign :'right' , display : 'inline-block' , mr : '30px'}}
           >

           </Box>
      </Box>
    </CardMedia>
     
      <CardContent>
     
    
      <Box
         component='img'
         src = {cardprofile2}
         sx={{position : 'absolute' , left : '-65px',top : '30px' , zIndex : 9999, overflow : 'visible'}}
        >

        </Box>
      <Box
         sx={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , width : '60%' , ml : '118px'}} 
        >
           <Typography
            sx={cardV2fText}
           >
            v2f Value
           </Typography>
          
           <Box
            sx={{display : 'flex' , flexDirection : 'row' , alignItems : 'center'}} 
           >
               <Box
                component='img'
                src = {greenarrow}
                sx={{width : '29px' , height : '29px' , mr : '7px'}}
               >
               </Box>
               <Typography
                sx={cardIconText}
               >
               $0.012
               </Typography>
           </Box>
      </Box>


      <Box
         sx={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , width : '60%' , ml : '118px' , mt : '10px'}} 
        >
           <Typography
            sx={cardV2fText}
           >
            Coin
           </Typography>
          
           <Box
            sx={{display : 'flex' , flexDirection : 'row' , alignItems : 'center'}} 
           >
               <Box
                component='img'
                src = {mlppic}
                sx={{width : '29px' , height : '29px' , mr : '7px'}}
               >
               </Box>
               <Typography
                sx={cardIconText}
               >
               MLP
               </Typography>
           </Box>
      </Box>

      
      <Box
         sx={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , width : '60%' , ml : '118px' , mt : '10px'}} 
        >
           <Typography
            sx={cardV2fText}
           >
            Price
           </Typography>
          
           <Box
            sx={{display : 'flex' , flexDirection : 'row' , alignItems : 'center'}} 
           >
               <Box
                component='img'
                src = {dollars}
                sx={{width : '29px' , height : '29px' , mr : '7px'}}
               >
               </Box>
               <Typography
                sx={cardIconText}
               >
               $ 1.90
               </Typography>
           </Box>
      </Box>
      </CardContent>

     
    </Card>
    </Box>



    <Box
      sx={{position : 'relative'}}
     >

     
     <Card sx={{ maxWidth: '500px',  height: '238px', width : '379px' , }}>
      <CardMedia
        sx={{ pt : '25px', pb : '25px',backgroundColor: '#b11705' }}
      >
        
        <Box
         sx={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , width : '70%' , ml : '130px'}} 
        >
           <Typography
            sx={cardHeaderText}
           >
            MARIA LAPIEDRA
           </Typography>
           <Box
            component='img'
            src={third}
            sx={{textAlign :'right' , display : 'inline-block' , mr : '30px'}}
           >

           </Box>
      </Box>
    </CardMedia>
     
      <CardContent>
     
    
      <Box
         component='img'
         src = {cardprofilepic3}
         sx={{position : 'absolute' , left : '-65px',top : '30px' , zIndex : 9999, overflow : 'visible'}}
        >

        </Box>
      <Box
         sx={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , width : '60%' , ml : '118px'}} 
        >
           <Typography
            sx={cardV2fText}
           >
            v2f Value
           </Typography>
          
           <Box
            sx={{display : 'flex' , flexDirection : 'row' , alignItems : 'center'}} 
           >
               <Box
                component='img'
                src = {greenarrow}
                sx={{width : '29px' , height : '29px' , mr : '7px'}}
               >
               </Box>
               <Typography
                sx={cardIconText}
               >
               $0.012
               </Typography>
           </Box>
      </Box>


      </CardContent>

     
    </Card>
    </Box>




       </Stack>


     </Container>
      
      
    </Fragment>
  )
}

export default Cards
