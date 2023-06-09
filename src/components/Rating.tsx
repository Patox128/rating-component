import { useState } from "react";
import start from "../assets/icon-star.svg";
import { ThankYou } from "./ThankYou";

export const Rating = () => {
  const [selectedRating, setSelectedRating] = useState<number>();
  const [isSubmit, setIsSubmit] = useState(false);

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmit((prevState) => !prevState);
  };

  return isSubmit ? (
    <ThankYou rating={selectedRating} />
  ) : (
    <div className="mx-4 flex w-[400px] flex-col gap-6 rounded-3xl bg-[#19202a] p-8 text-white">
      <div>
        <img
          src={start}
          alt="Start Icon"
          className="rounded-full bg-[#272f36] p-4"
        />
      </div>
      <h1 className="text-2xl font-bold">How did we do?</h1>
      <p className="text-sm text-gray-400">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="gap grid grid-cols-5 gap-5">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            className="w-full rounded-full bg-[#272f36] p-2 text-gray-400 hover:bg-[#7d8796]
            focus:bg-orange-500 focus:text-white sm:p-3"
            key={value}
            onClick={() => handleRatingClick(value)}
          >
            {value}
          </button>
        ))}
      </div>

      <button
        type="submit"
        disabled={selectedRating === undefined}
        className="w-full rounded-3xl bg-orange-500 
      py-2 hover:bg-white hover:text-orange-500"
        onClick={(e) => handleSubmit(e)}
      >
        SUBMIT
      </button>
    </div>
  );
};
