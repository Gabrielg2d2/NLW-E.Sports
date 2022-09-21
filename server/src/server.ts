import express from "express";

const app = express();

app.get("/games", (request, response) => {
  return response.json([]);
});

app.post("/ads", (request, response) => {
  return response.status(201).json([]);
});

app.get("/games/:id/ads", (request, response) => {
  const gameId = request.params.id;

  return response.json([{id: gameId, title: "Anuncio 1", }]);
});

app.get("/games/:id/discord", (request, response) => {
  const gameId = request.params.id;

  return response.json([{id: gameId, title: `"Discord "${gameId}`, }]);
});




app.listen(3333);
