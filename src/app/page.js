import Nav from "@/components/Nav";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import Footer from "@/components/Footer";
import Marque from "@/components/Marque";
import OurLocations from "@/components/OurLocations";
import Crousel from "@/components/Crousel/Crousel";
import { Homepage } from "@/configs";
import { Inter } from "next/font/google";
import 'fontsource-inter';
import GradeIcon from '@mui/icons-material/Grade';

const slideImages = [
  'https://ik.imagekit.io/bc3qk7dan/wrap%20photos/IMG_2878.JPG?updatedAt=1718268664105',
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/IMG_3055.HEIC?updatedAt=1718268663965",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/IMG_3054.HEIC?updatedAt=1718268663898",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/IMG_2879.JPG?updatedAt=1718268662347",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/IMG_2874.JPG?updatedAt=1718268660467",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/IMG_2872.JPG?updatedAt=1718268660330",
  'https://ik.imagekit.io/bc3qk7dan/wrap%20photos/IMG_2751.JPG?updatedAt=1718268659998',
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/IMG_2232.JPG?updatedAt=1718268659490",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/IMG_2741.JPG?updatedAt=1718268659328",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/IMG_2234.JPG?updatedAt=1718268659057",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/IMG_2742.JPG?updatedAt=1718268658442",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/IMG_2233.JPG?updatedAt=1718268658365",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/IMG_2231.JPG?updatedAt=1718268656932",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/IMG_2228.JPG?updatedAt=1718268652534",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/IMG_2230.JPG?updatedAt=1718268657001",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/IMG_2227.JPG?updatedAt=1718268652338",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/IMG_2129.heic?updatedAt=1718268651068",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/IMG_1817.JPG?updatedAt=1718268650209",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/IMG_1818.JPG?updatedAt=1718268650189",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/IMG_1768.heic?updatedAt=1718268649683",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/IMG_1762.heic?updatedAt=1718268649600",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/IMG_1736.JPG?updatedAt=1718268648729",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/IMG_1760.heic?updatedAt=1718268648509",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/IMG_1737.JPG?updatedAt=1718268648259",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/IMG_1714.JPG?updatedAt=1718268647198",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/IMG_1712.JPG?updatedAt=1718268647201",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/IMG_1713.JPG?updatedAt=1718268646914",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/DSC02620.JPG?updatedAt=1718268644967",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/DSC02616.JPG?updatedAt=1718268644904",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/DSC02598.JPG?updatedAt=1718268644862",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/DSC02608.JPG?updatedAt=1718268644845",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/DSC02597.JPG?updatedAt=1718268643616",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/DSC02596.JPG?updatedAt=1718268643333",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/IMG_1711.JPG?updatedAt=1718268642412",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/DSC02562.JPG?updatedAt=1718268642373",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/DSC00559.JPG?updatedAt=1718268642264",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/DSC02558.JPG?updatedAt=1718268642235",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/cybertruck-5.jpg?updatedAt=1718268637259",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/cybertruck-8.jpg?updatedAt=1718268637192",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/cybertruck-9.jpg?updatedAt=1718268632467",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/cybertruck-2.jpg?updatedAt=1718268631536",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/DSC00084.JPG?updatedAt=1718268630755",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/yellowtesla.HEIC?updatedAt=1718270678418",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/yellowtesla1.HEIC?updatedAt=1718270707294",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/yellowtesla2.HEIC?updatedAt=1718270722681",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/yellowtesla3.HEIC?updatedAt=1718270743062",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/yellowtesla4.HEIC?updatedAt=1718270759590",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/DSC00061.heic?updatedAt=1718268621228",
  "https://ik.imagekit.io/bc3qk7dan/wrap%20photos/DSC00060.heic?updatedAt=1718268621203"
];

export default function Home() {
  return (
    <Box
      component={"main"}
      sx={{ minHeight: "100vh" }}
      overflow={"hidden"}
      position={"relative"}
      bgcolor={"#0E0C10"}
      style={{ fontFamily: 'Inter, Arial, sans-serif' }}
    >
      <Nav />

      <Box
        sx={{
          height: { xs: "30vh", sm: "80vh" },
          // bgcolor: "#333",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          width={"100%"}
          muted
          loop
          src="https://ik.imagekit.io/b2bubtj33/carWrap/homepage/hero%20car%20video.mp4?updatedAt=1711722745361"
        ></video>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "5vmax", sm: "5vmax" },
            position: "absolute",
            bottom: "2%",
            p: 2,
            zIndex: 2,
          }}
          fontWeight={500}
        >
          PREMIUM <br /> TINT AND WRAP
        </Typography>
      </Box>

      {/* our services section */}
      <Box px={{ sx: 2, md: 4 }} py={{ xs: 2, md: 3 }}
        display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h3" align="center" mt="8vh">
          Our Services
        </Typography>
        <Typography variant="subtitle1" mt={5} align="center" sx={{ width: "88vw" }}>
          Revamp your wheels with Premium Tint and Wrap! We specialize in giving your car a fresh look with body wraps, shielding your interiors with window tinting, safeguarding your paint with protective films, and providing seamless B2B wrapping solutions. Let's level up your vehicle's style and durability together
        </Typography>
      </Box>

      {/* our services image section */}
      <Box sx={{ display: { md: "flex" } }} display="flex" alignItems="center" justifyContent="center" >
        {Homepage.services.map((elem, id) => {
          return (
            <Box
              key={id}
              sx={{
                height: "37vh",
                width: { md: "22%" },
                bgcolor: `#${id}${id}${id}`,
                position: "relative",
                backgroundImage: `url(${elem.src})`,
                backgroundSize: "cover",
                borderRadius: "10px",
                m: 1,
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "end"
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  // fontSize: { xs: "5vmax", sm: "7vmax" },
                  // position: "absolute",
                  // bottom: "0%",
                  bgcolor: "#000000da",
                  width: "100%",
                  borderRadius: "9px",
                  padding: "8px 0"
                }}
              >
                {elem.title}
              </Typography>
            </Box>
          );
        })}
      </Box>

      <Box
        sx={{
          position: "relative",
          px: { xs: 2, sm: 8 },
          py: { xs: 2, sm: 14 },
          display: { sm: "flex", gap: 40 },
          alignItems: { sm: "center" },
        }}
        
      >
        <Box sx={{ width: { sm: "50%" }, py: { sm: 8 } }} >
          <Typography variant="h6">Window Tint</Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: { sm: "50px" },
              lineHeight: { sm: "60px" },
              mb: { sm: 2 },
            }}
          >
            Find The Right <br />{" "}
            <span style={{ color: "red" }}>Tint For You</span>
          </Typography>
          <Typography variant="body1" mt={{ md: 2 }} mb={4}>
            Chose from our entry level Carbon Dyed film to our best heat rejecting Film LLUmar IRX.
          </Typography>
          <Link href="tel:+4086034786">
            <Button variant="contained" size="large">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 482 483"
                fill="none"
              >
                <path
                  d="M98.339 320.8C145.939 377.7 203.239 422.5 268.639 454.2C293.539 466 326.839 480 363.939 482.4C366.239 482.5 368.439 482.6 370.739 482.6C395.639 482.6 415.639 474 431.939 456.3C432.039 456.2 432.239 456 432.339 455.8C438.139 448.8 444.739 442.5 451.639 435.8C456.339 431.3 461.139 426.6 465.739 421.8C487.039 399.6 487.039 371.4 465.539 349.9L405.439 289.8C395.239 279.2 383.039 273.6 370.239 273.6C357.439 273.6 345.139 279.2 334.639 289.7L298.839 325.5C295.539 323.6 292.139 321.9 288.939 320.3C284.939 318.3 281.239 316.4 277.939 314.3C245.339 293.6 215.739 266.6 187.439 231.9C173.139 213.8 163.539 198.6 156.839 183.1C166.239 174.6 175.039 165.7 183.539 157C186.539 153.9 189.639 150.8 192.739 147.7C203.539 136.9 209.339 124.4 209.339 111.7C209.339 99 203.639 86.5 192.739 75.7L162.939 45.9C159.439 42.4 156.139 39 152.739 35.5C146.139 28.7 139.239 21.7 132.439 15.4C122.139 5.3 110.039 0 97.239 0C84.539 0 72.339 5.3 61.639 15.5L24.239 52.9C10.639 66.5 2.93901 83 1.33901 102.1C-0.560988 126 3.83901 151.4 15.239 182.1C32.739 229.6 59.139 273.7 98.339 320.8ZM25.739 104.2C26.939 90.9 32.039 79.8 41.639 70.2L78.839 33C84.639 27.4 91.039 24.5 97.239 24.5C103.339 24.5 109.539 27.4 115.239 33.2C121.939 39.4 128.239 45.9 135.039 52.8C138.439 56.3 141.939 59.8 145.439 63.4L175.239 93.2C181.439 99.4 184.639 105.7 184.639 111.9C184.639 118.1 181.439 124.4 175.239 130.6C172.139 133.7 169.039 136.9 165.939 140C156.639 149.4 147.939 158.3 138.339 166.8C138.139 167 138.039 167.1 137.839 167.3C129.539 175.6 130.839 183.5 132.839 189.5C132.939 189.8 133.039 190 133.139 190.3C140.839 208.8 151.539 226.4 168.239 247.4C198.239 284.4 229.839 313.1 264.639 335.2C268.939 338 273.539 340.2 277.839 342.4C281.839 344.4 285.539 346.3 288.839 348.4C289.239 348.6 289.539 348.8 289.939 349C293.239 350.7 296.439 351.5 299.639 351.5C307.639 351.5 312.839 346.4 314.539 344.7L351.939 307.3C357.739 301.5 364.039 298.4 370.239 298.4C377.839 298.4 384.039 303.1 387.939 307.3L448.239 367.5C460.239 379.5 460.139 392.5 447.939 405.2C443.739 409.7 439.339 414 434.639 418.5C427.639 425.3 420.339 432.3 413.739 440.2C402.239 452.6 388.539 458.4 370.839 458.4C369.139 458.4 367.339 458.3 365.639 458.2C332.839 456.1 302.339 443.3 279.439 432.4C217.239 402.3 162.639 359.6 117.339 305.4C80.039 260.5 54.939 218.7 38.339 173.9C28.039 146.4 24.139 124.3 25.739 104.2Z"
                  fill="currentColor"
                ></path>
              </svg>
              {"  "}
              &nbsp; (408)603-4786
            </Button>
          </Link>
        </Box>
        <Box sx={{ position: "relative", width: { sm: "100%" },
              height: { xs: "30vh", sm: "45vh" },}}>
          <Box
            sx={{
              width: { sm: "100%" },
              height: { xs: "30vh", sm: "45vh" },
              mt: { xs: 3, md: 0 },
              backgroundImage: `url(https://s3-alpha-sig.figma.com/img/73d1/b59c/27afd861216d11cc1a33a4b3085a84a9?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EZbvIl8emTv~q1qOzABhqMcuc7ny0YwqC-hgzudkZeaFa5PhZ1qqPUuRza97ZzCmfeZEw~18e4E5HeGbToX0UtY000e9wyXsDOKuDiwOQpYMNOGLaL5HpQW8gKzKiN8dHtlA1x9~Sn96t3XBvx1xFQZ2sEl5w6LdJPkSLxPPh2Da9~IyyvPvERcKtYXSPlEgNMm71n1KVuyoUh3a90SEFAucLF-ZShapW8lp09RlrOqz6iMwiYkMD4RmZFQLkPoJ~Gi1WByN90uVpRuK7aQBC5lc74dsAHipG72KkDGzkqG09dJf5VICpldEweGDqYKJ~iSxRBRjjQPLzb~vFs~Qgg__)`,
              backgroundSize: "cover",
              position: "relative",
              // bgcolor: "yellow",
            }}
            zIndex="99"
          >
          </Box>
          <Box sx={{
            position: "absolute",
            top: "-20%",
            right: "5%",
            display: "flex",
          }}
            zIndex= "2"
          >
            <Box sx={{ width: "5vw", height: "40vh", bgcolor: "#5F5F5F", borderRadius: 1, position: "relative" }}>
              <Typography variant="subtitle1" sx={{p:1,lineHeight:1.2}} >
              Dark <br/> VLT5 <br/> -3
              </Typography>
            </Box>
            <Box sx={{ width: "5vw", height: "40vh", bgcolor: "#8B8B8B", borderRadius: 1, position: "relative" }}>
            <Typography variant="subtitle1" sx={{p:1,lineHeight:1.2}} >
            Medium <br/> VLT35 <br/> -65
              </Typography>
            </Box>
            <Box sx={{ width: "5vw", height: "40vh", bgcolor: "#B1B1B1", borderRadius: 1, position: "relative" }}>
            <Typography variant="subtitle1" sx={{p:1,lineHeight:1.2}} >
            Light <br/> VLT65 <br/> -95
              </Typography>
            </Box>
            <Box sx={{ width: "5vw", height: "40vh", bgcolor: "#E5E5E5", borderRadius: 1, position: "relative" }}>
            <Typography variant="subtitle1" sx={{p:1,lineHeight:1.2}} >
            Clear <br/> VLT95-100
              </Typography>
            </Box>  
          </Box>
        </Box>
      </Box>
      <Crousel images={slideImages}/>
      {/* <Marque /> */}
      <Box
        sx={{
          display: { md: "flex", gap: 40 },
          alignItems: "center",
          p: { xs: 2, md: 8 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%" },
            height: { xs: "30vh", sm: "50vh" },
            mt: { xs: 3, md: 0 },
            backgroundImage: `url(https://s3-alpha-sig.figma.com/img/aed8/cafa/34606ffd7724209c50a4d47cc942366f?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPDmDMyXXrGh2ZonRAdko56ach5qFH2dTgS4pA-YvlQaPS~jeZ9dE2BRqahLofYoNUOVtuvnsmLkHpIeC0AKmlmsfQDdYW1ehelcYHxcyOJSomHM2qyxLocjyMHFI27DJYOAcAvHfTV34Y-BnElJSKEYv-yxZNrsnxXRA8nc-BB8toBkFWsbKQosogiQN9TZkS22gnstickB34h145tMVq6-kcy~NYEOe-euLcFTRzl-y5I0LvNv9PN8xxkfVlwiVxA2Y7IiS0P9Hnw9ujQMJoAVuXGt8PZYR~PAj9QOz67jjvGpww1worXIUPkro1v6oBLTSux1SffYskyWXb9m~g__)`,
            backgroundSize: "cover",
          }}
        ></Box>
        <Box sx={{ width: { sm: "50%" }, py: { sm: 8 } }}>
          <Typography variant="h6">Paint Protection Film</Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: { sm: "50px" },
              lineHeight: { sm: "60px" },
              mb: { sm: 2 },
            }}
          >
            PPF Installation <br />{" "}
            <span style={{ color: "red" }}>Experts</span>
          </Typography>
          <Typography variant="body1" mt={{ md: 2 }} mb={3} >
            This transparent protective film covers any painted surface of your vehicle's exterior, reducing the risk of paint damage, preventing most rock chips and scratches, door dings and dents won't scratch the paint and swirls on dark cars are a thing of the past thanks to self-healing technology.
          </Typography>
          <Link href="tel:+4086034786">
            <Button variant="contained" size="large">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 482 483"
                fill="none"
              >
                <path
                  d="M98.339 320.8C145.939 377.7 203.239 422.5 268.639 454.2C293.539 466 326.839 480 363.939 482.4C366.239 482.5 368.439 482.6 370.739 482.6C395.639 482.6 415.639 474 431.939 456.3C432.039 456.2 432.239 456 432.339 455.8C438.139 448.8 444.739 442.5 451.639 435.8C456.339 431.3 461.139 426.6 465.739 421.8C487.039 399.6 487.039 371.4 465.539 349.9L405.439 289.8C395.239 279.2 383.039 273.6 370.239 273.6C357.439 273.6 345.139 279.2 334.639 289.7L298.839 325.5C295.539 323.6 292.139 321.9 288.939 320.3C284.939 318.3 281.239 316.4 277.939 314.3C245.339 293.6 215.739 266.6 187.439 231.9C173.139 213.8 163.539 198.6 156.839 183.1C166.239 174.6 175.039 165.7 183.539 157C186.539 153.9 189.639 150.8 192.739 147.7C203.539 136.9 209.339 124.4 209.339 111.7C209.339 99 203.639 86.5 192.739 75.7L162.939 45.9C159.439 42.4 156.139 39 152.739 35.5C146.139 28.7 139.239 21.7 132.439 15.4C122.139 5.3 110.039 0 97.239 0C84.539 0 72.339 5.3 61.639 15.5L24.239 52.9C10.639 66.5 2.93901 83 1.33901 102.1C-0.560988 126 3.83901 151.4 15.239 182.1C32.739 229.6 59.139 273.7 98.339 320.8ZM25.739 104.2C26.939 90.9 32.039 79.8 41.639 70.2L78.839 33C84.639 27.4 91.039 24.5 97.239 24.5C103.339 24.5 109.539 27.4 115.239 33.2C121.939 39.4 128.239 45.9 135.039 52.8C138.439 56.3 141.939 59.8 145.439 63.4L175.239 93.2C181.439 99.4 184.639 105.7 184.639 111.9C184.639 118.1 181.439 124.4 175.239 130.6C172.139 133.7 169.039 136.9 165.939 140C156.639 149.4 147.939 158.3 138.339 166.8C138.139 167 138.039 167.1 137.839 167.3C129.539 175.6 130.839 183.5 132.839 189.5C132.939 189.8 133.039 190 133.139 190.3C140.839 208.8 151.539 226.4 168.239 247.4C198.239 284.4 229.839 313.1 264.639 335.2C268.939 338 273.539 340.2 277.839 342.4C281.839 344.4 285.539 346.3 288.839 348.4C289.239 348.6 289.539 348.8 289.939 349C293.239 350.7 296.439 351.5 299.639 351.5C307.639 351.5 312.839 346.4 314.539 344.7L351.939 307.3C357.739 301.5 364.039 298.4 370.239 298.4C377.839 298.4 384.039 303.1 387.939 307.3L448.239 367.5C460.239 379.5 460.139 392.5 447.939 405.2C443.739 409.7 439.339 414 434.639 418.5C427.639 425.3 420.339 432.3 413.739 440.2C402.239 452.6 388.539 458.4 370.839 458.4C369.139 458.4 367.339 458.3 365.639 458.2C332.839 456.1 302.339 443.3 279.439 432.4C217.239 402.3 162.639 359.6 117.339 305.4C80.039 260.5 54.939 218.7 38.339 173.9C28.039 146.4 24.139 124.3 25.739 104.2Z"
                  fill="currentColor"
                ></path>
              </svg>
              {"  "}
              &nbsp; (408)603-4786
            </Button>
          </Link>
        </Box>
      </Box>

      {/* our tint start  */}
      <Crousel images={slideImages}/>
      {/* our tint end */}

      <Box
        sx={{
          position: "relative",
          px: { xs: 2, sm: 18 },
          display: { sm: "flex", gap: 40 },
          alignItems: { sm: "center" },
          bgcolor: "#fff",
          // paddingTop: { sm: "20px" },
        }}
      >
        <Box sx={{ width: { sm: "50%" }, py: { sm: 8 } }}>
          <Typography variant="h6">Window Tint</Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: { sm: "50px" },
              lineHeight: { sm: "60px" },
              mb: { sm: 1 },
            }}
            color={"#000"}
            fontWeight={700}
          >
            <span style={{fontSize:"28px",lineHeight:"2vh",marginLeft:"10px",fontWeight:200}}>Vechile Wraps</span> <br />{" "}
            <span >Best Car <span style={{ color: "red" }}>Wraps</span></span>
          </Typography>
          <Typography
            variant="body1"
            mt={{ md: 1 }}
            mb={4}
            color={"#000"}
            fontWeight={500}
            width="70%"
          >
            Change the color of your car by getting a car wrap, this can be any size, color, or finish, such as gloss, matte, pearlescent, or transparent.
          </Typography>
          <Link href="tel:+4086034786" >
            <Button variant="contained" size="large">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 482 483"
                fill="none"
                
              >
                <path
                  d="M98.339 320.8C145.939 377.7 203.239 422.5 268.639 454.2C293.539 466 326.839 480 363.939 482.4C366.239 482.5 368.439 482.6 370.739 482.6C395.639 482.6 415.639 474 431.939 456.3C432.039 456.2 432.239 456 432.339 455.8C438.139 448.8 444.739 442.5 451.639 435.8C456.339 431.3 461.139 426.6 465.739 421.8C487.039 399.6 487.039 371.4 465.539 349.9L405.439 289.8C395.239 279.2 383.039 273.6 370.239 273.6C357.439 273.6 345.139 279.2 334.639 289.7L298.839 325.5C295.539 323.6 292.139 321.9 288.939 320.3C284.939 318.3 281.239 316.4 277.939 314.3C245.339 293.6 215.739 266.6 187.439 231.9C173.139 213.8 163.539 198.6 156.839 183.1C166.239 174.6 175.039 165.7 183.539 157C186.539 153.9 189.639 150.8 192.739 147.7C203.539 136.9 209.339 124.4 209.339 111.7C209.339 99 203.639 86.5 192.739 75.7L162.939 45.9C159.439 42.4 156.139 39 152.739 35.5C146.139 28.7 139.239 21.7 132.439 15.4C122.139 5.3 110.039 0 97.239 0C84.539 0 72.339 5.3 61.639 15.5L24.239 52.9C10.639 66.5 2.93901 83 1.33901 102.1C-0.560988 126 3.83901 151.4 15.239 182.1C32.739 229.6 59.139 273.7 98.339 320.8ZM25.739 104.2C26.939 90.9 32.039 79.8 41.639 70.2L78.839 33C84.639 27.4 91.039 24.5 97.239 24.5C103.339 24.5 109.539 27.4 115.239 33.2C121.939 39.4 128.239 45.9 135.039 52.8C138.439 56.3 141.939 59.8 145.439 63.4L175.239 93.2C181.439 99.4 184.639 105.7 184.639 111.9C184.639 118.1 181.439 124.4 175.239 130.6C172.139 133.7 169.039 136.9 165.939 140C156.639 149.4 147.939 158.3 138.339 166.8C138.139 167 138.039 167.1 137.839 167.3C129.539 175.6 130.839 183.5 132.839 189.5C132.939 189.8 133.039 190 133.139 190.3C140.839 208.8 151.539 226.4 168.239 247.4C198.239 284.4 229.839 313.1 264.639 335.2C268.939 338 273.539 340.2 277.839 342.4C281.839 344.4 285.539 346.3 288.839 348.4C289.239 348.6 289.539 348.8 289.939 349C293.239 350.7 296.439 351.5 299.639 351.5C307.639 351.5 312.839 346.4 314.539 344.7L351.939 307.3C357.739 301.5 364.039 298.4 370.239 298.4C377.839 298.4 384.039 303.1 387.939 307.3L448.239 367.5C460.239 379.5 460.139 392.5 447.939 405.2C443.739 409.7 439.339 414 434.639 418.5C427.639 425.3 420.339 432.3 413.739 440.2C402.239 452.6 388.539 458.4 370.839 458.4C369.139 458.4 367.339 458.3 365.639 458.2C332.839 456.1 302.339 443.3 279.439 432.4C217.239 402.3 162.639 359.6 117.339 305.4C80.039 260.5 54.939 218.7 38.339 173.9C28.039 146.4 24.139 124.3 25.739 104.2Z"
                  fill="currentColor"
                ></path>
              </svg>
              {"  "}
              &nbsp; (408)603-4786
            </Button>
          </Link>
        </Box>
        <Box
          sx={{
            width: { sm: "55%" },
            height: { xs: "30vh", sm: "38vh" },
            mt: { xs: 3, md: 0 },
            px: { md: 2 },
            backgroundImage: `url(https://s3-alpha-sig.figma.com/img/b079/1109/e0a0ac1a77c04dd6d770629f0ad94e75?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dTnlNKZutESYiCM~4KacegkNmhLFY3gqIf32JE2mzys2RYMypT9RA~SXeH440xP~XBKaAkjTGoOk8pL2F-TKHdsmF5MUF-xvtui91QX2mdNR5~HejbYSPIh6s0iBKIaBo5ur6LxW1y0tV0dKUYRLSh-bwbGKHtKRWLymeadkuQf-96hnpycKYdNP3NNyMJ3QEQWYqk0WOzNY30TaMG3QwFM77BxXhCzLQKoAdQlDziF80oaYKHO6o1RTKQBoHRhtW7J7thl8QEXnartE3NUkcKzFlsvQNl2UcO~c4-otU1iJFQf0zT7hySe47jnQWFMizYVKdVoyrB6Fdx0GN4ccrg__)`,
            backgroundSize: "cover",
          }}
        ></Box>
      </Box>

      {/* Why Choosing start */}
      <Box
        sx={{
          position: "relative",
          py: { xs: 2, sm: 8 },
          px: { xs: 2, sm: 15 },
          display: { sm: "flex", gap: 40 },
          alignItems: { sm: "center" },
          justifyContent: { sm: "space-between" },
        }}
        
      >
        <Box sx={{ width: { sm: "50%" }, py: { sm: 8 } }} >
          <Typography
            variant="h4"
            sx={{
              fontSize: { sm: "50px" },
              lineHeight: { sm: "60px" },
              mb: { sm: 2 },
              fontWeight: "bold",
            }}
          >
            Why Choosing <br />{" "}
            <span style={{ color: "red",fontWeight: "bold" }}>Tint & Wrap</span>
          </Typography>
          <Typography variant="body1" mt={{ md: 2 }} mb={4}>
          Premium quality work for customer satisfaction is our top <br/> priority here at premium tint and wrap.
          </Typography>
          <Link href="tel:+(408)603-4786">
            <Button variant="contained" size="large">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 482 483"
                fill="none"
              >
                <path
                  d="M98.339 320.8C145.939 377.7 203.239 422.5 268.639 454.2C293.539 466 326.839 480 363.939 482.4C366.239 482.5 368.439 482.6 370.739 482.6C395.639 482.6 415.639 474 431.939 456.3C432.039 456.2 432.239 456 432.339 455.8C438.139 448.8 444.739 442.5 451.639 435.8C456.339 431.3 461.139 426.6 465.739 421.8C487.039 399.6 487.039 371.4 465.539 349.9L405.439 289.8C395.239 279.2 383.039 273.6 370.239 273.6C357.439 273.6 345.139 279.2 334.639 289.7L298.839 325.5C295.539 323.6 292.139 321.9 288.939 320.3C284.939 318.3 281.239 316.4 277.939 314.3C245.339 293.6 215.739 266.6 187.439 231.9C173.139 213.8 163.539 198.6 156.839 183.1C166.239 174.6 175.039 165.7 183.539 157C186.539 153.9 189.639 150.8 192.739 147.7C203.539 136.9 209.339 124.4 209.339 111.7C209.339 99 203.639 86.5 192.739 75.7L162.939 45.9C159.439 42.4 156.139 39 152.739 35.5C146.139 28.7 139.239 21.7 132.439 15.4C122.139 5.3 110.039 0 97.239 0C84.539 0 72.339 5.3 61.639 15.5L24.239 52.9C10.639 66.5 2.93901 83 1.33901 102.1C-0.560988 126 3.83901 151.4 15.239 182.1C32.739 229.6 59.139 273.7 98.339 320.8ZM25.739 104.2C26.939 90.9 32.039 79.8 41.639 70.2L78.839 33C84.639 27.4 91.039 24.5 97.239 24.5C103.339 24.5 109.539 27.4 115.239 33.2C121.939 39.4 128.239 45.9 135.039 52.8C138.439 56.3 141.939 59.8 145.439 63.4L175.239 93.2C181.439 99.4 184.639 105.7 184.639 111.9C184.639 118.1 181.439 124.4 175.239 130.6C172.139 133.7 169.039 136.9 165.939 140C156.639 149.4 147.939 158.3 138.339 166.8C138.139 167 138.039 167.1 137.839 167.3C129.539 175.6 130.839 183.5 132.839 189.5C132.939 189.8 133.039 190 133.139 190.3C140.839 208.8 151.539 226.4 168.239 247.4C198.239 284.4 229.839 313.1 264.639 335.2C268.939 338 273.539 340.2 277.839 342.4C281.839 344.4 285.539 346.3 288.839 348.4C289.239 348.6 289.539 348.8 289.939 349C293.239 350.7 296.439 351.5 299.639 351.5C307.639 351.5 312.839 346.4 314.539 344.7L351.939 307.3C357.739 301.5 364.039 298.4 370.239 298.4C377.839 298.4 384.039 303.1 387.939 307.3L448.239 367.5C460.239 379.5 460.139 392.5 447.939 405.2C443.739 409.7 439.339 414 434.639 418.5C427.639 425.3 420.339 432.3 413.739 440.2C402.239 452.6 388.539 458.4 370.839 458.4C369.139 458.4 367.339 458.3 365.639 458.2C332.839 456.1 302.339 443.3 279.439 432.4C217.239 402.3 162.639 359.6 117.339 305.4C80.039 260.5 54.939 218.7 38.339 173.9C28.039 146.4 24.139 124.3 25.739 104.2Z"
                  fill="currentColor"
                ></path>
              </svg>
              {"  "}
              &nbsp; (408)603-4786
            </Button>
          </Link>
        </Box>
        <Box sx={{ width:"25vw",height:"60vh",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",gap:"3.5vh" }}>

          <Box sx={{width:"100%",height:"32%",bgcolor:"#D9D9D9",borderRadius:"10px",display:"flex",justifyContent:"space-between",alignItems:"start",px:"10px",py:"7px"}}>
          <GradeIcon sx={{ color: 'black', fontSize: 40 }}/>
          <Box sx={{ml:"1.5vw"}}>
            <Typography variant="h2" sx={{fontSize:"25px",fontWeight:"semibold",color:"black",lineHeight:"4vh"}}>
            Expert Precision
            </Typography>
            <Typography variant="h3" sx={{fontSize:"12px",lineHeight:"2vh",color:"black",width:"90%",fontWeight:"semibold "}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui cupiditate accusantium quam id reprehenderit in quos nostrum maiores labore suscipit. Alias commodi sequi unde similique iure modi laboriosam tenetur voluptatum aspernatur, qui odit delectus vel!
            </Typography>
          </Box>
          </Box>

          <Box sx={{width:"100%",height:"32%",bgcolor:"#D9D9D9",borderRadius:"10px",display:"flex",justifyContent:"space-between",alignItems:"start",px:"10px",py:"7px"}}>
          <GradeIcon sx={{ color: 'black', fontSize: 40 }}/>
          <Box sx={{ml:"1.5vw"}}>
            <Typography variant="h2" sx={{fontSize:"25px",fontWeight:"semibold",color:"black",lineHeight:"4vh"}}>
            Premium Quality
            </Typography>
            <Typography variant="h3" sx={{fontSize:"12px",lineHeight:"2vh",color:"black",width:"90%",fontWeight:"semibold "}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui cupiditate accusantium quam id reprehenderit in quos nostrum maiores labore suscipit. Alias commodi sequi unde similique iure modi laboriosam tenetur voluptatum aspernatur, qui odit delectus vel!
            </Typography>
          </Box>
          </Box>

          <Box sx={{width:"100%",height:"32%",bgcolor:"#D9D9D9",borderRadius:"10px",display:"flex",justifyContent:"space-between",alignItems:"start",px:"10px",py:"7px"}}>
          <GradeIcon sx={{ color: 'black', fontSize: 40 }}/>
          <Box sx={{ml:"1.5vw"}}>
            <Typography variant="h2" sx={{fontSize:"25px",fontWeight:"semibold",color:"black",lineHeight:"4vh"}}>
            Personalized Service
            </Typography>
            <Typography variant="h3" sx={{fontSize:"12px",lineHeight:"2vh",color:"black",width:"90%",fontWeight:"semibold "}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui cupiditate accusantium quam id reprehenderit in quos nostrum maiores labore suscipit. Alias commodi sequi unde similique iure modi laboriosam tenetur voluptatum aspernatur, qui odit delectus vel!
            </Typography>
          </Box>
          </Box>

        </Box>
      </Box>
      
      <Crousel images={slideImages}/>
      {/* Why Choosing end */}

      {/* <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          mt: 8,
        }}
      >
        <Box
          sx={{
            height: { xs: "25vh", sm: "50vh" },
            width: { xs: "100%", sm: "50%" },
            bgcolor: "#4444440e",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" mt={2} mb={3} align="center">
            WANT TO WRAP YOUR CAR?
          </Typography>
          <Button variant="outlined" color="inherit" size="large">
            BOOK NOW
          </Button>
        </Box>
        <Box
          sx={{
            height: { xs: "25vh", sm: "50vh" },
            width: { xs: "100%", sm: "50%" },
            bgcolor: "#2222220e",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">CAR ROTATE</Typography>
        </Box>
      </Box> */}
      <OurLocations />
      {/* <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          backgroundImage: `url(https://ik.imagekit.io/bc3qk7dan/homepage/1.png?updatedAt=1714733908345)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <ContactUs />
      </Box> */}
      <Footer />
    </Box>
  );
}
