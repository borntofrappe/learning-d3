# Number of Births

<!-- ## [Live Demo]() -->

## Notes

The project is inspired by [an article from leparisien.fr](https://www.leparisien.fr/societe/un-baby-crash-en-2020-5mn-pour-comprendre-letude-de-linsee-26-02-2021-YGRQIBGXEFCERPP3QOXQGRTADA.php), discussing the number of births registered by the French institute of statistics and economic studies, Insee, for mainland France. The topic is discussed with a series of visualizations, plotting the data in line charts and a radial line chart.

Following the progress achieved with the _Lines and Delaunay_ demo, then, the idea is to implement mouse interaction supported by Delaunay's triangulation.

## Data

[The values](https://www.insee.fr/fr/statistiques/serie/000436391) are retrieved from the national institute of statistics and economic studies, Insee, again between the years 2000 and 2021.

`dataset` describes an array of objects, detailing the number of borths for each month in the given interval. The structure is immediately useful to plot a line describing the evolution through the years, but needs to be revisited as the project considers one line for each year.
