(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{LZlb:function(t,i,r){"use strict";r.r(i),r.d(i,"LoginModule",(function(){return _}));var o=r("ofXK"),e=r("tyNb"),n=r("3Pt+"),a=r("fXoL"),s=r("djld"),c=r("InFF"),b=r("1OXT"),l=r("dCrI"),g=r("kmnG"),d=r("qFsG"),m=r("NFeN"),u=r("bTqV");function f(t,i){1&t&&(a.Sb(0,"span"),a.Gc(1," Email is required. "),a.Rb())}function p(t,i){1&t&&(a.Sb(0,"span"),a.Gc(1," Please enter valid email. "),a.Rb())}function v(t,i){if(1&t&&(a.Sb(0,"mat-error",26),a.Ec(1,f,2,0,"span",27),a.Ec(2,p,2,0,"span",27),a.Rb()),2&t){const t=a.gc();a.Ab(1),a.mc("ngIf",t.email.errors.required),a.Ab(1),a.mc("ngIf",t.email.errors.email)}}function S(t,i){1&t&&(a.Sb(0,"span"),a.Gc(1," Password is required. "),a.Rb())}function h(t,i){if(1&t&&(a.Sb(0,"mat-error",26),a.Ec(1,S,2,0,"span",27),a.Rb()),2&t){const t=a.gc();a.Ab(1),a.mc("ngIf",t.password.errors.required)}}const R=[{path:"",component:(()=>{class t{constructor(t,i,r,o,e){this._fb=t,this._authServe=i,this._storageServe=r,this._userAuth=o,this._navigate=e,this.submitted=!0}ngOnInit(){this.InitLoginForm(),!0===this._userAuth.isLogin()&&this._navigate.navigateUrls("dashboard")}InitLoginForm(){this.loginForm=this._fb.group({email:[null,[n.t.required,n.t.email]],password:[null,[n.t.required]]})}get email(){return this.loginForm.get("email")}get password(){return this.loginForm.get("password")}login(t){this.submitted=!0,this.loginForm.valid&&this._authServe.login(t.value).subscribe(t=>{this._storageServe.saveToken(t.user.token),this._userAuth.redirectMethod()})}signUp(){this._navigate.navigateUrls("registration")}forgot(){this._navigate.navigateUrls("forgot-password")}}return t.\u0275fac=function(i){return new(i||t)(a.Nb(n.d),a.Nb(s.a),a.Nb(c.a),a.Nb(b.a),a.Nb(l.a))},t.\u0275cmp=a.Hb({type:t,selectors:[["app-login"]],decls:47,vars:4,consts:[[1,"click-rg-wrapper"],[1,"click-container-sec"],[1,"click-rg-inner"],[1,"click-left-rg"],["alt","logo","src","assets/layouts/images/logo.png"],[1,"click-right-rg"],[1,"sign-up-form"],[3,"formGroup","ngSubmit"],[1,"sign-up-inner"],[1,"rg-tab-click"],[1,"rg-tab-body"],[1,"click-form","click-form-vertical"],[1,"click-form-row"],["appearance","outline"],["matInput","","required","","formControlName","email"],["matSuffix","",1,"secondary-text"],["class","form-error",4,"ngIf"],[1,"click-form-row","forgot-includes"],["matInput","","type","password","required","","formControlName","password"],[1,"forgot-link"],[1,"al-tag-rg"],["href","javascript:void(0)","title","Forgot password",3,"click"],[1,"rg-tab-footer","text-center"],["mat-stroked-button","",1,"btn-click","btn-signup",3,"disabled"],[1,"material-icons","next-btn"],["href","javascript:void(0)","title","Join",3,"click"],[1,"form-error"],[4,"ngIf"]],template:function(t,i){1&t&&(a.Sb(0,"div",0),a.Sb(1,"div",1),a.Sb(2,"div",2),a.Sb(3,"div",3),a.Sb(4,"div"),a.Ob(5,"img",4),a.Rb(),a.Rb(),a.Sb(6,"div",5),a.Sb(7,"div",6),a.Sb(8,"form",7),a.cc("ngSubmit",(function(){return i.login(i.loginForm)})),a.Sb(9,"div",8),a.Sb(10,"h2"),a.Gc(11,"Welcome Back To Click Imagine"),a.Rb(),a.Sb(12,"h3"),a.Gc(13,"Download free photos and videos powered by a community of photographers."),a.Rb(),a.Sb(14,"div",9),a.Sb(15,"div",10),a.Sb(16,"div",11),a.Sb(17,"div",12),a.Sb(18,"mat-form-field",13),a.Sb(19,"mat-label"),a.Gc(20,"Email"),a.Rb(),a.Ob(21,"input",14),a.Sb(22,"mat-icon",15),a.Gc(23," mail "),a.Rb(),a.Ec(24,v,3,2,"mat-error",16),a.Rb(),a.Rb(),a.Sb(25,"div",17),a.Sb(26,"mat-form-field",13),a.Sb(27,"mat-label"),a.Gc(28," Password"),a.Rb(),a.Ob(29,"input",18),a.Sb(30,"mat-icon",15),a.Gc(31,"vpn_key "),a.Rb(),a.Ec(32,h,2,1,"mat-error",16),a.Rb(),a.Sb(33,"div",19),a.Sb(34,"label",20),a.Sb(35,"a",21),a.cc("click",(function(){return i.forgot()})),a.Gc(36,"Forgot password?"),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(37,"div",22),a.Sb(38,"button",23),a.Gc(39," Login"),a.Sb(40,"span",24),a.Gc(41,"how_to_reg "),a.Rb(),a.Rb(),a.Sb(42,"div"),a.Sb(43,"label",20),a.Gc(44,"Don't have an account? "),a.Sb(45,"a",25),a.cc("click",(function(){return i.signUp()})),a.Gc(46,"Sign Up"),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb()),2&t&&(a.Ab(8),a.mc("formGroup",i.loginForm),a.Ab(16),a.mc("ngIf",(i.email.touched||i.submitted)&&i.email.invalid),a.Ab(8),a.mc("ngIf",(i.password.touched||i.submitted)&&i.password.invalid),a.Ab(6),a.mc("disabled",!i.loginForm.valid))},directives:[n.v,n.o,n.g,g.c,g.f,d.b,n.c,n.s,n.n,n.f,m.a,g.g,o.m,u.a,g.b],styles:[".forgot-includes[_ngcontent-%COMP%]{position:relative}.forgot-includes[_ngcontent-%COMP%]   .forgot-link[_ngcontent-%COMP%]{position:absolute;right:0;bottom:-22px}"]}),t})()}];let w=(()=>{class t{}return t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({factory:function(i){return new(i||t)},imports:[[e.g.forChild(R)],e.g]}),t})();var k=r("ADsi");let _=(()=>{class t{}return t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({factory:function(i){return new(i||t)},imports:[[o.c,w,k.a]]}),t})()}}]);