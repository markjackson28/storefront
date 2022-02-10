import { useSelector, useDispatch } from 'react-redux';
import {
  setCategory,
  selectCategory
} from '../../../Store/categorySlice';
import Products from '../Products/Product';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const drawerWidth = 240;

let Categories = () => {
  // This is selecting state from slice
  const categories = useSelector(selectCategory);
  const dispatch = useDispatch();
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box
          sx={{ p: 2, pt: 10 }}
        >
          Categories
        </Box>
        <Divider />
        <List>
          {categories && categories.categories.map((cat) => (
            <ListItem key={cat.name} button onClick={() => { dispatch(setCategory(cat)) }}>
              <ListItemText primary={cat.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar sx={{ flexGrow: 1, bgcolor: 'background.default', pt: 8 }}>
          <Typography variant="h6" noWrap component="div">
            {categories.activeCategory.name || 'All Products'}
          </Typography>
        </Toolbar>
        <Divider />
        <Typography paragraph component="div" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2 }}>
          <Products />
        </Typography>
      </Box>
    </Box>
  )
}

export default Categories;
