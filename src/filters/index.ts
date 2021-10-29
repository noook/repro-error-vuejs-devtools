function joinDate(date: Date, fullYear = false, separator = '/') {
  return [
    (date.getDate()).toString().padStart(2, '0'),
    (date.getMonth() + 1).toString().padStart(2, '0'),
    date.getFullYear().toString().slice(fullYear ? 0 : -2),
  ].join(separator);
}

export function toDMY(date: Date, separator = '/') {
  return joinDate(date, true, separator);
}