import { useState } from "react";

import bgCardFront from "./assets/images/bg-card-front.png";
import bgCardBack from "./assets/images/bg-card-back.png";
import cardLogo from "./assets/images/card-logo.svg";
import iconComplete from "./assets/images/icon-complete.svg";

import { useForm } from "react-hook-form";

function App() {
  const [name, setName] = useState("Jane Appleseed");
  const [number, setNumber] = useState("000 000 000 000");
  const [cvc, setCvc] = useState("000");
  const [expirationMonth, setExpirationMonth] = useState("00");
  const [expirationYear, setExpirationYear] = useState("00");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const onSubmit = (data, e) => console.log(data, e)
  const onError = (errors, e) => console.log(errors, e);

  function injectSpaces(str) {
    let groupsOf4 = [];
  
    for (let start = 0; start < str.length; start += 4) {
      let group = str.slice(start, start + 4);
      groupsOf4.push(group);
    }
  
    return groupsOf4.join(" ");
  }
  return (
    <div className="App" style={{ height: "100vh", width: "100vw" }}>
      <div className="flex flex-wrap mobile:flex-col xl:flex-row xl:h-full w-full flex-wrap">
        <div
          id="container"
          className="h-60 w-full xl:h-11/12 xl:w-1/4  xl:h-full bg-cover bg-no-repeat flex justify-center items-center bg-mobile-bg sm:bg-desktop-bg "
        >
          <div className="relative h-[500px] w-[500px] m-auto">
          <div
            id="back-card"
            className="w-80 top-4 absolute left-20 rounded-md xl:top-52"
          >
            <div id="img" className="absolute z-1 z-0">
              <img src={bgCardBack} className="rounded-md" alt="card background" />
            </div>
            <p id="cvc" className="absolute top-[4.7rem] right-10 z-1 text-white">
              {cvc}
            </p>
          </div>
          <div id="front-card" className="w-80 absolute left-8 top-28 m-auto xl:top-0 xl:left-10">
            <div id="img" className="absolute z-1 z-0">
              <img src={bgCardFront} className="rounded-md" alt="card background" />
            </div>
            <p
              id="numbers"
              className="absolute top-20 left-4 z-1 text-white text-xl"
            >
              {injectSpaces(number)}
            </p>
            <p id="name" className="absolute top-32 left-5 z-1 text-white">
              {name}
            </p>
            <p id="until" className="absolute top-32 right-12 z-1 text-white">
              {expirationMonth} / {expirationYear}
            </p>

            <div id="icon" className="absolute top-[25px] left-4 z-1 w-12 h-12">
              <img src={cardLogo} alt="card logo" />
            </div>
          </div>
          </div>
          
         
        </div>
        {isSubmitSuccessful && (
          <div className="w-11/12 h-full pt-14 xl:py-40 z-1 xl:w-2/4">
            <div
              className=" w-full h-7/12 mt-7/12 flex flex-col justify-center items-center m-auto t-[50%] bg-white"
            >
              <img src={iconComplete} className="w-24 pt-12" alt="success icon" />
              <h1 className="text-4xl pt-10 tracking-wide">THANK YOU!</h1>
              <h2 className="text-xl pt-5 tracking-wide">
                We added your card details
              </h2>
              <button
                className="bg-[#21092f] rounded-md w-8/12 h-8 m-8"
                style={{ color: "white" }}
                onClick={() => {reset()}}
              >
                Continue
              </button>
            </div>
          </div>
        )}
        {!isSubmitSuccessful && (
 <div id="form" className="w-11/12 h-full pt-20 z-1 xl:w-3/4 flex justify-center m-auto xl:items-center">
 <form onSubmit={handleSubmit(onSubmit, onError)}>
   <p className="uppercase text-sm text-very-dark-violet font-bold">
     cardholder name
   </p>
   <input
     type="text"
     {...register("fullName", { required: {value: true, message: 'Cant be blank'} })}
     className="border-2 border-borderGray border-solid w-full h-10 p-2 rounded-md active:border-borderPurple"
     placeholder="e.g Jane Appleseed"
     onChange={(e) => {
       setName(e.target.value);
     }}
     style={errors?.fullName ? { border: "3px solid red" } : null}
   />
   {errors.fullName && (
     <p className="text-red"> Can't be blank</p>
   )}
   <p className="uppercase text-sm text-very-dark-violet font-bold mt-4">
     Card number
   </p>
   <input type="text" maxLength="16"
     {...register("number", { required: {value: true, message: 'Cant be blank'},   minLength: {
       value: 16,
       message: "min length is 12"
     }, pattern: {
      value: /^[0-9]*$/,
      message: 'Wrong format, only numbers' // JS only: <p>error message</p> TS only support string
    }
    })}
     placeholder="000 000 000 000"
     className="border-2 border-borderGray border-solid w-full h-10 p-2 rounded-md active:border-active-gradient "
     onChange={(e) => {
       setNumber(e.target.value);
     }}
     style={errors?.number ? { border: "3px solid red" } : null}
   />
   {errors.number && (
     <p className="text-red">{errors.number.message}</p>
   )}

   <div className="flex flex-row w-full">
     <div className="w-1/2">
       <p className="uppercase text-sm text-very-dark-violet font-bold mt-4">
         EXP. DATE (MM/YY)
       </p>
       <input
         type="number" maxLength="2"
         {...register("month", { required: {value: true, message: 'Cant be blank'},  minLength: {
           value: 2,
           message: "min length is 2"
         }})}
         placeholder="MM"
         className="border-2 border-borderGray border-solid h-10 p-2 rounded-md w-20 active:border-active-gradient"
         onChange={(e) => {
           setExpirationMonth(e.target.value);
         }}
         style={errors?.month ? { border: "3px solid red" } : null}
       />
       <input
         type="number" maxLength="2"
         {...register("year", { required: {value: true, message: 'Cant be blank'}, minLength: {
           value: 2,
           message: "min length is 2"
         }})}
         placeholder="YY"
         className="border-2 border-borderGray border-solid h-10 p-2 ml-2 rounded-md w-20 active:border-active-gradient"
         onChange={(e) => {
           setExpirationYear(e.target.value);
         }}
         style={errors?.year ? { border: "3px solid red" } : null}
       />
       {errors.month && (
         <p className="text-red">{errors.month.message}</p>
       )}
       {errors.year && (
         <p className="text-red">{errors.year.message}</p>
       )}
     </div>
     <div className="w-1/2">
       <p className="uppercase text-sm text-very-dark-violet font-bold mt-4">
         CVC
       </p>
       <input
         type="number"
         maxLength="3"
         {...register("cvc", { required: {value: true, message: 'Cant be blank'}, minLength: {
          value: 3,
          message: "min length is 3"
        }})}
         placeholder="e.g. 123"
         className="border-2 border-borderGray border-solid h-10 p-2 rounded-md w-5/6 active:border-active-gradient"
         onChange={(e) => {
           setCvc(e.target.value);
         }}
         style={errors?.cvc ? { border: "3px solid red" } : null}
       />
       {errors.cvc && <p className="text-red">{errors.cvc.message}</p>}
     </div>
   </div>
   <div className="flex justify-center items-center">
     <input
       type="submit"
       value="Confirm"
       className="bg-[#21092f] rounded-md w-8/12 h-8 m-8"
       style={{ color: "white" }}
       onClick={handleSubmit(onSubmit)}
     />
   </div>
 </form>
</div>
        )}
       
      </div>
      <div className='mt-8 text-sm text-center'>
        Challenge by{' '}
        <a
          className='text-[#610595]'
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by Daniel Brobäck
        <a className='text-[#6348FE]' href='https://www.danielbroback.se'>
          Q.A.
        </a>
        .
      </div>
    </div>
  );
}

export default App;
