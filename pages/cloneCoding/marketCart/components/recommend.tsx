import RecomImage from "../Images/chair1.png";
import ProductBase from "./product";

const Recoomend = () => {
  return (
    <ProductBase
      page="Recommendation"
      grade={4.9}
      name="Swoon Chair"
      cate="Chair"
      price={450}
      Images={RecomImage}
    />
  );
};

export default Recoomend;
