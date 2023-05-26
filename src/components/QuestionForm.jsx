import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import AspectRatio from "@mui/joy/AspectRatio";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function QuestionForm({ question, onClose }) {
  const [expanded, setExpanded] = React.useState(false);

  const _handleClosed = () => {
    onClose();
  };

  return (
    <Card sx={{ width: 500 }}>
      <CardActions
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button size="small" onClick={_handleClosed}>
          Volver
        </Button>
        <Button size="small">Grabar</Button>
      </CardActions>
      <CardMedia>
        <AspectRatio ratio="1">
          <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          >
            <source
              src="https://assets.codepen.io/6093409/river.mp4"
              type="video/mp4"
            />
          </video>
        </AspectRatio>
      </CardMedia>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {question?.question}
        </Typography>
      </CardContent>
      <CardActions
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button size="small">Atras</Button>
        <Button size="small">Siguiente</Button>
      </CardActions>
    </Card>
  );
}
