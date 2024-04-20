import { reviews } from "../../utils/constants";
import ReviewCard from "./ReviewCard";

const CustomerReviews = () => {
  
  return (

    <div className="mt-10 mb-10">

      <h1 className="text-center text-5xl font-palanquin font-bold pt-20">What Our <span className='text-customColor'> Customers </span> Say?</h1>

      <p className="m-auto mt-4 max-w-lg text-center text-lg">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      <div className="flex item-center justify-evenly mt-20  max-sm:flex-col">

        {reviews.map((review) => {
          return (
            <ReviewCard key={review.label} {...review} />

          );
        })}
      </div>
    </div>

  );
};

export default CustomerReviews;
