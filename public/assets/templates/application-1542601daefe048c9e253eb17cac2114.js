Ember.TEMPLATES.application=Ember.Handlebars.template(function(e,s,a,t,h){function r(e,s){var t="";return s.buffer.push("<a "),s.buffer.push(c(a["bind-attr"].call(e,{hash:{href:"view.href"},hashTypes:{href:"STRING"},hashContexts:{href:e},contexts:[],types:[],data:s}))),s.buffer.push('> <span class="glyphicon glyphicon-home"></span> Home</a>'),t}function n(e,s){var t="";return s.buffer.push("<a "),s.buffer.push(c(a["bind-attr"].call(e,{hash:{href:"view.href"},hashTypes:{href:"STRING"},hashContexts:{href:e},contexts:[],types:[],data:s}))),s.buffer.push('> <span class="glyphicon glyphicon-user"></span> Login</a>'),t}function o(e,s){var t="";return s.buffer.push("<a "),s.buffer.push(c(a["bind-attr"].call(e,{hash:{href:"view.href"},hashTypes:{href:"STRING"},hashContexts:{href:e},contexts:[],types:[],data:s}))),s.buffer.push('> <span class="glyphicon glyphicon-book"></span> Exercises</a>'),t}function f(e,s){var t="";return s.buffer.push("<a "),s.buffer.push(c(a["bind-attr"].call(e,{hash:{href:"view.href"},hashTypes:{href:"STRING"},hashContexts:{href:e},contexts:[],types:[],data:s}))),s.buffer.push('> <span class="glyphicon glyphicon-list"></span> Workouts</a>'),t}this.compilerInfo=[4,">= 1.0.0"],a=this.merge(a,Ember.Handlebars.helpers),h=h||{};var l,p,i,u="",c=this.escapeExpression,b=a.helperMissing,d=this;return h.buffer.push(c((p=a.outlet||s&&s.outlet,i={hash:{},hashTypes:{},hashContexts:{},contexts:[s],types:["ID"],data:h},p?p.call(s,"modal",i):b.call(s,"outlet","modal",i)))),h.buffer.push('\r\n<div class="bs-header" style="background-color: #455F8F;">\r\n  <div class="container">\r\n    <h1 style="font-size: 60px; color: #fff; margin: .67em 0; text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;">Workoutastic</h1>\r\n  </div>\r\n</div>\r\n<div class="container">\r\n  <div class="row">\r\n    <div class="col-md-2">\r\n\r\n        <ul class="nav" data-offset-top="146" data-offset-bottom="200">\r\n            '),p=a["link-to"]||s&&s["link-to"],i={hash:{tagName:"li",href:!1},hashTypes:{tagName:"STRING",href:"BOOLEAN"},hashContexts:{tagName:s,href:s},inverse:d.noop,fn:d.program(1,r,h),contexts:[s],types:["STRING"],data:h},l=p?p.call(s,"index",i):b.call(s,"link-to","index",i),(l||0===l)&&h.buffer.push(l),h.buffer.push("\r\n            "),p=a["link-to"]||s&&s["link-to"],i={hash:{tagName:"li",href:!1},hashTypes:{tagName:"STRING",href:"BOOLEAN"},hashContexts:{tagName:s,href:s},inverse:d.noop,fn:d.program(3,n,h),contexts:[s],types:["STRING"],data:h},l=p?p.call(s,"login",i):b.call(s,"link-to","login",i),(l||0===l)&&h.buffer.push(l),h.buffer.push("\r\n            "),p=a["link-to"]||s&&s["link-to"],i={hash:{tagName:"li",href:!1},hashTypes:{tagName:"STRING",href:"BOOLEAN"},hashContexts:{tagName:s,href:s},inverse:d.noop,fn:d.program(5,o,h),contexts:[s],types:["STRING"],data:h},l=p?p.call(s,"exercises",i):b.call(s,"link-to","exercises",i),(l||0===l)&&h.buffer.push(l),h.buffer.push("\r\n            "),p=a["link-to"]||s&&s["link-to"],i={hash:{tagName:"li",href:!1},hashTypes:{tagName:"STRING",href:"BOOLEAN"},hashContexts:{tagName:s,href:s},inverse:d.noop,fn:d.program(7,f,h),contexts:[s],types:["STRING"],data:h},l=p?p.call(s,"workouts",i):b.call(s,"link-to","workouts",i),(l||0===l)&&h.buffer.push(l),h.buffer.push('\r\n        </ul>\r\n      \r\n    </div>\r\n    <div class="col-md-10">\r\n      '),l=a._triageMustache.call(s,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[s],types:["ID"],data:h}),(l||0===l)&&h.buffer.push(l),h.buffer.push("\r\n    </div>\r\n  </div>\r\n</div>\n"),u});