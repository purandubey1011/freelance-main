import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Box, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function Swipermaterial({images}) {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" bgcolor="transparent" pb="10px">
      <Box width="80%" >
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView={3} // Display exactly 5 slides at a time
          spaceBetween={30} // Adjust space between slides if necessary
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {images?.map((src, index) => (
            <SwiperSlide key={index}>
              <Box
                component="img"
                src={src}
                alt={`Slide ${index + 1}`}
                sx={{ minWidth: '100%', height: '60vh', objectFit: 'cover' }}
                style={{border:"2px solid black",borderColor:"red"}}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box position="absolute" width="100%" display="flex" justifyContent="space-between" px={5}>
          <Box sx={{width:"45px",height:"45px",bgcolor:"white",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}} position="relative">
          <ArrowBackIcon className="swiper-button-prev" color="black" ></ArrowBackIcon>
          </Box>
          <Box sx={{width:"45px",height:"45px",bgcolor:"white",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}} position="relative">
          <ArrowForwardIcon className="swiper-button-next" color="black" ></ArrowForwardIcon>
          </Box>
       
          
      </Box>
    </Box>
  );
}

export default Swipermaterial;
