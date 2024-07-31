const Analytics: React.FC = () => {
  return (
    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow p-2.5 w-full bg-secondaryMain rounded-[30px] max-md:mt-5 max-md:max-w-full">
        <div className="flex flex-col pt-2.5 pl-2.5 max-md:max-w-full">
          <div className="flex justify-between max-md:flex-wrap">
            <h2 className="flex-1 my-auto text-2xl font-semibold tracking-tighter text-primaryMain">
              Gain Insightful Analytics
            </h2>
            <div className="flex gap-2 px-3 py-1 text-base leading-6 whitespace-nowrap bg-thirdMain rounded-[50px] text-primaryMain text-opacity-70">
              <div className="shrink-0 rounded-full h-[30px] w-[31px]" />
              <div className="my-auto">86%</div>
            </div>
          </div>
          <p className="mt-2.5 text-base leading-6 max-w-[522px] text-primaryMain text-opacity-70 max-md:max-w-full">
            Access detailed reports to measure performance and optimize productivity
          </p>
        </div>
        <div className="flex flex-col px-2.5 pt-2.5 mt-8 text-sm font-medium leading-5 text-center whitespace-nowrap rounded-3xl bg-thirdMain text-primaryMain text-opacity-70 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c787cc90ae7327bbb403de47be7390a01b09df2a80e1bab2d969e72b46ab246?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60"
            alt="Analytics chart"
            className="w-full rounded-xl aspect-[3.13]"
          />
          <div className="flex gap-5 justify-between items-start px-2.5 pt-2.5 pb-1 mt-2.5">
            {['Mon', 'Tue', 'Wed', 'Thi', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <div key={index}>{day}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics
