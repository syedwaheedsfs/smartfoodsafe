import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Logo from "./smartfoodlogo.png";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import dashboard from "./assets/dashboard.png"
import "@fontsource/inter/800.css";
import { Link as RouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Test from "./sidebar";
const drawerWidth = 320;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#F0F4F7",
    minHeight: "100vh",
  },

  pageWrapper: {
    display: "flex",
    width: "100%",
    paddingLeft: theme.spacing(2),
    alignItems: "flex-start", 
    marginTop: theme.mixins.toolbar.minHeight,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#fff",
    color: "#000",
  },  
  content: {
    flexGrow: 1,
    paddingTop: "24px",
    marginLeft: "390px",
    padding: "20px",
  },
  tocCard: {
    marginBottom: theme.spacing(3),
    backgroundColor: "#fafafa",
    maxWidth: 250, 
    width: "auto",
  },
  breadcrumbs: {
    marginBottom: theme.spacing(2),
  },
  nestedList: {
    paddingLeft: theme.spacing(4),
  },

  toolbar: {
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "none",
    border: "none",
  },
  toolbarContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },

  submitBtn: {
    backgroundColor: " #7b7bd3",
    color: "#ffffff",
    borderRadius: 4,
    textTransform: "none",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "#7b7bd3",
    },
    marginRight: theme.spacing(2),
  },

  logoutBtn: {
    marginLeft: theme.spacing(1),
    borderColor: " #7b7bd3",
    color: " #7b7bd3",
    borderRadius: 4,
    textTransform: "none",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "rgb(174, 174, 229)",
      borderColor: " #7b7bd3",
      color: "#7b7bd3",
    },
  },
  logoImg: {
    height: 50,
    width: "auto",
    paddingleft: 0,
  },
  dashboardlogo: {
    height: 400,
    width: "auto",
    paddingleft: 0,
  },
  toolbarbuttons: {
    marginRight: theme.spacing(10),
  },
  pageTitle: {
    fontWeight: 800,
    marginBottom: theme.spacing(4),
  },
  updateDate: {
    marginBottom: theme.spacing(4),
  },
  introHeading: {
    fontWeight: 800,
    marginTop: theme.spacing(4),
  },
}));


const formatLabel = (segment) => {
  return segment
    .replace(/-/g, " ") 
    .replace(/\b\w/g, (l) => l.toUpperCase()); 
};


export default function FileManagerPage() {
  const classes = useStyles();
  const theme = useTheme();
  
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* app bar */}
      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{ border: "none", boxShadow: "none" }}
      >
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbar}>
            <Box>
              <img src={Logo} alt="smartfoodsafe" className={classes.logoImg} />
            </Box>
            <Box className={classes.toolbarbuttons}>
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

      <Container maxWidth="lg" className={classes.pageWrapper}>
        <Test/>
        
        <main className={classes.content}>
          <div className={classes.toolbar} />

          <Breadcrumbs
            aria-label="breadcrumb"
            separator={
              <span
                style={{ color: "#7b7bd3", fontWeight: 700, margin: "0 4px" }}
              >
                &gt;
              </span>
            }
            className={classes.breadcrumbs}
          >
            <Link component={RouterLink} to="/" color="inherit">
              Home
            </Link>

            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;
              return isLast ? (
                <Typography
                  color="textPrimary"
                  key={to}
                  style={{ color: "#0096FF" }}
                >
                  {formatLabel(value)}
                </Typography>
              ) : (
                <Link component={RouterLink} color="inherit" to={to} key={to}>
                  {formatLabel(value)}
                </Link>
              );
            })}
          </Breadcrumbs>

          <Typography variant="h4" gutterBottom className={classes.pageTitle}>
            ACCESSING THE FILE MANAGER
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            paragraph
            className={classes.updateDate}
          >
            Updated on December 17, 2024
          </Typography>

          <Typography variant="h4" className={classes.introHeading}>
            Introduction
          </Typography>

          <Card className={classes.tocCard} style={{ boxShadow: "none" }}>
            <CardContent>
              <Typography color="primary" gutterBottom>
                Table Of Contents
              </Typography>
              <List disablePadding>
                <ListItem>
                  <ListItemText primary="1. Introduction" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="2. Accessing the File Manager" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="3. Searching for Files" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="3. Searching for Files" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="3. Searching for Files" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="3. Searching for Files" />
                </ListItem>
                {/* further TOC items */}
              </List>
            </CardContent>
          </Card>

          <Typography paragraph>
            File Manager is a centralized repository for managing your food
            safety documents, reports, and other pertinent guide will assist you
            in using the File Manager effectively to upload, categorize, edit,
            and manage your files.
          </Typography>

          <Typography variant="h4" gutterBottom style={{ fontWeight: 800 }}>
            Accessing the File Manager
          </Typography>

          <List>
            <ListItem>Open the “FoodReady” application.</ListItem>
            <ListItem>
              Click on the “Operation” tab in the upper left corner.
            </ListItem>
            <ListItem>Select “File Manager” from the dropdown menu.</ListItem>
          </List>

          <Box>
            <img
              src={dashboard}
              alt="dashboard"
              className={classes.dashboardlogo}
            />
          </Box>
        </main>
      </Container>
    </div>
  );
}
