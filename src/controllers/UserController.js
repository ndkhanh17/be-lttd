const UserService = require('../services/UserService')

const createUser = async (req, res) => {
    try {
        console.log(req.body)
        const {name,email,password,confirmPassword , phone} = req.body
        
        //check email
        const reg = /^\w+([\-+.'']\w+)*@\w+([\-]\w+)*\.\w+([\-]\w+)*$/
        const ischeckEmail = reg.test(email)
        console.log(ischeckEmail)
        if(!name || !email || !password || !confirmPassword || !phone){
            return res.status(200).json({
                status:'err',
                message:'the in put in require'
            })
        }else if(!ischeckEmail){
            return res.status(200).json({
                status:'err',
                message:'the in put is email'
            })
            //check password
        }else if(password!==confirmPassword){
            return res.status(200).json({
                status:'err',
                message:'the password is equal'
            })
        }
        const respone  = await UserService.createUser(req.body)
         return res.status(200).json(respone)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const loginUser = async (req, res) => {
    try {
        console.log(req.body)
        const {name,email,password,confirmPassword , phone} = req.body
        
        //check email
        const reg = /^\w+([\-+.'']\w+)*@\w+([\-]\w+)*\.\w+([\-]\w+)*$/
        const ischeckEmail = reg.test(email)
        console.log(ischeckEmail)
        if(!name || !email || !password || !confirmPassword || !phone){
            return res.status(200).json({
                status:'err',
                message:'the in put in require'
            })
        }else if(!ischeckEmail){
            return res.status(200).json({
                status:'err',
                message:'the in put is email'
            })
            //check password
        }else if(password!==confirmPassword){
            return res.status(200).json({
                status:'err',
                message:'the password is equal'
            })
        }
        const respone  = await UserService.loginUser(req.body)
         return res.status(200).json(respone)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createUser,
    loginUser
}
