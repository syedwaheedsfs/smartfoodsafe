import React from "react";
// Layout
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
// Text
import Typography from "@material-ui/core/Typography";
// Controls
import Button from "@material-ui/core/Button";
// Cards
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// css
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

import Searchbar from "./searchBar";

// History
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { slugify } from "./sideBar";
import { cardData } from "./api";
import AppBarComponent from "./appBar";

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
    justifyContent: "space-between",
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

  exploreMoreBtn: {
    color: "#F68F3F",
    textTransform: "none",
    fontWeight: 500,
    fontSize: "0.875rem",
    borderColor: "#F68F3F",
    borderRadius: "20px",
    marginLeft: "8px",
    padding: 8,
    "&:hover": {
      color: "#e07839",
      backgroundColor: "transparent",
    },
  },

  logo: {
    height: 50,
  },

  cardHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
  },
  productlogo: {
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
    margin: 0,
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
  topbar: {
    border: "none",
    boxShadow: "none",
  },
  searchbar: {
    backgroundColor: "#fff",
    color: "#000",
    boxShadow: "none",
  },
  cancelbtn: {
    cursor: "pointer",
  },
  maincontent: {
    backgroundColor: "#fff",
  },
  productheading: {
    fontWeight: 500,
    fontSize: "0.85rem",
  },
  featurecount: {
    color: "#F68F3F",
    fontWeight: 500,
    fontSize: "0.90rem",
  },
  description: {
    color: "gray",
  },
  expansiondetail: {
    flexDirection: "column",
    paddingLeft: 16,
  },
  sectionitems: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  moreicon: {
    fontSize: "small",
    opacity: 0,
  },
}));

export default function Album() {
  const history = useHistory();

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
      <AppBarComponent />
      {/* search bar component call */}
      <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Cards */}
      <main className={classes.maincontent}>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={2}>
            {displayedCards.map(
              ({ id, title, sections, description, image }) => (
                <Grid item key={id} xs={12} sm={3} md={3}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Box className={classes.cardHeader}>
                        {/* icon + title */}
                        <Box display="flex" alignItems="center">
                          <img
                            src={image}
                            alt="folderlogo"
                            className={classes.productlogo}
                          />
                          <Typography
                            gutterBottom
                            variant="h6"
                            component="h2"
                            className={classes.productheading}
                          >
                            {title}
                          </Typography>
                        </Box>
                        {/* count */}
                        <Typography
                          variant="h6"
                          component="span"
                          className={classes.featurecount}
                        >
                          {sections[0].items.length}
                        </Typography>
                      </Box>
                      <Box className={classes.description}>{description}</Box>

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
                            <Typography className={classes.sectionHeading}>
                              {section.heading}
                            </Typography>
                          </ExpansionPanelSummary>
                          <ExpansionPanelDetails
                            className={classes.expansiondetail}
                          >
                            {section.items.map((item, i) => (
                              <Box
                                key={i}
                                display="flex"
                                alignItems="center"
                                mb={0.5}
                                onClick={() =>
                                  history.push(`/card/${id}/${slugify(item)}`, {
                                    cardTitle: section.title,
                                    features: section.items.map((feature) => ({
                                      name: feature,
                                      count: 1,
                                    })),
                                  })
                                }
                                className={classes.sectionitems}
                              >
                                {/* invisible icon for alignment */}
                                <ExpandMoreIcon className={classes.moreicon} />
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
