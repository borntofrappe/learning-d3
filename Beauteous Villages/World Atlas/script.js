// https://www.les-plus-beaux-villages-de-france.org/fr/nos-villages/
const data = [
  { longitude: 4.5566, latitude: 44.3034, locality: "Aiguèze" },
  { longitude: -1.4977, latitude: 43.3071, locality: "Ainhoa" },
  { longitude: 0.8855, latitude: 46.6956, locality: "Angles-sur-l’Anglin" },
  { longitude: 5.4638, latitude: 43.7373, locality: "Ansouis" },
  { longitude: 3.0482, latitude: 46.9062, locality: "Apremont-sur-Allier" },
  { longitude: 3.9239, latitude: 44.865, locality: "Arlempdes" },
  { longitude: -1.5148, latitude: 46.2078, locality: "Ars-en-Ré" },
  { longitude: 0.1709, latitude: 45.2718, locality: "Aubeterre-sur-Dronne" },
  { longitude: 1.8224, latitude: 44.8542, locality: "Autoire" },
  { longitude: 0.9008, latitude: 44.0694, locality: "Auvillar" },
  { longitude: 4.373, latitude: 44.5086, locality: "Balazuc" },
  { longitude: -1.2637, latitude: 49.6701, locality: "Barfleur" },
  { longitude: 6.5735, latitude: 43.7301, locality: "Bargème" },
  { longitude: 5.6492, latitude: 46.7082, locality: "Baume-les-Messieurs" },
  {
    longitude: 1.838629167,
    latitude: 44.9784,
    locality: "Beaulieu-sur-Dordogne",
  },
  { longitude: 2.3381, latitude: 44.3889, locality: "Belcastel" },
  { longitude: 1.0079, latitude: 44.7759, locality: "Pays de Belvès" },
  { longitude: 7.361929167, latitude: 48.2049, locality: "Bergheim" },
  { longitude: -0.0451, latitude: 49.1886, locality: "Beuvron-en-Auge" },
  { longitude: 1.1447, latitude: 44.8398, locality: "Beynac-et-Cazenac" },
  { longitude: 3.1715, latitude: 45.3186, locality: "Blesle" },
  { longitude: 7.0469, latitude: 45.3717, locality: "Bonneval-sur-Arc" },
  { longitude: -1.0705, latitude: 45.8663, locality: "Hiers-Brouage" },
  { longitude: 2.6261, latitude: 43.9974, locality: "Brousse-le-Château" },
  { longitude: 1.6658, latitude: 44.0559, locality: "Bruniquel" },
  { longitude: 1.9673, latitude: 43.0218, locality: "Camon" },
  { longitude: 0.0737, latitude: 47.2113, locality: "Candes-Saint-Martin" },
  { longitude: 2.0699, latitude: 44.5806, locality: "Capdenac" },
  { longitude: 1.9979, latitude: 44.6796, locality: "Cardaillac" },
  { longitude: 1.7324, latitude: 44.919, locality: "Carennac" },
  { longitude: 1.8215, latitude: 43.9659, locality: "Castelnau-de-Montmiral" },
  { longitude: 1.1492, latitude: 44.8155, locality: "Castelnaud-la-Chapelle" },
  { longitude: 2.7035, latitude: 42.6195, locality: "Castelnou" },
  { longitude: 3.1616, latitude: 46.1853, locality: "Charroux" },
  { longitude: 5.6267, latitude: 46.755, locality: "Château-Chalon" },
  { longitude: 4.6408, latitude: 47.2183, locality: "Châteauneuf" },
  { longitude: 5.484529167, latitude: 44.6949, locality: "Châtillon-en-Diois" },
  { longitude: 7.2953, latitude: 43.8642, locality: "Coaraze" },
  { longitude: 1.6559, latitude: 45.0612, locality: "Collonges-la-Rouge" },
  { longitude: 2.3975, latitude: 44.5995, locality: "Conques" },
  { longitude: 1.953829167, latitude: 44.0631, locality: "Cordes-sur-Ciel" },
  { longitude: 6.149629167, latitude: 43.5285, locality: "Cotignac" },
  { longitude: 0.4886, latitude: 47.1501, locality: "Crissay-sur-Manse" },
  { longitude: 1.7432, latitude: 45.0009, locality: "Curemonte" },
  { longitude: 1.2149, latitude: 44.802, locality: "Domme" },
  { longitude: 7.3061, latitude: 48.0429, locality: "Eguisheim" },
  { longitude: 2.672, latitude: 44.5554, locality: "Estaing" },
  { longitude: 2.4578, latitude: 42.6438, locality: "Eus" },
  { longitude: 2.2547, latitude: 42.5689, locality: "Olette" },
  { longitude: 4.5314, latitude: 47.5119, locality: "Flavigny-sur-Ozerain" },
  { longitude: 0.2312, latitude: 43.9929, locality: "Fourcès" },
  { longitude: 1.5974, latitude: 46.5138, locality: "Gargilesse-Dampierre" },
  { longitude: 6.5861, latitude: 43.2288, locality: "Gassin" },
  { longitude: 1.8503, latitude: 49.5342, locality: "Gerberoy" },
  { longitude: 5.201, latitude: 43.911, locality: "Gordes" },
  { longitude: 6.9785, latitude: 43.7202, locality: "Gourdon" },
  { longitude: 4.908529167, latitude: 44.4195, locality: "Grignan" },
  { longitude: 55.5190962097, latitude: -21.0656790581, locality: "Salazie" },
  { longitude: 7.3115, latitude: 48.1806, locality: "Hunawihr" },
  { longitude: 7.9424, latitude: 48.9537, locality: "Hunspach" },
  { longitude: -1.2556, latitude: 43.4304, locality: "La Bastide-Clairence" },
  { longitude: 3.3173, latitude: 43.9128, locality: "La Couvertoirade" },
  { longitude: -1.3249, latitude: 46.1871, locality: "La Flotte" },
  { longitude: 4.7546, latitude: 44.3925, locality: "La Garde-Adhémar" },
  { longitude: 3.9349, latitude: 44.4775, locality: "Prévenchères" },
  { longitude: 2.6216, latitude: 43.0911, locality: "Lagrasse" },
  { longitude: 6.3062, latitude: 45.0459, locality: "La Grave" },
  { longitude: 1.6298, latitude: 49.0815, locality: "La Roche-Guyon" },
  { longitude: 0.498529167, latitude: 43.9821, locality: "La Romieu" },
  { longitude: 1.1834, latitude: 44.8263, locality: "La Roque-Gageac" },
  { longitude: 4.5197, latitude: 44.1936, locality: "La Roque-sur-Cèze" },
  { longitude: 0.3113, latitude: 43.9452, locality: "Larressingle" },
  { longitude: 2.1392, latitude: 43.7058, locality: "Lautrec" },
  { longitude: 1.1384, latitude: 44.2557, locality: "Lauzerte" },
  { longitude: 0.5147, latitude: 43.7607, locality: "Lavardens" },
  { longitude: 0.8864, latitude: 47.7423, locality: "Lavardin" },
  { longitude: 3.4541, latitude: 45.2628, locality: "Lavaudieu" },
  { longitude: 3.403729167, latitude: 45.1485, locality: "Lavoûte-Chilhac" },
  { longitude: 0.7217, latitude: 49.2318, locality: "Le Bec-Hellouin" },
  { longitude: 5.777029167, latitude: 43.2027, locality: "Le Castellet" },
  { longitude: 3.331729167, latitude: 44.856, locality: "Le Malzieu-Ville" },
  {
    longitude: 5.01399923019,
    latitude: 44.5369454826,
    locality: "Le Poët-Laval",
  },
  { longitude: 4.796, latitude: 43.7436, locality: "Les Baux-de-Provence" },
  { longitude: 0.89, latitude: 44.8857, locality: "Limeuil" },
  { longitude: -4.2076, latitude: 48.0996, locality: "Locronan" },
  { longitude: 6.2486, latitude: 47.0448, locality: "Lods" },
  { longitude: 1.8035, latitude: 44.8713, locality: "Loubressac" },
  { longitude: 5.363, latitude: 43.7634, locality: "Lourmarin" },
  { longitude: 4.366729167, latitude: 44.1531, locality: "Lussan" },
  { longitude: 1.4768, latitude: 49.3992, locality: "Lyons-la-Forêt" },
  { longitude: 1.610029167, latitude: 44.937, locality: "Martel" },
  { longitude: 5.2073, latitude: 43.8327, locality: "Ménerbes" },
  { longitude: 2.7467, latitude: 43.3539, locality: "Minerve" },
  { longitude: 4.8356, latitude: 44.6985, locality: "Mirmande" },
  { longitude: 7.442, latitude: 48.3957, locality: "Mittelbergheim" },
  { longitude: -2.6326, latitude: 48.3597, locality: "Moncontour" },
  { longitude: 2.097829167, latitude: 44.0712, locality: "Monestiés" },
  { longitude: 0.7685, latitude: 44.532, locality: "Monflanquin" },
  { longitude: 0.8945, latitude: 44.6805, locality: "Monpazier" },
  { longitude: 5.4431, latitude: 44.1756, locality: "Montbrun-les-Bains" },
  { longitude: 4.420729167, latitude: 44.2602, locality: "Montclus" },
  { longitude: 3.2048, latitude: 45.6228, locality: "Montpeyroux" },
  { longitude: 0.2033, latitude: 43.9497, locality: "Montréal" },
  { longitude: 1.2014, latitude: 47.1555, locality: "Montrésor" },
  { longitude: 0.0575, latitude: 47.2167, locality: "Montsoreau" },
  { longitude: -1.0279, latitude: 45.7101, locality: "Mornac-sur-Seudre" },
  { longitude: 0.9575, latitude: 46.0422, locality: "Mortemart" },
  { longitude: 6.2216, latitude: 43.8471, locality: "Moustiers-Sainte-Marie" },
  { longitude: 1.9799, latitude: 44.2197, locality: "Najac" },
  { longitude: -0.758770833, latitude: 43.3215, locality: "Navarrenx" },
  { longitude: 3.995, latitude: 47.6973, locality: "Noyers" },
  { longitude: 4.5827, latitude: 45.9477, locality: "Oingt" },
  { longitude: 2.915, latitude: 43.5564, locality: "Olargues" },
  { longitude: 4.1606, latitude: 49.7412, locality: "Parfondeval" },
  { longitude: 5.1803, latitude: 45.9036, locality: "Pérouges" },
  { longitude: 5.5655, latitude: 47.2797, locality: "Pesmes" },
  { longitude: 2.9987, latitude: 44.0914, locality: "Comprégnac" },
  { longitude: 8.6363, latitude: 42.2388, locality: "Piana" },
  { longitude: 3.860029167, latitude: 45.0693, locality: "Polignac" },
  { longitude: 3.8825, latitude: 44.7696, locality: "Pradelles" },
  { longitude: 0.6878, latitude: 44.3856, locality: "Pujols" },
  { longitude: 1.7108, latitude: 43.9929, locality: "Puycelsi" },
  { longitude: 7.298, latitude: 48.1662, locality: "Riquewihr" },
  { longitude: 1.618129167, latitude: 44.7993, locality: "Rocamadour" },
  { longitude: -2.3356, latitude: 47.7, locality: "Rochefort-en-Terre" },
  { longitude: 6.2369, latitude: 49.4694, locality: "Rodemack" },
  { longitude: 5.2937, latitude: 43.902, locality: "Roussillon" },
  { longitude: 1.2482, latitude: 45.0639, locality: "Saint-Amand-de-Coly" },
  { longitude: 5.2172, latitude: 45.1746, locality: "Saint-Antoine-l'Abbaye" },
  { longitude: 1.3913, latitude: 46.4409, locality: "Saint-Benoît-du-Sault" },
  {
    longitude: 0.571429167,
    latitude: 43.0272,
    locality: "Saint-Bertrand-de-Comminges",
  },
  { longitude: -0.0523, latitude: 48.3804, locality: "Saint-Céneri-le-Gérei" },
  { longitude: 1.6703, latitude: 44.4645, locality: "Saint-Cirq-Lapopie" },
  { longitude: 2.8151, latitude: 44.5158, locality: "Saint-Côme-d’Olt" },
  { longitude: 7.4618, latitude: 43.8003, locality: "Sainte-Agnès" },
  { longitude: 4.6475, latitude: 45.4797, locality: "Sainte-Croix-en-Jarez" },
  { longitude: 3.4118, latitude: 44.3664, locality: "Gorges du Tarn Causses" },
  { longitude: 2.9465, latitude: 44.4645, locality: "Sainte-Eulalie-d’Olt" },
  { longitude: -0.352, latitude: 48.0978, locality: "Sainte-Suzanne" },
  { longitude: 3.5504, latitude: 43.7337, locality: "Saint-Guilhem-le-Désert" },
  { longitude: 0.8387, latitude: 45.4212, locality: "Saint-Jean-de-Côle" },
  {
    longitude: -1.235770833,
    latitude: 43.164,
    locality: "Saint-Jean-Pied-de-Port",
  },
  { longitude: 1.0898, latitude: 45.0108, locality: "Saint-Léon-sur-Vézère" },
  { longitude: 7.0649, latitude: 48.6099, locality: "Saint-Quirin" },
  { longitude: 1.2941, latitude: 45.2556, locality: "Saint-Robert" },
  { longitude: -1.972, latitude: 48.5703, locality: "Saint-Suliac" },
  { longitude: 6.8687, latitude: 44.7003, locality: "Saint-Véran" },
  { longitude: 2.4947, latitude: 45.1386, locality: "Salers" },
  { longitude: 2.839429167, latitude: 47.331, locality: "Sancerre" },
  { longitude: 8.9054, latitude: 42.5889, locality: "Sant’Antonino" },
  { longitude: -1.5796, latitude: 43.3125, locality: "Sare" },
  { longitude: 0.9296, latitude: 43.7742, locality: "Sarrant" },
  { longitude: 2.3183, latitude: 44.2206, locality: "Sauveterre-de-Rouergue" },
  { longitude: 5.0237, latitude: 44.2062, locality: "Séguret" },
  { longitude: 1.3058, latitude: 45.4293, locality: "Ségur-le-Château" },
  { longitude: 6.6437, latitude: 43.6365, locality: "Seillans" },
  { longitude: 4.0913, latitude: 46.2627, locality: "Semur-en-Brionnais" },
  { longitude: -0.9073, latitude: 45.5355, locality: "Talmont-sur-Gironde" },
  { longitude: 2.483, latitude: 45.054, locality: "Tournemire" },
  { longitude: 0.996229167, latitude: 44.3997, locality: "Tournon-d’Agenais" },
  { longitude: 6.3026, latitude: 43.5897, locality: "Tourtour" },
  { longitude: 1.583, latitude: 45.054, locality: "Turenne" },
  { longitude: 3.3398, latitude: 45.5274, locality: "Usson" },
  { longitude: 5.147, latitude: 43.9956, locality: "Venasque" },
  { longitude: 0.8, latitude: 49.8735, locality: "Veules-les-Roses" },
  { longitude: 3.74759778175, latitude: 47.4662756129, locality: "Vézelay" },
  {
    longitude: 2.3687,
    latitude: 42.5871,
    locality: "Villefranche-de-Conflent",
  },
  { longitude: 0.744229167, latitude: 44.6364, locality: "Villeréal" },
  { longitude: 4.4153, latitude: 44.5509, locality: "Vogüé" },
  { longitude: -0.7687, latitude: 46.5723, locality: "Vouvant" },
  { longitude: 2.3337, latitude: 48.16, locality: "Yèvre-la-Ville" },
  { longitude: 6.3269, latitude: 46.3698, locality: "Yvoire" },
];

const div = d3.select("body").append("div");

const header = div.append("header");
header.append("h1").text("Beauteous Villages");
header
  .append("p")
  .html(
    '<a href="https://www.les-plus-beaux-villages-de-france.org">Les Plus Beaux Village de France</a> celebrates the most beautiful villages of France. <br/>In these communities the association promotes sites of historical importance, peculiar landscapes and local traditions.'
  );

const size = 600;

const svg = div.append("svg").attr("viewBox", `0 0 ${size} ${size}`);

svg
  .append("g")
  .attr("transform", `translate(${size / 2} ${size / 2})`)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .append("text")
  .text("Loading data");

(async () => {
  const world = await d3.json(
    "https://unpkg.com/world-atlas@2.0.2/countries-50m.json"
  );

  const countries = topojson.feature(world, world.objects.countries);

  const [feature] = countries.features.filter(
    (d) => d.properties.name === "France"
  );

  const projection = d3
    .geoMercator()
    .fitSize([size, size], countries)
    .rotate([-2.8, -46.7])
    .scale(3000);

  const path = d3.geoPath().projection(projection);

  svg
    .select("g")
    .style("opacity", 1)
    .transition()
    .delay(500)
    .duration(500)
    .ease(d3.easeQuadOut)
    .style("opacity", 0)
    .remove()
    .on("end", () => {
      const group = svg.append("g");

      const groupIntro = group.append("g");
      const groupGeoJSON = group.append("g");
      const groupData = group.append("g");
      const groupHighlight = group.append("g");

      const textIntro = groupIntro
        .append("text")
        .attr("font-size", "18")
        .attr("transform", "translate(0 24)");

      textIntro.append("tspan").text("As of October 2022 there are");

      const numberIntro = textIntro
        .append("tspan")
        .attr("dx", "5")
        .attr("font-size", "24")
        .attr("font-weight", "bold")
        .text(data.length);

      textIntro
        .append("tspan")
        .attr("x", "0")
        .attr("font-style", "italic")
        .attr("y", "26")
        .text("beautiful villages");

      groupGeoJSON
        .append("path")
        .datum(feature)
        .attr("d", path)
        .attr("fill", "rgb(249, 161, 91)")
        .attr("stroke", "rgba(255, 255, 255, 0.8)")
        .attr("stroke-width", "1");

      groupData
        .selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr(
          "transform",
          ({ longitude, latitude }) =>
            `translate(${projection([longitude, latitude])})`
        )
        .attr("fill", "hsl(0, 0%, 27%)")
        .attr("r", "3");

      const hX = 5;
      const hY = size - 24;

      const { locality, longitude, latitude } =
        data[Math.floor(Math.random() * data.length)];
      const [x, y] = projection([longitude, latitude]);

      groupHighlight
        .append("path")
        .attr("fill", "none")
        .attr("stroke", "hsl(0, 0%, 27%)")
        .attr("stroke-width", "1")
        .attr("d", `M ${hX} ${hY} v -15 L ${x} ${y}`);

      groupHighlight
        .append("circle")
        .attr("fill", "hsl(0, 0%, 27%)")
        .attr("stroke", "hsl(0, 0%, 97%)")
        .attr("stroke-width", "1")
        .attr("r", "6")
        .attr("transform", `translate(${x} ${y})`);

      const groupDetails = groupHighlight
        .append("g")
        .attr("transform", `translate(${hX} ${hY})`);

      groupDetails.append("circle").attr("r", "5");

      const textDetails = groupDetails
        .append("text")
        .attr("font-size", "18")
        .attr("x", "10")
        .attr("y", "5");

      textDetails.append("tspan").text("Villages such as ");

      textDetails
        .append("tspan")
        .attr("dx", "2")
        .attr("font-size", "24")
        .attr("font-weight", "bold")
        .text(locality);

      const delaunay = d3.Delaunay.from(
        data.map(({ longitude, latitude }) => projection([longitude, latitude]))
      );

      const voronoi = delaunay.voronoi([0, 0, size, size]);

      const cellsHighlight = groupHighlight
        .append("g")
        .selectAll("path")
        .data(data)
        .enter()
        .append("path")
        .attr("opacity", 0)
        .attr("d", (d, i) => voronoi.renderCell(i));

      cellsHighlight.on("pointerenter", function (e, d) {
        const i = cellsHighlight.nodes().indexOf(this);

        const { locality, longitude, latitude } = data[i];
        const [x, y] = projection([longitude, latitude]);

        groupHighlight
          .select("path")
          .attr("d", `M ${hX} ${hY} v -15 L ${x} ${y}`);

        groupHighlight
          .select("circle")
          .attr("transform", `translate(${x} ${y})`);

        textDetails.select("tspan:last-of-type").text(locality);
      });
    });
})();
