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

// card logo 
import Smartaudit from "./assets/smartaudit.png";
import Smartenp from "./assets/smartenp.png";
import Smartlab from "./assets/smartlab.png";
import Smartspec from "./assets/smartspec.png";
import Smartcapa from "./assets/smartcapa.png";
import Smartfarm from "./assets/smartfarm.png";
import Smartrecall from "./assets/smartrecall.png";
import Smartsupplier from "./assets/smartsupplier.png";
import Smartcompliance from "./assets/smartcompliance.png";
import Smarthaccp from "./assets/smarthaccp.png";
import Smartrecord from "./assets/smartrecord.png";
import Smarttraning from "./assets/smarttraning.png";
import Smartdoc from "./assets/smartdoc.png";
import Smartaim from "./assets/smartaim.png";
import Smartregulatory from "./assets/smartregulatory.png";
import Smartvisitor from "./assets/smartvisitor.png"; 
import { useNavigate } from "react-router-dom";  

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
    backgroundColor: " #7b7bd3",
    color: "#ffffff",
    borderRadius: 4,
    textTransform: "none",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "#7b7bd3",
    },
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
        borderColor: "#ccc",
      },
      "&:hover fieldset": {
        borderColor: "#ccc",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#ccc",
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
    title: "SMART AUDIT",
    description: "Accurate, compliant audit solution.",
    count: 4,
    showExplore: true,
    sections: [
      {
        heading: "Features",
        items: [
          "Audit Ready",
          "Digital Audit Records",
          "Offline Auditing",
          "NC Management",
          "Scores and Rating",
          "Audit Scheduling",
          "Dashboard and Reporting",
          "Multi Language",
          "Improve Compliance Gaps"
        ],
      },
    ],
  },
  {
    id: 2,
    title: "SMART EMP",
    description: "Streamlined environmental monitoring processes.",
    count: 2,
    showExplore: true,
    sections: [
      {
        heading: "Features",
        items: [
          "Digital Layout and Mapping",
          "Scheduling (Planned & Random)",
          "EMP Process automation",
          "Corrective Action Management",
          "Built in FDA Listeria Guidelines",
          "Heat and Harborage Site Map",
          "Real-Time Data Analytics",
          "Workflow",
          "Notification"

        ],
      },
    ],
  },
  {
    id: 3,
    title: "SMART LAB",
    description: "Automated, precise lab operations.",
    count: 2,
    showExplore: true,
    sections: [
      {
        heading: "Features",
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
    title: "SMART SPECIFICATION",
    description: "Ensure quality with standardized specifications.",
    count: 10,
    showExplore: true,
    sections: [
      {
        heading: "Features",
        items: [
          "Digital Specifications",
          "Built-In Product Characteristics",
          "Supplier To Material Linking",
          "Nutrition Facts Labels",
          "Bill of Materials Linking",
          "Alerts and Notifications",
          "Dashboard and Reporting",
          "Global Allergen List"
        ],
      },
    ],
  },
  {
    id: 5,
    title: "SMART CAPA",
    description: "Resolve issues, ensure compliance.",
    count: 6,
    showExplore: true,
    sections: [
      {
        heading: "Features",
        items: [
          "CAPA Management",
          "Complaint Management",
          "Product Hold and Release",
          "Deviations Management",
          "Root Cause Analysis",
          "Corrective Action Management",
          "Dashboard",
          "Effectiveness Review",
          "Reporting & Trend Analysis",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "SMART FARM",
    description: "Digitized farm management for efficiency.",
    count: 2,
    showExplore: true,
    sections: [
      {
        heading: "Features",
        items: [
          "Field Mapping",
          "Crop Management",
          "End-To-End Solutions",
          "Post Reap Management",
          "Blockchain-Enabled Traceability",
          "Weather Integration",
          "Dashboard and Reporting",
          "Agronomist and Grower Portal",
          "Offline Mobile Application"
        ],
      },
    ],
  },
  {
    id: 7,
    title: "SMART RECALL",
    description: "Efficient and reliable recall management.",
    count: 5,
    showExplore: true,
    sections: [
      {
        heading:"Features",
        items: [
          "View Reports",
          "Generate Reports",
          "Export CSV",
          "Download PDF",
        ],
      }
    ],
  },
  {
    id: 8,
    title: "SMART SUPPLIER",
    description: "Enhance collaboration with supplier tools.",
    count: 23,
    showExplore: true,
    sections: [
      {
        heading:"Features",
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
    title: "SMART COMPLIANCE",
    description: "Track and maintain regulatory adherencence",
    count: 2,
    showExplore: true,
    sections: [
      {
        heading:"Features",
        items: [
          "Automate Product Release",
          "Material & Product Verification",
          "Purchasing Document Management",
          "Real Time Product Compliance",
          "Save Time and Money",
          "Manage Product Non compliance",
          "Generate Compliance Certificate",
          "Effectiveness Review",
          "Improved Communication"
        ],
      },
    ],
  },
  {
    id: 10,
    title: "SMART HACCP",
    description:
      "Simplify hazard analysis for safety.",
    count: 4,
    showExplore: true,
    sections: [
      {
        heading:"Features",
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
    title: "SMART RECORD",
    description: "Accurate and effortless data recording.",
    count: 1,
    showExplore: false,
    sections: [
      {
        heading:"Features",
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
    title: "SMART TRAINING",
    description: "Enable teams with digital learning.",
    count: 1,
    showExplore: true,
    sections: [
      {
        heading:"Features",
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
    id: 13,
    title: "SMART DOCS",
    description: "Secure, centralized document management.",
    count: 23,
    showExplore: true,
    sections: [
      {
        heading:"Features",
        items: [
          "Document Creation",
          "Document Life Cycle",
          "21 CFR Part 11 Compliant",
          "Advanced Search",
          "Global Quality & Food Safety Standards",
          "Audit Readiness",
          "Dashboard and Reporting",
          "Data Backup and Export",
          "Efficient Document Management"
        ],
      },
    ],
  },
  {
    id: 14,
    title: "SMART IAM",
    description: "Manage identity and access seamlessly.",
    count: 2,
    showExplore: true,
    sections: [
      {
        heading:"Features",
        items: [
          "User Management",
          "Role Management",
          "Access Control",
          "Multi site and Corporate Access",
          "Admin Panel",
          "CCP/PCP Automation",
          "Master Data Bulk Upload",
          "Security",
          "Custom Role"
        ],
      },
    ],
  },
  {
    id: 15,
    title: "SMART REGULATORY",
    description:
      "Streamline and simplify regulatory tasks.",
    count: 4,
    showExplore: true,
    sections: [
      {
        heading:"Features",
        items: [
            "View Reports",
          "Generate Reports",
          "Export CSV",
          "Download PDF"
        ],
      },
    ],
  },
  {
    id: 16,
    title: "SMART VISITOR",
    description: "Streamlined visitor onboarding process.",
    count: 1,
    showExplore: true,
    sections: [
      {
        heading:"Features",
        items: [
          "View Reports",
          "Generate Reports",
          "Export CSV",
          "Download PDF",
        ],
      },
    ],
  }
  
];





const cards = Array.from({ length: 16 }, (_, i) => i + 1);

const imageMap = {
  1:Smartaudit,
  2:Smartenp,
  3:Smartlab,
  4:Smartspec,
  5:Smartcapa,
  6:Smartfarm,
  7:Smartrecall,
  8:Smartsupplier,
  9:Smartcompliance,
  10:Smarthaccp,
  11:Smartrecord,
  12:Smarttraning,
  13:Smartdoc,
  14:Smartaim,
  15:Smartregulatory,
  16:Smartvisitor
}



export default function Album() {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = React.useState("");
  const navigate = useNavigate(); 

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
        position="sticky"
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
      {/* Cards */}
      <main style={{ backgroundColor: "#fff" }}>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={2}>
            {displayedCards.map(
              (
                { id, title, count, showExplore, sections, description },
                idx
              ) => (
                <Grid item key={id} xs={12} sm={3} md={3}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Box className={classes.cardHeader}>
                        {/* icon + title */}
                        <Box display="flex" alignItems="center">
                          <img
                            src={imageMap[id]}
                            alt="folderlogo"
                            className={classes.folderlogo}
                          />
                          <Typography
                            gutterBottom
                            variant="h6"
                            component="h2"
                            style={{ fontWeight: 500, fontSize: "0.8rem" }}
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
                      <Box style={{ color: "gray" }}>{description}</Box>

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
                            {section.items.map((item, i) => {
                              const slug = item.toLowerCase().replace(/\s+/g, "-");
                              return (
                                  <Box
                                    key={i}
                                    display="flex"
                                    alignItems="center"
                                    mb={0.5}
                                    style={{ cursor: "pointer" }}
                                    onClick={() => navigate(`/card/${id}/${slug}`)}      
                                    >
                                      <ExpandMoreIcon fontSize="small" style={{ opacity: 0 }} />
                                          <Typography variant="body2">{item}</Typography>
                                   </Box>
                        );
                      })}
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
