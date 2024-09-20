import Image from "next/image";
import Link from "next/link";
import Index from "./Screen/Index";
import IndexTow from "./Screen/IndexTow";
import BestSelling from "./Screen/BestSelling";
import BestOffer from "./Screen/BestOffer";
import FeaturedCollection from "./Screen/FeaturedCollection";
import NewArrivals from "./Screen/NewArrivals";
import Category from "./Screen/Category";
import LatestBlog from "./Screen/LatestBlog";
import AboutUs from "./about-us/page";
import Banner from "./Screen/Banner";

export default function Home() {
  return (
    <div>
      <Index />
      <IndexTow />
      <BestSelling />
      <Category />
      <BestOffer />
      <FeaturedCollection />
      <NewArrivals />
      <Banner />
      <LatestBlog />
      <AboutUs />
    </div>
  );
}
