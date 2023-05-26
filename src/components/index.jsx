import * as React from "react";
import Button from "@mui/joy/Button";
import Grid from "@mui/material/Unstable_Grid2";
import Dialog from "@mui/material/Dialog";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import CardQuestion from "./CardQuestion";
import QuestionForm from "./QuestionForm";

const listQuestions = [
  {
    _id: uuidv4(),
    question: "Cual fue tu video favorito durtanEnviarte tu infancia 1?",
    state: false,
    video: null,
  },
  {
    question: "Cual fue tu video favorito durtante tu infancia 2?",
    state: false,
    video: null,
  },
  {
    _id: uuidv4(),
    question: "Cual fue tu video favorito durtante tu infancia 3?",
    state: false,
    video: null,
  },
  {
    _id: uuidv4(),
    question: "Cual fue tu video favorito durtante tu infancia 4?",
    state: false,
    video: null,
  },
];

const QuestionList = () => {
  const [questions, setQuestions] = useState(listQuestions);
  const [open, setOpen] = useState(false);
  const [questionSelected, setQuestionSelected] = useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const _handleCloseDialog = () => {
    handleClose();
    setQuestionSelected(null);
  };

  const _handleEditQuestion = (question) => {
    setQuestionSelected(question);
    handleOpen();
  };

  const _handleUpdateQuestion = (question) => {
    setQuestions((prev) =>
      prev.map((element) => {
        if (element._id !== question._id) {
          return element;
        }
        return {
          ...element,
          ...question,
        };
      })
    );
  };

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "700",
          width: "700",
          flexDirection: "column",
        }}
        spacing={4}
      >
        <Grid>
          <h1>Video Cuestionario</h1>
        </Grid>
        <Grid container spacing={2}>
          {questions.map((question) => (
            <CardQuestion
              key={question._id}
              question={question}
              onEdit={_handleEditQuestion}
            />
          ))}
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Button disabled color="danger" onClick={function () {}} size="lg">
            Enviar
          </Button>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={_handleCloseDialog}>
        <QuestionForm
          listQuestions={questions}
          question={questionSelected}
          onClose={_handleCloseDialog}
          onUpdate={_handleUpdateQuestion}
        />
      </Dialog>
    </>
  );
};

export default QuestionList;
