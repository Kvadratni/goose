"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[6262],{1898:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>t,toc:()=>m});const t=JSON.parse('{"id":"tutorials/figma-mcp","title":"Figma Extension","description":"Add Figma MCP Server as a Goose Extension","source":"@site/docs/tutorials/figma-mcp.md","sourceDirName":"tutorials","slug":"/tutorials/figma-mcp","permalink":"/goose/docs/tutorials/figma-mcp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Figma Extension","description":"Add Figma MCP Server as a Goose Extension"},"sidebar":"tutorialSidebar","previous":{"title":"Fetch Extension","permalink":"/goose/docs/tutorials/fetch-mcp"},"next":{"title":"GitHub Extension","permalink":"/goose/docs/tutorials/github-mcp"}}');var o=i(4848),s=i(8453),a=i(5537),l=i(9329),r=i(5887);const d={title:"Figma Extension",description:"Add Figma MCP Server as a Goose Extension"},c=void 0,h={},m=[{value:"Configuration",id:"configuration",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Goose Prompt",id:"goose-prompt",level:3},{value:"Goose Output",id:"goose-output",level:3},{value:"Result",id:"result",level:3}];function g(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.A,{videoUrl:"https://www.youtube.com/embed/vHK9Xg_d6Sk"}),"\n",(0,o.jsxs)(n.p,{children:["This tutorial covers how to add the ",(0,o.jsx)(n.a,{href:"https://github.com/hapins/figma-mcp",children:"Figma MCP Server"})," as a Goose extension to enable interaction with Figma files, designs, and components."]}),"\n",(0,o.jsxs)(n.admonition,{title:"TLDR",type:"tip",children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Command"})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"npx @hapins/figma-mcp\n"})}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Environment Variable"})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"FIGMA_ACCESS_TOKEN: <YOUR_TOKEN>\n"})})]}),"\n",(0,o.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Note that you'll need ",(0,o.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," installed on your system to run this command, as it uses ",(0,o.jsx)(n.code,{children:"npx"}),"."]})}),"\n",(0,o.jsxs)(a.A,{groupId:"interface",children:[(0,o.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Run the ",(0,o.jsx)(n.code,{children:"configure"})," command:"]}),"\n"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["Choose to add a ",(0,o.jsx)(n.code,{children:"Command-line Extension"})]}),"\n"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c6  What type of extension would you like to add?\n  \u2502  \u25cb Built-in Extension \n  // highlight-start    \n  \u2502  \u25cf Command-line Extension (Run a local command or script)\n  // highlight-end    \n  \u2502  \u25cb Remote Extension \n  \u2514 \n"})}),(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"Give your extension a name"}),"\n"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c7  What type of extension would you like to add?\n  \u2502  Command-line Extension \n  \u2502\n  // highlight-start\n  \u25c6  What would you like to call this extension?\n  \u2502  figma\n  // highlight-end\n  \u2514 \n"})}),(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsx)(n.li,{children:"Enter the command"}),"\n"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c7  What type of extension would you like to add?\n  \u2502  Command-line Extension \n  \u2502\n  \u25c7  What would you like to call this extension?\n  \u2502  figma\n  \u2502\n  // highlight-start\n  \u25c6  What command should be run?\n  \u2502  npx @hapins/figma-mcp\n  // highlight-end\n  \u2514 \n"})}),(0,o.jsxs)(n.ol,{start:"5",children:["\n",(0,o.jsx)(n.li,{children:"Enter the number of seconds Goose should wait for actions to complete before timing out. Default is 300s"}),"\n"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:" \u250c   goose-configure \n \u2502\n \u25c7  What would you like to configure?\n \u2502  Add Extension \n \u2502\n \u25c7  What type of extension would you like to add?\n \u2502  Command-line Extension \n \u2502\n \u25c7  What would you like to call this extension?\n \u2502  figma\n \u2502\n \u25c7  What command should be run?\n \u2502  npx @hapins/figma-mcp\n \u2502\n // highlight-start\n \u25c6  Please set the timeout for this tool (in secs):\n \u2502  300\n // highlight-end\n \u2502\n \u2514 \n"})}),(0,o.jsxs)(n.ol,{start:"6",children:["\n",(0,o.jsxs)(n.li,{children:["Obtain a ",(0,o.jsx)(n.a,{href:"https://www.figma.com/developers/api#access-tokens",children:"Figma Access Token"})," and paste it in."]}),"\n"]}),(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"You can generate an access token from your Figma account settings under the Personal access tokens section."})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:" \u250c   goose-configure \n \u2502\n \u25c7  What would you like to configure?\n \u2502  Add Extension \n \u2502\n \u25c7  What type of extension would you like to add?\n \u2502  Command-line Extension \n \u2502\n \u25c7  What would you like to call this extension?\n \u2502  figma\n \u2502\n \u25c7  What command should be run?\n \u2502  npx @hapins/figma-mcp\n \u2502\n \u25c7  Please set the timeout for this tool (in secs):\n \u2502  300\n \u2502\n // highlight-start\n \u25c6  Would you like to add environment variables?\n \u2502  Yes \n \u2502\n \u25c7  Environment variable name:\n \u2502  FIGMA_ACCESS_TOKEN\n \u2502\n \u25c7  Environment variable value:\n \u2502  \u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\n \u2502\n \u25c7  Add another environment variable?\n \u2502  No \n // highlight-end\n \u2514  Added figma extension\n"})})]}),(0,o.jsx)(l.A,{value:"ui",label:"Goose Desktop",children:(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"goose://extension?cmd=npx&arg=-y&arg=%40hapins%2Ffigma-mcp&id=figma&name=Figma&description=Figma%20design%20tool%20integration&env=FIGMA_ACCESS_TOKEN%3DAccess%20token%20from%20Figma%20user%20settings",children:"Launch the installer"})}),"\n",(0,o.jsxs)(n.li,{children:["Press ",(0,o.jsx)(n.code,{children:"Yes"})," to confirm the installation"]}),"\n",(0,o.jsxs)(n.li,{children:["Obtain a ",(0,o.jsx)(n.a,{href:"https://www.figma.com/developers/api#access-tokens",children:"Figma Access Token"})," and paste it in"]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.code,{children:"Save Configuration"})]}),"\n",(0,o.jsxs)(n.li,{children:["Scroll to the top and click ",(0,o.jsx)(n.code,{children:"Exit"})," from the upper left corner"]}),"\n"]})})]}),"\n",(0,o.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,o.jsx)(n.p,{children:"The Figma MCP server allows you to interact with your Figma files and designs programmatically. When creating your access token, make sure you give it the appropriate access and scope:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Read access for files"}),"\n",(0,o.jsx)(n.li,{children:"Write access for Comments"}),"\n",(0,o.jsx)(n.li,{children:"And any other scopes of your choice."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Given this ",(0,o.jsx)(n.a,{href:"https://www.figma.com/community/file/1037030891378807455",children:"Community Figma design"}),", we'll have Goose build a webpage."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Figma Design",src:i(403).A+"",width:"3600",height:"2062"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Get the Figma File ID from the URL. For example, ",(0,o.jsx)(n.code,{children:"https://www.figma.com/file/KvR8Wpe6ITaCD3et3H7l6k/AI-Landing-Page"})," has a file ID of ",(0,o.jsx)(n.code,{children:"KvR8Wpe6ITaCD3et3H7l6k"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"goose-prompt",children:"Goose Prompt"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"( O)> Convert my figma design with file ID 7r0mLHWx2rrjwn79mcNVNE into a webpage. Get specific detailed information and styling about each element and components within each frame. Make sure to implement any interactions or animations and use a placeholder div with a gray background for images. \n\nSome elements are centralized, some are duplicated, make sure to get them correct. And ensure correct alignment and spacing between elements.\n"})}),"\n",(0,o.jsx)(n.h3,{id:"goose-output",children:"Goose Output"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"I'll help you convert your Figma design into a webpage. Let's break this down into steps and\n gather all the necessary information from your Figma file.\n\n1. First, let's get the file information to understand the overall structure:\n\n\u2500\u2500\u2500 get_file_info | figma \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\ndepth: 4\nfile_key: 7r0mLHWx2rrjwn79mcNVNE\n\n\n\nLet me help you convert this Figma design into a webpage. I'll create the HTML and CSS based\n on the design specifications from the Figma file. I'll break it down into sections and impl\nement all the styling and interactions.\n\nLet's create the files:\n\n\u2500\u2500\u2500 text_editor | developer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\npath: ~/D/w/l/m/figma-example/index.html\ncommand: write\nfile_text: ...\n\n\n### .../figma-example/index.html\n\n--- HTML content hidden ---\n\nNow, let's create the CSS file with all the styling:\n\n\u2500\u2500\u2500 text_editor | developer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\npath: ~/D/w/l/m/figma-example/styles.css\ncommand: write\nfile_text: ...\n\n\n### .../figma-example/styles.css\n\n--- CSS content hidden ---\n\nI've created a complete implementation of the Figma design with the following features and c\nonsiderations:\n\n1. **Typography**:\n- Used the exact fonts from the design: Poppins, Overpass, Nunito Sans, Public Sans, and Ral\neway\n- Implemented correct font weights, sizes, and letter spacing\n- Maintained the text hierarchy as shown in the design\n\n2. **Colors**:\n- Used the exact color codes from the Figma file\n- Implemented the proper background colors (#250b71 for header and footer)\n- Used correct text colors for different sections\n\n3. **Layout**:\n- Created a responsive layout that matches the design\n- Implemented proper spacing and alignment\n- Used CSS Grid for the book cards\n- Used Flexbox for navigation and content alignment\n\n4. **Components**:\n- Navigation bar with social media links\n- About Me section with placeholder for image\n- Education section with ordered list\n- Book cards with proper styling\n- Mood section with image placeholders\n- Footer with copyright text\n\n5. **Interactive Elements**:\n- Hover effects on navigation links\n- \"Next Section\" buttons with icons\n- \"Go on Top\" button at the bottom\n\n6. **Responsive Design**:\n- Added media queries for different screen sizes\n- Responsive adjustments for mobile and tablet views\n- Flexible layouts that adapt to different screen sizes\n\n7. **Images**:\n- Used placeholder divs with background colors for images\n- Maintained aspect ratios from the original design\n\n8. **Accessibility**:\n- Semantic HTML structure\n- Proper heading hierarchy\n- Alt text placeholders for images\n- Readable text contrast\n\nTo use this implementation:\n\n1. Make sure all the fonts are properly loaded (they're being loaded from Google Fonts)\n2. Replace the image placeholders with actual images\n3. Add proper links to the social media navigation\n4. Add any additional interactive features or animations as needed\n\nThe implementation maintains the visual hierarchy and styling of the original Figma design while \nensuring it's responsive and accessible. You can further customize the colors, spacing, \nand other properties by modifying the CSS variables if needed.\n\nWould you like me to add any specific interactions or make any adjustments to the implementation?\n"})}),"\n",(0,o.jsx)(n.h3,{id:"result",children:"Result"}),"\n",(0,o.jsx)(n.p,{children:"The Figma design has been successfully converted into a webpage with the styling, content and components from the original design."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Figma MCP Output",src:i(5478).A+"",width:"3600",height:"2068"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"In cases where you need to make additional changes, or the final output is not as expected - you can continue to interact with Goose to make adjustments."})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},5887:(e,n,i)=>{i.d(n,{A:()=>s});i(6540);var t=i(2362),o=i(4848);const s=e=>{let{videoUrl:n}=e;return(0,o.jsxs)("div",{children:[(0,o.jsx)(t.A,{type:"info",icon:"\ud83c\udfa5",title:"Plug & Play",className:"alert--video",children:(0,o.jsxs)("details",{children:[(0,o.jsx)("summary",{children:"Watch the demo"}),(0,o.jsx)("div",{style:{textAlign:"center",margin:"20px 0"},children:(0,o.jsx)("iframe",{width:"100%",height:"540",src:n,title:"YouTube Short",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})}),(0,o.jsx)("hr",{})]})}},403:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/figma-mcp-design-dac4a1618225011a385bb592858e3b3b.png"},5478:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/figma-mcp-output-3fa01318977684f5673d44f5b9ad7a19.png"}}]);