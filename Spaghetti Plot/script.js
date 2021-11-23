// https://www.ssa.gov/oact/babynames/limits.html
const dataset = {
  female: [
    {
      name: "Olivia",
      values: [
        { year: "1981", value: 1029 },
        { year: "1982", value: 1127 },
        { year: "1983", value: 1089 },
        { year: "1984", value: 1163 },
        { year: "1985", value: 1026 },
        { year: "1986", value: 1231 },
        { year: "1987", value: 1698 },
        { year: "1988", value: 2141 },
        { year: "1989", value: 2438 },
        { year: "1990", value: 4627 },
        { year: "1991", value: 5601 },
        { year: "1992", value: 5809 },
        { year: "1993", value: 6340 },
        { year: "1994", value: 6434 },
        { year: "1995", value: 7624 },
        { year: "1996", value: 8124 },
        { year: "1997", value: 9477 },
        { year: "1998", value: 10610 },
        { year: "1999", value: 11255 },
        { year: "2000", value: 12852 },
        { year: "2001", value: 13977 },
        { year: "2002", value: 14630 },
        { year: "2003", value: 16152 },
        { year: "2004", value: 16106 },
        { year: "2005", value: 15694 },
        { year: "2006", value: 15501 },
        { year: "2007", value: 16584 },
        { year: "2008", value: 17084 },
        { year: "2009", value: 17438 },
        { year: "2010", value: 17029 },
        { year: "2011", value: 17327 },
        { year: "2012", value: 17320 },
        { year: "2013", value: 18439 },
        { year: "2014", value: 19823 },
        { year: "2015", value: 19710 },
        { year: "2016", value: 19380 },
        { year: "2017", value: 18744 },
        { year: "2018", value: 18011 },
        { year: "2019", value: 18508 },
        { year: "2020", value: 17535 },
      ],
    },
    {
      name: "Emma",
      values: [
        { year: "1981", value: 535 },
        { year: "1982", value: 563 },
        { year: "1983", value: 552 },
        { year: "1984", value: 677 },
        { year: "1985", value: 946 },
        { year: "1986", value: 1258 },
        { year: "1987", value: 1588 },
        { year: "1988", value: 1791 },
        { year: "1989", value: 1937 },
        { year: "1990", value: 2419 },
        { year: "1991", value: 2594 },
        { year: "1992", value: 3212 },
        { year: "1993", value: 4106 },
        { year: "1994", value: 4765 },
        { year: "1995", value: 5047 },
        { year: "1996", value: 6144 },
        { year: "1997", value: 7746 },
        { year: "1998", value: 10446 },
        { year: "1999", value: 11740 },
        { year: "2000", value: 12556 },
        { year: "2001", value: 13316 },
        { year: "2002", value: 16546 },
        { year: "2003", value: 22709 },
        { year: "2004", value: 21611 },
        { year: "2005", value: 20348 },
        { year: "2006", value: 19120 },
        { year: "2007", value: 18377 },
        { year: "2008", value: 18817 },
        { year: "2009", value: 17905 },
        { year: "2010", value: 17351 },
        { year: "2011", value: 18808 },
        { year: "2012", value: 20954 },
        { year: "2013", value: 20950 },
        { year: "2014", value: 20943 },
        { year: "2015", value: 20465 },
        { year: "2016", value: 19522 },
        { year: "2017", value: 19837 },
        { year: "2018", value: 18770 },
        { year: "2019", value: 17155 },
        { year: "2020", value: 15581 },
      ],
    },
    {
      name: "Ava",
      values: [
        { year: "1981", value: 122 },
        { year: "1982", value: 110 },
        { year: "1983", value: 106 },
        { year: "1984", value: 146 },
        { year: "1985", value: 134 },
        { year: "1986", value: 167 },
        { year: "1987", value: 176 },
        { year: "1988", value: 167 },
        { year: "1989", value: 174 },
        { year: "1990", value: 197 },
        { year: "1991", value: 236 },
        { year: "1992", value: 239 },
        { year: "1993", value: 284 },
        { year: "1994", value: 276 },
        { year: "1995", value: 279 },
        { year: "1996", value: 285 },
        { year: "1997", value: 362 },
        { year: "1998", value: 830 },
        { year: "1999", value: 1215 },
        { year: "2000", value: 1796 },
        { year: "2001", value: 2539 },
        { year: "2002", value: 3751 },
        { year: "2003", value: 6280 },
        { year: "2004", value: 8644 },
        { year: "2005", value: 13605 },
        { year: "2006", value: 16940 },
        { year: "2007", value: 18052 },
        { year: "2008", value: 17042 },
        { year: "2009", value: 15873 },
        { year: "2010", value: 15436 },
        { year: "2011", value: 15506 },
        { year: "2012", value: 15541 },
        { year: "2013", value: 15256 },
        { year: "2014", value: 15709 },
        { year: "2015", value: 16386 },
        { year: "2016", value: 16325 },
        { year: "2017", value: 15988 },
        { year: "2018", value: 14985 },
        { year: "2019", value: 14474 },
        { year: "2020", value: 13084 },
      ],
    },
    {
      name: "Charlotte",
      values: [
        { year: "1981", value: 834 },
        { year: "1982", value: 794 },
        { year: "1983", value: 834 },
        { year: "1984", value: 789 },
        { year: "1985", value: 944 },
        { year: "1986", value: 860 },
        { year: "1987", value: 827 },
        { year: "1988", value: 860 },
        { year: "1989", value: 893 },
        { year: "1990", value: 963 },
        { year: "1991", value: 981 },
        { year: "1992", value: 963 },
        { year: "1993", value: 943 },
        { year: "1994", value: 942 },
        { year: "1995", value: 998 },
        { year: "1996", value: 945 },
        { year: "1997", value: 954 },
        { year: "1998", value: 997 },
        { year: "1999", value: 1002 },
        { year: "2000", value: 1104 },
        { year: "2001", value: 1379 },
        { year: "2002", value: 1604 },
        { year: "2003", value: 1763 },
        { year: "2004", value: 1994 },
        { year: "2005", value: 2444 },
        { year: "2006", value: 2779 },
        { year: "2007", value: 3329 },
        { year: "2008", value: 3670 },
        { year: "2009", value: 4189 },
        { year: "2010", value: 5357 },
        { year: "2011", value: 6430 },
        { year: "2012", value: 7479 },
        { year: "2013", value: 9305 },
        { year: "2014", value: 10118 },
        { year: "2015", value: 11405 },
        { year: "2016", value: 13100 },
        { year: "2017", value: 12949 },
        { year: "2018", value: 13005 },
        { year: "2019", value: 13191 },
        { year: "2020", value: 13003 },
      ],
    },
    {
      name: "Sophia",
      values: [
        { year: "1981", value: 1235 },
        { year: "1982", value: 1161 },
        { year: "1983", value: 1196 },
        { year: "1984", value: 1083 },
        { year: "1985", value: 1100 },
        { year: "1986", value: 1059 },
        { year: "1987", value: 1124 },
        { year: "1988", value: 1165 },
        { year: "1989", value: 1059 },
        { year: "1990", value: 1123 },
        { year: "1991", value: 1260 },
        { year: "1992", value: 1353 },
        { year: "1993", value: 1498 },
        { year: "1994", value: 1613 },
        { year: "1995", value: 1764 },
        { year: "1996", value: 2513 },
        { year: "1997", value: 3640 },
        { year: "1998", value: 4307 },
        { year: "1999", value: 5423 },
        { year: "2000", value: 6564 },
        { year: "2001", value: 7162 },
        { year: "2002", value: 8665 },
        { year: "2003", value: 9686 },
        { year: "2004", value: 10917 },
        { year: "2005", value: 12673 },
        { year: "2006", value: 13501 },
        { year: "2007", value: 17025 },
        { year: "2008", value: 16087 },
        { year: "2009", value: 16948 },
        { year: "2010", value: 20646 },
        { year: "2011", value: 21850 },
        { year: "2012", value: 22320 },
        { year: "2013", value: 21232 },
        { year: "2014", value: 18630 },
        { year: "2015", value: 17434 },
        { year: "2016", value: 16149 },
        { year: "2017", value: 14903 },
        { year: "2018", value: 13979 },
        { year: "2019", value: 13753 },
        { year: "2020", value: 12976 },
      ],
    },
    {
      name: "Amelia",
      values: [
        { year: "1981", value: 849 },
        { year: "1982", value: 833 },
        { year: "1983", value: 761 },
        { year: "1984", value: 1094 },
        { year: "1985", value: 1014 },
        { year: "1986", value: 1018 },
        { year: "1987", value: 1006 },
        { year: "1988", value: 1129 },
        { year: "1989", value: 1265 },
        { year: "1990", value: 1513 },
        { year: "1991", value: 1536 },
        { year: "1992", value: 1345 },
        { year: "1993", value: 1248 },
        { year: "1994", value: 1253 },
        { year: "1995", value: 1206 },
        { year: "1996", value: 1291 },
        { year: "1997", value: 1317 },
        { year: "1998", value: 1424 },
        { year: "1999", value: 1420 },
        { year: "2000", value: 1531 },
        { year: "2001", value: 1634 },
        { year: "2002", value: 2443 },
        { year: "2003", value: 3094 },
        { year: "2004", value: 3352 },
        { year: "2005", value: 3908 },
        { year: "2006", value: 4064 },
        { year: "2007", value: 4194 },
        { year: "2008", value: 4350 },
        { year: "2009", value: 4699 },
        { year: "2010", value: 5460 },
        { year: "2011", value: 6369 },
        { year: "2012", value: 7245 },
        { year: "2013", value: 8041 },
        { year: "2014", value: 8799 },
        { year: "2015", value: 9865 },
        { year: "2016", value: 10785 },
        { year: "2017", value: 11850 },
        { year: "2018", value: 12363 },
        { year: "2019", value: 12900 },
        { year: "2020", value: 12704 },
      ],
    },
    {
      name: "Isabella",
      values: [
        { year: "1981", value: 39 },
        { year: "1982", value: 33 },
        { year: "1983", value: 31 },
        { year: "1984", value: 35 },
        { year: "1985", value: 34 },
        { year: "1986", value: 60 },
        { year: "1987", value: 74 },
        { year: "1988", value: 81 },
        { year: "1989", value: 141 },
        { year: "1990", value: 216 },
        { year: "1991", value: 305 },
        { year: "1992", value: 508 },
        { year: "1993", value: 828 },
        { year: "1994", value: 1277 },
        { year: "1995", value: 1738 },
        { year: "1996", value: 2110 },
        { year: "1997", value: 2862 },
        { year: "1998", value: 3849 },
        { year: "1999", value: 5059 },
        { year: "2000", value: 6242 },
        { year: "2001", value: 8834 },
        { year: "2002", value: 12170 },
        { year: "2003", value: 13779 },
        { year: "2004", value: 15019 },
        { year: "2005", value: 15190 },
        { year: "2006", value: 18227 },
        { year: "2007", value: 19140 },
        { year: "2008", value: 18622 },
        { year: "2009", value: 22311 },
        { year: "2010", value: 22924 },
        { year: "2011", value: 19919 },
        { year: "2012", value: 19113 },
        { year: "2013", value: 17654 },
        { year: "2014", value: 17108 },
        { year: "2015", value: 15636 },
        { year: "2016", value: 14829 },
        { year: "2017", value: 15214 },
        { year: "2018", value: 14524 },
        { year: "2019", value: 13344 },
        { year: "2020", value: 12066 },
      ],
    },
    {
      name: "Mia",
      values: [
        { year: "1981", value: 718 },
        { year: "1982", value: 547 },
        { year: "1983", value: 471 },
        { year: "1984", value: 452 },
        { year: "1985", value: 500 },
        { year: "1986", value: 491 },
        { year: "1987", value: 544 },
        { year: "1988", value: 620 },
        { year: "1989", value: 660 },
        { year: "1990", value: 782 },
        { year: "1991", value: 779 },
        { year: "1992", value: 821 },
        { year: "1993", value: 794 },
        { year: "1994", value: 859 },
        { year: "1995", value: 1102 },
        { year: "1996", value: 1689 },
        { year: "1997", value: 2493 },
        { year: "1998", value: 2566 },
        { year: "1999", value: 2737 },
        { year: "2000", value: 3451 },
        { year: "2001", value: 3918 },
        { year: "2002", value: 6259 },
        { year: "2003", value: 7083 },
        { year: "2004", value: 7398 },
        { year: "2005", value: 10844 },
        { year: "2006", value: 12024 },
        { year: "2007", value: 10920 },
        { year: "2008", value: 10170 },
        { year: "2009", value: 11431 },
        { year: "2010", value: 10642 },
        { year: "2011", value: 11532 },
        { year: "2012", value: 12028 },
        { year: "2013", value: 13157 },
        { year: "2014", value: 13517 },
        { year: "2015", value: 14914 },
        { year: "2016", value: 14442 },
        { year: "2017", value: 13494 },
        { year: "2018", value: 12703 },
        { year: "2019", value: 12452 },
        { year: "2020", value: 11157 },
      ],
    },
    {
      name: "Evelyn",
      values: [
        { year: "1981", value: 1030 },
        { year: "1982", value: 1377 },
        { year: "1983", value: 1139 },
        { year: "1984", value: 1050 },
        { year: "1985", value: 1131 },
        { year: "1986", value: 1080 },
        { year: "1987", value: 1012 },
        { year: "1988", value: 1125 },
        { year: "1989", value: 1172 },
        { year: "1990", value: 1302 },
        { year: "1991", value: 1267 },
        { year: "1992", value: 1412 },
        { year: "1993", value: 1346 },
        { year: "1994", value: 1452 },
        { year: "1995", value: 1507 },
        { year: "1996", value: 1595 },
        { year: "1997", value: 1571 },
        { year: "1998", value: 1707 },
        { year: "1999", value: 1964 },
        { year: "2000", value: 2222 },
        { year: "2001", value: 2691 },
        { year: "2002", value: 3372 },
        { year: "2003", value: 3701 },
        { year: "2004", value: 3763 },
        { year: "2005", value: 4487 },
        { year: "2006", value: 4750 },
        { year: "2007", value: 5053 },
        { year: "2008", value: 5099 },
        { year: "2009", value: 5583 },
        { year: "2010", value: 5840 },
        { year: "2011", value: 6708 },
        { year: "2012", value: 6876 },
        { year: "2013", value: 7665 },
        { year: "2014", value: 8748 },
        { year: "2015", value: 9366 },
        { year: "2016", value: 10111 },
        { year: "2017", value: 10731 },
        { year: "2018", value: 10416 },
        { year: "2019", value: 10412 },
        { year: "2020", value: 9445 },
      ],
    },
    {
      name: "Harper",
      values: [
        { year: "1981", value: 8 },
        { year: "1982", value: 6 },
        { year: "1983", value: 5 },
        { year: "1984", value: 5 },
        { year: "1985", value: 13 },
        { year: "1986", value: 7 },
        { year: "1987", value: 8 },
        { year: "1988", value: 9 },
        { year: "1989", value: 11 },
        { year: "1990", value: 12 },
        { year: "1991", value: 21 },
        { year: "1992", value: 21 },
        { year: "1993", value: 24 },
        { year: "1994", value: 33 },
        { year: "1995", value: 53 },
        { year: "1996", value: 107 },
        { year: "1997", value: 86 },
        { year: "1998", value: 93 },
        { year: "1999", value: 112 },
        { year: "2000", value: 135 },
        { year: "2001", value: 176 },
        { year: "2002", value: 164 },
        { year: "2003", value: 200 },
        { year: "2004", value: 274 },
        { year: "2005", value: 363 },
        { year: "2006", value: 597 },
        { year: "2007", value: 728 },
        { year: "2008", value: 1128 },
        { year: "2009", value: 1903 },
        { year: "2010", value: 2634 },
        { year: "2011", value: 4675 },
        { year: "2012", value: 7193 },
        { year: "2013", value: 8282 },
        { year: "2014", value: 9609 },
        { year: "2015", value: 10301 },
        { year: "2016", value: 10793 },
        { year: "2017", value: 10510 },
        { year: "2018", value: 10624 },
        { year: "2019", value: 10464 },
        { year: "2020", value: 8778 },
      ],
    },
  ],
  male: [
    {
      name: "Liam",
      values: [
        { year: "1981", value: 123 },
        { year: "1982", value: 157 },
        { year: "1983", value: 145 },
        { year: "1984", value: 146 },
        { year: "1985", value: 149 },
        { year: "1986", value: 151 },
        { year: "1987", value: 148 },
        { year: "1988", value: 170 },
        { year: "1989", value: 224 },
        { year: "1990", value: 277 },
        { year: "1991", value: 272 },
        { year: "1992", value: 304 },
        { year: "1993", value: 400 },
        { year: "1994", value: 668 },
        { year: "1995", value: 1205 },
        { year: "1996", value: 1747 },
        { year: "1997", value: 2112 },
        { year: "1998", value: 2209 },
        { year: "1999", value: 2708 },
        { year: "2000", value: 2780 },
        { year: "2001", value: 3028 },
        { year: "2002", value: 3381 },
        { year: "2003", value: 3565 },
        { year: "2004", value: 3827 },
        { year: "2005", value: 4151 },
        { year: "2006", value: 4513 },
        { year: "2007", value: 5139 },
        { year: "2008", value: 5979 },
        { year: "2009", value: 8565 },
        { year: "2010", value: 10928 },
        { year: "2011", value: 13440 },
        { year: "2012", value: 16808 },
        { year: "2013", value: 18144 },
        { year: "2014", value: 18470 },
        { year: "2015", value: 18389 },
        { year: "2016", value: 18235 },
        { year: "2017", value: 18824 },
        { year: "2018", value: 19924 },
        { year: "2019", value: 20555 },
        { year: "2020", value: 19659 },
      ],
    },
    {
      name: "Noah",
      values: [
        { year: "1981", value: 1400 },
        { year: "1982", value: 1814 },
        { year: "1983", value: 1541 },
        { year: "1984", value: 1245 },
        { year: "1985", value: 1107 },
        { year: "1986", value: 1037 },
        { year: "1987", value: 995 },
        { year: "1988", value: 1063 },
        { year: "1989", value: 1244 },
        { year: "1990", value: 1309 },
        { year: "1991", value: 1315 },
        { year: "1992", value: 1423 },
        { year: "1993", value: 1503 },
        { year: "1994", value: 2078 },
        { year: "1995", value: 3823 },
        { year: "1996", value: 7183 },
        { year: "1997", value: 9278 },
        { year: "1998", value: 13413 },
        { year: "1999", value: 14925 },
        { year: "2000", value: 14279 },
        { year: "2001", value: 13487 },
        { year: "2002", value: 12069 },
        { year: "2003", value: 11835 },
        { year: "2004", value: 11906 },
        { year: "2005", value: 13896 },
        { year: "2006", value: 16336 },
        { year: "2007", value: 16595 },
        { year: "2008", value: 15789 },
        { year: "2009", value: 17254 },
        { year: "2010", value: 16460 },
        { year: "2011", value: 16868 },
        { year: "2012", value: 17360 },
        { year: "2013", value: 18266 },
        { year: "2014", value: 19319 },
        { year: "2015", value: 19650 },
        { year: "2016", value: 19154 },
        { year: "2017", value: 18453 },
        { year: "2018", value: 18366 },
        { year: "2019", value: 19097 },
        { year: "2020", value: 18252 },
      ],
    },
    {
      name: "Oliver",
      values: [
        { year: "1981", value: 403 },
        { year: "1982", value: 455 },
        { year: "1983", value: 433 },
        { year: "1984", value: 396 },
        { year: "1985", value: 370 },
        { year: "1986", value: 339 },
        { year: "1987", value: 461 },
        { year: "1988", value: 440 },
        { year: "1989", value: 460 },
        { year: "1990", value: 625 },
        { year: "1991", value: 582 },
        { year: "1992", value: 663 },
        { year: "1993", value: 665 },
        { year: "1994", value: 643 },
        { year: "1995", value: 596 },
        { year: "1996", value: 607 },
        { year: "1997", value: 669 },
        { year: "1998", value: 734 },
        { year: "1999", value: 782 },
        { year: "2000", value: 978 },
        { year: "2001", value: 978 },
        { year: "2002", value: 1166 },
        { year: "2003", value: 1374 },
        { year: "2004", value: 1491 },
        { year: "2005", value: 1793 },
        { year: "2006", value: 2351 },
        { year: "2007", value: 2910 },
        { year: "2008", value: 3601 },
        { year: "2009", value: 4286 },
        { year: "2010", value: 4664 },
        { year: "2011", value: 5411 },
        { year: "2012", value: 5918 },
        { year: "2013", value: 7272 },
        { year: "2014", value: 9443 },
        { year: "2015", value: 11660 },
        { year: "2016", value: 13050 },
        { year: "2017", value: 13212 },
        { year: "2018", value: 13469 },
        { year: "2019", value: 13929 },
        { year: "2020", value: 14147 },
      ],
    },
    {
      name: "Elijah",
      values: [
        { year: "1981", value: 750 },
        { year: "1982", value: 740 },
        { year: "1983", value: 670 },
        { year: "1984", value: 628 },
        { year: "1985", value: 681 },
        { year: "1986", value: 718 },
        { year: "1987", value: 747 },
        { year: "1988", value: 885 },
        { year: "1989", value: 992 },
        { year: "1990", value: 1140 },
        { year: "1991", value: 1345 },
        { year: "1992", value: 1523 },
        { year: "1993", value: 1881 },
        { year: "1994", value: 2621 },
        { year: "1995", value: 3976 },
        { year: "1996", value: 4815 },
        { year: "1997", value: 5087 },
        { year: "1998", value: 5662 },
        { year: "1999", value: 6596 },
        { year: "2000", value: 7470 },
        { year: "2001", value: 8339 },
        { year: "2002", value: 10052 },
        { year: "2003", value: 10662 },
        { year: "2004", value: 11712 },
        { year: "2005", value: 11609 },
        { year: "2006", value: 12048 },
        { year: "2007", value: 12410 },
        { year: "2008", value: 13229 },
        { year: "2009", value: 12829 },
        { year: "2010", value: 13905 },
        { year: "2011", value: 13978 },
        { year: "2012", value: 13885 },
        { year: "2013", value: 13806 },
        { year: "2014", value: 13851 },
        { year: "2015", value: 13676 },
        { year: "2016", value: 13930 },
        { year: "2017", value: 13388 },
        { year: "2018", value: 12960 },
        { year: "2019", value: 13339 },
        { year: "2020", value: 13034 },
      ],
    },
    {
      name: "William",
      values: [
        { year: "1981", value: 24806 },
        { year: "1982", value: 25603 },
        { year: "1983", value: 25400 },
        { year: "1984", value: 24908 },
        { year: "1985", value: 24610 },
        { year: "1986", value: 24331 },
        { year: "1987", value: 24206 },
        { year: "1988", value: 24128 },
        { year: "1989", value: 24673 },
        { year: "1990", value: 24901 },
        { year: "1991", value: 23866 },
        { year: "1992", value: 23065 },
        { year: "1993", value: 22213 },
        { year: "1994", value: 21490 },
        { year: "1995", value: 20157 },
        { year: "1996", value: 20542 },
        { year: "1997", value: 20019 },
        { year: "1998", value: 20834 },
        { year: "1999", value: 20715 },
        { year: "2000", value: 20665 },
        { year: "2001", value: 20104 },
        { year: "2002", value: 20125 },
        { year: "2003", value: 19992 },
        { year: "2004", value: 20228 },
        { year: "2005", value: 19054 },
        { year: "2006", value: 18961 },
        { year: "2007", value: 18883 },
        { year: "2008", value: 18392 },
        { year: "2009", value: 17924 },
        { year: "2010", value: 17058 },
        { year: "2011", value: 17347 },
        { year: "2012", value: 16894 },
        { year: "2013", value: 16651 },
        { year: "2014", value: 16832 },
        { year: "2015", value: 15922 },
        { year: "2016", value: 15783 },
        { year: "2017", value: 15007 },
        { year: "2018", value: 14604 },
        { year: "2019", value: 13599 },
        { year: "2020", value: 12541 },
      ],
    },
    {
      name: "James",
      values: [
        { year: "1981", value: 38315 },
        { year: "1982", value: 38879 },
        { year: "1983", value: 36355 },
        { year: "1984", value: 35867 },
        { year: "1985", value: 35866 },
        { year: "1986", value: 34048 },
        { year: "1987", value: 32657 },
        { year: "1988", value: 32517 },
        { year: "1989", value: 32709 },
        { year: "1990", value: 32356 },
        { year: "1991", value: 30510 },
        { year: "1992", value: 28507 },
        { year: "1993", value: 26251 },
        { year: "1994", value: 24772 },
        { year: "1995", value: 22728 },
        { year: "1996", value: 21157 },
        { year: "1997", value: 20405 },
        { year: "1998", value: 19687 },
        { year: "1999", value: 18553 },
        { year: "2000", value: 17989 },
        { year: "2001", value: 17073 },
        { year: "2002", value: 16965 },
        { year: "2003", value: 16895 },
        { year: "2004", value: 16466 },
        { year: "2005", value: 16138 },
        { year: "2006", value: 16243 },
        { year: "2007", value: 15966 },
        { year: "2008", value: 15181 },
        { year: "2009", value: 14211 },
        { year: "2010", value: 13887 },
        { year: "2011", value: 13256 },
        { year: "2012", value: 13440 },
        { year: "2013", value: 13579 },
        { year: "2014", value: 14442 },
        { year: "2015", value: 14843 },
        { year: "2016", value: 14887 },
        { year: "2017", value: 14327 },
        { year: "2018", value: 13600 },
        { year: "2019", value: 13131 },
        { year: "2020", value: 12250 },
      ],
    },
    {
      name: "Benjamin",
      values: [
        { year: "1981", value: 14361 },
        { year: "1982", value: 13825 },
        { year: "1983", value: 13287 },
        { year: "1984", value: 13268 },
        { year: "1985", value: 13430 },
        { year: "1986", value: 13802 },
        { year: "1987", value: 14889 },
        { year: "1988", value: 15189 },
        { year: "1989", value: 15731 },
        { year: "1990", value: 14626 },
        { year: "1991", value: 13874 },
        { year: "1992", value: 13451 },
        { year: "1993", value: 12680 },
        { year: "1994", value: 12791 },
        { year: "1995", value: 12717 },
        { year: "1996", value: 13780 },
        { year: "1997", value: 13267 },
        { year: "1998", value: 13061 },
        { year: "1999", value: 13665 },
        { year: "2000", value: 14842 },
        { year: "2001", value: 14335 },
        { year: "2002", value: 13487 },
        { year: "2003", value: 14073 },
        { year: "2004", value: 13821 },
        { year: "2005", value: 13577 },
        { year: "2006", value: 13759 },
        { year: "2007", value: 13278 },
        { year: "2008", value: 12954 },
        { year: "2009", value: 13120 },
        { year: "2010", value: 12433 },
        { year: "2011", value: 13070 },
        { year: "2012", value: 12825 },
        { year: "2013", value: 13501 },
        { year: "2014", value: 13813 },
        { year: "2015", value: 13716 },
        { year: "2016", value: 14661 },
        { year: "2017", value: 13838 },
        { year: "2018", value: 13450 },
        { year: "2019", value: 12980 },
        { year: "2020", value: 12136 },
      ],
    },
    {
      name: "Lucas",
      values: [
        { year: "1981", value: 3375 },
        { year: "1982", value: 2742 },
        { year: "1983", value: 2359 },
        { year: "1984", value: 2115 },
        { year: "1985", value: 2318 },
        { year: "1986", value: 2196 },
        { year: "1987", value: 2326 },
        { year: "1988", value: 2715 },
        { year: "1989", value: 2862 },
        { year: "1990", value: 3088 },
        { year: "1991", value: 3237 },
        { year: "1992", value: 3378 },
        { year: "1993", value: 3922 },
        { year: "1994", value: 4010 },
        { year: "1995", value: 4083 },
        { year: "1996", value: 4103 },
        { year: "1997", value: 4031 },
        { year: "1998", value: 4091 },
        { year: "1999", value: 4219 },
        { year: "2000", value: 4818 },
        { year: "2001", value: 4899 },
        { year: "2002", value: 5381 },
        { year: "2003", value: 5754 },
        { year: "2004", value: 6713 },
        { year: "2005", value: 7576 },
        { year: "2006", value: 8136 },
        { year: "2007", value: 8753 },
        { year: "2008", value: 9323 },
        { year: "2009", value: 9616 },
        { year: "2010", value: 10379 },
        { year: "2011", value: 10402 },
        { year: "2012", value: 10713 },
        { year: "2013", value: 11550 },
        { year: "2014", value: 12163 },
        { year: "2015", value: 12310 },
        { year: "2016", value: 12890 },
        { year: "2017", value: 13013 },
        { year: "2018", value: 12635 },
        { year: "2019", value: 12445 },
        { year: "2020", value: 11281 },
      ],
    },
    {
      name: "Henry",
      values: [
        { year: "1981", value: 2186 },
        { year: "1982", value: 2078 },
        { year: "1983", value: 1952 },
        { year: "1984", value: 2034 },
        { year: "1985", value: 2065 },
        { year: "1986", value: 1995 },
        { year: "1987", value: 2088 },
        { year: "1988", value: 2082 },
        { year: "1989", value: 2174 },
        { year: "1990", value: 2253 },
        { year: "1991", value: 2259 },
        { year: "1992", value: 2342 },
        { year: "1993", value: 2483 },
        { year: "1994", value: 2420 },
        { year: "1995", value: 2544 },
        { year: "1996", value: 2556 },
        { year: "1997", value: 2656 },
        { year: "1998", value: 2799 },
        { year: "1999", value: 2923 },
        { year: "2000", value: 3122 },
        { year: "2001", value: 3201 },
        { year: "2002", value: 3333 },
        { year: "2003", value: 3470 },
        { year: "2004", value: 3911 },
        { year: "2005", value: 4178 },
        { year: "2006", value: 4668 },
        { year: "2007", value: 5116 },
        { year: "2008", value: 5780 },
        { year: "2009", value: 5896 },
        { year: "2010", value: 6399 },
        { year: "2011", value: 7233 },
        { year: "2012", value: 8069 },
        { year: "2013", value: 8882 },
        { year: "2014", value: 9437 },
        { year: "2015", value: 10177 },
        { year: "2016", value: 10383 },
        { year: "2017", value: 10469 },
        { year: "2018", value: 10698 },
        { year: "2019", value: 10737 },
        { year: "2020", value: 10705 },
      ],
    },
    {
      name: "Alexander",
      values: [
        { year: "1981", value: 4241 },
        { year: "1982", value: 4596 },
        { year: "1983", value: 4809 },
        { year: "1984", value: 6495 },
        { year: "1985", value: 8291 },
        { year: "1986", value: 10608 },
        { year: "1987", value: 11839 },
        { year: "1988", value: 13339 },
        { year: "1989", value: 14522 },
        { year: "1990", value: 16191 },
        { year: "1991", value: 17640 },
        { year: "1992", value: 20067 },
        { year: "1993", value: 20525 },
        { year: "1994", value: 20099 },
        { year: "1995", value: 19447 },
        { year: "1996", value: 17962 },
        { year: "1997", value: 17111 },
        { year: "1998", value: 17464 },
        { year: "1999", value: 17416 },
        { year: "2000", value: 17288 },
        { year: "2001", value: 16715 },
        { year: "2002", value: 17716 },
        { year: "2003", value: 17712 },
        { year: "2004", value: 17924 },
        { year: "2005", value: 18124 },
        { year: "2006", value: 18228 },
        { year: "2007", value: 18140 },
        { year: "2008", value: 18702 },
        { year: "2009", value: 18239 },
        { year: "2010", value: 16757 },
        { year: "2011", value: 15704 },
        { year: "2012", value: 15241 },
        { year: "2013", value: 14912 },
        { year: "2014", value: 15428 },
        { year: "2015", value: 14559 },
        { year: "2016", value: 13424 },
        { year: "2017", value: 12546 },
        { year: "2018", value: 12064 },
        { year: "2019", value: 11264 },
        { year: "2020", value: 10151 },
      ],
    },
  ],
}

const {
  select,
  scaleLinear,
  scaleTime,
  scaleOrdinal,
  min,
  max,
  timeYear,
  line,
  timeParse,
  timeFormat,
  format,
  interpolateRainbow,
  axisLeft,
  axisBottom,
  pointer,
  least,
} = d3

const root = select("body").append("div").attr("id", "root")

const header = root.append("header")
header
  .append("h1")
  .text("Popular Baby names")
  .style("text-transform", "capitalize")

header
  .append("p")
  .text(
    "The names most used in 2020 highlight a considerable shift over the span of forty years."
  )

plotData({
  title: "Female",
  description:
    "Olivia edged out Emma, even if both choices followed a decreasing trend. The popularity of all names is quite recent, being used at most a thousand times in 1981.",
  data: [...dataset.female].sort(
    (a, b) =>
      b.values[b.values.length - 1].value - a.values[a.values.length - 1].value
  ),
})

plotData({
  title: "Male",
  description:
    "Liam climbed above Noah by a small margin. While most names emerged out of the four previous decades, other fell notably out of favour, like William and James.",
  data: [...dataset.male].sort(
    (a, b) =>
      b.values[b.values.length - 1].value - a.values[a.values.length - 1].value
  ),
})

function plotData({ title, description, data }) {
  const timeParser = timeParse("%Y")
  const timeFormatter = timeFormat("%Y")
  const valueFormatter = format(",")

  const xAccessor = (d) => timeParser(d.year)
  const yAccessor = (d) => d.value

  const dimensions = {
    width: 600,
    height: 250,
    margin: {
      top: 20,
      right: 20,
      bottom: 25,
      left: 50,
    },
    legend: {
      width: 120,
    },
  }

  dimensions.boundedWidth =
    dimensions.width -
    (dimensions.margin.left + dimensions.margin.right + dimensions.legend.width)
  dimensions.boundedHeight =
    dimensions.height - (dimensions.margin.top + dimensions.margin.bottom)

  // include an additional year to let the mousemove event consider the last year as well
  const xScale = scaleTime()
    .domain([
      min(data[0].values, xAccessor),
      timeYear.offset(max(data[0].values, xAccessor), 1),
    ])
    .range([0, dimensions.boundedWidth])

  const yScale = scaleLinear()
    .domain([
      0,
      max(
        data.reduce((acc, curr) => [...acc, ...curr.values], []),
        yAccessor
      ),
    ])
    .range([dimensions.boundedHeight, 0])
    .nice()

  const xAxis = axisBottom(xScale).ticks(6).tickSize(0).tickPadding(15)
  const yAxis = axisLeft(yScale).ticks(5).tickSize(0).tickPadding(10)

  const names = data.map(({ name }) => name)

  const colorScale = scaleOrdinal()
    .domain(names)
    .range(
      names.map((_, i, { length }) => interpolateRainbow((1 / length) * i))
    )

  const lineGenerator = line()
    .x((d) => xScale(xAccessor(d)))
    .y((d) => yScale(yAccessor(d)))

  const article = root.append("article")
  article.append("h2").text(title)
  article.append("p").text(description)

  const wrapper = article
    .append("svg")
    .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`)
    .attr("width", dimensions.width)
    .attr("height", dimensions.height)

  const bounds = wrapper
    .append("g")
    .attr(
      "transform",
      `translate(${dimensions.margin.left} ${dimensions.margin.top})`
    )

  const linesGroup = bounds.append("g")
  const axisGroup = bounds.append("g")
  // elements shown when hovering on the bounded area
  const highlightBoundsGroup = bounds.append("g")
  // elements shown when hovering on the legend
  const highlightLegendGroup = bounds.append("g")
  const legendGroup = bounds.append("g")

  linesGroup
    .selectAll("path")
    .data(data)
    .join("path")
    .attr("d", (d) => lineGenerator(d.values))
    .attr("fill", "none")
    .attr("stroke", (d) => colorScale(d.name))
    .attr("stroke-width", 2)

  const xAxisGroup = axisGroup
    .append("g")
    .attr("transform", `translate(0 ${dimensions.boundedHeight})`)
    .call(xAxis)

  const yAxisGroup = axisGroup.append("g").call(yAxis)

  axisGroup.selectAll("path").remove()

  axisGroup
    .selectAll("text")
    .attr("font-size", "12")
    .attr("font-family", "inherit")
    .attr("fill", "currentColor")

  xAxisGroup
    .selectAll("g.tick")
    .filter((_, i, { length }) => i > 0 && i < length - 1)
    .append("path")
    .attr("d", `M 0 0 v -${dimensions.boundedHeight}`)

  yAxisGroup
    .selectAll("g.tick")
    .filter((_, i) => i > 0)
    .append("path")
    .attr("d", `M 0 0 h ${dimensions.boundedWidth}`)

  axisGroup
    .selectAll("path")
    .attr("fill", "none")
    .attr("stroke", "currentColor")
    .attr("stroke-width", "0.5")
    .attr("opacity", "0.2")

  legendGroup.attr("transform", `translate(${dimensions.boundedWidth} 0)`)

  const legendHeight = dimensions.boundedHeight / names.length
  const { year: lastYear } = data[0].values[data[0].values.length - 1]

  legendGroup
    .append("text")
    .attr("fill", "currentColor")
    .attr("x", dimensions.legend.width)
    .attr("y", "1")
    .attr("text-anchor", "end")
    .attr("dominant-baseline", "middle")
    .attr("font-size", "12")
    .attr("font-weight", "bold")
    .text(lastYear)

  const legendGroups = legendGroup
    .selectAll("g")
    .data(names)
    .join("g")
    .attr("id", (d) => `legend-${d}`)
    .attr("transform", (_, i) => `translate(0 ${legendHeight * (i + 1)})`)

  legendGroups
    .append("path")
    .attr("fill", "none")
    .attr("stroke", (d) => colorScale(d))
    .attr("stroke-width", "2")
    .attr("d", "M 0 0 h 16")

  legendGroups
    .append("text")
    .attr("fill", "currentColor")
    .attr("x", "20")
    .attr("y", "1")
    .attr("dominant-baseline", "middle")
    .attr("font-size", "12")
    .text((d) => d)

  legendGroups
    .append("text")
    .attr("fill", "currentColor")
    .attr("x", dimensions.legend.width)
    .attr("y", "1")
    .attr("text-anchor", "end")
    .attr("dominant-baseline", "middle")
    .attr("font-size", "12")
    .text((d) => {
      const { values } = data.find(({ name }) => name === d)
      return valueFormatter(values.find(({ year }) => year === lastYear).value)
    })

  legendGroups
    .append("rect")
    .attr("y", -legendHeight / 2)
    .attr("width", dimensions.legend.width)
    .attr("height", legendHeight)
    .attr("opacity", "0")
    .style("cursor", "pointer")
    .on("mouseenter", (_, d) => {
      linesGroup.attr("opacity", "0.1")
      legendGroups.attr("opacity", "0.1")
      legendGroup.select(`#legend-${d}`).attr("opacity", "1")

      highlightLegendGroup.selectAll("*").remove()
      highlightLegendGroup
        .append("path")
        .attr("d", lineGenerator(data.find(({ name }) => name === d).values))
        .attr("fill", "none")
        .attr("stroke", colorScale(d))
        .attr("stroke-width", 2)
    })

  legendGroup.on("mouseleave", () => {
    linesGroup.attr("opacity", "1")

    legendGroups.attr("opacity", "1")
    highlightLegendGroup.selectAll("*").remove()
  })

  bounds
    .append("rect")
    .attr("width", dimensions.boundedWidth)
    .attr("height", dimensions.boundedHeight)
    .attr("opacity", "0")
    .style("cursor", "pointer")
    .on("mousemove", (e) => {
      const [hoverX] = pointer(e)
      const hoverYear = parseInt(timeFormatter(xScale.invert(hoverX)), 10)
      const hoverValues = data.reduce((acc, curr) => {
        acc[curr.name] = curr.values.find(
          ({ year }) => parseInt(year, 10) === hoverYear
        ).value
        return acc
      }, {})

      const x = xScale(timeParser(hoverYear))

      highlightBoundsGroup.selectAll("circle").attr("transform", (d) => {
        const y = yScale(hoverValues[d])
        return `translate(${x} ${y})`
      })

      legendGroup.select("text").text(hoverYear)

      legendGroups.select("text:nth-of-type(2)").text((d) => {
        const { values } = data.find(({ name }) => name === d)
        return valueFormatter(
          values.find(({ year }) => parseInt(year, 10) === hoverYear).value
        )
      })
    })
    .on("mouseenter", () => {
      linesGroup.attr("opacity", "0.1")

      highlightBoundsGroup
        .selectAll("circle")
        .data([...names.reverse()])
        .join("circle")
        .attr("r", "3.5")
        .attr("fill", "hsl(0, 0%, 100%)")
        .attr("stroke", (d) => colorScale(d))
        .attr("stroke-width", "2")
    })
    .on("mouseleave", () => {
      linesGroup.attr("opacity", "1")

      highlightBoundsGroup.selectAll("*").remove()

      legendGroup.select("text").text(lastYear)

      legendGroups.select("text:nth-of-type(2)").text((d) => {
        const { values } = data.find(({ name }) => name === d)
        return valueFormatter(
          values.find(({ year }) => year === lastYear).value
        )
      })
    })
}
