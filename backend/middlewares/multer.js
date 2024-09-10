import multer from "multer";


const storage = multer.diskStorage({
    destination : (req,file ,cb)=>{
        cb(null , "assets")
    },
    filename : (req,file,cb)=>{
        let filename = `${Date.now()}-${file.originalname}`
        cb(null ,filename)
    }
})
const upload = multer({storage})
export default upload 