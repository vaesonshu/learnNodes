class Person {
    constructor(props){
        this.props = props;
    }
}
class Student extends Person{
    constructor(props){
        super(props);
    }
}
let stu = new Student({name:'lnj', age:18});
console.log(stu.props);
