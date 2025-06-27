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
import Logo from "./Assets/smartfoodlogo.png";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import dashboard from "./Assets/dashboard.png";
import "@fontsource/inter/800.css";
import { Link as RouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Test from "./sideBar";
import { images } from "./Assets/imageAlbum";

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
    border: "none",
    boxShadow: "none",
  },
  content: {
    flexGrow: 1,
    paddingTop: "24px",
    marginLeft: "390px",
    padding: "20px",
  },
  introCard: {
    marginBottom: theme.spacing(3),
    backgroundColor: "#fafafa",
    maxWidth: 250,
    width: "auto",
    boxShadow: "none",
  },
  breadcrumbs: {
    marginBottom: theme.spacing(2),
    fontSize: "0.81rem",
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
  logo: {
    height: 50,
    width: "auto",
    paddingleft: 0,
  },
  dashboardimg: {
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
  span: {
    color: "#7b7bd3",
    fontWeight: 700,
    margin: "0 4px",
  },
  Typographylink: {
    color: "#0096FF",
    fontSize: "0.81rem",
  },
  tablecontent: {
    fontWeight: 600,
    color: "#F68F3F",
    paddingLeft: "13px",
  },
  seconheading: {
    fontWeight: 800,
  },
  pdfbtn: {
    backgroundColor: " #FFA500",
    marginBottom:"20px",
    "&:hover": {
      backgroundColor: " #FF8C00",
    },
  },
  Heading:{
    marginTop:"20px"
  },
  pdfBox:{
    border: "1px solid #000000"
  },
  youTubeLinkParent:{
  position: 'relative',
  paddingTop: '56.25%', // 16:9 aspect ratio
  height: 0,
  overflow: 'hidden',
  borderRadius: 8,
  marginBottom: 16,
  marginTop:"20px"
  },
  youTubeLink:{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 0,
    borderRadius: 2,
  }
}));

const formatLabel = (segment) => {
  return segment.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
};

export default function FileManagerPage() {
  const classes = useStyles();
  const theme = useTheme();

  const fileUrl = "https://calibre-ebook.com/downloads/demos/demo.docx";

  const location = useLocation();
  const segments = location.pathname
    .split("/")
    .filter((seg) => seg && seg.toLowerCase() !== "card");

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* app bar */}
      <AppBar position="fixed" className={classes.appBar}>
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbar}>
            <Box>
              <img src={Logo} alt="smartfoodsafe" className={classes.logo} />
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
        {/* import side bar component */}
        <Test />

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={<span className={classes.span}>&gt;</span>}
            className={classes.breadcrumbs}
          >
            {/* Home always first */}
            <Link component={RouterLink} to="/" color="inherit">
              Home
            </Link>

            {segments.map((seg, idx) => {
              const isLast = idx === segments.length - 1;

              const to =
                idx === 0
                  ? `/card/${seg}`
                  : `/card/${segments[0]}/${segments[1]}`;

              const display =
                idx === 0 ? seg : formatLabel(seg.replace(/^\d+\.?\s*/, ""));

              return isLast ? (
                <Typography
                  key={to}
                  color="textPrimary"
                  className={classes.Typographylink}
                >
                  {display}
                </Typography>
              ) : (
                <Link component={RouterLink} to={to} color="inherit" key={to}>
                  {display}
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

          <Card className={classes.introCard}>
            <CardContent>
              <Typography gutterBottom className={classes.tablecontent}>
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
              </List>
            </CardContent>
          </Card>

          <Typography paragraph>
            File Manager is a centralized repository for managing your food
            safety documents, reports, and other pertinent guide will assist you
            in using the File Manager effectively to upload, categorize, edit,
            and manage your files.
          </Typography>

          <Typography
            variant="h4"
            gutterBottom
            className={classes.seconheading}
          >
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
              className={classes.dashboardimg}
            />
          </Box>
            {/* PDF */}
          <Box>
            <Typography variant="h4" gutterBottom className={classes.Heading}>
              Accessing the PDF
            </Typography>
            <Typography paragraph gutterBottom>
              Below you’ll find a detailed summary of the document’s contents,
              including metadata extraction, page thumbnails, and download
              links.
            </Typography>
            <Button 
              className={classes.pdfbtn}
              variant="conatained"
              component="a"
              href={images.Pdf}
              download
            >
              Download Pdf
            </Button>
            <Box className={classes.pdfBox}
              component="object"
              data={images.Pdf}
              type="application/pdf"
              width="100%"
              height="500px"
            ></Box>
          </Box>
          {/* YouTube Vedio Link */}
           <Typography variant="h4" gutterBottom className={classes.Heading}>
              Accessing the YouTube Vedio
            </Typography>
            <Typography paragraph gutterBottom>
              Below you’ll find a detailed summary of the document’s contents,
              including metadata extraction, page thumbnails, and download
              links.
            </Typography>
            <Box className={classes.youTubeLinkParent} >
              <Box
              className={classes.youTubeLink}
              component="iframe"
              src="https://www.youtube.com/embed/D0UnqGm_miA?si=krm-E_1MSPWzO_Wc"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
           </Box>
          {/* Word File */}
          <Typography variant="h4" gutterBottom className={classes.Heading}>
              Accessing the word document
            </Typography>
            <Typography paragraph gutterBottom>
              Below you’ll find a detailed summary of the document’s contents,
              including metadata extraction, page thumbnails, and download
              links.
            </Typography>
          
          <Box
            component="iframe"
            src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(fileUrl)}`}
            width="100%"
            height="500px"
          />

          {/* PPT */}
          <Box>
            <Typography variant="h4" gutterBottom>
              PPT
            </Typography>

            <Typography paragraph>
              Support for PPT, this is the section for PPT
            </Typography>

            <Box
              component="object"
              data="https://docs.google.com/gview?url=https://www.adobe.com/support/ovation/ts/docs/ovation_test_show.ppt&embedded=true"
              title="PPT"
              width="100%"
              height="500px"
            />
          </Box>

          {/* EXCEL*/}
          <Box>
            <Typography variant="h4" gutterBottom>
              EXCEL
            </Typography>

            <Typography paragraph>
              Support for Excel, this is the section for excel
            </Typography>

            <Box
              component="iframe"
              src="https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?gid=0#gid=0"
              title="Excel Viewer"
              width="100%"
              height="500px"
            />
          </Box>
        </main>
      </Container>
    </div>
  );
}
