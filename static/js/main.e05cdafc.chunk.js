(this.webpackJsonptomistagram=this.webpackJsonptomistagram||[]).push([[0],{127:function(e,t,n){},134:function(e,t,n){},136:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),s=n(52),r=n.n(s),o=n(14),c=n(48),l=n(76),d=n(73),h=n(53),j=(n(127),n(4));function u(){var e=Object(c.c)(),t=e.colorMode,n=e.toggleColorMode,i=Object(c.d)("black","white"),a=Object(c.d)("white","black"),s="dark"===t;return Object(j.jsx)(d.a,{label:"Toggle Dark Mode",children:Object(j.jsx)("label",{className:"toggle-wrapper",htmlFor:"toggle",children:Object(j.jsxs)("div",{className:"toggle ".concat(s?"enabled":"disabled"),style:{background:i},children:[Object(j.jsxs)("div",{className:"icons",children:[Object(j.jsx)(h.b,{color:a}),Object(j.jsx)(h.c,{color:a})]}),Object(j.jsx)("input",{id:"toggle",onClick:n})]})})})}var b=n(67);function g(){var e=Object(c.d)("white","rgb(23, 29, 42)");return Object(j.jsx)(l.d,{bg:e,w:"100%",maxW:"100%",children:Object(j.jsx)(l.d,{maxW:"62em",mx:"auto",p:1,children:Object(j.jsxs)(l.e,{children:[Object(j.jsx)(l.b,{p:"2",w:"100%",children:Object(j.jsx)(o.b,{to:"/",style:{textDecoration:"none"},children:Object(j.jsx)(l.g,{fontSize:["lg","xl","2xl","3xl"],style:{fontFamily:"Brush Script MT, Comic Sans"},children:"Tomistagram"})})}),Object(j.jsx)(l.i,{}),Object(j.jsx)(l.b,{w:"100%",children:Object(j.jsxs)(l.f,{h:"100%",justify:"flex-end",spacing:["8px","10px","12px"],children:[Object(j.jsx)(d.a,{label:"Home",children:Object(j.jsx)(o.b,{to:"/",children:Object(j.jsx)(b.b,{size:"25px"})})}),Object(j.jsx)(d.a,{label:"Github",children:Object(j.jsx)("a",{href:"https://github.com/tommy2022",target:"_blank",children:Object(j.jsx)(b.a,{size:"25px"})})}),Object(j.jsx)(d.a,{label:"qinx@umich.edu",children:Object(j.jsx)("a",{href:"mailto:qinx@umich.edu",children:Object(j.jsx)(h.a,{alt:"email icon",w:10,h:"25px"})})}),Object(j.jsx)(u,{})]})})]})})})}var m=n(11),p=n(43),x=n(82),f=n(78),O=n(77);n(134);function w(e){var t=e.children;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l.f,{spacing:[8,12,16,24],w:"full",id:"hstack",children:t}),Object(j.jsx)(l.k,{spacing:[4,6,8,12],w:"full",id:"vstack",children:t})]})}function v(e){var t=e.img,n=e.children;return Object(j.jsx)(l.d,{m:[2,4,6,8],w:"full",maxW:"100%",children:Object(j.jsx)(l.e,{children:Object(j.jsxs)(w,{children:[Object(j.jsx)(O.a,{borderRadius:"full",boxSize:[100,125,150,200],src:t,alt:"Profile/Summary Picture"}),n]})})})}var y=n(31),k=n(16),I=n(79),M=n(44),D=n.n(M),Y="Present",C="Python",S="JavaScript",z="ReactJS",P="HTML/CSS",W="Machine Learning";function A(e){var t=e.hovering,n=e.title,i=e.startDate,a=e.endDate,s=e.img;return t?Object(j.jsxs)(l.k,{children:[Object(j.jsx)(l.j,{fontSize:"xl",maxW:"100%",children:n}),Object(j.jsxs)(l.j,{fontSize:"xl",maxW:"100%",children:[Object(j.jsx)(D.a,{parse:"MM-YYYY",format:"MMM YYYY",children:i}),""===a?null:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{children:" ~ "}),a===Y?Y:Object(j.jsx)(D.a,{parse:"MM-YYYY",format:"MMM YYYY",children:a})]})]})]}):Object(j.jsx)(O.a,{m:0,src:s,alt:"Image for post ".concat(n),w:"100%",maxH:"100%"})}function E(e){var t=e.content,n=e.action,a=Object(i.useState)(!1),s=Object(y.a)(a,2),r=s[0],o=s[1];return Object(j.jsx)(l.a,{ratio:1,children:Object(j.jsx)(f.a,{p:0,height:"80px",onClick:function(){return n(t)},onMouseEnter:function(){o(!0)},onMouseLeave:function(){o(!1)},style:{whiteSpace:"normal",wordWrap:"break-word"},children:Object(j.jsx)(A,{hovering:r,title:t.title,startDate:t.startDate,endDate:t.endDate,img:t.imgs[0]})})})}var R=n(0),T=n(68),F=n(83);function q(e,t){e.forEach((function(e){e.liked=!1,e.imgs.forEach((function(e,n,i){return i[n]="/tomistagram"+t+e})),e.tags.forEach((function(e,t,n){return n[t]=e.replace(" ","_").toLowerCase()}))}))}function B(e,t){var i="priority"in e?e.priority:0,a="priority"in t?t.priority:0;if(i!==a)return i<a;var s=n(54),r=""===e.endDate?e.startDate:e.endDate,o=""===t.endDate?t.startDate:t.endDate;if(r===Y){if(o!==Y)return!1;r=e.startDate,o=t.startDate}else if(o===Y&&r!==Y)return!0;var c=s(r,"MM-YYYY"),l=s(o,"MM-YYYY");return s(c).isSame(l,"month")?e.title<t.title:!!s(c).isBefore(l,"month")||void 0}function J(e){var t=e.text,n=Object(c.d)("rgb(0, 55, 107)","rgb(118, 176, 231)");return Object(j.jsx)(o.b,{to:"/tags/".concat(t),children:Object(j.jsxs)(l.j,{mx:1,fontSize:"sm",color:n,style:{display:"inline-block"},children:["#",t]})})}var L=n(60),N=n.n(L);function G(e){var t=e.imgs,n=e.onDoubleClick,i=t.map((function(e){return{original:e}}));console.log(i);return console.log(i),Object(j.jsx)(l.b,{id:"gallery wrapper",w:"100%",onDoubleClick:n,children:Object(j.jsx)(N.a,Object(p.a)({items:i},{showBullets:!0,onErrorImageURL:"/tomistagram/notfound.jpeg",showPlayButton:!1,showFullscreenButton:!1}))})}function H(e){var t=e.content,a=t.title,s=t.subtitle,r=t.description,o=t.imgs,d=t.startDate,h=t.endDate,u=t.tags,b=Object(i.useState)(t.liked),g=Object(y.a)(b,2),m=g[0],p=g[1],x=Object(c.d)("black","white"),f=Object(c.d)("gray.50","rgb(26, 32, 44)"),O=function(){p(!m),t.liked=!m};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(I.e,{}),Object(j.jsx)(I.d,{m:15,height:"80vh",children:Object(j.jsx)(l.b,{h:"100%",bg:"black",children:Object(j.jsxs)(l.e,{h:"100%",w:"100%",children:[Object(j.jsx)(l.c,{flex:"1",maxH:"100%",maxW:"100%",w:"100%",children:Object(j.jsx)(G,{imgs:o,onDoubleClick:function(){return p(!0),void(t.liked=!0)}})}),Object(j.jsxs)(l.b,{h:"100%",maxW:"500px",width:"45%",bg:f,children:[Object(j.jsx)(I.c,{}),Object(j.jsxs)(l.k,{h:"100%",children:[Object(j.jsxs)(l.b,{width:"100%",children:[Object(j.jsx)(l.g,{as:"h4",size:"md",justifyContent:"flex-start",mt:3,mx:4,children:a}),Object(j.jsx)(l.g,{as:"h4",size:"sm",justifyContent:"flex-start",mb:1,mx:4,children:s}),Object(j.jsx)("hr",{})]}),Object(j.jsx)(I.b,{w:"100%",textAlign:"left",style:{whiteSpace:"pre-wrap"},children:r}),Object(j.jsx)(l.b,{px:2,w:"100%",justifyContent:"flex-start",children:u.map((function(e,t){return Object(j.jsx)(J,{text:e},t)}))}),Object(j.jsxs)(l.b,{h:"90px",w:"100%",children:[Object(j.jsx)("hr",{}),Object(j.jsxs)(l.k,{w:"100%",px:2,children:[Object(j.jsxs)(l.b,{m:0,w:"100%",justifyContent:"flex-start",children:[Object(j.jsx)(R.b.Provider,{value:{color:m?"rgb(".concat("237,73,86",")"):x,className:"global-class-name",size:"22px"},children:Object(j.jsx)(l.b,{d:"inline-block",m:1,mb:0,children:m?Object(j.jsx)(T.a,{onClick:function(){return O()}}):Object(j.jsx)(T.b,{onClick:function(){return O()}})})}),Object(j.jsx)(R.b.Provider,{value:{className:"global-class-name",size:"22px"},children:Object(j.jsx)(l.b,{d:"inline-block",m:1,mb:0,children:Object(j.jsx)(F.a,{onClick:function(){window.alert("ooops. this is embarrasing...\n    I'm still thinking about what feature to do with the share button")}})})})]}),Object(j.jsxs)(l.j,{fontSize:"sm",w:"100%",justifyContent:"flex-start",style:{fontWeight:"bold",marginTop:"0px",padding:"0px 5px"},children:["\u2135 ",m?" + 1":""," likes"]}),Object(j.jsxs)(l.j,{fontSize:"xs",w:"100%",justifyContent:"flex-start",style:{marginTop:"-2px",textTransform:"uppercase",fontFamily:"system-ui, Courier New",color:"#8E8E8E",padding:"0px 5px"},children:[Object(j.jsx)(D.a,{parse:"MM-YYYY",format:"MMMM YYYY",children:d}),""===h?null:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{children:" (Last Updated "}),Object(j.jsx)(D.a,{parse:"MM-YYYY",format:"MMMM YYYY",children:h===Y?n(54)().format("MM-YYYY"):h}),")"]})]})]})]})]})]})]})})})]})}var U={title:"Post not found",description:"Something wrong happened :(",img:"/notfound.jpeg",date:"12-2001",updated:!1};function Q(e){var t=e.contents,n=Object(k.b)(),a=n.isOpen,s=n.onOpen,r=n.onClose,o=Object(i.useState)(U),c=Object(y.a)(o,2),d=c[0],h=c[1],u=function(e){h(e),s()};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(I.a,{onClose:r,size:"5xl",isOpen:a,scrollBehavior:"inside",isCentered:!0,children:Object(j.jsx)(H,{content:d})}),Object(j.jsx)(l.h,{columns:[2,null,3],spacing:"5%",children:t.map((function(e,t){return Object(j.jsx)(E,{content:e,action:u},t)}))})]})}var V=[{title:"Sudoku Website",description:"its a sudoku website",imgs:["sudoku.png"],startDate:"07-2020",endDate:"",tags:[S,P,"Backtracking","Bit Manupulation"]},{title:"Game Website",description:"its a game website",imgs:["spaceinvader.png","flappyabe.png","tetris.png"],startDate:"08-2020",endDate:"",tags:[S,P,"PHP"]},{title:"Table Recognizer",description:"its a table recognizer",imgs:["tablegrid.png","tablecell.png"],startDate:"03-2021",endDate:"",tags:[C,"Opencv","Computer Vision",W,"Swimming"]},{title:"Piazza Post Classifier",description:"its a sudoku website <- lol its not  ",imgs:["piazza.jpeg"],startDate:"03-2020",endDate:"",tags:["C++",W]},{title:"Dog Breed Classification",description:"Classify dog breeds. Transfer learning..... 74% accuracy and 0.863 AUROC todo",imgs:["dogs.png"],startDate:"04-2021",endDate:"",tags:["CNN",W,"Transfer Learning"]}];function _(){return Object(j.jsx)(Q,{contents:V})}V.sort((function(e,t){return B(e,t)?1:-1})),q(V,"/ProjectImg/");var X=[{title:"University of Michigan",subtitle:"EECS 203 (Discrete Math) Instructional Aide / GSI",description:"\tAs an Instructional Aide for EECS 203, I work on variety on tasks to both directly and indirectly support student learning. I directly support students by answering questions on piazza (a Q&A forum), answer questions during online zoom lecture, and hold weekly office hours and discussion sections for students to review and practice with lecture material. Indirectly, I write and review homework and exam questions, and I worked as the lead for the exam management team where I set detailed timeline for each exam, allocate staffs for proctoring the exam, and ensuring exam question writing and grading goes smoothly.\n\tI have always loved math and teaching, and this was the perfect combination of both. The amount of responsibility as an Instructional Aide that is not directly teaching was overwhelming at first, but as a student myself, I started to notice how important getting these tasks correct is imporant. Every semester, there's always homework and exam questions with issues that are obviously not proof read/tested and is always stressful especially in an exam setting. Since realizing how important it is to make sure these errors don't occur, it has been a crucial responsibility for me as an instructional aide. Starting Fall 2021, I started sharing my knowledge managing the exam logistics with staffs from other courses in effort to streamline the student experiences during the stressful exam time overall.",imgs:["m.png"],startDate:"08-2020",endDate:Y,tags:["Instructional Aide","Management","Discrete Math","Logic","Counting"],priority:-1},{title:"University of Michigan",subtitle:"Research Assistant",description:"I assisted in researching how the newspaper paywall effects the content and frequency of digital articles published. We tried seeing trend of the newspaper by topic (sports, politics, etc.), census region, city demographics (like average income and population). I researched data and performed topic modelling techniques like LDA and GloVe to assist in this process.",imgs:["m.png"],startDate:"12-2021",endDate:Y,tags:["Research",C,"Topic Modelling","LDA","GloVe"],priority:-1},{title:"PID Inc.",subtitle:"Full Stack Intern",description:"I actually started this internship as just a front-end developer intern. I was given a project that would be worked on with my mentor and another intern who would of have worked on the back-end. However, the other intern quit a month into the internship due to his high school workload so I volunteered to work on the back-end as well, getting somewhat promoted (?) to a full-stack developer. I worked on developing a management system using React and Laravel that replaces an existing excel file that automates data entry, calculations, and visualizations. \n\t Working on more than 30 different web pages made me understand just how important code reusability is important. Especially in a web application setting where I have to keep styles consistent across pages. I made sure to utilize everything that was reused across different pages including, data entry and verification, pagination, and filter feature. In order to do so, I learned how to make functions and React Component as generic as I can without overcomplicating it so that I can utilize them in as many different settings as I can.",imgs:["pid.jpeg"],startDate:"09-2020",endDate:"08-2021",tags:[z,S,"Laravel","PHP"]},{title:"Cookpad",subtitle:"Software Engineer Intern",description:"\tI worked on integrating SWR React on their main service website to cache API requests to 'My Folder'. This change reduced load time from around seconds to 2 milliseconds. Further, I had the opportunity to assist with their new MVP by developing web applications using Next.js and Ruby on Rails with GraphQL API.\n\tThis was the my first time using GraphQL and I absolutely loved the flexibility it provides. I remember in my previous internship at PID Inc. I remember having to create a different API endpoint for every data to prevent over-fetching. This of course comes with multiple files to implement for each endpoint like the Controller, Service, and DAO. For GraphQL, once the server side was implemented, it felt like as if the client-side could reach into the database to access whatever data it needs with a bonus feature of validation and type checking built in to the request.",imgs:["cookpad.jpeg"],startDate:"08-2021",endDate:"08-2021",tags:[S,P,z,"Next.js","Ruby","Ruby on Rails"]},{title:"Nortonlifelock",subtitle:"Software Engineer Intern",description:"\tI was placed on the Norton Communication Platform team where I worked on a platform agnostic communication messaging platform that is used to target end users for security news, product updates, product cross-sells, and more. I had the opportunity to particupate in their the agile iterative approach using Jira, utilizing Maven, Jenkins for unit and integration testing, along with Bitbucket and git for source management to deliver features quickly and with high quality.\n\tAs funny as it may sound, the most valuable skill I think I have acquired from this internship is probably reading code. Never thought this is something that need to be learned, but when there are hundreds of files in the code base, figuring out which file to look at, navigating through numerous number of files so that I can understand what a singular function does was not a skill I had going into this internship. \n\tOf course, the various languages and framework I was able to learn and interact with has also been a great experience for me. For the front-end, I provided new features to the GUI using Javascript + AngularJS to help our Customer Retention Management team intelligently configure messaging campaigns to select end-users for Nortonlifelock products. For the back-end, I implemented REST APIs through Java, interacting with the Oracle and Azure Cosmos Databases. Participated in Agile iterative approach using Jira while utilizing Maven, Jenkins for unit and integration testing, along with Bitbucket and git for source management to deliver features quickly and with high quality.",imgs:["norton.png"],startDate:"05-2022",endDate:"08-2022",tags:[S,"AngularJS","Java","Oracle DB","Azure Cosmos DB",P,"Agile","Bitbucket","Maven","Jenkins"]}];function K(){return Object(j.jsx)(Q,{contents:X})}X.sort((function(e,t){return B(e,t)?1:-1})),q(X,"/ExperienceImg/");var Z=[];function $(){var e=n(54),t=e("2001-12-30","YYYY-MM-DD"),i=e().startOf("day"),a=Math.round(e.duration(i.diff(t)).asDays()),s=V.length+X.length+Z.length;return Object(j.jsx)(v,{img:"/tomistagram/pfp.jpg",children:Object(j.jsxs)(l.k,{w:"full",align:"flex-start",children:[Object(j.jsxs)(l.f,{spacing:[3,4,5],children:[Object(j.jsx)(l.j,{as:"span",fontSize:"2xl",children:"Xiangyu (Tom) Qin"}),Object(j.jsx)(l.c,{children:Object(j.jsx)(o.b,{to:"/resume.pdf",target:"_blank",children:Object(j.jsx)(f.a,{borderRadius:"sm",bg:"blue.500",color:"white",size:"xs",children:"Resume"})})})]}),Object(j.jsxs)(l.h,{w:"full",maxW:"40em",columns:[1,null,3],spacing:[1,2,3],children:[Object(j.jsxs)(l.j,{as:"span",children:[Object(j.jsx)(l.j,{as:"span",style:{fontWeight:"bold"},children:s})," ","posts"]}),Object(j.jsxs)(l.j,{as:"span",children:[Object(j.jsx)(l.j,{as:"span",style:{fontWeight:"bold"},children:a})," ","days old"]})]}),Object(j.jsx)(l.j,{children:"Hi there! I'm Tom, a first year masters student in Computer Science at the University of Michigan."}),Object(j.jsx)(l.j,{children:"Outside of work and academics, you'll likely find me Swimming, Working on a Jigsaw Puzzle, Cooking, or Travelling. I've been to 19 countries and my favourite part about travelling has always been the food."})]})})}function ee(e){var t=e.to,n=e.text,i=Object(m.f)().pathname===t;return Object(j.jsx)(j.Fragment,{children:i?Object(j.jsx)(l.b,{borderTop:"1px",borderColor:"black",children:Object(j.jsx)(o.b,{to:t,children:Object(j.jsx)(l.b,{component:"span",children:n})})}):Object(j.jsx)(l.b,{color:"gray.500",children:Object(j.jsx)(o.b,{to:t,children:Object(j.jsx)(l.b,{component:"span",children:n})})})})}function te(){return Object(j.jsx)(l.d,{maxW:"44em",mb:3,children:Object(j.jsx)(l.c,{children:Object(j.jsxs)(l.f,{spacing:12,children:[Object(j.jsx)(ee,{to:"/",text:"Experience"}),Object(j.jsx)(ee,{to:"/project",text:"Project"})]})})})}Z.sort((function(e,t){return B(e,t)?1:-1})),q(Z,"/OtherImg/");var ne=["component","audience"];var ie=function(e){var t=e.component,n=(e.audience,Object(x.a)(e,ne));return Object(j.jsx)(m.a,Object(p.a)(Object(p.a)({},n),{},{render:function(e){return Object(j.jsxs)(l.d,{maxW:"100%",children:[Object(j.jsx)($,{}),Object(j.jsx)("hr",{}),Object(j.jsx)(te,{}),Object(j.jsx)("div",{id:"posts",children:Object(j.jsx)(t,Object(p.a)({},e))})]})}}))},ae=n(84),se=n(85),re=n(86),oe=n(87),ce=(n(135),[{original:"https://picsum.photos/id/1018/1000/600/"},{original:"https://picsum.photos/id/1015/1000/600/"},{original:"https://picsum.photos/id/1019/1000/600/"}]);a.a.Component;function le(e){var t=e.img,n=e.tagname,i=e.numPosts;return null==t?null:Object(j.jsx)(v,{img:t,children:Object(j.jsxs)(l.k,{w:"full",align:"flex-start",children:[Object(j.jsxs)(l.j,{as:"span",fontSize:"2xl",children:["#",n]}),Object(j.jsxs)(l.j,{as:"span",children:[Object(j.jsx)(l.j,{as:"span",style:{fontWeight:"bold"},children:i})," ","posts"]})]})})}function de(){var e=Object(m.g)().tagname,t=Object(i.useState)(null),n=Object(y.a)(t,2),a=n[0],s=n[1],r=Object(i.useState)(null),o=Object(y.a)(r,2),c=o[0],d=o[1];return Object(i.useEffect)((function(){var t=[];[V,X,Z].forEach((function(n){var i=n.filter((function(t){return t.tags.includes(e)}));t=t.concat(i)})),t.sort((function(e,t){return B(e,t)?1:-1})),s(t),console.log(t),t.length>0&&d(t[0].imgs[0])}),[]),console.log(c),null==a?null:0===a.length?Object(j.jsxs)("div",{children:[" Oops no post matching #",e," found"]}):Object(j.jsxs)(l.d,{maxW:"100%",children:[Object(j.jsx)(le,{tagname:e,img:c,numPosts:a.length}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{id:"posts",children:Object(j.jsx)(Q,{contents:a})})]})}var he=function(){var e=Object(c.d)("gray.50","rgb(26, 32, 44)");return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(g,{}),Object(j.jsxs)(l.d,{bg:e,maxW:"100%",mx:"auto",p:0,children:[Object(j.jsx)("hr",{}),Object(j.jsx)(l.d,{maxW:"62em",mx:"auto",children:Object(j.jsxs)(m.c,{children:[Object(j.jsx)(ie,{path:"/",exact:!0,component:K}),Object(j.jsx)(ie,{path:"/project",exact:!0,component:_}),Object(j.jsx)(m.a,{path:"/tags/:tagname",component:de})]})})]})]})},je=n(10),ue=Object(je.b)({config:{initialColorMode:"dark",useSystemColorMode:!0}});r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(o.a,{basename:"/tomistagram",children:Object(j.jsxs)(je.a,{children:[Object(j.jsx)(c.b,{initialColorMode:ue.config.initialColorMode}),Object(j.jsx)(he,{})]})})}),document.getElementById("root"))}},[[136,1,2]]]);
//# sourceMappingURL=main.e05cdafc.chunk.js.map