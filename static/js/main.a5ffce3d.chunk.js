(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,c){e.exports={feedback:"Statistics_feedback__1188I"}},,,,function(e,t,c){e.exports={section:"Section_section__CWV2v",sectionTitle:"Section_sectionTitle__1Qdcw"}},function(e,t,c){e.exports={wrapper:"FeedbackOptions_wrapper__1LgGj",feedbackBtn:"FeedbackOptions_feedbackBtn__2DtSb"}},,function(e,t,c){e.exports={notification:"NotificationMessage_notification__1SAWe"}},,,,,,function(e,t,c){},,,function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),i=c(8),o=c.n(i),r=(c(15),c(4)),d=c(6),b=c.n(d),j=function(e){var t=e.title,c=e.children;return Object(n.jsxs)("section",{className:b.a.section,children:[t&&Object(n.jsx)("h2",{className:b.a.sectionTitle,children:t}),c]})},l=c(3),u=c.n(l),f=c(7),p=c.n(f),O=function(e){var t=e.options,c=e.onLeaveFeedback;return Object(n.jsx)("div",{className:p.a.wrapper,children:t.map((function(e,t){return Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:p.a.feedbackBtn,onClick:function(){return c(e)},children:e})},t)}))})};O.protoTypes={options:u.a.arrayOf(u.a.string),onLeaveFeedback:u.a.func.isRequired};var x=O,h=c(9),k=c.n(h),v=function(e){var t=e.message;return Object(n.jsx)("p",{className:k.a.notification,children:t})},_=c(2),g=c.n(_),m=function(e){var t=e.good,c=e.neutral,a=e.bad,s=e.total,i=e.positivePercentage;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("p",{className:g.a.feedback,children:["good: ",t]}),Object(n.jsxs)("p",{className:g.a.feedback,children:["neutral: ",c]}),Object(n.jsxs)("p",{className:g.a.feedback,children:["bad: ",a]}),Object(n.jsxs)("p",{className:g.a.feedback,children:["total: ",s]}),Object(n.jsxs)("p",{className:g.a.feedback,children:["positive feedback: ",i,"%"]})]})};var N=function(){var e=Object(a.useState)(0),t=Object(r.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(0),o=Object(r.a)(i,2),d=o[0],b=o[1],l=Object(a.useState)(0),u=Object(r.a)(l,2),f=u[0],p=u[1],O=c+d+f,h={good:c,neutral:d,bad:f};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{}),Object(n.jsx)(j,{title:"Please leave feedback",children:Object(n.jsx)(x,{options:Object.keys(h),onLeaveFeedback:function(e){({good:s,neutral:b,bad:p})[e]((function(e){return e+1}))}})}),Object(n.jsx)(j,{title:"Statistics",children:0===O?Object(n.jsx)(v,{message:"No feedback given"}):Object(n.jsx)(m,{good:c,neutral:d,bad:f,total:O,positivePercentage:function(e){return c||d||f>0?Math.round(100*c/e):0}(O)})})]})};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.a5ffce3d.chunk.js.map