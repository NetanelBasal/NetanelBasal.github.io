webpackJsonp([3,7],{1291:function(e,t,o){"use strict";var n=o(0),c=o(29),i=o(1295),a=o(1301),r=this&&this.__decorate||function(e,t,o,n){var c,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var r=e.length-1;r>=0;r--)(c=e[r])&&(a=(i<3?c(a):i>3?c(t,o,a):c(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},d=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(){function e(){}return e=r([o.i(n.NgModule)({imports:[c.a,a.a],declarations:[i.a]}),d("design:paramtypes",[])],e)}();t.default=l},1295:function(e,t,o){"use strict";var n=o(0),c=o(203);o.d(t,"a",function(){return r});var i=this&&this.__decorate||function(e,t,o,n){var c,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var r=e.length-1;r>=0;r--)(c=e[r])&&(a=(i<3?c(a):i>3?c(t,o,a):c(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=function(){function e(){this.baseUrl=c.a.BASE_URL+"/api/v1/project"}return e.prototype.ngOnInit=function(){},e=i([o.i(n.Component)({selector:"app-docs",template:o(1305),styles:[o(1309)]}),a("design:paramtypes",[])],e)}()},1301:function(e,t,o){"use strict";var n=o(1295),c=o(104),i=[{path:"",component:n.a}];t.a=c.a.forChild(i)},1305:function(e,t){e.exports='<div class="container docs"> <section> <h3>GET</h3> <div> <code>{{baseUrl}}/qqalyldnxe/project-name/project-table</code> </div> </section> <section> <h3>GET by id</h3> <div> <code>{{baseUrl}}/qqalyldnxe/project-name/project-table/id</code> </div> </section> <section> <h3>GET with Order By</h3> <div> <code>{{baseUrl}}/qqalyldnxe/project-name/project-table?orderBy=fullName</code> </div> </section> <section> <h3>GET with Pagination</h3> <p>The default is 20 per page</p> <div> <code>{{baseUrl}}/qqalyldnxe/project-name/project-table?page=2&perPage=3</code> </div> </section> <section> <h3>POST</h3> <div> <code>{{baseUrl}}/qqalyldnxe/project-name/project-table</code> </div> <div> You need to send the object under the <strong>model</strong> key. </div> </section> <section> <h3>UPDATE</h3> <div> <code>{{baseUrl}}/qqalyldnxe/project-name/project-table/id</code> </div> <div> You need to send the object under the <strong>model</strong> key. </div> </section> <section> <h3>DELETE</h3> <div> <code>{{baseUrl}}/qqalyldnxe/project-name/project-table/id</code> </div> </section> <section> <h3>Apply Delay (num in seconds, you can use it in every type of request)</h3> <div> <code>{{baseUrl}}/qqalyldnxe/project-name/project-table?delay=3</code> </div> </section> </div> '},1309:function(e,t){e.exports=""}});