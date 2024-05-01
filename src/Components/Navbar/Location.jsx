
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const Location = () => {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);


  const isOutsideRange = (date) => {
    const today = new Date();
    return date < today;
  };
  const renderDayContents = (day, date) => {
    const isSelectable = !isOutsideRange(date);
    return (
      <div className={isSelectable ? 'selectable' : 'not-selectable'}>
        {day}
      </div>
    );
  };

  // adult and child

  const [isOpen, setIsOpen] = useState(false);                        //adult and child//
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleAdultsChange = (value) => {
    if (value >= 1) {
      setAdults(value);
      setIsOpen(false);
    }
  };
  const handleChildrenChange = (value) => {
    if (value >= 0) {
      setChildren(value);
      setIsOpen(false);
    }
  };

  return (
   <>
   
   </>
    
  )
}

export default Location
