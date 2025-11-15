export default function Button({text}) {
    return(
        <>
            <button className="btn-primary bg-[linear-gradient(to_right,#df3100_0%,#ff7500_25%,white_50%,#ff7500_75%,#df3100_100%)] bg-size-[300%_100%] transform skew-x-[-15deg] tracking-[3px] px-[30px] py-2 w-[280px] rounded-none text-[20px] text-white font-[Exo-SemiBold] relative z-999 hover:bg-position-[100%_0] transition-all duration-400 ease-in-out focus:outline-0 cursor-pointer leading-[1.42857143]">{text}</button>
        </>
    )
}