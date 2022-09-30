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
      {portfolioData && (
        <div className="mx-10 p-10 slider-background rounded-md">
          <GalleryCarousal images={portfolioData.images} />
          <div className="mt-10 flex flex-col gap-3">
            <h3 className="text-[#c4cfde] text-3xl">{portfolioData.title}</h3>
            <p>{portfolioData.description}</p>
            <Link href={portfolioData.project_link} target="_blank">
              <button className="p-4 shadow_1 rounded-md text-[#ff014f] hover:slider-background hover:-translate-y-1 duration-300 w-40 hover:bg-[#18181a]">
                View Project
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default portfolio;
