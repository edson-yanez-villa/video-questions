import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AspectRatio from "@mui/joy/AspectRatio";

export default function QuestionForm({ listQuestions, question, onClose }) {
  const [currentQuestion, setCurrentQuestion] = React.useState(question);

  const _handleClosed = () => {
    onClose();
  };

  const _handleClickNext = () => {
    let nextQuestion = listQuestions.find((element) => element.state == false);
    if (!nextQuestion) {
      let nextIndex = listQuestions?.indexOf(currentQuestion) + 1;
      if (nextIndex === listQuestions.length) {
        nextIndex = 0;
      }
      nextQuestion = listQuestions[nextIndex];
    }
    setCurrentQuestion(nextQuestion);
  };

  const _handleClickBack = () => {
    let backQuestion = listQuestions.find((element) => element.state == false);
    if (!backQuestion) {
      let backIndex = listQuestions?.indexOf(currentQuestion) - 1;
      if (backIndex === -1) {
        backIndex = listQuestions.length - 1;
      }
      backQuestion = listQuestions[backIndex];
    }
    setCurrentQuestion(backQuestion);
  };

  const _handleClickRec = () => {
    currentQuestion.state = true;
  };

  return (
    <Card sx={{ width: 500 }}>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button size="small" onClick={_handleClosed}>
          Volver
        </Button>
        <Button size="small" onClick={_handleClickRec}>
          Grabar
        </Button>
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
          {currentQuestion?.question}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button size="small" onClick={_handleClickBack}>
          Atras
        </Button>
        <Button size="small" onClick={_handleClickNext}>
          Siguiente
        </Button>
      </CardActions>
    </Card>
  );
}
