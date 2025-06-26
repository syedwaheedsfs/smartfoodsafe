import { Container, Toolbar, Box, Button, AppBar } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { images } from "./Assets/imageAlbum";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
  },
  logoImg: {
    height: 50,
  },
  submitBtn: {
    backgroundColor: " #7b7bd3",
    color: "#ffffff",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#7b7bd3",
    },
  },
  logoutBtn: {
    marginLeft: theme.spacing(1),
    borderColor: " #7b7bd3",
    color: " #2a2a70",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "rgb(182, 182, 221)",
      borderColor: " #7b7bd3",
      color: " #2a2a70",
    },
  },
}));

export default function AppBarComponent() {
  const classes = useStyles();
  return (
    <AppBar
      position="sticky"
      color="inherit"
      style={{ border: "none", boxShadow: "none" }}
    >
      <Container maxWidth="md">
        <Toolbar className={classes.toolbar}>
          <Box>
            <img
              src={images.Logo}
              alt="FoodReady"
              className={classes.logoImg}
            />
          </Box>
          <Box>
            <Button
              variant="contained"
              size="small"
              className={classes.submitBtn}
            >
              Submit a request
            </Button>

            <Button
              variant="outlined"
              size="small"
              className={classes.logoutBtn}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
