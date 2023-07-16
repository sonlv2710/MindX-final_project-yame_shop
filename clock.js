// đồng hồ 
// 1
var fuT = new Date("july 10,2023 00:00:00").getTime()
setInterval(function () {
    var noW = new Date().getTime()
    var D = fuT - noW
    var days = Math.floor(D / (1000 * 60 * 60 * 24))
    var hours = Math.floor(D / (1000 * 60 * 60))
    var minutes = Math.floor(D / (1000 * 60))
    var seconds = Math.floor(D / (1000))


    hours %= 24
    minutes %= 60
    seconds %= 60

    document.getElementById("days").innerText = days
    document.getElementById("hours").innerText = hours
    document.getElementById("minutes").innerText = minutes
    document.getElementById("seconds").innerText = seconds
}, 1000)

// 2
var fuT = new Date("july 10,2023 00:00:00").getTime()
setInterval(function () {
    var noW = new Date().getTime()
    var D = fuT - noW
    var days = Math.floor(D / (1000 * 60 * 60 * 24))
    var hours = Math.floor(D / (1000 * 60 * 60))
    var minutes = Math.floor(D / (1000 * 60))
    var seconds = Math.floor(D / (1000))


    hours %= 24
    minutes %= 60
    seconds %= 60

    document.getElementById("days2").innerText = days
    document.getElementById("hours2").innerText = hours
    document.getElementById("minutes2").innerText = minutes
    document.getElementById("seconds2").innerText = seconds
}, 1000)

// 3
var fuT = new Date("july 10,2023 00:00:00").getTime()
setInterval(function () {
    var noW = new Date().getTime()
    var D = fuT - noW
    var days = Math.floor(D / (1000 * 60 * 60 * 24))
    var hours = Math.floor(D / (1000 * 60 * 60))
    var minutes = Math.floor(D / (1000 * 60))
    var seconds = Math.floor(D / (1000))


    hours %= 24
    minutes %= 60
    seconds %= 60

    document.getElementById("days3").innerText = days
    document.getElementById("hours3").innerText = hours
    document.getElementById("minutes3").innerText = minutes
    document.getElementById("seconds3").innerText = seconds
}, 1000)
// 4
var fuT = new Date("july 10,2023 00:00:00").getTime()
setInterval(function () {
    var noW = new Date().getTime()
    var D = fuT - noW
    var days = Math.floor(D / (1000 * 60 * 60 * 24))
    var hours = Math.floor(D / (1000 * 60 * 60))
    var minutes = Math.floor(D / (1000 * 60))
    var seconds = Math.floor(D / (1000))


    hours %= 24
    minutes %= 60
    seconds %= 60

    document.getElementById("days4").innerText = days
    document.getElementById("hours4").innerText = hours
    document.getElementById("minutes4").innerText = minutes
    document.getElementById("seconds4").innerText = seconds
}, 1000)
// 5
var fuT = new Date("july 10,2023 00:00:00").getTime()
setInterval(function () {
    var noW = new Date().getTime()
    var D = fuT - noW
    var days = Math.floor(D / (1000 * 60 * 60 * 24))
    var hours = Math.floor(D / (1000 * 60 * 60))
    var minutes = Math.floor(D / (1000 * 60))
    var seconds = Math.floor(D / (1000))


    hours %= 24
    minutes %= 60
    seconds %= 60

    document.getElementById("days5").innerText = days
    document.getElementById("hours5").innerText = hours
    document.getElementById("minutes5").innerText = minutes
    document.getElementById("seconds5").innerText = seconds
}, 1000)
// 6
var fuT = new Date("july 10,2023 00:00:00").getTime()
setInterval(function () {
    var noW = new Date().getTime()
    var D = fuT - noW
    var days = Math.floor(D / (1000 * 60 * 60 * 24))
    var hours = Math.floor(D / (1000 * 60 * 60))
    var minutes = Math.floor(D / (1000 * 60))
    var seconds = Math.floor(D / (1000))


    hours %= 24
    minutes %= 60
    seconds %= 60

    document.getElementById("days6").innerText = days
    document.getElementById("hours6").innerText = hours
    document.getElementById("minutes6").innerText = minutes
    document.getElementById("seconds6").innerText = seconds
}, 1000)

