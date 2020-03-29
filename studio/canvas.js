const fs = require("fs");
const data = JSON.parse(fs.readFileSync("covidtracker0328.json"));
const iso = JSON.parse(fs.readFileSync("iso.json"));
const _ = require("lodash");

const test = data
  .map((x, i) => {
    if (
      i > 0 &&
      x.countriesAndTerritories !== data[i - 1].countriesAndTerritories
    ) {
      // if (x.deaths > 9)
      // { y: 155, label: "Jan" },
      const country = data
        .map(y => {
          if (y.geoId === x.geoId) return y;
        })
        .filter(Boolean);
      // console.log(grouped);
      // const cnt = grouped[0];

      const spine = country
        .map((x, i) => {
          const arr = country.slice(i).map(x => x.cases);

          const point = {
            y: arr.reduce((a, b) => a + b, 0) / country[0].popData2018,
            label: i + 1,
          };
          if (point.y * country[0].popData2018 > 100) return point;
        })
        .filter(Boolean);

      //   console.log(spine.length);

      const reverse = spine.map((x, i) => {
        const pt = {
          y: x.y,
          label: `${country[0].countriesAndTerritories} day ${
            spine[spine.length - i - 1].label
          } `,
          x: spine[spine.length - i - 1].label,
        };
        return pt;
      });
      //   console.log(reverse);

      const final = {
        country: country[0].countriesAndTerritories,
        data: reverse,
      };

      return final;
    }

    // const deaths = grouped.map(x => x.deaths).reduce((a, b) => a + b, 0);
    // const cases = grouped.map(x => x.cases).reduce((a, b) => a + b, 0);
    // const name = grouped[0]["countriesAndTerritories"].replace("_", " ");
    // const geo = iso.find(x => x.ISO === grouped[0].geoId);

    // const country = {
    //   _type: "country",
    //   _id: geo && `1${Math.round(geo.Latitude)}${Math.round(geo.Longitude)}`,
    //   name: name,
    //   deaths: deaths,
    //   newDeaths: deaths - (deaths - grouped[0].deaths),
    //   cases: cases,
    //   newCases: cases - (cases - grouped[0].cases),
    //   lat: geo && geo.Latitude,
    //   lng: geo && geo.Longitude,
    // };
    // if (geo && country.cases > 20) return country;
  })

  .filter(Boolean);
// console.log(test);

// const unique = _.uniqBy(test, "country");
// console.log(unique);

// console.log(test);

// console.log(test.find(x => x.name === "United Kingdom"));

fs.writeFileSync("logScale.json", JSON.stringify(test));
// cat data.json | jq -c '.[]' > data.ndjson
