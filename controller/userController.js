import {catchAsyncErrors} from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import {User} from "../models/userSchema.js";

export const patientRegister=catchAsyncErrors(async(req,res,next)=>{
    const {firstName,lastName,email,phone,password,gender,dob,nic,role}=req.body;
    if(!firstName||!lastName||!email||!phone||!password||!gender||!dob||!nic||!role){
        return next(new ErrorHandler("Please fill full form! ",400));
    }
    let user=await User.findOne({email})
    if(user){
        return next(new ErrorHandler("User already registered! ",400))
    }
    user=await User.create({firstName,lastName,email,phone,password,gender,dob,nic,role })
    res.status(200).json({
        success:true,
        message:"User Registered"
    })
})

export const login=catchAsyncErrors(async(req,res,next)=>{
    const{email,password,confirmPassword,role}=req.body;
    if(!email||!password||!confirmPassword||!role){
return next (new ErrorHandler("Please provide all details! ",400))
    }
    if (password!==confirmPassword){
        return next (new ErrorHandler("Passwords do not match! ",400))
    }
    const user=await User.findOne({email}).select("+password");
    if(!user){
        return next (new ErrorHandler("Ivalid email or password! ",400))
    }
    const isPasswordMatched=await user.comparePassword(password);
    if(!isPasswordMatched){
        return next (new ErrorHandler("Ivalid email or password! ",400))
    }
    if(role!==user.role){
        return next (new ErrorHandler("User with this role not found! ",400))
    }
    res.status(200).json({
        success:true,
        message:"User Logged in successfully! "
    })
})