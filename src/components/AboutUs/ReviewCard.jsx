
import { star } from "../../../public/assets/icons";
const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
    return (
        <div className="mb-24">

            <div className="flex item-center justify-center">
                <img
                    src={imgURL.src}
                    alt='review-img'
                    className='rounded-full w-32 h-32'
                />

            </div>
            <p className='mt-4 info-text text-lg max-w-sm text-center max-sm:ml-2'>
                {feedback}
            </p>
            <div className="flex item-center justify-center gap-2 mt-2">

                <img
                    src={star.src}
                    width={24}
                    height={24}
                    alt='rating star'
                   
                />
                <p className='text-xl font-montserrat text-gray-800'>
                   ( {rating})
                </p>
            </div>

            <h3 className='text-3xl font-palanquin font-bold text-center mt-2'>
                {customerName}
            </h3>

        </div>

    );
};

export default ReviewCard;
