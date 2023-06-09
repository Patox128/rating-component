import thankYou from "../assets/illustration-thank-you.svg";

interface Props {
  rating: number | undefined;
}

export const ThankYou: React.FC<Props> = ({ rating }) => {
  return (
    <div className="mx-4 flex w-[400px] flex-col items-center gap-6 rounded-3xl bg-[#19202a] p-8 text-center text-white sm:p-10">
      <div>
        <img src={thankYou} alt="Thank Icon" />
      </div>
      <p className="rounded-3xl bg-[#272f36] px-6 py-1 text-orange-500">
        You selected {rating} out of 5
      </p>
      <h1 className="text-2xl font-bold">Thank you!</h1>
      <p className="text-sm text-gray-400">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};
