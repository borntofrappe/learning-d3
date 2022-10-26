const dataset = [
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

const div = d3
  .select("body")
  .append("div")
  .style("background", "hsl(0, 0%, 99%)");
div.append("h1").text("F1 Calendar Map");

const size = 600;

const svg = div
  .append("svg")
  .attr("viewBox", `0 0 ${size} ${size}`)
  .attr("width", size)
  .attr("height", size);

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

  const intro = svg
    .select("g")
    .attr("opacity", "1")
    .transition()
    .attr("opacity", "0")
    .remove();

  intro.on("end", () => {
    const groupMap = svg.append("g");
    const groupGeo = groupMap.append("g");

    groupMap.attr("opacity", "0").transition().attr("opacity", "1");

    const sphere = { type: "Sphere" };
    const projection = d3.geoOrthographic().fitSize([size, size], sphere);

    const path = d3.geoPath().projection(projection);

    groupGeo
      .append("path")
      .attr("d", path(sphere))
      .attr("fill", "hsl(0, 0%, 95%)");

    groupGeo
      .append("path")
      .attr("d", path(topojson.feature(json, json.objects.land)))
      .attr("fill", "hsl(0, 0%, 78%)");
  });
})();
