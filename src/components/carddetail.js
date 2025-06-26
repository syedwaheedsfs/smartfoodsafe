import { useParams, useHistory } from "react-router-dom";
import { Button, Container, Typography, Box } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { cardData } from "./api"; 

export default function CardDetail() {
  const { id } = useParams();
  const history = useHistory();
  const card = cardData.find((c) => c.id === parseInt(id, 10));

  if (!card) {
    return (
      <Container>
        <Typography variant="h5">Card not found.</Typography>
        <Button onClick={() => history.goBack()}>Go Back</Button>
      </Container>
    );
  }

  return (
    <Container style={{ marginTop: 24 }}>
      <Button startIcon={<ArrowBackIcon />} onClick={() => history.goBack()}>
        Back
      </Button>

      <Box mt={2}>
        <Typography variant="h4" gutterBottom>
          {card.title} ({card.count})
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {card.description}
        </Typography>
        {/* Render whatever details you like: sections, charts, lists */}
        {card.sections.map((section, idx) => (
          <Box key={idx} mt={2}>
            <Typography variant="h6">{section.heading}</Typography>
            <ul>
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
