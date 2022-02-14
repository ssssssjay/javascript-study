const arr = [
  {
    'name' : 'title1',
    'contents' : 'contents1',
    'dataNum' : 1,
    'data' : [1, 2, 3]
  }, {
    'name' : 'title2',
    'contents' : 'contents2',
    'dataNum' : 2,
    'data' : [1, 2, 3]
  }, {
    'name' : 'title3',
    'contents' : 'contents3',
    'dataNum' : 3,
    'data' : [1, 2, 100]
  }, {
    'name' : 'title4',
    'contents' : 'contents4',
    'dataNum' : 4,
    'data' : [1, 2, 3]
  }, {
    'name' : 'title5',
    'contents' : 'contents5',
    'dataNum' : 5,
    'data' : [1, 2, 100]
  }
];

const includes100 = arr.filter(item => item.data.includes(100));
includes100.forEach(el => console.log(el.name));

// arr.filter(item => item.data.includes(100)).forEach(i => console.log(i.name));