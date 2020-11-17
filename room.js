const Room = function(area) {
    this.area = area;
    this.been_painted = false;

}

Room.prototype.paintRoom = function() {
    this.been_painted = true;
}

module.exports = Room;