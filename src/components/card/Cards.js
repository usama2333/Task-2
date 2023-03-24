import React , {Fragment} from 'react';
import { Container , Stack,Typography,Box, Card , CardContent, CardMedia } from '@mui/material';
import celebs from '../../assests/images/celebs.png';
import line from '../../assests/images/line.png';
import downarrow from '../../assests/images/downarrow.png';
import uparrow from '../../assests/images/uparrow.png';
import firstlogo from '../../assests/images/firstlogo.png';
import greenarrow from "../../assests/images/greenarrow.png";
import mlppic from "../../assests/images/mlppic.png";
import third from "../../assests/images/third.png";
import arrows from "../../assests/images/arrows.png";
import dot from "../../assests/images/dot.png";
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
        direction= {{md : 'row' , xs : 'column'}}
        justifyContent= 'space-around'
        alignItems='center'
        spacing = {3}
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

     
     <Card sx={{ maxWidth: '500px',  height: {sm : '238px' , xs : '200px'}, width : { md : '379px',sm : '500px' , xs : '320px' } , }}>
      <CardMedia
        sx={{ pt : {sm : '25px' , xs : '15px'}, pb :  {sm : '25px' , xs : '15px'},backgroundColor: '#b11705' }}
      >
        
        <Box
         sx={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' ,width :{xs : '75%' , sm : '70%'}  , ml : {xs : '100px' , sm : '130px'}}} 
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
         sx={{ width : {sm : 'auto' , xs : '170px'} , height :{sm : 'auto' , xs : '170px'}  ,position : 'absolute' , left : {sm : '-65px' , xs : '-35px'},top : '30px' , zIndex : 9999, overflow : 'visible'}}
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

    <Box 
      sx={{position : 'relative'}}
    >
    <Box 
     sx={{position : 'absolute', left :{md : '350px' , sm : '470px' , xs : '290px'} , top : '-10px', height : '30px' , width : '30px', borderRadius : '40px' ,backgroundColor : '#ffffff', display : 'flex' , justifyContent : 'center' , alignItems : 'center' }}
    >

   
     <Box
      component='img'
      src={uparrow}
   
      // sx={{ display : 'inline-block'}}
     >
     </Box>

    </Box>
  </Box>


    </Box>



    
    <Box
      sx={{position : 'relative'}}
     >

     
<Card sx={{ maxWidth: '500px',  height: {sm : '238px' , xs : '200px'}, width : {xs : '320px' , sm : '500px' , md : '379px'} , }}>
      <CardMedia
        sx={{ pt : {sm : '25px' , xs : '15px'}, pb :  {sm : '25px' , xs : '15px'},backgroundColor: '#b11705' }}
      >
        
        <Box
         sx={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , width :{xs : '75%' , sm : '70%'}  , ml : {xs : '100px' , sm : '130px'}}} 
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
         sx={{ width : {sm : 'auto' , xs : '170px'} , height :{sm : 'auto' , xs : '170px'}  ,position : 'absolute' , left : {sm : '-65px' , xs : '-35px'},top : '30px' , zIndex : 9999, overflow : 'visible'}}
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



    <Box 
      sx={{position : 'relative'}}
    >
    <Box 
     sx={{position : 'absolute', left :{md : '350px' , sm : '470px' , xs : '290px'} , top : '-10px', height : '30px' , width : '30px', borderRadius : '40px' ,backgroundColor : '#ffffff', display : 'flex' , justifyContent : 'center' , alignItems : 'center' }}
    >

   
     <Box
      component='img'
      src={uparrow}
   
      // sx={{ display : 'inline-block'}}
     >
     </Box>

    </Box>
  </Box>

    </Box>



    <Box
      sx={{position : 'relative'}}
     >

     
     <Card sx={{ maxWidth: '500px',  width : { md : '379px',sm : '500px' , xs : '320px' } , mt : {xlg : '0px', md : '40px'} }}>
      <CardMedia
        sx={{ pt : '25px', pb : '25px',backgroundColor: '#b11705' }}
      >
        
        <Box
         sx={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' ,width :{xs : '73%' , sm : '70%'}  , ml : {xs : '110px' , sm : '130px'}}} 
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
         sx={{width : {sm : 'auto' , xs : '160px'}, height : {sm : 'auto' , xs : '160px'},position : 'absolute' , left :{sm : '-65px' , xs : '-35px'} ,top : {xs : '0px' , sm :'-20px', md : '15px' , lg : '15px', xlg : '-15px'} , zIndex : 9999, overflow : 'visible'}}
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


    <Box 
      sx={{position : 'relative'}}
    >
    <Box 
     sx={{position : 'absolute', left :{md : '350px' , sm : '470px' , xs : '290px'} , top : '-10px', height : '30px' , width : '30px', borderRadius : '40px' ,backgroundColor : '#ffffff', display : 'flex' , justifyContent : 'center' , alignItems : 'center' }}
    >

   
     <Box
      component='img'
      src={downarrow}
   
      // sx={{ display : 'inline-block'}}
     >
     </Box>

    </Box>
  </Box>

    </Box>




       </Stack>

       <Box
        sx={{position : 'relative' , display : 'flex' , justifyContent : 'end' , alignItems : 'center', pb : '42px', mr : '40px'}}
       >
        <Box
         component='img'
         src = {arrows}
      
        >
        </Box>
        <Box
         component='img'
         src = {dot}
         sx={{position : 'absolute' , right : '15px' , top : '2px'}}
        >

        </Box>
       </Box>


     </Container>
      
      
    </Fragment>
  )
}

export default Cards
