import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCart, selectCart } from '../../../Store/cartSlice';
// import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const Header = () => {
  const cart = useSelector(selectCart);
  console.log('cart', cart.cart.map(item => (
    { item }
  )))
  // const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    // console.log(event);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {cart.cart.map((item) => {
        return <MenuItem>{item}</MenuItem>;
      })}
    </Menu>
  );

  return (
    <Box sx={{ display: { justifyContent: 'flex-end' } }}>
      <IconButton
        size="large"
        edge="end"
        aria-label="cart"
        // aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <Badge badgeContent={cart.cartIconCounter} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      {renderMenu}
    </Box>
  );
};

export default Header;
