import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useUrlLocation = () => {
  const location = useLocation();
  const [isOnPlayer, setIsOnPlayer] = useState(false);
  useEffect(() => {
    if (location.pathname.includes("player")) {
      setIsOnPlayer(true);
    } else {
      setIsOnPlayer(false);
    }
  }, [location]);
  return { isOnPlayer };
};

export default useUrlLocation;
