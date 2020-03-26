/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => {
  const date = new Date()
  const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  const day = `${date.getDate()}`
  const weekday = weekdays[date.getDay()]
  const month = months[date.getMonth()]
  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/" sx={{ color: "text", textDecoration: "none" }}>
          COVID-19 Worldwide Cases
        </Link>
      </h1>
      <h5>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.ecdc.europa.eu/en/publications-data/download-todays-data-geographic-distribution-covid-19-cases-worldwide"
          sx={{ color: "primary", textDecoration: "none" }}
        >
          Source: ECDC geographic distribution of COVID-19 cases worldwide
        </a>
      </h5>
      <h6>Updated 2020-03-26 3PM CET</h6>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
