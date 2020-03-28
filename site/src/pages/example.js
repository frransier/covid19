import React from "react"
import Loadable from "react-loadable"
import { Link } from "gatsby"
import Chart from "../data/chart"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ExamplePage = () => {
  return (
    <Layout>
      <SEO title="Page two" />

      <Chart />
    </Layout>
  )
}

export default ExamplePage
