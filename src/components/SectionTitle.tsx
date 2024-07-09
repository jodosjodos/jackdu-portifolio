

function SectionTitle({title}:{title:string}) {
  return (
    <div className="flex gap-[4px] items-center">
      <h2 className="uppercase text-[18px] text-[#717171]">{title}</h2>
    <div className="w-[120px]  bg-primary h-[1px]"></div>
  </div>
  )
}

export default SectionTitle