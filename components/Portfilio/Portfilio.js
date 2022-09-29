import React from 'react'
import PortfolioCard from './PortfolioCard'

function Portfilio() {
    const portfolioList = [
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
        {
            "projectTitle": "NFT Dashboard Application Development.",
            "category": "GALLERY",
            "image": "/portfolio-large-01-340x250.jpg",

        },
    ]
  return (
    <div className='mt-10 p-5 flex flex-col gap-4'>
        <p className='text-center text-[#ff014f]'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
        <h3 className='text-center text-5xl text-[#c4cfde]'>My Portfolio</h3>
        <div className='mt-5 grid grid-cols-3 gap-5'>
            {
                portfolioList.map((portfolioData, index) => {
                   return <PortfolioCard key={index} data={portfolioData} />
                })
            }
        </div>
    </div>
  )
}

export default Portfilio