import Image from "next/image";
import BlogCard from "../components/Blog/BlogCard";
import Education from "../components/Education/Education";
import I_Am from "../components/I_Am/I_Am";
import MyExpereince from "../components/MyExpereince/MyExpereince";
import Navbar from "../components/Navbar/Navbar";
import Portfilio from "../components/Portfilio/Portfilio";
import styles from "../styles/Home.module.css";

export default function Home() {
  const blogList = [
    {
      id: 1,
      title: "The Best Ways to Do Market Research For Your Business Plan.",
      image:
        "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/marketing-young-cute-business-lady-striped-shirt-office-showing-raising-results-1-340x250.jpg",
      category: "DEVELOPMENT",
      time: "4",
    },
    {
      id: 2,
      title: "The Best Ways to Do Market Research For Your Business Plan.",
      image:
        "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/pretty-curly-young-woman-writing-notes-startup-project-340x250.jpg",
      category: "DEVELOPMENT",
      time: "4",
    },
    {
      id: 3,
      title: "The Best Ways to Do Market Research For Your Business Plan.",
      image:
        "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/road-sign-direction-perforated-paper-arrow-340x250.jpg",
      category: "DEVELOPMENT",
      time: "4",
    },
    {
      id: 4,
      title: "The Best Ways to Do Market Research For Your Business Plan.",
      image:
        "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/road-sign-direction-perforated-paper-arrow-340x250.jpg",
      category: "DEVELOPMENT",
      time: "4",
    },
    {
      key: 5,
      title: "The Best Ways to Do Market Research For Your Business Plan.",
      image:
        "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/road-sign-direction-perforated-paper-arrow-340x250.jpg",
      category: "DEVELOPMENT",
      time: "4",
    },
  ];
  return (
    <div>
      <I_Am />
      <MyExpereince />
      <Education />
      <Portfilio />
      <section>
        <div className="mt-10 p-5 flex flex-col gap-4" id="portfolio">
          <p className="text-center text-[#ff014f]">
            VISIT MY BLOG AND KEEP YOUR FEEDBACK
          </p>
          <h3 className="text-center text-5xl text-[#c4cfde]">My Blog</h3>
          <div className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
              blogList.map((blogItem) => {
                return <BlogCard  key={blogItem.id} {...blogItem}/>
              })
            }
          </div>
        </div>
      </section>
    </div>
  );
}
