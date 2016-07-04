"use strict";
var Quote = (function () {
    function Quote(id, quote, author) {
        this.id = id;
        this.quote = quote;
        this.author = author;
    }
    return Quote;
}());
exports.Quote = Quote;
