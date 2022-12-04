const data = [
  {
    date: "03-12-2022",
    results: [
      { channel: "TF1", program: "Coupe du monde", audience: 6028000 },
      { channel: "France 3", program: "Cassandre", audience: 3867000 },
      {
        channel: "France 2",
        program: "La grande fête du Téléthon",
        audience: 1098000,
      },
      { channel: "M6", program: "The Equalizer", audience: 1059000 },
      { channel: "France 5", program: "Échappées belles", audience: 950000 },
      { channel: "TMC", program: "Columbo", audience: 828000 },
      {
        channel: "Arte",
        program: "Mont-Saint-Michel, le labyrinthe de l'archange",
        audience: 837000,
      },
      {
        channel: "W9",
        program: "Les 20 chansons de Céline Dion préférées des Français",
        audience: 528000,
      },
      {
        channel: "TFX",
        program: "Le journal de la Coupe du monde Fifa 2022",
        audience: 482000,
      },
      {
        channel: "TF1 Séries Films",
        program: "Joséphine, ange gardien",
        audience: 420000,
      },
      {
        channel: "6TER",
        program: "La petite histoire de France",
        audience: 261000,
      },
      { channel: "C8", program: "Les mystères de la Bible", audience: 251000 },
      { channel: "Gulli", program: "Tout le monde danse", audience: 248000 },
      {
        channel: "RMC Découverte",
        program: "Retour à l'instinct primaire",
        audience: 270000,
      },
      { channel: "NRJ 12", program: "The Big Bang Theory", audience: 257000 },
      { channel: "Chérie 25", program: "Call the Midwife", audience: 235000 },
      {
        channel: "RMC Story",
        program: "Les grandes énigmes de l'histoire",
        audience: 195000,
      },
      { channel: "CStar", program: "État paranormal", audience: 141000 },
    ],
  },
  {
    date: "02-12-2022",
    results: [
      { channel: "TF1", program: "Coupe du monde", audience: 5557000 },
      { channel: "France 2", program: "César Wagner", audience: 3343000 },
      { channel: "M6", program: "Maison à vendre", audience: 1860000 },
      { channel: "Arte", program: "À chacun son secret", audience: 1513000 },
      {
        channel: "France 3",
        program: "Téléthon 2022 : 36e édition",
        audience: 809000,
      },
      { channel: "France 5", program: "Philadelphia", audience: 892000 },
      { channel: "C8", program: "Les années Sébastien", audience: 609000 },
      { channel: "TMC", program: "Restos du Coeur", audience: 485000 },
      { channel: "W9", program: "Enquête d'action", audience: 515000 },
      {
        channel: "TF1 Séries Films",
        program: "Noël comme chien et chat",
        audience: 486000,
      },
      {
        channel: "Gulli",
        program: "Astérix chez les Bretons",
        audience: 428000,
      },
      { channel: "6TER", program: "Hawaii 5-0", audience: 415000 },
      {
        channel: "RMC Story",
        program: "Michael Schumacher : en quête de vérité",
        audience: 338000,
      },
      {
        channel: "Chérie 25",
        program: "Un bonheur n'arrive jamais seul",
        audience: 261000,
      },
      {
        channel: "CStar",
        program: "Storage Wars : enchères surprises",
        audience: 258000,
      },
      {
        channel: "RMC Découverte",
        program: "J'irai dormir chez vous...",
        audience: 224000,
      },
      {
        channel: "NRJ 12",
        program: "Fais pas ci, fais pas ça",
        audience: 186000,
      },
      {
        channel: "TFX",
        program: "Sages-femmes, la vie entre leurs mains",
        audience: 173000,
      },
    ],
  },
  {
    date: "01-12-2022",
    results: [
      { channel: "TF1", program: "Coupe du monde", audience: 5538000 },
      { channel: "M6", program: "L'homme de nos vies", audience: 2477000 },
      { channel: "France 2", program: "Envoyé spécial", audience: 2022000 },
      { channel: "France 3", program: "La garçonne", audience: 1342000 },
      { channel: "France 5", program: "Terres extrêmes", audience: 903000 },
      { channel: "TMC", program: "The Holiday", audience: 601000 },
      { channel: "RMC Découverte", program: "S.O.S. garage", audience: 634000 },
      {
        channel: "C8",
        program: "Y'a que la vérité qui compte",
        audience: 678000,
      },
      { channel: "TFX", program: "Comme un chef", audience: 595000 },
      { channel: "Gulli", program: "L'idylle de Noël", audience: 546000 },
      { channel: "Arte", program: "Life", audience: 600000 },
      { channel: "Chérie 25", program: "Avant toi", audience: 473000 },
      {
        channel: "TF1 Séries Films",
        program: "New York, section criminelle",
        audience: 474000,
      },
      { channel: "CStar", program: "Au coeur de l'enquête", audience: 328000 },
      {
        channel: "W9",
        program: "Les routes les plus dangereuses du monde",
        audience: 286000,
      },
      {
        channel: "NRJ 12",
        program: "M. Pokora, à coeurs ouverts",
        audience: 209000,
      },
      {
        channel: "6TER",
        program: "7 jours 7 nuits à la maternité",
        audience: 239000,
      },
      {
        channel: "RMC Story",
        program: "Adolescents et criminels - Comment ont-ils basculé ?",
        audience: 236000,
      },
    ],
  },
  {
    date: "30-11-2022",
    results: [
      { channel: "TF1", program: "Coupe du monde", audience: 5554000 },
      { channel: "France 2", program: "Les Invisibles", audience: 4034000 },
      { channel: "M6", program: "Le meilleur pâtissier", audience: 1914000 },
      { channel: "Arte", program: "Pour une femme", audience: 1373000 },
      { channel: "France 3", program: "Faut pas rêver", audience: 1127000 },
      { channel: "C8", program: "Mongeville", audience: 1154000 },
      { channel: "TMC", program: "Taxi 5", audience: 750000 },
      { channel: "W9", program: "Enquêtes criminelles", audience: 666000 },
      { channel: "NRJ 12", program: "Ransom Games", audience: 517000 },
      { channel: "CStar", program: "U-235", audience: 499000 },
      {
        channel: "TFX",
        program:
          "De la ville à la campagne : un changement de vie de tous les défis",
        audience: 485000,
      },
      { channel: "France 5", program: "La grande librairie", audience: 350000 },
      {
        channel: "TF1 Séries Films",
        program: "New York, section criminelle",
        audience: 376000,
      },
      {
        channel: "Chérie 25",
        program: "Deux flics sur les docks",
        audience: 319000,
      },
      { channel: "6TER", program: "Les mamans, 1 an après", audience: 287000 },
      {
        channel: "RMC Story",
        program: "Routes sous haute tension",
        audience: 179000,
      },
      {
        channel: "RMC Découverte",
        program: "Les reines de la mécanique",
        audience: 184000,
      },
      {
        channel: "Gulli",
        program: "Noël : la fête préférée des Français",
        audience: 152000,
      },
    ],
  },
  {
    date: "29-11-2022",
    results: [
      { channel: "France 3", program: "Alexandra Ehle", audience: 4574000 },
      { channel: "TF1", program: "Coupe du monde", audience: 4459000 },
      {
        channel: "M6",
        program: "La France a un incroyable talent",
        audience: 2497000,
      },
      {
        channel: "France 2",
        program: "La fête de la chanson française",
        audience: 2118000,
      },
      {
        channel: "Arte",
        program: "Qatar : une dynastie à la conquête du monde",
        audience: 1148000,
      },
      { channel: "C8", program: "Mort ou vif", audience: 841000 },
      { channel: "Gulli", program: "Willow", audience: 614000 },
      { channel: "NRJ 12", program: "Code Mercury", audience: 620000 },
      {
        channel: "France 5",
        program: "Volailles de Noël : qui est le dindon de la farce ?",
        audience: 624000,
      },
      {
        channel: "TMC",
        program: "Muriel Robin : «Et pof !»",
        audience: 498000,
      },
      { channel: "TFX", program: "Bad Moms", audience: 411000 },
      { channel: "W9", program: "NCIS", audience: 433000 },
      {
        channel: "TF1 Séries Films",
        program: "Camping Paradis",
        audience: 251000,
      },
      {
        channel: "RMC Découverte",
        program: "Wheeler Dealers France",
        audience: 251000,
      },
      {
        channel: "RMC Story",
        program: "Enquêtes mystérieuses",
        audience: 239000,
      },
      { channel: "CStar", program: "Le meilleur forgeron", audience: 211000 },
      {
        channel: "6TER",
        program: "La petite histoire de France",
        audience: 174000,
      },
      {
        channel: "Chérie 25",
        program: "Snapped : fratrie meurtrière",
        audience: 150000,
      },
    ],
  },
  {
    date: "28-11-2022",
    results: [
      { channel: "TF1", program: "Coupe du monde", audience: 5770000 },
      { channel: "France 2", program: "L'art du crime", audience: 2912000 },
      {
        channel: "France 3",
        program: "Une intime conviction",
        audience: 2454000,
      },
      { channel: "M6", program: "Pretty Woman", audience: 2216000 },
      { channel: "W9", program: "Une journée en enfer", audience: 1375000 },
      { channel: "Arte", program: "Le ciel peut attendre", audience: 1074000 },
      {
        channel: "TMC",
        program: "Cinquante nuances plus sombres",
        audience: 685000,
      },
      { channel: "C8", program: "Telle mère, telle fille", audience: 577000 },
      { channel: "NRJ 12", program: "Crimes", audience: 483000 },
      {
        channel: "France 5",
        program: "Devenir Ostréiculteur",
        audience: 463000,
      },
      {
        channel: "RMC Découverte",
        program: "TGV, génie français du rail",
        audience: 357000,
      },
      { channel: "TFX", program: "Appels d'urgence", audience: 345000 },
      {
        channel: "CStar",
        program: "Laurent Gerra & Eddy Mitchell, à crédit et en stéréo",
        audience: 294000,
      },
      {
        channel: "TF1 Séries Films",
        program: "Un Noël saupoudré d'amour",
        audience: 301000,
      },
      {
        channel: "RMC Story",
        program: "Vol 571 : crash dans les Andes",
        audience: 292000,
      },
      {
        channel: "Chérie 25",
        program: "The Closer : L.A. Enquêtes prioritaires",
        audience: 330000,
      },
      { channel: "6TER", program: "Kaamelott", audience: 265000 },
      { channel: "Gulli", program: "Noël à Paris", audience: 206000 },
    ],
  },
  {
    date: "27-11-2022",
    results: [
      { channel: "TF1", program: "Coupe du monde", audience: 7478000 },
      {
        channel: "France 2",
        program: "La chance de ma vie",
        audience: 3152000,
      },
      { channel: "France 3", program: "Inspecteur Barnaby", audience: 2549000 },
      { channel: "M6", program: "Zone interdite", audience: 2199000 },
      { channel: "TMC", program: "Jurassic World", audience: 986000 },
      { channel: "Arte", program: "The Immigrant", audience: 827000 },
      {
        channel: "NRJ 12",
        program: "La destination de Noël",
        audience: 639000,
      },
      {
        channel: "Chérie 25",
        program: "Les petits meurtres d'Agatha Christie",
        audience: 603000,
      },
      { channel: "W9", program: "Paris à tout prix", audience: 581000 },
      { channel: "C8", program: "Le train", audience: 517000 },
      {
        channel: "RMC Story",
        program: "Faites entrer l'accusé",
        audience: 550000,
      },
      { channel: "6TER", program: "Duo d'escrocs", audience: 407000 },
      {
        channel: "France 5",
        program:
          "Recettes pour un monde meilleur - Mieux manger pour changer le futur",
        audience: 414000,
      },
      { channel: "TFX", program: "Les gazelles", audience: 343000 },
      { channel: "CStar", program: "Chicago Fire", audience: 285000 },
      {
        channel: "TF1 Séries Films",
        program: "La merveilleuse boutique de Noël",
        audience: 196000,
      },
      {
        channel: "RMC Découverte",
        program: "Seuls face à l'Alaska",
        audience: 221000,
      },
      { channel: "Gulli", program: "Tiny House Nation", audience: 144000 },
    ],
  },
  {
    date: "26-11-2022",
    results: [
      { channel: "TF1", program: "Coupe du monde", audience: 5742000 },
      { channel: "France 3", program: "Cassandre", audience: 3761000 },
      {
        channel: "France 2",
        program: "N'oubliez pas les paroles !",
        audience: 2425000,
      },
      { channel: "M6", program: "The Equalizer", audience: 1050000 },
      { channel: "France 5", program: "Échappées belles", audience: 993000 },
      {
        channel: "Arte",
        program: "Qui a tué l'Empire romain ?",
        audience: 921000,
      },
      { channel: "TMC", program: "Columbo", audience: 637000 },
      { channel: "6TER", program: "Noël au palais royal", audience: 432000 },
      {
        channel: "W9",
        program: "La petite histoire de France",
        audience: 317000,
      },
      { channel: "TFX", program: "Chroniques criminelles", audience: 344000 },
      { channel: "C8", program: "Les mystères de la Bible", audience: 292000 },
      {
        channel: "TF1 Séries Films",
        program: "Joséphine, ange gardien",
        audience: 273000,
      },
      { channel: "Chérie 25", program: "Call the Midwife", audience: 225000 },
      {
        channel: "RMC Découverte",
        program: "Retour à l'instinct primaire",
        audience: 179000,
      },
      { channel: "NRJ 12", program: "The Big Bang Theory", audience: 177000 },
      { channel: "CStar", program: "État paranormal", audience: 157000 },
      {
        channel: "RMC Story",
        program: "Enquêtes mystérieuses",
        audience: 154000,
      },
      { channel: "Gulli", program: "Les traîtres", audience: 103000 },
    ],
  },
];

const timeParse = d3.timeParse("%d-%m-%Y");
const timeFormat = d3.timeFormat("%B %-d");

const dataPercentages = [...data]
  .sort((a, b) => timeParse(a.date) > timeParse(b.date))
  .map((dataset) => {
    const { date } = dataset;
    const total = dataset.results.reduce((acc, curr) => acc + curr.audience, 0);

    const results = [...dataset.results]
      .sort((a, b) => (b.channel < a.channel ? 1 : -1))
      .reduce((acc, curr) => {
        const audience = (curr.audience / total) * 100;
        const cumulative =
          acc.length > 0 ? acc[acc.length - 1].cumulative + audience : audience;

        return [
          ...acc,
          {
            ...curr,
            audience,
            cumulative,
          },
        ];
      }, []);

    return {
      date,
      results,
    };
  });

const dates = dataPercentages.map((d) => d.date);
const channels = dataPercentages[0].results.map((d) => d.channel);

const size = 500;
const radius = size / 2;
const margin = 120;

const innerRadius = 10;
const strokeGap = 10;

const startAngle = Math.PI / 2;
const endAngle = Math.PI * 2;

const scaleRadius = d3
  .scaleLinear()
  .domain([0, 100])
  .range([innerRadius + strokeGap, radius]);

const scaleAngle = d3
  .scaleOrdinal()
  .domain(dates)
  .range(
    d3
      .range(dates.length)
      .map(
        (d, _, { length }) =>
          startAngle + (d / (length - 1)) * (endAngle - startAngle)
      )
  );

const interpolateRainbow = d3.interpolateRainbow;

const scaleColor = d3
  .scaleOrdinal()
  .domain(channels)
  .range(
    d3
      .range(channels.length)
      .map((d, _, { length }) => (d / length) * 8)
      .map(interpolateRainbow)
  );

const degrees = (radians) => (radians * 180) / Math.PI;

const areaRadial = d3
  .areaRadial()
  .angle((d) => d.angle)
  .innerRadius((d) => d.innerRadius)
  .outerRadius((d) => d.outerRadius)
  .curve(d3.curveCatmullRom);

const root = d3.select("body").append("div").attr("id", "root");

const svg = root
  .append("svg")
  .attr("viewBox", `0 0 ${size + margin * 2} ${size + margin * 2}`);

const defs = svg.append("defs");
const mask = defs.append("mask").attr("id", "mask");

mask
  .append("rect")
  .attr("x", -size / 2)
  .attr("y", -size / 2)
  .attr("width", size)
  .attr("height", size)
  .attr("fill", "hsl(0, 0%, 100%)");

mask
  .append("circle")
  .attr("r", innerRadius + strokeGap)
  .attr("fill", "hsl(0, 0%, 0%)")
  .attr("stroke", "hsl(0, 0%, 0%)");

mask
  .selectAll("path")
  .data(dataPercentages)
  .enter()
  .append("path")
  .attr("transform", (d) => `rotate(${degrees(scaleAngle(d.date))})`)
  .attr("d", `M 0 ${(innerRadius + strokeGap) * -1} V ${radius * -1}`)
  .attr("fill", "none")
  .attr("stroke", "hsl(0, 0%, 0%)")
  .attr("stroke-width", strokeGap);

const group = svg
  .append("g")
  .attr("transform", `translate(${margin} ${margin})`);

const groupCenter = group
  .append("g")
  .attr("transform", `translate(${size / 2} ${size / 2})`);

const groupLegend = groupCenter
  .append("g")
  .attr("transform", `translate(20 ${-size / 2 + 14})`);

const groupDates = groupCenter
  .append("g")
  .style("color", "var(--color-subdue, hsl(209, 23%, 60%))");

const groupChannels = groupCenter.append("g").attr("mask", "url(#mask)");

groupLegend
  .append("rect")
  .attr("x", -20)
  .attr("y", -14)
  .attr("width", size / 2)
  .attr("height", size / 2)
  .attr("fill", "transparent")
  .attr("opacity", "0");

const groupsLegend = groupLegend
  .selectAll("g")
  .data(channels)
  .enter()
  .append("g")
  .attr("transform", (_, i, { length }) => {
    const x = i >= Math.floor(length / 2) ? 150 : 20;
    const y = (size / 2 / (length / 2)) * (i % Math.floor(length / 2));

    return `translate(${x} ${y})`;
  });

groupsLegend
  .append("text")
  .text((d) => d)
  .attr("fill", "currentColor")
  .attr("font-size", "16")
  .attr("font-weight", "700");

groupsLegend
  .append("rect")
  .attr("fill", (d) => scaleColor(d))
  .attr("x", "-20")
  .attr("y", "-14")
  .attr("width", "14")
  .attr("height", "14");

const groupsDates = groupDates
  .selectAll("g")
  .data(dates)
  .enter()
  .append("g")
  .attr("transform", (d) => `rotate(${degrees(scaleAngle(d))})`);

groupsDates
  .append("path")
  .attr("d", `M 0 ${(innerRadius + strokeGap) * -1} V ${radius * -1}`)
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "0.5");

groupsDates
  .append("text")
  .attr("text-anchor", (d) => {
    const angle = scaleAngle(d);
    return angle > 0 && angle < Math.PI ? "start" : "end";
  })
  .attr("dominant-baseline", (d) => {
    const angle = scaleAngle(d);
    return angle >= Math.PI / 2 && angle <= (Math.PI * 3) / 2
      ? "hanging"
      : "baseline";
  })
  .text((d) => timeFormat(timeParse(d)))
  .attr(
    "transform",
    (d) =>
      `translate(0 ${(radius + 10) * -1}) rotate(${
        degrees(scaleAngle(d)) * -1
      })`
  )
  .attr("font-size", "14")
  .attr("fill", "currentColor");

const groupsChannels = groupChannels
  .selectAll("g")
  .data(channels)
  .enter()
  .append("g")
  .attr("fill", (d) => scaleColor(d));

groupsChannels
  .append("path")
  .attr("opacity", "0.75")
  .datum((d) => {
    const dataRadial = dataPercentages.map(({ date, results }) => {
      const { audience, cumulative } = results.find(
        ({ channel }) => channel === d
      );

      const angle = scaleAngle(date);
      const innerRadius = scaleRadius(cumulative - audience);
      const outerRadius = scaleRadius(cumulative);

      return { channel: d, angle, innerRadius, outerRadius };
    });

    return dataRadial;
  })
  .attr("d", areaRadial);

groupsChannels
  .on("mouseenter", function (e, channel) {
    groupsChannels.attr("opacity", "0.1");
    d3.select(this).attr("opacity", "1");

    groupsLegend
      .attr("opacity", "0.1")
      .filter((d) => d === channel)
      .attr("opacity", "1");

    //
  })
  .on("mouseleave", function (e, d) {
    groupsChannels.attr("opacity", "1");
    groupsLegend.attr("opacity", "1");
  });

groupsLegend.on("mouseenter", function (e, channel) {
  groupsLegend.attr("opacity", "0.1");
  d3.select(this).attr("opacity", "1");

  groupsChannels
    .attr("opacity", "0.1")
    .filter((d) => d === channel)
    .attr("opacity", "1");

  //
});

groupLegend.on("mouseleave", function (e, d) {
  groupsLegend.attr("opacity", "1");
  groupsChannels.attr("opacity", "1");
});
