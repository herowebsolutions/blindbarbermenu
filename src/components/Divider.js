/* This example requires Tailwind CSS v2.0+ */
export default function Divider() {
    return (
      <div className="relative">
        <div className="absolute justify-end right-0 inset-0 flex items-center" aria-hidden="true">
          <div className=" w-3/4 border-t-2 border-gray-400 sm:w-3/6 md:w-3/4" />
        </div>
        <div className="relative flex justify-start">
          <span className="pr-3 bg-whitetext-xl font-semibold uppercase">House Specials</span>
        </div>
      </div>
    )
  }
  