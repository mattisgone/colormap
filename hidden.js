function sampleN (list, n) {
  if (n === undefined || n < 0)
    n = 1;
  if (!list.length)
    return undefined;
  var results = [];
  for (var k = 0; k < n; k++)
    results.push(list[Math.floor(Math.random() * list.length)]);
  return results;
}
