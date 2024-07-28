const Calendar: React.FC = () => {
  return (
    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center p-5 w-full bg-zinc-800 rounded-[30px] max-md:mt-5 max-md:max-w-full">
        <div className="flex flex-col pt-5 w-full rounded-3xl bg-zinc-900">
          <div className="flex gap-5 justify-between mx-5 text-white max-md:mx-2.5">
            <h2 className="my-auto text-2xl font-semibold tracking-tighter">MAY 2024</h2>
            <div className="flex gap-3 justify-center px-4 py-2 text-sm font-medium leading-5 bg-zinc-800 rounded-[99px]">
              <div>All Projects</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/438f40ffb34970df824ba927d558d2093ffc03b435b815e3a300c5a9366c25dd?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60"
                alt=""
                className="shrink-0 my-auto w-4 aspect-square"
              />
            </div>
          </div>
          <div className="flex gap-5 mx-5 mt-5 max-md:mx-2.5">
            <div className="flex flex-col self-start text-sm leading-5 text-white whitespace-nowrap">
              <div>11</div>
              <div className="mt-6">12</div>
              <div className="mt-6">13</div>
            </div>
            <div className="flex flex-col flex-1 pt-3.5 pb-10 rounded-[30px]">
              <div className="shrink-0 h-5 bg-indigo-700 rounded-[30px]" />
              <div className="shrink-0 self-end mt-5 h-5 bg-cyan-600 rounded-[30px] w-[161px]" />
              <div className="shrink-0 mt-5 h-5 bg-red-400 rounded-[30px]" />
            </div>
          </div>
          <div className="flex z-10 flex-col mb-0 max-md:mb-2.5">
            <h3 className="text-2xl font-semibold tracking-tighter text-white">Stay on Schedule</h3>
            <p className="mt-2 text-base leading-6 text-ellipsis text-white text-opacity-70">
              Effortlessly synchronize with multiple calendar platforms to ensure every deadline and meeting is
              perfectly aligned with your team's schedule
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
