var arr = [1,2,3, 4, 5];

function largest(arr){
    // while(){
        for(i=0; i<arr.length; i++){
            if(arr[i] > arr[i+1]){
                console.log("largest is :", arr[i+1]);
            }
            else{
                console.log("largest is :", arr[i]);

            }
    }
    }

// }


// print x , if div by 3
// proint y, for 5
// print z, both 3 , 5



var num = 10;
function divisibilityTest(num){
    if (num%3 == 0){
        console.log("x");
    }
    else if (num%5 == 0){
        console.log("y");
    }
    else if ( (num%3 && num%5) == 0){
        console.log("z");
    }
}


















