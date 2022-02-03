import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SimpleCart from "../SubComponents/Cart/SimpleCart";

const Header = () => {
  return (
    <AppBar color="primary" position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h5"
            // noWrap
            component="div"
            sx={{ mr: 0, display: { xs: "none", md: "flex", flexGrow: 1 } }}
          >
            Apex Electronics
          </Typography>
          <SimpleCart />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
