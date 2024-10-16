const data = {
  name: '코드잇',
  email: 'happy@codeit.com',
  address: '서울특별시 청계천로 100'
};
const keys = ['name', 'email', 'address'];
keys.forEach((key) => {
  console.log(data[key]);
});



const data = {
  name: '코드잇',
  email: 'happy@codeit.com',
  address: '서울특별시 청계천로 100'
};
const keys = Object.keys(data); // ['name', 'email', 'address']
keys.forEach((key) => {
  console.log(data[key]);
});



const data = {
  name: '코드잇',
  email: 'happy@codeit.com',
  address: '서울특별시 청계천로 100'
};
Object.keys(data) // ['name', 'email', 'address']
  .forEach((key) => {
    console.log(data[key]);
  });




const data = {
  name: '코드잇',
  email: 'happy@codeit.com',
  address: '서울특별시 청계천로 100'
};

Object.values(data) // ['코드잇', 'happy@codeit.com', '서울특별시 청계천로 100']
  .forEach((value) => {
    console.log(value);
  });




const data = {
  name: '코드잇',
  email: 'happy@codeit.com',
  address: '서울특별시 청계천로 100'
};

Object.entries(data) // [['name', '코드잇'], ['email', 'happy@codeit.com'], ['address', '서울특별시 청계천로 100']]
  .forEach(([key, value]) => {
    console.log(value);
  });
