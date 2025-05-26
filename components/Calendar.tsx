import React from 'react';

interface Day {
  date: number;
  isCurrentMonth: boolean;
  isToday: boolean;
}

const Calendar: React.FC = () => {
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('pt-BR', { month: 'long' });
  const currentYear = currentDate.getFullYear();

  // Gera os dias do mês atual
  const days: Day[] = Array.from({ length: 35 }, (_, i) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i - currentDate.getDay() + 1);
    return {
      date: date.getDate(),
      isCurrentMonth: date.getMonth() === currentDate.getMonth(),
      isToday: date.toDateString() === currentDate.toDateString()
    };
  });

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-[#204F8C]">{currentMonth}</h2>
        <p className="text-sm text-gray-600 font-medium">{currentYear}</p>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center py-2 text-sm font-medium text-[#204F8C]"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <div
            key={index}
            className={`text-center py-2 text-sm ${
              day.isCurrentMonth
                ? 'text-gray-800 font-normal'
                : 'text-gray-400 font-light'
            } ${
              day.isToday
                ? 'bg-[#204F8C] text-white rounded-full font-medium'
                : ''
            }`}
          >
            {day.date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar; 