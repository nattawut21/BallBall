import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateTimePickerProps {
  selectedDate: Date | null;
  onDateChange: (date: Date | null) => void;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({ selectedDate, onDateChange }) => {
  const handleDateChange = (date: Date | null) => {
    onDateChange(date);
  };

  return (
    <DatePicker selected={selectedDate} onChange={handleDateChange} />
  );
};

export default DateTimePicker;
