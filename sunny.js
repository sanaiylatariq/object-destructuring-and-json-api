// API and json
const course = {
    cooursename:"js in hindi",
    price:"6765",
    courseteacher:"sunny"
}
// const {cooursename} = course 
// // another popular way to use objects is by declaring obj k andr ki value within curly braces phr equal krdo name of obj k
// console.log(cooursename);
// console.log(course.courseteacher);
// const {courseteacher} = course
// console.log(courseteacher);
const {cooursename:nam} = course
// obj equal k bad declare karky ap within curly braces content ko koi b chz k equal kark usi short word ko phr kheden b use kro
console.log(nam);
console.log(course.cooursename);
let sunny = {
    name:"ncxv hklmk",
    id:"45",
    sunnyfur:{
        furname:"gxgfyu",
        id:"734",
    }
}
const {sunnyfur:n} = sunny
console.log(n);


// json API
// {
//     name:"sanaiyla",
//     id:"645",
//     price:"free",
// }
// API curly braces mn b ati hen ya arrayas m b 
// [
//     {},
//     {},
//     {},
// ]
// random user ki google sy api ly kr json formatter vmn ja k paste kro to usko tee mn dkh k ap easily smj skty itni complicated api ko