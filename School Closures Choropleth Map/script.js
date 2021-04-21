async function drawMap() {
  const world = await d3.json(
    'https://unpkg.com/world-atlas@2.0.2/countries-110m.json'
  );

  const data = [
    { "id": "004", "country": "Afghanistan", "weeks": 31 },
    { "id": "008", "country": "Albania", "weeks": 24 },
    { "id": "012", "country": "Algeria", "weeks": 21 },
    { "id": "020", "country": "Andorra", "weeks": 16 },
    { "id": "024", "country": "Angola", "weeks": 46 },
    { "id": "660", "country": "Anguilla", "weeks": 16 },
    { "id": "028", "country": "Antigua and Barbuda", "weeks": 41 },
    { "id": "032", "country": "Argentina", "weeks": 46 },
    { "id": "051", "country": "Armenia", "weeks": 12 },
    { "id": "533", "country": "Aruba", "weeks": 13 },
    { "id": "036", "country": "Australia", "weeks": 27 },
    { "id": "040", "country": "Austria", "weeks": 27 },
    { "id": "031", "country": "Azerbaijan", "weeks": 37 },
    { "id": "044", "country": "Bahamas", "weeks": 41 },
    { "id": "048", "country": "Bahrain", "weeks": 44 },
    { "id": "050", "country": "Bangladesh", "weeks": 47 },
    { "id": "052", "country": "Barbados", "weeks": 31 },
    { "id": "112", "country": "Belarus", "weeks": 0 },
    { "id": "056", "country": "Belgium", "weeks": 15 },
    { "id": "084", "country": "Belize", "weeks": 38 },
    { "id": "204", "country": "Benin", "weeks": 15 },
    { "id": "060", "country": "Bermuda", "weeks": 29 },
    { "id": "064", "country": "Bhutan", "weeks": 49 },
    { "id": "068", "country": "Bolivia", "weeks": 47 },
    { "id": "070", "country": "Bosnia and Herzegovina", "weeks": 38 },
    { "id": "072", "country": "Botswana", "weeks": 20 },
    { "id": "076", "country": "Brazil", "weeks": 44 },
    { "id": "092", "country": "British Virgin Islands", "weeks": 40 },
    { "id": "096", "country": "Brunei Darussalam", "weeks": 17 },
    { "id": "100", "country": "Bulgaria", "weeks": 32 },
    { "id": "854", "country": "Burkina Faso", "weeks": 14 },
    { "id": "108", "country": "Burundi", "weeks": 0 },
    { "id": "132", "country": "Cabo Verde", "weeks": 20 },
    { "id": "116", "country": "Cambodia", "weeks": 29 },
    { "id": "120", "country": "Cameroon", "weeks": 18 },
    { "id": "124", "country": "Canada", "weeks": 40 },
    { "id": "136", "country": "Cayman Islands", "weeks": 17 },
    { "id": "140", "country": "Central African republic", "weeks": 23 },
    { "id": "148", "country": "Chad", "weeks": 28 },
    { "id": "152", "country": "Chile", "weeks": 44 },
    { "id": "156", "country": "China", "weeks": 27 },
    { "id": "170", "country": "Colombia", "weeks": 43 },
    { "id": "174", "country": "Comoros", "weeks": 35 },
    { "id": "178", "country": "Congo", "weeks": 26 },
    { "id": "184", "country": "Cook Islands", "weeks": 4 },
    { "id": "188", "country": "Costa Rica", "weeks": 46 },
    { "id": "384", "country": "Cote d'Ivoire", "weeks": 13 },
    { "id": "191", "country": "Croatia", "weeks": 10 },
    { "id": "192", "country": "Cuba", "weeks": 24 },
    { "id": "531", "country": "Curaçao", "weeks": 9 },
    { "id": "196", "country": "Cyprus", "weeks": 25 },
    { "id": "203", "country": "Czechia", "weeks": 38 },
    { "id": "408", "country": "Democratic People's Republic of Korea", "weeks": 36 },
    { "id": "180", "country": "Democratic Republic of the Congo", "weeks": 33 },
    { "id": "208", "country": "Denmark", "weeks": 23 },
    { "id": "262", "country": "Djibouti", "weeks": 7 },
    { "id": "212", "country": "Dominica", "weeks": 17 },
    { "id": "214", "country": "Dominican Republic", "weeks": 32 },
    { "id": "218", "country": "Ecuador", "weeks": 44 },
    { "id": "818", "country": "Egypt", "weeks": 19 },
    { "id": "222", "country": "El Salvador", "weeks": 45 },
    { "id": "226", "country": "Equatorial Guinea", "weeks": 22 },
    { "id": "232", "country": "Eritrea", "weeks": 49 },
    { "id": "233", "country": "Estonia", "weeks": 16 },
    { "id": "748", "country": "Eswatini", "weeks": 49 },
    { "id": "231", "country": "Ethiopia", "weeks": 31 },
    { "id": "234", "country": "Faroe Islands", "weeks": 7 },
    { "id": "242", "country": "Fiji", "weeks": 13 },
    { "id": "246", "country": "Finland", "weeks": 23 },
    { "id": "250", "country": "France", "weeks": 10 },
    { "id": "266", "country": "Gabon", "weeks": 21 },
    { "id": "270", "country": "Gambia", "weeks": 28 },
    { "id": "268", "country": "Georgia", "weeks": 32 },
    { "id": "276", "country": "Germany", "weeks": 28 },
    { "id": "288", "country": "Ghana", "weeks": 40 },
    { "id": "292", "country": "Gibraltar", "weeks": 20 },
    { "id": "300", "country": "Greece", "weeks": 32 },
    { "id": "304", "country": "Greenland", "weeks": 4 },
    { "id": "308", "country": "Grenada", "weeks": 45 },
    { "id": "320", "country": "Guatemala", "weeks": 45 },
    { "id": "324", "country": "Guinea", "weeks": 22 },
    { "id": "624", "country": "Guinea-Bissau", "weeks": 23 },
    { "id": "328", "country": "Guyana", "weeks": 45 },
    { "id": "332", "country": "Haiti", "weeks": 31 },
    { "id": "340", "country": "Honduras", "weeks": 46 },
    { "id": "348", "country": "Hungary", "weeks": 33 },
    { "id": "352", "country": "Iceland", "weeks": 6 },
    { "id": "356", "country": "India", "weeks": 51 },
    { "id": "360", "country": "Indonesia", "weeks": 48 },
    { "id": "364", "country": "Iran", "weeks": 45 },
    { "id": "368", "country": "Iraq", "weeks": 50 },
    { "id": "372", "country": "Ireland", "weeks": 26 },
    { "id": "376", "country": "Israel", "weeks": 33 },
    { "id": "380", "country": "Italy", "weeks": 35 },
    { "id": "388", "country": "Jamaica", "weeks": 37 },
    { "id": "392", "country": "Japan", "weeks": 11 },
    { "id": "400", "country": "Jordan", "weeks": 42 },
    { "id": "398", "country": "Kazakhstan", "weeks": 36 },
    { "id": "404", "country": "Kenya", "weeks": 37 },
    { "id": "296", "country": "Kiribati", "weeks": 3 },
    { "id": "414", "country": "Kuwait", "weeks": 42 },
    { "id": "417", "country": "Kyrgyzstan", "weeks": 38 },
    { "id": "418", "country": "Lao PDR", "weeks": 19 },
    { "id": "428", "country": "Latvia", "weeks": 36 },
    { "id": "422", "country": "Lebanon", "weeks": 37 },
    { "id": "426", "country": "Lesotho", "weeks": 41 },
    { "id": "430", "country": "Liberia", "weeks": 37 },
    { "id": "434", "country": "Libya", "weeks": 40 },
    { "id": "438", "country": "Liechtenstein", "weeks": 13 },
    { "id": "440", "country": "Lithuania", "weeks": 29 },
    { "id": "442", "country": "Luxembourg", "weeks": 15 },
    { "id": "450", "country": "Madagascar", "weeks": 16 },
    { "id": "454", "country": "Malawi", "weeks": 26 },
    { "id": "458", "country": "Malaysia", "weeks": 35 },
    { "id": "462", "country": "Maldives", "weeks": 16 },
    { "id": "466", "country": "Mali", "weeks": 17 },
    { "id": "470", "country": "Malta", "weeks": 19 },
    { "id": "584", "country": "Marshall Islands", "weeks": 2 },
    { "id": "478", "country": "Mauritania", "weeks": 23 },
    { "id": "480", "country": "Mauritius", "weeks": 8 },
    { "id": "484", "country": "Mexico", "weeks": 44 },
    { "id": "583", "country": "Micronesia", "weeks": 24 },
    { "id": "492", "country": "Monaco", "weeks": 13 },
    { "id": "496", "country": "Mongolia", "weeks": 34 },
    { "id": "499", "country": "Montenegro", "weeks": 36 },
    { "id": "500", "country": "Montserrat", "weeks": 22 },
    { "id": "504", "country": "Morocco", "weeks": 21 },
    { "id": "508", "country": "Mozambique", "weeks": 45 },
    { "id": "104", "country": "Myanmar", "weeks": 48 },
    { "id": "516", "country": "Namibia", "weeks": 25 },
    { "id": "520", "country": "Nauru", "weeks": 0 },
    { "id": "524", "country": "Nepal", "weeks": 53 },
    { "id": "528", "country": "Netherlands", "weeks": 22 },
    { "id": "554", "country": "New Zealand", "weeks": 9 },
    { "id": "558", "country": "Nicaragua", "weeks": 15 },
    { "id": "562", "country": "Niger", "weeks": 16 },
    { "id": "566", "country": "Nigeria", "weeks": 24 },
    { "id": "570", "country": "Niue", "weeks": 1 },
    { "id": "807", "country": "North Macedonia", "weeks": 43 },
    { "id": "578", "country": "Norway", "weeks": 19 },
    { "id": "512", "country": "Oman", "weeks": 26 },
    { "id": "586", "country": "Pakistan", "weeks": 33 },
    { "id": "585", "country": "Palau", "weeks": 8 },
    { "id": "275", "country": "Palestine", "weeks": 49 },
    { "id": "591", "country": "Panama", "weeks": 46 },
    { "id": "598", "country": "Papua New Guinea", "weeks": 6 },
    { "id": "600", "country": "Paraguay", "weeks": 40 },
    { "id": "604", "country": "Peru", "weeks": 42 },
    { "id": "608", "country": "Philippines", "weeks": 34 },
    { "id": "616", "country": "Poland", "weeks": 35 },
    { "id": "620", "country": "Portugal", "weeks": 21 },
    { "id": "634", "country": "Qatar", "weeks": 41 },
    { "id": "410", "country": "Republic of Korea", "weeks": 41 },
    { "id": "498", "country": "Republic of Moldova", "weeks": 16 },
    { "id": "642", "country": "Romania", "weeks": 32 },
    { "id": "643", "country": "Russian Federation", "weeks": 13 },
    { "id": "646", "country": "Rwanda", "weeks": 47 },
    { "id": "659", "country": "Saint Kitts and Nevis", "weeks": 11 },
    { "id": "662", "country": "Saint Lucia", "weeks": 40 },
    { "id": "670", "country": "Saint Vincent and the Grenadines", "weeks": 28 },
    { "id": "882", "country": "Samoa", "weeks": 4 },
    { "id": "674", "country": "San Marino", "weeks": 33 },
    { "id": "678", "country": "São Tomé and Príncipe", "weeks": 19 },
    { "id": "682", "country": "Saudi Arabia", "weeks": 41 },
    { "id": "686", "country": "Senegal", "weeks": 22 },
    { "id": "688", "country": "Serbia", "weeks": 34 },
    { "id": "690", "country": "Seychelles", "weeks": 19 },
    { "id": "694", "country": "Sierra Leone", "weeks": 14 },
    { "id": "702", "country": "Singapore", "weeks": 11 },
    { "id": "663", "country": "Saint Marteen", "weeks": 28 },
    { "id": "703", "country": "Slovakia", "weeks": 37 },
    { "id": "705", "country": "Slovenia", "weeks": 34 },
    { "id": "090", "country": "Solomon Islands", "weeks": 7 },
    { "id": "706", "country": "Somalia", "weeks": 15 },
    { "id": "710", "country": "South Africa", "weeks": 29 },
    { "id": "728", "country": "South Sudan", "weeks": 49 },
    { "id": "724", "country": "Spain", "weeks": 15 },
    { "id": "144", "country": "Sri Lanka", "weeks": 43 },
    { "id": "729", "country": "Sudan", "weeks": 22 },
    { "id": "740", "country": "Suriname", "weeks": 20 },
    { "id": "744", "country": "Svalbard", "weeks": 19 },
    { "id": "752", "country": "Sweden", "weeks": 23 },
    { "id": "756", "country": "Switzerland", "weeks": 6 },
    { "id": "760", "country": "Syrian Arab Republic", "weeks": 29 },
    { "id": "762", "country": "Tajikistan", "weeks": 0 },
    { "id": "764", "country": "Thailand", "weeks": 25 },
    { "id": "626", "country": "Timor-Leste", "weeks": 11 },
    { "id": "768", "country": "Togo", "weeks": 14 },
    { "id": "772", "country": "Tokelau", "weeks": 4 },
    { "id": "776", "country": "Tonga", "weeks": 3 },
    { "id": "780", "country": "Trinidad and Tobago", "weeks": 40 },
    { "id": "788", "country": "Tunisia", "weeks": 28 },
    { "id": "792", "country": "Turkey", "weeks": 38 },
    { "id": "795", "country": "Turkmenistan", "weeks": 0 },
    { "id": "796", "country": "Turks and Caicos Island", "weeks": 21 },
    { "id": "798", "country": "Tuvalu", "weeks": 12 },
    { "id": "800", "country": "Uganda", "weeks": 50 },
    { "id": "804", "country": "Ukraine", "weeks": 19 },
    { "id": "784", "country": "United Arab Emirates", "weeks": 42 },
    { "id": "826", "country": "United Kingdom of Great Britain and Northern Ireland", "weeks": 27 },
    { "id": "834", "country": "United Republic of Tanzania", "weeks": 15 },
    { "id": "840", "country": "United States of America", "weeks": 47 },
    { "id": "858", "country": "Uruguay", "weeks": 27 },
    { "id": "860", "country": "Uzbekistan", "weeks": 12 },
    { "id": "548", "country": "Vanuatu", "weeks": 4 },
    { "id": "862", "country": "Venezuela", "weeks": 38 },
    { "id": "704", "country": "Viet Nam", "weeks": 14 },
    { "id": "887", "country": "Yemen", "weeks": 19 },
    { "id": "894", "country": "Zambia", "weeks": 18 },
    { "id": "716", "country": "Zimbabwe", "weeks": 34 }
  ];

  const dataMap = d3.group(data, d => d.id);

  const groups = [
    {
      label: 'No data',
      threshold: -Infinity,
    },
    {
      label: '0 weeks',
      threshold: 0,
    },
    {
      label: '1-10 weeks',
      threshold: 10,
    },
    {
      label: '11-20 weeks',
      threshold: 20,
    },
    {
      label: '21-30 weeks',
      threshold: 30,
    },
    {
      label: '31-40 weeks',
      threshold: 40,
    },
    {
      label: '41+ weeks',
      threshold: Infinity,
    },
  ];

  const colors = d3.schemePuBu[groups.length];

  const width = 800;
  const sphere = { type: 'Sphere' };
  const projection = d3.geoNaturalEarth1().fitWidth(width, sphere);
  const pathGenerator = d3.geoPath(projection);
  const height = pathGenerator.bounds(sphere)[1][1];

  const root = d3.select('main');

  const tooltip = root
    .append('div')
    .attr('id', 'tooltip')
    .style('opacity', 0);

  root.append('h1').text('Total duration of school closures');

  const wrapper = root
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [0, 0, width, height]);

  const bounds = wrapper.append('g');
  const worldGroup = bounds.append('g');
  const legendGroup = bounds.append('g');

  // worldGroup
  //   .append('path')
  //   .attr('d', pathGenerator(sphere))
  //   .attr('fill', 'hsl(220, 72%, 98%)')
  //   .attr('stroke', 'none');

  // const graticuleJson = d3.geoGraticule10();
  // worldGroup
  //   .append('path')
  //   .attr('d', pathGenerator(graticuleJson))
  //   .attr('fill', 'none')
  //   .attr('stroke-width', '0.2')
  //   .attr('stroke', 'hsl(220, 72%, 68%)');

  const countries = topojson.feature(world, world.objects.countries);

  worldGroup
    .append('g')
    .selectAll('path')
    .data(countries.features.filter(d => d.properties.name !== 'Antarctica'))
    .enter()
    .append('path')
    .attr('d', pathGenerator)
    .attr('fill', ({ id }) => {
      if (dataMap.has(id)) {
        const { weeks } = dataMap.get(id)[0];
        return colors[groups.findIndex(({ threshold }) => weeks <= threshold)];
      }
      return colors[0];
    })
    .attr('stroke-width', '0.1')
    .attr('stroke', 'hsl(214, 72%, 64%)')
    .on('mouseenter', function(e, d) {
      const { id } = d;
      if (dataMap.has(id)) {
        d3.select(this).style('filter', 'brightness(1.5)');
        const { weeks, country } = dataMap.get(id)[0];

        tooltip.append('h2').text(country);

        tooltip.append('p').text(`${weeks} weeks`);

        const [x, y] = pathGenerator.centroid(d);

        tooltip
          .style('transform', `translate(${x}px, ${y}px)`)
          .style('opacity', 1);
      }
    })
    .on('mouseleave', function() {
      d3.select(this).style('filter', 'brightness(1)');

      tooltip
        .style('opacity', 0)
        .selectAll('*')
        .remove();
    });

  legendGroup.attr('transform', `translate(20 ${height / 1.5})`);

  const legendGroups = legendGroup
    .selectAll('g')
    .data(groups)
    .enter()
    .append('g')
    .attr(
      'transform',
      (d, i) => `translate(0 ${(height / 2.5 / (groups.length + 1)) * i})`
    );

  legendGroups
    .append('circle')
    .attr('r', 4)
    .attr('fill', (d, i) => colors[i]);

  legendGroups
    .append('text')
    .attr('dominant-baseline', 'middle')
    .attr('x', 18)
    .attr('font-size', 12)
    .text(({ label }) => label);

  root
    .append('a')
    .attr('href', 'https://en.unesco.org/covid19/educationresponse')
    .text('Source');
}

drawMap();
