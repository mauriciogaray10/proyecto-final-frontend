import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 1,
    border: `2px solid #b13636`,
    padding: '0 4px',
  },
}));

export default function Cart() {
  return (
    <IconButton aria-label="cart" style={{ marginRight:'50px'}} >
  <StyledBadge badgeContent={4} style={{ color: '#b13636'}}>
    <ShoppingCartIcon />
  </StyledBadge>
</IconButton>
  );
}