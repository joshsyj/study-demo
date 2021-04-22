//工厂模式
function createPerson(name, age, sex) {
    var obj = {};
    obj.name = name;
    obj.age = age;
    obj.sex = sex;
    return obj;
}
var person1 = createPerson('zhangsan', 20, 'boy');
var person2 = createPerson('lisi', 21, 'boy');