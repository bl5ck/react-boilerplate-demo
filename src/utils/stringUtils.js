function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

export function gUuidV4() {
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}

export function toMoneyFormat(number) {
  return number
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+,)/g, '$1.')
    .replace(/,0+$/g, '');
}

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function uncapitalize(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}
