import "./App.css"
import dayjs, { Dayjs } from "dayjs"

const ControlBar = ({ firstDayOfMonth }: { firstDayOfMonth: Dayjs }) => {
  return (
    <div className="flex w-full justify-between">
      <button
        type="button"
        disabled
        data-test="prev-button"
        className="tap-none text-primary disabled:cursor-not-allowed disabled:text-gray-400 pl-2"
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="text-inherit fill-current text-sm w-6 h-6"
        >
          <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"></path>
        </svg>
      </button>
      <p className="mx-4 mb-0 w-full text-center text-base font-bold leading-normal text-gray-600">
        {firstDayOfMonth.year()}年{firstDayOfMonth.month() + 1}月
      </p>
      <button
        type="button"
        data-test="next-button"
        className="tap-none text-primary disabled:cursor-not-allowed disabled:text-gray-400 pr-2"
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="text-inherit fill-current text-sm w-6 h-6"
        >
          <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"></path>
        </svg>
      </button>
    </div>
  )
}

const DayOfWeeks = () => {
  return (
    <div className="mb-2 mt-4 w-full">
      <div className="flex">
        <div className="grow px-2 text-base leading-normal text-center text-red-500">日</div>
        <div className="grow px-2 text-base leading-normal text-center text-black">月</div>
        <div className="grow px-2 text-base leading-normal text-center text-black">火</div>
        <div className="grow px-2 text-base leading-normal text-center text-black">水</div>
        <div className="grow px-2 text-base leading-normal text-center text-black">木</div>
        <div className="grow px-2 text-base leading-normal text-center text-black">金</div>
        <div className="grow px-2 text-base leading-normal text-center text-primary">土</div>
      </div>
    </div>
  )
}

const Cell = ({ day }: { day: number }) => {
  return (
    <button
      key={day}
      className="cursor-not-allowed text-gray-400 w-10 grow h-full flex flex-col items-center justify-between mb-1 px-2 py-2 text-center"
      disabled
    >
      {day}
      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
        {day > 18 ? (
          <circle className="text-primary stroke-current" cx="8" cy="8" r="7.5"></circle>
        ) : (
          <path className="text-gray fill-current" d="M12 7H4V9H12V7Z"></path>
        )}
      </svg>
    </button>
  )
}

const Days = () => {
  return (
    <div className="flex w-full flex-col text-base">
      <div className="flex w-full">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="invisible pointer-events-none w-10 grow h-full flex flex-col items-center justify-between mb-1 px-2 py-2 text-center"
          >
            0
          </div>
        ))}
        {[1, 2, 3].map((day) => (
          <Cell day={day} />
        ))}
      </div>
      <div className="flex w-full">
        {[4, 5, 6, 7, 8, 9, 10].map((day) => (
          <Cell day={day} />
        ))}
      </div>
      <div className="flex w-full">
        {[11, 12, 13, 14, 15, 16, 17].map((day) => (
          <Cell day={day} />
        ))}
      </div>
      <div className="flex w-full">
        {[18, 19, 20, 21, 22, 23, 24].map((day) => (
          <Cell day={day} />
        ))}
      </div>
      <div className="flex w-full">
        {[25, 26, 27, 28, 29, 30, 31].map((day) => (
          <Cell day={day} />
        ))}
      </div>
    </div>
  )
}

const TimeSelectors = () => {
  return (
    <div className="w-full flex-1 ml-5 mt-0">
      <div className="min-w-64">
        <div className="mt-2 w-full">
          <div className="flex">
            <p className="flex-1 text-xs text-black">開始時間</p>
            <div className="mx-1 w-5 h-5 text-gray fill-current"></div>
            <p className="flex-1 text-xs text-black">終了時間</p>
          </div>
          <div className="mt-1 flex items-center justify-center w-full">
            <label className="flex relative items-center bg-white border border-gray-200 flex-1">
              <select
                disabled
                className="absolute z-10 opacity-0 inset-0 h-full w-full cursor-pointer disabled:cursor-not-allowed appearance-none text-base"
              >
                <option value="">- - -</option>
              </select>
              <div className="w-full truncate bg-transparent rounded-none text-base relative py-2 text-gray-400">
                - - -
              </div>
              <i className="my-auto right-0 mr-2 absolute flex items-center inset-y-0 pointer-events-none">
                <svg
                  className="MuiSvgIcon-root h-5 w-5 text-gray fill-current"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                </svg>
              </i>
            </label>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mx-1 w-5 h-5 text-gray fill-current">
              <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"></path>
            </svg>
            <label className="flex relative items-center bg-white border border-gray-200 flex-1">
              <select
                disabled
                className="absolute z-10 opacity-0 inset-0 h-full w-full cursor-pointer disabled:cursor-not-allowed appearance-none text-base"
              >
                <option value="">- - -</option>
              </select>
              <div className="w-full truncate bg-transparent rounded-none text-base relative py-2 text-gray-400">
                - - -
              </div>
              <i className="my-auto right-0 mr-2 absolute flex items-center inset-y-0 pointer-events-none">
                <svg
                  className="MuiSvgIcon-root h-5 w-5 text-gray fill-current"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                </svg>
              </i>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

const Calendar = () => {
  const firstDayOfMonth = dayjs().startOf("month")

  return (
    <div className="w-full flex-1">
      <div className="px-0 max-h-116 rounded-lg border border-gray-200">
        <div className="py-4">
          <div className="flex w-full flex-col items-center px-4">
            <ControlBar firstDayOfMonth={firstDayOfMonth} />
            <DayOfWeeks />
            <Days />
          </div>
        </div>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div className="w-full justify-between px-4 pb-4 flex py-0">
      <Calendar />
      <TimeSelectors />
    </div>
  )
}

export default App
