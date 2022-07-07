import { Google, SearchIllustration } from 'images';
import type { NextPage } from 'next';
import Head from 'next/head';
import { AiOutlineEyeInvisible } from 'react-icons/ai';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SME Better</title>
      </Head>
      <div>
        <div className="flex h-full w-full flex-col lg:grid lg:min-h-screen lg:grid-cols-[40%_60%]">
          <div className="flex min-h-screen w-full flex-col justify-center bg-primary text-white">
            <div className="mx-auto w-full px-5 sm:max-w-[23.750rem] sm:px-0">
              <h1 className="mt-[3.375rem]">SME Better</h1>
              <p className="mt-[3.625rem] text-[1.2rem]">Log into your Business Manager</p>
              <form className="mt-10 flex flex-col gap-8" onSubmit={(evt) => evt.preventDefault()}>
                <fieldset className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-white">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="someone@email.com"
                    className="h-[2.7rem] w-full rounded-[4px] py-[1rem] px-[1rem] text-black outline-none transition-all focus:ring focus:ring-[#66a3fa]"
                  />
                </fieldset>
                <fieldset className="flex flex-col gap-2">
                  <label htmlFor="password" className="text-white">
                    Email Password
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                      className="h-[2.7rem] w-full rounded-[4px] py-[1rem] px-[1rem] text-black outline-none transition-all focus:ring focus:ring-[#66a3fa]"
                    />
                    <AiOutlineEyeInvisible className="absolute right-4 h-5 w-5 text-black/50" />
                  </div>
                </fieldset>
                <fieldset>
                  <input
                    type="submit"
                    value="sign in"
                    className="h-[2.9rem] w-full cursor-pointer rounded-[4px] border border-white font-medium uppercase transition-all hover:bg-white hover:text-primary"
                  />
                </fieldset>
              </form>
              <div className="my-7 flex w-full flex-col items-center">
                <p className="mx-auto text-center">
                  <span className="opacity-50">Don’t have an account?</span>
                  <a href="#" className="pl-2 font-semibold text-white">
                    SIGN UP
                  </a>
                </p>
                <div className="my-6">
                  <a className="text-center" href="#">
                    Forgot password?
                  </a>
                </div>
                <div className="mt-3 mb-8 w-full">
                  <button className="flex h-[2.9rem] w-full cursor-pointer items-center justify-center gap-4 rounded-[4px] border bg-white text-center text-sm font-medium uppercase text-dark transition-all">
                    <Google className="h-[1.3rem] w-[1.3rem]" />
                    <span className="opacity-[0.96]">Log in with Google</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden h-full w-full flex-col items-center justify-center lg:flex">
            <div className="fixed space-y-[1.875rem]">
              <p className="text-[1.25rem] text-primary">Organize your customer information</p>
              <div className="flex flex-col items-center">
                <SearchIllustration className="h-[21.500rem] w-[26.250rem]" />
                <div className="mx-auto my-6 flex gap-3 text-center">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <div className="h-2 w-2 rounded-full bg-[#79A6F6] bg-opacity-50"></div>
                  <div className="h-2 w-2 rounded-full bg-[#79A6F6] bg-opacity-50"></div>
                  <div className="h-2 w-2 rounded-full bg-[#79A6F6] bg-opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
