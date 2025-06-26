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
import { cardData } from "./api";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const slugify = (str) =>
     (str || "")
    .toString()
    .toLowerCase()
    .replace(/^\d+\.\s*/, "")   // remove leading number-dot-space
    .replace(/\s+/g, "-")       // replace spaces with hyphens
    .trim();

const Test = () => {
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
      <Box
        position="fixed"
        style={{
          top: 90, 
          left: 180, 
          height: "calc(100vh - 90px)", 
          width: 350,
          backgroundColor: "#fff",
          overflowY: "auto", 
        }}
      >
        {cardData.map((card) => (
          <Box key={card.id}>
            <ListItem
              button
              onClick={() => toggleCard(card.id)}
              style={{
                borderRight: openCards[card.id] ? "3px solid #3f51b5" : "none",
                paddingTop: 3,
                paddingBottom: 7,
                paddingLeft: 8,
                paddingRight: 8,
              }}
            >
              <ListItemAvatar>
                <Avatar src={card.image} style={{ width: 32, height: 32 }} />
              </ListItemAvatar>

              <ListItemText
                primary={card.title}
                primaryTypographyProps={{
                  style: { fontSize: "14px" },
                }}
              />

              <Typography
                variant="body2"
                style={{ color: "#F68F3F", paddingRight: "8px" }}
              >
                {card.sections[0].items.length}
              </Typography>
            </ListItem>

            <Collapse in={openCards[card.id]} unmountOnExit timeout="auto">
              <Box bgcolor="#fff">
                <List disablePadding>
                  {card.sections[0].items.map((item, index) => {
                    const itemSlug = slugify(item);
                    const isSelected = itemSlug === featureSlug;
                    return (
                      <ListItem
                        key={index}
                        button
                        selected={isSelected}
                        style={{ paddingLeft: 32 }}
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
