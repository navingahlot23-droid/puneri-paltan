export default function Sectiontitle({ name, aos, className, titleClassName }) {
    return (
        <div data-aos={aos} className={`py-[30px] md:pt-[50px] xl:pt-[110px] xl:pb-[60px] ${className}`} >
            <h1 className={`section-title m-0  tracking-[3px] bg-[#f40] relative px-[30px] py-5 -ml-6 xl:w-[550px] md:w-[430px] font-[Exo-SemiBold] text-[30px] text-white uppercase text-right transform skew-x-[-15deg] max-[767px]:text-[20px] max-[767px]:p-5 max-[767px]:text-center max-[767px]:w-[250px] before:content-[''] before:bg-[#f40] before:absolute  before:-right-5  before:top-0 before:w-2.5 before:h-full after:content-[''] after:bg-[#f40] after:absolute after:-right-9 after:top-0 after:w-[7px] after:h-full ${titleClassName}`}>
                {name}
            </h1>
        </div>
    );
}
