import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos';

const Appbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar>
          <div >

          <MonochromePhotosIcon />

          <Typography variant="h6" sx={{ ml: 1, flexGrow: 1 }}>
          Natural Pic
          </Typography>
          </div>

          <div className="container" align="right">
          <Button color="inherit" component={NavLink} to="/" sx={{ pt: 1 }}>
            Home
          </Button>

          <Button
            color="inherit"
            component={NavLink}
            to="/Favoritos"
            sx={{ pt: 1 }}
            >
            Favoritos
          </Button>
            </div>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Appbar;
