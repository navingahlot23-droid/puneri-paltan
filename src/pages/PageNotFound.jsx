
export default function PageNotFound() {
    return (
      <>
        
        <main className="flex h-screen items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-primary-500">404</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              Page not found
            </h1>
            <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/"
                className="btn-primary
          bg-[linear-gradient(to_right,#df3100_0%,#ff7500_25%,white_50%,#ff7500_75%,#df3100_100%)]
          bg-size-[300%_100%]
          transform skew-x-[-15deg]
          tracking-[3px]
          md:px-[30px] py-[5px] md:py-2
          w-[280px]
          rounded-none
          text-[15px] md:text-[20px]
          text-white
          font-[Exo-SemiBold]
          relative z-999
          hover:bg-position-[100%_0]
          transition-all duration-400 ease-in-out
          focus:outline-0
          cursor-pointer
          md:leading-[1.42857143]
          leading-normal"
              >
                Go back home
              </a>
            </div>
          </div>
        </main>
      </>
    )
  }
  