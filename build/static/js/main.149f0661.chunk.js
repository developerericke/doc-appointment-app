(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{30:function(e,t,a){},40:function(e,t,a){e.exports=a.p+"static/media/profile.e9bc6430.png"},43:function(e,t,a){e.exports=a(72)},68:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(21),o=a.n(r),l=(a(30),a(3)),i=a(7),c=a(8),u=a(11),m=a(9),d=a(12),p=a(18),b=a(2),w=a(40),g=a.n(w),_=a(10),h=a.n(_);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={doctorsProfiles:[]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("/doctors").then((function(t){e.setState(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e.state,{doctorsProfiles:t.data}))}))}},{key:"render",value:function(){var e=this,t=this.props.nextRoute;return s.a.createElement("div",{id:"homepage-section",className:"`content-section "},s.a.createElement("div",{className:"w3-panel w3-purple w3-center w3-text-black"},"Select a Doctor Below to setup a medical appointment with them"),s.a.createElement("div",{id:"doctorprofile",className:"w3-row"},e.state.doctorsProfiles.length>0?e.state.doctorsProfiles.map((function(e){var a="/setAppointment?docId="+e.doc_id;return s.a.createElement("div",{onClick:function(){t(a)},key:e.doc_id,className:"ind-doc w3-col m3 w3-hover-shadow  w3-hover-white w3-margin-bottom"},s.a.createElement(b.b,{to:a},s.a.createElement("img",{alt:"doctor_avatar",src:g.a}),s.a.createElement("div",{className:"doctor-desc"},s.a.createElement("div",null,e.name),s.a.createElement("div",null,"Gender : ",e.gender),s.a.createElement("div",null,"HealthCenter : ",e.healthcare),s.a.createElement("div",null,"Speciaist in : ",e.specialities," "))))})):0===e.state.doctorsProfiles.length?s.a.createElement("div",{className:"w3-panel w3-pale-yellow w3-large w3-center "},"Loading Doctors' Profiles ",s.a.createElement("span",{className:"w3-animate-fade"},"....")," "):s.a.createElement("div",{className:"w3-panel w3-pale-blue w3-large w3-center"},"Oops,No doctors to show")))}}]),t}(s.a.Component),v=(a(68),a(39),a(15));function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={loggedIn_user:{userEmail:"",userName:""},loginStatus:{message:"Fill the Fields below to Login",styling:"w3-center w3-black w3-text-white w3-small"},userCredentials:{username:"",password:""},username_label:{content:"Username",styling:"w3-small w3-text-back"},password_label:{content:"Password",styling:"w3-small w3-text-back"}},a.handleLogin=function(e){e.preventDefault(),new Promise((function(e,t){a.setState(O({},a.state,{username_label:{content:"Username",styling:"w3-small w3-text-back"},password_label:{content:"Password",styling:"w3-small w3-text-back"},loginStatus:{message:"Processing ...",styling:"w3-center w3-black w3-text-white w3-small"}})),e()})).then((function(){a.state.userCredentials.username.length<4||null===a.state.userCredentials.username||""===a.state.userCredentials.username?a.setState(O({},a.state,{username_label:{content:"Username is Required",styling:"w3-small w3-text-red"},loginStatus:{message:"Correct the Highlighted Errors Below",styling:"w3-center w3-black w3-text-red w3-small"}})):a.state.userCredentials.password.length<4||null===a.state.userCredentials.password||""===a.state.userCredentials.password?a.setState(O({},a.state,{password_label:{content:"Passwod is Required",styling:"w3-small w3-text-red"},loginStatus:{message:"Correct the Highlighted Errors Below",styling:"w3-center w3-black w3-text-red w3-small"}})):h.a.post("/login",a.state.userCredentials).then((function(e){"Success"===e.data.loginMsg&&200===e.status?(a.setState(O({},a.state,{username_label:{content:"Username",styling:"w3-small w3-text-back"},password_label:{content:"Password",styling:"w3-small w3-text-back"},loginStatus:{message:"Login Successfull",styling:"w3-center w3-black w3-text-green w3-small"},userCredentials:{username:"",password:""}})),null===a.props.nextRoute?(a.props.history.push("/myaccount"),a.props.loginUser()):(a.props.loginUser(),a.props.history.push(a.props.nextRoute))):"Invalid_login_credentials"===e.data.loginMsg&&200===e.status&&a.setState(O({},a.state,{username_label:{content:"Username",styling:"w3-small w3-text-back"},password_label:{content:"Password",styling:"w3-small w3-text-back"},loginStatus:{message:"Invalid Username and Password Combinations",styling:"w3-center w3-black w3-text-red w3-small"}}))})).catch((function(e){a.setState(O({},a.state,{username_label:{content:"Username",styling:"w3-small w3-text-back"},password_label:{content:"Password",styling:"w3-small w3-text-back"},loginStatus:{message:"We could not complete your request at the moment.Try again later",styling:"w3-center w3-black w3-text-red w3-small"}}))}))})).catch((function(e){return console.log(e)}))},a.handleFormInput=function(e){a.setState(O({},a.state,{userCredentials:O({},a.state.userCredentials,Object(l.a)({},e.target.name,e.target.value))}))},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"login-page w3-container"},s.a.createElement("div",{id:"login-form",className:"w3-card-4 w3-hover-shadow"},s.a.createElement("div",{className:"w3-green w3-text-black w3-center w3-center w3-xlarge"},"Login"),s.a.createElement("p",{className:this.state.loginStatus.styling},this.state.loginStatus.message),s.a.createElement("form",{onSubmit:this.handleLogin},s.a.createElement("label",{htmlFor:"username",className:this.state.username_label.styling,id:"l_username"},this.state.username_label.content),s.a.createElement("input",{onChange:this.handleFormInput,name:"username",value:this.state.userCredentials.username,className:"w3-input w3-center",type:"email",id:"username",placeholder:"Email"}),s.a.createElement("label",{htmlFor:"password",className:this.state.password_label.styling,id:"l_password"},this.state.password_label.content),s.a.createElement("input",{onChange:this.handleFormInput,name:"password",value:this.state.userCredentials.password,className:"w3-input w3-center",type:"password",id:"password",placeholder:"Password"}),s.a.createElement("button",{className:"w3-button w3-black w3-margin-bottom w3-round-xlarge w3-hover-black w3-hover-text-blue",id:"loginbtn",type:"submit"},"Login")),s.a.createElement(b.b,{to:"/signup",className:"w3-text-blue"},"Create an Account")))}}]),t}(s.a.Component),k=Object(v.b)(null,(function(e){return{loginUser:function(){e({type:"set-authentication",status:!0})}}}))(j);function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={form_submission:{status:"Fill the Field Below to Sign Up",apply_style:"w3-small w3-center login_req_status w3-black"},form_status:"Sign up",label_username:{label_Content:"Your FullName",label_style:"w3-text-black"},label_email:{label_Content:"Your Email Address",label_style:"w3-text-black"},label_password:{label_Content:"Desired Password",label_style:"w3-text-black"},label_cpassword:{label_Content:"Confirm Password",label_style:"w3-text-black"},inputs_disable:"false",formInput:{username:"",email:"",password:"",cpassword:""}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=function(t){e.setState(x({},e.state,{formInput:x({},e.state.formInput,Object(l.a)({},t.target.id,t.target.value))}))};return s.a.createElement("div",{id:"login-page w3-container"},s.a.createElement("div",{id:"login-form",className:"w3-card-4 w3-hover-shadow"},s.a.createElement("div",{className:"w3-green w3-text-black w3-center w3-center w3-xlarge"},"Create an Account"),s.a.createElement("p",{className:this.state.form_submission.apply_style},this.state.form_submission.status),s.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a=new Promise((function(t,a){e.setState(x({},e.state,{label_username:{label_Content:"Your FullName",label_style:"w3-text-black w3-small"},label_email:{label_Content:"Your Email Address",label_style:"w3-text-black w3-small"},label_password:{label_Content:"Desired Password",label_style:"w3-text-black w3-small"},label_cpassword:{label_Content:"Confirm Password",label_style:"w3-text-black w3-small"},form_submission:{status:"Processing your request ...",apply_style:"w3-small w3-center login_req_status w3-black w3-text-white"},form_status:"Submitting..."})),t()})),n=new Promise((function(t,a){h.a.post("/signUpUser",e.state.formInput).then((function(e){return e.data})).then((function(e){return t(e)}))}));a.then((function(){return n})).then((function(t){var a;"validation_error"===(a=t).res_status?(e.setState(x({},e.state,{form_submission:{status:"Correct the Highlighted Errors below.",apply_style:"w3-small w3-center login_req_status w3-black w3-text-red"},form_status:"Sign Up"})),a.res_content.forEach((function(t){e.setState(x({},e.state,Object(l.a)({},"label_"+t.param,{label_Content:t.msg,label_style:"w3-text-red w3-small"})))}))):"server_error"===a.res_status?e.setState(x({},e.state,{form_submission:{status:"We cannot Complete Your Request at the Moment.Try again Later.",apply_style:"w3-small w3-center login_req_status w3-black w3-text-red"},form_status:"Sign Up"})):"email_registered"===a.res_status?e.setState(x({},e.state,{form_submission:{status:"The Email adress you provided is already Registered.",apply_style:"w3-small w3-center login_req_status w3-black w3-text-red"},form_status:"Sign Up"})):"success"===a.res_status&&e.setState(x({},e.state,{form_submission:{status:"Registration Was Succesfull.Check your Email inbox to Verify your Account",apply_style:"w3-small w3-center login_req_status w3-black w3-text-green"},form_status:"Sign Up",formInput:{username:"",email:"",password:"",cpassword:""}}))}))},className:"w3-margin-bottom"},s.a.createElement("label",{htmlFor:"username",id:"l_username",className:this.state.label_username.label_style},this.state.label_username.label_Content),s.a.createElement("input",{onChange:t,value:this.state.formInput.username,className:"w3-input w3-center",name:"username",type:"text",id:"username",placeholder:"FullName"}),s.a.createElement("label",{htmlFor:"email",className:this.state.label_email.label_style,id:"l_email"},this.state.label_email.label_Content),s.a.createElement("input",{onChange:t,value:this.state.formInput.email,className:"w3-input w3-center",name:"email",type:"email",id:"email",placeholder:"email"}),s.a.createElement("label",{htmlFor:"password",className:this.state.label_password.label_style,id:"l_password"},this.state.label_password.label_Content),s.a.createElement("input",{onChange:t,value:this.state.formInput.password,className:"w3-input w3-center",name:"password",type:"password",id:"password",placeholder:"Password"}),s.a.createElement("label",{htmlFor:"cpassword",className:this.state.label_cpassword.label_style,id:"l_cpassword"},this.state.label_cpassword.label_Content),s.a.createElement("input",{onChange:t,value:this.state.formInput.cpassword,className:"w3-input w3-center",type:"password",name:"cpassword",id:"cpassword",placeholder:"Confirm password"}),s.a.createElement("button",{className:"w3-button w3-black w3-margin-bottom w3-round-xlarge w3-hover-black w3-hover-text-blue",id:"loginbtn",type:"submit"},this.state.form_status)),s.a.createElement(b.b,{to:"/login",className:"w3-padding ",style:{color:"purple",textDecoration:"underline",fontSize:"1em",marginTop:"100px"}},"Login to your account")))}}]),t}(s.a.Component);function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={booking_status:"Submit",setAnotherAppoin:"false",formData:{desired_date:"",appointment_subject:"",a_information:"",doc_to_book:""},doc_name:"",l_appointment_reason:{styling:"w3-tiny w3-text-black",content:"Describe Your Appointment Subject"},l_desiredDate:{label_style:"w3-tiny ",content:"Pick A Desired Appointment Date "},mandatory_att:"*",doc_avaiability:"not-checked",form_submission_status:{content:"Step 1 : Check Doctor Availability.",style:"login_req_status w3-black w3-center w3-small"}},a.anotherAppointment=function(){a.setState(A({},a.state,{booking_status:"Submit",setAnotherAppoin:"false",formData:{desired_date:"",appointment_subject:"",a_information:"",doc_to_book:""},l_desiredDate:{label_style:"w3-tiny ",content:"Pick A Desired Appointment Date "},mandatory_att:"*",doc_avaiability:"not-checked",form_submission_status:{content:"Step 1 : Check Doctor Availability.",style:"login_req_status w3-black w3-center w3-small w3-text-white"}}))},a.handleFormSubmission=function(e){e.preventDefault(),e.target[1].value.length<1||""===e.target[1].value||void 0===e.target[0].value?a.setState(A({},a.state,{l_appointment_reason:{styling:"w3-tiny w3-text-red ",content:"Describe Your Appointment Subject"}})):(a.setState(A({},a.state,{l_appointment_reason:{styling:"w3-tiny w3-text-black",content:"Describe Your Appointment Subject"},l_desiredDate:{label_style:"w3-tiny ",content:"Pick A Desired Appointment Date "},booking_status:"Submitting ...",form_submission_status:{content:"Step 2 : Processing Your Appointment Request.",style:"login_req_status w3-black w3-text-white w3-center w3-small"}})),fetch("/userStatus").then((function(e){return e.json()})).then((function(e){if(!0===e.authentication&&void 0!==e.user){a.setState(A({},a.state,{formData:A({},a.state.formData,{bookedBy:e.user.patientEmail})}));var t=a.state.formData;h.a.post("/setAppointment",t).then((function(e){console.log(e.data),200===e.status&&"Success"===e.data?a.setState(A({},a.state,{setAnotherAppoin:"true",booking_status:"Submit",doc_avaiability:"not-checked",l_desiredDate:{label_style:"w3-tiny ",content:"Appointment Succesfully Scheduled for :"},formData:A({},a.state.formData,{appointment_subject:"",a_information:"",doc_to_book:""}),form_submission_status:{content:"Success. Your appointment with "+a.state.doc_name+" has been scheduled for "+a.state.formData.desired_date+" Succesfully",style:"login_req_status w3-black  w3-center w3-tiny"}})):200===e.status&&"Empty_Appointment_Subject"===e.data?a.setState(A({},a.state,{l_appointment_reason:{styling:"w3-tiny w3-text-red ",content:"Describe Your Appointment Subject"},booking_status:"Submit",doc_avaiability:"not-checked",l_desiredDate:{label_style:"w3-tiny ",content:"Appointment Succesfully Scheduled for :"},formData:A({},a.state.formData,{appointment_subject:"",a_information:"",doc_to_book:""}),form_submission_status:{content:"Correct the Errors Highlighted in Red.",style:"login_req_status w3-black  w3-center w3-tiny"}})):200===e.status&&"Doctor_not_Found"===e.data?a.setState(A({},a.state,{booking_status:"Submit",doc_avaiability:"not-checked",l_desiredDate:{label_style:"w3-tiny ",content:"Pick A Desired Appointment Date "},formData:{desired_date:"",appointment_subject:"",a_information:"",doc_to_book:""},form_submission_status:{content:"The doctor with an ID of "+a.props.location.search.slice(7)+" could not be found on our database.Try Reloading the Page",style:"login_req_status w3-text-red w3-black  w3-center w3-small"}})):"Choose a Future Date"===e.data?a.setState(A({},a.state,{booking_status:"Submit",doc_avaiability:"not-checked",l_desiredDate:{label_style:"w3-tiny w3-text-red",content:"Choose a date in the future."},formData:A({},a.state.formData,{appointment_subject:"",a_information:"",doc_to_book:""}),form_submission_status:{content:"Correct the Errors Highlighted in Red.",style:"login_req_status w3-black w3-text-red w3-center w3-tiny"}})):a.setState(A({},a.state,{booking_status:"Submit",doc_avaiability:"not-checked",l_desiredDate:{label_style:"w3-tiny ",content:"Pick A Desired Appointment Date "},formData:{desired_date:"",appointment_subject:"",a_information:"",doc_to_book:""},form_submission_status:{content:"We could not Complete your Request at the Moment.Try Again Later",style:"login_req_status w3-text-red w3-black  w3-center w3-small"}}))}))}else!1===e.authentication&&void 0===e.user&&a.setState(A({},a.state,{l_appointment_reason:{styling:"w3-tiny w3-text-black",content:"Describe Your Appointment Subject"},l_desiredDate:{label_style:"w3-tiny ",content:"Pick A Desired Appointment Date "},booking_status:"Submitting ...",form_submission_status:{content:"Error :You Need To be Logged In to Proceed.",style:"login_req_status w3-black w3-text-red  w3-center w3-small"}}))})))},a.checkAvailability=function(e){a.setState(A({},a.state,{l_desiredDate:{label_style:"w3-text-purple w3-tiny",content:"Checking Availability Status..."},mandatory_att:"",doc_avaiability:"not-checked",form_submission_status:{content:"Step 1 : Check Doctor Availability.",style:"login_req_status w3-black w3-text-white w3-center w3-small"}}));var t=a.props.location.search.slice(7),n=e.target.value;fetch("/doctorAvailability?date_picked="+e.target.value+"&docId="+t).then((function(e){return e.json()})).then((function(e){"Doc_Available"===e?a.setState(A({},a.state,{l_desiredDate:{label_style:"w3-tiny w3-text-green",content:"Doctor Available on the Selected Date ."},formData:A({},a.state.formData,{desired_date:n,doc_to_book:a.props.location.search.slice(7)}),doc_avaiability:"available",form_submission_status:{content:"Step 2 : Describe your Appointment Subject.",style:"login_req_status w3-text-white w3-black w3-center w3-small"}})):"Doctor_not_Found"===e?a.setState(A({},a.state,{l_desiredDate:{label_style:"w3-tiny w3-text-red",content:"Doctor with an ID of "+a.props.location.search.slice(7)+" cannot be Found."},doc_avaiability:"Doc_Not_Available"})):a.setState(A({},a.state,{l_desiredDate:{label_style:"w3-tiny w3-text-red",content:"Doctor Not Available on "+n},doc_avaiability:"Doc_Not_Available"}))})).catch((function(e){return console.log(e)}))},a.handleInput=function(e){a.setState(A({},a.state,{formData:A({},a.state.formData,Object(l.a)({},e.target.id,e.target.value))}))},a.varInitializeForm=function(){return"available"===a.state.doc_avaiability?s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"appointment_subject",id:"a_subject",className:a.state.l_appointment_reason.styling}," ",a.state.l_appointment_reason.content,"  ",s.a.createElement("span",{className:"w3-text-red"},"*")),s.a.createElement("input",{value:a.state.formData.appointment_subject,onChange:a.handleInput,className:"w3-input w3-center w3-small",type:"text-Area",id:"appointment_subject",name:"appointment_subject",placeholder:"Describe your Reasons for requesting an appointment"}),s.a.createElement("label",{htmlFor:"a_information",id:"a_info",className:"w3-tiny"},"Additional Information"),s.a.createElement("input",{value:a.state.formData.a_information,onChange:a.handleInput,className:"w3-small w3-input w3-center",type:"text",id:"a_information",name:"add_info",placeholder:"Additional Information"}),s.a.createElement("button",{className:" w3-button w3-black w3-margin-bottom w3-round-xlarge w3-hover-black w3-hover-text-blue",id:"loginbtn",type:"submit"},a.state.booking_status)):"Doc_Not_Available"===a.state.doc_avaiability?null:"true"===a.state.setAnotherAppoin?s.a.createElement("button",{onClick:a.anotherAppointment,className:"w3-center w3-button w3-pale-green w3-margin-bottom w3-margin-top  w3-hover-green w3-hover-text-black",style:{width:"60%",marginLeft:"20%"}},"Set Another Appointment"):null},a.check_date_input=function(){return"true"!==a.state.setAnotherAppoin?s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"pickDate",id:"l_pickDate",className:a.state.l_desiredDate.label_style}," ",a.state.l_desiredDate.content,s.a.createElement("span",{className:"w3-small w3-text-red"},a.state.mandatory_att)),s.a.createElement("input",{value:a.state.formData.desired_date,onChange:a.checkAvailability,className:"w3-input w3-small w3-center",name:"desired_app_date",type:"date",id:"pickDate",placeholder:"Choose Desired Date"})):null},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/doctor"+this.props.location.search).then((function(e){return e.json()})).then((function(t){0===t.length?e.setState(A({},e.state,{doc_name:"No_Doctor_Found"})):t.forEach((function(t){e.setState(A({},e.state,{doc_name:t.name}))}))}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{id:"login-page w3-container"},""===e.state.doc_name?s.a.createElement("div",{className:"w3-panel w3-pale-yellow w3-text-black w3-center"},"Fetching Doctor's Profile. Please Wait ..."):"No_Doctor_Found"===e.state.doc_name?s.a.createElement("div",{className:"w3-panel w3-pale-red w3-text-black w3-center w3-large w3-border w3-border-black"},"Oops.We couldn't find the Doctor with an id of ",e.props.location.search.slice(7),". ",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(b.b,{className:"w3-small w3-button w3-black w3-text-white w3-hover-black w3-hover-shadow w3-round-xxlarge",to:"/"},"Click here to Find Available Doctors")," "):s.a.createElement("div",{id:"login-form",className:"w3-card-4 w3-hover-shadow"},s.a.createElement("div",{className:"w3-blue w3-text-black w3-center w3-center "},"Complete the form below to Book an Appointment with ",s.a.createElement("br",null)," ",s.a.createElement("span",{style:{fontWeight:"bold"}},e.state.doc_name)),s.a.createElement("p",{className:e.state.form_submission_status.style},e.state.form_submission_status.content),s.a.createElement("form",{className:"w3-margin-bottom",onSubmit:e.handleFormSubmission},e.check_date_input(),e.varInitializeForm())))}}]),t}(s.a.Component);var C=Object(v.b)((function(e){return{user_is_loggedIN:e.loggedIn}}))((function(e){var t=e.logoutUser;return s.a.createElement("div",{className:" w3-center",id:"navbar-section"},s.a.createElement("div",{className:"nav-items"},!0===e.user_is_loggedIN?s.a.createElement("div",null,s.a.createElement(b.b,{className:"navItem ",to:"/"},"Home"),s.a.createElement(b.b,{className:"navItem",to:"/myaccount"},"My Account"),s.a.createElement(b.b,{className:"navItem ",to:"/about"},"About"),s.a.createElement(b.b,{className:"navItem w3-hover-text-red",onClick:t,to:"/"},"Logout")):!1===e.user_is_loggedIN?s.a.createElement("div",null,s.a.createElement(b.b,{className:"navItem w3-hover-text-white",to:"/"},"Home"),s.a.createElement(b.b,{className:"navItem w3-hover-text-white",to:"/login"},"Login"),s.a.createElement(b.b,{className:"navItem w3-hover-text-white",to:"/signup"},"Sign Up"),s.a.createElement(b.b,{className:"navItem w3-hover-text-white",to:"/about"},"About")):void 0))}));function I(){return s.a.createElement("div",{className:"w3-center",id:"about-section"},s.a.createElement("div",{style:{fontSize:"1.2em"}},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugit animi excepturi assumenda provident inventore sequi distinctio veniam blanditiis, alias minus iure, porro cupiditate, reiciendis minima reprehenderit debitis. Dolorum, nam.",s.a.createElement("br",null),s.a.createElement("br",null),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit perspiciatis nobis provident error officia! Minima quam ad odit tenetur distinctio accusantium, porro sunt voluptate assumenda, iure, vitae dicta voluptatibus doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nisi. A accusantium id iusto, repellat dignissimos consectetur sequi totam reiciendis perspiciatis consequuntur expedita quam optio culpa molestias quo eum officia."))}var R=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={userData:null},a.redirectUser=function(){a.props.history.push("/login")},a.NoloadedData=function(){return null===a.state.userData?s.a.createElement("div",null,s.a.createElement("div",{className:"w3-panel w3-pale-yellow"},"Loading your Appointments ",s.a.createElement("span",{className:"w3-animate-fading"},"....")," ")):null!==a.state.userData&&a.state.userData.length<1?s.a.createElement("div",null,s.a.createElement("div",{className:"w3-panel w3-pale-yellow"},"You have no appointments Currently")):void 0},a.loadedData=function(){if(null!==a.state.userData)return a.state.userData.map((function(e){return s.a.createElement("tr",{key:e._id},s.a.createElement("td",null,e.appointment_date),s.a.createElement("td",null,e.docname),s.a.createElement("td",null,e.subject),s.a.createElement("td",null,e.add_info))}))},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("/user/dashboard").then((function(t){null!==t.data.data&&"success"===t.data.message?e.setState({userData:t.data.data}):e.redirectUser()})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"w3-center w3-margin-top"},s.a.createElement("table",{className:"w3-table-all"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Appointment Schedule"),s.a.createElement("th",null,"Doctor Booked"),s.a.createElement("th",null,"Appointment Subject"),s.a.createElement("th",null,"Additional Information"))),s.a.createElement("tbody",null,this.loadedData())),this.NoloadedData())}}]),t}(s.a.Component),F=Object(v.b)((function(e){return{logged_status:e.loggedIn}}))(R);function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function U(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var L=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={profile_details:{email:null,displayName:null},next_route:null},a.AuthenticatedLogin=function(e){a.setState(U({},a.state,{user_loggenIn:!0,profile_details:{email:e.patientEmail,displayName:e.patientName}}))},a.setNextRoute=function(e){a.setState(U({},a.state,{next_route:e}))},a.handleRoutes=function(){return!1===a.props.user_loggenIn?s.a.createElement(s.a.Fragment,null,s.a.createElement(p.c,null,s.a.createElement(p.a,{exact:!0,path:"/",render:function(e){return s.a.createElement(y,Object.assign({nextRoute:a.setNextRoute},e))}}),s.a.createElement(p.a,{path:"/setAppointment",render:function(e){return s.a.createElement(k,Object.assign({nextRoute:a.state.next_route},e,{AuthenticatedLogin:a.AuthenticatedLogin}))}}),s.a.createElement(p.a,{path:"/signup",render:function(e){return s.a.createElement(S,Object.assign({nextRoute:a.state.next_route},e))}}),s.a.createElement(p.a,{path:"/login",render:function(e){return s.a.createElement(k,Object.assign({nextRoute:a.state.next_route},e))}}),s.a.createElement(p.a,{path:"/logout",render:function(e){return s.a.createElement(y,Object.assign({nextRoute:a.setNextRoute},e))}}),s.a.createElement(p.a,{path:"/about",component:I}),s.a.createElement(p.a,{path:"/myaccount",render:function(e){return s.a.createElement(k,Object.assign({},e,{AuthenticatedLogin:a.AuthenticatedLogin}))}}),s.a.createElement(p.a,{path:"/*",render:function(e){return s.a.createElement(y,Object.assign({nextRoute:a.setNextRoute},e))}}))):!0===a.props.user_loggenIn?s.a.createElement(s.a.Fragment,null,s.a.createElement(p.c,null,s.a.createElement(p.a,{exact:!0,path:"/",render:function(e){return s.a.createElement(y,Object.assign({nextRoute:a.setNextRoute},e))}}),s.a.createElement(p.a,{path:"/setAppointment",render:function(e){return s.a.createElement(P,Object.assign({},e,{userEmail:a.state.profile_details.email,nextRoute:a.state.next_route}))}}),s.a.createElement(p.a,{path:"/logout",render:function(e){return s.a.createElement(y,Object.assign({nextRoute:a.setNextRoute},e))}}),s.a.createElement(p.a,{path:"/myaccount",render:function(e){return s.a.createElement(F,Object.assign({nextRoute:a.setNextRoute},e))}}),s.a.createElement(p.a,{path:"/about",render:function(e){return s.a.createElement(I,Object.assign({nextRoute:a.setNextRoute},e))}}),s.a.createElement(p.a,{path:"/*",render:function(e){return s.a.createElement(y,Object.assign({nextRoute:a.setNextRoute},e))}}))):void 0},a.logoutUser=function(){h.a.get("/logout").then((function(e){"User_logged_out"===e.data&&(a.setState(U({},a.state,{profile_details:{email:null,displayName:null},next_route:null})),a.props.logUserOut())})).catch((function(e){return console.log(e)}))},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/userStatus").then((function(e){return e.json()})).then((function(t){!0===t.authentication&&void 0!==t.user?(e.setState(U({},e.state,{user_loggenIn:t.authentication,profile_details:{email:t.user.patientEmail,displayName:t.user.patientName}})),e.props.updateStore(!0)):!1===t.authentication&&void 0===t.user&&(e.setState(U({},e.state,{user_loggenIn:!1,profile_details:{email:null,displayName:null}})),e.props.updateStore(!1))}))}},{key:"render",value:function(){return s.a.createElement(b.a,null,s.a.createElement("div",{id:"page-wrapper"},s.a.createElement("div",{id:"content-wrap"},s.a.createElement(C,{loggeduser:this.state.profile_details,logoutUser:this.logoutUser,Userauthentication:this.state.user_loggenIn}),this.handleRoutes()),s.a.createElement("div",{id:"footer-section"},s.a.createElement("p",{style:{textAlign:"center"}},"Copyright  2019"))))}}]),t}(s.a.Component),Y=Object(v.b)((function(e){return{user_loggenIn:e.loggedIn}}),(function(e){return{updateStore:function(t){e({type:"set-authentication",status:t})},logUserOut:function(){e({type:"log_user_out",status:!1})}}}))(L);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(23);function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function W(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var H={loggedIn:null},T=Object(M.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;return"set-authentication"===t.type&&!0===t.status?e=W({},e,{loggedIn:!0}):"set-authentication"===t.type&&!1===t.status?e=W({},e,{loggedIn:!1}):"log_user_out"===t.type&&!1===t.status&&(e=W({},e,{loggedIn:!1})),e}));o.a.render(s.a.createElement(v.a,{store:T}," ",s.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.149f0661.chunk.js.map