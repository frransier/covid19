import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ClientSideOnlyLazy = React.lazy(() => import("../data/chart"))
const ExamplePage = () => {
  const isSSR = typeof window === "undefined"
  return (
    <>
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <ClientSideOnlyLazy />
        </React.Suspense>
      )}
    </>
  )
}

export default ExamplePage
