(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/button.aff9089c.ico"},23:function(e,t,n){e.exports=n(53)},48:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(20),i=n.n(a),l=n(0),r=n.n(l),c=n(6),o=n(7),u=n(9),s=n(8),m=n(10),h=n(13),d=n.n(h),p=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).onClickButton=function(){e.getDataFromDb()},e.getDataFromDb=function(){fetch("/api/getClicks").then(function(e){return e.json()}).then(function(t){e.setState({clickAmount:t.data[0].clickAmount}),d.a.post("/api/updateClicks",{update:{clickAmount:t.data[0].clickAmount+1}}).then(function(t){e.setState({clicksToNextPrize:100-e.state.clickAmount%100}),e.state.clickAmount%500===0?e.setState({showWinnerForm:!0,prizeSize:"BIG"}):e.state.clickAmount%200===0?e.setState({showWinnerForm:!0,prizeSize:"MEDIUM"}):e.state.clickAmount%100===0&&e.setState({showWinnerForm:!0,prizeSize:"SMALL"})})})},e.sendForm=function(t){t.preventDefault(),d.a.post("/api/postWinner",{update:{id:e.state.clickAmount/100,Name:e.state.newWinnerName,prizeSize:e.state.prizeSize,winningClickNr:e.state.clickAmount}}),e.setState({newWinnerName:"",showWinnerForm:!1,clicksToNextPrize:null,buttonIsEnabled:!1})},e.newWinnerOnChange=function(t){e.setState({newWinnerName:t.target.value}),t.target.value.length>0?e.setState({buttonIsEnabled:!0}):e.setState({buttonIsEnabled:!1})},e.state={data:[],winnerList:[],winningClickNr:0,newWinnerName:"",prizeSize:"",clicksToNextPrize:null,clickAmount:0,showWinnerForm:!1,buttonIsEnabled:!1},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.state.showWinnerForm?r.a.createElement("div",{className:"gamePage"},r.a.createElement("div",null,r.a.createElement("h1",{id:"congrats"},"Congratulations")),r.a.createElement("div",null,r.a.createElement("p",null," Congratiulations. You have won a ",this.state.prizeSize," prize"),r.a.createElement("p",null,"Please enter your nickname:"),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.sendForm},r.a.createElement("input",{value:this.state.newWinnerName,onChange:this.newWinnerOnChange}),r.a.createElement("button",{type:"submit",disabled:!this.state.buttonIsEnabled,className:"submitButton"+(this.state.buttonIsEnabled?"Show":"Disabled")},"Send"))))):r.a.createElement("div",{className:"gamePage"},r.a.createElement("div",null,r.a.createElement("h1",null,"Button Game")),r.a.createElement("div",null,r.a.createElement("button",{className:"gameButton",onClick:this.onClickButton},"Try Your Luck")),r.a.createElement("div",null,r.a.createElement("p",null," Amount of clicks to next prize: ",this.state.clicksToNextPrize)))}}]),t}(r.a.Component),E=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).state={winnerList:[],isLoading:!0},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("http://localhost:3001/api/getWinners").then(function(e){return e.json()}).then(function(t){e.setState({winnerList:t.data,isLoading:!1})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"winnerPage"},r.a.createElement("div",null,r.a.createElement("h1",null,"Winners")),r.a.createElement("div",null,this.state.isLoading&&r.a.createElement("div",{className:"loadingSpinner"},"Loading..."),!this.state.isLoading&&r.a.createElement("ul",null,this.state.winnerList.map(function(e){return r.a.createElement("li",{key:e.id}," ",e.Name)}))))}}]),t}(r.a.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"infoPage"},r.a.createElement("div",null,r.a.createElement("h1",null,"Info")),r.a.createElement("p",null,"The goal of the game is to click the button. Every 100 clicks will win a prize. Everyone is collectively increasing the counter. You are not able to see on how many total clicks the counter is on, but after each click you will get to know how many clicks away from a prize you were. There are 3 different prize sizes:"),r.a.createElement("ul",null,r.a.createElement("li",null,"100 clicks prize = Small prize"),r.a.createElement("li",null,"200 clicks prize = Medium prize"),r.a.createElement("li",null,"500 clicks prize = Big prize")),r.a.createElement("p",null,"If you are the lucky winner of a prize you can enter your nickname and we will contact you later for your prize."))}}]),t}(r.a.Component),f=n(56),k=n(55),w=n(57),v=(n(48),n(21)),g=n.n(v),z=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("div",{className:"container",id:"headerContainer"},r.a.createElement("div",{id:"headerTitle"},r.a.createElement(k.a,{to:"/"},r.a.createElement("img",{src:g.a,alt:"Picture of a button",width:"16%"}),r.a.createElement("h1",null,"Button Game"))),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(k.a,{to:"/"},"The Game")),r.a.createElement("li",null,r.a.createElement(k.a,{to:"/winners"},"Winners")),r.a.createElement("li",null,r.a.createElement(k.a,{to:"/info"},"Info")))))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"pageContainer"},r.a.createElement(w.a,{exact:!0,path:"/",component:p}),r.a.createElement(w.a,{path:"/winners",component:E}),r.a.createElement(w.a,{path:"/info",component:b})))))}}]),t}(r.a.Component);i.a.render(r.a.createElement(z,null),document.getElementById("root"))}},[[23,2,1]]]);
//# sourceMappingURL=main.fb96c36d.chunk.js.map