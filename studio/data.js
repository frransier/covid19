const fs = require("fs");
const data = JSON.parse(fs.readFileSync("covid19.json"));
const iso = JSON.parse(fs.readFileSync("iso.json"));
const _ = require("lodash");

const test = data
  .map(x => {
    const grouped = data
      .map(y => {
        if (y.GeoId === x.GeoId) return y;
      })
      .filter(Boolean);
    // console.log(grouped[0].Deaths);
    // const cnt = grouped[0];
    const deaths = grouped.map(x => x.Deaths).reduce((a, b) => a + b, 0);
    const cases = grouped.map(x => x.Cases).reduce((a, b) => a + b, 0);
    const name = grouped[0]["Countries and territories"].replace("_", " ");
    const geo = iso.find(x => x.ISO === grouped[0].GeoId);
    const country = {
      _type: "country",
      name: name,
      deaths: deaths,
      newDeaths: deaths - (deaths - grouped[0].Deaths),
      cases: cases,
      newCases: cases - (cases - grouped[0].Cases),
      lat: geo && geo.Latitude,
      lng: geo && geo.Longitude,
    };
    if (geo && country.cases > 50) return country;
  })
  .filter(Boolean);
const unique = _.uniqBy(test, "name");
console.log(unique.length);

// console.log(test);

console.log(test.find(x => x.name === "United Kingdom"));

fs.writeFileSync("data.json", JSON.stringify(unique));
// cat data.json | jq -c '.[]' > data.ndjson
