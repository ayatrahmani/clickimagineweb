(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{GrWW:function(t,e,i){"use strict";i.r(e),i.d(e,"RegistrationModule",(function(){return Z}));var r=i("ofXK"),a=i("tyNb"),s=i("3Pt+"),c=i("e6j4");class n{static MatchPassword(t){let e=t.get("password").value;if(t.get("confirmPassword").touched||t.get("confirmPassword").dirty){if(e==t.get("confirmPassword").value)return null;t.get("confirmPassword").setErrors({MatchPassword:!0})}}}var o=i("R0Ic");const b=[Object(o.m)("slideView",[Object(o.j)("true",Object(o.k)({transform:"translateX(100%)",opacity:0})),Object(o.j)("false",Object(o.k)({transform:"translateX(0)",opacity:1})),Object(o.l)("0 => 1",Object(o.e)("500ms",Object(o.k)({transform:"translateX(0)",opacity:1}))),Object(o.l)("1 => 1",Object(o.e)("500ms",Object(o.k)({transform:"translateX(100%)",opacity:0})))]),Object(o.m)("slideInOut",[Object(o.l)(":enter",[Object(o.k)({transform:"translateY(20%)",opacity:0}),Object(o.e)("500ms ease-in",Object(o.k)({transform:"translateY(0%)",opacity:1}))]),Object(o.l)(":leave",[Object(o.k)({transform:"translateX(0%)",opacity:1}),Object(o.e)("0ms ease-in",Object(o.k)({transform:"translateY(100%)",opacity:0}))])]),Object(o.m)("slideDownToUP",[Object(o.l)(":enter",[Object(o.k)({transform:"translateY(-20%)",opacity:0}),Object(o.e)("500ms ease-in",Object(o.k)({transform:"translateY(0%)",opacity:1}))]),Object(o.l)(":leave",[Object(o.k)({transform:"translateX(0%)",opacity:1}),Object(o.e)("0ms ease-in",Object(o.k)({transform:"translateY(100%)",opacity:0}))])]),Object(o.m)("slideRightLeft",[Object(o.l)(":enter",[Object(o.k)({transform:"translateX(100%)",opacity:0}),Object(o.e)("800ms ease-in",Object(o.k)({transform:"translateX(0%)",opacity:1}))]),Object(o.l)(":leave",[Object(o.k)({transform:"translateX(0%)",opacity:1}),Object(o.e)("0ms ease-in",Object(o.k)({transform:"translateX(100%)",opacity:0}))])]),Object(o.m)("fade",[Object(o.l)("void => *",[Object(o.k)({opacity:0}),Object(o.e)(2e3,Object(o.k)({opacity:1}))])])];Object(o.m)("fadeAnimation",[Object(o.l)("* => *",[Object(o.h)(":enter",[Object(o.k)({opacity:0})],{optional:!0}),Object(o.h)(":leave",[Object(o.k)({opacity:1}),Object(o.e)("0.5s",Object(o.k)({opacity:0}))],{optional:!0}),Object(o.h)(":enter",[Object(o.k)({opacity:0}),Object(o.e)("0.5s",Object(o.k)({opacity:1}))],{optional:!0})])]);var l=i("Kj3r"),m=i("/uUt"),u=i("fXoL"),d=i("djld"),p=i("oYEG"),f=i("dCrI"),g=i("1OXT"),h=i("InFF"),S=i("uF0q"),k=i("wZkO"),v=i("kmnG"),O=i("qFsG"),j=i("NFeN"),R=i("e7yV"),N=i("bSwM"),y=i("bv9b"),w=i("bTqV");function A(t,e){1&t&&(u.Sb(0,"div",33),u.Ob(1,"mat-progress-bar",34),u.Rb())}function E(t,e){1&t&&u.Gc(0," First ")}function I(t,e){1&t&&(u.Sb(0,"span"),u.Gc(1," Email is required. "),u.Rb())}function G(t,e){1&t&&(u.Sb(0,"span"),u.Gc(1," Please enter valid email. "),u.Rb())}function U(t,e){1&t&&(u.Sb(0,"span"),u.Gc(1," Email already exists. Please enter another one. "),u.Rb())}function _(t,e){if(1&t&&(u.Sb(0,"mat-error",35),u.Ec(1,I,2,0,"span",36),u.Ec(2,G,2,0,"span",36),u.Ec(3,U,2,0,"span",36),u.Rb()),2&t){const t=u.gc();u.Ab(1),u.mc("ngIf",t.email.errors.required),u.Ab(1),u.mc("ngIf",t.email.errors.email),u.Ab(1),u.mc("ngIf",t.email.hasError("userEmailExist"))}}function F(t,e){1&t&&u.Gc(0," Second ")}function T(t,e){1&t&&(u.Sb(0,"span"),u.Gc(1," First Name is required. "),u.Rb())}function q(t,e){if(1&t&&(u.Sb(0,"mat-error",35),u.Ec(1,T,2,0,"span",36),u.Rb()),2&t){const t=u.gc();u.Ab(1),u.mc("ngIf",t.firstName.errors.required)}}function x(t,e){1&t&&(u.Sb(0,"span"),u.Gc(1," Last Name is required. "),u.Rb())}function P(t,e){if(1&t&&(u.Sb(0,"mat-error",35),u.Ec(1,x,2,0,"span",36),u.Rb()),2&t){const t=u.gc();u.Ab(1),u.mc("ngIf",t.lastName.errors.required)}}function L(t,e){1&t&&(u.Sb(0,"span"),u.Gc(1," User name already exists. Please try with another one. "),u.Rb())}function C(t,e){if(1&t&&(u.Sb(0,"mat-error",35),u.Ec(1,L,2,0,"span",36),u.Rb()),2&t){const t=u.gc();u.Ab(1),u.mc("ngIf",t.userName.hasError("userNameExist"))}}function X(t,e){if(1&t){const t=u.Tb();u.Sb(0,"button",37),u.cc("click",(function(){return u.wc(t),u.gc().next()})),u.Gc(1," Next"),u.Sb(2,"span",38),u.Gc(3,"navigate_next "),u.Rb(),u.Rb()}if(2&t){const t=u.gc();u.mc("@slideInOut",void 0)("disabled",!t.firstStep.valid)}}function M(t,e){if(1&t){const t=u.Tb();u.Sb(0,"button",39),u.cc("click",(function(){return u.wc(t),u.gc().prev()})),u.Gc(1," Previous"),u.Sb(2,"span",38),u.Gc(3,"navigate_before "),u.Rb(),u.Rb()}2&t&&u.mc("@slideInOut",void 0)}function Y(t,e){if(1&t){const t=u.Tb();u.Sb(0,"button",40),u.cc("click",(function(){u.wc(t);const e=u.gc();return e.signUpAction(e.clickSignUpForm)})),u.Gc(1," Sign Up"),u.Sb(2,"span",38),u.Gc(3,"how_to_reg "),u.Rb(),u.Rb()}if(2&t){const t=u.gc();u.mc("@slideDownToUP",void 0)("disabled",!t.clickSignUpForm.valid)}}function D(t,e){if(1&t){const t=u.Tb();u.Sb(0,"label",41),u.Gc(1,"Already have an account? "),u.Sb(2,"a",42),u.cc("click",(function(){return u.wc(t),u.gc().navigateToLogin()})),u.Gc(3,"Log in"),u.Rb(),u.Rb()}2&t&&u.mc("@slideDownToUP",void 0)}const K=function(t){return{checkError:t}},J=[{path:"",component:(()=>{class t{constructor(t,e,i,r,a,s,n){this._fb=t,this._authServe=e,this._share=i,this._navigate=r,this._userAuth=a,this._storageServe=s,this._globalApi=n,this.submitted=!1,this.hide=!0,this.selectedTab=0,this.isPasswordError=!1,this.matcher=new c.a,this.isLoader=!1}ngOnInit(){this.initForm(),this.checkUserName(),this.checkEmail(),!0===this._userAuth.isLogin()&&this._navigate.navigateUrls("dashboard")}initForm(){this.clickSignUpForm=this._fb.group({firstStep:this._fb.group({email:[null,[s.t.required,s.t.email]],password:[null,[s.t.required]],confirmPassword:[null,[s.t.required]]},{validator:n.MatchPassword}),lastStep:this._fb.group({firstName:[null,[s.t.required]],lastName:[null,[s.t.required]],userName:[null],term:[null,[s.t.required]]})})}get firstStep(){return this.clickSignUpForm.get("firstStep")}get lastStep(){return this.clickSignUpForm.get("lastStep")}get firstName(){return this.clickSignUpForm.get("lastStep").get("firstName")}get lastName(){return this.clickSignUpForm.get("lastStep").get("lastName")}get userName(){return this.clickSignUpForm.get("lastStep").get("userName")}get term(){return this.clickSignUpForm.get("lastStep").get("term")}get email(){return this.clickSignUpForm.get("firstStep").get("email")}get password(){return this.clickSignUpForm.get("firstStep").get("password")}get confirmPassword(){return this.clickSignUpForm.get("firstStep").get("confirmPassword")}checkUserName(){this.userName.valueChanges.pipe(Object(l.a)(500),Object(m.a)()).subscribe(t=>{this.userName.valid&&""!=t&&(this.isLoader=!0,this.userName.markAsDirty(),this._globalApi.userNameExist({userName:t.trim()}).subscribe(t=>{this.isLoader=!1},t=>{this.userName.setErrors({userNameExist:!0}),this.isLoader=!1}))})}checkEmail(){this.email.valueChanges.pipe(Object(l.a)(500),Object(m.a)()).subscribe(t=>{this.email.valid&&(this.isLoader=!0,this._globalApi.userEmailExist({email:t.trim()}).subscribe(t=>{!0===t.isExist&&this.email.setErrors({userEmailExist:!0}),this.isLoader=!1}))})}next(){this.firstStep.markAllAsTouched(),setTimeout(()=>{this.firstStep.markAsUntouched()},1e3),this.firstStep.valid&&(this.selectedTab=1)}prev(){this.selectedTab=0}signUpAction(t){if(this.submitted=!0,this.clickSignUpForm.valid){let e=t.value;e.lastStep.email=e.firstStep.email,e.lastStep.password=e.firstStep.password,delete e.lastStep.term,this._authServe.userSignUp(e.lastStep).subscribe(t=>{this._share.showAlertSuccessMessage.next(t.message),this.loginAttempAfterSuccess(e.lastStep)})}}loginAttempAfterSuccess(t){this._authServe.login({email:t.email,password:t.password}).subscribe(t=>{this._storageServe.saveToken(t.user.token),this._userAuth.redirectMethod()},t=>{this._navigate.navigateUrls("login")})}navigateToLogin(){this._navigate.navigateUrls("login")}}return t.\u0275fac=function(e){return new(e||t)(u.Nb(s.d),u.Nb(d.a),u.Nb(p.a),u.Nb(f.a),u.Nb(g.a),u.Nb(h.a),u.Nb(S.a))},t.\u0275cmp=u.Hb({type:t,selectors:[["app-registration"]],decls:62,vars:19,consts:[[1,"click-rg-wrapper"],[1,"click-container-sec"],[1,"click-rg-inner"],[1,"click-left-rg"],["alt","logo","src","assets/layouts/images/logo.png"],[1,"click-right-rg"],[1,"sign-up-form"],["class","loader-signup",4,"ngIf"],[3,"formGroup"],[1,"sign-up-inner"],[1,"rg-tab-click"],[1,"rg-tab-body"],[3,"selectedIndex"],["mat-tab-label",""],[1,"tab-content-click"],["formGroupName","firstStep",1,"click-form","click-form-vertical"],[1,"click-form-row"],["appearance","outline"],["matInput","","required","","formControlName","email",3,"errorStateMatcher"],["matSuffix","",1,"secondary-text"],["class","form-error",4,"ngIf"],[3,"form"],["formGroupName","lastStep",1,"click-form","click-form-vertical"],["matInput","","required","","formControlName","firstName"],["matInput","","required","","formControlName","lastName"],["matInput","","formControlName","userName"],[1,"form-youxta-row",3,"ngClass"],["formControlName","term","required",""],[1,"rg-tab-footer"],["mat-stroked-button","","class","btn-click btn-signup","type","button",3,"disabled","click",4,"ngIf"],["mat-stroked-button","","class","btn-click btn-signup","type","button",3,"click",4,"ngIf"],["mat-stroked-button","","class","btn-click btn-signup",3,"disabled","click",4,"ngIf"],["class","al-tag-rg",4,"ngIf"],[1,"loader-signup"],["mode","query"],[1,"form-error"],[4,"ngIf"],["mat-stroked-button","","type","button",1,"btn-click","btn-signup",3,"disabled","click"],[1,"material-icons","next-btn"],["mat-stroked-button","","type","button",1,"btn-click","btn-signup",3,"click"],["mat-stroked-button","",1,"btn-click","btn-signup",3,"disabled","click"],[1,"al-tag-rg"],["href","javascript:void(0)","title","login",3,"click"]],template:function(t,e){1&t&&(u.Sb(0,"div",0),u.Sb(1,"div",1),u.Sb(2,"div",2),u.Sb(3,"div",3),u.Sb(4,"div"),u.Ob(5,"img",4),u.Rb(),u.Rb(),u.Sb(6,"div",5),u.Sb(7,"div",6),u.Ec(8,A,2,0,"div",7),u.Sb(9,"form",8),u.Sb(10,"div",9),u.Sb(11,"h2"),u.Gc(12,"Join the Click Imagine"),u.Rb(),u.Sb(13,"h3"),u.Gc(14,"Download free photos and videos powered by a community of photographers."),u.Rb(),u.Sb(15,"div",10),u.Sb(16,"div",11),u.Sb(17,"mat-tab-group",12),u.Sb(18,"mat-tab"),u.Ec(19,E,1,0,"ng-template",13),u.Sb(20,"div",14),u.Sb(21,"div",15),u.Sb(22,"div",16),u.Sb(23,"mat-form-field",17),u.Sb(24,"mat-label"),u.Gc(25,"Email"),u.Rb(),u.Ob(26,"input",18),u.Sb(27,"mat-icon",19),u.Gc(28," mail "),u.Rb(),u.Ec(29,_,4,3,"mat-error",20),u.Rb(),u.Rb(),u.Ob(30,"app-password-share",21),u.Rb(),u.Rb(),u.Rb(),u.Sb(31,"mat-tab"),u.Ec(32,F,1,0,"ng-template",13),u.Sb(33,"div",22),u.Sb(34,"div",16),u.Sb(35,"mat-form-field",17),u.Sb(36,"mat-label"),u.Gc(37,"First Name"),u.Rb(),u.Ob(38,"input",23),u.Ec(39,q,2,1,"mat-error",20),u.Rb(),u.Rb(),u.Sb(40,"div",16),u.Sb(41,"mat-form-field",17),u.Sb(42,"mat-label"),u.Gc(43,"Last Name"),u.Rb(),u.Ob(44,"input",24),u.Ec(45,P,2,1,"mat-error",20),u.Rb(),u.Rb(),u.Sb(46,"div",16),u.Sb(47,"mat-form-field",17),u.Sb(48,"mat-label"),u.Gc(49,"Username"),u.Rb(),u.Ob(50,"input",25),u.Ec(51,C,2,1,"mat-error",20),u.Rb(),u.Rb(),u.Sb(52,"div",26),u.Sb(53,"mat-checkbox",27),u.Gc(54," I accept the terms and conditions of Click Imagine."),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(55,"div",28),u.Sb(56,"div"),u.Ec(57,X,4,2,"button",29),u.Ec(58,M,4,1,"button",30),u.Ec(59,Y,4,2,"button",31),u.Rb(),u.Sb(60,"div"),u.Ec(61,D,4,1,"label",32),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb()),2&t&&(u.Ab(8),u.mc("ngIf",e.isLoader),u.Ab(1),u.mc("formGroup",e.clickSignUpForm),u.Ab(2),u.mc("@slideInOut",void 0),u.Ab(2),u.mc("@slideInOut",void 0),u.Ab(2),u.mc("@slideDownToUP",void 0),u.Ab(2),u.mc("selectedIndex",e.selectedTab),u.Ab(9),u.mc("errorStateMatcher",e.matcher),u.Ab(3),u.mc("ngIf",(e.email.touched||e.email.dirty)&&e.email.invalid),u.Ab(1),u.mc("form",e.clickSignUpForm.controls.firstStep),u.Ab(9),u.mc("ngIf",(e.firstName.touched||e.firstName.dirty)&&e.firstName.invalid),u.Ab(6),u.mc("ngIf",(e.lastName.touched||e.lastName.dirty)&&e.lastName.invalid),u.Ab(6),u.mc("ngIf",(e.userName.touched||e.userName.dirty)&&e.userName.invalid),u.Ab(1),u.mc("ngClass",u.qc(17,K,(e.term.touched||e.term.dirty)&&e.term.invalid)),u.Ab(5),u.mc("ngIf",0===e.selectedTab),u.Ab(1),u.mc("ngIf",1===e.selectedTab),u.Ab(1),u.mc("ngIf",1===e.selectedTab),u.Ab(2),u.mc("ngIf",0===e.selectedTab))},directives:[r.m,s.v,s.o,s.g,k.b,k.a,k.c,s.h,v.c,v.f,O.b,s.c,s.s,s.n,s.f,j.a,v.g,R.a,r.k,N.a,N.c,y.a,v.b,w.a],styles:[".pass-suc[_ngcontent-%COMP%]{color:green}"],data:{animation:[b]}}),t})()}];let V=(()=>{class t{}return t.\u0275mod=u.Lb({type:t}),t.\u0275inj=u.Kb({factory:function(e){return new(e||t)},imports:[[a.g.forChild(J)],a.g]}),t})();var W=i("ADsi"),H=i("nYuy");let Z=(()=>{class t{}return t.\u0275mod=u.Lb({type:t}),t.\u0275inj=u.Kb({factory:function(e){return new(e||t)},imports:[[r.c,V,W.a,H.a]]}),t})()}}]);