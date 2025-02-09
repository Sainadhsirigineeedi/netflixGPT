import { useSelector } from "react-redux";
import useNowplayingmovies from "../../hooks/useNowplayingmovies";
import usePopular from "../../hooks/usePopular";
import useToprated from "../../hooks/useToprated";
import useUpcoming from "../../hooks/useUpcoming";
import Maincontainer from "./Maincontainer";
import Secondrycontainer from "./Secondrycontainer";
import Gptpage from "./Gptpage";

const Allmovies = () => {
  const isGpt = useSelector((store) => store.gptSlice.isGpt);
  useNowplayingmovies();
  usePopular();
  useToprated();
  useUpcoming();
  
  return (
    <div>
      {isGpt ? (
        <Gptpage />
      ) : (
        <div>
          <Maincontainer />
          <Secondrycontainer />
        </div>
      )}
    </div>
  );
};

export default Allmovies;