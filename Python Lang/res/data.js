// https://insights.stackoverflow.com/trends?tags=python
const data = [
  {
    date: '2008-08-01',
    value: 0.03901702953222,
  },
  {
    date: '2008-09-01',
    value: 0.03530389035026,
  },
  {
    date: '2008-10-01',
    value: 0.03597866751572,
  },
  {
    date: '2008-11-01',
    value: 0.03683595055128,
  },
  {
    date: '2009-00-01',
    value: 0.040104232871479996,
  },
  {
    date: '2009-01-01',
    value: 0.03615287501434,
  },
  {
    date: '2009-02-01',
    value: 0.03772747447847,
  },
  {
    date: '2009-03-01',
    value: 0.0363576190251,
  },
  {
    date: '2009-04-01',
    value: 0.03912210007433,
  },
  {
    date: '2009-05-01',
    value: 0.03729212761401,
  },
  {
    date: '2009-06-01',
    value: 0.03617120622568,
  },
  {
    date: '2009-07-01',
    value: 0.03510880956784,
  },
  {
    date: '2009-08-01',
    value: 0.03562916335635,
  },
  {
    date: '2009-09-01',
    value: 0.03944154546463,
  },
  {
    date: '2009-10-01',
    value: 0.040881080372360004,
  },
  {
    date: '2009-11-01',
    value: 0.04242537512682001,
  },
  {
    date: '2010-00-01',
    value: 0.0436994375098,
  },
  {
    date: '2010-01-01',
    value: 0.04194483781778,
  },
  {
    date: '2010-02-01',
    value: 0.03993062247061,
  },
  {
    date: '2010-03-01',
    value: 0.03654318008125,
  },
  {
    date: '2010-04-01',
    value: 0.03891427243862,
  },
  {
    date: '2010-05-01',
    value: 0.03985271821529,
  },
  {
    date: '2010-06-01',
    value: 0.04293676915697,
  },
  {
    date: '2010-07-01',
    value: 0.03940178768832,
  },
  {
    date: '2010-08-01',
    value: 0.03702851507929,
  },
  {
    date: '2010-09-01',
    value: 0.04209149502812,
  },
  {
    date: '2010-10-01',
    value: 0.03773721047694,
  },
  {
    date: '2010-11-01',
    value: 0.03589284166112,
  },
  {
    date: '2011-00-01',
    value: 0.03654893691794,
  },
  {
    date: '2011-01-01',
    value: 0.03651216265278,
  },
  {
    date: '2011-02-01',
    value: 0.03731899541836,
  },
  {
    date: '2011-03-01',
    value: 0.03506365692269,
  },
  {
    date: '2011-04-01',
    value: 0.03521063504895,
  },
  {
    date: '2011-05-01',
    value: 0.03508417780289,
  },
  {
    date: '2011-06-01',
    value: 0.03650403999244,
  },
  {
    date: '2011-07-01',
    value: 0.0357892380446,
  },
  {
    date: '2011-08-01',
    value: 0.0345256762054,
  },
  {
    date: '2011-09-01',
    value: 0.03583865207998,
  },
  {
    date: '2011-10-01',
    value: 0.03562474169995,
  },
  {
    date: '2011-11-01',
    value: 0.03494131478019,
  },
  {
    date: '2012-00-01',
    value: 0.03624572087182,
  },
  {
    date: '2012-01-01',
    value: 0.0362852885506,
  },
  {
    date: '2012-02-01',
    value: 0.03776262426338,
  },
  {
    date: '2012-03-01',
    value: 0.03819704974589,
  },
  {
    date: '2012-04-01',
    value: 0.03800573952091,
  },
  {
    date: '2012-05-01',
    value: 0.040443340340139994,
  },
  {
    date: '2012-06-01',
    value: 0.04048762936781,
  },
  {
    date: '2012-07-01',
    value: 0.04163624118251,
  },
  {
    date: '2012-08-01',
    value: 0.0399080620202,
  },
  {
    date: '2012-09-01',
    value: 0.04110652884151,
  },
  {
    date: '2012-10-01',
    value: 0.04338072841129001,
  },
  {
    date: '2012-11-01',
    value: 0.04269887732038,
  },
  {
    date: '2013-00-01',
    value: 0.04192906755803,
  },
  {
    date: '2013-01-01',
    value: 0.04404493505986999,
  },
  {
    date: '2013-02-01',
    value: 0.04403732950466,
  },
  {
    date: '2013-03-01',
    value: 0.04637986653778001,
  },
  {
    date: '2013-04-01',
    value: 0.04703780530209,
  },
  {
    date: '2013-05-01',
    value: 0.04815776341803,
  },
  {
    date: '2013-06-01',
    value: 0.04889610426341,
  },
  {
    date: '2013-07-01',
    value: 0.04677713144132999,
  },
  {
    date: '2013-08-01',
    value: 0.04818928228856,
  },
  {
    date: '2013-09-01',
    value: 0.05163276144233,
  },
  {
    date: '2013-10-01',
    value: 0.05393225348045,
  },
  {
    date: '2013-11-01',
    value: 0.051273229881509993,
  },
  {
    date: '2014-00-01',
    value: 0.05217736178313,
  },
  {
    date: '2014-01-01',
    value: 0.05281924023188999,
  },
  {
    date: '2014-02-01',
    value: 0.05507790735652,
  },
  {
    date: '2014-03-01',
    value: 0.05544444786314,
  },
  {
    date: '2014-04-01',
    value: 0.05265421375177,
  },
  {
    date: '2014-05-01',
    value: 0.05495024600925,
  },
  {
    date: '2014-06-01',
    value: 0.05621729997014999,
  },
  {
    date: '2014-07-01',
    value: 0.055873733056530005,
  },
  {
    date: '2014-08-01',
    value: 0.05296822868135,
  },
  {
    date: '2014-09-01',
    value: 0.05563419749591,
  },
  {
    date: '2014-10-01',
    value: 0.05766935914272,
  },
  {
    date: '2014-11-01',
    value: 0.05840706826482,
  },
  {
    date: '2015-00-01',
    value: 0.05864669807342,
  },
  {
    date: '2015-01-01',
    value: 0.060883489193,
  },
  {
    date: '2015-02-01',
    value: 0.06152238616933001,
  },
  {
    date: '2015-03-01',
    value: 0.06073060566840001,
  },
  {
    date: '2015-04-01',
    value: 0.06078267210413999,
  },
  {
    date: '2015-05-01',
    value: 0.06323950279783,
  },
  {
    date: '2015-06-01',
    value: 0.06345817272899,
  },
  {
    date: '2015-07-01',
    value: 0.06227944999390999,
  },
  {
    date: '2015-08-01',
    value: 0.06209718381398,
  },
  {
    date: '2015-09-01',
    value: 0.06750920800396,
  },
  {
    date: '2015-10-01',
    value: 0.06950718107575,
  },
  {
    date: '2015-11-01',
    value: 0.06801438497259,
  },
  {
    date: '2016-00-01',
    value: 0.06869120280286,
  },
  {
    date: '2016-01-01',
    value: 0.07090776230378,
  },
  {
    date: '2016-02-01',
    value: 0.07039277634372,
  },
  {
    date: '2016-03-01',
    value: 0.07006558113878,
  },
  {
    date: '2016-04-01',
    value: 0.06986195261186,
  },
  {
    date: '2016-05-01',
    value: 0.07066471072622,
  },
  {
    date: '2016-06-01',
    value: 0.07315977945773,
  },
  {
    date: '2016-07-01',
    value: 0.07171769187749,
  },
  {
    date: '2016-08-01',
    value: 0.07271191511077,
  },
  {
    date: '2016-09-01',
    value: 0.07777682132506,
  },
  {
    date: '2016-10-01',
    value: 0.08176310122038,
  },
  {
    date: '2016-11-01',
    value: 0.08119594485598998,
  },
  {
    date: '2017-00-01',
    value: 0.08158151031729,
  },
  {
    date: '2017-01-01',
    value: 0.08514917482646,
  },
  {
    date: '2017-02-01',
    value: 0.08577422577422,
  },
  {
    date: '2017-03-01',
    value: 0.08842835973112,
  },
  {
    date: '2017-04-01',
    value: 0.08753082356241998,
  },
  {
    date: '2017-05-01',
    value: 0.09083363916099002,
  },
  {
    date: '2017-06-01',
    value: 0.09504264123684,
  },
  {
    date: '2017-07-01',
    value: 0.09374131210603,
  },
  {
    date: '2017-08-01',
    value: 0.09624901428739,
  },
  {
    date: '2017-09-01',
    value: 0.10074432584667999,
  },
  {
    date: '2017-10-01',
    value: 0.10159405268236,
  },
  {
    date: '2017-11-01',
    value: 0.10394357032596,
  },
  {
    date: '2018-00-01',
    value: 0.10239488622092,
  },
  {
    date: '2018-01-01',
    value: 0.10789181226942998,
  },
  {
    date: '2018-02-01',
    value: 0.10476534380132,
  },
  {
    date: '2018-03-01',
    value: 0.1056689848389,
  },
  {
    date: '2018-04-01',
    value: 0.10613729261841,
  },
  {
    date: '2018-05-01',
    value: 0.11014630897897,
  },
  {
    date: '2018-06-01',
    value: 0.11372640704676,
  },
  {
    date: '2018-07-01',
    value: 0.11371031292101,
  },
  {
    date: '2018-08-01',
    value: 0.11264258886326,
  },
  {
    date: '2018-09-01',
    value: 0.11497565774221,
  },
  {
    date: '2018-10-01',
    value: 0.12232676354807999,
  },
  {
    date: '2018-11-01',
    value: 0.12098892921684,
  },
  {
    date: '2019-00-01',
    value: 0.11553902745741,
  },
  {
    date: '2019-01-01',
    value: 0.12182493965327999,
  },
  {
    date: '2019-02-01',
    value: 0.12567815877168,
  },
  {
    date: '2019-03-01',
    value: 0.12659195402298,
  },
  {
    date: '2019-04-01',
    value: 0.12265029059208,
  },
  {
    date: '2019-05-01',
    value: 0.12582668187001,
  },
  {
    date: '2019-06-01',
    value: 0.1284379202533,
  },
  {
    date: '2019-07-01',
    value: 0.12913978494623,
  },
  {
    date: '2019-08-01',
    value: 0.12155650857719,
  },
  {
    date: '2019-09-01',
    value: 0.1317077272345,
  },
  {
    date: '2019-10-01',
    value: 0.13619775053592,
  },
  {
    date: '2019-11-01',
    value: 0.13372390354426,
  },
  {
    date: '2020-00-01',
    value: 0.13461730835996,
  },
  {
    date: '2020-01-01',
    value: 0.13561773800599,
  },
  {
    date: '2020-02-01',
    value: 0.14412959476865,
  },
];