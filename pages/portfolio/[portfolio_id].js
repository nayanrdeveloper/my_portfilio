import React, { useEffect, useState } from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import GalleryCarousal from "../../components/GalleryCarousal/GalleryCarousal";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Loader from "../../components/Loader/Loader";
import AOS from "aos";
import "aos/dist/aos.css";

SwiperCore.use([EffectCoverflow, Pagination]);

function portfolio() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setIsLoading] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [portfolioData, setPortfolioData] = useState();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { portfolio_id } = router.query;

  const getPortfolioData = async () => {
    setIsLoading(true);
    const res = await axios.get(
      `https://css-my-home.vercel.app/portfolio/portfolio?id=${portfolio_id}`
    );
    console.log(res);
    setPortfolioData(res.data);
    setIsLoading(false);
    // .then((result) => {
    //   console.log(portfolio_id);
    //     console.log(result);
    //     setPortfolioData(result.data);
    //     setIsLoading(false);
    // })
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (portfolio_id) {
      console.log(portfolio_id);
      getPortfolioData();
    }
  }, [portfolio_id]);

  return (
    <div className="">
      {portfolioData && !loading ? (
        <div className="mx-3 md:mx-10 px-3 md:py-10 md:px-10 rounded-md mt-10 dark:shadow-dark shadow-light bg-light-gradient dark:bg-dark">
          <GalleryCarousal images={portfolioData.images} />
          <div className="mt-10 flex flex-col gap-3">
            <h3 className="text-[#1e2125] dark:text-[#c4cfde] text-3xl">{portfolioData.title}</h3>
            <p className="text-[#3c3e41] dark:text-[#878e99]">{portfolioData.description}</p>
            <div>
              <span className="font-bold text-[#1e2125] dark:text-[#c4cfde]">
                Technologies :{" "}
                {portfolioData.technologies.map((technology, index) => {
                  return (
                    <span key={index} className="">{`${technology}, `}</span>
                  );
                })}{" "}
              </span>
            </div>
            <div className="flex gap-2">
              <Link href={portfolioData.project_link} target="_blank">
                <button className="p-4 dark:shadow-dark shadow-light bg-light-gradient dark:bg-dark rounded-md text-[#ff014f] hover:slider-background hover:-translate-y-1 duration-300 w-40 hover:bg-[#18181a] hover:bg-box-gradient dark:hover:bg-[#18181a] hover:text-white dark:hover:text-[#ff014f]">
                  GitHub
                </button>
              </Link>
              {portfolioData.demo_link && (
                <Link href={portfolioData.demo_link} target="_blank">
                  <button className="p-4 dark:shadow-dark shadow-light bg-light-gradient dark:bg-dark rounded-md text-[#ff014f] hover:slider-background hover:-translate-y-1 duration-300 w-40 hover:bg-[#18181a] hover:bg-box-gradient dark:hover:bg-[#18181a] hover:text-white dark:hover:text-[#ff014f]">
                    View Project
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex container mt-44 justify-center my-auto">
          <Loader />
        </div>
      )}
    </div>
  );
}

export default portfolio;
