export default function TimelineIcons(): JSX.Element {
  return (
    <div className="w-full px-[20px]">
      <h3 className="mb-6 ml-3 text-2xl font-bold">Latest News</h3>

      <ol className="border-l-2 border-info-100">
        {/* <!--First item--> */}
        <li>
          <div className="flex-start md:flex">
            <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700">
              <div className="bg-primary w-[16px] mt-[-20px] ml-[-px] h-[16px] rounded-full"></div>
            </div>
            <div className="mb-10 ml-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
              <div className="mb-4 flex justify-between">
                <a
                  href="#!"
                  className="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                >
                  New Web Design
                </a>
                <a
                  href="#!"
                  className="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                >
                  04 / 02 / 2022
                </a>
              </div>
              <p className="mb-6 text-neutral-700 dark:text-neutral-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque diam non nisi semper, et elementum lorem ornare.
                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                sodales vehicula.
              </p>
             
            </div>
          </div>
        </li>
        
   
      </ol>
    </div>
  );
}