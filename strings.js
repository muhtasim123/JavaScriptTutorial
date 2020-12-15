//3 ways to declare a string

let s = 'you can make a string with single quotes. this is convenient when you need to include "double quotes" in the string';

let s2 = "you can make a string using double quotes, if you have lots of possessives/contractions, also lets you use escape characters";

let s3 = `we can use backt ticks. this is the best way to make strings.
JS takes this template and converts it to a string once it is used
allows for cool features like multiline strings
can also directly embedd JS expressions using ${(10+20)/100}
can be very useful
you should use template literal anywhere oyu need a non trivial string`;

let s5 = `testing back ticks`;

console.log(s3);