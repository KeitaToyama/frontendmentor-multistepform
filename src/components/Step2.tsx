import { FC } from "react";
import { useFormContext } from "react-hook-form";
import useMultiForm from "../../hooks/useMultiForm";

type Props = {};
const Step2: FC<Props> = ({}) => {
  const { register, watch } = useFormContext();

  const selectedPlan = watch("plan");
  const selectedLength = watch("planLength");

  return (
    <div className="flex flex-col p-6 gap-2">
      <h1 className="text-blue-800 text-3xl font-bold">Select your plan</h1>
      <p className="text-gray-500 py-2 whitespace-nowrap">
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex flex-row w-full justify-around py-4">
        <label
          className={`w-36 h-44 p-2 rounded-xl ${
            selectedPlan === "Arcade"
              ? "bg-blue-50 border-[1px] border-blue-400"
              : ""
          } flex flex-col items-start justify-around`}
        >
          <input
            type="radio"
            className="hidden"
            {...register("plan")}
            id="arcade"
            value={"Arcade"}
          />
          <img src="./icon-arcade.svg" />
          <h1 className="font-bold">Arcade</h1>
          {selectedLength ? (
            <p className="text-gray-400">$90/yr</p>
          ) : (
            <p className="text-gray-400">$9/mo</p>
          )}
          {selectedLength ? (
            <p className=" text-black text-xs">2 months free</p>
          ) : null}
        </label>
        <label
          className={`w-36 h-44 p-2 rounded-xl ${
            selectedPlan === "Advanced"
              ? "bg-blue-50 border-[1px] border-blue-400"
              : ""
          } flex flex-col items-start justify-around`}
        >
          <input
            type="radio"
            className="hidden"
            {...register("plan")}
            id="advanced"
            value={"Advanced"}
          />
          <img src="./icon-advanced.svg" />
          <h1 className="font-bold">Advanced</h1>
          {selectedLength ? (
            <p className="text-gray-400">$120/yr</p>
          ) : (
            <p className="text-gray-400">$12/mo</p>
          )}
          {selectedLength ? (
            <p className=" text-black text-xs">2 months free</p>
          ) : null}
        </label>
        <label
          className={`w-36 h-44 p-2 rounded-xl ${
            selectedPlan === "Pro"
              ? "bg-blue-50 border-[1px] border-blue-400"
              : ""
          } flex flex-col items-start justify-around`}
        >
          <input
            type="radio"
            className="hidden"
            {...register("plan")}
            id="pro"
            value={"Pro"}
          />
          <img src="./icon-pro.svg" />
          <h1 className="font-bold">Pro</h1>
          {selectedLength ? (
            <p className="text-gray-400">$150/yr</p>
          ) : (
            <p className="text-gray-400">$15/mo</p>
          )}
          {selectedLength ? (
            <p className=" text-black text-xs">2 months free</p>
          ) : null}
        </label>
      </div>
      <div className="flex flex-row justify-center bg-slate-100 p-2 rounded-xl">
        <span
          className={`mx-2 text-sm font-medium text-gray-400  ${
            selectedLength === false ? "text-gray-900" : ""
          } `}
        >
          Monthly
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            {...register("planLength")}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 "></div>
        </label>
        <span
          className={`mx-2 text-sm font-medium text-gray-400  ${
            selectedLength === true ? "text-gray-900" : ""
          } `}
        >
          Yearly
        </span>
      </div>
    </div>
  );
};
export default Step2;
