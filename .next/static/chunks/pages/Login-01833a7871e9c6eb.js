(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[667],{945:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Login",function(){return a(3918)}])},1104:function(t,e){"use strict";e.Z={src:"/_next/static/media/logo_bangchak.5bcb7b76.svg",height:114,width:119,blurWidth:0,blurHeight:0}},3918:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return g}});var n=a(5893),r=a(7822),s=a(6719),i=a(5126),c=a(5675),l=a.n(c),o=a(1104),u=a(7294),d=a(1163),p=a(3753),f=a(6455),h=a.n(f);function g(){let t=(0,d.useRouter)(),[e,a]=(0,u.useState)({email:"",password:""}),c=t=>{a({...e,[t.target.name]:t.target.value})},f=a=>{a.preventDefault(),(0,p.x4)(e).then(e=>{"not found user"===e.data?(h().fire({icon:"error",title:e.data}),t.reload(window.location.pathname)):"wrong password"===e.data?(h().fire({icon:"error",title:e.data}),t.reload(window.location.pathname)):(h().fire("Login success!","You clicked the button!","success"),t.push("/page/Oil_Price"),localStorage.setItem("jwt",e.data.jwt))}).catch(t=>alert(t))};return(0,n.jsxs)("div",{children:[(0,n.jsx)(r.default,{}),(0,n.jsx)(s.default,{children:(0,n.jsx)("div",{className:"-center mt-20",children:(0,n.jsxs)("form",{onSubmit:f,className:"grid justify-items-center gap-y-4 bg-lime-200/75 rounded-lg w-60",children:[(0,n.jsx)("div",{className:" bg-white w-full flex items-center justify-center p-2 rounded-t-lg text-2xl text-blue-800",children:"Employee"}),(0,n.jsx)(l(),{src:o.Z,alt:"logo",width:70}),(0,n.jsx)("input",{className:"rounded-lg placeholder:text-center text-center",name:"email",type:"email",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",required:!0,placeholder:"email",onChange:c}),(0,n.jsx)("input",{className:"rounded-lg placeholder:text-center text-center",name:"password",type:"password",required:!0,placeholder:"password",onChange:c}),(0,n.jsx)("button",{type:"submit",className:"m-4 bg-blue-800 text-white w-28 h-8 rounded-full",children:"Login"})]})})}),(0,n.jsx)(i.default,{})]})}},3753:function(t,e,a){"use strict";a.d(e,{I3:function(){return d},I8:function(){return s},a4:function(){return c},bn:function(){return l},nf:function(){return i},ry:function(){return p},su:function(){return u},x4:function(){return r},xf:function(){return o}});var n=a(6154);let r=async t=>await n.Z.post("https://odd-pear-dalmatian-toga.cyclic.app/login",t),s=async t=>await n.Z.post("https://odd-pear-dalmatian-toga.cyclic.app/Auth",{},{headers:{id_token:t}}),i=async()=>await n.Z.get("https://odd-pear-dalmatian-toga.cyclic.app/list&user"),c=async t=>await n.Z.post("https://odd-pear-dalmatian-toga.cyclic.app/post",t),l=async()=>await n.Z.get("https://odd-pear-dalmatian-toga.cyclic.app/postlist"),o=async t=>await n.Z.get("https://odd-pear-dalmatian-toga.cyclic.app/postlist/user/"+t),u=async t=>await n.Z.get("http://localhost:4040/postlist/"+t),d=async(t,e)=>await n.Z.put("https://odd-pear-dalmatian-toga.cyclic.app/post&update/"+t,e),p=async t=>await n.Z.delete("https://odd-pear-dalmatian-toga.cyclic.app/post&delete/"+t)},5126:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return r}});var n=a(5893);function r(){return(0,n.jsx)("div",{className:" fixed bottom-0 w-full bg-blue-700 flex items-center text-white flex-row-reverse py-1 pr-10",children:"Copyright \xa9 Bangchak Corporation 2022"})}a(7294)},6719:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return r}});var n=a(5893);function r(t){return(0,n.jsx)("div",{className:"bg-fixed bg-bottom  bg-Rectangle_96 fixed w-full h-full overflow-auto -z-50",children:(0,n.jsx)("div",{className:"mb-32 grid justify-center overflow-x-hidden",children:t.children})})}},7822:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return r}});var n=a(5893);function r(){return(0,n.jsx)("div",{className:" relative",children:(0,n.jsx)("div",{className:" bg-blue-700 flex justify-between p-2",children:(0,n.jsxs)("button",{className:"flex mx-4",children:[(0,n.jsx)("img",{className:" h-12 mr-2 ",src:"/svg/logo_bangchak.svg"}),(0,n.jsx)("img",{className:"h-12 hidden w-full sm:block sm:w-auto",src:"/svg/100Xhappy.svg"})]})})})}}},function(t){t.O(0,[154,802,675,774,888,179],function(){return t(t.s=945)}),_N_E=t.O()}]);