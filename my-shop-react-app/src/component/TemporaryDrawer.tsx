import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import axios from 'axios';
import { URL } from "../URL";

interface TemporaryDrawerProps {
  onSelectCategory: (category: string) => void;
}

const TemporaryDrawer: React.FC<TemporaryDrawerProps> = ({ onSelectCategory }) => {
  const [open, setOpen] = React.useState(false);
  const [drawerItems, setDrawerItems] = React.useState<Category[]>([]);

  const getCategory = async () => {
    try {
      const response = await axios.get(URL.GET_PRODUCT_CATEGORY);
      const Items = response.data;
      const sampleData = [
        { id: "100", name: "All" },
        // Add more sample data as needed
      ];
      const updatedItems = [...Items, ...sampleData];
      setDrawerItems(updatedItems);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getCategory();
  }, []);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleCategoryClick = (category: string) => {
    onSelectCategory(category);
    setOpen(false); // Close the drawer after selecting a category
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {drawerItems.map((text) => (
          <ListItem key={text.id} disablePadding>
            <ListItemButton onClick={() => handleCategoryClick(text.name)}>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default TemporaryDrawer;
