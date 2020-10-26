exports.getSupportForm = async (req,res,next)=>{
    res.status(200).json({success:true})
}

exports.submitForm = async (req, res, next)=>{
    const data=req.body;
    res.status(200).json({success:true,data:data})
}
