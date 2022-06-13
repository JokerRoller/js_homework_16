function increase() {
    var info = parseInt(document.getElementById('number').value,10);
    info = isNaN(info) ? 0 :info;
    info++;
    document.getElementById('number').value = info;
}

function decrease() {
    var info = parseInt(document.getElementById('number').value,10);
    info = isNaN(info) ? 0 :info;
    info--;
    document.getElementById('number').value = info;
}

