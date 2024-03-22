const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const ht = parseInt(document.querySelector('#height').value);
    const wt = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(ht === '' || ht < 0 || isNaN(ht)) {
        results.innerHTML = 'Invalid height';
    } else if(wt === '' || wt < 0 || isNaN(wt)) {
        results.innerHTML = "Invalid weight";
    } else {
       const finAns = (wt / ((Math.pow(ht, 2)) / 10000)).toFixed(2);
       results.innerHTML = `<span>${finAns}</span>`;
        if(finAns > 0 && finAns < 18.6) results.innerHTML = `Underweight: ${finAns}`;
        if(finAns > 18.6 && finAns < 24.9) results.innerHTML = `Normal: ${finAns}`;
        if(finAns > 24.9) results.innerHTML = `Overweight: ${finAns}`
    }




    // results.innerHTML = `height: ${ht}`;
    // results.innerHTML = `weight: ${wt}`;
});