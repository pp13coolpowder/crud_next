(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[491],{2936:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/Table",function(){return a(8648)}])},3753:function(e,t,a){"use strict";a.d(t,{I3:function(){return u},I8:function(){return c},a4:function(){return r},bn:function(){return i},nf:function(){return n},ry:function(){return h},su:function(){return o},x4:function(){return l},xf:function(){return d}});var s=a(6154);let l=async e=>await s.Z.post("https://odd-pear-dalmatian-toga.cyclic.app/login",e),c=async e=>await s.Z.post("https://odd-pear-dalmatian-toga.cyclic.app/Auth",{},{headers:{id_token:e}}),n=async()=>await s.Z.get("https://odd-pear-dalmatian-toga.cyclic.app/list&user"),r=async e=>await s.Z.post("https://odd-pear-dalmatian-toga.cyclic.app/post",e),i=async()=>await s.Z.get("https://odd-pear-dalmatian-toga.cyclic.app/postlist"),d=async e=>await s.Z.get("https://odd-pear-dalmatian-toga.cyclic.app/postlist/user/"+e),o=async e=>await s.Z.get("http://localhost:4040/postlist/"+e),u=async(e,t)=>await s.Z.put("https://odd-pear-dalmatian-toga.cyclic.app/post&update/"+e,t),h=async e=>await s.Z.delete("https://odd-pear-dalmatian-toga.cyclic.app/post&delete/"+e)},8648:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var s=a(5893),l=a(7556),c=a(6719),n=a(5126),r=a(7294),i=a(3753);function d(){let[e,t]=(0,r.useState)([]);return(0,r.useEffect)(()=>{(0,i.nf)().then(e=>{t(e.data)}).catch(e=>{console.log(e)})},[]),(0,s.jsxs)("div",{children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(c.default,{children:(0,s.jsx)("div",{className:"mt-5 relative overflow-x-auto",children:(0,s.jsx)("div",{className:" rounded-lg",children:(0,s.jsxs)("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400 ",children:[(0,s.jsx)("thead",{className:"text-xs text-blue-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400 border-b-2 ",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{scope:"col",className:"px-6 py-3",children:"number"}),(0,s.jsx)("th",{scope:"col",className:"px-6 py-3",children:"name lastname"}),(0,s.jsx)("th",{scope:"col",className:"px-6 py-3",children:"email"}),(0,s.jsx)("th",{scope:"col",className:"px-6 py-3",children:"id user"}),(0,s.jsx)("th",{scope:"col",className:"px-6 py-3",children:"image"})]})}),(0,s.jsx)("tbody",{children:e.map((e,t)=>(0,s.jsxs)("tr",{className:"".concat(t%2==0?" bg-slate-200":" bg-white"),children:[(0,s.jsx)("th",{scope:"row",className:"px-6 py-2 ",children:1+t}),(0,s.jsxs)("th",{scope:"row",className:"px-6 py-2 ",children:[e.first_name," ",e.last_name]}),(0,s.jsx)("td",{className:"px-6 py-2",children:e.email}),(0,s.jsx)("td",{className:"px-6 py-2",children:e._id}),(0,s.jsx)("td",{className:"px-6 py-2",children:(0,s.jsx)("img",{className:"w-[50px] h-[50px] rounded-full ",src:e.image})})]},t))})]})})})}),(0,s.jsx)(n.default,{})]})}},5126:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return l}});var s=a(5893);function l(){return(0,s.jsx)("div",{className:" fixed bottom-0 w-full bg-blue-700 flex items-center text-white flex-row-reverse py-1 pr-10",children:"Copyright \xa9 Bangchak Corporation 2022"})}a(7294)},6719:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return l}});var s=a(5893);function l(e){return(0,s.jsx)("div",{className:"bg-fixed bg-bottom  bg-Rectangle_96 fixed w-full h-full overflow-auto -z-50",children:(0,s.jsx)("div",{className:"mb-32 grid justify-center overflow-x-hidden",children:e.children})})}},7556:function(e,t,a){"use strict";a.r(t);var s=a(5893),l=a(7294),c=a(1664),n=a.n(c),r=a(1163),i=a(3753),d=a(6455),o=a.n(d);let u=()=>{let[e,t]=(0,l.useState)([]);(0,l.useEffect)(()=>{let e=localStorage.jwt;(0,i.I8)(e).then(e=>t([e.data])).catch(e=>console.log(e))},[]);let a=[{nane:"Oil Price",href:"/page/Oil_Price"},{nane:"Review",href:"/page/Review"},{nane:"Profile",href:"/page/User"},{nane:"Table",href:"/page/Table"}],c=(0,r.useRouter)(),d=e=>{e.preventDefault(),localStorage.removeItem("jwt"),c.push("/"),o().fire("Log Out!","Logout success!","success")},[u,h]=(0,l.useState)(!1);return(0,s.jsxs)("div",{className:" relative",children:[(0,s.jsxs)("div",{className:"bg-blue-700 flex justify-between p-2",children:[(0,s.jsxs)("div",{className:"flex mx-4",children:[(0,s.jsx)("img",{className:"h-12 mr-2 ",src:"/svg/logo_bangchak.svg"}),(0,s.jsx)("img",{className:"h-12 hidden w-full lg:block lg:w-auto",src:"/svg/100Xhappy.svg"})]}),(0,s.jsx)("div",{className:"flex items-center space-x-4 mx-4",children:a.map((e,t)=>(0,s.jsx)("div",{className:"hidden w-full xl:block xl:w-auto text-xl",children:(0,s.jsx)(n(),{href:e.href,className:"".concat(e.href===c.pathname?"text-white bg-teal-600 p-2 rounded-full":" text-white hover:text-teal-600"),children:e.nane},t)}))}),e.map((e,t)=>(0,s.jsxs)("div",{className:"flex items-center space-x-2 mx-4 text-xl",children:[(0,s.jsx)("button",{onClick:()=>h(!u),className:"xl:hidden",children:(0,s.jsx)("svg",{class:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"})})}),(0,s.jsx)("img",{className:"h-10 w-10 rounded-full ",src:e.image}),(0,s.jsxs)("div",{className:"hidden w-full md:block md:w-auto text-white",children:[e.user_name,"\xa0",e.user_lastname]}),(0,s.jsx)("button",{onClick:d,className:" bg-red-600 p-1 rounded-full text-white",children:"Logout"})]},t))]}),u&&(0,s.jsx)("div",{className:"xl:hidden fixed",children:a.map((e,t)=>(0,s.jsx)(n(),{href:e.href,className:" flex flex-row bg-black bg-opacity-40 justify-center w-screen",children:(0,s.jsx)("div",{className:"".concat(u.href===c.pathname?"text-white bg-teal-600 p-2 rounded-full ":"text-white hover:text-teal-600"),children:e.nane})},t))})]})};t.default=u}},function(e){e.O(0,[154,802,664,774,888,179],function(){return e(e.s=2936)}),_N_E=e.O()}]);