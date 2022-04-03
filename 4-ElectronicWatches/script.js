window.addEventListener('load', calculateTime);
function calculateTime() {
  const date = new Date();
  const dayNum = date.getDay();
  let hour = date.getHours();
  let minute = date.getMinutes();
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const dayNames = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  hour %= 12;
  if (!hour) hour = 12;
  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;
  document.getElementById('day').innerHTML = dayNames[dayNum];
  document.getElementById('hour').innerHTML = hour;
  document.getElementById('minute').innerHTML = minute;
  document.getElementById('ampm').innerHTML = ampm;

  setTimeout(calculateTime, 200);
}
