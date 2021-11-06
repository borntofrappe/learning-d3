const data = [
  { name: "bulbasaur", stats: [{ name: "hp", value: 45 },{ name: "attack", value: 49 },{ name: "defense", value: 49 },{ name: "special-attack", value: 65},{ name: "special-defense", value: 65 },{ name: "speed", value: 45 }]} ,
  { name: "ivysaur", stats: [{ name: "hp", value: 60 },{ name: "attack", value: 62 },{ name: "defense", value: 63 },{ name: "special-attack", value: 80 },{ name: "special-defense", value: 80 },{ name: "speed", value: 60 }]},
  { name: "venusaur", stats: [{ name: "hp", value: 80 },{ name: "attack", value: 82 },{ name: "defense", value: 83 },{ name: "special-attack", value: 100 },{ name: "special-defense", value: 100 },{ name: "speed", value: 80 }]},
  { name: "charmander", stats: [{ name: "hp", value: 39 },{ name: "attack", value: 52 },{ name: "defense", value: 43 },{ name: "special-attack", value: 60 },{ name: "special-defense", value: 50 },{ name: "speed", value: 65 }]},
  { name: "charmeleon", stats: [{ name: "hp", value: 58 },{ name: "attack", value: 64 },{ name: "defense", value: 58 },{ name: "special-attack", value: 80 },{ name: "special-defense", value: 65 },{ name: "speed", value: 80 }]},
  { name: "charizard", stats: [{ name: "hp", value: 78 },{ name: "attack", value: 84 },{ name: "defense", value: 78 },{ name: "special-attack", value: 109 },{ name: "special-defense", value: 85 },{ name: "speed", value: 100 }]},
  { name: "squirtle", stats: [{ name: "hp", value: 44 },{ name: "attack", value: 48 },{ name: "defense", value: 65 },{ name: "special-attack", value: 50 },{ name: "special-defense", value: 64 },{ name: "speed", value: 43 }]},
  { name: "wartortle", stats: [{ name: "hp", value: 59 },{ name: "attack", value: 63 },{ name: "defense", value: 80 },{ name: "special-attack", value: 65 },{ name: "special-defense", value: 80 },{ name: "speed", value: 58 }]},
  { name: "blastoise", stats: [{ name: "hp", value: 79 },{ name: "attack", value: 83 },{ name: "defense", value: 100 },{ name: "special-attack", value: 85 },{ name: "special-defense", value: 105 },{ name: "speed", value: 78 }]},
  { name: "caterpie", stats: [{ name: "hp", value: 45 },{ name: "attack", value: 30 },{ name: "defense", value: 35 },{ name: "special-attack", value: 20 },{ name: "special-defense", value: 20 },{ name: "speed", value: 45 }]},
  { name: "metapod", stats: [{ name: "hp", value: 50 },{ name: "attack", value: 20 },{ name: "defense", value: 55 },{ name: "special-attack", value: 25 },{ name: "special-defense", value: 25 },{ name: "speed", value: 30 }]},
  { name: "butterfree", stats: [{ name: "hp", value: 60 },{ name: "attack", value: 45 },{ name: "defense", value: 50 },{ name: "special-attack", value: 90 },{ name: "special-defense", value: 80 },{ name: "speed", value: 70 }]},
  { name: "weedle", stats: [{ name: "hp", value: 40 },{ name: "attack", value: 35 },{ name: "defense", value: 30 },{ name: "special-attack", value: 20 },{ name: "special-defense", value: 20 },{ name: "speed", value: 50 }]},
  { name: "kakuna", stats: [{ name: "hp", value: 45 },{ name: "attack", value: 25 },{ name: "defense", value: 50 },{ name: "special-attack", value: 25 },{ name: "special-defense", value: 25 },{ name: "speed", value: 35 }]},
  { name: "beedrill", stats: [{ name: "hp", value: 65 },{ name: "attack", value: 90 },{ name: "defense", value: 40 },{ name: "special-attack", value: 45 },{ name: "special-defense", value: 80 },{ name: "speed", value: 75 }]},
  { name: "pidgey", stats: [{ name: "hp", value: 40 },{ name: "attack", value: 45 },{ name: "defense", value: 40 },{ name: "special-attack", value: 35 },{ name: "special-defense", value: 35 },{ name: "speed", value: 56 }]},
  { name: "pidgeotto", stats: [{ name: "hp", value: 63 },{ name: "attack", value: 60 },{ name: "defense", value: 55 },{ name: "special-attack", value: 50 },{ name: "special-defense", value: 50 },{ name: "speed", value: 71 }]},
  { name: "pidgeot", stats: [{ name: "hp", value: 83 },{ name: "attack", value: 80 },{ name: "defense", value: 75 },{ name: "special-attack", value: 70 },{ name: "special-defense", value: 70 },{ name: "speed", value: 101 }]},
  { name: "rattata", stats: [{ name: "hp", value: 30 },{ name: "attack", value: 56 },{ name: "defense", value: 35 },{ name: "special-attack", value: 25 },{ name: "special-defense", value: 35 },{ name: "speed", value: 72 }]},
  { name: "raticate", stats: [{ name: "hp", value: 55 },{ name: "attack", value: 81 },{ name: "defense", value: 60 },{ name: "special-attack", value: 50 },{ name: "special-defense", value: 70 },{ name: "speed", value: 97 }]},
  { name: "spearow", stats: [{ name: "hp", value: 40 },{ name: "attack", value: 60 },{ name: "defense", value: 30 },{ name: "special-attack", value: 31 },{ name: "special-defense", value: 31 },{ name: "speed", value: 70 }]},
  { name: "fearow", stats: [{ name: "hp", value: 65 },{ name: "attack", value: 90 },{ name: "defense", value: 65 },{ name: "special-attack", value: 61 },{ name: "special-defense", value: 61 },{ name: "speed", value: 100 }]},
  { name: "ekans", stats: [{ name: "hp", value: 35 },{ name: "attack", value: 60 },{ name: "defense", value: 44 },{ name: "special-attack", value: 40 },{ name: "special-defense", value: 54 },{ name: "speed", value: 55 }]},
  { name: "arbok", stats: [{ name: "hp", value: 60 },{ name: "attack", value: 95 },{ name: "defense", value: 69 },{ name: "special-attack", value: 65 },{ name: "special-defense", value: 79 },{ name: "speed", value: 80 }]},
  { name: "pikachu", stats: [{ name: "hp", value: 35 },{ name: "attack", value: 55 },{ name: "defense", value: 40 },{ name: "special-attack", value: 50 },{ name: "special-defense", value: 50 },{ name: "speed", value: 90 }]},
  { name: "raichu", stats: [{ name: "hp", value: 60 },{ name: "attack", value: 90 },{ name: "defense", value: 55 },{ name: "special-attack", value: 90 },{ name: "special-defense", value: 80 },{ name: "speed", value: 110 }]},
  { name: "sandshrew", stats: [{ name: "hp", value: 50 },{ name: "attack", value: 75 },{ name: "defense", value: 85 },{ name: "special-attack", value: 20 },{ name: "special-defense", value: 30 },{ name: "speed", value: 40 }]},
  { name: "sandslash", stats: [{ name: "hp", value: 75 },{ name: "attack", value: 100 },{ name: "defense", value: 110 },{ name: "special-attack", value: 45 },{ name: "special-defense", value: 55 },{ name: "speed", value: 65 }]},
  { name: "nidoran-f", stats: [{ name: "hp", value: 55 },{ name: "attack", value: 47 },{ name: "defense", value: 52 },{ name: "special-attack", value: 40 },{ name: "special-defense", value: 40 },{ name: "speed", value: 41 }]},
  { name: "nidorina", stats: [{ name: "hp", value: 70 },{ name: "attack", value: 62 },{ name: "defense", value: 67 },{ name: "special-attack", value: 55 },{ name: "special-defense", value: 55 },{ name: "speed", value: 56 }]},
  { name: "nidoqueen", stats: [{ name: "hp", value: 90 },{ name: "attack", value: 92 },{ name: "defense", value: 87 },{ name: "special-attack", value: 75 },{ name: "special-defense", value: 85 },{ name: "speed", value: 76 }]},
  { name: "nidoran-m", stats: [{ name: "hp", value: 46 },{ name: "attack", value: 57 },{ name: "defense", value: 40 },{ name: "special-attack", value: 40 },{ name: "special-defense", value: 40 },{ name: "speed", value: 50 }]},
  { name: "nidorino", stats: [{ name: "hp", value: 61 },{ name: "attack", value: 72 },{ name: "defense", value: 57 },{ name: "special-attack", value: 55 },{ name: "special-defense", value: 55 },{ name: "speed", value: 65 }]},
  { name: "nidoking", stats: [{ name: "hp", value: 81 },{ name: "attack", value: 102 },{ name: "defense", value: 77 },{ name: "special-attack", value: 85 },{ name: "special-defense", value: 75 },{ name: "speed", value: 85 }]},
  { name: "clefairy", stats: [{ name: "hp", value: 70 },{ name: "attack", value: 45 },{ name: "defense", value: 48 },{ name: "special-attack", value: 60 },{ name: "special-defense", value: 65 },{ name: "speed", value: 35 }]},
  { name: "clefable", stats: [{ name: "hp", value: 95 },{ name: "attack", value: 70 },{ name: "defense", value: 73 },{ name: "special-attack", value: 95 },{ name: "special-defense", value: 90 },{ name: "speed", value: 60 }]},
  { name: "vulpix", stats: [{ name: "hp", value: 38 },{ name: "attack", value: 41 },{ name: "defense", value: 40 },{ name: "special-attack", value: 50 },{ name: "special-defense", value: 65 },{ name: "speed", value: 65 }]},
  { name: "ninetales", stats: [{ name: "hp", value: 73 },{ name: "attack", value: 76 },{ name: "defense", value: 75 },{ name: "special-attack", value: 81 },{ name: "special-defense", value: 100 },{ name: "speed", value: 100 }]},
  { name: "jigglypuff", stats: [{ name: "hp", value: 115 },{ name: "attack", value: 45 },{ name: "defense", value: 20 },{ name: "special-attack", value: 45 },{ name: "special-defense", value: 25 },{ name: "speed", value: 20 }]},
  { name: "wigglytuff", stats: [{ name: "hp", value: 140 },{ name: "attack", value: 70 },{ name: "defense", value: 45 },{ name: "special-attack", value: 85 },{ name: "special-defense", value: 50 },{ name: "speed", value: 45 }]},
  { name: "zubat", stats: [{ name: "hp", value: 40 },{ name: "attack", value: 45 },{ name: "defense", value: 35 },{ name: "special-attack", value: 30 },{ name: "special-defense", value: 40 },{ name: "speed", value: 55 }]},
  { name: "golbat", stats: [{ name: "hp", value: 75 },{ name: "attack", value: 80 },{ name: "defense", value: 70 },{ name: "special-attack", value: 65 },{ name: "special-defense", value: 75 },{ name: "speed", value: 90 }]},
  { name: "oddish", stats: [{ name: "hp", value: 45 },{ name: "attack", value: 50 },{ name: "defense", value: 55 },{ name: "special-attack", value: 75 },{ name: "special-defense", value: 65 },{ name: "speed", value: 30 }]},
  { name: "gloom", stats: [{ name: "hp", value: 60 },{ name: "attack", value: 65 },{ name: "defense", value: 70 },{ name: "special-attack", value: 85 },{ name: "special-defense", value: 75 },{ name: "speed", value: 40 }]},
  { name: "vileplume", stats: [{ name: "hp", value: 75 },{ name: "attack", value: 80 },{ name: "defense", value: 85 },{ name: "special-attack", value: 110 },{ name: "special-defense", value: 90 },{ name: "speed", value: 50 }]},
  { name: "paras", stats: [{ name: "hp", value: 35 },{ name: "attack", value: 70 },{ name: "defense", value: 55 },{ name: "special-attack", value: 45 },{ name: "special-defense", value: 55 },{ name: "speed", value: 25 }]},
  { name: "parasect", stats: [{ name: "hp", value: 60 },{ name: "attack", value: 95 },{ name: "defense", value: 80 },{ name: "special-attack", value: 60 },{ name: "special-defense", value: 80 },{ name: "speed", value: 30 }]},
  { name: "venonat", stats: [{ name: "hp", value: 60 },{ name: "attack", value: 55 },{ name: "defense", value: 50 },{ name: "special-attack", value: 40 },{ name: "special-defense", value: 55 },{ name: "speed", value: 45 }]},
  { name: "venomoth", stats: [{ name: "hp", value: 70 },{ name: "attack", value: 65 },{ name: "defense", value: 60 },{ name: "special-attack", value: 90 },{ name: "special-defense", value: 75 },{ name: "speed", value: 90 }]},
  { name: "diglett", stats: [{ name: "hp", value: 10 },{ name: "attack", value: 55 },{ name: "defense", value: 25 },{ name: "special-attack", value: 35 },{ name: "special-defense", value: 45 },{ name: "speed", value: 95 }]},
  { name: "dugtrio", stats: [{ name: "hp", value: 35 },{ name: "attack", value: 100 },{ name: "defense", value: 50 },{ name: "special-attack", value: 50 },{ name: "special-defense", value: 70 },{ name: "speed", value: 120 }]},
  { name: "meowth", stats: [{ name: "hp", value: 40 },{ name: "attack", value: 45 },{ name: "defense", value: 35 },{ name: "special-attack", value: 40 },{ name: "special-defense", value: 40 },{ name: "speed", value: 90 }]},
  { name: "persian", stats: [{ name: "hp", value: 65 },{ name: "attack", value: 70 },{ name: "defense", value: 60 },{ name: "special-attack", value: 65 },{ name: "special-defense", value: 65 },{ name: "speed", value: 115 }]},
  { name: "psyduck", stats: [{ name: "hp", value: 50 },{ name: "attack", value: 52 },{ name: "defense", value: 48 },{ name: "special-attack", value: 65 },{ name: "special-defense", value: 50 },{ name: "speed", value: 55 }]},
  { name: "golduck", stats: [{ name: "hp", value: 80 },{ name: "attack", value: 82 },{ name: "defense", value: 78 },{ name: "special-attack", value: 95 },{ name: "special-defense", value: 80 },{ name: "speed", value: 85 }]},
  { name: "mankey", stats: [{ name: "hp", value: 40 },{ name: "attack", value: 80 },{ name: "defense", value: 35 },{ name: "special-attack", value: 35 },{ name: "special-defense", value: 45 },{ name: "speed", value: 70 }]},
  { name: "primeape", stats: [{ name: "hp", value: 65 },{ name: "attack", value: 105 },{ name: "defense", value: 60 },{ name: "special-attack", value: 60 },{ name: "special-defense", value: 70 },{ name: "speed", value: 95 }]},
  { name: "growlithe", stats: [{ name: "hp", value: 55 },{ name: "attack", value: 70 },{ name: "defense", value: 45 },{ name: "special-attack", value: 70 },{ name: "special-defense", value: 50 },{ name: "speed", value: 60 }]},
  { name: "arcanine", stats: [{ name: "hp", value: 90 },{ name: "attack", value: 110 },{ name: "defense", value: 80 },{ name: "special-attack", value: 100 },{ name: "special-defense", value: 80 },{ name: "speed", value: 95 }]},
  { name: "poliwag", stats: [{ name: "hp", value: 40 },{ name: "attack", value: 50 },{ name: "defense", value: 40 },{ name: "special-attack", value: 40 },{ name: "special-defense", value: 40 },{ name: "speed", value: 90 }]},
  { name: "poliwhirl", stats: [{ name: "hp", value: 65 },{ name: "attack", value: 65 },{ name: "defense", value: 65 },{ name: "special-attack", value: 50 },{ name: "special-defense", value: 50 },{ name: "speed", value: 90 }]},
  { name: "poliwrath", stats: [{ name: "hp", value: 90 },{ name: "attack", value: 95 },{ name: "defense", value: 95 },{ name: "special-attack", value: 70 },{ name: "special-defense", value: 90 },{ name: "speed", value: 70 }]},
  { name: "abra", stats: [{ name: "hp", value: 25 },{ name: "attack", value: 20 },{ name: "defense", value: 15 },{ name: "special-attack", value: 105 },{ name: "special-defense", value: 55 },{ name: "speed", value: 90 }]},
  { name: "kadabra", stats: [{ name: "hp", value: 40 },{ name: "attack", value: 35 },{ name: "defense", value: 30 },{ name: "special-attack", value: 120 },{ name: "special-defense", value: 70 },{ name: "speed", value: 105 }]},
  { name: "alakazam", stats: [{ name: "hp", value: 55 },{ name: "attack", value: 50 },{ name: "defense", value: 45 },{ name: "special-attack", value: 135 },{ name: "special-defense", value: 95 },{ name: "speed", value: 120 }]},
  { name: "machop", stats: [{ name: "hp", value: 70 },{ name: "attack", value: 80 },{ name: "defense", value: 50 },{ name: "special-attack", value: 35 },{ name: "special-defense", value: 35 },{ name: "speed", value: 35 }]},
  { name: "machoke", stats: [{ name: "hp", value: 80 },{ name: "attack", value: 100 },{ name: "defense", value: 70 },{ name: "special-attack", value: 50 },{ name: "special-defense", value: 60 },{ name: "speed", value: 45 }]},
  { name: "machamp", stats: [{ name: "hp", value: 90 },{ name: "attack", value: 130 },{ name: "defense", value: 80 },{ name: "special-attack", value: 65 },{ name: "special-defense", value: 85 },{ name: "speed", value: 55 }]},
  { name: "bellsprout", stats: [{ name: "hp", value: 50 },{ name: "attack", value: 75 },{ name: "defense", value: 35 },{ name: "special-attack", value: 70 },{ name: "special-defense", value: 30 },{ name: "speed", value: 40 }]},
  { name: "weepinbell", stats: [{ name: "hp", value: 65 },{ name: "attack", value: 90 },{ name: "defense", value: 50 },{ name: "special-attack", value: 85 },{ name: "special-defense", value: 45 },{ name: "speed", value: 55 }]},
  { name: "victreebel", stats: [{ name: "hp", value: 80 },{ name: "attack", value: 105 },{ name: "defense", value: 65 },{ name: "special-attack", value: 100 },{ name: "special-defense", value: 70 },{ name: "speed", value: 70 }]},
  { name: "tentacool", stats: [{ name: "hp", value: 40 },{ name: "attack", value: 40 },{ name: "defense", value: 35 },{ name: "special-attack", value: 50 },{ name: "special-defense", value: 100 },{ name: "speed", value: 70 }]},
  { name: "tentacruel", stats: [{ name: "hp", value: 80 },{ name: "attack", value: 70 },{ name: "defense", value: 65 },{ name: "special-attack", value: 80 },{ name: "special-defense", value: 120 },{ name: "speed", value: 100 }]},
  { name: "geodude", stats: [{ name: "hp", value: 40 },{ name: "attack", value: 80 },{ name: "defense", value: 100 },{ name: "special-attack", value: 30 },{ name: "special-defense", value: 30 },{ name: "speed", value: 20 }]},
  { name: "graveler", stats: [{ name: "hp", value: 55 },{ name: "attack", value: 95 },{ name: "defense", value: 115 },{ name: "special-attack", value: 45 },{ name: "special-defense", value: 45 },{ name: "speed", value: 35 }]},
  { name: "golem", stats: [{ name: "hp", value: 80 },{ name: "attack", value: 120 },{ name: "defense", value: 130 },{ name: "special-attack", value: 55 },{ name: "special-defense", value: 65 },{ name: "speed", value: 45 }]},
  { name: "ponyta", stats: [{ name: "hp", value: 50 },{ name: "attack", value: 85 },{ name: "defense", value: 55 },{ name: "special-attack", value: 65 },{ name: "special-defense", value: 65 },{ name: "speed", value: 90 }]},
  { name: "rapidash", stats: [{ name: "hp", value: 65 },{ name: "attack", value: 100 },{ name: "defense", value: 70 },{ name: "special-attack", value: 80 },{ name: "special-defense", value: 80 },{ name: "speed", value: 105 }]},
  { name: "slowpoke", stats: [{ name: "hp", value: 90 },{ name: "attack", value: 65 },{ name: "defense", value: 65 },{ name: "special-attack", value: 40 },{ name: "special-defense", value: 40 },{ name: "speed", value: 15 }]},
  { name: "slowbro", stats: [{ name: "hp", value: 95 },{ name: "attack", value: 75 },{ name: "defense", value: 110 },{ name: "special-attack", value: 100 },{ name: "special-defense", value: 80 },{ name: "speed", value: 30 }]},
  { name: "magnemite", stats: [{ name: "hp", value: 25 },{ name: "attack", value: 35 },{ name: "defense", value: 70 },{ name: "special-attack", value: 95 },{ name: "special-defense", value: 55 },{ name: "speed", value: 45 }]},
  { name: "magneton", stats: [{ name: "hp", value: 50 },{ name: "attack", value: 60 },{ name: "defense", value: 95 },{ name: "special-attack", value: 120 },{ name: "special-defense", value: 70 },{ name: "speed", value: 70 }]},
  { name: "farfetchd", stats: [{ name: "hp", value: 52 },{ name: "attack", value: 90 },{ name: "defense", value: 55 },{ name: "special-attack", value: 58 },{ name: "special-defense", value: 62 },{ name: "speed", value: 60 }]},
  { name: "doduo", stats: [{ name: "hp", value: 35 },{ name: "attack", value: 85 },{ name: "defense", value: 45 },{ name: "special-attack", value: 35 },{ name: "special-defense", value: 35 },{ name: "speed", value: 75 }]},
  { name: "dodrio", stats: [{ name: "hp", value: 60 },{ name: "attack", value: 110 },{ name: "defense", value: 70 },{ name: "special-attack", value: 60 },{ name: "special-defense", value: 60 },{ name: "speed", value: 110 }]},
  { name: "seel", stats: [{ name: "hp", value: 65 },{ name: "attack", value: 45 },{ name: "defense", value: 55 },{ name: "special-attack", value: 45 },{ name: "special-defense", value: 70 },{ name: "speed", value: 45 }]},
  { name: "dewgong", stats: [{ name: "hp", value: 90 },{ name: "attack", value: 70 },{ name: "defense", value: 80 },{ name: "special-attack", value: 70 },{ name: "special-defense", value: 95 },{ name: "speed", value: 70 }]},
  { name: "grimer", stats: [{ name: "hp", value: 80 },{ name: "attack", value: 80 },{ name: "defense", value: 50 },{ name: "special-attack", value: 40 },{ name: "special-defense", value: 50 },{ name: "speed", value: 25 }]},
  { name: "muk", stats: [{ name: "hp", value: 105 },{ name: "attack", value: 105 },{ name: "defense", value: 75 },{ name: "special-attack", value: 65 },{ name: "special-defense", value: 100 },{ name: "speed", value: 50 }]},
  { name: "shellder", stats: [{ name: "hp", value: 30 },{ name: "attack", value: 65 },{ name: "defense", value: 100 },{ name: "special-attack", value: 45 },{ name: "special-defense", value: 25 },{ name: "speed", value: 40 }]},
  { name: "cloyster", stats: [{ name: "hp", value: 50 },{ name: "attack", value: 95 },{ name: "defense", value: 180 },{ name: "special-attack", value: 85 },{ name: "special-defense", value: 45 },{ name: "speed", value: 70 }]},
  { name: "gastly", stats: [{ name: "hp", value: 30 },{ name: "attack", value: 35 },{ name: "defense", value: 30 },{ name: "special-attack", value: 100 },{ name: "special-defense", value: 35 },{ name: "speed", value: 80 }]},
  { name: "haunter", stats: [{ name: "hp", value: 45 },{ name: "attack", value: 50 },{ name: "defense", value: 45 },{ name: "special-attack", value: 115 },{ name: "special-defense", value: 55 },{ name: "speed", value: 95 }]},
  { name: "gengar", stats: [{ name: "hp", value: 60 },{ name: "attack", value: 65 },{ name: "defense", value: 60 },{ name: "special-attack", value: 130 },{ name: "special-defense", value: 75 },{ name: "speed", value: 110 }]},
  { name: "onix", stats: [{ name: "hp", value: 35 },{ name: "attack", value: 45 },{ name: "defense", value: 160 },{ name: "special-attack", value: 30 },{ name: "special-defense", value: 45 },{ name: "speed", value: 70 }]},
  { name: "drowzee", stats: [{ name: "hp", value: 60 },{ name: "attack", value: 48 },{ name: "defense", value: 45 },{ name: "special-attack", value: 43 },{ name: "special-defense", value: 90 },{ name: "speed", value: 42 }]},
  { name: "hypno", stats: [{ name: "hp", value: 85 },{ name: "attack", value: 73 },{ name: "defense", value: 70 },{ name: "special-attack", value: 73 },{ name: "special-defense", value: 115 },{ name: "speed", value: 67 }]},
  { name: "krabby", stats: [{ name: "hp", value: 30 },{ name: "attack", value: 105 },{ name: "defense", value: 90 },{ name: "special-attack", value: 25 },{ name: "special-defense", value: 25 },{ name: "speed", value: 50 }]},
  { name: "kingler", stats: [{ name: "hp", value: 55 },{ name: "attack", value: 130 },{ name: "defense", value: 115 },{ name: "special-attack", value: 50 },{ name: "special-defense", value: 50 },{ name: "speed", value: 75 }]},
  { name: "voltorb", stats: [{ name: "hp", value: 40 },{ name: "attack", value: 30 },{ name: "defense", value: 50 },{ name: "special-attack", value: 55 },{ name: "special-defense", value: 55 }, {name: "speed", value: 100 }]},
  { name: "electrode", stats: [{ name: "hp", value: 60 },{ name: "attack", value: 50 },{ name: "defense", value: 70 },{ name: "special-attack", value: 80 },{ name: "special-defense", value: 80 },{ name: "speed", value: 150 }]},
  { name: "exeggcute", stats: [{ name: "hp", value: 60 },{ name: "attack", value: 40 },{ name: "defense", value: 80 },{ name: "special-attack", value: 60 },{ name: "special-defense", value: 45 },{ name: "speed", value: 40 }]},
  { name: "exeggutor", stats: [{ name: "hp", value: 95 },{ name: "attack", value: 95 },{ name: "defense", value: 85 },{ name: "special-attack", value: 125 },{ name: "special-defense", value: 75 },{ name: "speed", value: 55 }]},
  { name: "cubone", stats: [{ name: "hp", value: 50 },{ name: "attack", value: 50 },{ name: "defense", value: 95 },{ name: "special-attack", value: 40 },{ name: "special-defense", value: 50 },{ name: "speed", value: 35 }]},
  { name: "marowak", stats: [{ name: "hp", value: 60 },{ name: "attack", value: 80 },{ name: "defense", value: 110 },{ name: "special-attack", value: 50 },{ name: "special-defense", value: 80 },{ name: "speed", value: 45 }]},
  { name: "hitmonlee", stats: [{ name: "hp", value: 50 },{ name: "attack", value: 120 },{ name: "defense", value: 53 },{ name: "special-attack", value: 35 },{ name: "special-defense", value: 110 },{ name: "speed", value: 87 }]},
  { name: "hitmonchan", stats: [{ name: "hp", value: 50 },{ name: "attack", value: 105 },{ name: "defense", value: 79 },{ name: "special-attack", value: 35 },{ name: "special-defense", value: 110 },{ name: "speed", value: 76 }]},
  { name: "lickitung", stats: [{ name: "hp", value: 90 },{ name: "attack", value: 55 },{ name: "defense", value: 75 },{ name: "special-attack", value: 60 },{ name: "special-defense", value: 75 },{ name: "speed", value: 30 }]},
  { name: "koffing", stats: [{ name: "hp", value: 40 },{ name: "attack", value: 65 },{ name: "defense", value: 95 },{ name: "special-attack", value: 60 },{ name: "special-defense", value: 45 },{ name: "speed", value: 35 }]},
  { name: "weezing", stats: [{ name: "hp", value: 65 },{ name: "attack", value: 90 },{ name: "defense", value: 120 },{ name: "special-attack", value: 85 },{ name: "special-defense", value: 70 },{ name: "speed", value: 60 }]},
  { name: "rhyhorn", stats: [{ name: "hp", value: 80 },{ name: "attack", value: 85 },{ name: "defense", value: 95 },{ name: "special-attack", value: 30 },{ name: "special-defense", value: 30 },{ name: "speed", value: 25 }]},
  { name: "rhydon", stats: [{ name: "hp", value: 105 },{ name: "attack", value: 130 },{ name: "defense", value: 120 },{ name: "special-attack", value: 45 },{ name: "special-defense", value: 45 },{ name: "speed", value: 40 }]},
  { name: "chansey", stats: [{ name: "hp", value: 250 },{ name: "attack", value: 5 },{ name: "defense", value: 5 },{ name: "special-attack", value: 35 },{ name: "special-defense", value: 105 },{ name: "speed", value: 50 }]},
  { name: "tangela", stats: [{ name: "hp", value: 65 },{ name: "attack", value: 55 },{ name: "defense", value: 115 },{ name: "special-attack", value: 100 },{ name: "special-defense", value: 40 },{ name: "speed", value: 60 }]},
  { name: "kangaskhan", stats: [{ name: "hp", value: 105 },{ name: "attack", value: 95 },{ name: "defense", value: 80 },{ name: "special-attack", value: 40 },{ name: "special-defense", value: 80 },{ name: "speed", value: 90 }]},
  { name: "horsea", stats: [{ name: "hp", value: 30 },{ name: "attack", value: 40 },{ name: "defense", value: 70 },{ name: "special-attack", value: 70 },{ name: "special-defense", value: 25 },{ name: "speed", value: 60 }]},
  { name: "seadra", stats: [{ name: "hp", value: 55 },{ name: "attack", value: 65 },{ name: "defense", value: 95 },{ name: "special-attack", value: 95 },{ name: "special-defense", value: 45 },{ name: "speed", value: 85 }]},
  { name: "goldeen", stats: [{ name: "hp", value: 45 },{ name: "attack", value: 67 },{ name: "defense", value: 60 },{ name: "special-attack", value: 35 },{ name: "special-defense", value: 50 },{ name: "speed", value: 63 }]},
  { name: "seaking", stats: [{ name: "hp", value: 80 },{ name: "attack", value: 92 },{ name: "defense", value: 65 },{ name: "special-attack", value: 65 },{ name: "special-defense", value: 80 },{ name: "speed", value: 68 }]},
  { name: "staryu", stats: [{ name: "hp", value: 30 },{ name: "attack", value: 45 },{ name: "defense", value: 55 },{ name: "special-attack", value: 70 },{ name: "special-defense", value: 55 },{ name: "speed", value: 85 }]},
  { name: "starmie", stats: [{ name: "hp", value: 60 },{ name: "attack", value: 75 },{ name: "defense", value: 85 },{ name: "special-attack", value: 100 },{ name: "special-defense", value: 85 },{ name: "speed", value: 115 }]},
  { name: "mr-mime", stats: [{ name: "hp", value: 40 },{ name: "attack", value: 45 },{ name: "defense", value: 65 },{ name: "special-attack", value: 100 },{ name: "special-defense", value: 120 },{ name: "speed", value: 90 }]},
  { name: "scyther", stats: [{ name: "hp", value: 70 },{ name: "attack", value: 110 },{ name: "defense", value: 80 },{ name: "special-attack", value: 55 },{ name: "special-defense", value: 80 },{ name: "speed", value: 105 }]},
  { name: "jynx", stats: [{ name: "hp", value: 65 },{ name: "attack", value: 50 },{ name: "defense", value: 35 },{ name: "special-attack", value: 115 },{ name: "special-defense", value: 95 },{ name: "speed", value: 95 }]},
  { name: "electabuzz", stats: [{ name: "hp", value: 65 },{ name: "attack", value: 83 },{ name: "defense", value: 57 },{ name: "special-attack", value: 95 },{ name: "special-defense", value: 85 },{ name: "speed", value: 105 }]},
  { name: "magmar", stats: [{ name: "hp", value: 65 },{ name: "attack", value: 95 },{ name: "defense", value: 57 },{ name: "special-attack", value: 100 },{ name: "special-defense", value: 85 },{ name: "speed", value: 93 }]},
  { name: "pinsir", stats: [{ name: "hp", value: 65 },{ name: "attack", value: 125 },{ name: "defense", value: 100 },{ name: "special-attack", value: 55 },{ name: "special-defense", value: 70 },{ name: "speed", value: 85 }]},
  { name: "tauros", stats: [{ name: "hp", value: 75 },{ name: "attack", value: 100 },{ name: "defense", value: 95 },{ name: "special-attack", value: 40 },{ name: "special-defense", value: 70 },{ name: "speed", value: 110 }]},
  { name: "magikarp", stats: [{ name: "hp", value: 20 },{ name: "attack", value: 10 },{ name: "defense", value: 55 },{ name: "special-attack", value: 15 },{ name: "special-defense", value: 20 },{ name: "speed", value: 80 }]},
  { name: "gyarados", stats: [{ name: "hp", value: 95 },{ name: "attack", value: 125 },{ name: "defense", value: 79 },{ name: "special-attack", value: 60 },{ name: "special-defense", value: 100 },{ name: "speed", value: 81 }]},
  { name: "lapras", stats: [{ name: "hp", value: 130 },{ name: "attack", value: 85 },{ name: "defense", value: 80 },{ name: "special-attack", value: 85 },{ name: "special-defense", value: 95 },{ name: "speed", value: 60 }]},
  { name: "ditto", stats: [{ name: "hp", value: 48 },{ name: "attack", value: 48 },{ name: "defense", value: 48 },{ name: "special-attack", value: 48 },{ name: "special-defense", value: 48 },{ name: "speed", value: 48 }]},
  { name: "eevee", stats: [{ name: "hp", value: 55 },{ name: "attack", value: 55 },{ name: "defense", value: 50 },{ name: "special-attack", value: 45 },{ name: "special-defense", value: 65 },{ name: "speed", value: 55 }]},
  { name: "vaporeon", stats: [{ name: "hp", value: 130 },{ name: "attack", value: 65 },{ name: "defense", value: 60 },{ name: "special-attack", value: 110 },{ name: "special-defense", value: 95 },{ name: "speed", value: 65 }]},
  { name: "jolteon", stats: [{ name: "hp", value: 65 },{ name: "attack", value: 65 },{ name: "defense", value: 60 },{ name: "special-attack", value: 110 },{ name: "special-defense", value: 95 },{ name: "speed", value: 130 }]},
  { name: "flareon", stats: [{ name: "hp", value: 65 },{ name: "attack", value: 130 },{ name: "defense", value: 60 },{ name: "special-attack", value: 95 },{ name: "special-defense", value: 110 },{ name: "speed", value: 65 }]},
  { name: "porygon", stats: [{ name: "hp", value: 65 },{ name: "attack", value: 60 },{ name: "defense", value: 70 },{ name: "special-attack", value: 85 },{ name: "special-defense", value: 75 },{ name: "speed", value: 40 }]},
  { name: "omanyte", stats: [{ name: "hp", value: 35 },{ name: "attack", value: 40 },{ name: "defense", value: 100 },{ name: "special-attack", value: 90 },{ name: "special-defense", value: 55 },{ name: "speed", value: 35 }]},
  { name: "omastar", stats: [{ name: "hp", value: 70 },{ name: "attack", value: 60 },{ name: "defense", value: 125 },{ name: "special-attack", value: 115 },{ name: "special-defense", value: 70 },{ name: "speed", value: 55 }]},
  { name: "kabuto", stats: [{ name: "hp", value: 30 },{ name: "attack", value: 80 },{ name: "defense", value: 90 },{ name: "special-attack", value: 55 },{ name: "special-defense", value: 45 },{ name: "speed", value: 55 }]},
  { name: "kabutops", stats: [{ name: "hp", value: 60 },{ name: "attack", value: 115 },{ name: "defense", value: 105 },{ name: "special-attack", value: 65 },{ name: "special-defense", value: 70 },{ name: "speed", value: 80 }]},
  { name: "aerodactyl", stats: [{ name: "hp", value: 80 },{ name: "attack", value: 105 },{ name: "defense", value: 65 },{ name: "special-attack", value: 60 },{ name: "special-defense", value: 75 },{ name: "speed", value: 130 }]},
  { name: "snorlax", stats: [{ name: "hp", value: 160 },{ name: "attack", value: 110 },{ name: "defense", value: 65 },{ name: "special-attack", value: 65 },{ name: "special-defense", value: 110 },{ name: "speed", value: 30 }]},
  { name: "articuno", stats: [{ name: "hp", value: 90 },{ name: "attack", value: 85 },{ name: "defense", value: 100 },{ name: "special-attack", value: 95 },{ name: "special-defense", value: 125 },{ name: "speed", value: 85 }]},
  { name: "zapdos", stats: [{ name: "hp", value: 90 },{ name: "attack", value: 90 },{ name: "defense", value: 85 },{ name: "special-attack", value: 125 },{ name: "special-defense", value: 90 },{ name: "speed", value: 100 }]},
  { name: "moltres", stats: [{ name: "hp", value: 90 },{ name: "attack", value: 100 },{ name: "defense", value: 90 },{ name: "special-attack", value: 125 },{ name: "special-defense", value: 85 },{ name: "speed", value: 90 }]},
  { name: "dratini", stats: [{ name: "hp", value: 41 },{ name: "attack", value: 64 },{ name: "defense", value: 45 },{ name: "special-attack", value: 50 },{ name: "special-defense", value: 50 },{ name: "speed", value: 50 }]},
  { name: "dragonair", stats: [{ name: "hp", value: 61 },{ name: "attack", value: 84 },{ name: "defense", value: 65 },{ name: "special-attack", value: 70 },{ name: "special-defense", value: 70 },{ name: "speed", value: 70 }]},
  { name: "dragonite", stats: [{ name: "hp", value: 91 },{ name: "attack", value: 134 },{ name: "defense", value: 95 },{ name: "special-attack", value: 100 },{ name: "special-defense", value: 100 },{ name: "speed", value: 80 }]},
  { name: "mewtwo", stats: [{ name: "hp", value: 106 },{ name: "attack", value: 110 },{ name: "defense", value: 90 },{ name: "special-attack", value: 154 },{ name: "special-defense", value: 90 },{ name: "speed", value: 130 }]},
  { name: "mew", stats: [{ name: "hp", value: 100 },{ name: "attack", value: 100 },{ name: "defense", value: 100 },{ name: "special-attack", value: 100 },{ name: "special-defense", value: 100 },{ name: "speed", value: 100 }]}
];

const { bin, scaleLinear, extent, max, axisBottom, axisLeft } = d3;

const dimensions = {
  width: 600,
  height: 300,
  margin: {
    top: 40,
    right: 20,
    bottom: 20,
    left: 20,
  },
};

dimensions.boundedWidth =
  dimensions.width - (dimensions.margin.left + dimensions.margin.right);
dimensions.boundedHeight =
  dimensions.height - (dimensions.margin.top + dimensions.margin.bottom);

const main = d3.select("body").append("main");
main.append("h1").text("First Gen Stats");

const intro = main.append("p");

const wrapper = main
  .append("svg")
  .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`)
  .attr("width", dimensions.width)
  .attr("height", dimensions.height);

const defs = wrapper
  .append("defs")
  .append("clipPath")
  .attr("id", "clip-bounds")
  .append("rect")
  .attr("width", dimensions.boundedWidth)
  .attr("height", dimensions.boundedHeight);

const bounds = wrapper
  .append("g")
  .attr(
    "transform",
    `translate(${dimensions.margin.left} ${dimensions.margin.top})`
  );

const axisGroup = bounds.append("g");
const axisGroupX = axisGroup
  .append("g")
  .attr("transform", `translate(0 ${dimensions.boundedHeight})`);
const axisGroupY = axisGroup.append("g");

const binsGroup = bounds
  .append("g")
  .attr("fill", "currentColor")
  .attr("clip-path", `url(#clip-bounds)`);

const message = main.append("p");

function plotMetric(selectedMetric) {
  const selectedData = data
    .map(({ name, stats }) => ({
      name,
      stat: stats.find((d) => d.name === selectedMetric).value,
    }))
    .sort((a, b) => b.stat - a.stat);

  const valueAccessor = (d) => d.stat;

  const xScale = scaleLinear()
    .domain(extent(selectedData, valueAccessor))
    .range([0, dimensions.boundedWidth])
    .nice();

  const binGenerator = bin()
    .domain(xScale.domain())
    .value(valueAccessor)
    .thresholds(10);

  const bins = binGenerator(selectedData);
  const binPadding = 4;

  const yScale = scaleLinear()
    .domain([0, max(bins, (d) => d.length) + 5])
    .range([dimensions.boundedHeight, 0])
    .nice();

  const xAxis = axisBottom(xScale).ticks(5);
  const yAxis = axisLeft(yScale)
    .ticks(5)
    .tickFormat((d) => (d !== 0 ? d : ""));

  const best = selectedData[0];
  const worst = selectedData[selectedData.length - 1];

  const updateGroups = binsGroup
    .selectAll("g")
    .data(bins);

  const enterGroups = updateGroups.enter();
  const exitGroups = updateGroups.exit();
  exitGroups.remove();

  const enterBinGroups = enterGroups
    .append("g")
    .attr(
      "transform",
      ({ x0, length }) => `translate(${xScale(x0)} ${yScale(length)})`
    );

  enterBinGroups
    .append("rect")
    .attr("fill", "hsl(5, 86%, 60%)")
    .attr("rx", 5)
    .attr("x", binPadding)
    .attr("width", ({ x1, x0 }) => xScale(x1) - xScale(x0) - binPadding * 2)
    .attr(
      "height",
      ({ length }) => dimensions.boundedHeight - yScale(length) + 5
    );

  enterBinGroups
    .filter(({ length }) => length)
    .append("text")
    .attr("x", ({ x1, x0 }) => (xScale(x1) - xScale(x0)) / 2)
    .attr("y", "-5")
    .attr("text-anchor", "middle")
    .attr("font-size", "14")
    .attr("font-weight", "bold")
    .text(({ length }) => length);

  updateGroups.attr(
    "transform",
    ({ x0, length }) => `translate(${xScale(x0)} ${yScale(length)})`
  );

  updateGroups
    .select("rect")
    .attr("width", ({ x1, x0 }) => xScale(x1) - xScale(x0) - binPadding * 2)
    .attr(
      "height",
      ({ length }) => dimensions.boundedHeight - yScale(length) + 5
    );

  updateGroups
    .filter(({ length }) => length)
    .select("text")
    .attr("x", ({ x1, x0 }) => (xScale(x1) - xScale(x0)) / 2)
    .text(({ length }) => length);

  updateGroups
    .filter(({ length }) => length === 0)
    .select("text")
    .remove();

  axisGroupX.call(xAxis);

  axisGroupY.call(yAxis);

  axisGroup.selectAll("line").remove();
  axisGroup.selectAll("path").remove();

  axisGroupY
    .selectAll("g.tick")
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "currentColor")
    .attr("opacity", "0.1")
    .attr("d", `M 0 0 h ${dimensions.boundedWidth}`);

  message.html(
    `<strong>${best.name}</strong> tops the chart with a base stat of <strong>${best.stat}</strong>. On the opposite end of the spectrum, <strong>${worst.name}</strong> manages only <strong>${worst.stat}</strong> base points.`
  );
}

const metrics = [
  "hp",
  "attack",
  "defense",
  "special-attack",
  "special-defense",
  "speed",
];
const metric = metrics[Math.floor(Math.random() * metrics.length)];

intro
  .append("span")
  .text("The following histogram highlights the distribution of the ");

const selection = intro.append("select");

selection
  .selectAll("option")
  .data(metrics)
  .enter()
  .append("option")
  .attr("value", (d) => d)
  .text((d) => d)
  .filter((d) => d === metric)
  .attr("selected", "true");

intro.append("span").text(" stat for pokemon of the first generation.");

plotMetric(metric);

selection.on("input", (e) => {
  const { value } = e.target;
  plotMetric(value);
});
