export function getDate(datetime: string) {
  const date = new Date(datetime);
  // 提取日期
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`
}

export function getTime(datetime: string) {
  // 提取时间
  const date = new Date(datetime);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${hours}:${minutes}:${seconds}`
}

export function getDateTime(datetime: string | Date) {
  let date: string | Date = datetime instanceof Date ? datetime : new Date(datetime);
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const hours = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

export function formatDateTime(date: Date) {
  function padZero(num: number) {
    return num.toString().padStart(2, '0');
  }
  var year = date.getFullYear();
  var month = (date.getMonth() + 1).toString().padStart(2, '0');
  var day = date.getDate().toString().padStart(2, '0');
  var hours = date.getHours().toString().padStart(2, '0');
  var minutes = date.getMinutes().toString().padStart(2, '0');
  // Get the GMT offset in hours and minutes
  var offsetHours = Math.abs(date.getTimezoneOffset()) / 60;
  var offsetSign = date.getTimezoneOffset() < 0 ? '+' : '-';
  var offset = offsetSign + padZero(offsetHours) + '00';

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

export function groupDataByDay(res: any) {
  const dataGroup: any = {}
  for (const e of res) {
    const date = getDate(e.datetime)
    if (typeof dataGroup[date] === 'object') {
      dataGroup[date] = [...dataGroup[date], e]
    } else {
      dataGroup[date] = [e]
    }
  }
  const sortedDataGroup = Object.entries(dataGroup)
    .sort(([dateB], [dateA]) => new Date(dateA).getTime() - new Date(dateB).getTime())
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
  return sortedDataGroup;
}