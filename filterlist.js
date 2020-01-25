function filter_list(list) {
  return list.filter(item => typeof item === 'number');
}

filter_list([1, 2, 'a', 'b']);
