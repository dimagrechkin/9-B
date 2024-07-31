const Footer: React.FC = () => {
  const footerLinks = [{ title: 'Resources', items: ['Resources', 'Blog', 'FAQ', 'Support'] }]

  return (
    <footer className="pt-16 pb-5 mt-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow py-1 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-2 p-2.5 text-3xl font-bold tracking-tighter text-primaryMain whitespace-nowrap max-md:flex-wrap">
              {/* <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/18ed2a3440826d519fec110f3e9da23f037fd8436e0a56c3892dd32db22a2241?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60"
                alt=""
                className="shrink-0 my-auto w-7 aspect-square"
              /> */}
              <div>Rugrats</div>
            </div>
            <p className="mt-6 text-sm leading-5 text-primaryMain text-opacity-70 max-md:max-w-full">
              Wrangle project success with our advanced management tools, designed to boost team collaboration and
              streamline workflows faster than a Rugrats playtime.
            </p>
            <p className="mt-5 text-xs leading-5 text-primaryMain text-opacity-50 max-md:max-w-full">
              © 2024. Rugrats. All rights reserved
            </p>
          </div>
        </div>
        {footerLinks.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col text-sm font-medium leading-5 text-primaryMain whitespace-nowrap">
                    {column.items.map((item, itemIndex) => (
                      <div key={itemIndex} className={`px-4 py-1.5 ${itemIndex > 0 ? 'mt-2.5' : ''} text-ellipsis`}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
            <h3 className="text-lg font-medium leading-7 text-primaryMain max-md:max-w-full">
              Subscribe to our Newsletter
            </h3>
            <p className="mt-5 text-sm leading-5 text-primaryMain text-opacity-70 max-md:max-w-full">
              Subscribe to receive the latest updates, news, and exclusive tips right to your inbox.
            </p>
            <form className="flex gap-2 justify-between pl-4 mt-5 text-sm leading-5 text-primaryMain border border-solid backdrop-blur-[50px] bg-white bg-opacity-10 border-black border-opacity-10 rounded-[99px] max-md:flex-wrap max-md:max-w-full">
              <label htmlFor="emailInput" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="emailInput"
                placeholder="Email address"
                className="my-auto bg-transparent border-none focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 font-medium whitespace-nowrap border border-solid backdrop-blur-[50px] bg-[linear-gradient(15deg,#423DF5_17.16%,#5D5AF6_75%)] border-white border-opacity-10 rounded-[99px]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
