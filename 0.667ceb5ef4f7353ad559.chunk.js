webpackJsonp([0,7],{1290:function(e,a,t){"use strict";var o=t(0),n=t(1294),i=t(1300),r=t(329),m=t(1298),l=this&&this.__decorate||function(e,a,t,o){var n,i=arguments.length,r=i<3?a:null===o?o=Object.getOwnPropertyDescriptor(a,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,a,t,o);else for(var m=e.length-1;m>=0;m--)(n=e[m])&&(r=(i<3?n(r):i>3?n(a,t,r):n(a,t))||r);return i>3&&r&&Object.defineProperty(a,t,r),r},s=this&&this.__metadata||function(e,a){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,a)},p=function(){function e(){}return e=l([t.i(o.NgModule)({imports:[i.a,r.a],declarations:[n.a,m.a]}),s("design:paramtypes",[])],e)}();a.default=p},1294:function(e,a,t){"use strict";var o=t(0),n=t(46),i=t(1299),r=t(204),m=t(66),l=(t.n(m),t(205));t.n(l);t.d(a,"a",function(){return d});var s=this&&this.__decorate||function(e,a,t,o){var n,i=arguments.length,r=i<3?a:null===o?o=Object.getOwnPropertyDescriptor(a,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,a,t,o);else for(var m=e.length-1;m>=0;m--)(n=e[m])&&(r=(i<3?n(r):i>3?n(a,t,r):n(a,t))||r);return i>3&&r&&Object.defineProperty(a,t,r),r},p=this&&this.__metadata||function(e,a){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,a)},d=function(){function e(e,a){this.fb=e,this.createApiActions=a,this.submitted=!1,this.columnsType=t.i(i.a)(),this.apiForm=this.fb.group({projectName:["",n.c.required],tableName:["",n.c.required],numRows:[20,n.c.compose([n.c.required,n.c.maxLength(2)])],columns:this.buildColumns()})}return e.prototype.addColumn=function(){this.submitted=!1,this.columns.push(this.buildColumn())},e.prototype.buildColumns=function(){return this.columns=this.fb.array([this.buildColumn()]),this.columns},e.prototype.buildColumn=function(){return this.fb.group({columnSchema:["",n.c.required],name:["",n.c.required]})},e.prototype.onChoiceChange=function(e){var a=i.b.filter(function(a){return a.modelName===e.value})[0];e.group=a.group},e.prototype.removeColumn=function(e){var a=this.columns.controls.indexOf(e);this.columns.controls.splice(a,1)},e.prototype.submit=function(e){this.submitted=!0,e.invalid||this.createApiActions.createApi(e.value)},s([t.i(m.select)(["createApi","fetching"]),p("design:type","function"==typeof(a="undefined"!=typeof l.Observable&&l.Observable)&&a||Object)],e.prototype,"showSpinner$",void 0),e=s([t.i(o.Component)({selector:"app-create-api",template:t(1304),styles:[t(1308)]}),p("design:paramtypes",["function"==typeof(d="undefined"!=typeof n.d&&n.d)&&d||Object,"function"==typeof(c="undefined"!=typeof r.a&&r.a)&&c||Object])],e);var a,d,c}()},1298:function(e,a,t){"use strict";var o=t(0),n=t(46);t.d(a,"a",function(){return m});var i=this&&this.__decorate||function(e,a,t,o){var n,i=arguments.length,r=i<3?a:null===o?o=Object.getOwnPropertyDescriptor(a,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,a,t,o);else for(var m=e.length-1;m>=0;m--)(n=e[m])&&(r=(i<3?n(r):i>3?n(a,t,r):n(a,t))||r);return i>3&&r&&Object.defineProperty(a,t,r),r},r=this&&this.__metadata||function(e,a){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,a)},m=function(){function e(e){this.ele=e,this.propagateChange=function(e){},this.choicesConfig=[],this.onChange=new o.EventEmitter}return e.prototype.ngOnInit=function(){this.choiceEle=new Choices(this.ele.nativeElement,{placeholderValue:"Search...",callbackOnChange:this.callbackOnChange.bind(this)}),this.choiceEle.setChoices(this.choicesConfig,"value","label")},e.prototype.callbackOnChange=function(){this.propagateChange(this.choiceEle.getValue()),this.onChange.emit(this.choiceEle.getValue())},e.prototype.writeValue=function(e){this.choiceEle.setValueByChoice(e.value),this.selected=e},e.prototype.registerOnChange=function(e){this.propagateChange=e},e.prototype.registerOnTouched=function(e){},i([t.i(o.Input)(),r("design:type",Object)],e.prototype,"choicesConfig",void 0),i([t.i(o.Output)(),r("design:type","function"==typeof(a="undefined"!=typeof o.EventEmitter&&o.EventEmitter)&&a||Object)],e.prototype,"onChange",void 0),e=i([t.i(o.Directive)({selector:"[choices]",providers:[{provide:n.a,useExisting:t.i(o.forwardRef)(function(){return e}),multi:!0}]}),r("design:paramtypes",["function"==typeof(m="undefined"!=typeof o.ElementRef&&o.ElementRef)&&m||Object])],e);var a,m}()},1299:function(e,a,t){"use strict";function o(){return n.reduce(function(e,a){var t=e.filter(function(e){return e.label===a.group})[0],o={value:a.modelName,label:a.displayName};return t?t.choices.push(o):e.push({label:a.group,choices:[o]}),e},[])}t.d(a,"b",function(){return n}),a.a=o;var n=[{displayName:"First Name",modelName:"firstName",group:"name"},{displayName:"Last Name",modelName:"lastName",group:"name"},{displayName:"Full Name",modelName:"findName",group:"name"},{displayName:"Prefix",modelName:"prefix",group:"name"},{displayName:"Suffix",modelName:"suffix",group:"name"},{displayName:"Zip Code",modelName:"zipCode",group:"address"},{displayName:"City",modelName:"city",group:"address"},{displayName:"City prefix",modelName:"cityPrefix",group:"address"},{displayName:"Street name",modelName:"streetName",group:"address"},{displayName:"Street Address",modelName:"streetAddress",group:"address"},{displayName:"Secondary Address",modelName:"secondaryAddress",group:"address"},{displayName:"Country",modelName:"country",group:"address"},{displayName:"State",modelName:"state",group:"address"},{displayName:"County",modelName:"county",group:"address"},{displayName:"State Abbr",modelName:"stateAbbr",group:"address"},{displayName:"Latitude",modelName:"latitude",group:"address"},{displayName:"Longitude",modelName:"longitude",group:"address"},{displayName:"Phone Number",modelName:"phoneNumber",group:"phone"},{displayName:"Phone Number Format",modelName:"phoneNumberFormat",group:"phone"},{displayName:"Phone Formats",modelName:"phoneFormats",group:"phone"},{displayName:"Email",modelName:"email",group:"internet"},{displayName:"User Name",modelName:"userName",group:"internet"},{displayName:"Domain Name",modelName:"domainName",group:"internet"},{displayName:"Domain Suffix",modelName:"domainSuffix",group:"internet"},{displayName:"Ip Address",modelName:"ip",group:"internet"},{displayName:"User Agent",modelName:"userAgent",group:"internet"},{displayName:"Color",modelName:"color",group:"internet"},{displayName:"Password",modelName:"password",group:"internet"},{displayName:"Company Name",modelName:"companyName",group:"company"},{displayName:"Image",modelName:"image",group:"image"},{displayName:"Avatar",modelName:"avatar",group:"image"},{displayName:"Animals",modelName:"animals",group:"image"},{displayName:"Food",modelName:"food",group:"image"},{displayName:"Night Life",modelName:"nightlife",group:"image"},{displayName:"Sports",modelName:"sports",group:"image"},{displayName:"Fashion",modelName:"fashion",group:"image"},{displayName:"Words",modelName:"words",group:"lorem"},{displayName:"sentence",modelName:"sentence",group:"lorem"},{displayName:"sentences",modelName:"sentences",group:"lorem"},{displayName:"paragraph",modelName:"paragraph",group:"lorem"},{displayName:"paragraphs",modelName:"paragraphs",group:"lorem"},{displayName:"random Number",modelName:"randomNumber",group:"helpers"},{displayName:"randomize",modelName:"randomize",group:"helpers"},{displayName:"slugify",modelName:"slugify",group:"helpers"},{displayName:"past",modelName:"past",group:"date"},{displayName:"future",modelName:"future",group:"date"},{displayName:"recent",modelName:"recent",group:"date"},{displayName:"account",modelName:"account",group:"finance"},{displayName:"account Name",modelName:"accountName",group:"finance"},{displayName:"mask",modelName:"mask",group:"finance"},{displayName:"amount",modelName:"amount",group:"finance"},{displayName:"transaction Type",modelName:"transactionType",group:"finance"},{displayName:"currencyCode",modelName:"currencyCode",group:"finance"},{displayName:"currency Name",modelName:"currencyName",group:"finance"},{displayName:"currency Symbol",modelName:"currencySymbol",group:"finance"},{displayName:"boolean",modelName:"bool",group:"others"},{displayName:"null",modelName:"null",group:"others"},{displayName:"relationship (Singilar with Id: userId)",modelName:"rel",group:"relationship"}]},1300:function(e,a,t){"use strict";var o=t(1294),n=t(104),i=t(583),r=[{path:"",component:o.a,canActivate:[i.a]}];a.a=n.a.forChild(r)},1304:function(e,a){e.exports='<section class="container"> <form novalidate [formGroup]="apiForm" class="col-sm-12" (submit)="submit(apiForm)"> <div class="form-group"> <input type="text" placeholder="Project name" formControlName="projectName" class="form-control input-lg"> </div> <div class="form-group"> <input type="text" placeholder="Table name" formControlName="tableName" class="form-control input-lg"> </div> <section formArrayName="columns"> <button class="btn btn-warning" (click)="addColumn()" type="button">Add column +</button> <section class="flex columns-wrapper"> <div class="panel panel-default add-column" *ngFor="let column of columns.controls; let i=index; let first=first;" [formGroupName]="i"> <div class="panel-heading flex align-center justify-space-between"> <b>Column settings</b> <button *ngIf="!first" type="button" class="close" (click)="removeColumn(column)"><span>&times;</span> </button> </div> <div class="col-str"> <p> <input type="text" class="form-control input-lg" placeholder="Column name" formControlName="name"> </p> </div> <div class="columns__type-select"> <select choices formControlName="columnSchema" [choicesConfig]="columnsType" (onChange)="onChoiceChange($event)"> </select> </div> <p *ngIf="column.invalid && submitted" class="text-danger">All the fields are required</p> </div> </section> </section> <div class="num-rows"> <div class="form-group"> <label>Num rows (max: 99)</label> <input type="number" class="form-control" formControlName="numRows" placeholder="Num rows" maxValue="99" validateMaxValue> </div> </div> <spinner [showSpinner]="(showSpinner$ | async)"></spinner> <div class="flex justify-end mt"> <button type="submit" class="btn btn-primary" [disabled]="apiForm.invalid">Create</button> </div> </form> </section> '},1308:function(e,a){e.exports=".col-str {\n  margin: 0.8em; }\n\n.columns__type-select {\n  padding: 0 0.8em 0.8em; }\n\n.add-column {\n  padding: 0; }\n\n.columns-wrapper {\n  margin-top: 1rem;\n  flex-wrap: wrap; }\n\n.panel {\n  flex: 0 1 calc(33.3333% - 1rem);\n  margin-right: 1rem; }\n\n.num-rows input {\n  width: 70px; }\n"}});