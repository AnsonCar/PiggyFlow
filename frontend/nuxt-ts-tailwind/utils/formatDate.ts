export function formatDateTime(date: Date) {
  var year = date.getFullYear();
  var month = (date.getMonth() + 1).toString().padStart(2, '0');
  var day = date.getDate().toString().padStart(2, '0');
  var hours = date.getHours().toString().padStart(2, '0');
  var minutes = date.getMinutes().toString().padStart(2, '0');

  // Get the GMT offset in hours and minutes
  var offsetHours = Math.abs(date.getTimezoneOffset()) / 60;
  var offsetSign = date.getTimezoneOffset() < 0 ? '+' : '-';
  var offset = offsetSign + padZero(offsetHours) + '00';
  // return `${year}-${month}-${day}T${hours}:${minutes}${offset}`
  
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

function padZero(num:number) {
  return num.toString().padStart(2, '0');
}

// timezone
export function formatDateTimeZone(date: string) {
  const dateZone = new Date(date)
  // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return dateZone
}

export function formatDate(datetime: string) {
  const date = new Date(datetime);
  // 提取日期
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 月份范围是 0-11，所以需要加 1
  const day = date.getDate();

  return `${year}-${month}-${day}`
}

export function formatTime(datetime: string) {
  const date = new Date(datetime);
  // 提取时间
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${hours}:${minutes}:${seconds}`
}

export function groupDataByDay(res:any) {
  console.log('groupDatabyDay')
  const dataGroup: any = {}
  for (const e of res.data) {
    const date = formatDate(e.datetime)
    if (typeof dataGroup[date] === 'object') {
      dataGroup[date] = [...dataGroup[date], e]
    } else {
      dataGroup[date] = [e]
    }
  }
  return dataGroup
}