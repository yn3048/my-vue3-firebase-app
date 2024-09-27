export function formatRelativeTime(targetTime = new Date('2024-09-24')) {
  const rtf = new Intl.RelativeTimeFormat('ko', {
    // auto : 최대한 표현가능한 범위내에서 해당 언어로 표시, number: 1일전, 2일전.. 숫자로 무조건 표시
    numeric: 'auto',
  });

  const currentTime = new Date();
  const timeDifference = Math.abs(targetTime - currentTime);

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365);
  // console.log('seconds: ', seconds);
  // console.log('minutes: ', minutes);
  // console.log('hours: ', hours);
  // console.log('days: ', days);
  // console.log('years: ', years);

  if (years > 0) {
    return rtf.format(-1 * years, 'year');
  } else if (days > 0) {
    return rtf.format(-1 * days, 'day');
  } else if (hours > 0) {
    return rtf.format(-1 * hours, 'hour');
  } else if (minutes > 0) {
    return rtf.format(-1 * minutes, 'minute');
  } else {
    return rtf.format(-1 * seconds, 'second');
  }

  // return timeDifference;
}
