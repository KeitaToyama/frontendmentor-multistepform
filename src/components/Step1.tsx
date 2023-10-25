import { FC } from "react";
import { useFormContext } from "react-hook-form";
import useMultiForm from "../../hooks/useMultiForm";

type Props = {};
const Step1: FC<Props> = ({}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col p-6 gap-2">
      <h1 className="text-blue-800 text-3xl font-bold">Personal info</h1>
      <p className="text-gray-500 py-2 whitespace-nowrap">
        Please provide your name, email address, and phone number.
      </p>
      <h2>Name</h2>
      <input
        type="text"
        placeholder="e.g. Stephen King"
        {...register("name")}
        className="border-[2px] p-1 rounded-lg focus:outline-blue-500"
      />
      <p className="text-red-600">{errors.name?.message as React.ReactNode}</p>
      <h2>Email</h2>
      <input
        type="email"
        placeholder="e.g. stephenking@lorem.com"
        {...register("email")}
        className="border-[2px] p-1 rounded-lg focus:outline-blue-500"
      />
      <p className="text-red-600">{errors.email?.message as React.ReactNode}</p>
      <h2>Phone</h2>
      <input
        type="tel"
        placeholder="e.g. +1 234 567 890"
        {...register("phone")}
        className="border-[2px] p-1 rounded-lg focus:outline-blue-500"
      />
      <p className="text-red-600">{errors.phone?.message as React.ReactNode}</p>
    </div>
  );
};
export default Step1;
