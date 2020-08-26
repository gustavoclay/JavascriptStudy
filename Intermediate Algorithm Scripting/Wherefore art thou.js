function whatIsInAName(collection, source) {
    const keys = Object.keys(source);

    let arr = collection.filter(function (obj) {
        return keys.every(k => obj.hasOwnProperty(k) && obj[k] === source[k]);
    });

    console.log(arr);

    return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
