var lenLongestFibSubseq = function(arr) {
    const N = arr.length;
    const idxMap = new Map();
    const dp = [...Array(N)].map(() => Array(N).fill(2));
    
    arr.forEach((n, i) => idxMap.set(n, i));
    let maxLen = 0;
    
    for(let k = 1; k < N; k++) {
        for(let j = 0; j < k; j++) {
            const diff = arr[k] - arr[j];
            if(diff >= arr[j] || !idxMap.has(diff)) continue;
            const i = idxMap.get(diff);
            dp[j][k] = dp[i][j] + 1;
            maxLen = Math.max(maxLen, dp[j][k]);
        }
    }
    return maxLen;
};