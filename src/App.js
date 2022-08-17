import bgCardFront from "./assets/images/bg-card-front.png";
import bgCardBack from "./assets/images/bg-card-back.png";
import bgMainDesktop from "./assets/images/bg-main-desktop.png";
import bgMainMobile from "./assets/images/bg-main-mobile.png";
import cardLogo from "./assets/images/card-logo.svg";
import iconComplete from "./assets/images/icon-complete.svg";

import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="App w-full">
      <div className="flex flex-wrap justify-around items-center w-full">
        <div id="container" className="w-[95%] h-[350px] border-2 relative">
          <div
            id="front-card"
            className="w-80 top-2 absolute right-0 rounded-md"
          >
            <div id="img" className="absolute z-1 z-0">
              <img src={bgCardBack} className="w-96 h-60 rounded-md" />
            </div>
            <p
              id="numbers"
              className="absolute top-28 right-10 z-1 text-slate-50"
            >
              000
            </p>
          </div>
          <div id="front-card" className="w-80 absolute left-20 top-36">
            <div id="img" className="absolute z-1 z-0">
              <img src={bgCardFront} className="w-96 h-60" />
            </div>
            <p
              id="numbers"
              className="absolute top-[130px] left-[20px] z-1 text-slate-50"
            >
              000 000 000 000
            </p>
            <p id="name" className="absolute top-[200px] left-[20px] z-1">
              John doe
            </p>
            <p id="until" className="absolute top-[200px] right-[20px] z-1">
              00 / 00
            </p>

            <div
              id="icon"
              className="absolute top-[25px] left-[20px] z-1 w-12 h-12"
            >
              <img src={cardLogo} />
            </div>
          </div>
        </div>
        <div id="form" className="border-2 w-[90%] h-[500px] mt-14">
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="uppercase">cardholder name</p>
            <input
              {...register("firstName")}
              className="border-2 border-slate-400 border-solid w-full h-10 p-2 rounded-m "
              placeholder="e.g Jane Appleseed"
            />
            <p>Card number</p>
            <input {...register("number")} />
            <p>exp. Date (mm/yy)</p>
            <input {...register("month")} />
            <input {...register("year")} />
            <p>cvc</p>
            <input {...register("cvc")} />

            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
