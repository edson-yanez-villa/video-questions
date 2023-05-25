import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/joy/Button";

import { v4 as uuidv4 } from "uuid";

import CardQuestion from "./CardQuestion";

const listQuestions = [
  {
    _id: uuidv4(),
    question: "Cual fue tu video favorito durtante tu infancia?",
    state: false,
    video: null,
  },
  {
    question: "Cual fue tu video favorito durtante tu infancia?",
    state: false,
    video: null,
  },
  {
    _id: uuidv4(),
    question: "Cual fue tu video favorito durtante tu infancia?",
    state: false,
    video: null,
  },
  {
    _id: uuidv4(),
    question: "Cual fue tu video favorito durtante tu infancia?",
    state: false,
    video: null,
  },
];

const QuestionList = () => {
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
          {listQuestions.map((question) => (
            <CardQuestion key={question._id} question={question} />
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
    </>
  );
};

export default QuestionList;
