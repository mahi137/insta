import React, { useState } from "react"; 
import AWS from "aws-sdk";







const ImageUpload = () => {

      let [file, setFile] = useState(null)
      let [imgLink, setImgLink] = useState(null)

      // access .env variables 

      console.log(process.env.REACT_APP_AWS_ACCESS_KEYS)
      console.log(process.env.REACT_APP_AWS_SECRET_ACCESS_KEYS)
     
     AWS.config.update({
             accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEYS,
             secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEYS,
             region: "ap-south-1"
     })

      async function uploadFile() {
          const s3 = new AWS.S3()
          let filename = `${Date.now()}-${file.name}`
          try{
              const response  =  await s3.putObject({
                    Bucket: "insta-accio-dark-coder",
                    Key: filename,
                    Body: file,
                    ContentType: file.type,
              }).promise()
             setImgLink(`https://insta-accio-dark-coder.s3.ap-south-1.amazonaws.com/${filename}`)

             
          }
            catch(error){
                 console.log(error.message)
            }
     }

     return(
        <div>
                 <input type="file" onChange={e => setFile(e.target.files[0])} />
                 <button onClick={uploadFile}>Upload</button>

                 {
                        imgLink && <img src={imgLink} alt="uploaded" />
                 }
        </div>
     )



}

export default ImageUpload;