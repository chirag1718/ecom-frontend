import React, { useEffect, useState } from "react";
import EcomAPI from "../../../apis/EcomAPI";
import Carousel from "react-material-ui-carousel";

const Banner = () => {
  const [selectedBanner, setSelectedBanner] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EcomAPI.get("/banner/get-all-banner");
        console.log(response);
        setSelectedBanner(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  // console.log();
  return (
    <div className="h-[400px] w-full">
      <Carousel
        cycleNavigation={true}
        swipe={true}
        dragable={true}
        indicators={false}
      >
        {selectedBanner &&
          selectedBanner.map((banner) => {
            if (banner.isHero === true) {
              return (
                <img
                  key={banner._id}
                  src={banner.image.url}
                  className="h-[400px] w-full"
                  alt=""
                />
              );
            }
            return null;
          })}
      </Carousel>
    </div>
  );
};

export default Banner;
