function likes(names) {
  // if array is empty return "no one likes this"

  // get length of array
  //      if length is > 3 return name[1], name[2], and name[3], and length - 3           other people like this
  //      if length is 3 return "name1, name2, and name3 like this"
  //      if length is 2 return "name1 and name2 like this"
  //      if length is 1 return "name1 likes this"

  switch (names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${names.length -
        2} others like this`;
  }
}
