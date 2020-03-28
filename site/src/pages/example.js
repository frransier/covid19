import React from "react"
import { Link } from "gatsby"
import Chart from "../data/chart"
import Layout from "../components/layout"
import SEO from "../components/seo"
import data from "../data/data"

const ExamplePage = () => {
  return (
    <Layout>
      <SEO title="Page two" />

      <Chart />
    </Layout>
  )
}

export default ExamplePage
