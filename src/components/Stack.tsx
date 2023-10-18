interface IProps {
  logo: string;
  title: string;
}

function Stack({logo, title}: IProps) {
  return (
    <div
      className="flex flex-col items-center justify-between p-2 sm:h-36"
    >
      <img src={logo} alt={`${title} logo.`} className="h-14 sm:h-20"/>
      <h2 className="font-bold text-md text-white sm:text-lg">{title}</h2>
    </div>
  )
}

export default Stack