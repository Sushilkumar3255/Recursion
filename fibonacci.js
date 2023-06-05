const iterativeFib = (n) => {
    const fibArr = [];
    if(n >= 1) {
        fibArr.push(0);
    }
    
    if(n >= 2) {
        fibArr.push(1);
    }

    for(let i=2; i<n; i++){
        fibArr[i] = fibArr[i-1] + fibArr[i-2];
    }

    return fibArr;
};

console.log(iterativeFib(5));

const getRecursiveFib = (n) => {
    if(n <= 1) {
        return n;
    }

    return getRecursiveFib(n-1) + getRecursiveFib(n-2);
};

const recursiveFib = (n) => {
    if (n <= 0){
        return;
    }

    const fibArr = [];
    for(let i=1; i<=n; i++){
        fibArr.push(getRecursiveFib(i-1));
    }

    return fibArr;
}

console.log(recursiveFib(8));
