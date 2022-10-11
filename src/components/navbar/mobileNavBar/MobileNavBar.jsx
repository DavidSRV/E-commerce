import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseSharpIcon from '@mui/icons-material/CloseSharp';import { Box } from "@mui/system";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./_MobileNavbar.scss";

export default function MobileNavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon className="close"/>
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          className="box"
          p={2}
          display="flex"
          flexDirection="row"
          justifyContent="left"
          width="250px"
          textAlign="center"
          role="presentation"
        >
          <div className="links">
            <IconButton className="button" 
            onClick={() => setIsDrawerOpen(false)}>
              <CloseSharpIcon fontWeight='bold'/>
            </IconButton>
            <Link to="/Collection">Collection</Link>
            <Link to="/Men">Men</Link>
            <Link to="/Women">Women</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
          </div>
        </Box>
      </Drawer>
    </>
  );
}
