import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient({
  log: ["query", "info", "warn"],
});

app.post("/ads", (request, response) => {
  return response.status(201).json([]);
});

app.get("/games", async (request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });

  return response.json(games);
});

app.get("/games/:id/ads", async (request, response) => {
  const gameId = request.params.id;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const adsFormatted = ads.map((ad) => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(","),
    };
  });

  return response.json(adsFormatted);
});

app.get("/games/:id/discord", async (request, response) => {
  const gameId = request.params.id;

  return response.json([{ id: gameId, title: `Discord ${gameId}` }]);
});

app.listen(3333);
