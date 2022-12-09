import React, { useEffect, useState } from 'react'
import PortfolioCard from './PortfolioCard'
import axios from "axios";

function Portfilio() {
    const portfolioList = [
        {
            "projectTitle": "NFT Dashboard Application Development.",
            "category": "GALLERY",
            "image": "/NFTMarketplace/portfolio-large-01-340x250.jpg",

        },
        {
            "projectTitle": "NFT Dashboard Application Development.",
            "category": "GALLERY",
            "image": "/portfolio-large-01-340x250.jpg",

        },
        {
            "projectTitle": "NFT Dashboard Application Development.",
            "category": "GALLERY",
            "image": "/portfolio-large-01-340x250.jpg",

        },
        {
            "projectTitle": "NFT Dashboard Application Development.",
            "category": "GALLERY",
            "image": "/portfolio-large-01-340x250.jpg",

        },
        {
            "projectTitle": "NFT Dashboard Application Development.",
            "category": "GALLERY",
            "image": "/portfolio-large-01-340x250.jpg",

        },
    ]

    const [portfolios, setPortfolios] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAllPortfolios = async () => {
        setLoading(true);
        axios.get("https://css-my-home.vercel.app/portfolio")
        .then((result) => {
            console.log(result);
            setPortfolios(result.data);
            setLoading(false);
        })
    }

    useEffect(() => {
        getAllPortfolios();
    },[]);
  return (
    <div className='mt-10 p-5 flex flex-col gap-4' id='portfolio'>
        <p className='text-center text-[#ff014f]'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
        <h3 className='text-center text-5xl text-[#c4cfde]'>My Portfolio</h3>
        <div className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                portfolios.map((portfolioData, index) => {
                   return <PortfolioCard key={portfolioData._id} data={portfolioData} />
                })
            }
        </div>
    </div>
  )
}

export default Portfilio