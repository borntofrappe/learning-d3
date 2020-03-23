// fixed set of data
// the idea is to consider fetching additional information if the latest observation is more than a day old
const data = [{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-02-21T00:00:00Z","Cases":1,"Status":"deaths"},{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-02-22T00:00:00Z","Cases":2,"Status":"deaths"},{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-02-23T00:00:00Z","Cases":3,"Status":"deaths"},{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-02-24T00:00:00Z","Cases":7,"Status":"deaths"},{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-02-25T00:00:00Z","Cases":10,"Status":"deaths"},{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-02-26T00:00:00Z","Cases":12,"Status":"deaths"},{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-02-27T00:00:00Z","Cases":17,"Status":"deaths"},{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-02-28T00:00:00Z","Cases":21,"Status":"deaths"},{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-02-29T00:00:00Z","Cases":29,"Status":"deaths"},{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-03-01T00:00:00Z","Cases":34,"Status":"deaths"},{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-03-02T00:00:00Z","Cases":52,"Status":"deaths"},{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-03-03T00:00:00Z","Cases":79,"Status":"deaths"},{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-03-04T00:00:00Z","Cases":107,"Status":"deaths"},{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-03-05T00:00:00Z","Cases":148,"Status":"deaths"},{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-03-06T00:00:00Z","Cases":197,"Status":"deaths"},{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-03-07T00:00:00Z","Cases":233,"Status":"deaths"},{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-03-08T00:00:00Z","Cases":366,"Status":"deaths"},{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-03-09T00:00:00Z","Cases":463,"Status":"deaths"},{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-03-10T00:00:00Z","Cases":631,"Status":"deaths"},{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-03-11T00:00:00Z","Cases":827,"Status":"deaths"},{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-03-12T00:00:00Z","Cases":827,"Status":"deaths"},{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-03-13T00:00:00Z","Cases":1266,"Status":"deaths"},{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-03-14T00:00:00Z","Cases":1441,"Status":"deaths"},{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-03-15T00:00:00Z","Cases":1809,"Status":"deaths"},{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-03-16T00:00:00Z","Cases":2158,"Status":"deaths"},{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-03-17T00:00:00Z","Cases":2503,"Status":"deaths"},{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-03-18T00:00:00Z","Cases":2978,"Status":"deaths"},{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-03-19T00:00:00Z","Cases":3405,"Status":"deaths"},{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-03-20T00:00:00Z","Cases":4032,"Status":"deaths"},{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-03-21T00:00:00Z","Cases":4825,"Status":"deaths"},{"Country":"Italy","Province":"","Lat":43,"Lon":12,"Date":"2020-03-22T00:00:00Z","Cases":5476,"Status":"deaths"}];
const url = "https://api.covid19api.com/dayone/country/italy/status/deaths";

/* line chart
plot cumulative distribution

*/


/* radial line chart
plot marginal distribution
*/
const dataRadial = data.reduce((acc, curr) => {
  if(acc.length === 0) {
    acc.push({
      cases: curr.Cases,
      growth: curr.Cases ,
    });
  } else {
    const { cases } = acc[acc.length - 1];
    acc.push({
      cases: curr.Cases,
      growth: curr.Cases / cases,
    });
  }
  return acc;
} , []);

console.log(dataRadial);