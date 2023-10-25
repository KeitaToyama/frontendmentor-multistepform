import { FC } from "react";
import { useFormContext } from "react-hook-form";
import useMultiForm from "../../hooks/useMultiForm";

type Props = {
  goToSection: any;
};
const Step4: FC<Props> = ({ goToSection }) => {
  const { watch } = useFormContext();
  const currentValue = watch();

  const handleGoto = (num: number) => {
    goToSection(num);
  };
  // この書き方強い
  const planbaseprice = { Arcade: 9, Advanced: 12, Pro: 15 }[
    currentValue.plan as string
  ];
  const yearly = currentValue.planLength ? 10 : 1;
  const LargerStorage = currentValue.isLargerStorage ? 2 : 0;
  const CustomizableProfile = currentValue.isCustomizableProfile ? 2 : 0;
  const OnlineService = currentValue.isOnlineService ? 1 : 0;

  return (
    <div className="flex flex-col p-6">
      <h1 className="text-blue-800 text-3xl font-bold">Finishing up</h1>
      <p className="text-gray-500 py-2 whitespace-nowrap">
        Double-check everything looks OK before confirming.
      </p>
      <div className="flex flex-col justify-start flex-1 gap-4">
        <div>
          <div
            className={`p-6 rounded-xl  flex flex-row justify-between items-center bg-slate-200
            `}
          >
            <div className="flex flex-col">
              <p>
                {currentValue.plan}(
                {currentValue.planLength ? "yearly" : "monthly"})
              </p>
              <p
                className="text-gray-400 underline cursor-pointer"
                onClick={() => handleGoto(1)}
              >
                Change
              </p>
            </div>
            <p>
              $
              {currentValue.planLength
                ? (planbaseprice as number) * 10
                : planbaseprice}
              /{currentValue.planLength ? "yr" : "mo"}
            </p>
          </div>
          {currentValue.isOnlineService && (
            <div
              className={`px-6 py-4 rounded-xl  flex flex-row justify-between items-center bg-slate-200
            `}
            >
              <p className="text-gray-400">isOnlineService</p>
              <p className="">
                ${(OnlineService as number) * yearly}/
                {currentValue.planLength ? "yr" : "mo"}
              </p>
            </div>
          )}
          {currentValue.isLargerStorage && (
            <div
              className={`px-6 py-4 rounded-xl  flex flex-row justify-between items-center bg-slate-200
            `}
            >
              <p className="text-gray-400">isLargerStorage</p>
              <p className="">
                ${(LargerStorage as number) * yearly}/
                {currentValue.planLength ? "yr" : "mo"}
              </p>
            </div>
          )}
          {currentValue.isCustomizableProfile && (
            <div
              className={`px-6 py-4 rounded-xl  flex flex-row justify-between items-center bg-slate-200
            `}
            >
              <p className="text-gray-400">isCustomizableProfile</p>
              <p className="">
                ${(CustomizableProfile as number) * yearly}/
                {currentValue.planLength ? "yr" : "mo"}
              </p>
            </div>
          )}
        </div>
        <div
          className={`px-6 py-2 rounded-xl  flex flex-row justify-between items-center 
            `}
        >
          <p className="text-gray-400">
            Total({currentValue.planLength ? "per year" : "per month"})
          </p>
          <p className="text-blue-700">
            $
            {((planbaseprice as number) +
              LargerStorage +
              CustomizableProfile +
              OnlineService) *
              yearly}
            /{currentValue.planLength ? "yr" : "mo"}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Step4;
