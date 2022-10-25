const data = [
  {
    Date: "20 March",
    "Grand Prix": "Bahrain",
    Venue: "Sakhir",
    Coordinates: "26°1′57″N 50°30′38″E",
  },
  {
    Date: "27 March",
    "Grand Prix": "Saudi Arabia",
    Venue: "Jeddah",
    Coordinates: "21°37′55″N 39°6′16″E",
  },
  {
    Date: "10 April",
    "Grand Prix": "Australia",
    Venue: "Melbourne",
    Coordinates: "37°50′59″S 144°58′6″E",
  },
  {
    Date: "24 April",
    "Grand Prix": "Emilia Romagna",
    Venue: "Imola",
    Coordinates: "44°20′28″N 11°42′48″E",
  },
  {
    Date: "8 May",
    "Grand Prix": "Miami",
    Venue: "Miami",
    Coordinates: "25°57′29″N 80°14′20″W",
  },
  {
    Date: "22 May",
    "Grand Prix": "Spain",
    Venue: "Barcelona",
    Coordinates: "41°34′12″N 2°15′40″E",
  },
  {
    Date: "29 May",
    "Grand Prix": "Monaco",
    Venue: "Monaco",
    Coordinates: "43°44′5″N 7°25′14″E",
  },
  {
    Date: "12 June",
    "Grand Prix": "Azerbaijan",
    Venue: "Baku",
    Coordinates: "40°22′21″N 49°51′12″E",
  },
  {
    Date: "19 June",
    "Grand Prix": "Canada",
    Venue: "Montreal",
    Coordinates: "45°30′02″N 73°31′21″W",
  },
  {
    Date: "3 July",
    "Grand Prix": "United Kingdom",
    Venue: "Silverstone",
    Coordinates: "52°4′43″N 1°1′1″W",
  },
  {
    Date: "10 July",
    "Grand Prix": "Austria",
    Venue: "Spielberg",
    Coordinates: "47°13′11″N 14°45′53″E",
  },
  {
    Date: "24 July",
    "Grand Prix": "France",
    Venue: "Le Castellet",
    Coordinates: "43°15′2″N 5°47′30″E",
  },
  {
    Date: "31 July",
    "Grand Prix": "Hungary",
    Venue: "Budapest",
    Coordinates: "47°34′56″N 19°15′04″E",
  },
  {
    Date: "28 August",
    "Grand Prix": "Belgium",
    Venue: "Spa",
    Coordinates: "50°26′14″N 5°58′17″E",
  },
  {
    Date: "4 September",
    "Grand Prix": "Netherlands",
    Venue: "Zandvoort",
    Coordinates: "52°23′19.75″N 4°32′27.32″E",
  },
  {
    Date: "11 September",
    "Grand Prix": "Italy",
    Venue: "Monza",
    Coordinates: "45°37′14″N 9°17′22″E",
  },
  {
    Date: "2 October",
    "Grand Prix": "Singapore",
    Venue: "Singapore",
    Coordinates: "1°17′29.51″N 103°51′49.86″E",
  },
  {
    Date: "9 October",
    "Grand Prix": "Japan",
    Venue: "Suzuka",
    Coordinates: "34°50′35″N 136°32′26″E",
  },
  {
    Date: "23 October",
    "Grand Prix": "USA",
    Venue: "Austin",
    Coordinates: "30°7′58″N 97°38′28″W",
  },
  {
    Date: "30 October",
    "Grand Prix": "Mexico",
    Venue: "Mexico City",
    Coordinates: "19°24′22″N 99°5′33″W",
  },
  {
    Date: "13 November",
    "Grand Prix": "Brazil",
    Venue: "Sao Paulo",
    Coordinates: "23°42′4″S 46°41′50″W",
  },
  {
    Date: "20 November",
    "Grand Prix": "Abu Dhabi",
    Venue: "Abu Dhabi",
    Coordinates: "24°28′2″N 54°36′11″E",
  },
];

const getLongLat = (coordinates = "38°53′23″N 77°00′32″W") =>
  coordinates
    .split(/[ -]/)
    .reduce((acc, curr) => {
      let [, degrees, minutes, seconds, direction] = curr.match(
        /([\d\.]+)°([\d\.]+)′([\d\.]+)″([NSWE])/
      );

      [degrees, minutes, seconds] = [degrees, minutes, seconds].map((d) =>
        parseFloat(d)
      );
      let decimal = degrees + minutes / 60 + seconds / 3600;

      if (direction === "S" || direction === "W") decimal *= -1;

      return [...acc, decimal];
    }, [])
    .reverse();

data.forEach((datum) => {
  const { Coordinates } = datum;
  datum.coordinates = getLongLat(Coordinates);
});

const div = d3.select("body").append("div");

const input = div
  .append("input")
  .attr("type", "range")
  .attr("min", "0")
  .attr("max", "360")
  .attr("value", "0");

const size = 600;

const svg = div
  .append("svg")
  .attr("viewBox", `0 0 ${size} ${size}`)
  .attr("width", size)
  .attr("height", size);

const defs = svg.append("defs");

const radialGradient = defs
  .append("radialGradient")
  .attr("id", "gradient-overlay")
  .attr("gradientUnits", "userSpaceOnUse")
  .attr("cx", (size * 3) / 4)
  .attr("cy", size / 4);

radialGradient
  .append("stop")
  .attr("offset", 0)
  .attr("stop-color", "hsl(0, 0%, 100%)");

radialGradient
  .append("stop")
  .attr("offset", 1)
  .attr("stop-color", "hsl(0, 0%, 50%)");

svg
  .append("g")
  .attr("transform", `translate(${size / 2} ${size / 2})`)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .append("text")
  .text("Loading data");

(async () => {
  const json = await d3.json(
    "https://unpkg.com/world-atlas@2.0.2/land-50m.json"
  );
  svg.select("g").remove();

  const sphere = { type: "Sphere" };

  const projection = d3.geoOrthographic().fitSize([size, size], sphere);

  const path = d3.geoPath().projection(projection);

  const groupGeo = svg.append("g");
  const groupArcs = svg.append("g");
  const groupData = svg.append("g");
  const groupOverlay = svg.append("g");

  const clipPath = defs.append("clipPath").attr("id", "clip-path-overlay");

  clipPath.append("path").attr("d", path(sphere));

  groupGeo
    .append("path")
    .attr("d", path(sphere))
    .attr("fill", "hsl(0, 0%, 97%)");

  groupGeo
    .append("path")
    .attr("d", path(topojson.feature(json, json.objects.land)))
    .attr("fill", "hsl(0, 0%, 78%)");

  groupOverlay
    .append("rect")
    .attr("width", size)
    .attr("height", size)
    .attr("clip-path", "url(#clip-path-overlay)")
    .attr("fill", "url(#gradient-overlay)")
    .attr("opacity", 0.5);

  const groupsData = groupData
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr(
      "transform",
      ({ coordinates }) => `translate(${projection(coordinates)})`
    );

  groupsData.append("circle").attr("r", "5");

  groupsData
    .append("text")
    .text((d) => d.Venue)
    .attr("y", "-8")
    .attr("text-anchor", "middle");

  groupsData
    .filter(({ coordinates }) => path({ type: "Point", coordinates }) === null)
    .attr("opacity", "0");

  groupArcs
    .selectAll("path")
    .data(data.slice(0, -1))
    .enter()
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "currentColor")
    .attr("stroke-width", "1")
    .attr("d", ({ coordinates }, i) =>
      path({
        type: "LineString",
        coordinates: [coordinates, data[i + 1].coordinates],
      })
    );

  input.on("input", (e) => {
    const degrees = parseFloat(e.target.value);

    projection.rotate([degrees, 0]);

    groupGeo
      .select("path:nth-of-type(2)")
      .attr("d", path(topojson.feature(json, json.objects.land)));

    groupData
      .selectAll("g")
      .attr(
        "transform",
        ({ coordinates }) => `translate(${projection(coordinates)})`
      );

    groupsData
      .attr("opacity", "1")
      .filter(
        ({ coordinates }) => path({ type: "Point", coordinates }) === null
      )
      .attr("opacity", "0");

    groupArcs.selectAll("path").attr("d", ({ coordinates }, i) =>
      path({
        type: "LineString",
        coordinates: [coordinates, data[i + 1].coordinates],
      })
    );
  });
})();
