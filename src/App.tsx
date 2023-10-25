import "./App.css";
import useMultiForm from "../hooks/useMultiForm";
import { useCallback } from "react";
import Step1 from "./components/Step1";
import { FormProvider, useForm } from "react-hook-form";
import Step2 from "./components/Step2";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "./utils/schema";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";

export type FormItems = {
  name: string;
  email: string;
  phone: string;
  plan: "Arcade" | "Advanced" | "Pro";
  planLength: boolean;
  isLargerStorage: boolean;
  isCustomizableProfile: boolean;
  isOnlineService: boolean;
};
const initialValues: FormItems = {
  name: "",
  email: "",
  phone: "",
  plan: "Arcade",
  planLength: false,
  isLargerStorage: false,
  isCustomizableProfile: false,
  isOnlineService: false,
};

function App() {
  const useFormMethods = useForm<FormItems>({
    defaultValues: initialValues,
    mode: "onBlur",
    resolver: zodResolver(validationSchema),
  });

  const { handleSubmit } = useFormMethods;

  const { currentIndex, goBackwards, goForwards, goToSection } =
    useMultiForm(4);

  const onSubmit = (data: FormItems) => {
    console.log(data);
    goToSection(4);
  };

  const incrementStep = useCallback(async () => {
    const result = await useFormMethods.trigger(["name", "email", "phone"]);
    if (result) {
      goForwards();
    }
  }, [useFormMethods]);

  return (
    <main className="bg-slate-100 flex justify-center items-center  h-screen ">
      <div className="p-4 bg-white max-w-4xl flex flex-row rounded-xl">
        <div className="flex flex-col relative">
          <img src="./bg-sidebar-desktop.svg" className="" />
          <div className="absolute flex flex-col top-8 right-8 left-8 text-white">
            <div className="flex flex-row items-center mb-4">
              <h1
                className={` px-3 py-1 m-3 border-slate-100 border-[1px] rounded-full ${
                  currentIndex == 0 ? "bg-white text-blue-900" : ""
                }`}
              >
                1
              </h1>
              <div className="flex flex-col">
                <p>Step 1</p>
                <p className="font-bold">Your Info</p>
              </div>
            </div>
            <div className="flex flex-row items-center mb-4">
              <h1
                className={` px-3 py-1 m-3 border-slate-100 border-[1px] rounded-full ${
                  currentIndex == 1 ? "bg-white text-blue-900" : ""
                }`}
              >
                2
              </h1>
              <div className="flex flex-col">
                <p>Step 2</p>
                <p className="font-bold">Select Plan</p>
              </div>
            </div>
            <div className="flex flex-row items-center mb-4">
              <h1
                className={` px-3 py-1 m-3 border-slate-100 border-[1px] rounded-full ${
                  currentIndex == 2 ? "bg-white text-blue-900" : ""
                }`}
              >
                3
              </h1>
              <div className="flex flex-col">
                <p>Step 3</p>
                <p className="font-bold">Add-Ons</p>
              </div>
            </div>
            <div className="flex flex-row items-center mb-4">
              <h1
                className={` px-3 py-1 m-3 border-slate-100 border-[1px] rounded-full ${
                  currentIndex == 3 ? "bg-white text-blue-900" : ""
                }`}
              >
                4
              </h1>
              <div className="flex flex-col">
                <p>Step 4</p>
                <p className="font-bold">Summary</p>
              </div>
            </div>
          </div>
        </div>
        <FormProvider {...useFormMethods}>
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-[500px] h-full flex flex-col justify-between "
            >
              {currentIndex === 0 && (
                <>
                  <Step1 />
                </>
              )}
              {currentIndex === 1 && (
                <>
                  <Step2 />
                </>
              )}
              {currentIndex === 2 && (
                <>
                  <Step3 />
                </>
              )}
              {currentIndex === 3 && (
                <>
                  <Step4 goToSection={goToSection} />
                </>
              )}
              {currentIndex === 4 && (
                <>
                  <Step5 />
                </>
              )}
              <div className="flex flex-row justify-between">
                <div>
                  {currentIndex > 0 && currentIndex < 4 && (
                    <div
                      className="px-8 py-2 text-gray-400 text-xl hover:text-gray-600"
                      onClick={goBackwards}
                    >
                      Go Back
                    </div>
                  )}
                </div>
                <div>
                  {currentIndex < 3 && (
                    <div
                      className="bg-sky-900 px-8 py-2 text-white text-xl rounded-xl cursor-pointer hover:bg-sky-700 transition-all duration-200"
                      onClick={incrementStep}
                    >
                      Next Step
                    </div>
                  )}
                  {currentIndex == 3 && (
                    <button
                      className="bg-indigo-600 px-8 py-2 text-white text-xl rounded-xl cursor-pointer hover:bg-indigo-400 transition-all duration-200"
                      type="submit"
                    >
                      Confirm
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </FormProvider>
      </div>
    </main>
  );
}

export default App;
