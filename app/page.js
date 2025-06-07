import Slider from "components/Slider";
import TopCategories from "components/TopCategories";
import BestSellerProducts from '../components/BestSellerProducts'
import OurVideos from "components/OurVideos";
import Year from "components/Year";
import Customers from "components/Customers";
import NewArrivals from "components/NewArrivals";
import Ghofran from "components/Ghofran";
export default function Home() {

  return (
    <div className="">
          <Slider/>
          <TopCategories/>
          <BestSellerProducts/>
          <OurVideos/>
          <Year/>
          <Customers/>
          <NewArrivals/>
          <Ghofran/>
    </div>
  );
}
