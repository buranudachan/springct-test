(this.webpackJsonpsociallab=this.webpackJsonpsociallab||[]).push([[0],{219:function(e,a,t){e.exports=t(452)},228:function(e,a,t){},229:function(e,a,t){},452:function(e,a,t){"use strict";t.r(a);var n,r=t(0),s=t.n(r),c=t(4),l=t.n(c),o=t(36),i=t(91),u=t(117),m=(t(228),t(229),t(22)),d=t(42),p=t(52),b=t(54),E=t(53),f=t(78),h=t(13),g=t(25),O=t(459);!function(e){var a;!function(e){e.SET_CURRENT_PATH="SET_CURRENT_PATH"}(a||(a={})),e.Type=a;e.setCurrentPath=Object(O.a)(a.SET_CURRENT_PATH)}(n||(n={}));var j,v=t(83),D=t(38),S=t(33),y=t(454),U=t(453),T=t(43),A=t.n(T),_=t(82),N=t(205),x=t.n(N),w=new function e(){Object(d.a)(this,e),this.request=function(){var e=Object(_.a)(A.a.mark((function e(a){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(m.a)({},a),e.abrupt("return",new Promise((function(e,a){x()(t).then(function(){var a=Object(_.a)(A.a.mark((function a(t){return A.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e({success:t});case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch(function(){var e=Object(_.a)(A.a.mark((function e(t){var n,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("API error",t),n=new Error,{},r=[{errorCode:"errorCode",header:"errorHeader",message:"error message"}],n.message=JSON.stringify(r),a(n);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())})));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()};!function(e){var a;!function(e){e.GET_USER_DETAIL_REQUEST="GET_USER_DETAIL_DETAIL_REQUEST",e.GET_USER_DETAIL_RESPONSE="GET_USER_DETAIL_RESPONSE"}(a||(a={})),e.Type=a;e.getUserDetailRequest=Object(O.a)(a.GET_USER_DETAIL_REQUEST,Object(_.a)(A.a.mark((function e(){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.request({method:"get",url:""});case 2:(a=e.sent).success&&t(a.success.data.data);case 4:case"end":return e.stop()}}),e)}))));var t=e.getUserDetailResponse=Object(O.a)(a.GET_USER_DETAIL_RESPONSE,(function(e){return e}))}(j||(j={}));var R,k=t(111),P={getUserData:Object(k.a)([function(e){return e.userStateData}],(function(e){return e}))},C=t(77),L=t(35),I=t.n(L),F=t(455),q=t(457),G=t(458),H=t(118),J=function(e){Object(b.a)(t,e);var a=Object(E.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).state={isUserLogged:!1},n.handleSubmit=n.handleSubmit.bind(Object(C.a)(n)),n}return Object(p.a)(t,[{key:"render",value:function(){var e=this,a=this.props.form.getFieldDecorator,t={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},n={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};return s.a.createElement("div",null,s.a.createElement(F.a,{title:"Add User",visible:!0,footer:!1,width:"60%",closable:!1},s.a.createElement(q.a,{onSubmit:this.handleSubmit,className:"gx-signin-form gx-form-row0"},s.a.createElement(v.a,null,s.a.createElement(D.a,{span:12},s.a.createElement(I.a,Object.assign({},t,{label:"First Name"}),a("first_name",{rules:[{required:!0,message:"Please enter First Name!"}]})(s.a.createElement(G.a,{placeholder:"First Name"})))),s.a.createElement(D.a,{span:12},s.a.createElement(I.a,Object.assign({},t,{label:"Last Name"}),a("last_name",{rules:[{required:!0,message:"Please enter Last Name!"}]})(s.a.createElement(G.a,{placeholder:"Last Name"}))))),s.a.createElement(v.a,null,s.a.createElement(D.a,{span:12},s.a.createElement(I.a,Object.assign({},t,{label:"Address  "}),a("address",{rules:[{required:!0,message:"Please enter Address!"}]})(s.a.createElement(G.a,{type:"address",placeholder:"Address"})))),s.a.createElement(D.a,{span:12},s.a.createElement(I.a,Object.assign({},t,{label:"Phone No  "}),a("phoneNumber",{rules:[{required:!0,message:"Please enter Phone Number!"}]})(s.a.createElement(G.a,{placeholder:"Phone Number"}))))),s.a.createElement(v.a,null,s.a.createElement(D.a,{span:12},s.a.createElement(I.a,Object.assign({},t,{label:"Role      "}),a("role",{rules:[{required:!0,message:"Please select Role!"}]})(s.a.createElement(H.a.Group,null,s.a.createElement(H.a,{value:"Admin"},"Admin"),s.a.createElement(H.a,{value:"HOD"},"HOD"))))),s.a.createElement(D.a,{span:12},s.a.createElement(I.a,Object.assign({},t,{label:"Email     "}),a("email",{rules:[{required:!0,message:"Please enter email!"}]})(s.a.createElement(G.a,{type:"email",placeholder:"email"}))))),"  ",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(I.a,n,s.a.createElement(v.a,{className:"gx-pb-0"},s.a.createElement(D.a,{span:18}),s.a.createElement(D.a,{span:3},s.a.createElement("button",{className:"ant-btn ant-btn-primary ant-btn-background-ghost gx-pb-0 gx-mt-2"},"Add                                    ")),s.a.createElement(D.a,{span:3},s.a.createElement("button",{className:"ant-btn ant-btn-danger ant-btn-background-ghost gx-pb-0 gx-mt-2",onClick:function(){return e.props.close()}},"Cancel                                    ")))))))}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),this.props.form&&this.props.form.validateFields((function(e,t){e||(F.a.success({content:"User created successfully."}),a.props.addUserDetail(t),a.props.close())}))}}]),t}(s.a.Component),Q=q.a.create()(J),B=[{title:"First Name",dataIndex:"first_name",key:"1"},{title:"Last Name",dataIndex:"last_name",key:"2"},{title:"Phone Number",dataIndex:"phoneNumber",key:"3"},{title:"Address",dataIndex:"address",key:"4"}],W=function(e){Object(b.a)(t,e);var a=Object(E.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).state={userDetail:[],isAddUser:!1},n}return Object(p.a)(t,[{key:"addUser",value:function(){this.setState({isAddUser:!0})}},{key:"closeAddUserForm",value:function(){this.setState({isAddUser:!1})}},{key:"addUserDetail",value:function(e){var a=this.state.userDetail;a.push(e),this.setState({userDetail:a})}},{key:"render",value:function(){var e=this,a=localStorage.getItem("userData"),t=JSON.parse(a);return s.a.createElement(s.a.Fragment,null,s.a.createElement(v.a,null,s.a.createElement(D.a,{span:24})),s.a.createElement("br",null),s.a.createElement(v.a,null,s.a.createElement(D.a,{span:21}),s.a.createElement(D.a,{span:3},"Admin"===t.isUser?s.a.createElement(S.a,{onClick:function(){return e.addUser()},style:{backgroundColor:"#0000FF"}},"Add User"):"")),s.a.createElement(y.a,null,s.a.createElement(U.a,{dataSource:this.state.userDetail,columns:B}),";"),this.state.isAddUser?s.a.createElement(Q,{addUserDetail:function(a){return e.addUserDetail(a)},close:function(){return e.closeAddUserForm()}}):"")}}]),t}(s.a.Component),M=Object(o.c)((function(e){return Object(m.a)({},P.getUserData(e))}),(function(e){return{actions:Object(m.a)({},Object(g.bindActionCreators)(Object(f.omit)(j,["Type"]),e))}}))(W);!function(e){var a;!function(e){e.ADD_USER_DETAIL="ADD_USER_DETAIL"}(a||(a={})),e.Type=a;e.setUserLoginData=Object(O.a)(a.ADD_USER_DETAIL,(function(e){return e}))}(R||(R={}));var $,z={getLoginData:Object(k.a)([function(e){return e.loginStateData}],(function(e){return e}))},K=function(e){Object(b.a)(t,e);var a=Object(E.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).state={isUserLogged:!1},n.handleSubmit=n.handleSubmit.bind(Object(C.a)(n)),n}return Object(p.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,a={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}};return s.a.createElement("div",{className:"gx-app-login-wrap"},s.a.createElement("div",{className:"gx-app-login-container"},s.a.createElement("div",{className:"gx-app-login-main-content"},s.a.createElement("div",{className:"gx-app-login-content gx-mt-0"},s.a.createElement(q.a,{onSubmit:this.handleSubmit},s.a.createElement(I.a,Object.assign({},a,{label:"Username"}),e("userName",{rules:[{required:!0,message:"The input your username!"}]})(s.a.createElement(G.a,{placeholder:"userName"}))),s.a.createElement(I.a,Object.assign({},a,{label:"Password"}),e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(s.a.createElement(G.a,{type:"password",placeholder:"Password"}))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(I.a,null,s.a.createElement("div",{className:"center"},s.a.createElement(S.a,{className:"gx-mb-0 gx-text-white",htmlType:"submit",block:!0,style:{borderRadius:"20px",backgroundColor:"#1eb2a6"}},"Login"))))))))}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),this.props.form&&this.props.form.validateFields((function(e,t){e||(t.isUser="Admin",localStorage.setItem("userData",JSON.stringify(t)),a.props.history.push("/userDetail"))}))}}]),t}(s.a.Component),V=q.a.create()(K),X=Object(o.c)((function(e){return Object(m.a)({},z.getLoginData(e))}),(function(e){return{actions:Object(m.a)({},Object(g.bindActionCreators)(Object(f.omit)(R,["Type"]),e))}}))(V),Y=function(e){Object(b.a)(t,e);var a=Object(E.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return s.a.createElement(h.a,null,s.a.createElement(u.c,null,s.a.createElement(u.a,{exact:!0,path:"/",component:X}),s.a.createElement(u.a,{exact:!0,path:"/userDetail",component:M})))}}]),t}(s.a.Component),Z=Object(o.c)((function(e){return{}}),(function(e){return{actions:Object(m.a)({},Object(g.bindActionCreators)(Object(f.omit)(n,["Type"]),e))}}))(Y),ee=(t(450),t(203)),ae=t(215),te=t(76),ne=t(456),re={loginDetail:[]},se=Object(ne.a)(Object(te.a)({},R.Type.ADD_USER_DETAIL,(function(e,a){return Object(m.a)(Object(m.a)({},e),{},{loginDetail:a.payload})})),re),ce={userDetail:[]},le={userStateData:Object(ne.a)(Object(te.a)({},j.Type.GET_USER_DETAIL_REQUEST,(function(e,a){return console.log("action",a),Object(m.a)(Object(m.a)({},e),{},{userDetail:a.payload})})),ce),loginStateData:se},oe={router:{location:{pathname:"",search:"",state:void 0,hash:""},action:"POP"},userStateData:ce,loginStateData:re},ie=function(e){return Object(g.combineReducers)(Object(m.a)({router:Object(i.b)(e)},le))},ue=t(46),me=Object(ue.a)(),de=Object(ae.a)(),pe=Object(ee.a)(me);$=Object(g.applyMiddleware)(de,pe);var be=Object(g.createStore)(ie(me),oe,$),Ee=function(){return s.a.createElement(o.a,{store:be},s.a.createElement(i.a,{history:me},s.a.createElement(u.c,null,s.a.createElement(u.a,{path:"/",component:Z}))))},fe=t(214);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var he;he=Ee,l.a.render(s.a.createElement(fe.AppContainer,null,s.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[219,1,2]]]);
//# sourceMappingURL=main.2efa0264.chunk.js.map