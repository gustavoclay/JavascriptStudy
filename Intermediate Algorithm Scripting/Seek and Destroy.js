function destroyer(arr) {
    const args = Array.prototype.slice.call(arguments);
    return arr.filter(function (n) {
        return !args.includes(n);
    });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
