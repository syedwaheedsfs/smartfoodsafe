import {
  Avatar,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Collapse,
  List,
} from "@material-ui/core";
import { cardData } from "./album";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  sidebarbox: {
    position: "fixed",
    top: 90,
    left: 150,
    height: "calc(100vh - 90px)",
    width: 350,
    backgroundColor: "#fff",
    overflowY: "auto",
  },
  listItems: {
    paddingTop: 3,
    paddingBottom: 7,
    paddingLeft: 8,
    paddingRight: 8,
  },
  listItemstxt: {
    fontSize: "14px",
  },
  count: {
    color: "#F68F3F",
    paddingRight: "8px",
  },
  Avatar: {
    width: 32,
    height: 32,
  },
  featuretems: {
    paddingLeft: 32,
  },
  featurebox:{
    bgcolor:"#fff",
  },
}));


export const slugify = (str) =>
     (str || "")
    .toString()
    .toLowerCase()
    .replace(/^\d+\.\s*/, "")   // remove leading number-dot-space
    .replace(/\s+/g, "-")       // replace spaces with hyphens
    .trim();

const Test = () => {
  const classes = useStyles();
  const { featureSlug } = useParams();
  const [openCards, setOpenCards] = useState({});

  // Find which card contains this feature
  const activeCard = cardData.find((card) =>
    card.sections[0].items.some((item) => {
      const itemSlug = slugify(item);
      return itemSlug === featureSlug;
    })
  )

  // On mount: open only the active card
  useEffect(() => {
    if (activeCard) {
      setOpenCards({ [activeCard.id]: true });
    } 
  }, [activeCard]);
  const toggleCard = (id) => {
    setOpenCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  return (
    <Box display="flex" height="100vh">
      <Box className={classes.sidebarbox}>
        {cardData.map((card) => (
          <Box key={card.id}>
            <ListItem
              button
              onClick={() => toggleCard(card.id)}
              style={{
                borderRight: openCards[card.id] ? "3px solid #3f51b5" : "none",
              }}
              className={classes.listItems}
            >
              <ListItemAvatar>
                <Avatar src={card.image} className={classes.Avatar} />
              </ListItemAvatar>

              <ListItemText
                primary={card.title}
                primaryTypographyProps={{}}
                className={classes.listItemstxt}
              />

              <Typography variant="body2" className={classes.count}>
                {card.sections[0].items.length}
              </Typography>
            </ListItem>

            <Collapse in={openCards[card.id]} unmountOnExit timeout="auto">
              <Box className={classes.featurebox}>
                <List disablePadding>
                  {card.sections[0].items.map((item, index) => {
                    const itemSlug = slugify(item);
                    const isSelected = itemSlug === featureSlug;
                    return (
                      <ListItem
                        key={index}
                        button
                        selected={isSelected}
                        className={classes.featuretems}
                      >
                        <ListItemText primary={item} />
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
            </Collapse>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Test;
