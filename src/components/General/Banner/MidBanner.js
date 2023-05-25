import React, { useEffect, useState } from "react";
import EcomAPI from "../../../apis/EcomAPI";
import Carousel from "react-material-ui-carousel";

const MidBanner = () => {
  const [selectedBanner, setSelectedBanner] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EcomAPI.get("/banner/get-all-banner");
        console.log(response, "This is Banner response");
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
      <Carousel cycleNavigation={true} swipe={true} dragable={true}>
        {selectedBanner &&
          selectedBanner.map((banner) => {
            return (
              <img
                key={banner._id}
                src={banner.image.url}
                className="h-[400px] w-full"
                alt=""
              />
            );
          })}
      </Carousel>
    </div>
  );
};

export default MidBanner;
