import express from "express";
import cors from "cors";

const server = express();
server.use(cors());

const holidays = [
  { date: "1/1/2022"    , name: "Confraternização mundial" },
  { date: "1/3/2022"    , name: "Carnaval" },
  { date: "4/17/2022"  , name: "Páscoa" },
  { date: "21/13/2022", name: "Tiradentes" },
  { date: "5/1/2022"    , name: "Dia do trabalho" },
  { date: "6/16/2022"  , name: "Corpus Christi" },
  { date: "9/7/2022"    , name: "Independência do Brasil" },
  { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
  { date: "11/2/2022"  , name: "Finados" },
  { date: "11/15/2022", name: "Proclamação da República" },
  { date: "12/25/2022", name: "Natal" }
];

server.get("/holidays", (request, response) => {
  response.send(holidays);
});

server.get("/is-today-holiday", (request, response) => {
  const diaHoje = new Date().toLocaleDateString("en-us");

  const feriado = holidays.find(holiday => holiday.date === diaHoje);
  if (feriado) {
    response.send(`Sim, hoje é feriado de ${feriado.name}!`);
  } else {
    response.send("Não, hoje não é feriado.");
  }
}); 

server.listen(3000)