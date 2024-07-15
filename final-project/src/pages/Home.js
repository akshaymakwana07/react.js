import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import Banner from "../images/banner.jpeg"
import '../Styles/Homestyle.css'

const Home = () => {
  return (
    <Layout>
      <div className='home' style={{backgroundImage:`url(${Banner})`}}>
        <div className='headercontainer'>
        <h1>FOOD WEBSITE</h1>
        <p>Best Food In India</p>
        <Link>
        <button>
          ORDER NOW
        </button>
        </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
