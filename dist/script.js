const length = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const Symbols = document.getElementById("Symbols");
const showpassowrd = document.getElementById("showpassowrd");
const  clipboardtext=document.getElementById("clipboardtext")




let upper = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

let lower = [];
upper.forEach((item, index) => {
    lower[index] = item.toLowerCase();
    // console.log(lower[index])
});
console.log(`upper :`, upper);
console.log(`upper :`, lower);


let number = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
]
let symbol = [
    '@', '-', '_', '$', '%', '^', '*',
]


let passwordchar = '';
let password1 = '';
let index = 0;


function getpassword(value) {

    console.log("Sujit");
    let a = Math.random();
    if (value == "upper") {
        console.log("sujit")
        return upper[Math.floor(a * value.length)]
    } else if (value == `lower`) {
        return lower[Math.floor(a * value.length)]
    } else if (value == "symbol") {
        return symbol[Math.floor(a * value.length)]
    } else {
        return number[Math.floor(a * value.length)]
    }
    // console.log("value : " , value)
    // let a = Math.random();
    // console.log('s=',upper[Math.floor(a * value.length)])
    // return upper[Math.floor(a * value.length)]
}


function generatepassword() {
    passwordchar = '';
    password1 = '';
    index = 0;


    if (length.value == "") {
        // console.log("sujit")
        showpassowrd.innerHTML = '';
        showpassowrd.innerHTML = 'select the length';
    } else {
        let lengthvalue = length.value;
        // console.log(`length of the password${lengthvalue}`)

        if (lengthvalue == 0) {
            showpassowrd.innerHTML = '';
            showpassowrd.innerHTML = 'select the length';
        } else {


            let storetruevalue = [];
            let j = 0;
            if (uppercase.checked == true) {
                storetruevalue[j] = "upper";
                j++;
            }
            if (lowercase.checked == true) {
                storetruevalue[j] = 'lower';
                j++;
            }
            if (Symbols.checked == true) {
                storetruevalue[j] = 'symbol';
                j++;
            }
            if (numbers.checked == true) {
                storetruevalue[j] = 'number';
                j++;
            }
            // storetruevalue.forEach((item) => {
            //     // console.log(item)
            // });

            let lengthofpassword = length.value;
            let truevalue = storetruevalue.length;
            let eachlength = Math.floor(lengthofpassword / truevalue);
            // console.log(eachlength)
            if (truevalue > lengthofpassword) {
                alert(`You should increase the size of the password. As per that, you have chosen the option. `);
                return
            }

            if (lengthofpassword % 2 != 0 || (lengthofpassword % 2 == 0 && truevalue % 2 != 0) || (lengthofpassword % 2 == 0 && truevalue % 2 == 0)) {

                // console.log("this is odd ")
                let password = "";
                for (let i = 0; i < truevalue - 1; i++) {


                    for (let j = 1; j <= eachlength; j++) {

                        password += getpassword(storetruevalue[i]);
                        // console.log("password format :",storetruevalue[i] )

                        // console.log(password)
                        lengthofpassword--;
                    }
                }

                for (let j = 1; j <= lengthofpassword; j++) {
                    password += getpassword(storetruevalue[storetruevalue.length - 1]);

                }
                // showpassowrd.innerHTML = '';
                // showpassowrd.innerHTML = password;
                password1 = password;
                console.log("i am here ")


            } else {
                let password = "";
                console.log(`length : ${eachlength}`)
                for (let i = 0; i < truevalue; i++) {

                    for (let j = 1; j <= eachlength; j++) {
                        password += getpassword(storetruevalue[i]);
                        lengthofpassword--;
                    }
                }
                // console.log("i am here also ")

                password1 = password;

                // showpassowrd.innerHTML = '';
                // showpassowrd.innerHTML = password;

            }


        }

    }

    function showpassword1() {

        // console.log("i am here also and passwordchar is ", passwordchar)
        passwordchar += password1.charAt(index);

        showpassowrd.value= '';
        showpassowrd.value = passwordchar;
        index++;

        if (index == password1.length) {

            console.log(index)
            clearInterval(showpassword1, 50)
        }
    }

    setInterval(showpassword1, 90)
}


function copytoclickboard(){



    var copyText = document.getElementById("showpassowrd");
 copyText.select();
 copyText.setSelectionRange(0, 999999);
 document.execCommand("copy");
 alert("Copied the text: " + copyText.value);

   
    
}



