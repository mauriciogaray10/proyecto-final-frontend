import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
  } from "@mui/material";
  import { Link } from "react-router-dom";
  import './ProductDetailCard.css'
  
  const ProductDetailCard = ({ elemento }) => {
    return (
      <div className="card-detail-container">
         <Card sx={{ width: 345, height: 350, backgroundColor: 'whiteSmoke' }}>
        <CardMedia
          sx={{ height: 140 }}
          image={elemento.img}
        />
        <CardContent sx={{ height: 150 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign={"center"}
          >
            {elemento.title}
          </Typography>
          <Typography variant="h6" color="text.secondary" textAlign={"center"}>
            {elemento.description}
          </Typography>
          <Typography variant="subtitle1" textAlign={"center"}>
            {elemento.price}.-
          </Typography>
        </CardContent>
        <CardActions style={{ display: "flex", justifyContent: "center" }}>
          <Link to={`/cart/addToCart`}>
            <Button
              variant="contained"
              size="large"
              sx={{ textTransform: "none" }}
            >
              Comprar
            </Button>
          </Link>
        </CardActions>
      </Card>
      </div>
      
     
    );
  };
  
  export default ProductDetailCard;
  