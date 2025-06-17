// Iteration 1: Names and Input
const hacker1 = 'Jack';
const hacker2 = 'Adam';

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if(hacker1.length == hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

// Iteration 3: Loops
let driverNameSeperated = '';
for (let i = 0; i < hacker1.length; i++){
    driverNameSeperated += `${hacker1[i].toUpperCase()} `;
}

console.log(driverNameSeperated);

let navigatorNameReverse = '';
for (let i = hacker2.length-1; i >=0; i--){
    navigatorNameReverse += hacker2[i];
}

console.log(navigatorNameReverse);


if (hacker1.localeCompare(hacker2)<0){
    console.log(`The driver's name goes first.`);
} else if(hacker1.localeCompare(hacker2)>0){
    console.log(`Yo, the navigator goes first, definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}

// BONUS 1
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet facilisis ligula, ut laoreet quam. Quisque pretium orci arcu. Integer eu turpis vitae quam sodales vehicula. Morbi est velit, congue eget rutrum vitae, dictum et mi. In accumsan, nisl id efficitur congue, ex mauris viverra sapien, non vulputate elit lectus quis magna. Maecenas aliquam diam sit amet justo ultricies tempus. Nullam eu interdum turpis. Nunc imperdiet orci in scelerisque tristique. Vivamus a erat vel lorem venenatis iaculis non quis mauris. Sed placerat lobortis sollicitudin. In nulla mi, euismod non dui sit amet, laoreet vestibulum odio. In et lacus cursus ante tristique ultrices. Duis faucibus sapien quis orci ullamcorper, vel maximus felis porttitor.

Maecenas id rutrum lorem. Fusce a molestie libero. Fusce maximus justo at dignissim dignissim. Phasellus consectetur eget tellus a aliquam. Suspendisse quis porta odio. Phasellus id aliquet ipsum. Aenean laoreet eros ac nibh luctus, ut blandit est euismod.

Phasellus ut turpis nisi. Ut quis efficitur odio. Quisque eros nisl, placerat non laoreet vitae, accumsan eget purus. Fusce quis volutpat mauris. Suspendisse sed elit varius, mollis augue in, porta tellus. Quisque dapibus risus nunc, vitae commodo risus dapibus vel. Nullam ipsum quam, consequat eu eros in, ultrices elementum velit. Nam erat metus, commodo eget lobortis eu, hendrerit tristique diam. Vestibulum hendrerit metus et ullamcorper volutpat. Vivamus luctus, orci quis aliquam feugiat, mi nunc efficitur ligula, tempor vestibulum mi felis posuere libero. Nulla facilisi. Aenean nunc felis, tempor ac mattis condimentum, consectetur quis eros. Suspendisse eu laoreet ante. Praesent at pretium orci.`


let lTArray = longText.split(' ');

// console.log(lTArray.length);

let etCount=0;
lTArray.forEach(element => {
    if(element==='et'){
        etCount++;
    }
});

//console.log(etCount);
