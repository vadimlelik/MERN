const fileService = require('../services/fileService')
const User  = require('../models/user')
const File  = require('../models/File')

class FileControllers {
    async createDir(req,res){
    try{
    const {name,type,parent}= req.body
        const file =  new File({
            name,type,parent, user:user.id
        })
        const parentFile = await File.findOne({_id:parent})
        if(!parentFile){
            file.path = name
            await  fileService.createDir(file)
        } else {
            faile.path= `${parentFile.path}\\${file.name}`
            await  fileService.createDir(file)
            parentFile.childs.push(file._id)
            await parentFile.save()
        }
        await file.save()
        return res.json()
    }catch (e){
        console.log(e)
        return res.status(400).json({message:e})
        }
    }
}


module.exports = new FileControllers()