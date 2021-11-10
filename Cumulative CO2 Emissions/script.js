/* inspiration from a thorough analysis @lemondefr
https://www.lemonde.fr/les-decodeurs/article/2021/11/06/cop26-visualisez-les-emissions-cumulees-de-dioxyde-de-carbone-par-pays-depuis-1850_6101202_4355770.html
*/
const href =
  "https://www.carbonbrief.org/analysis-which-countries-are-historically-responsible-for-climate-change";

const data = { 
  1850: { "Argentina": 38.24680873, "Australia": 27.03407838, "Austria": 7.387899072, "Belgium": 10.61953608, "Brazil": 43.96654906, "Canada": 62.43553829, "Chile": 7.239712256, "China": 158.0015893, "Czech Republic": 8.826477072, "Danemark": 5.395767616, "Egypt": -0.002652736, "France": 52.62784018, "Germany": 48.42528348, "India": 154.7514271, "Indonesia": 93.16256593, "International transport": 0, "Iran": 6.474071824, "Iraq": 0.5218452, "Ireland": 0.178680456, "Italy": 11.64930878, "Japan": 14.50217795, "Malaysia": 11.06643599, "Mexico": 18.44040637, "Netherlands": 5.792415768, "New Zeland": 14.04093348, "Norway": 8.704779144, "Pakistan": 7.37286568, "Perù": 6.905625072, "Poland": 29.08090419, "Portugal": 3.438303096, "Qatar": 0.0000311, "Russia": 351.4072625, "Saudi Arabia": -0.093455816, "South Africa": 2.759246648, "South Korea": 4.864892488, "Spain": 18.28704049, "Turkey": 11.77176332, "Ukraine": 50.22904713, "United Arab Emirates": 0.002797464, "United Kingdom": 129.4574611, "United States": 840.6700012 },
  1851: { "Argentina": 77.93477308, "Australia": 53.52713601, "Austria": 14.68513979, "Belgium": 22.04460073, "Brazil": 88.67678569, "Canada": 127.9847328, "Chile": 14.8358053, "China": 316.0699165, "Czech Republic": 17.45842872, "Danemark": 10.80200145, "Egypt": -0.079897184, "France": 102.4887521, "Germany": 94.49988196, "India": 274.6804675, "Indonesia": 220.0627712, "International transport": 0, "Iran": 12.96510064, "Iraq": 1.054017384, "Ireland": -0.015390632, "Italy": 22.86683714, "Japan": 29.05902095, "Malaysia": 24.08900464, "Mexico": 36.45723418, "Netherlands": 11.5108279, "New Zeland": 27.56934114, "Norway": 17.37462571, "Pakistan": 14.54442021, "Perù": 14.82699155, "Poland": 58.04310211, "Portugal": 6.814116672, "Qatar": 0.0000714, "Russia": 709.2888931, "Saudi Arabia": -0.189091712, "South Africa": 5.696928264, "South Korea": 9.839530936, "Spain": 35.57667972, "Turkey": 22.8854356, "Ukraine": 102.411453, "United Arab Emirates": 0.0055876, "United Kingdom": 251.7344935, "United States": 1706.714197 },
  1852: { "Argentina": 119.1120417, "Australia": 79.67439082, "Austria": 22.36093583, "Belgium": 34.67912063, "Brazil": 134.8175981, "Canada": 195.7479378, "Chile": 22.7131415, "China": 474.3174005, "Czech Republic": 25.94920828, "Danemark": 16.24115632, "Egypt": -0.21685384, "France": 151.0295231, "Germany": 139.8590588, "India": 378.4277157, "Indonesia": 369.3675084, "International transport": 0, "Iran": 19.47055646, "Iraq": 1.594400592, "Ireland": -0.215604416, "Italy": 33.66180554, "Japan": 43.66551298, "Malaysia": 38.30738564, "Mexico": 54.28031884, "Netherlands": 17.82522077, "New Zeland": 40.74890853, "Norway": 26.00210362, "Pakistan": 21.58414218, "Perù": 22.3318913, "Poland": 87.0516075, "Portugal": 10.10923798, "Qatar": 0.00010992, "Russia": 1070.685871, "Saudi Arabia": -0.286473504, "South Africa": 8.76306056, "South Korea": 14.90024407, "Spain": 52.2918239, "Turkey": 33.42475756, "Ukraine": 155.8918913, "United Arab Emirates": 0.008375904, "United Kingdom": 372.4550421, "United States": 2591.958059 },
  1853: { "Argentina": 161.6616432, "Australia": 105.8249322, "Austria": 30.35263462, "Belgium": 47.65855667, "Brazil": 181.6859308, "Canada": 265.3403141, "Chile": 30.84262318, "China": 632.4167215, "Czech Republic": 34.29156103, "Danemark": 21.73306546, "Egypt": -0.403921192, "France": 201.3906077, "Germany": 184.1404059, "India": 470.7272393, "Indonesia": 532.4516941, "International transport": 0, "Iran": 25.98952694, "Iraq": 2.141877304, "Ireland": -0.4327184, "Italy": 44.17481448, "Japan": 58.34264327, "Malaysia": 52.85546435, "Mexico": 72.17823703, "Netherlands": 24.5130247, "New Zeland": 53.81968809, "Norway": 34.61097206, "Pakistan": 28.52522745, "Perù": 29.7742539, "Poland": 115.9343846, "Portugal": 13.36235885, "Qatar": 0.000142896, "Russia": 1434.684645, "Saudi Arabia": -0.385320896, "South Africa": 11.9104787, "South Korea": 20.02000806, "Spain": 68.71563978, "Turkey": 43.45850248, "Ukraine": 210.4105057, "United Arab Emirates": 0.011160544, "United Kingdom": 491.6013935, "United States": 3496.149837 },
  1854: { "Argentina": 205.7089156, "Australia": 132.3915373, "Austria": 38.19705344, "Belgium": 61.87638258, "Brazil": 228.961462, "Canada": 336.513144, "Chile": 39.20661002, "China": 790.125341, "Czech Republic": 42.48757362, "Danemark": 27.34888559, "Egypt": -0.634308016, "France": 253.8396318, "Germany": 229.5972851, "India": 556.3828811, "Indonesia": 699.4661298, "International transport": 0, "Iran": 32.52143866, "Iraq": 2.695835632, "Ireland": -0.672873448, "Italy": 54.41472718, "Japan": 73.11087892, "Malaysia": 67.88541769, "Mexico": 89.80871254, "Netherlands": 32.94721378, "New Zeland": 67.00826158, "Norway": 43.25672966, "Pakistan": 35.38455788, "Perù": 37.28533666, "Poland": 144.9351131, "Portugal": 16.57437697, "Qatar": 0.000170376, "Russia": 1800.744272, "Saudi Arabia": -0.48542504, "South Africa": 15.12792686, "South Korea": 25.1797866, "Spain": 84.71124582, "Turkey": 53.04378479, "Ukraine": 265.8003204, "United Arab Emirates": 0.013943352, "United Kingdom": 633.5848047, "United States": 4418.166557 },
  1855: { "Argentina": 251.0755798, "Australia": 159.8266643, "Austria": 46.46755149, "Belgium": 76.3804713, "Brazil": 276.7374719, "Canada": 409.0982976, "Chile": 47.79090951, "China": 947.2632376, "Czech Republic": 50.54137905, "Danemark": 32.98533404, "Egypt": -0.90291036, "France": 308.5101923, "Germany": 277.0817798, "India": 636.6605806, "Indonesia": 870.4018681, "International transport": 0, "Iran": 39.06576402, "Iraq": 3.25600444, "Ireland": -0.94094268, "Italy": 64.38772848, "Japan": 87.98448388, "Malaysia": 83.31759212, "Mexico": 107.3886377, "Netherlands": 40.05251403, "New Zeland": 80.4580508, "Norway": 51.89132855, "Pakistan": 42.16951461, "Perù": 43.82435105, "Poland": 174.410238, "Portugal": 19.74638238, "Qatar": 0.000186864, "Russia": 2168.662916, "Saudi Arabia": -0.586608232, "South Africa": 18.3954381, "South Korea": 30.37119645, "Spain": 100.4369066, "Turkey": 62.22521736, "Ukraine": 321.9996316, "United Arab Emirates": 0.01672616, "United Kingdom": 765.9063853, "United States": 5359.872859 },
  1856: { "Argentina": 297.819963, "Australia": 188.1729658, "Austria": 55.17582242, "Belgium": 90.68832352, "Brazil": 324.9712399, "Canada": 482.958743, "Chile": 56.58567283, "China": 1103.464172, "Czech Republic": 58.45943877, "Danemark": 38.83979415, "Egypt": -1.205663016, "France": 363.241927, "Germany": 324.8500055, "India": 713.0504977, "Indonesia": 1045.862, "International transport": 0, "Iran": 45.62198639, "Iraq": 3.82225732, "Ireland": -1.240775128, "Italy": 74.1178194, "Japan": 102.9722389, "Malaysia": 98.43433829, "Mexico": 124.9797123, "Netherlands": 47.20318559, "New Zeland": 94.2374333, "Norway": 60.53946592, "Pakistan": 48.88720579, "Perù": 50.79056402, "Poland": 204.205668, "Portugal": 22.88034814, "Qatar": 0.00019236, "Russia": 2537.731992, "Saudi Arabia": -0.688716584, "South Africa": 21.71927417, "South Korea": 35.58772485, "Spain": 116.1267446, "Turkey": 71.04470352, "Ukraine": 378.7834627, "United Arab Emirates": 0.019507136, "United Kingdom": 907.4181462, "United States": 6318.338899 },
  1857: { "Argentina": 346.0187417, "Australia": 217.1320842, "Austria": 64.41136494, "Belgium": 105.5082637, "Brazil": 374.4242516, "Canada": 557.9877662, "Chile": 65.58358663, "China": 1258.443958, "Czech Republic": 66.24696666, "Danemark": 44.73264382, "Egypt": -1.5392006, "France": 417.2413416, "Germany": 372.804214, "India": 786.6114697, "Indonesia": 1230.128944, "International transport": 0, "Iran": 52.18959464, "Iraq": 4.39452832, "Ireland": -1.575640912, "Italy": 83.61775066, "Japan": 118.0861272, "Malaysia": 113.9450396, "Mexico": 142.7309973, "Netherlands": 53.82390535, "New Zeland": 108.3576979, "Norway": 69.1560764, "Pakistan": 55.54845306, "Perù": 58.08456394, "Poland": 234.0058594, "Portugal": 25.97898378, "Qatar": 0.000185032, "Russia": 2907.922731, "Saudi Arabia": -0.791612696, "South Africa": 25.0907459, "South Korea": 40.82447303, "Spain": 131.7011665, "Turkey": 79.52848667, "Ukraine": 436.1273802, "United Arab Emirates": 0.02228628, "United Kingdom": 1045.727183, "United States": 7292.714174 },
  1858: { "Argentina": 395.5675999, "Australia": 246.5384743, "Austria": 75.90832643, "Belgium": 120.9923882, "Brazil": 424.4564684, "Canada": 634.106267, "Chile": 74.77736688, "China": 1411.971245, "Czech Republic": 73.90876438, "Danemark": 50.47350711, "Egypt": -1.9006542, "France": 469.2768943, "Germany": 421.7894794, "India": 859.1639789, "Indonesia": 1419.611667, "International transport": 0, "Iran": 58.768041, "Iraq": 4.972839424, "Ireland": -1.948427264, "Italy": 92.89163694, "Japan": 133.3344641, "Malaysia": 130.0387822, "Mexico": 160.763049, "Netherlands": 59.91344954, "New Zeland": 122.7924088, "Norway": 77.7052363, "Pakistan": 62.16388383, "Perù": 65.64240299, "Poland": 264.4049627, "Portugal": 29.04393993, "Qatar": 0.000166712, "Russia": 3279.355747, "Saudi Arabia": -0.895166496, "South Africa": 28.50126672, "South Korea": 46.07809577, "Spain": 147.3893153, "Turkey": 87.70020328, "Ukraine": 494.0381499, "United Arab Emirates": 0.025063592, "United Kingdom": 1180.648353, "United States": 8282.255721 },
  1859: { "Argentina": 446.4096578, "Australia": 276.3846727, "Austria": 85.92622272, "Belgium": 136.8928859, "Brazil": 474.6108411, "Canada": 711.2496582, "Chile": 84.15808624, "China": 1563.752014, "Czech Republic": 81.44400206, "Danemark": 56.3644973, "Egypt": -2.287513976, "France": 520.5096537, "Germany": 467.4698608, "India": 930.1370976, "Indonesia": 1611.71146, "International transport": 0, "Iran": 65.35685465, "Iraq": 5.557201624, "Ireland": -2.361517616, "Italy": 101.9358197, "Japan": 148.7232256, "Malaysia": 145.9847483, "Mexico": 178.9020877, "Netherlands": 65.79872938, "New Zeland": 137.5757529, "Norway": 86.28026405, "Pakistan": 68.74482354, "Perù": 72.98411918, "Poland": 293.8024493, "Portugal": 32.07506454, "Qatar": 0.000135568, "Russia": 3651.520025, "Saudi Arabia": -0.9992644, "South Africa": 31.94306894, "South Korea": 51.3435001, "Spain": 163.3804567, "Turkey": 95.56283584, "Ukraine": 552.3647839, "United Arab Emirates": 0.02783724, "United Kingdom": 1329.863734, "United States": 9289.705556 },
  1860: { "Argentina": 498.7557474, "Australia": 307.9617263, "Austria": 96.16340025, "Belgium": 153.0543319, "Brazil": 528.3253559, "Canada": 789.7799082, "Chile": 93.38257081, "China": 1707.317187, "Czech Republic": 89.1089139, "Danemark": 62.06199349, "Egypt": -2.552767424, "France": 573.54653, "Germany": 514.452153, "India": 999.5845204, "Indonesia": 1796.917739, "International transport": 0, "Iran": 71.96255934, "Iraq": 6.349321784, "Ireland": -2.65183832, "Italy": 109.9648693, "Japan": 164.1239959, "Malaysia": 161.9292031, "Mexico": 197.2680672, "Netherlands": 72.93843459, "New Zeland": 153.0892993, "Norway": 94.80359825, "Pakistan": 75.3322119, "Perù": 80.4420208, "Poland": 322.9957082, "Portugal": 35.35031047, "Qatar": -0.000199688, "Russia": 4007.973773, "Saudi Arabia": -1.106311824, "South Africa": 36.00578542, "South Korea": 56.6020161, "Spain": 178.7689453, "Turkey": 103.0400687, "Ukraine": 611.0744487, "United Arab Emirates": 0.030590736, "United Kingdom": 1501.66783, "United States": 10230.29078 },
  1861: { "Argentina": 552.0607552, "Australia": 341.4265662, "Austria": 106.5432356, "Belgium": 170.4173024, "Brazil": 583.7426139, "Canada": 869.3889186, "Chile": 102.6344713, "China": 1844.25163, "Czech Republic": 97.13905849, "Danemark": 67.9756675, "Egypt": -2.742273168, "France": 628.4851341, "Germany": 565.1713368, "India": 1068.383625, "Indonesia": 1979.480613, "International transport": 0, "Iran": 78.5809781, "Iraq": 7.247406656, "Ireland": -2.868377056, "Italy": 117.8904, "Japan": 179.6774011, "Malaysia": 177.5132577, "Mexico": 215.7001783, "Netherlands": 79.66845697, "New Zeland": 169.4113384, "Norway": 103.4038893, "Pakistan": 81.92444222, "Perù": 87.44514491, "Poland": 351.8991301, "Portugal": 38.70957376, "Qatar": -0.000721808, "Russia": 4360.148158, "Saudi Arabia": -1.214868816, "South Africa": 40.40305807, "South Korea": 61.84719698, "Spain": 193.7327927, "Turkey": 110.1926822, "Ukraine": 670.1174211, "United Arab Emirates": 0.033336904, "United Kingdom": 1683.271802, "United States": 11153.59575 },
  1862: { "Argentina": 605.9189941, "Australia": 376.8330165, "Austria": 116.8085765, "Belgium": 187.625207, "Brazil": 640.5311496, "Canada": 950.0135917, "Chile": 111.9518767, "China": 1974.702226, "Czech Republic": 105.5344648, "Danemark": 73.77104745, "Egypt": -2.878128792, "France": 684.5839401, "Germany": 618.9950846, "India": 1136.108468, "Indonesia": 2165.445795, "International transport": 0, "Iran": 85.20758958, "Iraq": 8.210111664, "Ireland": -3.024743752, "Italy": 125.7427752, "Japan": 195.3923099, "Malaysia": 193.0561893, "Mexico": 234.2751964, "Netherlands": 87.6494807, "New Zeland": 186.6941516, "Norway": 111.9106714, "Pakistan": 88.51616875, "Perù": 94.44697014, "Poland": 381.485996, "Portugal": 42.11284535, "Qatar": -0.001381328, "Russia": 4709.818893, "Saudi Arabia": -1.324296008, "South Africa": 45.00452911, "South Korea": 67.07062286, "Spain": 208.5083435, "Turkey": 117.0331797, "Ukraine": 729.4060226, "United Arab Emirates": 0.036075744, "United Kingdom": 1861.520952, "United States": 12073.92427 },
  1863: { "Argentina": 659.9766462, "Australia": 414.5506355, "Austria": 126.510995, "Belgium": 205.6772843, "Brazil": 697.8648445, "Canada": 1031.647801, "Chile": 121.3571998, "China": 2098.720308, "Czech Republic": 114.2968256, "Danemark": 79.63509258, "Egypt": -2.973041048, "France": 740.3079793, "Germany": 675.6415249, "India": 1203.908939, "Indonesia": 2349.102654, "International transport": 0, "Iran": 91.84361386, "Iraq": 9.216707728, "Ireland": -3.133533408, "Italy": 132.8827075, "Japan": 211.2592216, "Malaysia": 209.0065907, "Mexico": 252.9268378, "Netherlands": 94.0286311, "New Zeland": 205.0235553, "Norway": 120.3807383, "Pakistan": 95.10092818, "Perù": 100.9138349, "Poland": 411.8835934, "Portugal": 45.54466866, "Qatar": -0.002147104, "Russia": 5057.616798, "Saudi Arabia": -1.434232496, "South Africa": 49.75499671, "South Korea": 72.26608693, "Spain": 223.2209377, "Turkey": 123.5814732, "Ukraine": 788.935397, "United Arab Emirates": 0.038812752, "United Kingdom": 2052.506639, "United States": 13000.59545 },
  1864: { "Argentina": 714.1625162, "Australia": 454.2361688, "Austria": 135.3274895, "Belgium": 224.5455653, "Brazil": 755.8915832, "Canada": 1114.253773, "Chile": 130.8744068, "China": 2216.372931, "Czech Republic": 123.4294872, "Danemark": 85.38767884, "Egypt": -3.035043256, "France": 797.7205748, "Germany": 738.6005462, "India": 1270.83777, "Indonesia": 2535.147664, "International transport": 0, "Iran": 98.48926531, "Iraq": 10.25579248, "Ireland": -3.20546872, "Italy": 140.0592414, "Japan": 227.2676132, "Malaysia": 225.4727533, "Mexico": 271.7500058, "Netherlands": 99.71267125, "New Zeland": 224.1962212, "Norway": 128.9406832, "Pakistan": 101.6712771, "Perù": 107.8393371, "Poland": 443.0248326, "Portugal": 48.99867566, "Qatar": -0.00300448, "Russia": 5403.797511, "Saudi Arabia": -1.544456608, "South Africa": 54.64475494, "South Korea": 77.43086499, "Spain": 237.5680845, "Turkey": 129.856784, "Ukraine": 848.6937833, "United Arab Emirates": 0.041544264, "United Kingdom": 2258.92808, "United States": 13930.90168 },
  1865: { "Argentina": 768.5653812, "Australia": 495.629095, "Austria": 144.3444323, "Belgium": 244.3573299, "Brazil": 814.6993823, "Canada": 1197.843404, "Chile": 140.5207277, "China": 2327.746995, "Czech Republic": 132.9357241, "Danemark": 91.50553658, "Egypt": -3.069609432, "France": 856.7363828, "Germany": 807.5093832, "India": 1337.810613, "Indonesia": 2728.355305, "International transport": 0, "Iran": 105.1438294, "Iraq": 11.32066813, "Ireland": -3.249451376, "Italy": 146.4607404, "Japan": 243.4079161, "Malaysia": 241.458919, "Mexico": 291.4475599, "Netherlands": 105.8288161, "New Zeland": 243.7655994, "Norway": 137.4658183, "Pakistan": 108.2182039, "Perù": 115.0637595, "Poland": 474.9660091, "Portugal": 52.46991262, "Qatar": -0.003942464, "Russia": 5748.394286, "Saudi Arabia": -1.65481812, "South Africa": 59.62414742, "South Korea": 82.5660819, "Spain": 251.6516541, "Turkey": 136.0364735, "Ukraine": 908.6255882, "United Arab Emirates": 0.044272112, "United Kingdom": 2478.223883, "United States": 14860.38953 },
  1866: { "Argentina": 823.4914178, "Australia": 538.6412728, "Austria": 151.5296884, "Belgium": 265.605029, "Brazil": 874.3408366, "Canada": 1282.449636, "Chile": 150.3123134, "China": 2432.999299, "Czech Republic": 142.8068399, "Danemark": 97.5493742, "Egypt": -3.080724176, "France": 919.213077, "Germany": 875.0473456, "India": 1404.435991, "Indonesia": 2917.322179, "International transport": 0, "Iran": 111.8069673, "Iraq": 12.40719435, "Ireland": -3.273181272, "Italy": 152.6721016, "Japan": 259.671965, "Malaysia": 257.6343597, "Mexico": 310.8430868, "Netherlands": 112.3059968, "New Zeland": 264.1220414, "Norway": 146.0123163, "Pakistan": 114.7375078, "Perù": 122.6641559, "Poland": 506.2565526, "Portugal": 55.95601077, "Qatar": -0.004950064, "Russia": 6092.688776, "Saudi Arabia": -1.76520528, "South Africa": 64.67045371, "South Korea": 87.67442887, "Spain": 265.5107304, "Turkey": 142.0488411, "Ukraine": 969.0596704, "United Arab Emirates": 0.046998128, "United Kingdom": 2704.812974, "United States": 15788.64424 },
  1867: { "Argentina": 879.1514066, "Australia": 583.4531268, "Austria": 159.9644362, "Belgium": 288.5237593, "Brazil": 933.4084957, "Canada": 1368.195193, "Chile": 160.2657416, "China": 2532.289524, "Czech Republic": 153.0479479, "Danemark": 103.5778468, "Egypt": -3.071470744, "France": 981.6736368, "Germany": 948.0876669, "India": 1470.416605, "Indonesia": 3103.947046, "International transport": 0, "Iran": 118.4781843, "Iraq": 13.51266529, "Ireland": -3.283259104, "Italy": 158.5203219, "Japan": 276.0528956, "Malaysia": 273.9766681, "Mexico": 330.6718927, "Netherlands": 118.6001332, "New Zeland": 285.3817859, "Norway": 154.6335269, "Pakistan": 121.2314477, "Perù": 129.8568957, "Poland": 538.3203375, "Portugal": 59.45491093, "Qatar": -0.006019952, "Russia": 6435.796407, "Saudi Arabia": -1.875530152, "South Africa": 69.7865995, "South Korea": 92.75990698, "Spain": 279.4472692, "Turkey": 147.876281, "Ukraine": 1029.709455, "United Arab Emirates": 0.049718648, "United Kingdom": 2937.955363, "United States": 16730.34953 },
  1868: { "Argentina": 935.8851087, "Australia": 629.7681478, "Austria": 169.4913657, "Belgium": 309.2794876, "Brazil": 992.5828047, "Canada": 1454.08274, "Chile": 170.397537, "China": 2625.842416, "Czech Republic": 163.6707379, "Danemark": 109.7843294, "Egypt": -3.04434432, "France": 1044.71346, "Germany": 1025.660309, "India": 1536.390486, "Indonesia": 3291.852124, "International transport": 0, "Iran": 125.157017, "Iraq": 14.63514634, "Ireland": -3.285433688, "Italy": 164.2753649, "Japan": 292.5558521, "Malaysia": 289.986855, "Mexico": 350.583188, "Netherlands": 125.0866737, "New Zeland": 307.5597232, "Norway": 163.2473069, "Pakistan": 127.7037644, "Perù": 136.6027264, "Poland": 571.8647851, "Portugal": 62.96528674, "Qatar": -0.007146632, "Russia": 6777.146596, "Saudi Arabia": -1.985721288, "South Africa": 74.94992113, "South Korea": 97.82790232, "Spain": 293.3150109, "Turkey": 153.4645185, "Ukraine": 1090.386343, "United Arab Emirates": 0.052435504, "United Kingdom": 3167.675461, "United States": 17682.13052 },
  1869: { "Argentina": 994.047507, "Australia": 677.4938033, "Austria": 179.3680972, "Belgium": 331.5569502, "Brazil": 1051.361735, "Canada": 1540.511433, "Chile": 180.7235409, "China": 2713.875503, "Czech Republic": 174.6783737, "Danemark": 115.8619198, "Egypt": -3.001451704, "France": 1108.533439, "Germany": 1105.827806, "India": 1603.524916, "Indonesia": 3482.267478, "International transport": 0, "Iran": 131.8429358, "Iraq": 15.77321955, "Ireland": -3.284715544, "Italy": 169.907521, "Japan": 309.1720078, "Malaysia": 305.87181, "Mexico": 370.8312068, "Netherlands": 131.7005454, "New Zeland": 330.6163977, "Norway": 171.7592754, "Pakistan": 134.1603077, "Perù": 143.2944527, "Poland": 605.5710808, "Portugal": 66.48499842, "Qatar": -0.008320944, "Russia": 7117.668968, "Saudi Arabia": -2.0957164, "South Africa": 80.15865986, "South Korea": 102.8789315, "Spain": 307.00041, "Turkey": 158.9638033, "Ukraine": 1151.340294, "United Arab Emirates": 0.055148696, "United Kingdom": 3408.482285, "United States": 18645.82159 },
  1870: { "Argentina": 1054.848112, "Australia": 729.1640809, "Austria": 190.2348965, "Belgium": 356.9799091, "Brazil": 1114.391827, "Canada": 1625.932274, "Chile": 191.3891627, "China": 2804.716036, "Czech Republic": 185.7631416, "Danemark": 122.0688402, "Egypt": -2.930831768, "France": 1166.109634, "Germany": 1184.537182, "India": 1670.104561, "Indonesia": 3669.910362, "International transport": 0, "Iran": 140.2021667, "Iraq": 17.00333977, "Ireland": -3.489023848, "Italy": 176.8746188, "Japan": 326.6430224, "Malaysia": 322.4784174, "Mexico": 391.3359969, "Netherlands": 139.1218272, "New Zeland": 354.6050912, "Norway": 180.2817009, "Pakistan": 141.4739008, "Perù": 150.2128596, "Poland": 641.2443326, "Portugal": 70.04063928, "Qatar": -0.009557544, "Russia": 7483.395785, "Saudi Arabia": -2.195686808, "South Africa": 90.93981865, "South Korea": 107.8766806, "Spain": 320.3654527, "Turkey": 163.2617175, "Ukraine": 1217.179361, "United Arab Emirates": 0.057821584, "United Kingdom": 3652.667853, "United States": 19803.61508 },
}
  
const {
  max,
  scaleLinear,
  scaleBand,
  scaleOrdinal,
  interpolateRainbow: interpolate,
  axisTop,
  format,
  easeLinear,
} = d3;

const years = Object.keys(data).map((year) => parseInt(year, 10));
const countries = Object.keys(data[years[0]]);

years.forEach((year, i) => {
  countries.forEach((country) => {
    const current = data[year][country];
    const previous =
      i === 0 ? data[year][country] : data[year - 1][country].current;
    data[year][country] = {
      current,
      previous,
    };
  });
});

const duration = 700;
const dimensions = {
  width: 800,
  height: 480,
  margin: {
    top: 20,
    right: 120,
    bottom: 10,
    left: 10,
  },
};

dimensions.boundedWidth =
  dimensions.width - (dimensions.margin.left + dimensions.margin.right);
dimensions.boundedHeight =
  dimensions.height - (dimensions.margin.top + dimensions.margin.bottom);

const colorScale = scaleOrdinal()
  .domain(countries)
  .range(countries.map((_, i, { length }) => interpolate(i / length)));

const xScale = scaleLinear().range([0, dimensions.boundedWidth]);
const yScale = scaleBand().range([0, dimensions.boundedHeight]).padding(0.25);

const formatTick = format(".2~s");
const formatEmissions = format(",.0d");

const xAxis = axisTop(xScale)
  .ticks(5)
  .tickFormat((d) => formatTick(d));

const main = d3.select("body").append("main");

main
  .append("h1")
  .text("Which countries are historically responsible for climate change?");
main
  .append("p")
  .text(
    "Cumulative CO2 emissions from fossil fuels, land use and forestry, 1850-2021 (million tonnes)."
  );

const wrapper = main
  .append("svg")
  .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`)
  .attr("width", dimensions.width)
  .attr("height", dimensions.height);

wrapper
  .append("defs")
  .append("clipPath")
  .attr("id", "clip-data")
  .append("rect")
  .attr("width", dimensions.width)
  .attr("height", dimensions.boundedHeight);

const bounds = wrapper
  .append("g")
  .attr(
    "transform",
    `translate(${dimensions.margin.left} ${dimensions.margin.top})`
  );

const currentYear = bounds
  .append("text")
  .attr("fill", "currentColor")
  .attr("font-size", "48")
  .attr("font-weight", "bold")
  .attr("text-anchor", "end")
  .attr("x", dimensions.boundedWidth + dimensions.margin.right - 5)
  .attr("y", dimensions.boundedHeight - 5);

bounds
  .append("path")
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "1")
  .attr("d", `M -0.5 0 v ${dimensions.boundedHeight}`);

const axisGroup = bounds.append("g");
const countriesGroup = bounds.append("g").attr("clip-path", "url(#clip-data)");

function plotYear(year) {
  const dataYear = Object.entries(data[year])
    .sort(
      ([, emissionsA], [, emissionsB]) =>
        emissionsB.current - emissionsA.current
    )
    .slice(0, 10);

  xScale.domain([0, max(dataYear, ([, emissions]) => emissions.current)]);

  yScale.domain(dataYear.map(([country]) => country));

  const transition = d3.transition().duration(duration).ease(easeLinear);

  const update = countriesGroup
    .selectAll("g")
    .data(dataYear, ([country]) => country);

  const enter = update.enter();
  const exit = update.exit();

  update
    .transition(transition)
    .attr("transform", ([country]) => `translate(0 ${yScale(country)})`);

  update
    .select("rect")
    .transition(transition)
    .attr("width", ([, emissions]) => xScale(emissions.current));

  update
    .select("text")
    .transition(transition)
    .attr(
      "transform",
      ([, emissions]) => `translate(${xScale(emissions.current) + 5} 0)`
    );

  update
    .select("text tspan:last-of-type")
    .transition(transition)
    .textTween(([, emissions]) => (t) => {
      const { current, previous } = emissions;
      return formatEmissions(previous + (current - previous) * t);
    });

  const enterGroups = enter.append("g");

  enterGroups
    .attr("transform", `translate(0 ${dimensions.boundedHeight})`)
    .transition(transition)
    .duration(year === years[0] ? 0 : duration)
    .attr("transform", ([country]) => `translate(0 ${yScale(country)})`);

  const enterLabel = enterGroups
    .append("text")
    .attr("fill", "currentColor")
    .attr("y", yScale.bandwidth() / 2 - 2)
    .attr(
      "transform",
      ([, emissions]) => `translate(${xScale(emissions.current) + 5} 0)`
    );

  enterLabel
    .append("tspan")
    .attr("font-weight", "bold")
    .attr("font-size", "16")
    .text(([country]) => country);

  enterLabel
    .append("tspan")
    .attr("font-size", "14")
    .attr("x", "0")
    .attr("dy", 16)
    .text(([, emissions]) => formatEmissions(emissions.current));

  enterGroups
    .append("rect")
    .attr("fill", ([country]) => colorScale(country))
    .attr("height", yScale.bandwidth())
    .attr("width", ([, emissions]) => xScale(emissions.current));

  exit
    .transition(transition)
    .attr("transform", `translate(0 ${dimensions.boundedHeight})`)
    .remove();

  axisGroup.transition(transition).call(xAxis);

  axisGroup.selectAll("line").remove();
  axisGroup.selectAll("path").remove();

  axisGroup
    .selectAll("g.tick")
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "currentColor")
    .attr("stroke-width", "0.2")
    .attr("d", `M 0 0 v ${dimensions.boundedHeight}`);

  axisGroup
    .selectAll("text")
    .attr("fill", "currentColor")
    .attr("font-size", "12");

  currentYear.text(year);

  transition.on("end", () => {
    if (year === years[years.length - 1]) return;
    plotYear(year + 1);
  });
}

plotYear(years[0]);

main
  .append("p")
  .style("text-align", "right")
  .text("Source: ")
  .append("a")
  .attr("href", href)
  .text("Carbon Brief");
