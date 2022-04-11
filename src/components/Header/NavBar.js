import { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/system";
import styles from "./NavBar.module.css";
import { Link, Paper } from "@mui/material";

const NavBar = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const userName = data.map((user, i) => user.name).splice(1, 6);

      setCategory(userName);
    };
    fetchData();
  }, []);
  console.log(category);

  return (
    <Paper className={styles.navBar} elevation={1}>
      {category.map((data, i) => (
        <Link key={i} underline="none">
          <Box className={styles.nav_items}>
            <p>{data}</p>
          </Box>
        </Link>
      ))}
    </Paper>
  );
};

export default NavBar;
