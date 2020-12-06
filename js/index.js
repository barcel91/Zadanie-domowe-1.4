const a = {
    sth: "something ",
    giveMeSomething: function () {
        return `${this.sth} aaa`
    }
}
console.log(a.giveMeSomething()) 