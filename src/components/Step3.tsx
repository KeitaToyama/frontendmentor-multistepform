import { FC } from "react";
import { useFormContext } from "react-hook-form";
import useMultiForm from "../../hooks/useMultiForm";

type Props = {};
const Step3: FC<Props> = ({}) => {
  const { register, watch } = useFormContext();

  const currentValue = watch();

  return (
    <div className="flex flex-col p-6 flex-1">
      <h1 className="text-blue-800 text-3xl font-bold">Pick add-ons</h1>
      <p className="text-gray-500 py-2 whitespace-nowrap">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="flex flex-col justify-start flex-1 gap-4">
        <label
          className={`p-4 rounded-xl border-[1px] flex flex-row justify-between items-center ${
            currentValue.isOnlineService ? "bg-blue-50" : "border-slate-200"
          }`}
        >
          <div className="flex flex-row gap-4 flex-1">
            <input
              type="checkbox"
              {...register("isOnlineService")}
              className="w-[5%]"
            />
            <div className="flex flex-col">
              <h1 className="text-lg">Online service</h1>
              <p className="text-sm text-gray-400">
                Access to multiplayer games
              </p>
            </div>
          </div>
          <div className="text-blue-600 text-sm">
            {currentValue.planLength ? <p>+$10/yr</p> : <p>+$1/mo</p>}
          </div>
        </label>{" "}
        <label
          className={`p-4 rounded-xl border-[1px] flex flex-row justify-between items-center ${
            currentValue.isLargerStorage ? "bg-blue-50" : "border-slate-200"
          }`}
        >
          <div className="flex flex-row gap-4 flex-1">
            <input
              type="checkbox"
              {...register("isLargerStorage")}
              className="w-[5%]"
            />
            <div className="flex flex-col">
              <h1 className="text-lg">Larger storage</h1>
              <p className="text-sm text-gray-400">Extra 1TB of cloud save</p>
            </div>
          </div>
          <div className="text-blue-600 text-sm">
            {currentValue.planLength ? <p>+$20/yr</p> : <p>+$2/mo</p>}
          </div>
        </label>
        <label
          className={`p-4 rounded-xl border-[1px] flex flex-row justify-between items-center ${
            currentValue.isCustomizableProfile
              ? "bg-blue-50"
              : "border-slate-200"
          }`}
        >
          <div className="flex flex-row gap-4 flex-1">
            <input
              type="checkbox"
              {...register("isCustomizableProfile")}
              className="w-[5%]"
            />
            <div className="flex flex-col">
              <h1 className="text-lg">Customizable Profile</h1>
              <p className="text-sm text-gray-400">
                Custom theme on your profile
              </p>
            </div>
          </div>
          <div className="text-blue-600 text-sm">
            {currentValue.planLength ? <p>+$20/yr</p> : <p>+$2/mo</p>}
          </div>
        </label>
      </div>
    </div>
  );
};
export default Step3;
