const data = [
  { year: "2021", name: "Gabriel", value: 4974 },
  { year: "2021", name: "Léo", value: 4358 },
  { year: "2021", name: "Raphaël", value: 3957 },
  { year: "2021", name: "Louis", value: 3715 },
  { year: "2021", name: "Arthur", value: 3598 },
  { year: "2021", name: "Jules", value: 3594 },
  { year: "2021", name: "Maël", value: 3438 },
  { year: "2021", name: "Noah", value: 3384 },
  { year: "2021", name: "Adam", value: 3148 },
  { year: "2021", name: "Lucas", value: 3054 },
  { year: "2021", name: "Hugo", value: 2905 },
  { year: "2021", name: "Gabin", value: 2719 },
  { year: "2021", name: "Liam", value: 2672 },
  { year: "2021", name: "Sacha", value: 2628 },
  { year: "2021", name: "Aaron", value: 2496 },
  { year: "2021", name: "Léon", value: 2362 },
  { year: "2021", name: "Isaac", value: 2322 },
  { year: "2021", name: "Paul", value: 2291 },
  { year: "2021", name: "Nathan", value: 2286 },
  { year: "2021", name: "Noé", value: 2276 },
  { year: "2021", name: "Eden", value: 2260 },
  { year: "2021", name: "Mohamed", value: 2183 },
  { year: "2021", name: "Ethan", value: 2104 },
  { year: "2021", name: "Tom", value: 1995 },
  { year: "2021", name: "Malo", value: 1935 },
  { year: "2021", name: "Naël", value: 1919 },
  { year: "2021", name: "Théo", value: 1902 },
  { year: "2021", name: "Marius", value: 1868 },
  { year: "2021", name: "Nino", value: 1838 },
  { year: "2021", name: "Marceau", value: 1834 },
  { year: "2021", name: "Mathis", value: 1801 },
  { year: "2021", name: "Victor", value: 1768 },
  { year: "2021", name: "Ayden", value: 1753 },
  { year: "2021", name: "Milo", value: 1723 },
  { year: "2021", name: "Martin", value: 1712 },
  { year: "2021", name: "Tiago", value: 1658 },
  { year: "2021", name: "Robin", value: 1657 },
  { year: "2021", name: "Axel", value: 1571 },
  { year: "2021", name: "Timéo", value: 1541 },
  { year: "2021", name: "Eliott", value: 1538 },
  { year: "2021", name: "Lyam", value: 1538 },
  { year: "2021", name: "Enzo", value: 1503 },
  { year: "2021", name: "Antoine", value: 1445 },
  { year: "2021", name: "Nolan", value: 1439 },
  { year: "2021", name: "Augustin", value: 1430 },
  { year: "2021", name: "Gaspard", value: 1379 },
  { year: "2021", name: "Valentin", value: 1362 },
  { year: "2021", name: "Amir", value: 1309 },
  { year: "2021", name: "Samuel", value: 1301 },
  { year: "2021", name: "Côme", value: 1300 },
  { year: "2021", name: "Rayan", value: 1247 },
  { year: "2021", name: "Ibrahim", value: 1244 },
  { year: "2021", name: "Imran", value: 1215 },
  { year: "2021", name: "Elio", value: 1195 },
  { year: "2021", name: "Sohan", value: 1187 },
  { year: "2021", name: "Yanis", value: 1172 },
  { year: "2021", name: "Simon", value: 1160 },
  { year: "2021", name: "Kaïs", value: 1144 },
  { year: "2021", name: "Mathéo", value: 1139 },
  { year: "2021", name: "Maxence", value: 1130 },
  { year: "2021", name: "Léandre", value: 1117 },
  { year: "2021", name: "Camille", value: 1096 },
  { year: "2021", name: "Clément", value: 1087 },
  { year: "2021", name: "Alessio", value: 1063 },
  { year: "2021", name: "Evan", value: 1056 },
  { year: "2021", name: "Soan", value: 1042 },
  { year: "2021", name: "Pablo", value: 1020 },
  { year: "2021", name: "Ismaël", value: 1006 },
  { year: "2021", name: "Alexandre", value: 995 },
  { year: "2021", name: "Owen", value: 995 },
  { year: "2021", name: "Baptiste", value: 967 },
  { year: "2021", name: "Maxime", value: 960 },
  { year: "2021", name: "Oscar", value: 946 },
  { year: "2021", name: "Maé", value: 932 },
  { year: "2021", name: "Mahé", value: 928 },
  { year: "2021", name: "Naïm", value: 918 },
  { year: "2021", name: "Noa", value: 917 },
  { year: "2021", name: "Charly", value: 909 },
  { year: "2021", name: "Basile", value: 907 },
  { year: "2021", name: "Joseph", value: 905 },
  { year: "2021", name: "Livio", value: 893 },
  { year: "2021", name: "Lenny", value: 863 },
  { year: "2021", name: "Ilyan", value: 840 },
  { year: "2021", name: "Diego", value: 826 },
  { year: "2021", name: "Thomas", value: 820 },
  { year: "2021", name: "Kayden", value: 798 },
  { year: "2021", name: "Ali", value: 786 },
  { year: "2021", name: "Noam", value: 776 },
  { year: "2021", name: "Marin", value: 771 },
  { year: "2021", name: "Charlie", value: 770 },
  { year: "2021", name: "Auguste", value: 757 },
  { year: "2021", name: "Charles", value: 757 },
  { year: "2021", name: "Andrea", value: 756 },
  { year: "2021", name: "Aylan", value: 756 },
  { year: "2021", name: "Ilyes", value: 747 },
  { year: "2021", name: "Timothée", value: 729 },
  { year: "2021", name: "Roméo", value: 726 },
  { year: "2021", name: "Anas", value: 724 },
  { year: "2021", name: "Maylone", value: 715 },
  { year: "2021", name: "Milan", value: 715 },
  { year: "2020", name: "Léo", value: 4499 },
  { year: "2020", name: "Gabriel", value: 4420 },
  { year: "2020", name: "Raphaël", value: 3980 },
  { year: "2020", name: "Arthur", value: 3804 },
  { year: "2020", name: "Louis", value: 3794 },
  { year: "2020", name: "Jules", value: 3547 },
  { year: "2020", name: "Adam", value: 3393 },
  { year: "2020", name: "Maël", value: 3302 },
  { year: "2020", name: "Lucas", value: 3250 },
  { year: "2020", name: "Hugo", value: 3129 },
  { year: "2020", name: "Noah", value: 2811 },
  { year: "2020", name: "Liam", value: 2747 },
  { year: "2020", name: "Gabin", value: 2726 },
  { year: "2020", name: "Sacha", value: 2553 },
  { year: "2020", name: "Paul", value: 2475 },
  { year: "2020", name: "Nathan", value: 2405 },
  { year: "2020", name: "Aaron", value: 2313 },
  { year: "2020", name: "Mohamed", value: 2311 },
  { year: "2020", name: "Ethan", value: 2283 },
  { year: "2020", name: "Eden", value: 2226 },
  { year: "2020", name: "Tom", value: 2221 },
  { year: "2020", name: "Léon", value: 2168 },
  { year: "2020", name: "Noé", value: 2130 },
  { year: "2020", name: "Tiago", value: 1972 },
  { year: "2020", name: "Théo", value: 1939 },
  { year: "2020", name: "Isaac", value: 1935 },
  { year: "2020", name: "Marius", value: 1844 },
  { year: "2020", name: "Victor", value: 1811 },
  { year: "2020", name: "Naël", value: 1793 },
  { year: "2020", name: "Ayden", value: 1790 },
  { year: "2020", name: "Martin", value: 1774 },
  { year: "2020", name: "Mathis", value: 1734 },
  { year: "2020", name: "Axel", value: 1689 },
  { year: "2020", name: "Robin", value: 1630 },
  { year: "2020", name: "Timéo", value: 1627 },
  { year: "2020", name: "Enzo", value: 1590 },
  { year: "2020", name: "Marceau", value: 1577 },
  { year: "2020", name: "Eliott", value: 1527 },
  { year: "2020", name: "Nino", value: 1527 },
  { year: "2020", name: "Valentin", value: 1527 },
  { year: "2020", name: "Nolan", value: 1507 },
  { year: "2020", name: "Malo", value: 1501 },
  { year: "2020", name: "Milo", value: 1476 },
  { year: "2020", name: "Antoine", value: 1458 },
  { year: "2020", name: "Samuel", value: 1418 },
  { year: "2020", name: "Augustin", value: 1379 },
  { year: "2020", name: "Amir", value: 1365 },
  { year: "2020", name: "Lyam", value: 1363 },
  { year: "2020", name: "Rayan", value: 1351 },
  { year: "2020", name: "Yanis", value: 1340 },
  { year: "2020", name: "Ibrahim", value: 1332 },
  { year: "2020", name: "Gaspard", value: 1297 },
  { year: "2020", name: "Sohan", value: 1234 },
  { year: "2020", name: "Clément", value: 1217 },
  { year: "2020", name: "Mathéo", value: 1208 },
  { year: "2020", name: "Simon", value: 1205 },
  { year: "2020", name: "Baptiste", value: 1204 },
  { year: "2020", name: "Imran", value: 1196 },
  { year: "2020", name: "Maxence", value: 1194 },
  { year: "2020", name: "Kaïs", value: 1163 },
  { year: "2020", name: "Côme", value: 1137 },
  { year: "2020", name: "Soan", value: 1111 },
  { year: "2020", name: "Evan", value: 1092 },
  { year: "2020", name: "Maxime", value: 1053 },
  { year: "2020", name: "Camille", value: 1046 },
  { year: "2020", name: "Alexandre", value: 1041 },
  { year: "2020", name: "Owen", value: 1040 },
  { year: "2020", name: "Ismaël", value: 1010 },
  { year: "2020", name: "Lenny", value: 984 },
  { year: "2020", name: "Pablo", value: 970 },
  { year: "2020", name: "Naïm", value: 952 },
  { year: "2020", name: "Léandre", value: 946 },
  { year: "2020", name: "Ilyan", value: 915 },
  { year: "2020", name: "Thomas", value: 900 },
  { year: "2020", name: "Joseph", value: 846 },
  { year: "2020", name: "Oscar", value: 844 },
  { year: "2020", name: "Elio", value: 842 },
  { year: "2020", name: "Noa", value: 839 },
  { year: "2020", name: "Malone", value: 838 },
  { year: "2020", name: "Diego", value: 818 },
  { year: "2020", name: "Noam", value: 816 },
  { year: "2020", name: "Livio", value: 800 },
  { year: "2020", name: "Charlie", value: 795 },
  { year: "2020", name: "Charly", value: 789 },
  { year: "2020", name: "Basile", value: 786 },
  { year: "2020", name: "Ilyes", value: 786 },
  { year: "2020", name: "Milan", value: 783 },
  { year: "2020", name: "Ali", value: 762 },
  { year: "2020", name: "Anas", value: 758 },
  { year: "2020", name: "Logan", value: 747 },
  { year: "2020", name: "Mathys", value: 723 },
  { year: "2020", name: "William", value: 711 },
  { year: "2020", name: "Alessio", value: 706 },
  { year: "2020", name: "Timothée", value: 699 },
  { year: "2020", name: "Ayoub", value: 698 },
  { year: "2020", name: "Youssef", value: 697 },
  { year: "2020", name: "Auguste", value: 695 },
  { year: "2020", name: "Adem", value: 693 },
  { year: "2020", name: "Wassim", value: 691 },
  { year: "2020", name: "Charles", value: 687 },
  { year: "2019", name: "Gabriel", value: 4988 },
  { year: "2019", name: "Léo", value: 4656 },
  { year: "2019", name: "Raphaël", value: 4470 },
  { year: "2019", name: "Arthur", value: 4010 },
  { year: "2019", name: "Louis", value: 3951 },
  { year: "2019", name: "Lucas", value: 3738 },
  { year: "2019", name: "Adam", value: 3676 },
  { year: "2019", name: "Jules", value: 3539 },
  { year: "2019", name: "Hugo", value: 3494 },
  { year: "2019", name: "Maël", value: 3390 },
  { year: "2019", name: "Liam", value: 3070 },
  { year: "2019", name: "Noah", value: 2908 },
  { year: "2019", name: "Paul", value: 2837 },
  { year: "2019", name: "Ethan", value: 2728 },
  { year: "2019", name: "Tiago", value: 2704 },
  { year: "2019", name: "Sacha", value: 2643 },
  { year: "2019", name: "Gabin", value: 2626 },
  { year: "2019", name: "Nathan", value: 2598 },
  { year: "2019", name: "Mohamed", value: 2580 },
  { year: "2019", name: "Aaron", value: 2447 },
  { year: "2019", name: "Tom", value: 2305 },
  { year: "2019", name: "Eden", value: 2215 },
  { year: "2019", name: "Théo", value: 2172 },
  { year: "2019", name: "Noé", value: 2154 },
  { year: "2019", name: "Léon", value: 2119 },
  { year: "2019", name: "Martin", value: 1940 },
  { year: "2019", name: "Nolan", value: 1928 },
  { year: "2019", name: "Mathis", value: 1925 },
  { year: "2019", name: "Victor", value: 1873 },
  { year: "2019", name: "Timéo", value: 1848 },
  { year: "2019", name: "Marius", value: 1834 },
  { year: "2019", name: "Enzo", value: 1833 },
  { year: "2019", name: "Axel", value: 1811 },
  { year: "2019", name: "Antoine", value: 1787 },
  { year: "2019", name: "Robin", value: 1677 },
  { year: "2019", name: "Isaac", value: 1665 },
  { year: "2019", name: "Naël", value: 1620 },
  { year: "2019", name: "Amir", value: 1602 },
  { year: "2019", name: "Valentin", value: 1585 },
  { year: "2019", name: "Rayan", value: 1584 },
  { year: "2019", name: "Augustin", value: 1548 },
  { year: "2019", name: "Ayden", value: 1532 },
  { year: "2019", name: "Clément", value: 1526 },
  { year: "2019", name: "Eliott", value: 1503 },
  { year: "2019", name: "Samuel", value: 1501 },
  { year: "2019", name: "Marceau", value: 1419 },
  { year: "2019", name: "Baptiste", value: 1403 },
  { year: "2019", name: "Gaspard", value: 1345 },
  { year: "2019", name: "Yanis", value: 1308 },
  { year: "2019", name: "Maxence", value: 1288 },
  { year: "2019", name: "Ibrahim", value: 1283 },
  { year: "2019", name: "Malo", value: 1281 },
  { year: "2019", name: "Sohan", value: 1245 },
  { year: "2019", name: "Maxime", value: 1240 },
  { year: "2019", name: "Evan", value: 1237 },
  { year: "2019", name: "Nino", value: 1230 },
  { year: "2019", name: "Mathéo", value: 1224 },
  { year: "2019", name: "Simon", value: 1209 },
  { year: "2019", name: "Lyam", value: 1196 },
  { year: "2019", name: "Alexandre", value: 1153 },
  { year: "2019", name: "Kaïs", value: 1120 },
  { year: "2019", name: "Imran", value: 1116 },
  { year: "2019", name: "Naïm", value: 1113 },
  { year: "2019", name: "Ismaël", value: 1084 },
  { year: "2019", name: "Camille", value: 1070 },
  { year: "2019", name: "Thomas", value: 1060 },
  { year: "2019", name: "Milo", value: 1051 },
  { year: "2019", name: "Owen", value: 1048 },
  { year: "2019", name: "Côme", value: 1047 },
  { year: "2019", name: "Lenny", value: 1012 },
  { year: "2019", name: "Soan", value: 978 },
  { year: "2019", name: "Ilyan", value: 967 },
  { year: "2019", name: "Kylian", value: 948 },
  { year: "2019", name: "Noa", value: 915 },
  { year: "2019", name: "Ilyes", value: 885 },
  { year: "2019", name: "Oscar", value: 880 },
  { year: "2019", name: "Léandre", value: 873 },
  { year: "2019", name: "Pablo", value: 865 },
  { year: "2019", name: "Diego", value: 862 },
  { year: "2019", name: "Mathys", value: 843 },
  { year: "2019", name: "Joseph", value: 831 },
  { year: "2019", name: "Ayoub", value: 808 },
  { year: "2019", name: "Youssef", value: 805 },
  { year: "2019", name: "Wassim", value: 785 },
  { year: "2019", name: "Noam", value: 773 },
  { year: "2019", name: "Adem", value: 760 },
  { year: "2019", name: "William", value: 760 },
  { year: "2019", name: "Ali", value: 755 },
  { year: "2019", name: "Basile", value: 748 },
  { year: "2019", name: "Charles", value: 742 },
  { year: "2019", name: "Antonin", value: 741 },
  { year: "2019", name: "Thiago", value: 741 },
  { year: "2019", name: "Logan", value: 732 },
  { year: "2019", name: "Jean", value: 721 },
  { year: "2019", name: "Adrien", value: 720 },
  { year: "2019", name: "Marin", value: 718 },
  { year: "2019", name: "Charly", value: 713 },
  { year: "2019", name: "Esteban", value: 708 },
  { year: "2019", name: "Noham", value: 705 },
  { year: "2019", name: "Elio", value: 694 },
  { year: "2018", name: "Gabriel", value: 5425 },
  { year: "2018", name: "Raphaël", value: 4607 },
  { year: "2018", name: "Léo", value: 4453 },
  { year: "2018", name: "Louis", value: 4416 },
  { year: "2018", name: "Lucas", value: 3980 },
  { year: "2018", name: "Adam", value: 3899 },
  { year: "2018", name: "Arthur", value: 3753 },
  { year: "2018", name: "Jules", value: 3701 },
  { year: "2018", name: "Hugo", value: 3690 },
  { year: "2018", name: "Maël", value: 3266 },
  { year: "2018", name: "Liam", value: 3156 },
  { year: "2018", name: "Ethan", value: 3155 },
  { year: "2018", name: "Paul", value: 2995 },
  { year: "2018", name: "Nathan", value: 2918 },
  { year: "2018", name: "Gabin", value: 2798 },
  { year: "2018", name: "Sacha", value: 2762 },
  { year: "2018", name: "Noah", value: 2624 },
  { year: "2018", name: "Tom", value: 2581 },
  { year: "2018", name: "Mohamed", value: 2482 },
  { year: "2018", name: "Aaron", value: 2251 },
  { year: "2018", name: "Théo", value: 2208 },
  { year: "2018", name: "Noé", value: 2137 },
  { year: "2018", name: "Victor", value: 2117 },
  { year: "2018", name: "Martin", value: 2116 },
  { year: "2018", name: "Mathis", value: 2101 },
  { year: "2018", name: "Timéo", value: 2098 },
  { year: "2018", name: "Nolan", value: 2086 },
  { year: "2018", name: "Enzo", value: 2072 },
  { year: "2018", name: "Eden", value: 2039 },
  { year: "2018", name: "Axel", value: 1992 },
  { year: "2018", name: "Antoine", value: 1895 },
  { year: "2018", name: "Léon", value: 1873 },
  { year: "2018", name: "Marius", value: 1852 },
  { year: "2018", name: "Robin", value: 1819 },
  { year: "2018", name: "Valentin", value: 1704 },
  { year: "2018", name: "Clément", value: 1603 },
  { year: "2018", name: "Rayan", value: 1593 },
  { year: "2018", name: "Baptiste", value: 1587 },
  { year: "2018", name: "Samuel", value: 1582 },
  { year: "2018", name: "Tiago", value: 1580 },
  { year: "2018", name: "Amir", value: 1559 },
  { year: "2018", name: "Augustin", value: 1537 },
  { year: "2018", name: "Naël", value: 1535 },
  { year: "2018", name: "Maxime", value: 1481 },
  { year: "2018", name: "Maxence", value: 1437 },
  { year: "2018", name: "Gaspard", value: 1424 },
  { year: "2018", name: "Eliott", value: 1404 },
  { year: "2018", name: "Alexandre", value: 1377 },
  { year: "2018", name: "Isaac", value: 1376 },
  { year: "2018", name: "Yanis", value: 1354 },
  { year: "2018", name: "Mathéo", value: 1345 },
  { year: "2018", name: "Evan", value: 1317 },
  { year: "2018", name: "Simon", value: 1290 },
  { year: "2018", name: "Malo", value: 1238 },
  { year: "2018", name: "Nino", value: 1238 },
  { year: "2018", name: "Kylian", value: 1232 },
  { year: "2018", name: "Marceau", value: 1219 },
  { year: "2018", name: "Ibrahim", value: 1208 },
  { year: "2018", name: "Thomas", value: 1207 },
  { year: "2018", name: "Imran", value: 1182 },
  { year: "2018", name: "Ayden", value: 1174 },
  { year: "2018", name: "Lenny", value: 1153 },
  { year: "2018", name: "Lyam", value: 1140 },
  { year: "2018", name: "Camille", value: 1137 },
  { year: "2018", name: "Kaïs", value: 1125 },
  { year: "2018", name: "Oscar", value: 1049 },
  { year: "2018", name: "Naïm", value: 1031 },
  { year: "2018", name: "Sohan", value: 1020 },
  { year: "2018", name: "Côme", value: 1007 },
  { year: "2018", name: "Milo", value: 997 },
  { year: "2018", name: "Noa", value: 970 },
  { year: "2018", name: "Ismaël", value: 938 },
  { year: "2018", name: "Noam", value: 925 },
  { year: "2018", name: "Ilyes", value: 923 },
  { year: "2018", name: "Diego", value: 915 },
  { year: "2018", name: "Léandre", value: 899 },
  { year: "2018", name: "Soan", value: 886 },
  { year: "2018", name: "Mathys", value: 877 },
  { year: "2018", name: "Alexis", value: 846 },
  { year: "2018", name: "Lorenzo", value: 836 },
  { year: "2018", name: "Esteban", value: 831 },
  { year: "2018", name: "Youssef", value: 828 },
  { year: "2018", name: "Ilyan", value: 823 },
  { year: "2018", name: "Owen", value: 823 },
  { year: "2018", name: "William", value: 800 },
  { year: "2018", name: "Ali", value: 787 },
  { year: "2018", name: "Adrien", value: 786 },
  { year: "2018", name: "Ayoub", value: 786 },
  { year: "2018", name: "Jean", value: 785 },
  { year: "2018", name: "David", value: 784 },
  { year: "2018", name: "Adem", value: 773 },
  { year: "2018", name: "Wassim", value: 766 },
  { year: "2018", name: "Logan", value: 758 },
  { year: "2018", name: "Pablo", value: 758 },
  { year: "2018", name: "Sandro", value: 758 },
  { year: "2018", name: "Antonin", value: 743 },
  { year: "2018", name: "Joseph", value: 743 },
  { year: "2018", name: "Benjamin", value: 735 },
  { year: "2018", name: "Noham", value: 726 },
  { year: "2018", name: "Amine", value: 724 },
  { year: "2017", name: "Gabriel", value: 5442 },
  { year: "2017", name: "Louis", value: 4408 },
  { year: "2017", name: "Raphaël", value: 4207 },
  { year: "2017", name: "Adam", value: 4185 },
  { year: "2017", name: "Jules", value: 4183 },
  { year: "2017", name: "Lucas", value: 4073 },
  { year: "2017", name: "Léo", value: 4059 },
  { year: "2017", name: "Hugo", value: 3713 },
  { year: "2017", name: "Arthur", value: 3481 },
  { year: "2017", name: "Nathan", value: 3435 },
  { year: "2017", name: "Liam", value: 3388 },
  { year: "2017", name: "Ethan", value: 3353 },
  { year: "2017", name: "Maël", value: 3308 },
  { year: "2017", name: "Paul", value: 3153 },
  { year: "2017", name: "Tom", value: 2840 },
  { year: "2017", name: "Sacha", value: 2745 },
  { year: "2017", name: "Noah", value: 2706 },
  { year: "2017", name: "Gabin", value: 2687 },
  { year: "2017", name: "Nolan", value: 2666 },
  { year: "2017", name: "Enzo", value: 2591 },
  { year: "2017", name: "Mohamed", value: 2524 },
  { year: "2017", name: "Aaron", value: 2383 },
  { year: "2017", name: "Timéo", value: 2271 },
  { year: "2017", name: "Théo", value: 2240 },
  { year: "2017", name: "Mathis", value: 2165 },
  { year: "2017", name: "Axel", value: 2117 },
  { year: "2017", name: "Victor", value: 2088 },
  { year: "2017", name: "Antoine", value: 2045 },
  { year: "2017", name: "Valentin", value: 2043 },
  { year: "2017", name: "Martin", value: 1982 },
  { year: "2017", name: "Noé", value: 1957 },
  { year: "2017", name: "Eden", value: 1824 },
  { year: "2017", name: "Rayan", value: 1820 },
  { year: "2017", name: "Robin", value: 1815 },
  { year: "2017", name: "Marius", value: 1813 },
  { year: "2017", name: "Clément", value: 1737 },
  { year: "2017", name: "Baptiste", value: 1716 },
  { year: "2017", name: "Maxime", value: 1689 },
  { year: "2017", name: "Samuel", value: 1660 },
  { year: "2017", name: "Léon", value: 1617 },
  { year: "2017", name: "Yanis", value: 1546 },
  { year: "2017", name: "Augustin", value: 1506 },
  { year: "2017", name: "Eliott", value: 1493 },
  { year: "2017", name: "Maxence", value: 1492 },
  { year: "2017", name: "Evan", value: 1485 },
  { year: "2017", name: "Mathéo", value: 1457 },
  { year: "2017", name: "Alexandre", value: 1412 },
  { year: "2017", name: "Thomas", value: 1386 },
  { year: "2017", name: "Simon", value: 1369 },
  { year: "2017", name: "Naël", value: 1363 },
  { year: "2017", name: "Gaspard", value: 1358 },
  { year: "2017", name: "Amir", value: 1338 },
  { year: "2017", name: "Tiago", value: 1331 },
  { year: "2017", name: "Isaac", value: 1276 },
  { year: "2017", name: "Ibrahim", value: 1236 },
  { year: "2017", name: "Nino", value: 1219 },
  { year: "2017", name: "Lyam", value: 1205 },
  { year: "2017", name: "Lenny", value: 1197 },
  { year: "2017", name: "Malo", value: 1173 },
  { year: "2017", name: "Imran", value: 1155 },
  { year: "2017", name: "Marceau", value: 1074 },
  { year: "2017", name: "Kaïs", value: 1069 },
  { year: "2017", name: "Alexis", value: 1068 },
  { year: "2017", name: "Camille", value: 1047 },
  { year: "2017", name: "Noa", value: 1024 },
  { year: "2017", name: "Oscar", value: 980 },
  { year: "2017", name: "Noam", value: 979 },
  { year: "2017", name: "Mathys", value: 970 },
  { year: "2017", name: "Esteban", value: 959 },
  { year: "2017", name: "Ayden", value: 950 },
  { year: "2017", name: "Ilyes", value: 947 },
  { year: "2017", name: "Lorenzo", value: 940 },
  { year: "2017", name: "Kylian", value: 939 },
  { year: "2017", name: "Ismaël", value: 879 },
  { year: "2017", name: "Adrien", value: 866 },
  { year: "2017", name: "Amine", value: 852 },
  { year: "2017", name: "Côme", value: 851 },
  { year: "2017", name: "Wassim", value: 848 },
  { year: "2017", name: "Soan", value: 837 },
  { year: "2017", name: "Naïm", value: 824 },
  { year: "2017", name: "Youssef", value: 819 },
  { year: "2017", name: "Milo", value: 809 },
  { year: "2017", name: "Benjamin", value: 807 },
  { year: "2017", name: "Ayoub", value: 805 },
  { year: "2017", name: "Joseph", value: 804 },
  { year: "2017", name: "Owen", value: 794 },
  { year: "2017", name: "Ali", value: 793 },
  { year: "2017", name: "William", value: 774 },
  { year: "2017", name: "Jean", value: 768 },
  { year: "2017", name: "Louka", value: 753 },
  { year: "2017", name: "Adem", value: 750 },
  { year: "2017", name: "Bastien", value: 750 },
  { year: "2017", name: "Léandre", value: 747 },
  { year: "2017", name: "Noham", value: 747 },
  { year: "2017", name: "Antonin", value: 745 },
  { year: "2017", name: "Logan", value: 743 },
  { year: "2017", name: "Kenzo", value: 733 },
  { year: "2017", name: "Younes", value: 723 },
  { year: "2017", name: "Sandro", value: 716 },
  { year: "2017", name: "David", value: 713 },
  { year: "2016", name: "Gabriel", value: 5875 },
  { year: "2016", name: "Jules", value: 5034 },
  { year: "2016", name: "Adam", value: 4661 },
  { year: "2016", name: "Lucas", value: 4589 },
  { year: "2016", name: "Louis", value: 4575 },
  { year: "2016", name: "Raphaël", value: 4398 },
  { year: "2016", name: "Hugo", value: 4062 },
  { year: "2016", name: "Léo", value: 4026 },
  { year: "2016", name: "Ethan", value: 3941 },
  { year: "2016", name: "Liam", value: 3666 },
  { year: "2016", name: "Nathan", value: 3615 },
  { year: "2016", name: "Arthur", value: 3558 },
  { year: "2016", name: "Paul", value: 3365 },
  { year: "2016", name: "Nolan", value: 3157 },
  { year: "2016", name: "Maël", value: 3123 },
  { year: "2016", name: "Sacha", value: 3013 },
  { year: "2016", name: "Tom", value: 2871 },
  { year: "2016", name: "Noah", value: 2865 },
  { year: "2016", name: "Enzo", value: 2769 },
  { year: "2016", name: "Gabin", value: 2683 },
  { year: "2016", name: "Timéo", value: 2504 },
  { year: "2016", name: "Théo", value: 2414 },
  { year: "2016", name: "Mohamed", value: 2390 },
  { year: "2016", name: "Mathis", value: 2373 },
  { year: "2016", name: "Aaron", value: 2372 },
  { year: "2016", name: "Axel", value: 2164 },
  { year: "2016", name: "Antoine", value: 2090 },
  { year: "2016", name: "Victor", value: 2059 },
  { year: "2016", name: "Maxime", value: 2006 },
  { year: "2016", name: "Clément", value: 1966 },
  { year: "2016", name: "Baptiste", value: 1961 },
  { year: "2016", name: "Martin", value: 1956 },
  { year: "2016", name: "Yanis", value: 1866 },
  { year: "2016", name: "Rayan", value: 1845 },
  { year: "2016", name: "Noé", value: 1843 },
  { year: "2016", name: "Eden", value: 1827 },
  { year: "2016", name: "Robin", value: 1804 },
  { year: "2016", name: "Valentin", value: 1788 },
  { year: "2016", name: "Marius", value: 1710 },
  { year: "2016", name: "Maxence", value: 1648 },
  { year: "2016", name: "Evan", value: 1601 },
  { year: "2016", name: "Thomas", value: 1589 },
  { year: "2016", name: "Alexandre", value: 1572 },
  { year: "2016", name: "Samuel", value: 1548 },
  { year: "2016", name: "Mathéo", value: 1490 },
  { year: "2016", name: "Simon", value: 1428 },
  { year: "2016", name: "Lenny", value: 1394 },
  { year: "2016", name: "Augustin", value: 1393 },
  { year: "2016", name: "Léon", value: 1372 },
  { year: "2016", name: "Tiago", value: 1293 },
  { year: "2016", name: "Lyam", value: 1288 },
  { year: "2016", name: "Eliott", value: 1280 },
  { year: "2016", name: "Naël", value: 1256 },
  { year: "2016", name: "Alexis", value: 1249 },
  { year: "2016", name: "Gaspard", value: 1236 },
  { year: "2016", name: "Nino", value: 1198 },
  { year: "2016", name: "Ibrahim", value: 1158 },
  { year: "2016", name: "Imran", value: 1156 },
  { year: "2016", name: "Malo", value: 1126 },
  { year: "2016", name: "Noam", value: 1104 },
  { year: "2016", name: "Isaac", value: 1103 },
  { year: "2016", name: "Camille", value: 1073 },
  { year: "2016", name: "Lorenzo", value: 1056 },
  { year: "2016", name: "Kaïs", value: 1039 },
  { year: "2016", name: "Mathys", value: 1033 },
  { year: "2016", name: "Noa", value: 1017 },
  { year: "2016", name: "Esteban", value: 1002 },
  { year: "2016", name: "Ilyes", value: 995 },
  { year: "2016", name: "Amir", value: 991 },
  { year: "2016", name: "Oscar", value: 958 },
  { year: "2016", name: "Kenzo", value: 924 },
  { year: "2016", name: "Marceau", value: 924 },
  { year: "2016", name: "Ayoub", value: 901 },
  { year: "2016", name: "Adrien", value: 892 },
  { year: "2016", name: "Amine", value: 886 },
  { year: "2016", name: "Soan", value: 863 },
  { year: "2016", name: "William", value: 857 },
  { year: "2016", name: "Milan", value: 843 },
  { year: "2016", name: "Joseph", value: 841 },
  { year: "2016", name: "Youssef", value: 838 },
  { year: "2016", name: "Antonin", value: 833 },
  { year: "2016", name: "Benjamin", value: 831 },
  { year: "2016", name: "Milo", value: 812 },
  { year: "2016", name: "Louka", value: 797 },
  { year: "2016", name: "Kylian", value: 793 },
  { year: "2016", name: "Rafael", value: 793 },
  { year: "2016", name: "Younes", value: 791 },
  { year: "2016", name: "Noham", value: 790 },
  { year: "2016", name: "Côme", value: 789 },
  { year: "2016", name: "Jean", value: 786 },
  { year: "2016", name: "David", value: 784 },
  { year: "2016", name: "Ali", value: 772 },
  { year: "2016", name: "Adem", value: 768 },
  { year: "2016", name: "Ismaël", value: 764 },
  { year: "2016", name: "Wassim", value: 751 },
  { year: "2016", name: "Ruben", value: 748 },
  { year: "2016", name: "Ayden", value: 747 },
  { year: "2016", name: "Pierre", value: 746 },
  { year: "2016", name: "Sasha", value: 730 },
  { year: "2016", name: "Owen", value: 720 },
  { year: "2015", name: "Gabriel", value: 5653 },
  { year: "2015", name: "Jules", value: 5153 },
  { year: "2015", name: "Lucas", value: 5019 },
  { year: "2015", name: "Louis", value: 4750 },
  { year: "2015", name: "Adam", value: 4536 },
  { year: "2015", name: "Hugo", value: 4351 },
  { year: "2015", name: "Léo", value: 4310 },
  { year: "2015", name: "Raphaël", value: 4217 },
  { year: "2015", name: "Ethan", value: 4140 },
  { year: "2015", name: "Nathan", value: 3870 },
  { year: "2015", name: "Arthur", value: 3692 },
  { year: "2015", name: "Paul", value: 3656 },
  { year: "2015", name: "Nolan", value: 3522 },
  { year: "2015", name: "Liam", value: 3472 },
  { year: "2015", name: "Enzo", value: 3099 },
  { year: "2015", name: "Sacha", value: 3059 },
  { year: "2015", name: "Tom", value: 2983 },
  { year: "2015", name: "Timéo", value: 2841 },
  { year: "2015", name: "Théo", value: 2815 },
  { year: "2015", name: "Noah", value: 2720 },
  { year: "2015", name: "Maël", value: 2668 },
  { year: "2015", name: "Gabin", value: 2632 },
  { year: "2015", name: "Mohamed", value: 2611 },
  { year: "2015", name: "Mathis", value: 2601 },
  { year: "2015", name: "Axel", value: 2306 },
  { year: "2015", name: "Maxime", value: 2222 },
  { year: "2015", name: "Baptiste", value: 2217 },
  { year: "2015", name: "Clément", value: 2192 },
  { year: "2015", name: "Aaron", value: 2156 },
  { year: "2015", name: "Martin", value: 2127 },
  { year: "2015", name: "Antoine", value: 2110 },
  { year: "2015", name: "Victor", value: 2034 },
  { year: "2015", name: "Yanis", value: 2013 },
  { year: "2015", name: "Rayan", value: 1996 },
  { year: "2015", name: "Thomas", value: 1976 },
  { year: "2015", name: "Valentin", value: 1932 },
  { year: "2015", name: "Noé", value: 1919 },
  { year: "2015", name: "Robin", value: 1864 },
  { year: "2015", name: "Maxence", value: 1793 },
  { year: "2015", name: "Evan", value: 1780 },
  { year: "2015", name: "Alexandre", value: 1733 },
  { year: "2015", name: "Mathéo", value: 1728 },
  { year: "2015", name: "Marius", value: 1586 },
  { year: "2015", name: "Eden", value: 1584 },
  { year: "2015", name: "Lenny", value: 1567 },
  { year: "2015", name: "Simon", value: 1523 },
  { year: "2015", name: "Alexis", value: 1517 },
  { year: "2015", name: "Samuel", value: 1487 },
  { year: "2015", name: "Tiago", value: 1430 },
  { year: "2015", name: "Augustin", value: 1345 },
  { year: "2015", name: "Gaspard", value: 1309 },
  { year: "2015", name: "Léon", value: 1247 },
  { year: "2015", name: "Eliott", value: 1163 },
  { year: "2015", name: "Lorenzo", value: 1161 },
  { year: "2015", name: "Nino", value: 1124 },
  { year: "2015", name: "Esteban", value: 1118 },
  { year: "2015", name: "Noa", value: 1118 },
  { year: "2015", name: "Ibrahim", value: 1113 },
  { year: "2015", name: "Kaïs", value: 1093 },
  { year: "2015", name: "Mathys", value: 1091 },
  { year: "2015", name: "Naël", value: 1078 },
  { year: "2015", name: "Imran", value: 1077 },
  { year: "2015", name: "Lyam", value: 1077 },
  { year: "2015", name: "Camille", value: 1068 },
  { year: "2015", name: "Malo", value: 1053 },
  { year: "2015", name: "Ilyes", value: 1008 },
  { year: "2015", name: "Youssef", value: 998 },
  { year: "2015", name: "Benjamin", value: 993 },
  { year: "2015", name: "Noam", value: 992 },
  { year: "2015", name: "Isaac", value: 984 },
  { year: "2015", name: "Amine", value: 976 },
  { year: "2015", name: "Adrien", value: 969 },
  { year: "2015", name: "Ayoub", value: 959 },
  { year: "2015", name: "Kenzo", value: 957 },
  { year: "2015", name: "Antonin", value: 947 },
  { year: "2015", name: "Oscar", value: 947 },
  { year: "2015", name: "Kylian", value: 944 },
  { year: "2015", name: "William", value: 936 },
  { year: "2015", name: "Louka", value: 910 },
  { year: "2015", name: "Raphael", value: 903 },
  { year: "2015", name: "Quentin", value: 874 },
  { year: "2015", name: "Amir", value: 848 },
  { year: "2015", name: "Milan", value: 846 },
  { year: "2015", name: "Ruben", value: 841 },
  { year: "2015", name: "Diego", value: 839 },
  { year: "2015", name: "Jean", value: 812 },
  { year: "2015", name: "Joseph", value: 803 },
  { year: "2015", name: "Bastien", value: 802 },
  { year: "2015", name: "Rafael", value: 800 },
  { year: "2015", name: "Soan", value: 797 },
  { year: "2015", name: "Leo", value: 789 },
  { year: "2015", name: "Pierre", value: 789 },
  { year: "2015", name: "Thibault", value: 786 },
  { year: "2015", name: "David", value: 778 },
  { year: "2015", name: "Wassim", value: 773 },
  { year: "2015", name: "Marceau", value: 769 },
  { year: "2015", name: "Younes", value: 765 },
  { year: "2015", name: "Noham", value: 757 },
  { year: "2015", name: "Adem", value: 755 },
  { year: "2015", name: "Milo", value: 733 },
  { year: "2014", name: "Lucas", value: 5473 },
  { year: "2014", name: "Gabriel", value: 5362 },
  { year: "2014", name: "Louis", value: 4986 },
  { year: "2014", name: "Hugo", value: 4900 },
  { year: "2014", name: "Jules", value: 4679 },
  { year: "2014", name: "Adam", value: 4558 },
  { year: "2014", name: "Ethan", value: 4392 },
  { year: "2014", name: "Léo", value: 4335 },
  { year: "2014", name: "Nathan", value: 4159 },
  { year: "2014", name: "Nolan", value: 4064 },
  { year: "2014", name: "Arthur", value: 3856 },
  { year: "2014", name: "Raphaël", value: 3845 },
  { year: "2014", name: "Enzo", value: 3739 },
  { year: "2014", name: "Paul", value: 3700 },
  { year: "2014", name: "Sacha", value: 3159 },
  { year: "2014", name: "Timéo", value: 3137 },
  { year: "2014", name: "Tom", value: 3108 },
  { year: "2014", name: "Liam", value: 3028 },
  { year: "2014", name: "Mathis", value: 2976 },
  { year: "2014", name: "Noah", value: 2944 },
  { year: "2014", name: "Théo", value: 2852 },
  { year: "2014", name: "Maël", value: 2805 },
  { year: "2014", name: "Mohamed", value: 2659 },
  { year: "2014", name: "Gabin", value: 2605 },
  { year: "2014", name: "Maxime", value: 2580 },
  { year: "2014", name: "Clément", value: 2504 },
  { year: "2014", name: "Axel", value: 2462 },
  { year: "2014", name: "Antoine", value: 2222 },
  { year: "2014", name: "Yanis", value: 2216 },
  { year: "2014", name: "Baptiste", value: 2215 },
  { year: "2014", name: "Thomas", value: 2180 },
  { year: "2014", name: "Victor", value: 2062 },
  { year: "2014", name: "Noé", value: 2056 },
  { year: "2014", name: "Aaron", value: 2054 },
  { year: "2014", name: "Evan", value: 1979 },
  { year: "2014", name: "Maxence", value: 1976 },
  { year: "2014", name: "Robin", value: 1970 },
  { year: "2014", name: "Valentin", value: 1950 },
  { year: "2014", name: "Mathéo", value: 1945 },
  { year: "2014", name: "Rayan", value: 1922 },
  { year: "2014", name: "Martin", value: 1863 },
  { year: "2014", name: "Alexandre", value: 1817 },
  { year: "2014", name: "Samuel", value: 1652 },
  { year: "2014", name: "Eden", value: 1649 },
  { year: "2014", name: "Alexis", value: 1635 },
  { year: "2014", name: "Simon", value: 1616 },
  { year: "2014", name: "Lenny", value: 1571 },
  { year: "2014", name: "Marius", value: 1470 },
  { year: "2014", name: "Tiago", value: 1403 },
  { year: "2014", name: "Mathys", value: 1333 },
  { year: "2014", name: "Noa", value: 1315 },
  { year: "2014", name: "Lorenzo", value: 1218 },
  { year: "2014", name: "Gaspard", value: 1186 },
  { year: "2014", name: "Augustin", value: 1148 },
  { year: "2014", name: "Adrien", value: 1145 },
  { year: "2014", name: "Benjamin", value: 1137 },
  { year: "2014", name: "Naël", value: 1121 },
  { year: "2014", name: "Eliott", value: 1107 },
  { year: "2014", name: "Kaïs", value: 1105 },
  { year: "2014", name: "Quentin", value: 1094 },
  { year: "2014", name: "Malo", value: 1083 },
  { year: "2014", name: "Ilyes", value: 1075 },
  { year: "2014", name: "Léon", value: 1066 },
  { year: "2014", name: "Amine", value: 1061 },
  { year: "2014", name: "Nino", value: 1050 },
  { year: "2014", name: "Esteban", value: 1037 },
  { year: "2014", name: "Louka", value: 1032 },
  { year: "2014", name: "Kylian", value: 1022 },
  { year: "2014", name: "Antonin", value: 1011 },
  { year: "2014", name: "Ibrahim", value: 1008 },
  { year: "2014", name: "Ruben", value: 1008 },
  { year: "2014", name: "Camille", value: 994 },
  { year: "2014", name: "Raphael", value: 987 },
  { year: "2014", name: "Noam", value: 984 },
  { year: "2014", name: "Kenzo", value: 978 },
  { year: "2014", name: "Pierre", value: 971 },
  { year: "2014", name: "Oscar", value: 967 },
  { year: "2014", name: "Amir", value: 925 },
  { year: "2014", name: "Soan", value: 910 },
  { year: "2014", name: "Ayoub", value: 901 },
  { year: "2014", name: "Isaac", value: 900 },
  { year: "2014", name: "William", value: 889 },
  { year: "2014", name: "Lyam", value: 885 },
  { year: "2014", name: "Bastien", value: 852 },
  { year: "2014", name: "Thibault", value: 845 },
  { year: "2014", name: "Imran", value: 834 },
  { year: "2014", name: "Charly", value: 824 },
  { year: "2014", name: "Milan", value: 821 },
  { year: "2014", name: "Jean", value: 820 },
  { year: "2014", name: "Youssef", value: 814 },
  { year: "2014", name: "Diego", value: 806 },
  { year: "2014", name: "Younes", value: 801 },
  { year: "2014", name: "Romain", value: 772 },
  { year: "2014", name: "Loan", value: 767 },
  { year: "2014", name: "Leo", value: 753 },
  { year: "2014", name: "Adem", value: 752 },
  { year: "2014", name: "David", value: 744 },
  { year: "2014", name: "Charlie", value: 742 },
  { year: "2014", name: "Mathias", value: 736 },
  { year: "2014", name: "Noham", value: 724 },
  { year: "2013", name: "Lucas", value: 5658 },
  { year: "2013", name: "Hugo", value: 5400 },
  { year: "2013", name: "Louis", value: 5290 },
  { year: "2013", name: "Gabriel", value: 5191 },
  { year: "2013", name: "Ethan", value: 4739 },
  { year: "2013", name: "Nathan", value: 4726 },
  { year: "2013", name: "Léo", value: 4566 },
  { year: "2013", name: "Adam", value: 4392 },
  { year: "2013", name: "Jules", value: 4301 },
  { year: "2013", name: "Nolan", value: 4284 },
  { year: "2013", name: "Enzo", value: 4179 },
  { year: "2013", name: "Arthur", value: 4054 },
  { year: "2013", name: "Timéo", value: 3724 },
  { year: "2013", name: "Raphaël", value: 3621 },
  { year: "2013", name: "Mathis", value: 3262 },
  { year: "2013", name: "Tom", value: 3213 },
  { year: "2013", name: "Théo", value: 3184 },
  { year: "2013", name: "Sacha", value: 3177 },
  { year: "2013", name: "Paul", value: 3141 },
  { year: "2013", name: "Noah", value: 2938 },
  { year: "2013", name: "Clément", value: 2926 },
  { year: "2013", name: "Maël", value: 2897 },
  { year: "2013", name: "Liam", value: 2770 },
  { year: "2013", name: "Maxime", value: 2694 },
  { year: "2013", name: "Axel", value: 2611 },
  { year: "2013", name: "Gabin", value: 2578 },
  { year: "2013", name: "Mohamed", value: 2540 },
  { year: "2013", name: "Baptiste", value: 2431 },
  { year: "2013", name: "Thomas", value: 2379 },
  { year: "2013", name: "Yanis", value: 2359 },
  { year: "2013", name: "Antoine", value: 2291 },
  { year: "2013", name: "Mathéo", value: 2258 },
  { year: "2013", name: "Noé", value: 2102 },
  { year: "2013", name: "Maxence", value: 2064 },
  { year: "2013", name: "Rayan", value: 2042 },
  { year: "2013", name: "Robin", value: 2028 },
  { year: "2013", name: "Valentin", value: 1997 },
  { year: "2013", name: "Evan", value: 1995 },
  { year: "2013", name: "Alexandre", value: 1972 },
  { year: "2013", name: "Victor", value: 1934 },
  { year: "2013", name: "Aaron", value: 1907 },
  { year: "2013", name: "Alexis", value: 1711 },
  { year: "2013", name: "Simon", value: 1677 },
  { year: "2013", name: "Samuel", value: 1627 },
  { year: "2013", name: "Noa", value: 1599 },
  { year: "2013", name: "Martin", value: 1573 },
  { year: "2013", name: "Lenny", value: 1464 },
  { year: "2013", name: "Lorenzo", value: 1418 },
  { year: "2013", name: "Mathys", value: 1381 },
  { year: "2013", name: "Quentin", value: 1280 },
  { year: "2013", name: "Kylian", value: 1269 },
  { year: "2013", name: "Esteban", value: 1218 },
  { year: "2013", name: "Gaspard", value: 1187 },
  { year: "2013", name: "Tiago", value: 1162 },
  { year: "2013", name: "Eden", value: 1151 },
  { year: "2013", name: "Marius", value: 1147 },
  { year: "2013", name: "Naël", value: 1134 },
  { year: "2013", name: "Benjamin", value: 1130 },
  { year: "2013", name: "Kaïs", value: 1080 },
  { year: "2013", name: "Amine", value: 1072 },
  { year: "2013", name: "Adrien", value: 1061 },
  { year: "2013", name: "Eliott", value: 1035 },
  { year: "2013", name: "Léon", value: 1031 },
  { year: "2013", name: "Nino", value: 1031 },
  { year: "2013", name: "Ruben", value: 1019 },
  { year: "2013", name: "Ilyes", value: 1016 },
  { year: "2013", name: "Louka", value: 1011 },
  { year: "2013", name: "Augustin", value: 1005 },
  { year: "2013", name: "Bastien", value: 1000 },
  { year: "2013", name: "Pierre", value: 998 },
  { year: "2013", name: "Malo", value: 988 },
  { year: "2013", name: "Oscar", value: 977 },
  { year: "2013", name: "Camille", value: 969 },
  { year: "2013", name: "Noam", value: 969 },
  { year: "2013", name: "Romain", value: 948 },
  { year: "2013", name: "Kenzo", value: 945 },
  { year: "2013", name: "Antonin", value: 916 },
  { year: "2013", name: "Jean", value: 873 },
  { year: "2013", name: "William", value: 872 },
  { year: "2013", name: "Ibrahim", value: 868 },
  { year: "2013", name: "Noham", value: 857 },
  { year: "2013", name: "Ayoub", value: 854 },
  { year: "2013", name: "Titouan", value: 851 },
  { year: "2013", name: "Soan", value: 823 },
  { year: "2013", name: "Tristan", value: 806 },
  { year: "2013", name: "Youssef", value: 788 },
  { year: "2013", name: "Thibault", value: 783 },
  { year: "2013", name: "Mathias", value: 778 },
  { year: "2013", name: "Mattéo", value: 776 },
  { year: "2013", name: "Ismaël", value: 764 },
  { year: "2013", name: "Mathieu", value: 762 },
  { year: "2013", name: "Diego", value: 757 },
  { year: "2013", name: "Imran", value: 743 },
  { year: "2013", name: "Wassim", value: 736 },
  { year: "2013", name: "Isaac", value: 735 },
  { year: "2013", name: "Timothée", value: 729 },
  { year: "2013", name: "Corentin", value: 722 },
  { year: "2013", name: "Mehdi", value: 715 },
  { year: "2013", name: "Nicolas", value: 711 },
  { year: "2013", name: "Erwan", value: 708 },
  { year: "2012", name: "Lucas", value: 5730 },
  { year: "2012", name: "Nathan", value: 5425 },
  { year: "2012", name: "Louis", value: 5049 },
  { year: "2012", name: "Gabriel", value: 5018 },
  { year: "2012", name: "Ethan", value: 4802 },
  { year: "2012", name: "Hugo", value: 4702 },
  { year: "2012", name: "Enzo", value: 4687 },
  { year: "2012", name: "Jules", value: 4311 },
  { year: "2012", name: "Léo", value: 4161 },
  { year: "2012", name: "Adam", value: 4155 },
  { year: "2012", name: "Arthur", value: 4049 },
  { year: "2012", name: "Nolan", value: 3837 },
  { year: "2012", name: "Mathis", value: 3691 },
  { year: "2012", name: "Tom", value: 3545 },
  { year: "2012", name: "Raphaël", value: 3410 },
  { year: "2012", name: "Timéo", value: 3302 },
  { year: "2012", name: "Théo", value: 3170 },
  { year: "2012", name: "Paul", value: 3163 },
  { year: "2012", name: "Sacha", value: 3109 },
  { year: "2012", name: "Noah", value: 3063 },
  { year: "2012", name: "Yanis", value: 2839 },
  { year: "2012", name: "Maxime", value: 2838 },
  { year: "2012", name: "Maël", value: 2690 },
  { year: "2012", name: "Thomas", value: 2645 },
  { year: "2012", name: "Axel", value: 2636 },
  { year: "2012", name: "Clément", value: 2613 },
  { year: "2012", name: "Baptiste", value: 2591 },
  { year: "2012", name: "Mohamed", value: 2531 },
  { year: "2012", name: "Mathéo", value: 2520 },
  { year: "2012", name: "Gabin", value: 2495 },
  { year: "2012", name: "Antoine", value: 2450 },
  { year: "2012", name: "Evan", value: 2405 },
  { year: "2012", name: "Maxence", value: 2239 },
  { year: "2012", name: "Liam", value: 2131 },
  { year: "2012", name: "Alexandre", value: 2105 },
  { year: "2012", name: "Noé", value: 2069 },
  { year: "2012", name: "Rayan", value: 2036 },
  { year: "2012", name: "Alexis", value: 1985 },
  { year: "2012", name: "Valentin", value: 1917 },
  { year: "2012", name: "Victor", value: 1875 },
  { year: "2012", name: "Robin", value: 1871 },
  { year: "2012", name: "Noa", value: 1798 },
  { year: "2012", name: "Martin", value: 1787 },
  { year: "2012", name: "Aaron", value: 1728 },
  { year: "2012", name: "Simon", value: 1710 },
  { year: "2012", name: "Mathys", value: 1702 },
  { year: "2012", name: "Samuel", value: 1662 },
  { year: "2012", name: "Lenny", value: 1532 },
  { year: "2012", name: "Kylian", value: 1478 },
  { year: "2012", name: "Quentin", value: 1465 },
  { year: "2012", name: "Lorenzo", value: 1448 },
  { year: "2012", name: "Esteban", value: 1359 },
  { year: "2012", name: "Adrien", value: 1304 },
  { year: "2012", name: "Eliott", value: 1248 },
  { year: "2012", name: "Gaspard", value: 1209 },
  { year: "2012", name: "Marius", value: 1197 },
  { year: "2012", name: "Romain", value: 1169 },
  { year: "2012", name: "Amine", value: 1148 },
  { year: "2012", name: "Benjamin", value: 1148 },
  { year: "2012", name: "Tiago", value: 1090 },
  { year: "2012", name: "Ilyes", value: 1084 },
  { year: "2012", name: "Pierre", value: 1075 },
  { year: "2012", name: "Malo", value: 1068 },
  { year: "2012", name: "Nino", value: 1010 },
  { year: "2012", name: "Ruben", value: 994 },
  { year: "2012", name: "Noam", value: 989 },
  { year: "2012", name: "Kenzo", value: 975 },
  { year: "2012", name: "Bastien", value: 967 },
  { year: "2012", name: "Eden", value: 967 },
  { year: "2012", name: "Augustin", value: 950 },
  { year: "2012", name: "Titouan", value: 947 },
  { year: "2012", name: "Naël", value: 928 },
  { year: "2012", name: "Noham", value: 922 },
  { year: "2012", name: "Tristan", value: 921 },
  { year: "2012", name: "Mathias", value: 920 },
  { year: "2012", name: "Leo", value: 913 },
  { year: "2012", name: "Camille", value: 891 },
  { year: "2012", name: "Louka", value: 884 },
  { year: "2012", name: "Mathieu", value: 883 },
  { year: "2012", name: "Oscar", value: 878 },
  { year: "2012", name: "Mael", value: 870 },
  { year: "2012", name: "Jean", value: 856 },
  { year: "2012", name: "Dylan", value: 847 },
  { year: "2012", name: "Ayoub", value: 828 },
  { year: "2012", name: "William", value: 822 },
  { year: "2012", name: "Antonin", value: 821 },
  { year: "2012", name: "Corentin", value: 793 },
  { year: "2012", name: "Julien", value: 789 },
  { year: "2012", name: "Ibrahim", value: 783 },
  { year: "2012", name: "Kaïs", value: 782 },
  { year: "2012", name: "Léon", value: 782 },
  { year: "2012", name: "Raphael", value: 777 },
  { year: "2012", name: "David", value: 775 },
  { year: "2012", name: "Loan", value: 767 },
  { year: "2012", name: "Erwan", value: 766 },
  { year: "2012", name: "Loris", value: 761 },
  { year: "2012", name: "Mattéo", value: 755 },
  { year: "2012", name: "Diego", value: 744 },
  { year: "2012", name: "Soan", value: 740 },
  { year: "2012", name: "Wassim", value: 740 },
];

const timeParse = d3.timeParse("%Y");
const numberFormat = d3.format(",");

const names = data
  .map(({ name }) => name)
  .reduce((acc, curr) => (acc.includes(curr) ? [...acc] : [...acc, curr]), []);

const letters = names
  .map((name) => name[0])
  .reduce((acc, curr) => (acc.includes(curr) ? [...acc] : [...acc, curr]), []);

const dataStack = [...d3.group(data, (d) => d.year)].reduce(
  (acc, [year, values]) => {
    return [
      ...acc,
      {
        year: timeParse(year),
        ...values.reduce((a, { name, value }) => {
          const [letter] = name;

          return {
            ...a,
            [letter]: a[letter] ? a[letter] + value : value,
          };
        }, {}),
      },
    ];
  },
  []
);

const stack = d3
  .stack()
  .keys(letters)
  .value((d, key) => d[key] || 0)
  .offset(d3.stackOffsetSilhouette)
  .order(d3.stackOrderInsideOut);

const dataStacked = stack(dataStack);

const width = 1000;
const height = 500;
const margin = {
  top: 10,
  right: 20,
  bottom: 30,
  left: 20,
};

const scaleX = d3
  .scaleTime()
  .domain(d3.extent(dataStack, ({ year }) => year))
  .range([0, width]);

const scaleY = d3
  .scaleLinear()
  .domain(d3.extent(dataStacked.flat(2)))
  .range([0, height]);

const scaleColor = d3.scaleOrdinal(d3.schemeSet3);

const area = d3
  .area()
  .x(({ data }) => scaleX(data.year))
  .y0(([y0]) => scaleY(y0))
  .y1(([, y1]) => scaleY(y1))
  .curve(d3.curveBumpX);

const axisX = d3.axisBottom(scaleX).tickSize(0).tickPadding(12);

const root = d3.select("body").append("div").attr("id", "root");
const header = root.append("header");
header.append("h1").text("Names of the Future");

const visualization = root.append("div").attr("class", "visualization");

const svg = visualization
  .append("svg")
  .attr(
    "viewBox",
    `0 0 ${width + (margin.left + margin.right)} ${
      height + (margin.top + margin.bottom)
    }`
  );

visualization.style("position", "relative");

const tooltip = visualization
  .append("div")
  .attr("class", "tooltip")
  .style("position", "absolute")
  .style("pointer-events", "none")
  .style("visibility", "hidden")
  .style("opacity", "0");

const group = svg
  .append("g")
  .attr("transform", `translate(${margin.left} ${margin.top})`);

const defs = svg.append("defs");

const clipPath = defs.append("clipPath").attr("id", "clip-path-chart");

clipPath.append("rect").attr("width", width).attr("height", height);

const groupAxis = group.append("g");
const groupData = group.append("g");

const groupLetters = groupData
  .append("g")
  .attr("clip-path", "url(#clip-path-chart)");

const groupOverlay = groupData.append("g");

const groupLetter = groupData
  .append("g")
  .attr("clip-path", "url(#clip-path-chart)");

const groupNames = groupData
  .append("g")
  .attr("clip-path", "url(#clip-path-chart)");

groupAxis
  .append("g")
  .attr("class", "axis x-axis")
  .attr("transform", `translate(0 ${height})`)
  .call(axisX);

d3.select(".x-axis").select("path").remove();

groupLetters
  .selectAll("path")
  .data(dataStacked)
  .enter()
  .append("path")
  .attr("fill", (_, i) => scaleColor(i))
  .attr("d", area);

groupOverlay
  .style("pointer-events", "none")
  .style("cursor", "zoom-out")
  .attr("opacity", "0")
  .append("rect")
  .attr("transform", `translate(${-margin.left} ${-margin.top})`)
  .attr("width", width + (margin.left + margin.right))
  .attr("height", height + margin.top);

groupLetters
  .selectAll("path")
  .on("pointerenter", function (e, { key }) {
    groupLetters.selectAll("path").style("filter", "brightness(90%)");

    d3.select(this).style("filter", "brightness(100%)");

    tooltip
      .style("visibility", "visible")
      .style("opacity", "1")
      .style("left", `${e.offsetX}px`)
      .style("top", `${e.offsetY}px`);

    tooltip.append("p").html(`Letter: <strong>${key}</strong>`);
  })
  .on("pointermove", (e) => {
    tooltip.style("left", `${e.offsetX}px`).style("top", `${e.offsetY}px`);
  })
  .on("pointerleave", () => {
    groupLetters.selectAll("path").style("filter", "brightness(100%)");

    tooltip
      .style("visibility", "hidden")
      .style("opacity", "0")
      .selectAll("*")
      .remove();
  });

groupLetters
  .selectAll("path")
  .style("cursor", "zoom-in")
  .on("click", function (e, d) {
    groupLetters.selectAll("path").style("filter", "brightness(100%)");

    tooltip
      .style("visibility", "hidden")
      .style("opacity", "0")
      .selectAll("*")
      .remove();

    groupOverlay.style("pointer-events", "initial");

    const letter = d.key;

    const dataStackedLetter = d3
      .stack()
      .keys(letters)
      .value((d, key) => {
        if (key !== letter) return 0;

        return d[key] || 0;
      })
      .offset(d3.stackOffsetSilhouette)
      .order(d3.stackOrderInsideOut)(dataStack);

    const scaleYLetter = d3
      .scaleLinear()
      .domain(d3.extent(dataStackedLetter.flat(2)))
      .range([0, height]);

    const areaLetter = d3
      .area()
      .x(({ data }) => scaleX(data.year))
      .y0(([y0]) => scaleYLetter(y0))
      .y1(([, y1]) => scaleYLetter(y1))
      .curve(d3.curveBumpX);

    const transition = d3.transition().duration(750).ease(d3.easeQuadInOut);

    const i = groupLetters.selectAll("path").nodes().indexOf(this);

    groupLetter
      .append("path")
      .datum(dataStacked[i])
      .attr("fill", scaleColor(i))
      .attr("d", area);

    groupLetter
      .select("path")
      .datum(dataStackedLetter[i])
      .transition(transition)
      .attr("d", areaLetter);

    const namesLetter = names.filter((name) => name[0] === letter);
    const dataStackNames = [...d3.group(data, (d) => d.year)].reduce(
      (acc, [year, values]) => {
        return [
          ...acc,
          {
            year: timeParse(year),
            ...values.reduce((a, { name, value }) => {
              if (name[0] === letter) {
                a[name] = value;
              }
              return a;
            }, {}),
          },
        ];
      },
      []
    );

    const dataStackedNames = d3
      .stack()
      .keys(namesLetter)
      .value((d, key) => d[key] || 0)
      .offset(d3.stackOffsetSilhouette)
      .order(d3.stackOrderInsideOut)(dataStackNames);

    const scaleColorNames = d3
      .scaleLinear()
      .domain([-1, dataStackedNames.length - 1])
      .range([scaleColor(i), d3.color(scaleColor(i)).darker(1).hex()]);

    groupNames
      .selectAll("path")
      .data(dataStackedNames)
      .enter()
      .append("path")
      .attr("fill", (_, i) => scaleColorNames(i))
      .attr("d", areaLetter)
      .attr("opacity", "0");

    groupLetters
      .selectAll("path")
      .data(dataStackedLetter)
      .transition(transition)
      .attr("d", areaLetter);

    transition.on("end", () => {
      const transition = d3
        .transition()
        .duration(750)
        .delay(50)
        .ease(d3.easeQuadInOut);

      groupNames.selectAll("path").transition(transition).attr("opacity", "1");

      transition.on("end", () => {
        groupNames
          .selectAll("path")
          .on("pointerenter", function (e, { key }) {
            groupNames.selectAll("path").style("filter", "brightness(90%)");

            d3.select(this).style("filter", "brightness(100%)");

            tooltip
              .style("visibility", "visible")
              .style("opacity", "1")
              .style("left", `${e.offsetX}px`)
              .style("top", `${e.offsetY}px`);

            tooltip.append("p").html(`Name: <strong>${key}</strong>`);
          })
          .on("pointermove", (e) => {
            tooltip
              .style("left", `${e.offsetX}px`)
              .style("top", `${e.offsetY}px`);
          })
          .on("pointerleave", function () {
            groupNames.selectAll("path").style("filter", "brightness(100%)");

            tooltip
              .style("visibility", "hidden")
              .style("opacity", "0")
              .selectAll("*")
              .remove();
          });

        groupOverlay.on(
          "click",
          function (e, d) {
            const transition = d3
              .transition()
              .duration(750)
              .ease(d3.easeQuadInOut);

            groupNames
              .selectAll("path")
              .transition(transition)
              .attr("opacity", "0")
              .remove();

            transition.on("end", () => {
              const transition = d3
                .transition()
                .duration(750)
                .ease(d3.easeQuadInOut);

              groupLetter
                .select("path")
                .datum(dataStacked[i])
                .transition(transition)
                .attr("d", area)
                .remove();

              groupLetters
                .selectAll("path")
                .data(dataStacked)
                .transition(transition)
                .attr("d", area);

              transition.on("end", () => {
                groupOverlay.style("pointer-events", "none");
              });
            });
          },
          {
            once: true,
          }
        );
      });
    });
  });
