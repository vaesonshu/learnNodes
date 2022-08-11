# MongoDB使用操作步骤
## 1. MongoDB启动

    mongod.exe --dbpath D:\MongoDB\Server\5.0\data\db
    mongo.exe --port 27017
## 2. MongoDB命令行使用方法

    show dbs // 查询当前有哪些数据库
    use comment1 // 进入此数据库
    show collections // 查看当前有哪些集合
    db.users.insert({ username: 'wangwu', password: 'abc' }) // 插入数据
    db.users.find() // 查询数据
    db.users.find({ city: 'shanghai' }) // 按条件查询
    db.users.find().sort({ age: 1 }) // 按正向排序查询数据
