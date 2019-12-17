(this["webpackJsonpproject-4"]=this["webpackJsonpproject-4"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(7),r=a.n(l),i=(a(14),a(1)),s=a(2),c=a(4),u=a(3),p=a(5),h=(a(15),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("article",null,o.a.createElement("div",{className:"build-header"},o.a.createElement("h1",null,this.props.buildData.id)),o.a.createElement("div",{className:"build-body"},"CPU: ",this.props.buildData.cpu,o.a.createElement("br",null),"CPU Cooler: ",this.props.buildData.cpucooler,o.a.createElement("br",null),"Motherboard: ",this.props.buildData.motherboard,o.a.createElement("br",null),"Memory: ",this.props.buildData.memory,o.a.createElement("br",null),"Storage: ",this.props.buildData.storage,o.a.createElement("br",null),"Video Card: ",this.props.buildData.videocard,o.a.createElement("br",null),"Case: ",this.props.buildData.compcase,o.a.createElement("br",null),"Power Supply: ",this.props.buildData.powersupply,o.a.createElement("br",null),"OS: ",this.props.buildData.os,o.a.createElement("br",null),"Fan: ",this.props.buildData.fan,o.a.createElement("br",null),"Monitor: ",this.props.buildData.monitor,o.a.createElement("br",null),"Keyboard: ",this.props.buildData.keyboard,o.a.createElement("br",null),"Mouse: ",this.props.buildData.mouse),o.a.createElement("div",{className:"build-options"},o.a.createElement("ul",null,o.a.createElement("li",{onClick:function(){e.props.handleView("editBuild",e.props.buildData)}},"Edit Build"),o.a.createElement("li",{onClick:function(){e.props.handleDelete(e.props.buildData.id)}},"Delete Build"))))}}]),t}(o.a.Component)),d=a(8),m=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){e.setState(Object(d.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),"addBuild"===e.props.view.page?e.props.handleCreate(e.state):"editBuild"===e.props.view.page&&e.props.handleUpdate(e.state)},e.state={cpu:"",cpucooler:"",motherboard:"",memory:"",storage:"",videocard:"",compcase:"",powersupply:"",os:"",fan:"",monitor:"",keyboard:"",mouse:"",id:null},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({cpu:this.props.formInputs.cpu,cpucooler:this.props.formInputs.cpucooler,motherboard:this.props.formInputs.motherboard,memory:this.props.formInputs.memory,storage:this.props.formInputs.storage,videocard:this.props.formInputs.videocard,compcase:this.props.formInputs.compcase,powersupply:this.props.formInputs.powersupply,os:this.props.formInputs.os,fan:this.props.formInputs.fan,monitor:this.props.formInputs.monitor,keyboard:this.props.formInputs.keyboard,mouse:this.props.formInputs.mouse,id:this.props.formInputs.id})}},{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",null,"CPU",o.a.createElement("input",{type:"text",placeholder:"Intel/AMD",id:"cpu",value:this.state.cpu,onChange:this.handleChange})),o.a.createElement("label",null,"CPU Cooler",o.a.createElement("input",{type:"text",placeholder:"Air Cooler/Liquid Cooler",id:"cpucooler",value:this.state.cpucooler,onChange:this.handleChange})),o.a.createElement("label",null,"Motherboard",o.a.createElement("input",{type:"text",placeholder:"Intel B/H/Z Series or AMD B/X Series ",id:"motherboard",value:this.state.motherboard,onChange:this.handleChange})),o.a.createElement("label",null,"Memory",o.a.createElement("input",{type:"text",placeholder:"Memory Capacity/Speed/CAS Latency",id:"memory",value:this.state.memory,onChange:this.handleChange})),o.a.createElement("label",null,"Storage",o.a.createElement("input",{type:"text",placeholder:"Capacity and M.2/2.5in/3.5in Form Factor",id:"storage",value:this.state.storage,onChange:this.handleChange})),o.a.createElement("label",null,"Video Card",o.a.createElement("input",{type:"text",placeholder:"Geforce-GTX/RTX or Radeon-RX Series ",id:"videocard",value:this.state.videocard,onChange:this.handleChange})),o.a.createElement("label",null,"Case",o.a.createElement("input",{type:"text",placeholder:"ATX/EATX/Micro ATX/Mini ITX",id:"compcase",value:this.state.compcase,onChange:this.handleChange})),o.a.createElement("label",null,"Power Supply",o.a.createElement("input",{type:"text",placeholder:"Wattage and Rating",id:"powersupply",value:this.state.powersupply,onChange:this.handleChange})),o.a.createElement("label",null,"Operating System",o.a.createElement("input",{type:"text",placeholder:"Windows/OSX/Linux",id:"os",value:this.state.os,onChange:this.handleChange})),o.a.createElement("label",null,"Fans",o.a.createElement("input",{type:"text",placeholder:"Are they RGB?",id:"fan",value:this.state.fan,onChange:this.handleChange})),o.a.createElement("label",null,"Monitor",o.a.createElement("input",{type:"text",placeholder:"Size/Resolution/Refresh Rate",id:"monitor",value:this.state.monitor,onChange:this.handleChange})),o.a.createElement("label",null,"Keyboard",o.a.createElement("input",{type:"text",placeholder:"It better have good switches",id:"keyboard",value:this.state.keyboard,onChange:this.handleChange})),o.a.createElement("label",null,"Mouse",o.a.createElement("input",{type:"text",placeholder:"More RGB?",id:"mouse",value:this.state.mouse,onChange:this.handleChange})),o.a.createElement("input",{type:"submit",value:"share"}))}}]),t}(o.a.Component),b="";console.log("this is for heroku");var f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).fetchBuilds=function(){fetch("".concat(b,"/builds")).then((function(e){return e.json()})).then((function(e){a.setState({builds:e})})).catch((function(e){return console.log(e)}))},a.handleCreate=function(e){fetch("".concat(b,"/builds"),{body:JSON.stringify(e),method:"POST",headers:{Accept:"application.json, text/plain, */*","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){a.props.handleView("home"),a.setState((function(t){return t.builds=e,{builds:t.builds}}))})).catch((function(e){return console.log(e)}))},a.handleUpdate=function(e){fetch("".concat(b,"/builds/").concat(e.id),{body:JSON.stringify(e),method:"PUT",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"}}).then((function(e){a.props.handleView("home"),a.fetchBuilds()})).catch((function(e){return console.log(e)}))},a.handleDelete=function(e){fetch("".concat(b,"/builds/").concat(e),{method:"DELETE",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"}}).then((function(t){a.setState((function(t){return{builds:t.builds.filter((function(t){return t.id!==e}))}}))})).catch((function(e){return console.log(e)}))},a.state={builds:[]},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchBuilds()}},{key:"render",value:function(){var e=this;return o.a.createElement("main",null,o.a.createElement("h1",null," ",this.props.view.pageTitle," "),"home"===this.props.view.page?this.state.builds.map((function(t){return o.a.createElement(h,{key:t.id,buildData:t,handleView:e.props.handleView,handleDelete:e.handleDelete})})):o.a.createElement(m,{handleCreate:this.handleCreate,handleUpdate:this.handleUpdate,formInputs:this.props.formInputs,view:this.props.view}))}}]),t}(o.a.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("aside",null,o.a.createElement("h2",null,"Navigate"),o.a.createElement("h3",{onClick:function(){e.props.handleView("home")}},"Home"),o.a.createElement("h3",{onClick:function(){e.props.handleView("addBuild")}},"Add Build"),o.a.createElement("h3",{onClick:function(){e.props.handleView("aboutus")}},"About Us"))}}]),t}(o.a.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("h1",null,"Hello World!")}}]),t}(o.a.Component),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleView=function(e,t){var n="",o={cpu:"",cpucooler:"",motherboard:"",memory:"",storage:"",videocard:"",compcase:"",powersupply:"",os:"",fan:"",monitor:"",keyboard:"",mouse:"",id:null};switch(e){case"home":n="Pc Builder";break;case"addBuild":n="Create your PC";break;case"editBuild":n="Change up your build",o={cpu:t.cpu,cpucooler:t.cpucooler,motherboard:t.motherboard,memory:t.memory,storage:t.storage,videocard:t.videocard,compcase:t.compcase,powersupply:t.powersupply,os:t.os,fan:t.fan,monitor:t.monitor,keyboard:t.keyboard,mouse:t.mouse,id:t.id}}a.setState({view:{page:e,pageTitle:n},formInputs:o})},a.state={view:{page:"home",pageTitle:"lkadsgf"},formInputs:{cpu:null,cpucooler:null,motherboard:null,memory:null,storage:null,videocard:null,compcase:null,powersupply:null,os:null,fan:null,monitor:null,keyboard:null,mouse:null,id:null}},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"large-container"},o.a.createElement(E,null),o.a.createElement("div",{className:"large-container"},o.a.createElement(y,{handleView:this.handleView}),o.a.createElement(f,{view:this.state.view,handleView:this.handleView,formInputs:this.state.formInputs})))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.6eb5f6b5.chunk.js.map