

import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { MenuList } from '../Data/Data';

const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {
          MenuList.map(menu => (
            <Card sx={{ maxWidth: "390px", display: "flex", m: 2, textAlign: "center" }} key={menu.name}>
              <CardActionArea component={Link} to={`/menu/${menu.name}`}>
                <CardMedia sx={{ minHeight: '400px' }} component={'img'} src={menu.image} alt={menu.name} />

                <CardContent>
                  <Typography variant='h5' gutterBottom component={"div"}>
                    {menu.name}
                  </Typography>
                  <Typography variant='h6'>
                    {menu.price}
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Add to Cart
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        }
      </Box>
    </Layout>
  );
}

export default Menu;
