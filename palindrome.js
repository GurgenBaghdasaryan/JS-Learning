let palindromFunc = (x, y) => {
    x = x.split("").reverse().join("");
    return (x == y);
}

console.log(palindromFunc('gugo', 'ogug'));