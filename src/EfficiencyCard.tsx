interface EfficiencyCardProps {
  title: string
  description: string
  imageSrc: string
}

const EfficiencyCard: React.FC<EfficiencyCardProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="grow pl-5 w-full bg-secondaryMain rounded-[30px] max-md:mt-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10">
              <h3 className="text-2xl font-semibold tracking-tighter text-primaryMain">{title}</h3>
              <p className="mt-2 text-base leading-6 text-primaryMain text-opacity-70">{description}</p>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center py-10 max-md:mt-5">
              <div className="flex flex-col py-3 pl-3 w-full rounded-2xl bg-thirdMain">
                <img
                  loading="lazy"
                  src={imageSrc}
                  alt={title}
                  className="self-center mt-3.5 rounded-3xl aspect-[1.1] w-[195px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EfficiencyCard
