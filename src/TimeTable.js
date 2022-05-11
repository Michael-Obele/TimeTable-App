import React from 'react';
import { Question } from './Modal';

export default function TimeTable() {
  var startTime = 8;
  var Day = 5;
  var Hours = [];
  for (var i = 0; i < 5; i++) {
    Hours.push(`${startTime + i}:00 - ${startTime + i + +1}:00`);
  }
  var Days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  var ActiveDays = [];
  for (let i = 0; i < Day; i++) {
    ActiveDays.push(Days[i]);
  }
  return (
    <>
      <Question />

      <table border='2'>
        <tbody>
          <tr>
            <th>Time</th>
            {Hours.map((x, index) => (
              <th key={index}>{x}</th>
            ))}
          </tr>
          <tr>
            {ActiveDays.map((x, index) => (
              <td key={index}>{x}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
}
