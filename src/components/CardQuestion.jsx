import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import PlayCircle from "@mui/icons-material/PlayCircle";

export default function CardQuestion({ question, onEdit }) {
  const _handleOnEdit = () => {
    onEdit(question);
  };
  return (
    <Grid xs display="flex" justifyContent="center" alignItems="center">
      <Card variant="outlined" sx={{ width: 220 }}>
        <CardOverflow>
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
          <IconButton
            disabled={!question.state}
            aria-label="Play minimal Question"
            size="md"
            variant="solid"
            color="danger"
            sx={{
              position: "absolute",
              zIndex: 2,
              borderRadius: "50%",
              right: "1rem",
              bottom: 0,
              transform: "translateY(50%)",
            }}
          >
            <PlayCircle />
          </IconButton>
        </CardOverflow>
        <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
          <Link href="#" onClick={_handleOnEdit} overlay underline="none">
            {question.question}
          </Link>
        </Typography>
      </Card>
    </Grid>
  );
}
