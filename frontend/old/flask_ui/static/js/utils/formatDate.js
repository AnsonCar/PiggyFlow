export function formatDateTime(date) {
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');
    var hours = date.getHours().toString().padStart(2, '0');
    var minutes = date.getMinutes().toString().padStart(2, '0');
    
    return `${year}-${month}-${day}T${hours}:${minutes}`;
}

// timezone
export function formatDateTimeZone(date) {
  const dateZone = new Date(date)
  // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return dateZone
}

export function formatDate(datetime) {
    const date = new Date(datetime);
    // 提取日期
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 月份范围是 0-11，所以需要加 1
    const day = date.getDate();
  
    return `${year}-${month}-${day}`
  }
  
  export function formatTime(datetime) {
    const date = new Date(datetime);
    // 提取时间
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
  
    return `${hours}:${minutes}:${seconds}`
  }