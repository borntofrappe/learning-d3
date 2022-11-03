const data = [
  {
    label: "Styled Components",
    satisfaction: [
      { year: 2019, ranking: 3, percentage: 0.85 },
      { year: 2020, ranking: 2, percentage: 0.821 },
      { year: 2021, ranking: 4, percentage: 0.766 },
    ],
    interest: [
      { year: 2019, ranking: 2, percentage: 0.677 },
      { year: 2020, ranking: 2, percentage: 0.601 },
      { year: 2021, ranking: 5, percentage: 0.541 },
    ],
    usage: [
      { year: 2019, ranking: 1, percentage: 0.397 },
      { year: 2020, ranking: 1, percentage: 0.516 },
      { year: 2021, ranking: 1, percentage: 0.523 },
    ],
    awareness: [
      { year: 2019, ranking: 1, percentage: 0.791 },
      { year: 2020, ranking: 1, percentage: 0.857 },
      { year: 2021, ranking: 1, percentage: 0.869 },
    ],
  },
  {
    label: "JSS",
    satisfaction: [
      { year: 2019, ranking: 5, percentage: 0.593 },
      { year: 2020, ranking: 8, percentage: 0.579 },
      { year: 2021, ranking: 13, percentage: 0.503 },
    ],
    interest: [
      { year: 2019, ranking: 5, percentage: 0.379 },
      { year: 2020, ranking: 9, percentage: 0.369 },
      { year: 2021, ranking: 13, percentage: 0.302 },
    ],
    usage: [
      { year: 2019, ranking: 5, percentage: 0.068 },
      { year: 2020, ranking: 5, percentage: 0.144 },
      { year: 2021, ranking: 5, percentage: 0.14 },
    ],
    awareness: [
      { year: 2019, ranking: 4, percentage: 0.309 },
      { year: 2020, ranking: 4, percentage: 0.474 },
      { year: 2021, ranking: 5, percentage: 0.486 },
    ],
  },
  {
    label: "Styled JSX",
    satisfaction: [
      { year: 2019, ranking: 4, percentage: 0.672 },
      { year: 2020, ranking: 6, percentage: 0.681 },
      { year: 2021, ranking: 11, percentage: 0.616 },
    ],
    interest: [
      { year: 2019, ranking: 4, percentage: 0.446 },
      { year: 2020, ranking: 7, percentage: 0.408 },
      { year: 2021, ranking: 11, percentage: 0.36 },
    ],
    usage: [
      { year: 2019, ranking: 3, percentage: 0.137 },
      { year: 2020, ranking: 3, percentage: 0.265 },
      { year: 2021, ranking: 3, percentage: 0.25 },
    ],
    awareness: [
      { year: 2019, ranking: 3, percentage: 0.443 },
      { year: 2020, ranking: 3, percentage: 0.622 },
      { year: 2021, ranking: 3, percentage: 0.631 },
    ],
  },
  {
    label: "Emotion",
    satisfaction: [
      { year: 2019, ranking: 1, percentage: 0.866 },
      { year: 2020, ranking: 3, percentage: 0.797 },
      { year: 2021, ranking: 6, percentage: 0.736 },
    ],
    interest: [
      { year: 2019, ranking: 3, percentage: 0.565 },
      { year: 2020, ranking: 4, percentage: 0.516 },
      { year: 2021, ranking: 10, percentage: 0.417 },
    ],
    usage: [
      { year: 2019, ranking: 4, percentage: 0.076 },
      { year: 2020, ranking: 4, percentage: 0.162 },
      { year: 2021, ranking: 4, percentage: 0.192 },
    ],
    awareness: [
      { year: 2019, ranking: 5, percentage: 0.271 },
      { year: 2020, ranking: 5, percentage: 0.424 },
      { year: 2021, ranking: 4, percentage: 0.49 },
    ],
  },
  {
    label: "CSS Modules",
    satisfaction: [
      { year: 2019, ranking: 2, percentage: 0.858 },
      { year: 2020, ranking: 1, percentage: 0.869 },
      { year: 2021, ranking: 2, percentage: 0.855 },
    ],
    interest: [
      { year: 2019, ranking: 1, percentage: 0.797 },
      { year: 2020, ranking: 1, percentage: 0.752 },
      { year: 2021, ranking: 1, percentage: 0.735 },
    ],
    usage: [
      { year: 2019, ranking: 2, percentage: 0.249 },
      { year: 2020, ranking: 2, percentage: 0.362 },
      { year: 2021, ranking: 2, percentage: 0.411 },
    ],
    awareness: [
      { year: 2019, ranking: 2, percentage: 0.634 },
      { year: 2020, ranking: 2, percentage: 0.727 },
      { year: 2021, ranking: 2, percentage: 0.774 },
    ],
  },
  {
    label: "Styled System",
    satisfaction: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 4, percentage: 0.796 },
      { year: 2021, ranking: 9, percentage: 0.719 },
    ],
    interest: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 3, percentage: 0.568 },
      { year: 2021, ranking: 8, percentage: 0.489 },
    ],
    usage: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 6, percentage: 0.074 },
      { year: 2021, ranking: 6, percentage: 0.081 },
    ],
    awareness: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 6, percentage: 0.215 },
      { year: 2021, ranking: 6, percentage: 0.239 },
    ],
  },
  {
    label: "Stitches",
    satisfaction: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 5, percentage: 0.69 },
      { year: 2021, ranking: 5, percentage: 0.762 },
    ],
    interest: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 6, percentage: 0.457 },
      { year: 2021, ranking: 3, percentage: 0.546 },
    ],
    usage: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 8, percentage: 0.011 },
      { year: 2021, ranking: 8, percentage: 0.023 },
    ],
    awareness: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 7, percentage: 0.082 },
      { year: 2021, ranking: 8, percentage: 0.143 },
    ],
  },
  {
    label: "Fela",
    satisfaction: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 10, percentage: 0.395 },
      { year: 2021, ranking: 14, percentage: 0.449 },
    ],
    interest: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 10, percentage: 0.282 },
      { year: 2021, ranking: 14, percentage: 0.253 },
    ],
    usage: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 9, percentage: 0.009 },
      { year: 2021, ranking: 13, percentage: 0.008 },
    ],
    awareness: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 10, percentage: 0.058 },
      { year: 2021, ranking: 14, percentage: 0.07 },
    ],
  },
  {
    label: "Linaria",
    satisfaction: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 7, percentage: 0.638 },
      { year: 2021, ranking: 10, percentage: 0.693 },
    ],
    interest: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 5, percentage: 0.463 },
      { year: 2021, ranking: 6, percentage: 0.504 },
    ],
    usage: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 7, percentage: 0.013 },
      { year: 2021, ranking: 11, percentage: 0.017 },
    ],
    awareness: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 8, percentage: 0.079 },
      { year: 2021, ranking: 11, percentage: 0.106 },
    ],
  },
  {
    label: "Astroturf",
    satisfaction: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 9, percentage: 0.575 },
      { year: 2021, ranking: 12, percentage: 0.591 },
    ],
    interest: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 8, percentage: 0.376 },
      { year: 2021, ranking: 12, percentage: 0.352 },
    ],
    usage: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 10, percentage: 0.006 },
      { year: 2021, ranking: 14, percentage: 0.007 },
    ],
    awareness: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 9, percentage: 0.063 },
      { year: 2021, ranking: 12, percentage: 0.08 },
    ],
  },
  {
    label: "Twin",
    satisfaction: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 8, percentage: 0.73 },
    ],
    interest: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 7, percentage: 0.49 },
    ],
    usage: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 10, percentage: 0.017 },
    ],
    awareness: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 13, percentage: 0.078 },
    ],
  },
  {
    label: "Theme UI",
    satisfaction: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 7, percentage: 0.731 },
    ],
    interest: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 4, percentage: 0.541 },
    ],
    usage: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 7, percentage: 0.033 },
    ],
    awareness: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 10, percentage: 0.131 },
    ],
  },
  {
    label: "vanilla-extract",
    satisfaction: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 1, percentage: 0.873 },
    ],
    interest: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 2, percentage: 0.677 },
    ],
    usage: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 12, percentage: 0.014 },
    ],
    awareness: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 7, percentage: 0.164 },
    ],
  },
  {
    label: "Windi CSS",
    satisfaction: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 3, percentage: 0.836 },
    ],
    interest: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 9, percentage: 0.452 },
    ],
    usage: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 9, percentage: 0.022 },
    ],
    awareness: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 9, percentage: 0.135 },
    ],
  },
];

const div = d3.select("body").append("div");
div.append("h1").text("Swooshing Lines");
