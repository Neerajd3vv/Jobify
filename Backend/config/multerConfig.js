import multer from "multer"

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, "./resume")
    },
    filename: function(req,file,cb){
        cb(null , `${Date.now()}-${file.originalname}`)
    }

})

 const upload = multer({storage, 
    limits: {fileSize : 150 * 1024} // limit 150 kb
})

export default upload