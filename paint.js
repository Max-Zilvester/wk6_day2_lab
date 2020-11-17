const Paint = function () {
    this.litres = 0;
}

Paint.prototype.addPaint = function(litres)  {
    this.litres + litres;
}

module.exports = Paint;