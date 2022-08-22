import { useState } from "react";

import bgCardFront from "./assets/images/bg-card-front.png";
import bgCardBack from "./assets/images/bg-card-back.png";
import bgMainDesktop from "./assets/images/bg-main-desktop.png";
import bgMainMobile from "./assets/images/bg-main-mobile.png";
import cardLogo from "./assets/images/card-logo.svg";
import iconComplete from "./assets/images/icon-complete.svg";

import { useForm } from "react-hook-form";

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("000 000 000 000");
  const [cvc, setCvc] = useState("000");
  const [expirationMonth, setExpirationMonth] = useState("00");
  const [expirationYear, setExpirationYear] = useState("00");
  const [modal, setModal] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="App" style={{ height: "100vh", width: "100vw" }}>
      <div className="flex flex-wrap mobile:flex-col desktop:flex-row justify-around items-center w-full">
        <div
          id="container"
          className="w-full h-60 relative desktop:h-11/12 desktop:w-1/4"
          style={{ backgroundImage: `url(${bgMainDesktop})` }}
        >
          <div
            id="back-card"
            className="w-80 top-2 absolute left-16 rounded-md"
          >
            <div id="img" className="absolute z-1 z-0">
              <img src={bgCardBack} className="w-72 h-40 rounded-md " />
            </div>
            <p id="cvc" className="absolute top-16 right-16 z-1 text-slate-50">
              {cvc}
            </p>
          </div>
          <div id="front-card" className="w-80 absolute left-8 top-28">
            <div id="img" className="absolute z-1 z-0">
              <img src={bgCardFront} className="w-72 h-40 rounded-md" />
            </div>
            <p
              id="numbers"
              className="absolute top-20 left-4 z-1 text-slate-50"
            >
              {number}
            </p>
            <p id="name" className="absolute top-32 left-5 z-1">
              {name}
            </p>
            <p id="until" className="absolute top-32 right-12 z-1">
              {expirationMonth} / {expirationYear}
            </p>

            <div id="icon" className="absolute top-[25px] left-4 z-1 w-12 h-12">
              <img src={cardLogo} />
            </div>
          </div>
        </div>
        {modal && (
          <div className="absolute w-full h-full top-1/3 pt-2.5">
            <div
              className=" z-99 w-full h-[500px] flex flex-col items-center "
              style={{ backgroundColor: "white" }}
            >
              <img src={iconComplete} className="w-24 pt-12" />
              <h1 className="text-4xl pt-10 tracking-wide">THANK YOU!</h1>
              <h2 className="text-xl pt-5 tracking-wide">
                We added your card details
              </h2>
              <button
                className="bg-[#21092f] rounded-md w-8/12 h-8 m-8"
                style={{ color: "white" }}
                onClick={() => {
                  setModal(false);
                }}
              >
                Continue
              </button>
            </div>
          </div>
        )}
        <div id="form" className="w-11/12 h-full pt-14 z-1 desktop:w-3/4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="uppercase text-sm text-textVeryDarkPurple font-bold">
              cardholder name
            </p>
            <input
              type="text"
              {...register("fullName", { required: true })}
              className="border-2 border-borderGray border-solid w-full h-10 p-2 rounded-md active:border-borderPurple"
              placeholder="e.g Jane Appleseed"
              onChange={(e) => {
                setName(e.target.value);
              }}
              style={errors?.fullName ? { border: "3px solid red" } : null}
            />
            {errors.fullName && (
              <p className="text-errorRed"> Can't be blank</p>
            )}
            <p className="uppercase text-sm text-textVeryDarkPurple font-bold mt-4">
              Card number
            </p>
            <input
              {...register("number", { required: true })}
              placeholder="000 000 000 000"
              className="border-2 border-borderGray border-solid w-full h-10 p-2 rounded-md active:border-borderPurple "
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              style={errors?.number ? { border: "3px solid red" } : null}
            />
            {errors.number && (
              <p className="text-errorRed">Card number is required</p>
            )}

            <div className="flex flex-row w-full">
              <div className="w-1/2">
                <p className="uppercase text-sm text-textVeryDarkPurple font-bold mt-4">
                  EXP. DATE (MM/YY)
                </p>
                <input
                  type="number"
                  {...register("month", { required: true })}
                  placeholder="MM"
                  className="border-2 border-borderGray border-solid h-10 p-2 rounded-md w-2/6 active:border-borderPurple"
                  onChange={(e) => {
                    setExpirationMonth(e.target.value);
                  }}
                  style={errors?.month ? { border: "3px solid red" } : null}
                />
                <input
                  type="number"
                  {...register("year", { required: true })}
                  placeholder="YY"
                  className="border-2 border-borderGray border-solid h-10 p-2 rounded-md w-2/6 ml-2 active:border-borderPurple"
                  onChange={(e) => {
                    setExpirationYear(e.target.value);
                  }}
                  style={errors?.year ? { border: "3px solid red" } : null}
                />
                {errors.month && (
                  <p className="text-errorRed"> Can't be blank</p>
                )}
                {errors.year && (
                  <p className="text-errorRed"> Can't be blank</p>
                )}
              </div>
              <div className="w-1/2">
                <p className="uppercase text-sm text-textVeryDarkPurple font-bold mt-4">
                  CVC
                </p>
                <input
                  type="number"
                  {...register("cvc", { required: true })}
                  placeholder="e.g. 123"
                  className="border-2 border-borderGray border-solid h-10 p-2 rounded-md w-11/12 active:border-borderPurple"
                  onChange={(e) => {
                    setCvc(e.target.value);
                  }}
                  style={errors?.cvc ? { border: "3px solid red" } : null}
                />
                {errors.cvc && <p className="text-errorRed"> Can't be blank</p>}
              </div>
            </div>
            <div className="flex justify-center items-center">
              <input
                type="submit"
                value="Confirm"
                className="bg-[#21092f] rounded-md w-8/12 h-8 m-8"
                style={{ color: "white" }}
                onClick={() => setModal(true)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
