import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Logo from "./smartfoodlogo.png";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import Folderlogo from "./folder.png";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  List,
  ListItem,
  InputBase,
  Paper,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },

  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    boxShadow: "none",
    border: "1px solid #E0E0E0",
    
  },
  cardContent: {
    flexGrow: 1,
  },

  tallCard: {
    [theme.breakpoints.up("md")]: {
      minHeight: 380,
    },
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
    backgroundColor: "#F68F3F",
    color: "#ffffff",
    borderRadius: 4,
    textTransform: "none",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "#e07839",
    },
  },

  logoutBtn: {
    marginLeft: theme.spacing(1),
    borderColor: "#F68F3F",
    color: "#F68F3F",
    borderRadius: 4,
    textTransform: "none",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "rgba(246, 143, 63, 0.08)",
      borderColor: "#e07839",
      color: "#e07839",
    },
  },

  searchBarBox: {
    border: "1px solid #ccc",
    borderRadius: 4,
    padding: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: theme.spacing(2, 0),
  },
  exploreMoreBtn: {
    color: "#F68F3F",
    textTransform: "none",
    fontWeight: 500,
    fontSize: "0.875rem",
    borderColor: "#F68F3F",
    borderRadius: "20px",
    padding: 8,
    "&:hover": {
      color: "#e07839",
      backgroundColor: "transparent",
    },
  },

  logoImg: {
    height: 50,
    width: "auto",
    paddingleft: 0,
  },

  cardContent: {
    padding: theme.spacing(2),
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
  },
  folderlogo: {
    
    width: "18%",
    height: "auto",
    marginRight: theme.spacing(1),
    objectFit: "contain",
  },
  panel: {
    "&:before": {
      display: "none",
    },
  },
  summaryRoot: {
    padding: 0,

    "&$expanded": {
      margin: 0,
    },
  },

  summaryContent: {
    // flexDirection: "row-reverse",
    // alignItems: "center",
    display: "flex",
    alignItems: "center",
    margin: 0, // kill the MUI default margin
    justifyContent: "flex-start",
  },
  expandIcon: {
    order: -1,
    // marginRight: theme.spacing(0.25),
    paddingRight: 7,
    fontSize: "1.7rem",
  },
  sectionHeading: {
    fontSize: "0.80rem",
    fontWeight: 500,
  },

  searchInput: {
    width: "100%",
    "& .MuiOutlinedInput-root": {
      height: 56,
      "& fieldset": {
        borderColor: "#ccc", // default border
      },
      "&:hover fieldset": {
        borderColor: "#ccc", // still grey on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: "#ccc", // force grey on focus
      },
    },
    "& .MuiInputBase-input": {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
}));

export const cardData = [
  {
    id: 1,
    title: "Reports",
    description: "View and Generate Reports",
    count: 4,
    showExplore: true,
    sections: [
      {
        heading: "Report Actions",
        items: [
          "View Reports",
          "Generate Reports",
          "Export CSV",
          "Download PDF",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "AI Features",
    description: "AI SOP Writer, AI Checklist Generator",
    count: 2,
    showExplore: false,
    sections: [
      {
        heading: "Report Actions",
        items: [
          "View Reports",
          "Generate Reports",
          "Export CSV",
          "Download PDF",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "HACCP / PC",
    description: "Create HACCP Plan Using Blank Plan Option,…",
    count: 2,
    showExplore: true,
    sections: [
      {
        heading: "Report Actions",
        items: [
          "View Reports",
          "Generate Reports",
          "Export CSV",
          "Download PDF",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Checklist & SOPs",
    description: "Checklists, Creating and Managing SOP",
    count: 10,
    showExplore: false,
    sections: [
      {
        heading: "Report Actions",
        items: [
          "View Reports",
          "Generate Reports",
          "Export CSV",
          "Download PDF",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Tasks & Verification",
    description: "Task Manager, Verification",
    count: 6,
    showExplore: false,
    sections: [
      {
        heading: "Report Actions",
        items: [
          "View Reports",
          "Generate Reports",
          "Export CSV",
          "Download PDF",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Environmental Monitoring",
    description: "Monitoring and Sampling",
    count: 2,
    showExplore: true,
    sections: [
      {
        heading: "Report Actions",
        items: [
          "View Reports",
          "Generate Reports",
          "Export CSV",
          "Download PDF",
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Supply Chain – Supplier Approval",
    description: "Supplier Document Upload Portal and Approval",
    count: 5,
    showExplore: true,
    sections: [
      {
        heading: "Report Actions",
        items: [
          "View Reports",
          "Generate Reports",
          "Export CSV",
          "Download PDF",
        ],
      },
      {
        heading: "Report Actions",
        items: [
          "View Reports",
          "Generate Reports",
          "Export CSV",
          "Download PDF",
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Supply Chain – Inventory Management",
    description: "Inventory Management Overview,…",
    count: 23,
    showExplore: false,
    sections: [
      {
        heading: "Report Actions",
        items: [
          "View Reports",
          "Generate Reports",
          "Export CSV",
          "Download PDF",
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Recall Management and Traceability",
    description: "Recall Management",
    count: 2,
    showExplore: true,
    sections: [
      {
        heading: "Report Actions",
        items: [
          "View Reports",
          "Generate Reports",
          "Export CSV",
          "Download PDF",
        ],
      },
    ],
  },
  {
    id: 10,
    title: "FoodReady Support",
    description:
      "Network Troubleshooting, FoodReady Support Team, Software Updates",
    count: 4,
    showExplore: false,
    sections: [
      {
        heading: "Report Actions",
        items: [
          "View Reports",
          "Generate Reports",
          "Export CSV",
          "Download PDF",
        ],
      },
    ],
  },
  {
    id: 11,
    title: "Integrations",
    description: "Zebra Scanner, Bluetooth Devices, Sandbox Mode",
    count: 1,
    showExplore: false,
    sections: [
      {
        heading: "Report Actions",
        items: [
          "View Reports",
          "Generate Reports",
          "Export CSV",
          "Download PDF",
        ],
      },
    ],
  },
  {
    id: 12,
    title: "User Settings",
    description: "Profile, Preferences, Notifications",
    count: 1,
    showExplore: true,
    sections: [
      {
        heading: "Report Actions",
        items: [
          "View Reports",
          "Generate Reports",
          "Export CSV",
          "Download PDF",
        ],
      },
    ],
  },
];


const suggestions = [
  {
    title: "Supplier Document Upload Portal",
    subtitle: "Supplier Document Upload Portal and Approval",
  },
  {
    title: "How to use FoodReady Grid",
    subtitle: "Introduction to FoodReady Grid",
  },
  {
    title: "How to Use the AI Feature to Write SOPs",
    subtitle: "AI SOP Writer",
  },
  {
    title: "How to Use a Zebra Scanner with the FoodReady App",
    subtitle: "Bluetooth Devices",
  },
];


const cards = Array.from({ length: 12 }, (_, i) => i + 1);

export default function Album() {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = React.useState("");


  const displayedCards = searchTerm
    ? cardData.filter((c) => {
        const titleMatch = c.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const headingMatch = c.sections.some((section) =>
          section.heading.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return titleMatch || headingMatch;
      })
    : cardData;


  return (
    <React.Fragment>
      <CssBaseline />
      {/* ← NEW TOP BAR */}
      <AppBar
        position="static"
        color="inherit"
        elevation={1}
        style={{ border: "none", boxShadow: "none" }}
      >
        <Container maxWidth="md">
          <Toolbar className={classes.toolbar}>
            <Box className={classes.logoWrapper}>
              <img src={Logo} alt="FoodReady" className={classes.logoImg} />
            </Box>
            <Box className={classes.buttonGroup}>
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

      {/* ——— SEARCH BAR ——— */}
      <AppBar
        position="static"
        className={classes.appBar}
        style={{
          backgroundColor: "#fff",
          color: "#000",
          boxShadow: "none",
        }}
      >
        <Container maxWidth="md">
          <Toolbar disableGutters style={{ padding: 0, width: "100%" }}>
            <TextField
              fullWidth
              variant="outlined"
              size="medium"
              placeholder="Search…"
              className={classes.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: searchTerm && (
                  <InputAdornment position="end">
                    <HighlightOffOutlinedIcon
                      style={{ cursor: "pointer" }}
                      onClick={() => setSearchTerm("")}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Toolbar>
        </Container>
      </AppBar>

      {/* grid */}
      <main style={{ backgroundColor: "#fff" }}>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={2}>
            {displayedCards.map(
              ({ id, title, count, showExplore, sections }, idx) => (
                <Grid
                  item
                  key={id}
                  xs={12}
                  sm={6}
                  md={3}
                  
                >
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Box className={classes.cardHeader}>
                        {/* icon + title */}
                        <Box display="flex" alignItems="center">
                          <img
                            src={Folderlogo}
                            alt="folderlogo"
                            className={classes.folderlogo}
                          />
                          <Typography
                            gutterBottom
                            variant="h6"
                            component="h2"
                            style={{ fontWeight: 500, fontSize: "1.1rem" }}
                          >
                            {title}
                          </Typography>
                        </Box>
                        {/* count */}
                        <Typography
                          variant="h6"
                          component="span"
                          style={{
                            color: "#F68F3F",
                            fontWeight: 500,
                            fontSize: "0.90rem",
                          }}
                        >
                          {count}
                        </Typography>
                      </Box>

                      {/* dropdown */}
                      {sections.map((section, idx) => (
                        <ExpansionPanel
                          key={idx}
                          elevation={0}
                          className={classes.panel}
                        >
                          <ExpansionPanelSummary
                            expandIcon={
                              <ExpandMoreIcon className={classes.expandIcon} />
                            }
                            classes={{
                              root: classes.summaryRoot,
                              content: classes.summaryContent,
                              expandIcon: classes.expandIcon,
                            }}
                            aria-controls={`panel-${id}-${idx}-content`}
                            id={`panel-${id}-${idx}-header`}
                          >
                            <Typography
                              style={{ fontWeight: 500 }}
                              className={classes.sectionHeading}
                            >
                              {section.heading}
                            </Typography>
                          </ExpansionPanelSummary>
                          <ExpansionPanelDetails
                            style={{
                              flexDirection: "column",
                              paddingLeft: 16,
                            }}
                          >
                            {section.items.map((item, i) => (
                              <Box
                                key={i}
                                display="flex"
                                alignItems="center"
                                mb={0.5}
                              >
                                {/* invisible icon for alignment */}
                                <ExpandMoreIcon
                                  fontSize="small"
                                  style={{ opacity: 0 }}
                                />
                                <Typography variant="body2">{item}</Typography>
                              </Box>
                            ))}
                          </ExpansionPanelDetails>
                        </ExpansionPanel>
                      ))}
                    </CardContent>

                    <CardActions>
                      <Button
                        component={Link}
                        to={`/card/${id}`}
                        size="small"
                        className={classes.exploreMoreBtn}
                        variant="outlined"
                        style={{ marginLeft: "8px" }}
                      >
                        Explore More &gt;
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
            )}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
