import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ClientSideOnlyLazy = React.lazy(() => import("../data/chart"))
const ExamplePage = () => {
  const isSSR = typeof window === "undefined"
  return (
    <Layout>
      <SEO title="COVID-19 Europe" />
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <ClientSideOnlyLazy />
        </React.Suspense>
      )}
    </Layout>
  )
}

export default ExamplePage
