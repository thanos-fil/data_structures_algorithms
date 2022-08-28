// Complexity: O(2^n) (actually O(1.6^n))
function fibonacci(n) {
  if (n <= 2) return 1;
  return fibonacci(n - 2) + fibonacci(n - 1);
}

// Complexity: O(n)
function fast_fib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  const res = fibonacci(n - 2, memo) + fibonacci(n - 1, memo);
  memo[n] = res;
  return res;
}

// Complexity: O(n) with better space complexity - avoids call stack limits.
function tabulated_fib(n) {
  if (n <= 2) return 1;
  const fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}