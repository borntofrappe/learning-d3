const main = d3.select("body").append("main");
main.append("h1").text("Tournament Tree");

const data = {
  players: ["Djokovic", "Rune"],
  brackets: [
    {
      players: ["Rune", "Auger-Aliassime"],
      brackets: [
        {
          players: ["Alcaraz", "Rune"],
        },
        {
          players: ["Tiafoe", "Auger-Aliassime"],
        },
      ],
    },
    {
      players: ["Djokovic", "Tsisipas"],
      brackets: [
        {
          players: ["Djokovic", "Musetti"],
        },
        {
          players: ["Tsisipas", "Paul"],
        },
      ],
    },
  ],
};
