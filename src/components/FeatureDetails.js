import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListItemAvatar,
  Avatar
} from "@material-ui/core";

import { cardData } from "./album"; 

const FeatureDetails = () => {
  const { featureName } = useParams();          
  const [openCards, setOpenCards] = useState({});

  // // Decode and format "audit-ready" → "Audit Ready"
  // const formattedFeature = featureName
  //   ?.split("-")
  //   .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
  //   .join(" ");

  // Find which card contains this feature
  const activeCard = cardData.find((card) =>
    card.sections[0].items.some(
      (item) =>
        item.toLowerCase().replace(/\s+/g, "-") === featureName?.toLowerCase()
    )
  );

  // On mount: open only the active card
  useEffect(() => {
    if (activeCard) {
      setOpenCards({ [activeCard.id]: true });
    }
  }, [activeCard,openCards]);

  const toggleCard = (id) => {
    setOpenCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Box display="flex" style={{border:"1px solid red"}}>
      <Box width="300px" p={1} height="300vh" style={{border:"1px solid red"}} >
        {cardData.map((card) => (
          <Box key={card.id}>
            <ListItem button onClick={() => toggleCard(card.id)} style={{borderRight: openCards[card.id] ? "3px solid #3f51b5" : "none",}}>
              <ListItemAvatar>
                 <Avatar src={card.image} />
              </ListItemAvatar>
              <ListItemText
                primary={card.title}
                primaryTypographyProps={{ style: { fontWeight: 500 } }}
              />
              <Typography variant="body2" style={{color: "orange"}}>
                {card.count}
              </Typography>
            </ListItem>

            <Collapse in={openCards[card.id]} timeout="auto" unmountOnExit>
              <List disablePadding>
                {card.sections[0].items.map((item, index) => {
                  const itemSlug = item.toLowerCase().replace(/\s+/g, "-");
                  const isSelected = itemSlug === featureName;
                  return (
                    <ListItem
                      key={index}
                      button
                      selected={isSelected}
                      style={{ paddingLeft: 32 }}
                    >
                      <ListItemText
                        primary={item}
                      />
                    </ListItem>
                  );
                })}
              </List>
            </Collapse>

            {/* <Divider /> */}
          </Box>
        ))}
      </Box>

    </Box>
  );
};

export default FeatureDetails;

 {/* Main Content */}
      {/* <Box p={3} flex={1}>
        <Typography variant="h5">Feature: {formattedFeature}</Typography>
      </Box> */}