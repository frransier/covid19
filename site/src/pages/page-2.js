import React from "react"
import { Link } from "gatsby"
import CanvasJSReact from "../data/canvasjs.react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import data from "../data/data"

const SecondPage = () => {
  var CanvasJS = window && CanvasJSReact.CanvasJS
  var CanvasJSChart = window && CanvasJSReact.CanvasJSChart
  console.log(data)

  const options = {
    animationEnabled: true,
    theme: "light2",
    logarithmBase: 4,
    title: {
      text: "Day 1 = 5 deaths",
    },
    axisY: {
      title: "Deaths",
      logarithmic: true,
      includeZero: false,
    },
    axisX: {
      crosshair: {
        enabled: true,
        labelFormatter: e => {
          return "Days since 5 deaths"
        },
      },
      gridThickness: 0,
      tickLength: 0,
      lineThickness: 0,
      labelFontColor: "transparent",
    },
    data: [
      {
        type: "spline",
        name: "Sweden",
        showInLegend: true,
        dataPoints: data.data.find(x => x.country === "Sweden").data,
      },
      {
        type: "spline",
        name: "Denmark",
        showInLegend: true,
        dataPoints: data.data
          .find(x => x.country === "Denmark")
          .data.sort((a, b) => b.label > a.label),
      },
      {
        type: "spline",
        name: "Norway",
        showInLegend: true,
        dataPoints: data.data
          .find(x => x.country === "Norway")
          .data.sort((a, b) => b.label > a.label),
      },
      {
        type: "spline",
        name: "Spain",
        showInLegend: true,
        dataPoints: data.data
          .find(x => x.country === "Spain")
          .data.sort((a, b) => b.label > a.label),
      },
      {
        type: "spline",
        name: "South Korea",
        showInLegend: true,
        dataPoints: data.data
          .find(x => x.country === "South_Korea")
          .data.sort((a, b) => b.label > a.label),
      },
      {
        type: "spline",
        name: "USA",
        showInLegend: true,
        dataPoints: data.data
          .find(x => x.country === "United_States_of_America")
          .data.sort((a, b) => b.label > a.label),
      },
      {
        type: "spline",
        name: "Italy",
        showInLegend: true,
        dataPoints: data.data
          .find(x => x.country === "Italy")
          .data.sort((a, b) => b.label > a.label),
      },
      {
        type: "spline",
        name: "France",
        showInLegend: true,
        dataPoints: data.data
          .find(x => x.country === "France")
          .data.sort((a, b) => b.label > a.label),
      },
    ],
  }
  console.log(options.data)

  return (
    <Layout>
      <SEO title="Page two" />

      <CanvasJSChart options={options} />
    </Layout>
  )
}

export default SecondPage
