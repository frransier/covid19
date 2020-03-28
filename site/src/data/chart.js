import React from "react"
import { Link } from "gatsby"
import CanvasJSReact from "../data/canvasjs.react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import data from "./data"

var CanvasJS = CanvasJSReact.CanvasJS
var CanvasJSChart = CanvasJSReact.CanvasJSChart

const Chart = () => {
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
        name: "Germany",
        showInLegend: true,
        dataPoints: data.data
          .find(x => x.country === "Germany")
          .data.sort((a, b) => b.label > a.label),
      },
      {
        type: "spline",
        name: "Netherlands",
        showInLegend: true,
        dataPoints: data.data
          .find(x => x.country === "Netherlands")
          .data.sort((a, b) => b.label > a.label),
      },
      {
        type: "spline",
        name: "Belgium",
        showInLegend: true,
        dataPoints: data.data
          .find(x => x.country === "Belgium")
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
        name: "United Kingdom",
        showInLegend: true,
        dataPoints: data.data
          .find(x => x.country === "United_Kingdom")
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

  return typeof window !== `undefined` ? (
    <CanvasJSChart options={options} />
  ) : (
    <div>hej</div>
  )
}

export default Chart