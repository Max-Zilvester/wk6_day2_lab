const assert = require('assert');
const Paint = require('../paint.js');

    describe('Paint', function(){
        let paint;

        beforeEach( function(){
            paint = new Paint();
        });

        it('should be empty ', function() {
            const actual = paint.litres;
            assert.deepStrictEqual(actual, 0)
        });

        it('should have paint', function(litres) {
            paint.addPaint(10);
            const actual = paint.litres;
            assert.strictEqual(actual, 10);
        });
    });