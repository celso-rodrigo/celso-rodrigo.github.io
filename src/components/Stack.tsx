interface IProps {
  logo: string;
  title: string;
  animationDuration: number
}

function Stack({logo, title, animationDuration}: IProps) {
  return (
    <div
      className="flex flex-col items-center justify-between p-2 font-tech-mono sm:h-36 duration-500 hover:scale-110"
      data-aos="zoom-in"
      data-aos-duration={animationDuration}
    >
      <img src={logo} alt={`${title} logo.`} className="h-14 sm:h-20"/>
      <h2 className="font-bold text-md text-white sm:text-lg">{title}</h2>
    </div>
  )
}

export default Stack