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

const div = d3.select("body").append("div").attr("id", "root");

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
  .attr("stop-color", "hsl(0, 0%, 99%)");

radialGradient
  .append("stop")
  .attr("offset", 1)
  .attr("stop-color", "hsl(0, 0%, 76%)");

svg
  .append("g")
  .attr("transform", `translate(${size / 2} ${size / 2})`)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .append("text")
  .attr("font-size", "18")
  .text("Loading data");

(async () => {
  const json = await d3.json(
    "https://unpkg.com/world-atlas@2.0.2/countries-110m.json"
  );

  const data = dataset.map((datum) => {
    const { Coordinates } = datum;
    const coordinates = getLongLat(Coordinates);

    return { ...datum, coordinates };
  });

  const outro = svg
    .select("g")
    .attr("opacity", "1")
    .transition()
    .delay(400)
    .attr("opacity", "0")
    .remove();

  outro.on("end", () => {
    const groupMap = svg.append("g");
    const groupGeo = groupMap.append("g");
    const groupOverlay = groupMap.append("g");
    const groupData = groupMap.append("g");
    const groupControls = svg.append("g");

    const controlSize = 56;
    const controls = [
      {
        href: "arrow-left",
        x: 0,
        index: -1,
      },
      {
        href: "arrow-right",
        x: size - controlSize,
        index: 1,
      },
    ];

    groupControls
      .attr("opacity", "0")
      .attr("transform", `translate(0 ${size - controlSize})`);

    const groupsControls = groupControls
      .selectAll("g")
      .data(controls)
      .enter()
      .append("g")
      .attr("transform", ({ x }) => `translate(${x} 0)`);

    groupsControls
      .append("use")
      .attr("href", ({ href }) => `#${href}`)
      .attr("width", controlSize)
      .attr("height", controlSize)
      .style("color", "hsl(240, 7%, 23%)");

    groupsControls
      .append("rect")
      .attr("width", controlSize)
      .attr("height", controlSize)
      .attr("opacity", "0");

    const intro = groupMap
      .attr("opacity", "0")
      .transition()
      .attr("opacity", "1");

    const sphere = { type: "Sphere" };

    const projection = d3.geoOrthographic().fitSize([size, size], sphere);

    const path = d3.geoPath().projection(projection);
    defs
      .append("clipPath")
      .attr("id", "clip-path-overlay")
      .append("path")
      .attr("d", path(sphere));

    groupGeo
      .append("path")
      .attr("d", path(sphere))
      .attr("fill", "hsl(0, 0%, 99%)");

    const groupCountries = groupGeo.append("g");

    groupCountries
      .selectAll("path")
      .data(topojson.feature(json, json.objects.countries).features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("fill", "hsl(240, 7%, 23%)")
      .attr("stroke", "hsl(0, 0%, 99%)");

    groupOverlay
      .append("rect")
      .attr("width", size)
      .attr("height", size)
      .attr("fill", "url(#gradient-overlay)")
      .attr("opacity", 0.75)
      .attr("clip-path", "url(#clip-path-overlay)");

    groupData
      .append("path")
      .attr("fill", "none")
      .attr("stroke", "hsl(240, 19%, 10%)")
      .attr("stroke-width", "2");

    groupData.append("circle").attr("fill", "hsl(240, 19%, 10%)");

    const groupDetails = groupData.append("g");

    const groupBackground = groupDetails.append("g");
    groupBackground.append("rect").attr("fill", "hsl(240, 19%, 10%)");

    const groupText = groupDetails.append("g").style("opacity", "0");

    const text = groupText
      .append("text")
      .attr("fill", "hsl(0, 0%, 99%)")
      .attr("font-family", "sans-serif");

    text
      .append("tspan")
      .attr("font-size", "32")
      .attr("y", "32")
      .attr("font-weight", "700");

    text
      .append("tspan")
      .attr("font-size", "18")
      .attr("x", "0")
      .attr("dy", "30");

    const line = d3
      .line()
      .x(([x]) => x)
      .y(([, y]) => y)
      .curve(d3.curveBasis);

    const lineDistanceScale = d3
      .scaleLinear()
      .domain([0, size])
      .range([0, 100]);

    const handleUpdate = (datum, from) => {
      const { coordinates } = datum;

      const [long, lat] = coordinates;

      let [startAngle] = projection.rotate();
      let endAngle = long * -1;

      const change = endAngle - startAngle;
      if (Math.abs(change) > 180) {
        if (change < 0) endAngle += 360;
        else startAngle += 360;
      }

      const transitionText = d3.transition().duration(400).ease(d3.easeQuadIn);

      const transitionBackground = d3
        .transition(transitionText)
        .transition()
        .duration(400)
        .ease(d3.easeQuadInOut);

      const transitionPath = d3
        .transition(transitionBackground)
        .transition()
        .duration(700);

      const transitionPoint = d3
        .transition(transitionPath)
        .transition()
        .duration(350)
        .ease(d3.easeQuadOut);

      groupText
        .transition(transitionText)
        .style("opacity", "0")
        .on("end", function () {
          d3.select(this).select("text tspan:nth-of-type(1)").text("");

          d3.select(this).select("text tspan:nth-of-type(2)").text("");
        });

      groupBackground
        .select("rect")
        .transition(transitionBackground)
        .attr("transform", "scale(0)");

      groupData
        .select("path")
        .transition(transitionPath)
        .attr("stroke-dashoffset", "1");

      groupData.select("circle").transition(transitionPoint).attr("r", "0");

      transitionPoint.on("end", () => {
        const { coordinates: source } = from;

        const start = projection(source);
        const end = projection(coordinates);

        const [x1, y1] = start;
        const [x2, y2] = end;

        const cx = (x2 + x1) / 2;
        const cy = (y2 + y1) / 2;

        const px = x2 - x1;
        const py = y2 - y1;

        let nx = py * -1;
        let ny = px;

        const m = (nx ** 2 + ny ** 2) ** 0.5;

        nx /= m;
        ny /= m;

        const d = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5;

        const lineDistance = lineDistanceScale(d);

        const x = cx + nx * lineDistance;
        const y = cy + ny * lineDistance;

        const points = [start, [x, y], end];

        groupData
          .select("path")
          .attr("d", line(points))
          .attr("pathLength", "1")
          .attr("stroke-dasharray", "1")
          .attr("stroke-dashoffset", "1");

        const transition = d3.transition().duration(900).ease(d3.easeQuadInOut);

        transition
          .tween("focus", () => {
            const i = d3.interpolateArray(
              [startAngle, 0, 0],
              [long > 0 ? endAngle + 30 : endAngle - 30, 0, 0]
            );

            const o = d3.interpolate(1, -1);

            return (t) => {
              projection.rotate(i(t));

              groupCountries.selectAll("path").attr("d", path);

              const start = projection(source);
              const end = projection(coordinates);

              const cx = (end[0] + start[0]) / 2;
              const cy = (end[1] + start[1]) / 2;

              const px = end[0] - start[0];
              const py = end[1] - start[1];

              let nx = py * -1;
              let ny = px;

              const m = (nx ** 2 + ny ** 2) ** 0.5;

              nx /= m;
              ny /= m;

              const x = cx + nx * lineDistance;
              const y = cy + ny * lineDistance;

              const points = [start, [x, y], end];

              groupData
                .select("path")
                .attr("d", line(points))
                .attr("pathLength", "1")
                .attr("stroke-dasharray", "1")
                .attr("stroke-dashoffset", o(t));
            };
          })
          .on("end", () => {
            groupData
              .select("circle")
              .attr("transform", `translate(${projection(coordinates)})`);

            groupDetails.select("text tspan:nth-of-type(1)").text(datum.Venue);

            groupDetails
              .select("text tspan:nth-of-type(2)")
              .text(`${datum.Date}, ${datum["Grand Prix"]}`);

            const { width, height } = groupDetails
              .select("text")
              .node()
              .getBBox();

            const x =
              long > 0
                ? Math.max(0, size / 3 - width / 2)
                : Math.min(size - width, (size * 2) / 3 - width / 2);
            const y = lat > 0 ? size / 2 - height : size / 2;

            const [x1, y1] = projection(coordinates);
            const x2 = x + width / 2;
            const y2 = y + height / 2;

            groupData.select("path").attr("d", `M ${x1} ${y1} ${x2} ${y2}`);

            groupBackground
              .attr("transform", `translate(${width / 2} ${height / 2})`)
              .select("rect")
              .attr("width", width)
              .attr("height", height)
              .attr("x", (width / 2) * -1)
              .attr("y", (height / 2) * -1);

            groupDetails.attr("transform", `translate(${x} ${y})`);

            const transitionPoint = d3
              .transition()
              .duration(300)
              .ease(d3.easeQuadIn);
            const transitionPath = d3
              .transition(transitionPoint)
              .transition()
              .duration(500)
              .ease(d3.easeQuadInOut);
            const transitionBackground = d3
              .transition(transitionPath)
              .transition()
              .duration(350);
            const transitionText = d3
              .transition(transitionBackground)
              .transition()
              .duration(300)
              .ease(d3.easeQuadOut);

            groupData
              .select("circle")
              .attr("r", "0")
              .transition(transitionPoint)
              .attr("r", "7");

            groupData
              .select("path")
              .attr("pathLength", "1")
              .attr("stroke-dasharray", "1")
              .attr("stroke-dashoffset", "1")
              .transition(transitionPath)
              .attr("stroke-dashoffset", "0");

            groupBackground
              .select("rect")
              .attr("transform", "scale(0)")
              .transition(transitionBackground)
              .attr("transform", "scale(1.25 1.65)");

            groupText.transition(transitionText).style("opacity", "1");

            transitionText.on("end", () => {
              const indexDatum = data.findIndex(
                ({ Venue }) => datum.Venue === Venue
              );
              const { length } = data;

              groupsControls
                .style("cursor", "not-allowed")
                .on("click", null)
                .filter(({ index }) => {
                  const i = indexDatum + index;
                  return i >= 0 && i < length;
                })
                .style("cursor", "pointer")
                .on(
                  "click",
                  (e, { index }) => {
                    handleUpdate(data[indexDatum + index], datum);
                  },
                  {
                    once: true,
                  }
                );
            });
          });
      });
    };

    intro.on("end", (d) => {
      const [datum] = data;
      const { Venue, coordinates } = datum;
      const [long, lat] = coordinates;

      const [startAngle] = projection.rotate();
      const endAngle = long * -1 + 30;

      const transition = d3
        .transition()
        .duration(1000)
        .delay(150)
        .ease(d3.easeQuadInOut);

      transition
        .tween("focus", () => {
          const i = d3.interpolateArray([startAngle, 0, 0], [endAngle, 0, 0]);

          return (t) => {
            projection.rotate(i(t));

            groupCountries.selectAll("path").attr("d", path);
          };
        })
        .on("end", () => {
          groupData
            .select("circle")
            .attr("transform", `translate(${projection(coordinates)})`);

          groupDetails.select("text tspan:nth-of-type(1)").text(datum.Venue);

          groupDetails
            .select("text tspan:nth-of-type(2)")
            .text(`${datum.Date}, ${datum["Grand Prix"]}`);

          const { width, height } = groupDetails
            .select("text")
            .node()
            .getBBox();

          const x = Math.max(0, size / 3 - width / 2);
          const y = lat > 0 ? size / 2 - height : size / 2;

          const [x1, y1] = projection(coordinates);
          const x2 = x + width / 2;
          const y2 = y + height / 2;

          groupData.select("path").attr("d", `M ${x1} ${y1} ${x2} ${y2}`);

          groupBackground
            .attr("transform", `translate(${width / 2} ${height / 2})`)
            .select("rect")
            .attr("width", width)
            .attr("height", height)
            .attr("x", (width / 2) * -1)
            .attr("y", (height / 2) * -1);

          groupDetails.attr("transform", `translate(${x} ${y})`);

          const transitionPoint = d3
            .transition()
            .duration(300)
            .ease(d3.easeQuadIn);
          const transitionPath = d3
            .transition(transitionPoint)
            .transition()
            .duration(500)
            .ease(d3.easeQuadInOut);
          const transitionBackground = d3
            .transition(transitionPath)
            .transition()
            .duration(350);
          const transitionText = d3
            .transition(transitionBackground)
            .transition()
            .duration(300)
            .ease(d3.easeQuadOut);

          groupData
            .select("circle")
            .attr("r", "0")
            .transition(transitionPoint)
            .attr("r", "7");

          groupData
            .select("path")
            .attr("pathLength", "1")
            .attr("stroke-dasharray", "1")
            .attr("stroke-dashoffset", "1")
            .transition(transitionPath)
            .attr("stroke-dashoffset", "0");

          groupBackground
            .select("rect")
            .attr("transform", "scale(0)")
            .transition(transitionBackground)
            .attr("transform", "scale(1.25 1.65)");

          groupText.transition(transitionText).style("opacity", "1");

          transitionText.on("end", () => {
            groupControls
              .transition()
              .attr("opacity", "1")
              .on("end", () => {
                const indexDatum = data.findIndex(
                  (datum) => datum.Venue === Venue
                );
                const { length } = data;

                groupsControls
                  .style("cursor", "not-allowed")
                  .on("click", null)
                  .filter(({ index }) => {
                    const i = indexDatum + index;
                    return i >= 0 && i < length;
                  })
                  .style("cursor", "pointer")
                  .on(
                    "click",
                    (e, { index }) => {
                      handleUpdate(data[indexDatum + index], datum);
                    },
                    {
                      once: true,
                    }
                  );
              });
          });
        });
    });
  });
})();
