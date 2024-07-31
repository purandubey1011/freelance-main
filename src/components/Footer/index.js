import { brandLogos } from "@/configs";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "888" }}>
      <Box
        px={{sx:2 ,md:4}}
        sx={{
          display: { md: "flex" },
          justifyContent: "space-between",
          pt: 4,
        }}
      >
        <Box sx={{ width: { md: "25%" } }}>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
            }}
          >
            <img src={brandLogos.nav} alt="brand logo" height={"60px"} />
          </Box>
          <Typography variant="subtitle1" mt={1} mb={3}>
            Our experienced technicians provide quality services for your cars.
          </Typography>
        </Box>
        <Box py={1} sx={{ width: { md: "25%" } }}>
          <Typography variant="h6">OFFICE</Typography>
          <Typography variant="subtitle1" mt={1} mb={3}>
            1075 Tully Rd Space #10, San Jose, CA 95122, USA.
          </Typography>
        </Box>
        <Box sx={{ paddingRight: { md: 6 } }}>
          <Typography variant="h6">LINKS</Typography>
          <Typography variant="subtitle1" mt={1} mb={3}>
            <Link href={"/"}>Home</Link>
            <br />
            Services <br />
            About <br />
          </Typography>
        </Box>
        <Box sx={{ px: { md: 4 } }}>
          {" "}
          <Typography variant="h6">GET IN TOUCH</Typography>
          <Typography
            variant="subtitle1"
            mt={1}
            mb={3}
            display={"flex"}
            alignItems={"center"}
            gap={.5}
          >
            <InstagramIcon />
            <Link href={"https://www.instagram.com/premiumtintandwrap/"}>
              Instagram
            </Link>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ borderTop: ".1px solid #333", mx: 3, py: 1.5, mt: 3 }}>
        @2024 All rights reserved
      </Box>
    </Box>
  );
};

export default Footer;
