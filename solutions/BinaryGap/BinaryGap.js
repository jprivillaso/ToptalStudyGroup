function solution(N) {
    const binN = (N >>> 0).toString(2);
    const untrailed = binN.slice(0, binN.lastIndexOf(1) + 1);
    
    return untrailed.split(1)
               .filter(x => x.indexOf('0') > -1)
               .reduce((val, acc) => val.length > acc.length ? val : acc, '')
               .length;
}
