"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[71226],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(d,u(u({ref:t},l),{},{components:r})):n.createElement(d,u({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var c=2;c<o;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},40707:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),u=["components"],i={},p="PCI(-E) \u8bbe\u5907\u901a\u8fc7",c={unversionedId:"manual/SCALE Apps/Community Examples/pci-passthrough",id:"manual/SCALE Apps/Community Examples/pci-passthrough",title:"PCI(-E) \u8bbe\u5907\u901a\u8fc7",description:"\u8981\u901a\u8fc7\u60a8\u7684 PCI(-E) \u5361\uff0c\u60a8\u9700\u8981\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/manual/SCALE Apps/Community Examples/pci-passthrough.md",sourceDirName:"manual/SCALE Apps/Community Examples",slug:"/manual/SCALE Apps/Community Examples/pci-passthrough",permalink:"/zh/docs/manual/SCALE Apps/Community Examples/pci-passthrough",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/manual/SCALE Apps/Community Examples/pci-passthrough.md",tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"\u4e00. \u5bfc\u8a00",permalink:"/zh/docs/manual/intro"},next:{title:"TrueNAS Web GUI \u901a\u8fc7 Traefik \u5728\u7aef\u53e3 443",permalink:"/zh/docs/manual/SCALE Apps/Community Examples/truenas-web-gui-via-traefik"}},l={},s=[],m={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pci-e-\u8bbe\u5907\u901a\u8fc7"},"PCI(-E) \u8bbe\u5907\u901a\u8fc7"),(0,o.kt)("p",null,"\u8981\u901a\u8fc7\u60a8\u7684 PCI(-E) \u5361\uff0c\u60a8\u9700\u8981\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8f6c\u5230\u5df2\u5b89\u88c5\u7684\u5e94\u7528\u7a0b\u5e8f"),(0,o.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u5e94\u7528\u5361\u53f3\u4fa7\u7684\u83dc\u5355\u6309\u94ae"),(0,o.kt)("li",{parentName:"ul"},"\u9009\u62e9\u7f16\u8f91"),(0,o.kt)("li",{parentName:"ul"},"\u5411\u4e0b\u6eda\u52a8\u5230\u201c\u8d44\u6e90\u548c\u8bbe\u5907\u201d\u90e8\u5206"),(0,o.kt)("li",{parentName:"ul"},"\u5728\u914d\u7f6e\u6302\u8f7d USB \u8bbe\u5907\u4e0b\u5355\u51fb\u53f3\u4fa7\u7684\u6dfb\u52a0\u6309\u94ae (\u8fd9\u4e5f\u9002\u7528\u4e8ePCI \u8bbe\u5907)"),(0,o.kt)("li",{parentName:"ul"},"\u5728\u201c\u4e3b\u673a\u8bbe\u5907\u8def\u5f84\u201d & \u201c\u5bb9\u5668\u8bbe\u5907\u8def\u5f84\u201d\u4e2d\u8f93\u5165\u60a8\u7684\u5361\u7684 /dev/path (\u4f8b\u5982\uff1a\u5bf9\u4e8edvb \u8bbe\u5907\uff0c\u5b83\u5c06\u662f\uff1a/dev/dvb)"),(0,o.kt)("li",{parentName:"ul"},"\u63d0\u4ea4\u60a8\u7684\u66f4\u6539")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"*\u8fd9\u79cd\u65b9\u6cd5\u4e0d\u80fd\u4fdd\u8bc1\u6b63\u5e38\u8fd0\u884c\uff0c\u6211\u4eec\u76ee\u524d\u5b98\u65b9\u4e0d\u652f\u6301 PCI(-E) \u8bbe\u5907\u3002")))}f.isMDXComponent=!0}}]);