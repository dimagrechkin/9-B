import EfficiencyCard from './EfficiencyCard'

const Efficiency: React.FC = () => {
  const efficiencyItems = [
    {
      title: 'Efficiently Manage Every Task',
      description:
        'Organize, prioritize, and track task progress with precision tools, ensuring clarity and focus for all team members',
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/cefa9c464a78f7814b5fe15288b109ae4a6e4447f1e4dc1225d249334b7ca4e6?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
    },
    {
      title: 'Stay on Schedule',
      description:
        "Effortlessly synchronize with multiple calendar platforms to ensure every deadline and meeting is perfectly aligned with your team's schedule",
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/438f40ffb34970df824ba927d558d2093ffc03b435b815e3a300c5a9366c25dd?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
    },
    {
      title: 'Gain Insightful Analytics',
      description: 'Access detailed reports to measure performance and optimize productivity',
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/4c787cc90ae7327bbb403de47be7390a01b09df2a80e1bab2d969e72b46ab246?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
    },
  ]

  return (
    <div className="max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        {efficiencyItems.map((item, index) => (
          <EfficiencyCard key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Efficiency
