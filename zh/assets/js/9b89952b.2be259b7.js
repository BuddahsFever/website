"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[69233],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),o=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=o(n),d=l,m=s["".concat(i,".").concat(d)]||s[d]||k[d]||a;return n?r.createElement(m,p(p({ref:t},c),{},{components:n})):r.createElement(m,p({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,p=new Array(a);p[0]=s;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:l,p[1]=u;for(var o=2;o<a;o++)p[o]=n[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},91874:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return k}});var r=n(83117),l=n(80102),a=(n(67294),n(3905)),p=["components"],u={},i="14-\u5907\u4efd\u548c\u6062\u590d",o={unversionedId:"manual/SCALE Apps/Quick-Start Guides/backup-restore",id:"manual/SCALE Apps/Quick-Start Guides/backup-restore",title:"14-\u5907\u4efd\u548c\u6062\u590d",description:"B. \u6240\u9700\u7ecf\u8d39",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/manual/SCALE Apps/Quick-Start Guides/14-backup-restore.md",sourceDirName:"manual/SCALE Apps/Quick-Start Guides",slug:"/manual/SCALE Apps/Quick-Start Guides/backup-restore",permalink:"/zh/docs/manual/SCALE Apps/Quick-Start Guides/backup-restore",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/manual/SCALE Apps/Quick-Start Guides/14-backup-restore.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{},sidebar:"manualSidebar",previous:{title:"13 - Docker-Compose on SCALE",permalink:"/zh/docs/manual/SCALE Apps/Quick-Start Guides/docker-compose"},next:{title:"15 - \u8bbf\u95ee PVC \u6570\u636e",permalink:"/zh/docs/manual/SCALE Apps/Quick-Start Guides/pvc-access"}},c={},k=[{value:"B. \u6240\u9700\u7ecf\u8d39",id:"b-\u6240\u9700\u7ecf\u8d39",level:2},{value:"\u5907\u4efd",id:"\u5907\u4efd",level:2},{value:"\u521b\u5efa\u624b\u52a8\u5907\u4efd",id:"\u521b\u5efa\u624b\u52a8\u5907\u4efd",level:3},{value:"\u521b\u5efa\u5e38\u7528\u5907\u4efd",id:"\u521b\u5efa\u5e38\u7528\u5907\u4efd",level:3},{value:"\u5bfc\u51fa\u5907\u4efd",id:"\u5bfc\u51fa\u5907\u4efd",level:3},{value:"\u6b63\u5728\u68c0\u67e5\u5907\u4efd",id:"\u6b63\u5728\u68c0\u67e5\u5907\u4efd",level:3},{value:"\u6062\u590d",id:"\u6062\u590d",level:2},{value:"\u6062\u590d\u6b63\u5728\u8fd0\u884c\u7684\u7cfb\u7edf",id:"\u6062\u590d\u6b63\u5728\u8fd0\u884c\u7684\u7cfb\u7edf",level:3},{value:"\u5168\u90e8\u8fd8\u539f\u7cfb\u7edf",id:"\u5168\u90e8\u8fd8\u539f\u7cfb\u7edf",level:3},{value:"\u89c6\u9891\u6307\u5357",id:"\u89c6\u9891\u6307\u5357",level:2}],s={toc:k};function d(e){var t=e.components,u=(0,l.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},s,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"14-\u5907\u4efd\u548c\u6062\u590d"},"14-\u5907\u4efd\u548c\u6062\u590d"),(0,a.kt)("h2",{id:"b-\u6240\u9700\u7ecf\u8d39"},"B. \u6240\u9700\u7ecf\u8d39"),(0,a.kt)("p",null,"\u672c\u6307\u5357\u4f7f\u7528\u6211\u4eec\u7684\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"TrueTool"),"\u3002"),(0,a.kt)("p",null,"\u8fd9\u5e94\u8be5\u901a\u8fc7\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u5b89\u88c5\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"pip\u5b89\u88c5truetool")),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f\u8fd9\u9700\u8981\u5728\u6bcf\u6b21TrueNAS SCALE \u66f4\u65b0\u540e\u91cd\u65b0\u5b89\u88c5\u3002"),(0,a.kt)("h2",{id:"\u5907\u4efd"},"\u5907\u4efd"),(0,a.kt)("h3",{id:"\u521b\u5efa\u624b\u52a8\u5907\u4efd"},"\u521b\u5efa\u624b\u52a8\u5907\u4efd"),(0,a.kt)("p",null,"\u624b\u52a8\u5907\u4efd\u53ef\u4ee5\u8f7b\u677e\u4f7f\u7528 TrueTool\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"truetool-b")),(0,a.kt)("p",null,"\u5b83\u4f1a\u81ea\u52a8\u5220\u9664\u8fc7\u591a\u7684\u5907\u4efd\uff0c\u8fd9\u4e9b\u5907\u4efd\u9ed8\u8ba4\u4e3a\u6700\u591a14\u4e2a\u5907\u4efd\u3002 \u82e5\u8981\u589e\u52a0\u8fd9\u4e2a\u503c\uff0c\u8bf7\u4f7f\u7528\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"truetool-b 31")),(0,a.kt)("p",null,"\u8fd9\u4e5f\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u4e0e TrueTool update, sync, prune \u7b49\u7ec4\u5408\uff0c\u5982\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"truetool-b 31 -u -s -p")),(0,a.kt)("p",null,"\u8981\u627e\u51fa\u4ee5\u524d\u5907\u4efd\u7684\u5185\u5bb9\uff0c\u60a8\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"truetool-l")),(0,a.kt)("h3",{id:"\u521b\u5efa\u5e38\u7528\u5907\u4efd"},"\u521b\u5efa\u5e38\u7528\u5907\u4efd"),(0,a.kt)("p",null,"SCALE \u5305\u62ec\u4e00\u4e2a\u96c6\u6210\u7cfb\u7edf\u5907\u4efdKubernetes \u5bf9\u8c61\uff0c\u5e76\u5236\u4f5c ",(0,a.kt)("inlineCode",{parentName:"p"},"PVC")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"ix_volume")," \u5b58\u50a8\u7684\u5feb\u7167\u3002 \u7136\u800c\uff0c\u5b83\u5e76\u4e0d\u662f\u5728\u5347\u7ea7\u7684\u57fa\u7840\u4e0a\u521b\u5efa\u7684\u3002"),(0,a.kt)("p",null,"\u8981\u521b\u5efa\u6bcf\u65e5\u5907\u4efd\u7684 Kubernetes \u5bf9\u8c61\uff0c\u60a8\u60f3\u8981\u8fd0\u884c\u7684 TrueTool \u547d\u4ee4\uff0c\u5728SCALE UI \u4e2d\u521b\u5efa\u4e00\u4e2a Cron Job\u3002 \u5982\u679c\u60a8\u60f3\u8981\u786e\u4fddTrueTool \u81ea\u52a8\u66f4\u65b0\u548c/\u6216(\u91cd\u65b0)\u5728TrueNAS SCALE \u66f4\u65b0\u540e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pip\u5b89\u88c5--no-cache-dir --upgrade truetool && truetool-b -s -u -a -p")),(0,a.kt)("h3",{id:"\u5bfc\u51fa\u5907\u4efd"},"\u5bfc\u51fa\u5907\u4efd"),(0,a.kt)("p",null,"\u4ee5\u4e0a\u53ea\u80fd\u521b\u5efa\u4e00\u4e2a kubernetes \u5bf9\u8c61\u7684\u5907\u4efd\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"PVC")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"ix_volume")," \u5b58\u50a8\u7684\u5feb\u7167\u3002 \u8fd9\u4e9b\u5907\u4efd\u4fdd\u5b58\u5728\u76f8\u540c\u7684 ix_applications \u6570\u636e\u96c6\u4e2d\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u5b83\u6ca1\u6709\u4fdd\u62a4\u8fd9\u4e9b\u6570\u636e\u96c6\u6216\u5728\u5916\u90e8\u7cfb\u7edf\u4e0a\u4fdd\u5b58\u8fd9\u4e9b\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u6211\u4eec ",(0,a.kt)("strong",{parentName:"p"},"\u4e3a\u5185\u90e8\u5907\u4efd(\u5728\u540c\u4e00\u7cfb\u7edf\u4e0a\u5355\u72ec\u7684\u6570\u636e\u96c6) ",(0,a.kt)("em",{parentName:"strong"},"\u548c")," \u4e3a\u79bb\u7ad9\u5907\u4efd\u63d0\u4f9b\u4e86\u9ad8\u5ea6")," \u54a8\u8be2\u610f\u89c1\u3002 \u53ef\u4ee5\u521b\u5efa\u6b63\u5e38\u9012\u5f52(! \u4f7f\u7528 SCALE \u56fe\u5f62\u590d\u5236 ",(0,a.kt)("inlineCode",{parentName:"p"},"ix-volume")," \u6570\u636e\u96c6 \u901a\u8fc7\u7f16\u8f91\u521b\u5efa\u540e\u590d\u5236\u6765\u4f7f\u7528\u4ee5\u4e0b\u51e0\u4e2a\u7279\u6b8a\u7684\u6280\u5de7\uff1a"),(0,a.kt)("p",null,"\u8981\u505a\u5230\u8fd9\u4e00\u70b9\uff0c\u8bf7\u8bbe\u7f6e\u4ee5\u4e0b\u590d\u5236\u4efb\u52a1\uff1a"),(0,a.kt)("p",null,"1",(0,a.kt)("a",{target:"_blank",href:n(69685).Z},"rep1")," 1",(0,a.kt)("a",{target:"_blank",href:n(58305).Z},"rep2")),(0,a.kt)("p",null,"\u540c\u6837\u91cd\u8981\u7684\u662f\u786e\u4fdd\u60a8\u4fdd\u6301SCALE\u7cfb\u7edf\u672c\u8eab\u7684\u5b9a\u671f\u914d\u7f6e\u5907\u4efd\uff0c\u6700\u597d\u662f\u5728\u4e0a\u9762\u7684\u5e94\u7528\u7a0b\u5e8f\u5907\u4efd\u4e4b\u540e\u3002 \u4f46\u8fd9\u4e0d\u662f\u672c\u6307\u5357\u7684\u4e00\u90e8\u5206\uff0c\u6211\u4eec\u5c06\u5047\u5b9a\u4f60\u81ea\u5df1\u5df2\u7ecf\u8fd9\u6837\u505a\u3002"),(0,a.kt)("h3",{id:"\u6b63\u5728\u68c0\u67e5\u5907\u4efd"},"\u6b63\u5728\u68c0\u67e5\u5907\u4efd"),(0,a.kt)("p",null,"\u8981\u505a\u51fa\u5b58\u5728\u5907\u4efd\u7684\u51c6\u5907\uff0c\u53ef\u4ee5\u5728\u5916\u58f3\u4e2d\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"truetool-l")),(0,a.kt)("h2",{id:"\u6062\u590d"},"\u6062\u590d"),(0,a.kt)("p",null,"\u5907\u4efd\u7684\u6700\u91cd\u8981\u90e8\u5206\u4e4b\u4e00\u662f\u786e\u4fdd\u80fd\u591f\u6062\u590d\u3002 \u6709\u4e24\u4e2a\u573a\u666f\u53ef\u4ee5\u8fd8\u539f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6062\u590d\u5de5\u4f5c\u7cfb\u7edf")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5168\u90e8\u7cfb\u7edf\u6062\u590d"))),(0,a.kt)("h3",{id:"\u6062\u590d\u6b63\u5728\u8fd0\u884c\u7684\u7cfb\u7edf"},"\u6062\u590d\u6b63\u5728\u8fd0\u884c\u7684\u7cfb\u7edf"),(0,a.kt)("p",null,"\u8fd8\u539f\u4e00\u4e2a\u8fd0\u884c\u4e2d\u7684\u7cfb\u7edf\u662f\u5fae\u4e0d\u8db3\u9053\u7684\u3002 \u4f46\u6709\u51e0\u70b9\u544a\u8beb\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8fd9\u5c06\u91cd\u65b0\u521d\u59cb\u5316Kubernetes\u8282\u70b9\uff0c\u8fd9\u610f\u5473\u7740\u6240\u6709\u672a\u4f7f\u7528\u5e94\u7528\u7cfb\u7edf\u90e8\u7f72\u7684 kubernetes \u5bf9\u8c61\u5c06\u88ab\u6062\u590d"),(0,a.kt)("li",{parentName:"ul"},"\u60a8\u4e0d\u80fd\u6062\u590d\u5355\u4e2a\u5e94\u7528\u7a0b\u5e8f")),(0,a.kt)("p",null,"\u4e3a\u4e86\u6062\u590d\u73b0\u6709\u7684\u5236\u5ea6\uff0c\u8be5\u8fc7\u7a0b\u5982\u4e0b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"truetool-l")," \u5217\u51fa\u60a8\u5f53\u524d\u7684\u5907\u4efd")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u9009\u62e9\u5907\u4efd\u4ee5\u6062\u590d\u5e76\u6ce8\u660e\u5b83\u7684\u540d\u79f0")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8fd0\u884c: ",(0,a.kt)("inlineCode",{parentName:"p"},"truetool-r BACKUPNAME")," (\u5728\u8fd9\u4e2a\u5730\u65b9\u4f60\u7528\u4f60\u9009\u62e9\u7684\u5907\u4efd\u540d\u79f0\u66ff\u6362BACKUPNAME"))),(0,a.kt)("p",null,"\u8bf7\u8bb0\u4f4f\u8fd9\u53ef\u80fd\u4f1a\u82b1\u8d39\u4e00\u4e2aLONG\u65f6\u95f4\u3002"),(0,a.kt)("h3",{id:"\u5168\u90e8\u8fd8\u539f\u7cfb\u7edf"},"\u5168\u90e8\u8fd8\u539f\u7cfb\u7edf"),(0,a.kt)("p",null,"\u6709\u65f6\u5019\u4f60\u9700\u8981\u64e6\u9664\u4f60\u7684\u6c60\uff0c\u8fc1\u79fb\u5230\u4e00\u4e2a\u65b0\u6c60\uff0c\u6216\u8005\u5b8c\u5168\u8fd8\u539f\u7cfb\u7edf\u3002 \u91c7\u53d6\u4e0a\u8ff0\u6b65\u9aa4\u662f\u975e\u5e38\u53ef\u80fd\u7684\u3002"),(0,a.kt)("ol",{start:0},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c1a\u672a\u542f\u52a8 (\u9009\u62e9\u4e00\u4e2a\u6c60) \u5e94\u7528\u7a0b\u5e8f\u7cfb\u7edf\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u53ef\u9009\uff1a\u5f53SCALE \u7cfb\u7edf\u672c\u8eab\u4e5f\u88ab\u64e6\u9664\u65f6\uff0c\u786e\u4fdd\u5148\u4f7f\u7528 SCALE \u914d\u7f6e\u5bfc\u51fa **** \u8fd8\u539f\u5b83\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528 ZFS \u590d\u5236\uff0c\u5c06\u8fd4\u56de\u5148\u524d\u5907\u4efd\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ix-applications")," \u6570\u636e\u96c6\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7ee7\u7eed\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u4e0a\u5217\u51fa\u7684\u6b65\u9aa4\u6765\u6062\u590d\u4e00\u4e2a\u8fd0\u884c\u4e2d\u7684\u7cfb\u7edf")))),(0,a.kt)("h2",{id:"\u89c6\u9891\u6307\u5357"},"\u89c6\u9891\u6307\u5357"),(0,a.kt)("p",null,"\u5f85\u529e\u4e8b\u9879"))}d.isMDXComponent=!0},69685:function(e,t,n){t.Z=n.p+"assets/files/rep1-611ad95268be3243dddbc01908aed57d.png"},58305:function(e,t,n){t.Z=n.p+"assets/files/rep2-336a0551bfe9818fe4153cf4fb13d3d3.png"}}]);