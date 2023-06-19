export default function toFullDate(date) {
    let pad = function(num) {
        return (num < 10 ? '0' : '') + num;
    };
  
    return [date.getFullYear() +
        '-' + pad(date.getMonth() + 1) +
        '-' + pad(date.getDate()),
        pad(date.getHours()) +
        ':' + pad(date.getMinutes()) +
        ':' + pad(date.getSeconds())];
  }