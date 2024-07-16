import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { MenuList } from '../Data/Data';

const MenuItemPage = () => {
  const { name } = useParams();
  const menuItem = MenuList.find(item => item.name === name);

  if (!menuItem) {
    return (
      <Layout>
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Typography variant="h4">Item not found</Typography>
        </Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <Card sx={{ maxWidth: 600 }}>
          <CardMedia sx={{ minHeight: '400px' }} component={'img'} src={menuItem.image} alt={menuItem.name} />
          <CardContent>
            <Typography variant='h3' gutterBottom>
              {menuItem.name}
            </Typography>
            <Typography variant='h4'>
              {menuItem.price}
            </Typography>
            <Typography variant='body1' sx={{ mt: 2 }}>
              {menuItem.description}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Layout>
  );
}

export default MenuItemPage;
