import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Paper,
  Typography,
  Link,
  Stack,
  Button,
  Divider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import ProductCard from "../components/Card/ProductCard";
import styles from "./HomeScreen.module.css";
import { products } from "../product";

const HomeScreen = () => {
  const [filter, setFilter] = useState("Popularity");
  const [showProducts, setShowProducts] = useState(products);
  const [brandName, setBrandName] = useState([]);
  const [rating, setRating] = useState([]);
  const [offers, setOffers] = useState([]);
  const [discount, setDiscount] = useState([]);

  const FilterNavigation = () => {
    const filterOptions = [
      "Popularity",
      "Price -- Low to High",
      "Price -- High to Low",
    ];

    const filterHandler = (e) => {
      setFilter(e.target.textContent);
      if (filter === "Popularity") {
        const sorted = showProducts.sort(
          (a, b) => Number(b.rating) - Number(a.rating)
        );
        setShowProducts(sorted);
      }
      if (filter === "Price -- Low to High") {
        setShowProducts(products);
        const sorted = showProducts
          .sort((a, b) => (Number(a.price) > Number(b.price) ? 1 : -1))
          .reverse();

        setShowProducts(sorted);
      }
      if (filter === "Price -- High to Low") {
        const sorted = showProducts.sort((a, b) =>
          Number(a.price) > Number(b.price) ? 1 : -1
        );

        setShowProducts(sorted);
      }
    };

    return (
      <Stack direction="row" spacing={2}>
        <Typography variant="subtitle2" sx={{ p: "10px", fontWeight: 600 }}>
          Sort By
        </Typography>
        {filterOptions.map((option, i) => (
          <button
            key={i}
            type="button"
            onClick={filterHandler}
            className={styles.filterButton}
          >
            {option}
          </button>
        ))}
      </Stack>
    );
  };
  useEffect(() => {
    let filteredArr = [];
    let brandFilterArr = [];
    let offersFilterArr = [];
    let discountFilterArr = [];
    if (
      brandName.length === 0 ||
      rating.length === 0 ||
      offers.length === 0 ||
      discount.length === 0
    )
      setShowProducts(products);
    if (brandName.length !== 0) {
      brandFilterArr = showProducts.filter((product) =>
        brandName.includes(product.brand)
      );
      // filteredArr = [...brandFilterArr];
    }
    // if (rating.length !== 0) {
    //   let ratingFilterArr = showProducts.filter((product) =>rating)
    // }
    if (offers.length !== 0) {
      offersFilterArr = showProducts.filter((product) =>
        offers.includes(product.offers)
      );
      // filteredArr = [...offersFilterArr];
    }
    if (discount.length !== 0) {
      discountFilterArr = showProducts.filter((product) =>
        discount.includes(product.discount)
      ); // filteredArr = [...discountFilterArr];
    }
    console.log(discount);

    filteredArr = [...brandFilterArr, ...offersFilterArr, ...discountFilterArr];
    console.log(filteredArr);
  });

  const breadcrumbs = [
    <Link
      underline="none"
      key="1"
      color="inherit"
      href="/"
      className={styles.breadcrumbs}
      // onClick={handleClick}
    >
      Home
    </Link>,
    <Link
      underline="none"
      key="2"
      color="inherit"
      href=""
      className={styles.breadcrumbs}
      // onClick={handleClick}
    >
      category_name
    </Link>,
  ];
  return (
    <Box>
      <Container
        sx={{
          margin: "0 auto",
          minWidth: "978px",
          maxWidth: "1680px",
          p: "8px",
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Sidebar
              setBrandName={setBrandName}
              brandName={brandName}
              setRating={setRating}
              rating={rating}
              setOffers={setOffers}
              offers={offers}
              setDiscount={setDiscount}
              discount={discount}
            />
          </Grid>
          <Grid item xs={10}>
            <Paper elevation={1} sx={{ borderRadius: 0, padding: "10px" }}>
              <Breadcrumbs separator="›" aria-label="breadcrumb">
                {breadcrumbs}
              </Breadcrumbs>
              <FilterNavigation />
              <Divider />
              <Grid container spacing={0}>
                {showProducts.map((product) => (
                  <Grid item xs={3}>
                    <ProductCard product={product} />
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeScreen;
