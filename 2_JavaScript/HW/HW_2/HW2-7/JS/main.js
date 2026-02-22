let time = +prompt("Enter minute");
if (time >= 0 && time <= 15) {
    console.log('1 чверть');
}
else if (time > 15 && time <= 30) {
    console.log('2 чверть');
}
else if (time > 30 && time <= 45) {
    console.log('3 чверть');
}
else if (time >45 && time <= 59) {
    console.log("4 чверть");
}
else {
    console.log('?????')
}
