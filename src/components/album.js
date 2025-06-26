import React,{useState} from "react";

// Layout
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
// Text
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
// Controls
import Button from "@material-ui/core/Button";
// Cards
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// css
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
// Enhancer
import InputAdornment from "@material-ui/core/InputAdornment";
// Icon
import SearchIcon from "@material-ui/icons/Search";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";

// Media
import { images } from "./Assets/imageAlbum";
// Navigate
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { slugify } from "./sidebar";


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
    padding: theme.spacing(2),
  },
    
  toolbar: {
    padding: 0,
    display: "flex",
    justifyContent: "space-between"
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
    display: "flex",
    alignItems: "center",
    margin: 0, // kill the MUI default margin
    justifyContent: "flex-start",
  },
  expandIcon: {
    order: -1,
    paddingRight: 7,
    fontSize: "1.8rem",
  },
  sectionHeading: {
    fontSize: "0.80rem",
    fontWeight: 500,
  },

  searchInput: {
    width: "100%",
  },
}));


export const cardData = [
  {
    id: 1,
    title: "SMART AUDIT",
    description: "Accurate, compliant audit solution.",
    sections: [
      {
        heading: "Features",
        items: [
          "1. Audit Ready",
          "2. Digital Audit Records",
          "3. Offline Auditing",
          "4. NC Management",
          "5. Scores and Rating",
          "6. Audit Scheduling",
          "7. Dashboard and Reporting",
          "8. Multi Language",
          "9. Improve Compliance Gaps",
        ],
      },
    ],
    image:images.Smartaudit
  },
  {
    id: 2,
    title: "SMART EMP",
    description: "Streamlined environmental monitoring processes.",
    sections: [
      {
        heading: "Features",
        items: [
          "1. Digital Layout and Mapping",
          "2. Scheduling (Planned & Random)",
          "3. EMP Process automation",
          "4. Corrective Action Management",
          "5. Built in FDA Listeria Guidelines",
          "6. Heat and Harborage Site Map",
          "7. Real-Time Data Analytics",
          "8. Workflow",
          "9. Notification",
        ],
      },
    ],
    image:images.Smartenp
  },
  {
    id: 3,
    title: "SMART LAB",
    description: "Automated, precise lab operations.",
    sections: [
      {
        heading: "Features",
        items: [
          "1. Laboratory Management",
          "2. Customer Portal",
          "3. Quote Management",
          "4. GMP Compliant Software",
          "5. Laboratory Integration",
          "6. Invoicing",
          "7. Dashboard and Reporting",
          "8. Analysis Planning",
          "9. Lab Asset Management",
        ],
      },
    ],
    image:images.Smartlab
  },
  {
    id: 4,
    title: "SMART SPECIFICATION",
    description: "Ensure quality with standardized specifications.",
    sections: [
      {
        heading: "Features",
        items: [
          "1. Digital Specifications",
          "2. Built-In Product Characteristics",
          "3. Supplier To Material Linking",
          "4. Nutrition Facts Labels",
          "5. Bill of Materials Linking",
          "6. Alerts and Notifications",
          "7. Dashboard and Reporting",
          "8. Global Allergen List",
        ],
      },
    ],
    image:images.Smartspec
  },
  {
    id: 5,
    title: "SMART CAPA",
    description: "Resolve issues, ensure compliance.",
    sections: [
      {
        heading: "Features",
        items: [
          "1. CAPA Management",
          "2. Complaint Management",
          "3. Product Hold and Release",
          "4. Deviations Management",
          "5. Root Cause Analysis",
          "6. Corrective Action Management",
          "7. Dashboard",
          "8. Effectiveness Review",
          "9. Reporting & Trend Analysis",
        ],
      },
    ],
    image:images.Smartcapa
  },
  {
    id: 6,
    title: "SMART FARM",
    description: "Digitized farm management for efficiency.",
    sections: [
      {
        heading: "Features",
        items: [
          "1. Field Mapping",
          "2. Crop Management",
          "3. End-To-End Solutions",
          "4. Post Reap Management",
          "5. Blockchain-Enabled Traceability",
          "6. Weather Integration",
          "7. Dashboard and Reporting",
          "8. Agronomist and Grower Portal",
          "9. Offline Mobile Application",
        ],
      },
    ],
    image:images.Smartfarm
  },
  {
    id: 7,
    title: "SMART RECALL",
    description: "Efficient and reliable recall management.",
    sections: [
      {
        heading: "Features",
        items: [
          "1. Single Source of Recall Data",
          "2. Recall Alerts",
          "3. Customized Notifications",
          "4. Food Safety Trends",
          "5. Searchable Database",
          "6. Dashboard",
          "7. Recall Management",
          "8. Mock Recall",
          "9. Regulatory Compliance",
        ],
      },
    ],
    image:images.Smartrecall
  },
  {
    id: 8,
    title: "SMART SUPPLIER",
    description: "Enhance collaboration with supplier tools.",
    sections: [
      {
        heading: "Features",
        items: [
          "1. Supplier Risk Assessment",
          "2. Approval and Performance",
          "3. Supplier Engagement Portal",
          "4. Approval Scores & Ratings",
          "5. Improved Communication",
          "6. Non-Compliance Management",
          "7. Dashboard and Reporting",
          "8. Alerts and Notifications",
          "9. Cost Savings",
        ],
      },
    ],
    image:images.Smartsupplier
  },
  {
    id: 9,
    title: "SMART COMPLIANCE",
    description: "Track and maintain regulatory adherencence",
    sections: [
      {
        heading: "Features",
        items: [
          "1. Automate Product Release",
          "2. Material & Product Verification",
          "3. Purchasing Document Management",
          "4. Real Time Product Compliance",
          "5. Save Time and Money",
          "6. Manage Product Non compliance",
          "7. Generate Compliance Certificate",
          "8. Effectiveness Review",
          "9. Improved Communication",
        ],
      },
    ],
    image:images.Smartcompliance
  },
  {
    id: 10,
    title: "SMART HACCP",
    description: "Simplify hazard analysis for safety.",
    sections: [
      {
        heading: "Features",
        items: [
          "1. Digital HACCP",
          "2. Process Flow Diagrams",
          "3. End-To-End Solutions",
          "4. Hazard Database",
          "5. Smart Linking",
          "6. CCP/PCP Automation",
          "7. Dashboard and Reporting",
          "8. HACCP Reassessment",
          "9. Customized Risk Matrix",
        ],
      },
    ],
    image:images.Smarthaccp
  },
  {
    id: 11,
    title: "SMART RECORD",
    description: "Accurate and effortless data recording.",
    sections: [
      {
        heading: "Features",
        items: [
          "1. Online Form Builder",
          "2. Conditions and Validations",
          "3. User Experience",
          "4. Advanced Search",
          "5. Traceability",
          "6. Offline Record Keeping",
          "7. Voice Integration",
          "8. Bluetooth Integration",
          "9. IoT Integration",
        ],
      },
    ],
    image:images.Smartrecord
  },
  {
    id: 12,
    title: "SMART TRAINING",
    description: "Enable teams with digital learning.",
    sections: [
      {
        heading: "Features",
        items: [
          "Course Creation",
          "Self Learning",
          "Group Learning",
          "Training Skill Matrix",
          "Onboarding Training",
          "Refresher Training",
          "Dashboard and Reporting",
          "Scheduling",
          "Training Library",
        ],
      },
    ],
    image:images.Smarttraning
  },
  {
    id: 13,
    title: "SMART DOCS",
    description: "Secure, centralized document management.",
    sections: [
      {
        heading: "Features",
        items: [
          "1. Document Creation",
          "2. Document Life Cycle",
          "3. 21 CFR Part 11 Compliant",
          "4. Advanced Search",
          "5. Global Quality & Food Safety Standards",
          "6. Audit Readiness",
          "7. Dashboard and Reporting",
          "8. Data Backup and Export",
          "9. Efficient Document Management",
        ],
      },
    ],
    image:images.Smartdoc
  },
  {
    id: 14,
    title: "SMART IAM",
    description: "Manage identity and access seamlessly.",
    sections: [
      {
        heading: "Features",
        items: [
          "1. User Management",
          "2. Role Management",
          "3. Access Control",
          "4. Multi site and Corporate Access",
          "5. Admin Panel",
          "6. CCP/PCP Automation",
          "7. Master Data Bulk Upload",
          "8. Security",
          "9. Custom Role",
        ],
      },
    ],
    image:images.Smartaim
  },
  {
    id: 15,
    title: "SMART REGULATORY",
    description: "Streamline and simplify regulatory tasks.",
    sections: [
      {
        heading: "Features",
        items: [
          "1. One-Stop Solution",
          "2. Centralize Regulatory Data",
          "3. Country and Commodity Specific Requirements",
          "4. Regulatory Update",
          "5. Searchable Database",
          "6. Alerts and Notifications",
          "7. Improved Visibility",
          "8. Reduce Workload",
          "9. Risk Assessment Models",
        ],
      },
    ],
    image:images.Smartregulatory
  },
  {
    id: 16,
    title: "SMART VISITOR",
    description: "Streamlined visitor onboarding process.",
    sections: [
      {
        heading: "Features",
        items: [
          "1. Contactless Check-In",
          "2. Digital Training & Agreements",
          "3. Customized Look & Feel Design",
          "4. Photo & ID Capture",
          "5. Two-Way Communications",
          "6. Pre-Registration and Recurring Visitors",
          "7. Visitor Reports",
          "8. Employee Directory Integration",
          "9. Multilingual",
        ],
        
      },
    ],
    image:images.Smartvisitor
  },
];

export default function Album() {
  const navigate = useNavigate();
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
        position="sticky"
        color="inherit"
        style={{ border: "none", boxShadow: "none" }}
      >
        <Container maxWidth="md">
          <Toolbar className={classes.toolbar}>
            <Box>
              <img src={images.Logo} alt="FoodReady" className={classes.logoImg} />
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
      {/* ——— SEARCH BAR ——— */}
      <AppBar
        position="static"
        style={{
          backgroundColor: "#fff",
          color: "#000",
          boxShadow: "none",
        }}
      >
        <Container maxWidth="md">
           <Toolbar disableGutters>      {/*Removes the default left and right padding from the toolbar   */}
            <TextField
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
            {displayedCards.map(({ id, title, count, sections, description,image},idx) => (
                <Grid item key={id} xs={12} sm={3} md={3}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Box className={classes.cardHeader}>
                        {/* icon + title */}
                        <Box display="flex" alignItems="center" >
                          <img
                            src={image}
                            alt="folderlogo"
                            className={classes.folderlogo}
                          />
                          <Typography
                            gutterBottom
                            variant="h6"
                            component="h2"
                            style={{ fontWeight: 500, fontSize: "0.85rem" }}
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
                          {sections[0].items.length}
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
                            expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
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
                                onClick={() =>
                                  navigate(
                                    `/card/${id}/${slugify(item)}`,
                                    {
                                      state: {
                                        cardTitle: section.title,
                                        features: section.items.map(
                                          (feature) => ({
                                            name: feature, // if section.items is a list of feature names
                                            count: 1, // or your actual count if available
                                          })
                                        ),
                                      },
                                    }
                                  )
                                }
                                style={{
                                  cursor: "pointer",
                                  display: "flex",
                                  alignItems: "center",
                                }}
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
