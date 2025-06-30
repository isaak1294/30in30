import dayjs from 'dayjs';

const today = dayjs();
const daysInMonth = today.daysInMonth();

type CalendarProps = {
  days?: number;
  onDayClick: (date: dayjs.Dayjs) => void;
};

export default function Calendar({ days = daysInMonth, onDayClick }: CalendarProps) {
  const dates = Array.from({ length: days }, (_, i) =>
    today.startOf('month').add(i, 'day')
  );

  return (
    <div className="p-6 bg-white shadow rounded-xl max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
        {today.format('MMMM YYYY')}
      </h1>
      <div className="grid grid-cols-7 gap-2">
        {dates.map((date) => {
          const isToday = date.isSame(today, 'day');
          return (
            <button
              key={date.format('YYYY-MM-DD')}
              onClick={() => onDayClick(date)}
              className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition 
                ${
                  isToday
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-blue-100'
                }`}
            >
              {date.date()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
