import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, useLocation } from "react-router-dom";
import { Avatar } from "@mui/material";

export default function NavBar() {
  const { pathname } = useLocation();

  return (
    <Box sx={{ width: "100%", height: "48px", bgcolor: "rgba(255, 255, 220, .6)" ,}}>
      <Avatar src='src\assets\imgs\logo.png' sx={{ height: "40px", width: "20px", position: "absolute", zIndex: 1, margin: "4px", marginLeft: "10px", opacity: "1"}} variant="square" component={Link} to="/"/>    
      <Tabs value={pathname} centered>
        <Tab label="Home" component={Link} to="/" value="/" />
        <Tab label="Items" component={Link} to="/items" value="/items" />
        <Tab label="Our Story" component={Link} to="/our-story" value="/our-story" />
        <Tab label="Contact Us" component={Link} to="/contact-us" value="/contact-us" />
      </Tabs>
    </Box>
  );
}
