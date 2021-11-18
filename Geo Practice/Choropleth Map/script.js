const { select, json, geoPath, geoLarrivee, interpolateBlues, scaleLinear } =
  d3;
const { feature } = topojson;

// https://ourworldindata.org/
const data = {
  Afghanistan: {
    date: "2021-11-14",
    people_vaccinated_per_hundred: 8.86,
    people_fully_vaccinated_per_hundred: 8,
  },
  Africa: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 9.81,
    people_fully_vaccinated_per_hundred: 6.65,
  },
  Albania: {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 36.6,
    people_fully_vaccinated_per_hundred: 32.39,
  },
  Algeria: {
    date: "2021-11-13",
    people_vaccinated_per_hundred: 14.45,
    people_fully_vaccinated_per_hundred: 11.05,
  },
  Andorra: {
    date: "2021-10-31",
    people_vaccinated_per_hundred: 71.1,
    people_fully_vaccinated_per_hundred: 64.04,
  },
  Angola: {
    date: "2021-11-11",
    people_vaccinated_per_hundred: 17.1,
    people_fully_vaccinated_per_hundred: 5.91,
  },
  Anguilla: {
    date: "2021-11-12",
    people_vaccinated_per_hundred: 63.63,
    people_fully_vaccinated_per_hundred: 60.55,
  },
  "Antigua and Barbuda": {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 60.86,
    people_fully_vaccinated_per_hundred: 54.92,
  },
  Argentina: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 78.8,
    people_fully_vaccinated_per_hundred: 61.08,
  },
  Armenia: {
    date: "2021-10-31",
    people_vaccinated_per_hundred: 19.52,
    people_fully_vaccinated_per_hundred: 8.51,
  },
  Aruba: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 77.72,
    people_fully_vaccinated_per_hundred: 72.36,
  },
  Asia: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 60.38,
    people_fully_vaccinated_per_hundred: 45.89,
  },
  Australia: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 76.33,
    people_fully_vaccinated_per_hundred: 70.25,
  },
  Austria: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 68.23,
    people_fully_vaccinated_per_hundred: 63.88,
  },
  Azerbaijan: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 49.23,
    people_fully_vaccinated_per_hundred: 44,
  },
  Bahamas: {
    date: "2021-11-05",
    people_vaccinated_per_hundred: 36.21,
    people_fully_vaccinated_per_hundred: 32.31,
  },
  Bahrain: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 67.76,
    people_fully_vaccinated_per_hundred: 65.79,
  },
  Bangladesh: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 31.58,
    people_fully_vaccinated_per_hundred: 20.29,
  },
  Barbados: {
    date: "2021-11-15",
    people_vaccinated_per_hundred: 52.79,
    people_fully_vaccinated_per_hundred: 46.15,
  },
  Belarus: {
    date: "2021-11-07",
    people_vaccinated_per_hundred: 32.95,
    people_fully_vaccinated_per_hundred: 24.34,
  },
  Belgium: {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 75.45,
    people_fully_vaccinated_per_hundred: 74.22,
  },
  Belize: {
    date: "2021-11-12",
    people_vaccinated_per_hundred: 55.83,
    people_fully_vaccinated_per_hundred: 46.35,
  },
  Benin: {
    date: "2021-11-08",
    people_vaccinated_per_hundred: 2.45,
    people_fully_vaccinated_per_hundred: 2.13,
  },
  Bermuda: {
    date: "2021-11-05",
    people_vaccinated_per_hundred: 78.05,
    people_fully_vaccinated_per_hundred: 76.28,
  },
  Bhutan: {
    date: "2021-10-31",
    people_vaccinated_per_hundred: 75.43,
    people_fully_vaccinated_per_hundred: 71.78,
  },
  Bolivia: {
    date: "2021-11-11",
    people_vaccinated_per_hundred: 39.62,
    people_fully_vaccinated_per_hundred: 33.37,
  },
  "Bonaire Sint Eustatius and Saba": {
    date: "2021-09-01",
    people_vaccinated_per_hundred: 72.26,
    people_fully_vaccinated_per_hundred: 63.29,
  },
  "Bosnia and Herz.": {
    date: "2021-11-04",
    people_vaccinated_per_hundred: 25.53,
    people_fully_vaccinated_per_hundred: 22.08,
  },
  Botswana: {
    date: "2021-11-10",
    people_vaccinated_per_hundred: 32.16,
    people_fully_vaccinated_per_hundred: 14.9,
  },
  Brazil: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 75.91,
    people_fully_vaccinated_per_hundred: 60.04,
  },
  "British Virgin Islands": {
    date: "2021-11-12",
    people_vaccinated_per_hundred: 59.62,
    people_fully_vaccinated_per_hundred: 54.14,
  },
  Brunei: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 88.48,
    people_fully_vaccinated_per_hundred: 69.98,
  },
  Bulgaria: {
    date: "2021-08-17",
    people_vaccinated_per_hundred: 15.79,
    people_fully_vaccinated_per_hundred: 15.76,
  },
  "Burkina Faso": {
    date: "2021-11-04",
    people_vaccinated_per_hundred: 1.7,
    people_fully_vaccinated_per_hundred: 1.38,
  },
  Burundi: {
    date: "2021-11-12",
    people_vaccinated_per_hundred: 0.01,
    people_fully_vaccinated_per_hundred: 0,
  },
  Cambodia: {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 83.08,
    people_fully_vaccinated_per_hundred: 78.04,
  },
  Cameroon: {
    date: "2021-11-12",
    people_vaccinated_per_hundred: 1.59,
    people_fully_vaccinated_per_hundred: 0.65,
  },
  Canada: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 79.08,
    people_fully_vaccinated_per_hundred: 75.56,
  },
  "Cape Verde": {
    date: "2021-11-10",
    people_vaccinated_per_hundred: 52.6,
    people_fully_vaccinated_per_hundred: 41.17,
  },
  "Cayman Islands": {
    date: "2021-11-12",
    people_vaccinated_per_hundred: 86.25,
    people_fully_vaccinated_per_hundred: 82.95,
  },
  "Central African Rep.": {
    date: "2021-11-07",
    people_vaccinated_per_hundred: 7.36,
    people_fully_vaccinated_per_hundred: 6.54,
  },
  Chad: {
    date: "2021-11-10",
    people_vaccinated_per_hundred: 1.02,
    people_fully_vaccinated_per_hundred: 0.39,
  },
  Chile: {
    date: "2021-11-14",
    people_vaccinated_per_hundred: 86.95,
    people_fully_vaccinated_per_hundred: 81.89,
  },
  China: {
    date: "2021-11-12",
    people_vaccinated_per_hundred: 82.07,
    people_fully_vaccinated_per_hundred: 74.35,
  },
  Colombia: {
    date: "2021-11-15",
    people_vaccinated_per_hundred: 65.29,
    people_fully_vaccinated_per_hundred: 44.84,
  },
  Comoros: {
    date: "2021-11-14",
    people_vaccinated_per_hundred: 31.31,
    people_fully_vaccinated_per_hundred: 22.31,
  },
  Congo: {
    date: "2021-11-10",
    people_vaccinated_per_hundred: 7.49,
    people_fully_vaccinated_per_hundred: 2.22,
  },
  "Cook Islands": {
    date: "2021-11-08",
    people_vaccinated_per_hundred: 71.7,
    people_fully_vaccinated_per_hundred: 66.73,
  },
  "Costa Rica": {
    date: "2021-11-15",
    people_vaccinated_per_hundred: 74.37,
    people_fully_vaccinated_per_hundred: 58.97,
  },
  "Côte d'Ivoire": {
    date: "2021-11-14",
    people_vaccinated_per_hundred: 9.49,
    people_fully_vaccinated_per_hundred: 4.14,
  },
  Croatia: {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 50.88,
    people_fully_vaccinated_per_hundred: 45.89,
  },
  Cuba: {
    date: "2021-11-15",
    people_vaccinated_per_hundred: 89.19,
    people_fully_vaccinated_per_hundred: 77.83,
  },
  Curacao: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 61.99,
    people_fully_vaccinated_per_hundred: 57.11,
  },
  Cyprus: {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 68.24,
    people_fully_vaccinated_per_hundred: 64.29,
  },
  Czechia: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 60.17,
    people_fully_vaccinated_per_hundred: 57.94,
  },
  "Dem. Rep. Congo": {
    date: "2021-11-11",
    people_vaccinated_per_hundred: 0.13,
    people_fully_vaccinated_per_hundred: 0.05,
  },
  Denmark: {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 77.89,
    people_fully_vaccinated_per_hundred: 76.25,
  },
  Djibouti: {
    date: "2021-11-03",
    people_vaccinated_per_hundred: 6.59,
    people_fully_vaccinated_per_hundred: 2.6,
  },
  Dominica: {
    date: "2021-11-12",
    people_vaccinated_per_hundred: 39.08,
    people_fully_vaccinated_per_hundred: 35.68,
  },
  "Dominican Republic": {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 62.37,
    people_fully_vaccinated_per_hundred: 50.19,
  },
  Ecuador: {
    date: "2021-11-12",
    people_vaccinated_per_hundred: 72.22,
    people_fully_vaccinated_per_hundred: 58.51,
  },
  Egypt: {
    date: "2021-11-10",
    people_vaccinated_per_hundred: 20.26,
    people_fully_vaccinated_per_hundred: 12.73,
  },
  "El Salvador": {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 67.36,
    people_fully_vaccinated_per_hundred: 61.32,
  },
  England: {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 75.16,
    people_fully_vaccinated_per_hundred: 68.3,
  },
  "Equatorial Guinea": {
    date: "2021-11-15",
    people_vaccinated_per_hundred: 16.94,
    people_fully_vaccinated_per_hundred: 13.43,
  },
  Estonia: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 61.81,
    people_fully_vaccinated_per_hundred: 58.68,
  },
  Eswatini: {
    date: "2021-11-11",
    people_vaccinated_per_hundred: 22.09,
    people_fully_vaccinated_per_hundred: 21.29,
  },
  Ethiopia: {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 3.13,
    people_fully_vaccinated_per_hundred: 1.18,
  },
  Europe: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 61.37,
    people_fully_vaccinated_per_hundred: 56.66,
  },
  "European Union": {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 69.78,
    people_fully_vaccinated_per_hundred: 66.42,
  },
  "Faeroe Islands": {
    date: "2021-11-05",
    people_vaccinated_per_hundred: 81.96,
    people_fully_vaccinated_per_hundred: 77.76,
  },
  "Falkland Islands": {
    date: "2021-04-14",
    people_vaccinated_per_hundred: 74.6,
    people_fully_vaccinated_per_hundred: 50.31,
  },
  Fiji: {
    date: "2021-11-15",
    people_vaccinated_per_hundred: 70.05,
    people_fully_vaccinated_per_hundred: 63.83,
  },
  Finland: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 76.77,
    people_fully_vaccinated_per_hundred: 71.59,
  },
  France: {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 76.35,
    people_fully_vaccinated_per_hundred: 68.81,
  },
  "French Polynesia": {
    date: "2021-11-15",
    people_vaccinated_per_hundred: 56.4,
    people_fully_vaccinated_per_hundred: 54.32,
  },
  Gabon: {
    date: "2021-11-15",
    people_vaccinated_per_hundred: 6.53,
    people_fully_vaccinated_per_hundred: 4.75,
  },
  Gambia: {
    date: "2021-11-14",
    people_vaccinated_per_hundred: 9.51,
    people_fully_vaccinated_per_hundred: 8.95,
  },
  Georgia: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 27.65,
    people_fully_vaccinated_per_hundred: 24.47,
  },
  Germany: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 69.65,
    people_fully_vaccinated_per_hundred: 67.17,
  },
  Ghana: {
    date: "2021-11-10",
    people_vaccinated_per_hundred: 7.41,
    people_fully_vaccinated_per_hundred: 2.63,
  },
  Gibraltar: {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 121.06,
    people_fully_vaccinated_per_hundred: 118.18,
  },
  Greece: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 66.06,
    people_fully_vaccinated_per_hundred: 62.57,
  },
  Greenland: {
    date: "2021-11-04",
    people_vaccinated_per_hundred: 70.56,
    people_fully_vaccinated_per_hundred: 65.52,
  },
  Grenada: {
    date: "2021-11-12",
    people_vaccinated_per_hundred: 34.73,
    people_fully_vaccinated_per_hundred: 29.22,
  },
  Guatemala: {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 30.75,
    people_fully_vaccinated_per_hundred: 20.17,
  },
  Guinea: {
    date: "2021-11-10",
    people_vaccinated_per_hundred: 11.77,
    people_fully_vaccinated_per_hundred: 5.75,
  },
  "Guinea-Bissau": {
    date: "2021-11-15",
    people_vaccinated_per_hundred: 15.53,
    people_fully_vaccinated_per_hundred: 0.89,
  },
  Guyana: {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 49.66,
    people_fully_vaccinated_per_hundred: 33.33,
  },
  Haiti: {
    date: "2021-11-12",
    people_vaccinated_per_hundred: 0.91,
    people_fully_vaccinated_per_hundred: 0.42,
  },
  "High income": {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 72.98,
    people_fully_vaccinated_per_hundred: 66.67,
  },
  Honduras: {
    date: "2021-11-12",
    people_vaccinated_per_hundred: 39.33,
    people_fully_vaccinated_per_hundred: 36,
  },
  "Hong Kong": {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 62.01,
    people_fully_vaccinated_per_hundred: 59.37,
  },
  Hungary: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 62.41,
    people_fully_vaccinated_per_hundred: 60.05,
  },
  Iceland: {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 82.75,
    people_fully_vaccinated_per_hundred: 81.48,
  },
  India: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 54.42,
    people_fully_vaccinated_per_hundred: 27.47,
  },
  Indonesia: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 47.77,
    people_fully_vaccinated_per_hundred: 31.22,
  },
  Iran: {
    date: "2021-11-13",
    people_vaccinated_per_hundred: 65.36,
    people_fully_vaccinated_per_hundred: 49.61,
  },
  Iraq: {
    date: "2021-11-15",
    people_vaccinated_per_hundred: 16.17,
    people_fully_vaccinated_per_hundred: 9.77,
  },
  Ireland: {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 77.03,
    people_fully_vaccinated_per_hundred: 75.65,
  },
  "Isle of Man": {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 79.78,
    people_fully_vaccinated_per_hundred: 75.78,
  },
  Israel: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 67.4,
    people_fully_vaccinated_per_hundred: 61.99,
  },
  Italy: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 77.72,
    people_fully_vaccinated_per_hundred: 72.76,
  },
  Jamaica: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 21.4,
    people_fully_vaccinated_per_hundred: 16.28,
  },
  Japan: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 78.86,
    people_fully_vaccinated_per_hundred: 76.09,
  },
  Jersey: {
    date: "2021-11-10",
    people_vaccinated_per_hundred: 78.33,
    people_fully_vaccinated_per_hundred: 74.02,
  },
  Jordan: {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 39.51,
    people_fully_vaccinated_per_hundred: 35.44,
  },
  Kazakhstan: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 45.14,
    people_fully_vaccinated_per_hundred: 41.4,
  },
  Kenya: {
    date: "2021-11-15",
    people_vaccinated_per_hundred: 7.1,
    people_fully_vaccinated_per_hundred: 3.96,
  },
  Kiribati: {
    date: "2021-11-15",
    people_vaccinated_per_hundred: 47.55,
    people_fully_vaccinated_per_hundred: 12.51,
  },
  Kosovo: {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 47.48,
    people_fully_vaccinated_per_hundred: 42.15,
  },
  Kuwait: {
    date: "2021-07-03",
    people_vaccinated_per_hundred: 33.55,
    people_fully_vaccinated_per_hundred: 21.33,
  },
  Kyrgyzstan: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 15.98,
    people_fully_vaccinated_per_hundred: 12.63,
  },
  Laos: {
    date: "2021-10-28",
    people_vaccinated_per_hundred: 44.07,
    people_fully_vaccinated_per_hundred: 37.63,
  },
  Latvia: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 66.77,
    people_fully_vaccinated_per_hundred: 60.6,
  },
  Lebanon: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 27.41,
    people_fully_vaccinated_per_hundred: 24.03,
  },
  Lesotho: {
    date: "2021-10-10",
    people_vaccinated_per_hundred: 16.11,
    people_fully_vaccinated_per_hundred: 15.72,
  },
  Liberia: {
    date: "2021-11-02",
    people_vaccinated_per_hundred: 7.61,
    people_fully_vaccinated_per_hundred: 7.17,
  },
  Libya: {
    date: "2021-11-14",
    people_vaccinated_per_hundred: 23.07,
    people_fully_vaccinated_per_hundred: 7.82,
  },
  Liechtenstein: {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 66.8,
    people_fully_vaccinated_per_hundred: 64.86,
  },
  Lithuania: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 68.62,
    people_fully_vaccinated_per_hundred: 65.31,
  },
  Macao: {
    date: "2021-11-04",
    people_vaccinated_per_hundred: 70.6,
    people_fully_vaccinated_per_hundred: 54.97,
  },
  Madagascar: {
    date: "2021-10-20",
    people_vaccinated_per_hundred: 1.34,
    people_fully_vaccinated_per_hundred: 0.65,
  },
  Malawi: {
    date: "2021-11-15",
    people_vaccinated_per_hundred: 5.35,
    people_fully_vaccinated_per_hundred: 2.96,
  },
  Malaysia: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 78.1,
    people_fully_vaccinated_per_hundred: 75.94,
  },
  Maldives: {
    date: "2021-11-15",
    people_vaccinated_per_hundred: 72.68,
    people_fully_vaccinated_per_hundred: 66.44,
  },
  Mali: {
    date: "2021-11-02",
    people_vaccinated_per_hundred: 1.56,
    people_fully_vaccinated_per_hundred: 1.3,
  },
  Malta: {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 84.06,
    people_fully_vaccinated_per_hundred: 83.5,
  },
  Mauritania: {
    date: "2021-11-15",
    people_vaccinated_per_hundred: 21.58,
    people_fully_vaccinated_per_hundred: 13.89,
  },
  Mauritius: {
    date: "2021-11-10",
    people_vaccinated_per_hundred: 71.16,
    people_fully_vaccinated_per_hundred: 67.39,
  },
  Mexico: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 57.96,
    people_fully_vaccinated_per_hundred: 48.74,
  },
  Moldova: {
    date: "2021-08-06",
    people_vaccinated_per_hundred: 13.94,
    people_fully_vaccinated_per_hundred: 13.14,
  },
  Monaco: {
    date: "2021-09-16",
    people_vaccinated_per_hundred: 67.49,
    people_fully_vaccinated_per_hundred: 58.98,
  },
  Mongolia: {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 67.82,
    people_fully_vaccinated_per_hundred: 64.45,
  },
  Montenegro: {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 42.45,
    people_fully_vaccinated_per_hundred: 39.75,
  },
  Montserrat: {
    date: "2021-11-12",
    people_vaccinated_per_hundred: 30.74,
    people_fully_vaccinated_per_hundred: 28.45,
  },
  Morocco: {
    date: "2021-11-14",
    people_vaccinated_per_hundred: 65.49,
    people_fully_vaccinated_per_hundred: 60.23,
  },
  Mozambique: {
    date: "2021-11-10",
    people_vaccinated_per_hundred: 15.11,
    people_fully_vaccinated_per_hundred: 8.09,
  },
  Myanmar: {
    date: "2021-11-06",
    people_vaccinated_per_hundred: 25.37,
    people_fully_vaccinated_per_hundred: 15.05,
  },
  Namibia: {
    date: "2021-11-10",
    people_vaccinated_per_hundred: 13.13,
    people_fully_vaccinated_per_hundred: 10.61,
  },
  Nauru: {
    date: "2021-08-31",
    people_vaccinated_per_hundred: 70.01,
    people_fully_vaccinated_per_hundred: 66.69,
  },
  Nepal: {
    date: "2021-11-07",
    people_vaccinated_per_hundred: 29.44,
    people_fully_vaccinated_per_hundred: 25.06,
  },
  Netherlands: {
    date: "2021-11-07",
    people_vaccinated_per_hundred: 76.31,
    people_fully_vaccinated_per_hundred: 73.2,
  },
  "New Caledonia": {
    date: "2021-11-15",
    people_vaccinated_per_hundred: 61.83,
    people_fully_vaccinated_per_hundred: 57.11,
  },
  "New Zealand": {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 74.56,
    people_fully_vaccinated_per_hundred: 67.48,
  },
  Nicaragua: {
    date: "2021-11-05",
    people_vaccinated_per_hundred: 18.64,
    people_fully_vaccinated_per_hundred: 8.4,
  },
  Niger: {
    date: "2021-11-14",
    people_vaccinated_per_hundred: 2.01,
    people_fully_vaccinated_per_hundred: 1.82,
  },
  Nigeria: {
    date: "2021-11-11",
    people_vaccinated_per_hundred: 2.75,
    people_fully_vaccinated_per_hundred: 1.51,
  },
  Niue: {
    date: "2021-08-02",
    people_vaccinated_per_hundred: 74.47,
    people_fully_vaccinated_per_hundred: 71.25,
  },
  "North America": {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 62.91,
    people_fully_vaccinated_per_hundred: 53.68,
  },
  "North Macedonia": {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 41.87,
    people_fully_vaccinated_per_hundred: 37.74,
  },
  "Northern Cyprus": {
    date: "2021-11-12",
    people_vaccinated_per_hundred: 72.64,
    people_fully_vaccinated_per_hundred: 69.39,
  },
  "Northern Ireland": {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 71.16,
    people_fully_vaccinated_per_hundred: 66.32,
  },
  Norway: {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 77.26,
    people_fully_vaccinated_per_hundred: 69.16,
  },
  Oceania: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 58.24,
    people_fully_vaccinated_per_hundred: 52.8,
  },
  Oman: {
    date: "2021-11-09",
    people_vaccinated_per_hundred: 59.15,
    people_fully_vaccinated_per_hundred: 52.32,
  },
  Pakistan: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 34.93,
    people_fully_vaccinated_per_hundred: 21.65,
  },
  Palestine: {
    date: "2021-11-10",
    people_vaccinated_per_hundred: 35.92,
    people_fully_vaccinated_per_hundred: 25.3,
  },
  Panama: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 68.29,
    people_fully_vaccinated_per_hundred: 54.82,
  },
  "Papua New Guinea": {
    date: "2021-10-25",
    people_vaccinated_per_hundred: 2.02,
    people_fully_vaccinated_per_hundred: 1.17,
  },
  Paraguay: {
    date: "2021-11-12",
    people_vaccinated_per_hundred: 44.05,
    people_fully_vaccinated_per_hundred: 34.74,
  },
  Peru: {
    date: "2021-11-13",
    people_vaccinated_per_hundred: 62.74,
    people_fully_vaccinated_per_hundred: 49.41,
  },
  Philippines: {
    date: "2021-10-21",
    people_vaccinated_per_hundred: 29.68,
    people_fully_vaccinated_per_hundred: 22.6,
  },
  Pitcairn: {
    date: "2021-09-07",
    people_vaccinated_per_hundred: 100,
    people_fully_vaccinated_per_hundred: 100,
  },
  Poland: {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 54.26,
    people_fully_vaccinated_per_hundred: 53.38,
  },
  Portugal: {
    date: "2021-11-15",
    people_vaccinated_per_hundred: 89.04,
    people_fully_vaccinated_per_hundred: 87.78,
  },
  Qatar: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 80.54,
    people_fully_vaccinated_per_hundred: 75.7,
  },
  Romania: {
    date: "2021-09-27",
    people_vaccinated_per_hundred: 28.64,
    people_fully_vaccinated_per_hundred: 27.91,
  },
  Russia: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 42.9,
    people_fully_vaccinated_per_hundred: 35.8,
  },
  Rwanda: {
    date: "2021-11-11",
    people_vaccinated_per_hundred: 35.96,
    people_fully_vaccinated_per_hundred: 18.98,
  },
  "Saint Helena": {
    date: "2021-05-05",
    people_vaccinated_per_hundred: 71.55,
    people_fully_vaccinated_per_hundred: 57.93,
  },
  "Saint Kitts and Nevis": {
    date: "2021-11-12",
    people_vaccinated_per_hundred: 48.96,
    people_fully_vaccinated_per_hundred: 46.05,
  },
  "Saint Lucia": {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 28.71,
    people_fully_vaccinated_per_hundred: 23.99,
  },
  "Saint Vincent and the Grenadines": {
    date: "2021-11-15",
    people_vaccinated_per_hundred: 26.02,
    people_fully_vaccinated_per_hundred: 18.76,
  },
  Samoa: {
    date: "2021-11-15",
    people_vaccinated_per_hundred: 68.58,
    people_fully_vaccinated_per_hundred: 43.09,
  },
  "San Marino": {
    date: "2021-10-31",
    people_vaccinated_per_hundred: 74.02,
    people_fully_vaccinated_per_hundred: 65.65,
  },
  "Sao Tome and Principe": {
    date: "2021-11-10",
    people_vaccinated_per_hundred: 36.32,
    people_fully_vaccinated_per_hundred: 12.79,
  },
  "Saudi Arabia": {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 69.22,
    people_fully_vaccinated_per_hundred: 62.61,
  },
  Scotland: {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 79.27,
    people_fully_vaccinated_per_hundred: 71.93,
  },
  Senegal: {
    date: "2021-10-20",
    people_vaccinated_per_hundred: 7.45,
    people_fully_vaccinated_per_hundred: 5.11,
  },
  Serbia: {
    date: "2021-11-14",
    people_vaccinated_per_hundred: 46.76,
    people_fully_vaccinated_per_hundred: 44.42,
  },
  Seychelles: {
    date: "2021-11-15",
    people_vaccinated_per_hundred: 82.5,
    people_fully_vaccinated_per_hundred: 78.24,
  },
  "Sierra Leone": {
    date: "2021-11-10",
    people_vaccinated_per_hundred: 7.41,
    people_fully_vaccinated_per_hundred: 3.72,
  },
  Singapore: {
    date: "2021-11-05",
    people_vaccinated_per_hundred: 92.99,
    people_fully_vaccinated_per_hundred: 91.91,
  },
  "Sint Maarten (Dutch part)": {
    date: "2021-11-12",
    people_vaccinated_per_hundred: 61.35,
    people_fully_vaccinated_per_hundred: 56.46,
  },
  Slovakia: {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 46.7,
    people_fully_vaccinated_per_hundred: 42.62,
  },
  Slovenia: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 58.45,
    people_fully_vaccinated_per_hundred: 54.59,
  },
  "Solomon Islands": {
    date: "2021-11-08",
    people_vaccinated_per_hundred: 19.32,
    people_fully_vaccinated_per_hundred: 5.05,
  },
  Somalia: {
    date: "2021-11-13",
    people_vaccinated_per_hundred: 3.6,
    people_fully_vaccinated_per_hundred: 3.45,
  },
  "South Africa": {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 27.32,
    people_fully_vaccinated_per_hundred: 22.62,
  },
  "South America": {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 70.82,
    people_fully_vaccinated_per_hundred: 55.46,
  },
  "South Korea": {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 82.08,
    people_fully_vaccinated_per_hundred: 78.57,
  },
  "S. Sudan": {
    date: "2021-11-09",
    people_vaccinated_per_hundred: 0.75,
    people_fully_vaccinated_per_hundred: 0.58,
  },
  Spain: {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 81.67,
    people_fully_vaccinated_per_hundred: 80.2,
  },
  "Sri Lanka": {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 73.91,
    people_fully_vaccinated_per_hundred: 63.65,
  },
  Sudan: {
    date: "2021-09-19",
    people_vaccinated_per_hundred: 1.45,
    people_fully_vaccinated_per_hundred: 1.3,
  },
  Suriname: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 43.05,
    people_fully_vaccinated_per_hundred: 35.96,
  },
  Sweden: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 71.7,
    people_fully_vaccinated_per_hundred: 68.72,
  },
  Switzerland: {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 66.52,
    people_fully_vaccinated_per_hundred: 64.69,
  },
  Syria: {
    date: "2021-11-15",
    people_vaccinated_per_hundred: 4.5,
    people_fully_vaccinated_per_hundred: 3.95,
  },
  Taiwan: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 75.29,
    people_fully_vaccinated_per_hundred: 43.78,
  },
  Tajikistan: {
    date: "2021-11-07",
    people_vaccinated_per_hundred: 27.85,
    people_fully_vaccinated_per_hundred: 21.92,
  },
  Tanzania: {
    date: "2021-10-13",
    people_vaccinated_per_hundred: 1.44,
    people_fully_vaccinated_per_hundred: 1.44,
  },
  Thailand: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 65.33,
    people_fully_vaccinated_per_hundred: 53.65,
  },
  Timor: {
    date: "2021-11-09",
    people_vaccinated_per_hundred: 43.71,
    people_fully_vaccinated_per_hundred: 28.44,
  },
  Togo: {
    date: "2021-11-12",
    people_vaccinated_per_hundred: 11.46,
    people_fully_vaccinated_per_hundred: 5.69,
  },
  Tokelau: {
    date: "2021-10-12",
    people_vaccinated_per_hundred: 70.76,
    people_fully_vaccinated_per_hundred: 70.76,
  },
  Tonga: {
    date: "2021-11-15",
    people_vaccinated_per_hundred: 59.25,
    people_fully_vaccinated_per_hundred: 36.82,
  },
  "Trinidad and Tobago": {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 45.22,
    people_fully_vaccinated_per_hundred: 44.95,
  },
  Tunisia: {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 49.09,
    people_fully_vaccinated_per_hundred: 40.3,
  },
  Turkey: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 65.78,
    people_fully_vaccinated_per_hundred: 58.61,
  },
  Turkmenistan: {
    date: "2021-08-29",
    people_vaccinated_per_hundred: 71.51,
    people_fully_vaccinated_per_hundred: 52.41,
  },
  "Turks and Caicos Islands": {
    date: "2021-11-05",
    people_vaccinated_per_hundred: 74.47,
    people_fully_vaccinated_per_hundred: 69.17,
  },
  Tuvalu: {
    date: "2021-10-22",
    people_vaccinated_per_hundred: 52.24,
    people_fully_vaccinated_per_hundred: 49.34,
  },
  Uganda: {
    date: "2021-11-15",
    people_vaccinated_per_hundred: 8.15,
    people_fully_vaccinated_per_hundred: 1.94,
  },
  Ukraine: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 28.88,
    people_fully_vaccinated_per_hundred: 21.35,
  },
  "United Arab Emirates": {
    date: "2021-11-15",
    people_vaccinated_per_hundred: 98.1,
    people_fully_vaccinated_per_hundred: 88.4,
  },
  "United Kingdom": {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 74.25,
    people_fully_vaccinated_per_hundred: 67.54,
  },
  "United States of America": {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 67.84,
    people_fully_vaccinated_per_hundred: 57.72,
  },
  Uruguay: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 79.57,
    people_fully_vaccinated_per_hundred: 75.65,
  },
  Uzbekistan: {
    date: "2021-10-20",
    people_vaccinated_per_hundred: 38.13,
    people_fully_vaccinated_per_hundred: 17.33,
  },
  Vanuatu: {
    date: "2021-11-15",
    people_vaccinated_per_hundred: 27.34,
    people_fully_vaccinated_per_hundred: 11.73,
  },
  Venezuela: {
    date: "2021-11-05",
    people_vaccinated_per_hundred: 48.28,
    people_fully_vaccinated_per_hundred: 32.3,
  },
  Vietnam: {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 66.44,
    people_fully_vaccinated_per_hundred: 37.49,
  },
  Wales: {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 77.62,
    people_fully_vaccinated_per_hundred: 71.11,
  },
  "Wallis and Futuna": {
    date: "2021-11-15",
    people_vaccinated_per_hundred: 53.98,
    people_fully_vaccinated_per_hundred: 52.91,
  },
  World: {
    date: "2021-11-17",
    people_vaccinated_per_hundred: 52.41,
    people_fully_vaccinated_per_hundred: 41.23,
  },
  Yemen: {
    date: "2021-11-14",
    people_vaccinated_per_hundred: 1.73,
    people_fully_vaccinated_per_hundred: 1.13,
  },
  Zambia: {
    date: "2021-09-07",
    people_vaccinated_per_hundred: 1.64,
    people_fully_vaccinated_per_hundred: 1.54,
  },
  Zimbabwe: {
    date: "2021-11-16",
    people_vaccinated_per_hundred: 23.29,
    people_fully_vaccinated_per_hundred: 17.98,
  },
};

const dimensions = {
  width: 800,
};

const sphere = { type: "Sphere" };

const projection = geoLarrivee().fitWidth(dimensions.width, sphere);

let pathGenerator = geoPath(projection);

const y1 = pathGenerator.bounds(sphere)[1][1];

dimensions.height = y1;

projection
  .translate([dimensions.width / 2, dimensions.height / 1.45])
  .scale(150)
  .rotate([-10, 0]);

// pathGenerator = geoPath(projection);

const colorScale = scaleLinear()
  .domain([0, 100])
  .range([interpolateBlues(0), interpolateBlues(1)]);

const main = select("body").append("main");

main.append("h1").text("Global vaccination map");

const wrapper = main
  .append("svg")
  .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`)
  .attr("width", dimensions.width)
  .attr("height", dimensions.height);

const bounds = wrapper.append("g");

bounds
  .append("text")
  .text("Loading data")
  .attr("fill", "currentColor")
  .attr("font-size", "24")
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "middle")
  .attr("x", dimensions.width / 2)
  .attr("y", dimensions.height / 2)
  .attr("font-weight", "bold");

const timeout = setTimeout(() => {
  drawWorld();
  clearTimeout(timeout);
}, 2000);

async function drawWorld() {
  const world = await json(
    "https://unpkg.com/world-atlas@2.0.2/countries-110m.json"
  );

  const countries = feature(world, world.objects.countries);

  bounds.select("text").transition().attr("opacity", "0").remove();

  const worldGroup = bounds.append("g");

  worldGroup
    .append("g")
    .selectAll("path")
    .data(countries.features)
    .join("path")
    .attr("d", pathGenerator)
    .attr("fill", (d) =>
      data[d.properties.name]
        ? colorScale(
            data[d.properties.name].people_fully_vaccinated_per_hundred
          )
        : "hsl(0, 0%, 95%)"
    )
    .attr("stroke", "hsl(0, 0%, 100%)")
    .attr("stroke-width", "0.5");

  worldGroup.attr("opacity", "0").transition().attr("opacity", "1");
}
