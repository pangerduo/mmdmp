webpackJsonp([12],{YN4Y:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("EuEE");var s=a("gyMJ"),i=a("TvJ3"),n=(a("gmQn"),a("mw3O"),{components:{pageTable:i.a},data:function(){return{search:{dateline:new Date,proj:[],size:10,page:1},list:{data:[],totalPage:0,totalCount:0},editContent:{goal:"",measures:"",sumday:""},dialog_edit:!1,isProjContainAll:!0,projData:[],editData:""}},created:function(){this.projData=JSON.parse(localStorage.getItem("projid")),this.search.proj[0]=this.projData[0].id,this.getInitialList()},methods:{getInitialList:function(){var t=this;Object(s.l)(this.search.dateline,this.search.proj.join(","),this.search.page,this.search.size).then(function(e){t.list.data=e.data.list,t.list.totalCount=e.data.totalCount,t.list.totalPage=e.data.totalPage}).catch(function(t){console.log(t)})},search_data:function(){null!=this.search.dateline?0!=this.search.proj.length?(this.search.page=1,this.getInitialList()):this.$message({message:"请选择品牌",type:"warning"}):this.$message({message:"请选择日期",type:"warning"})},formatDate:function(t){var e=t.dateline.toString();return t.dateline=e.replace(/^(\d{4})(\d{2})(\d{2})$/,"$1-$2-$3")},changeStaff:function(){this.isProjContainAll?(this.isProjContainAll=!1,this.search.proj.splice(0,1)):(this.isProjContainAll=this.search.proj.some(function(t){return 0===t}),this.isProjContainAll?this.search.proj=[0]:this.search.proj.length==this.projData.length-1&&(this.search.proj=[0],this.isProjContainAll=!0))},formatProj:function(t){var e=this.projData;e=e.slice(1);for(var a=0;a<e.length;a++)if(t.proj==e[a].id)return t.porj=e[a].memo},edit:function(t,e){this.dialog_edit=!0,this.editData=e},save:function(){var t=this;this.dialog_edit=!1,Object(s.m)(new Date(this.editData.dateline),this.editData.proj,this.editContent.goal,this.editContent.measures,this.editContent.sumday,this.editData.page,this.editData.size).then(function(e){"200"==e.code&&t.$message({type:"success",message:"修改成功"})}).catch(function(t){console.log(t)})},getTime:function(t){this.search.dateline=new Date(t)},change_data:function(t,e){this.search.page=t,this.search.size=e,this.getInitialList()}}}),l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main dataSummary quality-info"},[a("div",{staticClass:"main-search"},[a("div",{staticClass:"search-item"},[a("span",{staticClass:"item-left"},[t._v("日期")]),t._v(" "),a("span",{staticClass:"item-right"},[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},on:{change:t.getTime},model:{value:t.search.dateline,callback:function(e){t.$set(t.search,"dateline",e)},expression:"search.dateline"}})],1)]),t._v(" "),a("div",{staticClass:"search-item"},[a("span",{staticClass:"item-left"},[t._v("品牌")]),t._v(" "),a("span",{staticClass:"item-right"},[a("el-select",{attrs:{multiple:"","collapse-tags":""},on:{change:function(e){return t.changeStaff()}},model:{value:t.search.proj,callback:function(e){t.$set(t.search,"proj",e)},expression:"search.proj"}},[t._l(t.projData,function(e){return[a("el-option",{key:e.id,attrs:{label:e.memo,value:e.id}},[t._v(t._s(e.memo))])]})],2)],1)]),t._v(" "),a("button",{staticClass:"btn-search",attrs:{type:"button"},on:{click:t.search_data}},[t._v("查询")])]),t._v(" "),a("div",{staticClass:"main-table"},[a("div",{staticClass:"table-msg"},[a("div",{staticClass:"msg-left"},[a("p",[t._v("查询符合上述条件的数据"),a("span",[t._v(t._s(t.list.totalCount))]),t._v("条")])])]),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list.data,border:"","default-sort":{prop:"date",order:"descending"}}},[a("el-table-column",{attrs:{prop:"dateline",align:"center",label:"日期",formatter:t.formatDate,width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"porj",align:"center",label:"品牌",formatter:t.formatProj}}),t._v(" "),a("el-table-column",{attrs:{prop:"leads",align:"center",label:"成单数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"seats",align:"center",label:"坐席数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"goal",align:"center",label:"目标"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sumleads",align:"center",label:"总成功数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"schedule",align:"center",label:"进度落后"}}),t._v(" "),a("el-table-column",{attrs:{prop:"percapita",align:"center",label:"人均单量"}}),t._v(" "),a("el-table-column",{attrs:{prop:"srate",align:"center",label:"整体成功率"}}),t._v(" "),a("el-table-column",{attrs:{prop:"measures",align:"center",label:"当日复盘结论举措"}}),t._v(" "),a("el-table-column",{attrs:{prop:"contrast",align:"center",label:"数据对比",width:"260"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.edit(e,e.row)}}},[t._v("修改")])]}}])})],1),t._v(" "),a("page-table",{attrs:{show_size:"true",cur:t.search.page,total_page:t.list.totalPage,total_count:t.list.totalCount},on:{change:t.change_data}})],1),t._v(" "),a("el-dialog",{staticClass:"dialog-box",attrs:{visible:t.dialog_edit},on:{"update:visible":function(e){t.dialog_edit=e}}},[a("div",{staticClass:"main-edit"},[a("div",{staticClass:"edit-box"},[a("div",{staticClass:"info-item"},[a("span",{staticClass:"item-left"},[t._v("目标")]),t._v(" "),a("span",{staticClass:"item-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.editContent.goal,expression:"editContent.goal"}],staticClass:"txt-common",attrs:{type:"text",placeholder:"请输入目标"},domProps:{value:t.editContent.goal},on:{input:function(e){e.target.composing||t.$set(t.editContent,"goal",e.target.value)}}}),t._v(" "),a("span",{staticClass:"msg"},[t._v("请填写目标")])])]),t._v(" "),a("div",{staticClass:"edit-info"},[a("div",{staticClass:"info-item"},[a("span",{staticClass:"item-left"},[t._v("当日复盘结论举措")]),t._v(" "),a("span",{staticClass:"item-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.editContent.measures,expression:"editContent.measures"}],staticClass:"txt-common",attrs:{type:"text",placeholder:"请输入目标"},domProps:{value:t.editContent.measures},on:{input:function(e){e.target.composing||t.$set(t.editContent,"measures",e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"edit-info"},[a("div",{staticClass:"info-item"},[a("span",{staticClass:"item-left"},[t._v("当月总工作日")]),t._v(" "),a("span",{staticClass:"item-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.editContent.sumday,expression:"editContent.sumday"}],staticClass:"txt-common",attrs:{type:"number",placeholder:"请输入目标"},domProps:{value:t.editContent.sumday},on:{input:function(e){e.target.composing||t.$set(t.editContent,"sumday",e.target.value)}}})])])])])]),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("保存")]),t._v(" "),a("el-button",{on:{click:function(e){t.dialog_edit=!1}}},[t._v("取消")])],1)])],1)},staticRenderFns:[]};var o=a("VU/8")(n,l,!1,function(t){a("ucDH")},"data-v-1a19dd3f",null);e.default=o.exports},ucDH:function(t,e){}});
//# sourceMappingURL=12.168c6595b2553689b52b.js.map