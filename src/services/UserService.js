const User = require("../models/UserModel")
const bcrypt = require("bcrypt") 
const createUser = (newUser) => {
  return new Promise(async (resolve, reject) => {
    const { name, email, password, confirmPassword, phone } = newUser
    try {
      const checkUser = await User.findOne({
        email:email
      })
      if(checkUser!==null){
        resolve({
          status:"OK",
          message:"the email is already"
        })
      }
      const hash = bcrypt.hashSync(password, 10);
      console.log('hash',hash)
      const createdUser = await User.create({
        name,
        email,
        password:hash,
        confirmPassword:hash,
        phone
        
        
      })
      console.log("User created successfully:", createdUser)
      if (createdUser) {
        resolve({
          status: "ok",
          message: "success",
          data: createdUser,
        })
      }
    } catch (e) {
      console.error("Error creating user:", e.message)
      reject(e)
    }
  })
}
const loginUser = (userLogin) => {
  return new Promise(async (resolve, reject) => {
    const { name, email, password, confirmPassword, phone } = userLogin
    try {
      const checkUser = await User.findOne({
        email:email
      })
      if(checkUser===null){
        resolve({
          status:"OK",
          message:"the user is not define"
        })
        return
      }
      const comparePassword = bcrypt.compareSync(password,checkUser.password)
      console.log('comparePassword',comparePassword)
      
      if(!comparePassword){
        resolve({
          status: "ok",
          message: "the password or user incorrect",
          
        })
        return
      }
      resolve({
        status: "ok",
        message: "success",
        data: checkUser,
      })
      return
    } catch (e) {
      console.error("Error creating user:", e.message)
      reject(e)
    }
  })
}

module.exports = {
  createUser,
  loginUser
}
