//'use strict';
 var express = require('express')
require('dotenv').config()
 var app = express();
var bodyParser = require('body-parser');
var mongoClient = require('mongodb').MongoClient;
var path = require('path');
var bcrypt = require('bcrypt');
var saltround = 10;
var validator = require('express-validator')
var passport = require('passport')
var localStrategy = require('passport-local').Strategy
var cors =  require('cors')
var docdb = require('./doctors')
var session = require('express-session')
var SessionStore = require('connect-mongo')(session)
var mongourl = process.env.mongourl

var port = process.env.PORT || 80






var dbo;
var  db_col ;


app.use(express.static(path.join(__dirname,'build')))
app.use(session({
    name:"Doctors_appointment",
    secret:process.env.cookieSecret,
    saveUninitialized:false,
    resave:false,
    store: new SessionStore({url:mongourl}),
    cookie:{
        httpOnly:true,
        maxAge: 24 * 60 *60*1000
    }

}))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(validator())
app.use(cors())
app.use(passport.initialize())
app.use(passport.session())


passport.use(new localStrategy(
(username,password,done)=>{
    db_col.PatientsDetails.find({patientEmail:username}).toArray((err,result)=>{
        if(err){
            done(err)
        }else{
           if(result.length===1){


               var hashedPassword = (result[0].patientPassword).toString();

               bcrypt.compare(password,hashedPassword,(err,response)=>{

                   if(response===true){
                       var  authenticated_user= {patientEmail:result[0].patientEmail,patientName:result[0].patientName}
                       done(null,authenticated_user,{message:"Success"})
                   }else{
                       done(null,false,{message:"Invalid_login_credentials"})
                   }
               })


           } else{
               done(null,false,{message:"Invalid_login_credentials"})
           }
        }
    })
}
))



app.get('/doctors',(req,res)=>{

  res.json(docdb.Doctors_db.Doctors)


})
app.post('/signUpUser',(req,res)=>{

    var username = req.body.username
    var email = req.body.email
    var password = req.body.password



     var validateData=new Promise((resolve,reject)=>{

           req.check('username',"Username must have between  4 - 15 characters").len({min:4,max:20})
           req.check('email',"Enter a valid Email Address").isEmail().notEmpty()
           req.check('password',"Password to short and Weak").notEmpty().len({min:5}).isAlphanumeric()
           req.check('cpassword',"Confirmation Password Must Match Chosen Password").equals(password)

        var errors = req.validationErrors()

           if(errors){

               reject({res_status:"validation_error",res_content:errors})
           }else{

               resolve();
           }

    })
    var hashPassword =   new Promise((resolve,reject)=>{
        bcrypt.hash(password,saltround,(err,hash)=>{
            if(err){

                reject({res_status:"server_error",res_content:null})
            }else{

                resolve(hash)
            }
        })
    })
    var addUser = (hashedPassword)=>{


           db_col.PatientsDetails.find({patientEmail:email}).toArray((err,result)=>{
               if(err){
                   res.send({res_status:"server_error",res_content:null})
               }else{

                 if(result.length>0){
                    res.send({res_status:"email_registered",res_content:'Username already Registered'})
                 }else{

                     db_col.PatientsDetails.insertOne({patientName:username,patientEmail:email,patientPassword:hashedPassword},(err,response)=>{
                         if(err) {
                             res.send({res_status:"server_error",res_content:null})
                         }else{
                             res.send({res_status:"success",res_content:null})
                         }

                     })
                 }

               }
           })

    }

    validateData.then(()=>{
        return hashPassword;
    }).then((hash)=>{

         addUser(hash)
    }).catch((err)=>{res.json(err)})

})

app.post('/login',(req,res,next)=>{
    passport.authenticate('local',(err,user,info)=>{
        if(err) throw err;

        if(!user){
           return res.json({loggedInUser:user,loginMsg:info.message})
        }else{

            req.logIn(user,(err)=>{

                if(err) throw err;

              return  res.json({loggedInUser:user,loginMsg:info.message})

            })
        }
    })(req,res,next)
})

app.get('/doctor',(req,res)=>{
    var searchQuery = req.query.docId


    var specificDoc = docdb.Doctors_db.Doctors.filter((doctor)=>{

        return doctor.doc_id === Number(searchQuery)
    })

    res.json(specificDoc)

})
app.get('/users',(req,res)=>{
    db_col.PatientsDetails.find({}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.get('/doctorAvailability',(req,res)=>{
    let date_requested = req.query.date_picked
    let doctorPicked = Number(req.query.docId)



   new Promise((resolve,reject)=>{
            var specificDoc = docdb.Doctors_db.Doctors.filter((doctor)=>{

                return doctor.doc_id === Number(doctorPicked)
            })

            if(specificDoc.length>0){
                resolve()
            }else{
                reject("Doctor_not_Found")
            }
    }).then(()=>{
           db_col.Appointments.find({doc_id:doctorPicked,appointment_date:date_requested}).toArray((error,result)=>{
               if(error) throw error;

               if(result.length>0){
                   res.json("Doc_Not_Available")
               }else{
                   res.json("Doc_Available")
               }

           })
       }
    ).catch(err=>{
                 res.json(err)
     })




})


app.post('/setAppointment',(req,res)=>{

    var doc_booked = Number(req.body.doc_to_book)
    var appointment_subject = req.body.appointment_subject
    var add_info = req.body.a_information
    var desired_app_date=req.body.desired_date
    var bookedBy = req.body.bookedBy

    req.check('appointment_subject',"Appointment Subject is Required").notEmpty();


    new Promise((resolve,reject)=>{
        var specificDoc = docdb.Doctors_db.Doctors.filter((doctor)=>{

            return doctor.doc_id === Number(doc_booked)
        })
        if(specificDoc.length>0){

            resolve(specificDoc[0].name)
        }else{
            reject("Doctor_not_Found")
        }
    }).then((docname)=>{
        var validation_errors = req.validationErrors();

        if(validation_errors){
            res.json("Empty_Appointment_Subject")
        }else{
            var current_date= new Date().toLocaleDateString();
            var chosen_date = new Date(desired_app_date).toLocaleDateString();


            if(current_date<chosen_date){

                db_col.Appointments.insertOne({doc_id:doc_booked,docname:docname,bookedBy:bookedBy,appointment_date:desired_app_date,add_info:add_info,subject:appointment_subject},(error,result)=>{
                    if(error) throw error;
                    res.json("Success")
                })

            }else{
                res.json("Choose a Future Date")
            }

        }
    }).catch((err)=>{

        res.json(err)}
        )




})

app.get('/userStatus',(req,res)=>{

    res.send({authentication:req.isAuthenticated(),user:req.user})
})

app.get('/user/dashboard',(req,res)=>{

    new Promise((resolve,reject)=>{
        if(req.isAuthenticated()){
            resolve()
        }else{
            reject("user_not_logged")
        }
    }).then(()=>{
        db_col.Appointments.find({bookedBy:req.user.patientEmail}).toArray((err,result)=>{
            if(err){
                res.json({data:null,message:"dberror"})
            }else{
                res.json({data:result,message:"success"})
            }
        })
    }).catch((err)=>{


        res.json({data:null,message:err})
    })

})

app.get('/logout',(req,res)=>{
    req.session.destroy()
    req.logout()
    res.send("User_logged_out")
})
app.get('/*',(req,res)=>{
       res.sendFile(path.join(__dirname,'build','index.html'))
})

passport.serializeUser((user,done)=>{

    done(null,user.patientEmail)
})
passport.deserializeUser((userID,done)=>{

    db_col.PatientsDetails.find({patientEmail:userID}).toArray((err,result)=>{
        if(err){
            done(err)
        }else{
            var  user={_id:result[0]._id,patientEmail:result[0].patientEmail,patientName:result[0].patientName}
             done(null,user)
        }
    })
})
 mongoClient.connect(mongourl, { useUnifiedTopology: true },(err,db)=>{
     if(err){
       console.log(err)
     }else{
         app.listen(port,()=>{

                 dbo= db.db("APPOINTMENT_DB")
                 db_col ={
                           PatientsDetails : dbo.collection("PatientDetails"),
                           Appointments : dbo.collection("Appointments")

                          }

             console.log("Server now listening on port 80..")
         })
     }
 })
