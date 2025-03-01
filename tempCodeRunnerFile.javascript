const promise1 =  Promise.resolve('ok');
const promise2 =  Promise.resolve(' no ok');

Promise.all([promise1, promise2])
 .then((res) => console.log('then', res))
 .catch((err) => console.log('err', err));
