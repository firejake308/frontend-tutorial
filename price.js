let expensiveElements = document.getElementsByClassName('expensive');
let spanEl = expensiveElements[0];
let promiseResult = fetch('http://price-of-an-apple.herokuapp.com/');
promiseResult.then((res) => {
    console.log(res.json());
})
spanEl.innerHTML = '$.0.35';