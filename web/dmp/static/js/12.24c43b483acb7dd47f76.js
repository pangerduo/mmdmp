webpackJsonp([12],{Q3J4:function(t,e){},sApm:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("gyMJ"),s=a("TvJ3"),o=a("gmQn"),l=a("mw3O"),n=a.n(l),c={name:"getProTab",data:function(){return{search:{size:10,page:1},list:{data:[],totalPage:0,totalCount:0},corp:"",prjid:"",num:"8000",model:"",modelvalue:"",teamData:[],projData:[],modelData:[],options:[],csvS:[],isCorpContainAll:!0,dialog_edit:!1,dialog_type:""}},created:function(){this.teamData=JSON.parse(localStorage.getItem("cropid")),this.modelData=JSON.parse(localStorage.getItem("model")),this.options=this.modelData,this.teamData=this.teamData.slice(1),this.model=this.options[0].id,this.corp=this.teamData[0].id,this.getProjData(),this.getJobLogList()},watch:{model:{handler:function(){this.csvS=[];for(var t=this.modelData.length,e=[],a=0;a<t;a++)""==this.model?e.push(this.modelData[a]):this.modelData[a].memo.indexOf(this.model)>=0&&e.push(this.modelData[a]);for(a=0;a<e.length;a++){var i={value:"",id:""};i.value=e[a].memo,i.id=e[a].id,this.csvS.push(i)}}}},methods:{change_data:function(t,e){this.list.page=t,this.list.size=e,this.getJobLogList()},edit:function(){this.dialog_edit=!0,this.dialog_type="edit"},add:function(){this.dialog_edit=!0,this.dialog_type="add"},save:function(){console.log(this.dialog_type)},changeStaff:function(){this.getProjData()},querySearch:function(t,e){e(this.csvS)},handleSelect:function(t){this.modelvalue=t.id},getJobLogList:function(){var t={page:this.search.page,size:this.search.size};return o.a.request({method:"get",url:"rate",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},transformRequest:[function(t){return t=n.a.stringify(t)}],data:t}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},dataFilter:function(t){this.model?this.options=this.modelData.filter(function(e){if(~e.memo.indexOf(t))return!0}):this.options=this.modelData},getProjData:function(){var t=this;console.log(this.corp);this.corp;Object(i.e)(this.corp,"pmemo/all").then(function(e){"200"==e.code&&(console.log(e.data),t.projData=e.data.list,console.log(t.projData),t.prjid=t.projData[0].id)}).catch(function(t){console.log(t)})}},components:{"page-table":s.a}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main rule-group"},[a("div",{staticClass:"main-table"},[a("div",{staticClass:"table-msg"},[a("div",{staticClass:"msg-left"},[a("p",[t._v("查询符合上述条件的数据"),a("span",[t._v(t._s(t.list.totalCount))]),t._v("条")])]),t._v(" "),a("div",{staticClass:"msg-right"},[a("el-button",{staticClass:"btn-small",attrs:{type:"button"},on:{click:t.add}},[t._v("添加")])],1)]),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list.data,border:""}},[a("el-table-column",{attrs:{prop:"cmemo",align:"center",label:"团队"}}),t._v(" "),a("el-table-column",{attrs:{prop:"pmemo",align:"center",label:"项目"}}),t._v(" "),a("el-table-column",{attrs:{prop:"mid",align:"center",label:"模型"}}),t._v(" "),a("el-table-column",{attrs:{prop:"rank",align:"center",label:"比例"}}),t._v(" "),a("el-table-column",{attrs:{prop:"success",align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.edit(e,e.row)}}},[t._v("修改")])]}}])})],1),t._v(" "),a("page-table",{attrs:{show_size:"true",cur:t.search.page,total_page:t.list.totalPage,total_count:t.list.totalCount},on:{change:t.change_data}})],1),t._v(" "),a("el-dialog",{staticClass:"dialog-box",attrs:{visible:t.dialog_edit},on:{"update:visible":function(e){t.dialog_edit=e}}},[a("div",{staticClass:"main-edit"},[a("div",{staticClass:"edit-box"},[a("div",{directives:[{name:"show",rawName:"v-show",value:"add"==t.dialog_type,expression:"dialog_type=='add'"}]},[a("div",{staticClass:"info-item"},[a("span",{staticClass:"item-left"},[t._v("团队")]),t._v(" "),a("span",{staticClass:"item-right"},[a("el-select",{staticStyle:{width:"372px"},on:{change:function(e){return t.changeStaff()}},model:{value:t.corp,callback:function(e){t.corp=e},expression:"corp"}},[t._l(t.teamData,function(e){return[a("el-option",{key:e.id,attrs:{label:e.memo,value:e.id}},[t._v(t._s(e.memo))])]})],2)],1)]),t._v(" "),a("div",{staticClass:"info-item"},[a("span",{staticClass:"item-left"},[t._v("项目")]),t._v(" "),a("span",{staticClass:"item-right"},[a("el-select",{staticStyle:{width:"372px"},model:{value:t.prjid,callback:function(e){t.prjid=e},expression:"prjid"}},[t._l(t.projData,function(e){return[a("el-option",{key:e.id,attrs:{label:e.pmemo,value:e.id}},[t._v(t._s(e.pmemo))])]})],2)],1)]),t._v(" "),a("div",{staticClass:"info-item"},[a("span",{staticClass:"item-left"},[t._v("模型")]),t._v(" "),a("span",{staticClass:"item-right"},[[a("el-select",{staticStyle:{width:"372px"},attrs:{placeholder:"请选择",filterable:"","filter-method":t.dataFilter},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.options,function(t){return a("el-option",{key:t.id,attrs:{label:t.memo,value:t.id}})}),1)]],2)])]),t._v(" "),a("div",{staticClass:"info-item"},[a("span",{staticClass:"item-left"},[t._v("比例")]),t._v(" "),a("span",{staticClass:"item-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.num,expression:"num"}],staticClass:"txt-common",attrs:{type:"Number",placeholder:"请输入比例"},domProps:{value:t.num},on:{input:function(e){e.target.composing||(t.num=e.target.value)}}}),t._v(" "),a("span",{staticClass:"msg"},[t._v("请填写比例")])])])])]),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("保存")]),t._v(" "),a("el-button",{on:{click:function(e){t.dialog_edit=!1}}},[t._v("取消")])],1)])],1)},staticRenderFns:[]};var d=a("VU/8")(c,r,!1,function(t){a("Q3J4")},"data-v-22e2da64",null);e.default=d.exports}});
//# sourceMappingURL=12.24c43b483acb7dd47f76.js.map