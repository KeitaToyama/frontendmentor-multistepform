import { FC } from "react";

type Props = {};
const Step5: FC<Props> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 mt-24 text-center">
      <img src="./icon-thank-you.svg" />
      <h1 className="font-bold text-3xl p-4">Thank you!</h1>
      <p className="text-lg text-gray-500">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};
export default Step5;
