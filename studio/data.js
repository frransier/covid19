const fs = require("fs");
const data = JSON.parse(fs.readFileSync("covidtracker0327.json"));
const iso = JSON.parse(fs.readFileSync("iso.json"));
const _ = require("lodash");

const test = data
  .map(x => {
    const grouped = data
      .map(y => {
        if (y.geoId === x.geoId) return y;
      })
      .filter(Boolean);
    // console.log(grouped[0].Deaths);
    // const cnt = grouped[0];
    const deaths = grouped.map(x => x.deaths).reduce((a, b) => a + b, 0);
    const cases = grouped.map(x => x.cases).reduce((a, b) => a + b, 0);
    const name = grouped[0]["countriesAndTerritories"].replace("_", " ");
    const geo = iso.find(x => x.ISO === grouped[0].geoId);
    const country = {
      _type: "country",
      _id: geo && `1${Math.round(geo.Latitude)}${Math.round(geo.Longitude)}`,
      name: name,
      deaths: deaths,
      newDeaths: deaths - (deaths - grouped[0].deaths),
      cases: cases,
      newCases: cases - (cases - grouped[0].cases),
      lat: geo && geo.Latitude,
      lng: geo && geo.Longitude,
    };
    if (geo && country.cases > 20) return country;
  })
  .filter(Boolean);
const unique = _.uniqBy(test, "name");
console.log(unique.length);

// console.log(test);

console.log(test.find(x => x.name === "United Kingdom"));

fs.writeFileSync("data.json", JSON.stringify(unique));
// cat data.json | jq -c '.[]' > data.ndjson
