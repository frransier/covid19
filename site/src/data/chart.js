import React from "react"
import { Link } from "gatsby"
// import CanvasJSReact from "../data/canvasjs.react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import data from "./data"
const CanvasJSReact =
  typeof window !== `undefined` ? require("../data/canvasjs.react") : null
var CanvasJS = typeof window !== `undefined` && CanvasJSReact.CanvasJS
var CanvasJSChart = typeof window !== `undefined` && CanvasJSReact.CanvasJSChart

const Chart = () => {
  const options = {
    animationEnabled: true,
    theme: "light2",
    logarithmBase: 4,
    title: {
      text: "Dag 1 = 5 dödsfall",
    },
    axisY: {
      title: "Dödsfall",
      logarithmic: true,
      includeZero: false,
    },
    axisX: {
      crosshair: {
        enabled: true,
        labelFormatter: e => {
          return "Dagar sedan 5 dödsfall"
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
        name: "Sverige",
        showInLegend: true,
        dataPoints: data.data.find(x => x.country === "Sweden").data,
      },
      {
        type: "spline",
        name: "Danmark",
        showInLegend: true,
        dataPoints: data.data
          .find(x => x.country === "Denmark")
          .data.sort((a, b) => b.label > a.label),
      },
      {
        type: "spline",
        name: "Norge",
        showInLegend: true,
        dataPoints: data.data
          .find(x => x.country === "Norway")
          .data.sort((a, b) => b.label > a.label),
      },
      {
        type: "spline",
        name: "Spanien",
        showInLegend: true,
        dataPoints: data.data
          .find(x => x.country === "Spain")
          .data.sort((a, b) => b.label > a.label),
      },
      {
        type: "spline",
        name: "Tyskland",
        showInLegend: true,
        dataPoints: data.data
          .find(x => x.country === "Germany")
          .data.sort((a, b) => b.label > a.label),
      },
      {
        type: "spline",
        name: "Holland",
        showInLegend: true,
        dataPoints: data.data
          .find(x => x.country === "Netherlands")
          .data.sort((a, b) => b.label > a.label),
      },
      {
        type: "spline",
        name: "Belgien",
        showInLegend: true,
        dataPoints: data.data
          .find(x => x.country === "Belgium")
          .data.sort((a, b) => b.label > a.label),
      },
      {
        type: "spline",
        name: "Italien",
        showInLegend: true,
        dataPoints: data.data
          .find(x => x.country === "Italy")
          .data.sort((a, b) => b.label > a.label),
      },
      {
        type: "spline",
        name: "Storbritannien",
        showInLegend: true,
        dataPoints: data.data
          .find(x => x.country === "United_Kingdom")
          .data.sort((a, b) => b.label > a.label),
      },
      {
        type: "spline",
        name: "Frankrike",
        showInLegend: true,
        dataPoints: data.data
          .find(x => x.country === "France")
          .data.sort((a, b) => b.label > a.label),
      },
    ],
  }

  return typeof window !== `undefined` && <CanvasJSChart options={options} />
}

export default Chart
