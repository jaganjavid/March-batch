// FOR LOOP

// Loop can execute a block of 
// code number of times

// for(let i = 0; i < 10; i++){
//     if(i === 2){
//         console.log(`2 is my fav number`);
//         continue;
//     }

//     if(i === 5){
//         console.log(`i just hit 5 to stop the loop, ${i}`);
//         break;
//     }

//     console.log(i);
// }

// While Loop

let i = 0;

while (i < 10) {

    if (i === 2) {
        console.log(`2 is my fav number`);
        continue;
    }

    if (i === 5) {
        console.log(`i just hit 5 to stop the loop, ${i}`);
        break;
    }

    console.log(i)
    i++;
}
