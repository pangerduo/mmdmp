webpackJsonp([7],{"5n3b":function(t,e){},Faq8:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("EuEE"),l=a("TvJ3"),r=a("6vT6"),i=a("gmQn"),o=a("mw3O"),n=a.n(o),c={components:{pageTable:l.a,popupBox:r.a},data:function(){return{search:{corp:[],prjid_local:[],uname:"",uservalue:"0",beginCalldate:new Date,endCalldate:new Date,orderbyCondition:"leads",orderbyFlag:!1,size:10,page:1},list:{data:[],totalPage:0,totalCount:0},total:{sumduration:"",sumconnect:"",sumleads:"",sumleadsrate:"",sumdetention:"",sumcloseorder:"",sumpaywork:""},popup_show:!1,endDatePicker:this.processDate(),teamData:[],projData:[],userData:[]}},created:function(){this.teamData=JSON.parse(localStorage.getItem("cropid")),this.projData=JSON.parse(localStorage.getItem("projid")),this.userData=JSON.parse(localStorage.getItem("user")),this.search.corp[0]=this.teamData[0].id,this.search.prjid_local[0]=this.projData[0].id,this.getInitialList()},methods:{search_data:function(){null!=this.search.beginCalldate?null!=this.search.endCalldate?null!=this.search.beginCalldate&&null!=this.search.endCalldate&&this.search.beginCalldate.getTime()>this.search.endCalldate.getTime()?this.$message({message:"开始日期不能大于结束日期",type:"warning"}):0!=this.search.corp.length?0!=this.search.prjid_local.length?(this.search.page=1,this.getInitialList()):this.$message({message:"请选择品牌",type:"warning"}):this.$message({message:"请选择外呼团队",type:"warning"}):this.$message({message:"请选择结束时间",type:"warning"}):this.$message({message:"请选择开始时间",type:"warning"})},processDate:function(){var t=this;return{disabledDate:function(e){if(t.search.beginCalldate)return new Date(t.search.beginCalldate).getTime()>e.getTime()}}},changeStaff:function(t){"corp"==t?this.isCorpContainAll?(this.isCorpContainAll=!1,this.search.corp.splice(0,1)):(this.isCorpContainAll=this.search.corp.some(function(t){return 0===t}),this.isCorpContainAll?this.search.corp=[0]:this.search.corp.length==this.teamData.length-1&&(this.search.corp=[0],this.isCorpContainAll=!0)):"proj"==t&&(this.isProjContainAll?(this.isProjContainAll=!1,this.search.prjid_local.splice(0,1)):(this.isProjContainAll=this.search.prjid_local.some(function(t){return 0===t}),this.isProjContainAll?this.search.prjid_local=[0]:this.search.prjid_local.length==this.projData.length-1&&(this.search.prjid_local=[0],this.isProjContainAll=!0)))},getInitialList:function(){var t=this,e={beginCalldate:Object(s.a)(this.search.beginCalldate,"yyyyMMdd"),endCalldate:Object(s.a)(this.search.endCalldate,"yyyyMMdd"),corp:this.search.corp.join(","),prjid_local:this.search.prjid_local.join(","),uname:this.search.uservalue,orderbyCondition:this.search.orderbyCondition,orderbyFlag:this.search.orderbyFlag,page:this.search.page,size:this.search.size};return i.a.request({method:"post",url:"seat",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},transformRequest:[function(t){return t=n.a.stringify(t)}],data:e}).then(function(e){t.list.data=e.data.list,t.list.totalCount=e.data.totalCount,t.list.totalPage=e.data.totalPage,t.total.sumduration=e.data.sumduration,t.total.sumconnect=e.data.sumconnect,t.total.sumleads=e.data.sumleads,t.total.sumleadsrate=e.data.sumleadsrate,t.total.sumdetention=e.data.sumdetention,t.total.sumcloseorder=e.data.sumcloseorder,t.total.sumpaywork=e.data.sumpaywork}).catch(function(t){console.log(t)})},formatDate:function(t){var e=t.dateline.toString();return t.dateline=e.replace(/^(\d{4})(\d{2})(\d{2})$/,"$1-$2-$3")},formatCorp:function(t){for(var e=0;e<this.teamData.length;e++)if(t.cid==this.teamData[e].id)return t.crop=this.teamData[e].memo},formatUser:function(t){for(var e=0;e<this.userData.length;e++)if(t.umemo==this.userData[e].id)return t.uid=this.userData[e].memo},formatProj:function(t){var e=this.projData;e=e.slice(1);for(var a=0;a<e.length;a++)if(t.prjid_local==e[a].id)return t.porj=e[a].memo},getSbeginTime:function(t){this.search.beginCalldate=new Date(t)},getSendTime:function(t){this.search.endCalldate=new Date(t)},dialog_batch:function(){this.dataType=this.userData,this.dataId="4",this.popup_show=!0},save:function(){console.log("111111"),this.popup_show=!1,""!=this.$refs.getDataName.complete()[0]?(this.search.uname=this.$refs.getDataName.complete()[0].join(","),this.search.uservalue=this.$refs.getDataName.complete()[1].join(",")):(this.search.uname="",this.search.uservalue="0")},getTotal:function(t){var e=this,a=t.columns,s=t.data,l=[];return a.forEach(function(t,a){s.map(function(e){return Number(e[t.property])});"duration"===t.property?l[a]=e.total.sumduration:"connect"===t.property?l[a]=e.total.sumconnect:"leads"===t.property?l[a]=e.total.sumleads:"leadsRate"===t.property?l[a]=e.total.sumleadsrate+"%":"detention"===t.property?l[a]=e.total.sumdetention+"%":"close_order"===t.property?l[a]=e.total.sumcloseorder+"%":"payWorktime"===t.property?l[a]=e.total.sumpaywork:l[a]="--"}),l},change_data:function(t,e){this.search.page=t,this.search.size=e,this.getInitialList()}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main dataSummary quality-info"},[a("div",{staticClass:"main-search"},[a("div",{staticClass:"search-item"},[a("span",{staticClass:"item-left"},[t._v("开始日期")]),t._v(" "),a("span",{staticClass:"item-right"},[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},on:{change:t.getSbeginTime},model:{value:t.search.beginCalldate,callback:function(e){t.$set(t.search,"beginCalldate",e)},expression:"search.beginCalldate"}})],1)]),t._v(" "),a("div",{staticClass:"search-item"},[a("span",{staticClass:"item-left"},[t._v("结束日期")]),t._v(" "),a("span",{staticClass:"item-right"},[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期","picker-options":t.endDatePicker},on:{change:t.getSendTime},model:{value:t.search.endCalldate,callback:function(e){t.$set(t.search,"endCalldate",e)},expression:"search.endCalldate"}})],1)]),t._v(" "),a("div",{staticClass:"search-item"},[a("span",{staticClass:"item-left"},[t._v("外呼团队")]),t._v(" "),a("span",{staticClass:"item-right"},[a("el-select",{attrs:{multiple:"","collapse-tags":""},on:{change:function(e){return t.changeStaff("corp")}},model:{value:t.search.corp,callback:function(e){t.$set(t.search,"corp",e)},expression:"search.corp"}},[t._l(t.teamData,function(e){return[a("el-option",{key:e.id,attrs:{label:e.memo,value:e.id}},[t._v(t._s(e.memo))])]})],2)],1)]),t._v(" "),a("div",{staticClass:"search-item"},[a("span",{staticClass:"item-left"},[t._v("品牌")]),t._v(" "),a("span",{staticClass:"item-right"},[a("el-select",{attrs:{multiple:"","collapse-tags":""},on:{change:function(e){return t.changeStaff("proj")}},model:{value:t.search.prjid_local,callback:function(e){t.$set(t.search,"prjid_local",e)},expression:"search.prjid_local"}},[t._l(t.projData,function(e){return[a("el-option",{key:e.id,attrs:{label:e.memo,value:e.id}},[t._v(t._s(e.memo))])]})],2)],1)]),t._v(" "),a("div",{staticClass:"search-item"},[a("span",{staticClass:"item-left"},[t._v("坐席姓名")]),t._v(" "),a("span",{staticClass:"item-right"},[a("el-input",{staticStyle:{cursor:"pointer"},attrs:{placeholder:"点击选择",readonly:""},nativeOn:{click:function(e){return t.dialog_batch(e)}},model:{value:t.search.uname,callback:function(e){t.$set(t.search,"uname",e)},expression:"search.uname"}})],1)]),t._v(" "),a("button",{staticClass:"btn-search",attrs:{type:"button"},on:{click:t.search_data}},[t._v("查询")])]),t._v(" "),a("div",{staticClass:"main-table"},[a("div",{staticClass:"table-msg"},[a("div",{staticClass:"msg-left"},[a("p",[t._v("查询符合上述条件的数据"),a("span",[t._v(t._s(t.list.totalCount))]),t._v("条")])])]),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list.data,border:"","show-summary":"","summary-method":t.getTotal,"default-sort":{prop:"date",order:"descending"}}},[a("el-table-column",{attrs:{prop:"dateline",align:"center",width:"100",formatter:t.formatDate,label:"日期"}}),t._v(" "),a("el-table-column",{attrs:{prop:"crop",align:"center",formatter:t.formatCorp,label:"外呼团队"}}),t._v(" "),a("el-table-column",{attrs:{prop:"porj",formatter:t.formatProj,align:"center",label:"品牌",width:"90"}}),t._v(" "),a("el-table-column",{attrs:{prop:"uname",align:"center",label:"坐席工号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"umemo",align:"center",label:"坐席姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"connect",align:"center",label:"接通数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"duration",align:"center",label:"通话量"}}),t._v(" "),a("el-table-column",{attrs:{prop:"leads",align:"center",label:"成功数",width:"90",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"leadsRate",align:"center",width:"90",label:"成功率",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[0!=e.row.leadsRate?a("p",{attrs:{type:"text",size:"small"}},[t._v(t._s(e.row.leadsRate)+"%")]):a("p",{attrs:{type:"text",size:"small"}},[t._v(t._s(e.row.leadsRate))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"statusNum",align:"center",label:"不合格数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"detention",align:"center",label:"挽留能力",width:"120",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[0!=e.row.detention?a("p",{attrs:{type:"text",size:"small"}},[t._v(t._s(e.row.detention)+"%")]):a("p",{attrs:{type:"text",size:"small"}},[t._v(t._s(e.row.detention))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"close_order",align:"center",label:"关单能力",sortable:"",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[0!=e.row.close_order?a("p",{attrs:{type:"text",size:"small"}},[t._v(t._s(e.row.close_order)+"%")]):a("p",{attrs:{type:"text",size:"small"}},[t._v(t._s(e.row.close_order))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"payWorktime",align:"center",label:"实际工作时长",width:"120"}})],1),t._v(" "),a("page-table",{attrs:{show_size:"true",cur:t.search.page,total_page:t.list.totalPage,total_count:t.list.totalCount},on:{change:t.change_data}})],1),t._v(" "),a("el-dialog",{attrs:{visible:t.popup_show},on:{"update:visible":function(e){t.popup_show=e}}},[a("popup-box",{ref:"getDataName",attrs:{dataList:t.userData}}),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.popup_show=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("保存")])],1)],1)],1)},staticRenderFns:[]};var p=a("VU/8")(c,d,!1,function(t){a("5n3b")},"data-v-c36d31ae",null);e.default=p.exports}});
//# sourceMappingURL=7.1c7de88bcf126605a696.js.map