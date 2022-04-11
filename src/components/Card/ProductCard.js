import React from "react";
import {
  Paper,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ p: "16px", height: "100%" }} elevation={0}>
      <CardMedia
        component="img"
        sx={{ maxHeight: "140px", objectFit: "contain" }}
        image={product.img}
        alt={product.name}
      />
      <CardContent>
        <Typography sx={{ minHeight: "60px" }} variant="subtitle2">
          {product.product_name}
        </Typography>
        <Stack direction="row">
          <div className={styles.rating}>
            {product.rating} <StarIcon fontSize="10px" />
          </div>
          <div
            style={{
              paddingLeft: "8px",
              color: "#878787",
              fontSize: "14px",
              fontWeight: 500,
              marginLeft: "8px",
            }}
          >
            ({product.reviewed})
          </div>
        </Stack>
        <Stack direction="row">
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            ₹{product.price}
          </Typography>
          <span
            style={{
              fontSize: "14px",
              color: "#878787",
              textDecoration: "line-through",
              marginLeft: "8px",
              display: "inline-block",
              paddingTop: "4px",
            }}
          >
            {" "}
            ₹{product.original_price}
          </span>
          <span
            style={{
              fontSize: "13px",
              color: "#388e3c",
              fontWeight: 500,
              marginLeft: "8px",
              display: "inline-block",
              paddingTop: "4px",
            }}
          >
            {Math.floor(
              ((product.original_price - product.price) /
                product.original_price) *
                100
            )}
            % off
          </span>
        </Stack>
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: 700, color: "rgb(38, 165, 65)" }}
        >
          Bank Offer
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
