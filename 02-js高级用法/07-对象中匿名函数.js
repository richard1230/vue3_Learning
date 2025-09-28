let cat = {
    myname:"xiaoMao",
    age:3,
    eat1:function(x){
        console.log(`i am eating ${x}`)
    },
    eat2(x){
        console.log(`i am eating ${x}`)
    },
}

console.log(cat.myname);
cat.eat1('fish');
cat.eat2('mouse')