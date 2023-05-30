import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Wishlist = () => {
  const [showWishlist, setShowWishlist] = useState(false);
  return (
    <div
      onClick={() => setShowWishlist(!showWishlist)}
      className="transition-all ease-in-out duration-200 active:-translate-y-1 active:scale-110 cursor-pointer"
    >
      {showWishlist ? (
        <FavoriteBorderIcon color="error" />
      ) : (
        <FavoriteIcon color="error" />
      )}
    </div>
  );
};

export default Wishlist;
