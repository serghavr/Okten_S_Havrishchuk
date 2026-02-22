let arr = [2,17,13,6,22,31,45,66,100,-18];

let i1 = 0;
while (i1 < arr.length) {
    console.log(arr[i1]);
    i1++;
}

for (let i2 = 0; i2 < arr.length; i2++) {
    console.log(arr[i2]);
}


let i3 = 1;
while (i3 < arr.length) {
    console.log(arr[i3]);
    i3 += 2;
}

for (let i4 = 1; i4 < arr.length; i4 +=2) {
    console.log(arr[i4]);
}
let i5 = 0;
while (i5 < arr.length) {
    console.log(arr[i5]);
    i5 += 2;
}

for (let i6 =0; i6 < arr.length; i6 += 2) {
    console.log(arr[i6]);
}

let arr7 = arr.slice();
for (let i7 = 0; i7 < arr.length; i7++) {
    if (arr7[i7] % 3 === 0) {
        arr7[i7] = "okten";
    }
}
console.log(arr7);

let i8 = arr.length - 1;
while (i8 >= 0){
    console.log(arr[i8]);
    i8--;
}

let i9 = arr.length - 1;
while (i9 >=0) {
    console.log(arr[i9]);
    i9--;
}
for (let i10 = arr.length-1; i10 >=0; i10--) {
    console.log(arr[i10]);
}

i11 = arr.length - 1;
if (i11 % 2 === 0) i11--;
    while (i11 >= 0) {
        console.log(arr[i11]);
        i11 -= 2;
    }

for (let i12 = arr.length-1; i12 >= 0; i12-= 2) {
    if (i12 % 2 === 1) console.log(arr[i12]);
}
i13 = arr.length - 1;
while (i13 >= 0) {
    if (arr[i13] % 2 === 0) console.log(arr[i13]);
    i13--;
}

for (let i14 = arr.length-1; i14 >= 0; i14--) {
    if (arr[i14] % 2 === 0) console.log(arr[i14]);
}
let arr15 = arr.slice();
for (let i15 = arr.length-1; i15 >= 0; i15--) {
    if (arr15[i15] % 3 === 0)
        arr15[i15] = "okten";
}
console.log(arr15);