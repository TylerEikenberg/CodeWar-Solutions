// filter a
//      if value in a is not included in b send it back

const array_diff = (a, b) => a.filter(a => !b.includes(a));
