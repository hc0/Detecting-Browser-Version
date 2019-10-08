function urlAppendQuery(url, param) {
  if (!param) {
    return url;
  }
  let queryString = "";
  for (const key in param) {
    if ({}.hasOwnProperty.call(param, key)) {
      if (param[key] === false || param[key] === 0 || param[key]) {
        queryString += `&${key}=${param[key]}`;
      }
    }
  }
  if (queryString) {
    return `${url}?${queryString.substring(1)}`;
  }
  return url;
}
console.log(urlAppendQuery("https://ceshi.com", { a: 1, b: 2, c: 3 }));
//https://ceshi.com?a=1&b=2&c=3