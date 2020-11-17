const assert = require('assert');
const Room = require('../room.js');

    describe('Room', function(){
        let room;

        beforeEach( function() {
            room = new Room(10);
            
        });

        it('it should have an area', function(){
            const actual = room.area;
            assert.strictEqual(actual, 10)
        });

        it('been_painted should be false', function(){
            const actual = room.been_painted;
            assert.strictEqual(actual, false)
        });

        it('been_painted should be true', function(){
            room.paintRoom(true);
            const actual = room.been_painted;
            assert.strictEqual(actual, true)

        });

    });


