import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = (date) => {
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAge(calculateAge(birthDate));
  };

  return (
    <div>
      <h1>Age Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calculate Age</button>
      </form>
      {age !== null && (
        <div>
          <h2>Your Age: {age} years</h2>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
