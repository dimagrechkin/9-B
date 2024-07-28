interface FeatureCardProps {
  title: string
  description: string
  imageSrc: string
  isWide?: boolean
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, imageSrc, isWide = false }) => {
  const widthClass = isWide ? 'w-6/12' : 'w-[33%]'

  return (
    <div className={`flex flex-col ${isWide ? 'ml-5' : ''} ${widthClass} max-md:ml-0 max-md:w-full`}>
      <div className="flex flex-col grow p-5 w-full bg-zinc-900 rounded-[50px] max-md:mt-5 max-md:max-w-full">
        <img
          loading="lazy"
          src={imageSrc}
          alt={title}
          className={`w-full ${isWide ? 'aspect-[2.44]' : 'aspect-[1.56]'} rounded-[30px] ${
            isWide ? 'max-md:max-w-full' : ''
          }`}
        />
        <h3 className="mt-5 text-2xl font-semibold tracking-tighter text-white">{title}</h3>
        <p className="mt-2 text-base leading-6 text-white text-opacity-70">{description}</p>
      </div>
    </div>
  )
}

export default FeatureCard
