import{r as e,o as t,a,v as o,n,b as c,c as i,d as l,p,e as s,t as r,w as d,f as m,g as h,F as v,h as _,i as u,j as f,k as y}from"./vendor.06a1fbca.js";const g={hour12:!1,hour:"2-digit",minute:"2-digit"},V={weekday:"long",month:"long",day:"numeric"},L=e({}),A=e({locked:!0});function b(){function e(){let e=new Date;L.time=e.toLocaleTimeString("en-US",g),L.date=e.toLocaleDateString("en-US",V)}return t((()=>{e(),setInterval(e,1e3)})),{runApp:b}}function H(){return{lockPhone:function(){A.locked=!0},unlockPhone:function(){A.locked=!1}}}function E(e={}){const{immediate:t=!0,onNeedRefresh:c,onOfflineReady:i}=e,l=a(!1),p=a(!1);return{updateServiceWorker:function(e={}){const{immediate:t=!1,onNeedRefresh:a,onOfflineReady:c}=e;let i,l;if("serviceWorker"in navigator){i=new o("/sw.js",{scope:"/"}),i.addEventListener("activated",(e=>{e.isUpdate||null==c||c()}));{const e=()=>{null==a||a()};i.addEventListener("waiting",e),i.addEventListener("externalwaiting",e)}i.register({immediate:t}).then((e=>l=e))}return async(e=!0)=>{e&&(null==i||i.addEventListener("controlling",(e=>{e.isUpdate&&window.location.reload()}))),l&&l.waiting&&await n(l.waiting,{type:"SKIP_WAITING"})}}({immediate:t,onNeedRefresh(){l.value=!0,null==c||c()},onOfflineReady(){p.value=!0,null==i||i()}}),offlineReady:p,needRefresh:l}}const M={},w={width:"0",height:"0",viewBox:"0 0 0 0",version:"1.1",xmlns:"http://www.w3.org/2000/svg",class:"svg_defs"},C=l("defs",null,[l("symbol",{id:"icon_app-icon",viewBox:"0 0 130 130"},[l("path",{d:"M41.5 0L41.5 130M65.5 0L65.5 130M88.5 0L88.5 130M119.354 10.3536L9.35356 120.354M9.35355 8.64645L120.354 119.646M0 41.5H130M0 64.5H130M0 88.5H130M9 9H121V121H9V9ZM41 41H89V89H41V41ZM89 65C89 78.2548 78.2548 89 65 89C51.7452 89 41 78.2548 41 65C41 51.7452 51.7452 41 65 41C78.2548 41 89 51.7452 89 65ZM99 65C99 83.7777 83.7777 99 65 99C46.2223 99 31 83.7777 31 65C31 46.2223 46.2223 31 65 31C83.7777 31 99 46.2223 99 65ZM121 65C121 95.9279 95.9279 121 65 121C34.0721 121 9 95.9279 9 65C9 34.0721 34.0721 9 65 9C95.9279 9 121 34.0721 121 65Z"})]),l("symbol",{id:"icon_signal",viewBox:"0 0 20 20"},[l("path",{d:"M0 13H2.47826V15H0V13Z"}),l("path",{d:"M4.13043 11H6.6087V15H4.13043V11Z"}),l("path",{d:"M8.26087 9H10.7391V15H8.26087V9Z"}),l("path",{d:"M12.3913 7H14.8696V15H12.3913V7Z"}),l("path",{d:"M16.5217 5H19V15H16.5217V5Z"})]),l("symbol",{id:"icon_wifi",viewBox:"0 0 20 20"},[l("path",{d:"M1 7.51264L2.63636 9.0558C6.70273 5.22104 13.2973 5.22104 17.3636 9.0558L19 7.51264C14.0336 2.82914 5.97455 2.82914 1 7.51264ZM7.54545 13.6853L10 16L12.4545 13.6853C11.1045 12.4045 8.90364 12.4045 7.54545 13.6853ZM4.27273 10.599L5.90909 12.1421C8.16727 10.0126 11.8327 10.0126 14.0909 12.1421L15.7273 10.599C12.5691 7.62066 7.43909 7.62066 4.27273 10.599Z"})]),l("symbol",{id:"icon_bluetooth",viewBox:"0 0 20 20"},[l("path",{d:"M14 6.997L9.95673 3H9.24862V8.313L5.99843 5.1L5 6.087L8.9583 10L5 13.913L5.99843 14.9L9.24862 11.687V17H9.95673L14 13.003L10.9552 10L14 6.997ZM10.6648 5.681L11.9961 6.997L10.6648 8.313V5.681ZM11.9961 13.003L10.6648 14.319V11.687L11.9961 13.003V13.003Z"})]),l("symbol",{id:"icon_battery",viewBox:"0 0 20 20"},[l("path",{d:"M1.53846 6.66667H16.1538V13.3333H1.53846V6.66667Z"}),l("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M17.6923 12.5V13.3333C17.6923 14.2538 17.0035 15 16.1538 15H1.53846C0.688792 15 0 14.2538 0 13.3333V6.66667C0 5.74619 0.688793 5 1.53846 5H16.1538C17.0035 5 17.6923 5.74619 17.6923 6.66667V7.5H19.2308C19.6556 7.5 20 7.8731 20 8.33333V11.6667C20 12.1269 19.6556 12.5 19.2308 12.5H17.6923ZM1.53846 5.83333H16.1538C16.5787 5.83333 16.9231 6.20643 16.9231 6.66667V13.3333C16.9231 13.7936 16.5787 14.1667 16.1538 14.1667H1.53846C1.11363 14.1667 0.769231 13.7936 0.769231 13.3333V6.66667C0.769231 6.20643 1.11363 5.83333 1.53846 5.83333ZM17.6923 8.33333V11.6667H19.2308V8.33333H17.6923Z"})]),l("symbol",{id:"icon_locked",viewBox:"0 0 20 20"},[l("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.57895 9.33333V7.26979C6.57895 6.11823 6.89447 5.24914 7.54105 4.68783C8.16745 4.14405 8.98101 4 9.73684 4C10.4927 4 11.3062 4.14405 11.9326 4.68783C12.5792 5.24914 12.8947 6.11823 12.8947 7.26979V9.33333H13.9474C14.238 9.33333 14.4737 9.57211 14.4737 9.86667V15.4667C14.4737 15.7612 14.238 16 13.9474 16H5.52632C5.23564 16 5 15.7612 5 15.4667V9.86667C5 9.57211 5.23564 9.33333 5.52632 9.33333H6.57895ZM7.89474 7.26979C7.89474 6.35705 8.13886 5.92458 8.3971 5.7004C8.67552 5.4587 9.11196 5.33333 9.73684 5.33333C10.3617 5.33333 10.7982 5.4587 11.0766 5.7004C11.3348 5.92458 11.5789 6.35705 11.5789 7.26979V9.33333H7.89474V7.26979Z"})]),l("symbol",{id:"icon_plus",viewBox:"0 0 20 20"},[l("path",{fill:"#fff",d:"M12 1H8v7H1v4h7v7h4v-7h7V8h-7V1z"})]),l("symbol",{id:"icon_globe",viewBox:"0 0 20 20"},[l("path",{"fill-rule":"evenodd",d:"M10 19a9 9 0 100-18 9 9 0 000 18zm2.04-1.66a7.6 7.6 0 003.26-1.87 2.9 2.9 0 00-.52-.5c-.21-.16-.48-.32-.82-.48a12.17 12.17 0 01-1.92 2.85zm-1.35-.58a11.89 11.89 0 001.94-2.7c-.54-.12-1.18-.2-1.94-.24v2.94zm3.8-3.55a5.73 5.73 0 011.72 1.2 7.57 7.57 0 001.37-3.72H15c-.07.91-.25 1.75-.51 2.52zm-.88-3.9a8.74 8.74 0 00-.49-2.24c-.68.17-1.49.28-2.43.32v1.92h2.92zm.28-3.95a12.22 12.22 0 00-1.85-2.7c1.2.34 2.3.96 3.18 1.8a4.38 4.38 0 01-1.33.9zm.55 1.28c.28.8.49 1.7.56 2.67h2.58a7.57 7.57 0 00-1.44-3.81 5.76 5.76 0 01-1.7 1.14zm-3.75-3.4V6a11.4 11.4 0 001.86-.22 10.92 10.92 0 00-1.86-2.54zm2.49 9.53c.21-.64.37-1.33.43-2.08h-2.92v1.75c.97.04 1.79.16 2.49.33zm-5.9 3.75c.23.3.46.57.68.82a7.6 7.6 0 01-3.26-1.87c.12-.15.29-.32.52-.5.21-.16.48-.32.82-.48.37.78.81 1.46 1.24 2.03zm2.03-2.7v2.94a11.89 11.89 0 01-1.94-2.7c.54-.12 1.18-.2 1.94-.24zm0-1.38c-.97.04-1.79.16-2.49.33a8.71 8.71 0 01-.43-2.08h2.92v1.75zm0-3.13H6.39c.07-.8.24-1.55.49-2.24.68.17 1.49.28 2.43.32v1.92zM5 9.3c.06-.97.27-1.86.55-2.67a5.77 5.77 0 01-1.7-1.14 7.57 7.57 0 00-1.44 3.8H5zM9.3 6a11.4 11.4 0 01-1.86-.23A10.93 10.93 0 019.3 3.24V6zM7.28 3.47c.23-.3.46-.57.68-.82a7.6 7.6 0 00-3.18 1.8 4.38 4.38 0 001.33.9c.36-.71.77-1.34 1.17-1.88zm-1.77 9.73c-.26-.77-.44-1.61-.5-2.52H2.4A7.57 7.57 0 003.8 14.4a5.73 5.73 0 011.72-1.2z","clip-rule":"evenodd"})]),l("symbol",{id:"icon_alarm",viewBox:"0 0 20 20"},[l("path",{"fill-rule":"evenodd",d:"M10.038 17.7375c-3.6607 0-6.6283-2.9676-6.6283-6.6284 0-3.6607 2.9676-6.6283 6.6283-6.6283 3.6607 0 6.6283 2.9676 6.6283 6.6283 0 3.6608-2.9676 6.6284-6.6283 6.6284zm0 1.2625c-4.358 0-7.8909-3.5329-7.8909-7.8909 0-4.358 3.533-7.8908 7.8909-7.8908 4.358 0 7.8909 3.5328 7.8909 7.8908S14.396 19 10.038 19z","clip-rule":"evenodd"}),l("path",{"fill-rule":"evenodd",d:"M10.5115 6.513a.6312.6312 0 01.6312.6312v5.1814a.5.5 0 01-.5.5h-4.708a.6312.6312 0 110-1.2625h3.9455V7.1442a.6313.6313 0 01.6313-.6313z","clip-rule":"evenodd"}),l("path",{d:"M3.2116 2.3462c-1.2852.8999-1.5975 2.6712-.6976 3.9564l.4061.58c.6117-.9847 1.4283-1.8646 2.438-2.5715 1.0694-.7489 2.2471-1.2279 3.4522-1.4513l-.4538-.6482C7.4566.9264 5.6853.614 4.4 1.514l-1.1885.8322zM16.8644 2.3462c1.2852.9 1.5975 2.6712.6977 3.9564l-.4062.58c-.6116-.9847-1.4283-1.8645-2.4379-2.5715-1.0695-.7488-2.2472-1.2278-3.4523-1.4513l.4539-.6482c.8998-1.2851 2.6712-1.5975 3.9563-.6976l1.1885.8322z"})]),l("symbol",{id:"icon_stopwatch",viewBox:"0 0 20 20"},[l("path",{d:"M9.4858 6.0212h.6276v4.4472a.9418.9418 0 010 1.7758v.6812h-.6276v-.6812a.9418.9418 0 010-1.7758V6.0212z"}),l("path",{"fill-rule":"evenodd",d:"M8.8581 1h1.883v2.3585a7.798 7.798 0 013.0574 1.017l1.4862-1.8494 1.8166 1.4598-1.4863 1.8494c2.5943 2.8068 2.8128 7.1644.3465 10.2335-2.7142 3.3775-7.6527 3.9151-11.0302 1.2009-3.3776-2.7144-3.9152-7.6528-1.201-11.0303 1.3257-1.6497 3.182-2.6219 5.1278-2.8686V1zM5.7176 16.2912c-2.8371-2.28-3.2888-6.4284-1.0088-9.2655 2.28-2.837 6.4283-3.2888 9.2655-1.0088 2.8371 2.28 3.2888 6.4283 1.0088 9.2654-2.2801 2.8372-6.4283 3.2889-9.2655 1.0089z","clip-rule":"evenodd"})]),l("symbol",{id:"icon_timer",viewBox:"0 0 20 20"},[l("path",{"fill-rule":"evenodd",d:"M4.9888 17.2357C1.545 14.4681.9968 9.4327 3.7643 5.9888c2.7676-3.4438 7.803-3.992 11.2469-1.2245 3.4438 2.7676 3.9921 7.803 1.2245 11.2469-2.7676 3.4438-7.803 3.9921-11.2469 1.2245zm.8018-.9977a6.797 6.797 0 01-.3456-.2973l.9347-.9347-.4525-.4525-.932.932c-1.0668-1.1872-1.6469-2.6861-1.7095-4.2128h1.3217v-.6399H3.2898c.073-1.356.5566-2.7028 1.4722-3.8422a6.821 6.821 0 01.2973-.3456l.9162.9163c-.0767 1.2156 1.954 4.3304 2.6196 4.996.7498.7498 1.9654.7498 2.7152 0 .7498-.7498.7498-1.9654 0-2.7152-.68-.68-3.7854-2.917-4.9165-2.7677l-.8793-.8793c1.1627-1.0446 2.6244-1.6226 4.1182-1.7049V5.513h.64V4.2853c1.3879.0553 2.7709.5398 3.9367 1.4767a6.816 6.816 0 01.2755.2337l-.8647.8647.4526.4526.8684-.8685c1.0849 1.1738 1.6847 2.6643 1.7686 4.1883H15.487v.6399h1.2277c-.0553 1.3879-.5398 2.7709-1.4767 3.9367a6.9394 6.9394 0 01-.2337.2756l-.8647-.8647-.4525.4525.8684.8684c-1.1981 1.1073-2.726 1.7093-4.2828 1.7731v-1.3217h-.64v1.3176c-1.356-.073-2.7027-.5566-3.842-1.4722z","clip-rule":"evenodd"})]),l("symbol",{id:"icon_phone",viewBox:"0 0 20 20"},[l("path",{d:"M1.8945 2.2866c.0592-.1245.1838-.2008.3216-.205l2.6023-.0814a.3887.3887 0 01.379.2603L6.6537 6.427c.049.14.014.2957-.0902.4013L5.2693 8.1398c-.102.1033-.1375.2542-.0842.3892.2474.6262 1.0862 2.4698 2.909 4.0548 1.8155 1.5788 3.567 2.1957 4.1606 2.3717.131.0389.2703-.0026.3647-.1014l1.8083-1.8904a.3886.3886 0 01.4176-.0952l3.9028 1.467a.3889.3889 0 01.2519.3639v2.2986c0 .0985-.0368.1927-.1101.2584-.3752.3363-1.7124 1.3685-4.0686 1.4497-2.8182.0972-6.6192-1.2576-9.5454-4.0815-2.5528-2.4635-4.0597-5.5392-4.254-7.9687-.1593-1.9909.595-3.786.8726-4.3693z"})]),l("symbol",{id:"icon_phone_sharp",viewBox:"0 0 20 20"},[l("path",{d:"M3.073 11.53a.399.399 0 01-.018-.03l-2-3.71A.464.464 0 011 7.57V4.26c0-.164.085-.315.224-.398l3.01-1.797a.457.457 0 01.649.201l2.07 4.464a.464.464 0 01-.063.49L5.767 8.578a.695.695 0 00.051.942l5.615 5.437h.688l2.345-2.36a.457.457 0 01.613-.032l3.751 3.06c.108.088.17.22.17.359v.692a.462.462 0 01-.198.38l-2.687 1.872a.44.44 0 01-.21.078c-.467.045-2.26.196-3.44-.012-1.41-.248-2.174-.598-3.44-1.269-2.866-1.52-5.764-5.906-5.952-6.193z"})]),l("symbol",{id:"icon_back",viewBox:"0 0 20 20"},[l("path",{"fill-rule":"evenodd",d:"M6.7049 4c-.2578 0-.5123.0644-.7275.2063C3.7985 5.6428 1.7338 8.745 1.158 9.6523a.4712.4712 0 000 .508c.5757.9072 2.6404 4.0094 4.8193 5.4459.2152.1419.4697.2063.7275.2063h10.8197c.8148 0 1.4754-.6611 1.4754-1.4766V5.4766C19 4.661 18.3394 4 17.5246 4H6.7049zm1.2437 4.2962l.8995-.9001 2.0513 2.053 2.0514-2.053.8995.9001-2.0514 2.053 2.0514 2.053-.8995.9001-2.0514-2.0529-2.0513 2.0529-.8995-.9001L10 10.3492l-2.0514-2.053z","clip-rule":"evenodd"})]),l("symbol",{id:"icon_add_contact",viewBox:"0 0 20 20"},[l("path",{"fill-rule":"evenodd",d:"M8.82 12.29c-.783.457-1.872 1.211-2.236 1.467a.293.293 0 00-.125.24v1.55H19v-1.55a.293.293 0 00-.125-.24c-.364-.256-1.453-1.01-2.236-1.467-.697-.408-1.73-.918-2.193-1.143a.298.298 0 01-.15-.369l.565-1.577a.295.295 0 00.012-.042c.032-.165.238-1.252.29-1.978.041-.554.024-1.332.011-1.734a.563.563 0 00-.218-.429c-.168-.13-.41-.31-.604-.428-.33-.201-.517-.325-.885-.444a4.834 4.834 0 00-.701-.143.265.265 0 00-.073 0c-.114.015-.469.067-.701.143-.368.119-.555.243-.885.444a7.418 7.418 0 00-.604.428.563.563 0 00-.218.429c-.013.402-.03 1.18.01 1.734.053.726.26 1.813.291 1.978a.295.295 0 00.012.042l.565 1.577a.298.298 0 01-.15.37c-.463.224-1.496.734-2.193 1.142z","clip-rule":"evenodd"}),l("path",{d:"M4.689 6.811H3.213v2.073H1v1.48h2.213v2.222H4.69v-2.221h2.065V8.884H4.69V6.811z"})]),l("symbol",{id:"icon_contacts",viewBox:"0 0 20 20"},[l("path",{"fill-rule":"evenodd",d:"M4.388 13.855c-1.123.654-2.686 1.733-3.21 2.099a.419.419 0 00-.178.344v2.216h18v-2.216a.419.419 0 00-.179-.344c-.523-.366-2.086-1.445-3.21-2.099-1-.583-2.482-1.312-3.148-1.633a.426.426 0 01-.215-.528l.812-2.255a.397.397 0 00.016-.06c.046-.237.342-1.791.418-2.83.058-.792.034-1.904.015-2.48a.805.805 0 00-.313-.613 10.689 10.689 0 00-.867-.612c-.474-.288-.742-.465-1.27-.636-.333-.107-.844-.182-1.007-.204a.382.382 0 00-.104 0c-.163.022-.673.097-1.007.204-.528.17-.796.348-1.27.636-.279.169-.625.426-.867.612a.805.805 0 00-.313.613c-.019.576-.043 1.688.015 2.48.076 1.039.372 2.593.417 2.83a.4.4 0 00.017.06l.812 2.255a.426.426 0 01-.216.527c-.665.322-2.146 1.051-3.148 1.634z","clip-rule":"evenodd"})]),l("symbol",{id:"icon_favorite",viewBox:"0 0 20 20"},[l("path",{d:"M10 1l2.91 5.46L19 7.538l-4.293 4.454.855 6.126L10 15.412 4.438 18.12l.855-6.126L1 7.539l6.09-1.08L10 1z"})]),l("symbol",{id:"icon_keypad",viewBox:"0 0 20 20"},[l("path",{d:"M1 1h4.588v4.059H1V1zM7.706 1h4.588v4.059H7.706V1zM14.412 1H19v4.059h-4.588V1zM1 7.706h4.588v4.059H1v-4.06zM7.706 7.706h4.588v4.059H7.706v-4.06zM14.412 7.706H19v4.059h-4.588v-4.06zM1 14.412h4.588v4.059H1v-4.06zM7.706 14.412h4.588v4.059H7.706v-4.06zM14.412 14.412H19v4.059h-4.588v-4.06z"})]),l("symbol",{id:"icon_recent",viewBox:"0 0 20 20"},[l("path",{"fill-rule":"evenodd",d:"M10 17.56a7.56 7.56 0 100-15.12 7.56 7.56 0 000 15.12zM10 19a9 9 0 100-18 9 9 0 000 18z","clip-rule":"evenodd"}),l("path",{"fill-rule":"evenodd",d:"M9.46 4.758a.72.72 0 00-.72.72v5.76c0 .397.322.72.72.72h5.22a.72.72 0 000-1.44h-4.5v-5.04a.72.72 0 00-.72-.72z","clip-rule":"evenodd"})]),l("symbol",{id:"icon_voicemail",viewBox:"0 0 20 20"},[l("path",{"fill-rule":"evenodd",d:"M7.943 13.698a4.302 4.302 0 10-2.64.906h9.508v-.002a4.302 4.302 0 10-2.754-.904H7.943zm-2.641-.792a2.604 2.604 0 100-5.208 2.604 2.604 0 000 5.208zm9.396 0a2.604 2.604 0 100-5.208 2.604 2.604 0 000 5.208z","clip-rule":"evenodd"})]),l("symbol",{id:"icon_arrow_more",viewBox:"0 0 20 20"},[l("path",{"fill-rule":"evenodd",d:"M9.841 10L5.17 15.255a2.25 2.25 0 103.363 2.99l5.823-6.55a2.55 2.55 0 000-3.39l-5.823-6.55a2.25 2.25 0 00-3.363 2.99L9.84 10z","clip-rule":"evenodd"})])],-1);M.render=function(e,t){return c(),i("svg",w,[C])};const k=d();p("data-v-8d081ccc");const z={class:"status-bar"},R={class:"group left"},I={class:"operator"},T={class:"group center"},P={key:1,class:"time"},x={class:"group right"},D={class:"battery-status"},O={class:"battery-icon",viewBox:"0 0 20 20"},j=l("path",{class:"battery-body","fill-rule":"evenodd","clip-rule":"evenodd",d:"M17.6923 12.5V13.3333C17.6923 14.2538 17.0035 15 16.1538 15H1.53846C0.688792 15 0 14.2538 0 13.3333V6.66667C0 5.74619 0.688793 5 1.53846 5H16.1538C17.0035 5 17.6923 5.74619 17.6923 6.66667V7.5H19.2308C19.6556 7.5 20 7.8731 20 8.33333V11.6667C20 12.1269 19.6556 12.5 19.2308 12.5H17.6923ZM1.53846 5.83333H16.1538C16.5787 5.83333 16.9231 6.20643 16.9231 6.66667V13.3333C16.9231 13.7936 16.5787 14.1667 16.1538 14.1667H1.53846C1.11363 14.1667 0.769231 13.7936 0.769231 13.3333V6.66667C0.769231 6.20643 1.11363 5.83333 1.53846 5.83333ZM17.6923 8.33333V11.6667H19.2308V8.33333H17.6923Z"},null,-1);s();const S=k(((e,t,a,o,n,p)=>{const s=m("glyph");return c(),i("div",z,[l("div",R,[l(s,{name:"signal"}),l("div",I,"AT&T "+r(o.connectionInfo.type),1),l(s,{name:"wifi"})]),l("div",T,[o.appState.locked?(c(),i(s,{key:0,name:"locked"})):(c(),i("div",P,r(o.dateTime.time),1))]),l("div",x,[l(s,{name:"bluetooth"}),l("div",D,[(c(),i("svg",O,[l("path",{class:"battery-energy",style:p.batteryLevel,d:"M1.53846 6.66667H16.1538V13.3333H1.53846V6.66667Z"},null,4),j]))])])])}));const B={name:"statusBar",computed:{batteryLevel(){let e=100*this.batteryInfo.level,t=[];return this.batteryInfo.charging&&t.push("fill:#1CC454"),e<=20&&t.push("fill:yellow"),e<=10&&t.push("fill:red"),t.push(`clip-path:polygon(0% 0%, ${e}% 0%, ${e}% 100%, 0% 100%)`),t}},setup(){let a=e({charging:!1,level:1}),o=e({type:""});if(navigator.getBattery&&navigator.getBattery().then((function(e){a.charging=e.charging,a.level=e.level,e.addEventListener("chargingchange",(function(){a.charging=e.charging})),e.addEventListener("levelchange",(function(){a.level=e.level}))})),navigator.connection){let e=navigator.connection;o.type=e.effectiveType,o.signal=e.rtt,console.log(e),e.addEventListener("change",(function(){o.type=e.effectiveType,o.signal=e.rtt}))}return t((()=>{})),{dateTime:L,appState:A,batteryInfo:a,connectionInfo:o}}};B.render=S,B.__scopeId="data-v-8d081ccc";const Z=d()(((e,t,a,o,n,l)=>(c(),i("div",{class:"ui-glare",style:{height:a.height,opacity:a.opacity,borderRadius:a.borderRadius}},null,4))));const U={name:"uiGlare",props:{height:String,opacity:String,borderRadius:String}};U.render=Z,U.__scopeId="data-v-0260385b";const W=d();p("data-v-4ebe8354");const $={class:"system-dialog"},N={key:0,class:"title"},G={key:1,class:"content"},F={key:2,class:"buttons"},K={class:"label"};s();const q=W(((e,t,a,o,n,p)=>{const s=m("uiGlare");return c(),i("div",$,[l(s,{height:"1.2em",opacity:"0.7"}),a.title?(c(),i("div",N,r(a.title),1)):h("",!0),a.content?(c(),i("div",G,r(a.content),1)):h("",!0),a.buttons?(c(),i("div",F,[(c(!0),i(v,null,_(a.buttons,(e=>(c(),i("button",{onClick:e.method},[l(s,{height:"45%",opacity:"0.7",borderRadius:"0"}),l("div",K,r(e.label),1)],8,["onClick"])))),256))])):h("",!0)])}));const J={name:"systemDialog",components:{uiGlare:U},props:{title:String,content:String,buttons:Array}};J.render=q,J.__scopeId="data-v-4ebe8354";const Q={class:"app-container"},X={key:0,class:"screen loading"},Y=l("svg",{class:"apple-logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 136.46 162"},[l("path",{d:"M133.6 126.25a88.08 88.08 0 01-8.71 15.66c-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.2-2.12-9.97-3.17-14.34-3.17-4.58 0-9.5 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.93.21-9.84-1.96-14.74-6.52-3.13-2.73-7.05-7.4-11.74-14.04-5.03-7.08-9.17-15.29-12.4-24.65C1.73 106.68 0 96.88 0 87.4c0-10.85 2.35-20.22 7.04-28.07 3.7-6.3 8.61-11.27 14.76-14.92a39.7 39.7 0 0119.95-5.63c3.91 0 9.05 1.21 15.43 3.6 6.36 2.38 10.44 3.6 12.24 3.6 1.33 0 5.87-1.42 13.57-4.25 7.27-2.62 13.41-3.7 18.44-3.27 13.63 1.1 23.87 6.47 30.68 16.15-12.19 7.39-18.22 17.73-18.1 31 .11 10.34 3.86 18.94 11.23 25.77a36.9 36.9 0 0011.22 7.36c-.9 2.61-1.85 5.11-2.86 7.51zm-31.26-123c0 8.1-2.96 15.66-8.86 22.66-7.12 8.32-15.73 13.13-25.07 12.38-.12-.98-.19-2-.19-3.08 0-7.77 3.39-16.1 9.4-22.9 3-3.45 6.82-6.31 11.45-8.6 4.62-2.25 8.99-3.5 13.1-3.71.12 1.08.17 2.17.17 3.24z"})],-1),ee={key:1,class:"screen"},te={class:"main"},ae={class:"phone-body"};const oe={name:"App",components:{glyphsSet:M,statusBar:B,systemDialog:J},data:()=>({ready:!0}),methods:{goHome(){this.$router.push({name:"homeScreen"})}},setup(){const{runApp:e}=b(),{offlineReady:a,needRefresh:o,updateServiceWorker:n}=E();return t((()=>e())),{needRefresh:o,updateServiceWorker:n,cancelUpdate:async()=>{a.value=!1,o.value=!1}}}};let ne;oe.render=function(e,t,a,o,n,p){const s=m("glyphs-set"),r=m("systemDialog"),d=m("status-bar"),_=m("router-view");return c(),i(v,null,[l(s),l("div",Q,[n.ready?(c(),i("div",ee,[o.needRefresh?(c(),i(r,{key:0,title:"Update available",content:"New version of this App is available.",buttons:[{label:"Cancel",method:o.cancelUpdate},{label:"Update",method:o.updateServiceWorker}]},null,8,["buttons"])):h("",!0),l(d),l("div",te,[l(_)])])):(c(),i("div",X,[Y])),l("div",ae,[l("div",{class:"home-button",onClick:t[1]||(t[1]=(...e)=>p.goHome&&p.goHome(...e))})])])],64)};const ce={},ie=function(e,t){if(!t)return e();if(void 0===ne){const e=document.createElement("link").relList;ne=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in ce)return;ce[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":ne,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e()))},le=[{path:"/",name:"lockScreen",component:()=>ie((()=>import("./lockScreen.e8fa99bc.js")),["/assets/lockScreen.e8fa99bc.js","/assets/lockScreen.e14cb2dd.css","/assets/vendor.06a1fbca.js"])},{path:"/home",name:"homeScreen",component:()=>ie((()=>import("./homeScreen.072faf99.js")),["/assets/homeScreen.072faf99.js","/assets/homeScreen.b4b786ac.css","/assets/vendor.06a1fbca.js"])},{path:"/apps/clock",component:()=>ie((()=>import("./clockApp.489fb88f.js")),["/assets/clockApp.489fb88f.js","/assets/clockApp.315bee0d.css","/assets/navigationBar.9756a5fe.js","/assets/navigationBar.3e663fc7.css","/assets/vendor.06a1fbca.js","/assets/navigationBarButton.9c9f2c6c.js","/assets/navigationBarButton.d5229834.css","/assets/tabBar.e72bdf2f.js","/assets/tabBar.c10dbfaf.css"]),children:[{path:"world-clock",name:"clockApp_worldClock",component:()=>ie((()=>import("./worldClock.2f32c72e.js")),["/assets/worldClock.2f32c72e.js","/assets/worldClock.0a04049e.css","/assets/vendor.06a1fbca.js"]),meta:{title:"World Clock"}},{path:"alarm",name:"clockApp_alarm",component:()=>ie((()=>import("./alarm.ccd4e1ae.js")),["/assets/alarm.ccd4e1ae.js","/assets/vendor.06a1fbca.js"]),meta:{title:"Alarm"}},{path:"stopwatch",name:"clockApp_stopwatch",component:()=>ie((()=>import("./stopwatch.24173b10.js")),["/assets/stopwatch.24173b10.js","/assets/vendor.06a1fbca.js"]),meta:{title:"Stopwatch"}},{path:"timer",name:"clockApp_timer",component:()=>ie((()=>import("./timer.8fa3c0b4.js")),["/assets/timer.8fa3c0b4.js","/assets/vendor.06a1fbca.js"]),meta:{title:"Timer"}},{path:"",redirect:{name:"clockApp_worldClock"}}]},{path:"/apps/phone",component:()=>ie((()=>import("./phoneApp.71b2dba8.js")),["/assets/phoneApp.71b2dba8.js","/assets/phoneApp.f4d783f6.css","/assets/tabBar.e72bdf2f.js","/assets/tabBar.c10dbfaf.css","/assets/vendor.06a1fbca.js"]),children:[{path:"favorites",name:"phoneApp_favorites",component:()=>ie((()=>import("./favorites.75e2c40d.js")),["/assets/favorites.75e2c40d.js","/assets/vendor.06a1fbca.js"]),meta:{title:"Favorites"}},{path:"recents",name:"phoneApp_recents",component:()=>ie((()=>import("./recents.855c17f6.js")),["/assets/recents.855c17f6.js","/assets/recents.9ccd2b35.css","/assets/store.c3459de2.js","/assets/index.bc852a36.js","/assets/vendor.06a1fbca.js","/assets/navigationBar.9756a5fe.js","/assets/navigationBar.3e663fc7.css","/assets/navigationBarButton.9c9f2c6c.js","/assets/navigationBarButton.d5229834.css"]),meta:{title:"Recents"}},{path:"contacts",name:"phoneApp_contacts",component:()=>ie((()=>import("./contacts.0d5496c6.js")),["/assets/contacts.0d5496c6.js","/assets/vendor.06a1fbca.js"]),meta:{title:"Contacts"}},{path:"keypad",name:"phoneApp_keypad",component:()=>ie((()=>import("./keypad.c5bf79f1.js")),["/assets/keypad.c5bf79f1.js","/assets/keypad.0dc9c971.css","/assets/store.c3459de2.js","/assets/index.bc852a36.js","/assets/vendor.06a1fbca.js"]),meta:{title:"Keypad"}},{path:"voicemail",name:"phoneApp_voicemail",component:()=>ie((()=>import("./voicemail.5d8b5ca3.js")),["/assets/voicemail.5d8b5ca3.js","/assets/vendor.06a1fbca.js"]),meta:{title:"Voicemail"}},{path:"",redirect:{name:"phoneApp_keypad"}}]},{path:"/apps/text",name:"textApp",component:()=>ie((()=>import("./textApp.9e243097.js")),["/assets/textApp.9e243097.js","/assets/textApp.d29d1dbd.css","/assets/vendor.06a1fbca.js"])},{path:"/apps/calendar",name:"calendarApp",component:()=>ie((()=>import("./calendarApp.526072eb.js")),["/assets/calendarApp.526072eb.js","/assets/vendor.06a1fbca.js"])},{path:"/apps/photos",name:"photosApp",component:()=>ie((()=>import("./photosApp.f253a10c.js")),["/assets/photosApp.f253a10c.js","/assets/vendor.06a1fbca.js"])},{path:"/apps/camera",name:"cameraApp",component:()=>ie((()=>import("./cameraApp.dcc14b3a.js")),["/assets/cameraApp.dcc14b3a.js","/assets/vendor.06a1fbca.js"])},{path:"/apps/youtube",name:"youTubeApp",component:()=>ie((()=>import("./youTubeApp.b0d3d51f.js")),["/assets/youTubeApp.b0d3d51f.js","/assets/vendor.06a1fbca.js"])},{path:"/apps/stocks",name:"stocksApp",component:()=>ie((()=>import("./stocksApp.84d02d11.js")),["/assets/stocksApp.84d02d11.js","/assets/vendor.06a1fbca.js"])},{path:"/apps/maps",name:"mapsApp",component:()=>ie((()=>import("./mapsApp.88e9e2a5.js")),["/assets/mapsApp.88e9e2a5.js","/assets/vendor.06a1fbca.js"])},{path:"/apps/weather",name:"weatherApp",component:()=>ie((()=>import("./weatherApp.6698d4e3.js")),["/assets/weatherApp.6698d4e3.js","/assets/vendor.06a1fbca.js"])},{path:"/apps/calculator",name:"calculatorApp",component:()=>ie((()=>import("./calculatorApp.f48720d9.js")),["/assets/calculatorApp.f48720d9.js","/assets/vendor.06a1fbca.js"])},{path:"/apps/notes",name:"notesApp",component:()=>ie((()=>import("./startScreen.fed4586a.js")),["/assets/startScreen.fed4586a.js","/assets/startScreen.76257b3d.css","/assets/navigationBar.9756a5fe.js","/assets/navigationBar.3e663fc7.css","/assets/vendor.06a1fbca.js","/assets/store.c3459de2.js","/assets/index.bc852a36.js"])},{path:"/apps/notes/:id",name:"noteScreen",component:()=>ie((()=>import("./noteScreen.af8fecf7.js")),["/assets/noteScreen.af8fecf7.js","/assets/noteScreen.7a985b07.css","/assets/navigationBar.9756a5fe.js","/assets/navigationBar.3e663fc7.css","/assets/vendor.06a1fbca.js","/assets/index.bc852a36.js"])},{path:"/apps/settings",name:"settings",component:()=>ie((()=>import("./settings.acf1f0c0.js")),["/assets/settings.acf1f0c0.js","/assets/vendor.06a1fbca.js"])},{path:"/apps/mail",name:"mailApp",component:()=>ie((()=>import("./mailApp.536ec3a4.js")),["/assets/mailApp.536ec3a4.js","/assets/vendor.06a1fbca.js"])},{path:"/apps/safari",name:"safariApp",component:()=>ie((()=>import("./safariApp.ce5c7c54.js")),["/assets/safariApp.ce5c7c54.js","/assets/vendor.06a1fbca.js"])},{path:"/apps/ipod",name:"iPodApp",component:()=>ie((()=>import("./iPodApp.01478142.js")),["/assets/iPodApp.01478142.js","/assets/vendor.06a1fbca.js"])},{path:"/:pathMatch(.*)*",redirect:{name:"Home Screen"}}];var pe=u({history:f(),routes:le});const se=d()(((e,t,a,o,n,p)=>(c(),i("svg",{class:["icon",`icon-${a.name}`]},[l("use",{"xlink:href":`#icon_${a.name}`},null,8,["xlink:href"])],2))));const re={props:{name:String}};re.render=se,re.__scopeId="data-v-97f5d626",function(e={}){const{immediate:t=!1,onNeedRefresh:a,onOfflineReady:n}=e;let c,i;if("serviceWorker"in navigator){c=new o("/sw.js",{scope:"/"}),c.addEventListener("activated",(e=>{e.isUpdate||null==n||n()}));{const e=()=>{null==a||a()};c.addEventListener("waiting",e),c.addEventListener("externalwaiting",e)}c.register({immediate:t}).then((e=>i=e))}}(),y(oe).use(pe).component("glyph",re).mount("#app");export{H as a,L as d};
