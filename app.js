let countEl = document.getElementById('count')
let set = document.getElementById('set')
let count = 0

function increment() {
    count += 1
    countEl.innerHTML = count
}

function decrement() {
    count -= 1
    countEl.innerHTML = count
}

function save() {
    set.innerHTML += count + " - "
    count = 0
    countEl.innerHTML = 0
}

