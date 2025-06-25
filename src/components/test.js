import { Avatar, Box, ListItem, ListItemAvatar, ListItemText, Typography,Collapse, List} from "@material-ui/core"
import { cardData } from "./album";
import React,{ useState ,useEffect} from "react";
import { useParams } from "react-router-dom";

const Test=()=>{
     const { featureName } = useParams();  
    const [openCards,setOpenCards] = useState({});

    
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
      }, [activeCard]);
    
      const toggleCard = (id) => {
        setOpenCards((prev) => ({ ...prev, [id]: !prev[id] }));
      };
    return(
        <Box >
            <Box width="250px" height="300vh" style={{ marginTop: "10px",marginLeft: "40px"}} >
                {cardData.map((card)=>(
                    <Box key={card.id}>
                        <ListItem button onClick={() => toggleCard(card.id)} style={{borderRight: openCards[card.id] ? "3px solid #3f51b5" : "none",paddingTop: 3,paddingBottom: 3,paddingLeft: 8,paddingRight: 8,}} >
                            
                            <ListItemAvatar >
                                <Avatar src={card.image} style={{ width: 32, height: 32 }}
                                />
                            </ListItemAvatar>

                            <ListItemText
                            primary={card.title}
                            primaryTypographyProps={{
                            style: {fontSize: "14px"}}}/> 
                           
                            <Typography variant="body2" style={{color: "orange"}}>
                                {card.count}
                            </Typography>

                        </ListItem>

                        <Collapse in={openCards[card.id]} unmountOnExit timeout="auto">
                        <List disablePadding>
                            {card.sections[0].items.map((item,index)=>{
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
                    </Box>
                )

                )}
                
            </Box>
        </Box>

    )
}

export default Test;