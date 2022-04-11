import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styles from "./Header.module.css";
import SearchBar from "./SearchBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <div>
        <AppBar className={styles.header}>
          <Toolbar>
            <div style={{ flexGrow: 1 }}>
              <Box>
                <img
                  className={styles.header_logo}
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                  alt="flipkart-logo"
                />

                <Box className={styles.header_container}>
                  <Typography className={styles.header_subtitle}>
                    Explore <span style={{ color: "#ffe500" }}>Plus</span>
                  </Typography>
                  <img
                    className={styles.header_icon}
                    src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                    alt=""
                  />
                </Box>
              </Box>
              <SearchBar />
            </div>
            <div className={styles.rightHeader}>
              <Button
                variant="contained"
                className={styles.loginButton}
                sx={{
                  backgroundColor: "#fff",
                  color: "#2874f0",
                  marginLeft: "7%",
                  fontWeight: 600,
                  textTransform: "capitalize",
                  cursor: "pointer",
                  borderRadius: 0,
                  height: 35,
                  padding: "5px 35px",
                  border: "1px solid #dbdbdb",
                  boxShadow: "none",
                }}
              >
                Login
              </Button>
              {/* <LoginButton /> */}
              <Button
                className={styles.becomeASeller}
                variant="text"
                sx={{ color: "#fff", margin: "0 30px" }}
              >
                Become a Seller
              </Button>
              <Box className={styles.menu_link}>
                <Typography className={styles.menu_more}>More</Typography>
                <ExpandMoreIcon />
              </Box>
              <ShoppingCartIcon />
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <NavBar />
    </>
  );
};

export default Header;
