interface IProps {
  title: string;
}

function SectionTitle({title}: IProps) {
  return (
    <div
      className="flex justify-center gap-8 items-center p-12 w-full shadow-lgUp"
    >
      <div className="hidden h-0.5 w-1/4 rounded-lg bg-black sm:block" />
      <h1 className="section-title">
        {title}
      </h1>
      <div className="hidden h-0.5 w-1/4 rounded-lg bg-black sm:block" />
    </div>
  )
}

export default SectionTitle