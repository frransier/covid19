/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useEffect, useState } from "react"

import GoogleMapReact from "google-map-react"
import Layout from "../components/layout"

import SEO from "../components/seo"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
const sanityClient = require("@sanity/client")
const client = sanityClient({
  projectId: "uazrsdp8",
  dataset: "first",
  useCdn: false,
})

const Marker = ({ country }) => {
  const size = country.cases

  return (
    <Tippy
      content={
        <>
          <div>{country.name}</div>
          <div sx={{}}>
            <span>Cases: {country.cases} </span>
            <span sx={{ color: "primary" }}>({country.newCases} new)</span>
          </div>
          <div>
            <span>Deaths: {country.deaths} </span>
            <span sx={{ color: "primary" }}>({country.newDeaths} new)</span>
          </div>
        </>
      }
    >
      <div
        sx={{
          bg: "primary",
          opacity: 0.7,
          mx: -3,
          height: size > 10000 ? 65 : size > 5000 ? 50 : size > 1000 ? 30 : 15,
          width: size > 10000 ? 65 : size > 5000 ? 50 : size > 1000 ? 30 : 15,
          borderRadius: 88,
        }}
      ></div>
    </Tippy>
  )
}

const IndexPage = () => {
  const [countries, setCountries] = useState(null)
  useEffect(() => {
    const query = `*[_type == 'country'] | order(cases desc)`
    client.fetch(query).then(x => setCountries(x))
  }, [])
  useEffect(() => {
    countries && console.log(countries)
  }, [countries])

  function createMapOptions(maps) {
    return {
      // panControl: false,
      // mapTypeControl: false,
      // scrollwheel: false,
      styles: [
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#e9e9e9",
            },
            {
              lightness: 17,
            },
          ],
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5",
            },
            {
              lightness: 20,
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff",
            },
            {
              lightness: 17,
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#ffffff",
            },
            {
              lightness: 29,
            },
            {
              weight: 0.2,
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff",
            },
            {
              lightness: 18,
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff",
            },
            {
              lightness: 16,
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5",
            },
            {
              lightness: 21,
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#dedede",
            },
            {
              lightness: 21,
            },
          ],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#ffffff",
            },
            {
              lightness: 16,
            },
          ],
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              saturation: 36,
            },
            {
              color: "#333333",
            },
            {
              lightness: 40,
            },
          ],
        },
        {
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [
            {
              color: "#f2f2f2",
            },
            {
              lightness: 19,
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#fefefe",
            },
            {
              lightness: 20,
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#fefefe",
            },
            {
              lightness: 17,
            },
            {
              weight: 1.2,
            },
          ],
        },
      ],
    }
  }

  return (
    <Layout>
      <SEO title="Covid 19 Tracker" />
      <div style={{ width: "100%", height: "100vh" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBO8H3ggKEXrZwUW9Hz7apfoiceAgAjIjE" }}
          defaultCenter={{ lat: 49.8175, lng: 15.473 }}
          defaultZoom={4}
          options={createMapOptions}
        >
          {countries &&
            countries.map(x => (
              <Marker
                style={{ backgroundColor: "black" }}
                lat={x.lat}
                lng={x.lng}
                country={x}
              />
            ))}
        </GoogleMapReact>
        <div
          sx={{
            display: "grid",
            gridTemplateColumns: "auto 35% 35%",
            borderBottom: "solid 1px",
            borderBottomColor: "alternative",
            textAlign: "right",
            fontWeight: "bold",
          }}
        >
          <div sx={{ textAlign: "left" }}>Country</div>
          <div>Cases</div>

          <div>Deaths</div>
        </div>
        {countries &&
          countries.map((x, i) => (
            <div
              sx={{
                display: "grid",
                gridTemplateColumns: "auto 35% 35%",
                textAlign: "right",
                bg: i % 2 ? "lightgrey" : null,
              }}
            >
              <div sx={{ textAlign: "left" }}>{x.name}</div>
              <div>
                {formatMoney(x.cases)} (+{formatMoney(x.newCases)})
              </div>
              <div>
                {formatMoney(x.deaths)} (+{formatMoney(x.newDeaths)})
              </div>
            </div>
          ))}
        <div sx={{ mt: 6 }}>Copyright Open Society Foundation (Not Soros)</div>
      </div>
    </Layout>
  )
}

export default IndexPage

function formatMoney(amount, decimalCount = 0, decimal = ",", thousands = " ") {
  try {
    decimalCount = Math.abs(decimalCount)
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount

    const negativeSign = amount < 0 ? "-" : ""

    let i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString()
    let j = i.length > 3 ? i.length % 3 : 0

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : "")
    )
  } catch (e) {
    console.log(e)
  }
}
