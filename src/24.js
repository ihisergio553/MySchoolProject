// 项目文件夹结构: my-school-project
// 这里是一个简单的Node.js代码示例，用于创建和管理一些基本的模型和数据：

// 引入必要的模块
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 定义一个用户模型
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true, // 验证用户名唯一性
    index: { // 创建索引，提高查询效率
      unique: false
    }
  },
  password: {
    type: String,
    required: true,
    select: false, // 不显示字段，只读
  },
  email: {
    type: String,
    unique: true, // 验证电子邮件唯一性
    validate: {
      validator: (email) => /^(\w[-\.]{1}[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.(?:edu|com))$/.test(email),
      message: 'invalid email',
      // 通过正则表达式验证电子邮件格式
    },
    select: false, // 不显示字段，只读
  },
  roles: {
    type: [String],
    default: ['user'] // 默认角色是用户
  }
});

// 定义一个管理员模型
const AdministratorSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true, // 验证用户名唯一性
    index: { // 创建索引，提高查询效率
      unique: false
    }
  },
  password: {
    type: String,
    select: false, // 不显示字段，只读
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (email) => /^(\w[-\.]{1}[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.(?:edu|com))$/.test(email),
      message: 'invalid email',
      // 通过正则表达式验证电子邮件格式
    },
    select: false, // 不显示字段，只读
  },
  roles: {
    type: [String],
    default: ['admin'] // 默认角色是管理员
  }
});

// 配置Mongoose实例
const config = require('./config');
mongoose.connect(config.mongodbUrl);

// 增加用户模型和管理员模型的Schema对象到Mongoose实例中，用于查询、插入、更新等操作
mongoose.models = {
  User: mongoose.model('User', UserSchema),
  Administrator: mongoose.model('Administrator', AdministratorSchema)
};

// 提供一个接口来添加、更新、删除用户和管理员，并获取用户角色列表
module.exports = { addUser, updateUser, deleteUser, getRoles };

function addUser(user) {
  return new Promise((resolve, reject) => {
    User.findOne({ username: user.username }, (err, doc) => {
      if (!doc) {
        mongoose.model(User).create(doc, (err, model) => {
          resolve(model);
        });
      } else {
        console.log('User already exists.');
        reject(err);
      }
    });
  });
}

function updateUser(user) {
  return new Promise((resolve, reject) => {
    User.findOne({ username: user.username }, (err, doc) => {
      if (!doc) {
        reject('User not found');
        return;
      }

      User.findOneAndUpdate(
        { _id: doc._id },
        { $set: { password: user.password } },
        {
          runValidators: true,
          new: true
        }
      )
        .then(doc => resolve(doc))
        .catch(err => reject(err));
    });
  });
}

function deleteUser(user) {
  return new Promise((resolve, reject) => {
    User.findOneAndDelete({ username: user.username }, (err, doc) => {
      if (!doc) {
        reject('User not found');
        return;
      }
      mongoose.model(User).deleteOne(doc, { multi: true })
        .then(() => resolve(doc))
        .catch(err => reject(err));
    });
  });
}

function getRoles() {
  const role = require('./config').users || {};
  if (role) {
    for (let i in role) {
      if (Array.isArray(role[i])) {
        Role.findOne({ name: role[i] }, (err, roles) => {
          if (!roles) {
            throw new Error(`Role not found: ${role[i]}`);
          }
          resolve(roles);
        });
      } else if (typeof role[i] === 'string') {
        Role.findOne({ name: role[i] }, (err, roles) => {
          if (!roles) {
            throw new Error(`Role not found: ${role[i]}`);
          }
          resolve(roles);
        });
      }
    }
  }
}
