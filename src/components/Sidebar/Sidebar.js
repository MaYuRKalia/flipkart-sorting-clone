import React, { useEffect } from "react";
import {
  Divider,
  Link,
  Paper,
  Typography,
  Input,
  InputAdornment,
  Checkbox,
  FormGroup,
  FormControlLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import styles from "./Sidebar.module.css";
import { products } from "../../product";
import SearchIcon from "@mui/icons-material/Search";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: "12px", pr: "5px", fontWeight: 700 }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  fontWeight: 600,
  // flexDirection: "row-reverse",
  padding: "4px 0",
  maxHeight: "15px",
  minHeight: "15px",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: "0 25px",
}));

const Sidebar = ({ setBrandName, setRating, setOffers, setDiscount }) => {
  const [brandChecked, setBrandChecked] = React.useState([]);
  const [ratingChecked, setRatingChecked] = React.useState([]);
  const [offersChecked, setOffersChecked] = React.useState([]);
  const [discountChecked, setDiscountChecked] = React.useState([]);

  const allBrands = products.map((product) => product.brand);
  const filteredBrands = [...new Set(allBrands)];

  const ratingLabel = ["4★ & above", "3★ & above", "2★ & above", "1★ & above"];

  const discountLabels = [
    "30% or more",
    "20% or more",
    "10% or more",
    "10% or above",
  ];

  const allCategory = products.map((product) => product.category);
  const filteredCategory = [...new Set(allCategory)];

  const allOffers = products.map((product) => product.offers);

  const filteredOffers = [...new Set(allOffers)];

  const handleChangeBrands = (brand) => {
    const currentIndex = brandChecked.indexOf(brand);
    const newChecked = [...brandChecked];

    if (currentIndex === -1) {
      newChecked.push(brand);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setBrandChecked(newChecked);

    setBrandName(newChecked);
  };

  const handleChangeRating = (rating) => {
    const currentIndex = ratingChecked.indexOf(rating);
    const newChecked = [...ratingChecked];

    if (currentIndex === -1) {
      newChecked.push(rating);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setRatingChecked(newChecked);

    setRating(newChecked);
  };

  const handleChangeOffer = (offer) => {
    const currentIndex = offersChecked.indexOf(offer);
    const newChecked = [...offersChecked];

    if (currentIndex === -1) {
      newChecked.push(offer);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setOffersChecked(newChecked);

    setOffers(newChecked);
  };

  const handleChangeDiscount = (discount) => {
    const currentIndex = discountChecked.indexOf(discount);
    const newChecked = [...discountChecked];

    if (currentIndex === -1) {
      newChecked.push(discount);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setDiscountChecked(newChecked);

    setDiscount(newChecked);
  };

  return (
    <Paper elevation={1} sx={{ borderRadius: 0 }}>
      <Typography sx={{ fontWeight: 500, p: "15px", fontSize: "18px" }}>
        Filters
      </Typography>
      <Divider fullwidth={true} />
      <Box sx={{ p: "10px 15px" }}>
        <Typography
          sx={{ fontWeight: 600, letterSpacing: "normal" }}
          variant="overline"
        >
          Categories
        </Typography>
        <Accordion>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              Gaming
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {filteredCategory.map((data, i) => (
              <Link underline="none">
                <Box key={i} className={styles.nav_items}>
                  <p>{data}</p>
                </Box>
              </Link>
            ))}
          </AccordionDetails>
        </Accordion>
      </Box>
      <Divider></Divider>
      <Box sx={{ p: "15px" }}>
        <Accordion>
          <AccordionSummary>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              BRAND
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0, fontSize: "14px" }}>
            <Input
              sx={{ lineHeight: "1.4" }}
              placeholder="Search Brand"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon fontSize="20px" />
                </InputAdornment>
              }
            ></Input>
            <List>
              {filteredBrands.map((brand) => (
                <ListItem key={brand} disablePadding sx={{ minWidth: 0 }}>
                  <ListItemButton // role={undefined}
                    onClick={() => handleChangeBrands(brand)}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox
                        size="small"
                        edge="start"
                        checked={brandChecked.indexOf(brand) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{
                          "aria-labelledby": `checkbox-list-label-${brand}`,
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      id={`checkbox-list-label-${brand}`}
                      primary={brand}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Divider />
      <Box sx={{ p: "15px" }}>
        <Accordion>
          <AccordionSummary>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              CUSTOMER RATINGS
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0, fontSize: "14px" }}>
            <List>
              {ratingLabel.map((rating) => (
                <ListItem key={rating} disablePadding sx={{ minWidth: 0 }}>
                  <ListItemButton // role={undefined}
                    onClick={() => handleChangeRating(rating)}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox
                        size="small"
                        edge="start"
                        checked={ratingChecked.indexOf(rating) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{
                          "aria-labelledby": `checkbox-list-label-${rating}`,
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      id={`checkbox-list-label-${rating}`}
                      primary={rating}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Divider />
      <Box sx={{ p: "15px" }}>
        <Accordion>
          <AccordionSummary>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              OFFERS
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0, fontSize: "14px" }}>
            <List>
              {filteredOffers.map((offer) => (
                <ListItem key={offer} disablePadding sx={{ minWidth: 0 }}>
                  <ListItemButton // role={undefined}
                    onClick={() => handleChangeOffer(offer)}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox
                        size="small"
                        edge="start"
                        checked={offersChecked.indexOf(offer) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{
                          "aria-labelledby": `checkbox-list-label-${offer}`,
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      id={`checkbox-list-label-${offer}`}
                      primary={offer}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Divider />
      <Box sx={{ p: "15px" }}>
        <Accordion>
          <AccordionSummary>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              DISCOUNTS
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0, fontSize: "14px" }}>
            <List>
              {discountLabels.map((discount) => (
                <ListItem key={discount} disablePadding sx={{ minWidth: 0 }}>
                  <ListItemButton // role={undefined}
                    onClick={() => handleChangeDiscount(discount)}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox
                        size="small"
                        edge="start"
                        checked={discountChecked.indexOf(discount) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{
                          "aria-labelledby": `checkbox-list-label-${discount}`,
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      id={`checkbox-list-label-${discount}`}
                      primary={discount}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Paper>
  );
};

export default Sidebar;
