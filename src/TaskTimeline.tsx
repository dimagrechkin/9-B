const TaskTimeline: React.FC = () => {
  return (
    <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow w-full bg-black rounded-2xl border border-black border-solid shadow-[0px_30px_60px_rgba(0,0,0,0.41)] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between p-2.5 w-full bg-neutral-900 max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col justify-center px-1.5 py-2.5">
            <div className="shrink-0 bg-amber-300 rounded-full h-[7px]" />
          </div>
          <div className="flex gap-5 justify-between self-start px-2 py-0.5 bg-zinc-800 rounded-[31px]">
            <div className="flex gap-2 my-auto text-xs font-medium text-center whitespace-nowrap text-white text-opacity-70">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d4ff470c788e4e654c94a885f9a8ddde560e3940309b60e8392aa6b1cdf7f14?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60"
                alt=""
                className="shrink-0 aspect-square w-[15px]"
              />
              <div>Search</div>
            </div>
            <div className="flex justify-center items-center p-0.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fd1b088169910643491d5261e9fdd781fec62236830452607b3c4b09b1bba9e?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60"
                alt=""
                className="aspect-square w-[15px]"
              />
            </div>
          </div>
          <div className="flex gap-1.5 justify-between my-auto">
            <div className="flex justify-center items-center p-0.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/51cc1a2543146eac398ff412602169d257a56d3e8ceec69a7fd735991e22aa27?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60"
                alt=""
                className="aspect-square w-[15px]"
              />
            </div>
            <div className="flex justify-center items-center p-0.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4683cc1d05adb684b10a3abfa233105852a564eccf5192a82ab3c94acd40ae4?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60"
                alt=""
                className="aspect-square w-[15px]"
              />
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/55f4a30a77fea9bc95c14f11b0455426559103c05c2580c212bf838a6276477a?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60"
          alt="Task timeline visualization"
          className="w-full border border-solid bg-blend-normal border-white border-opacity-10 max-md:max-w-full"
        />
        <div className="flex max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col items-center pb-16 bg-neutral-900 max-md:hidden">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/851282c132874a749d15f4e25691d5987e1c3aff70b59aae9068d30dd2dc3246?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60"
              alt=""
              className="aspect-[0.11] w-[50px]"
            />
          </div>
          <div className="flex flex-col flex-1 py-3 bg-zinc-900">
            <div className="flex flex-col px-3 text-xs text-white font-[590]">
              <div className="flex gap-0.5 text-xs font-medium whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/243082ddd94d14b83888a7f4142ff05557fc4654b35335190b31f9c7f54e02ae?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60"
                  alt=""
                  className="shrink-0 my-auto aspect-square w-[15px]"
                />
                <div>Projects</div>
              </div>
              <div className="flex justify-between px-2 py-0.5 mt-2.5 tracking-tight rounded-lg bg-zinc-800">
                <div className="flex flex-1 gap-1.5 p-1.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/408730c04c6131c902fddaee2c9ca2900fa9fa5987299cb166582ae96ae2e215?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60"
                    alt=""
                    className="shrink-0 aspect-square w-[15px]"
                  />
                  <div className="flex-1">Design and Prototype</div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8ef9a5aad34df4fc7c0006d77f6cd4cbd75b779d4f173e087bbffb7e71717eb?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60"
                  alt=""
                  className="shrink-0 my-auto w-3 aspect-[0.93]"
                />
              </div>
              <div className="flex justify-between px-2 py-0.5 mt-2.5 tracking-tight whitespace-nowrap rounded-lg bg-zinc-800">
                <div className="flex flex-1 gap-1.5 p-1.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1461ea05bcee8299e051248d7f25d3052749196e6aeff0ff6d9876f4f97b4084?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60"
                    alt=""
                    className="shrink-0 aspect-square w-[15px]"
                  />
                  <div className="flex-1">Documentation</div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9f2cbb14ae8f93d9ee8c78d6e71e433a3566856ec13bcdf29e31f0393115a80?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60"
                  alt=""
                  className="shrink-0 my-auto w-3 aspect-[0.93]"
                />
              </div>
              <div className="flex justify-between px-2 py-0.5 mt-2.5 tracking-tight rounded-lg bg-zinc-800">
                <div className="flex flex-1 gap-1.5 p-1.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c57c7255a437f8f22ede79b1684a9202587587adc869028f72f04980e206cd5?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60"
                    alt=""
                    className="shrink-0 aspect-square w-[15px]"
                  />
                  <div className="flex-1">Prepare Courses </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8799bca840436d1bc44076796e79d48c9170a13ba593a40de618ccf0ab2abb84?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60"
                  alt=""
                  className="shrink-0 my-auto w-3 aspect-square"
                />
              </div>
              <div className="flex justify-between px-2 py-0.5 mt-2.5 tracking-tight rounded-lg bg-zinc-800">
                <div className="flex flex-1 gap-1.5 px-1.5 py-2">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/df945cec04be5dfc1ebef97c9cdd85fffd1968474d86a3d6534865f34b623be1?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60"
                    alt=""
                    className="shrink-0 aspect-[1.08] w-[15px]"
                  />
                  <div className="flex-1">Coding and Development</div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/64dfaa20964fdbe1756d34707b0592848fa731bfe4aed61197baa5836dc31015?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60"
                  alt=""
                  className="shrink-0 my-auto w-3 aspect-square"
                />
              </div>
              <button className="flex gap-1.5 justify-center px-3 py-1.5 mt-2.5 text-xs font-medium text-center rounded-md max-md:px-5">
                Add Project
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/55d6d265419b6a893b49dc0d3134094fc8f95b0b976a1b6dcace6bc8ef984f20?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60"
                  alt=""
                  className="shrink-0 my-auto w-2.5 aspect-square"
                />
              </button>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/26cd2ddf3c52230a332a8d78eab94339d8b1497ce8f2c8adf7367a73135e1603?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60"
              alt="Project timeline"
              className="self-center mt-3 bg-blend-normal aspect-[100] border-black border-opacity-10 w-[200px]"
            />
            <div className="flex flex-col px-3 mt-3">
              <h2 className="text-xs font-medium text-white">Team Members</h2>
              {[
                {
                  name: 'Maxime Levesque',
                  status: 'Online',
                  img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e59cdbed0e6f960af9c5fb6664ce13fd543b0d4b50e032e578f01465d9b21279?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
                },
                {
                  name: 'Farah Larah',
                  status: 'Online',
                  img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a149420bdac9be6a9622d9b677114c3379457c01e8baf34983b29b1930c8fd9b?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
                },
                {
                  name: 'Anya Maisonneuve',
                  status: 'Online',
                  img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b2e2465a8c344e5d37629f7ecae7190d131dc055b733233e06b3a4b1488bc648?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
                },
                {
                  name: 'Sam Pagyan',
                  status: 'Offline',
                  img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1285f048aa7b36d4cca5451506e4669a49b333e4bfa8343955062ae38b0b6f1d?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
                },
                {
                  name: 'William Chung',
                  status: 'Online',
                  img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4462f0ed5b492e446b5ab8960b4cfa5e0ce91f0e2aa460e7b94168dbfb676845?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="flex justify-between px-2 py-0.5 mt-3 tracking-tight rounded-lg bg-zinc-800"
                >
                  <div className="flex flex-1 gap-1.5 py-px pl-1.5">
                    <img
                      loading="lazy"
                      src={member.img}
                      alt={`${member.name}'s avatar`}
                      className="shrink-0 my-auto aspect-square w-[15px]"
                    />
                    <div className="flex flex-col flex-1">
                      <div className="text-xs text-white font-[590]">{member.name}</div>
                      <div className="text-xs whitespace-nowrap text-white text-opacity-70">{member.status}</div>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/51e95d15bbef505cbfa03d9cb9d66435dc15ab0763b79e10fc1295f7d265e81a?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60"
                    alt=""
                    className="shrink-0 my-auto w-3 aspect-[0.93]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskTimeline
