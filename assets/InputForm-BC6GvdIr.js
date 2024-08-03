import{_ as h,u as k,T as f,f as s,m as _,r as g,c as d,a as e,d as m,F as y,e as j,g as b,t as p,b as I,o as l}from"./index-BtjxeIM9.js";const C={name:"InputForm",setup(){return{store:k()}},components:{TermInput:f},data(){return{debug:!1,subject:s.namedNode(""),dataModel:[s.quad(s.blankNode(""),s.namedNode(""),s.namedNode(""))]}},computed:{..._(I,["graph_iri"])},methods:{newTriple(r){r||(r=0),this.dataModel.splice(r+1,0,s.quad(s.blankNode(""),s.namedNode(""),s.namedNode("")))},delTriple(r){this.dataModel.splice(r,1)},submit(){for(const r in this.dataModel){const t=this.dataModel[r];t.subject=this.subject}this.store.deleteInsertData({insertArray:this.dataModel,graphIri:this.graph_iri})}}},N={class:"Form"},M=e("label",{for:"resourceUriInput"},"Resource IRI (Subject)",-1),T={width:"100%"},v=e("tr",null,[e("th",{scope:"col",width:"45%"},"Predicate"),e("th",{scope:"col",width:"auto"},"Object"),e("th",{scope:"col",width:"90px"})],-1),w=["onClick"],S=["onClick"],U={key:1};function F(r,t,B,R,n,u){const c=g("TermInput");return l(),d("div",N,[e("form",null,[M,m(c,{term:n.subject,"onUpdate:term":t[0]||(t[0]=o=>n.subject=o),type:"iri",id:"resourceUriInput"},null,8,["term"]),e("table",T,[v,(l(!0),d(y,null,j(n.dataModel,(o,a)=>(l(),d("tr",{key:a},[e("td",null,[m(c,{id:"form-pred-"+a,term:o.predicate,"onUpdate:term":i=>o.predicate=i,type:"iri"},null,8,["id","term","onUpdate:term"])]),e("td",null,[m(c,{id:"form-obj-"+a,term:o.object,"onUpdate:term":i=>o.object=i},null,8,["id","term","onUpdate:term"])]),e("td",null,[e("button",{type:"button",class:"btn btn-outline-dark",onClick:i=>u.newTriple(a)},"+",8,w),e("button",{type:"button",class:"btn btn-outline-dark",onClick:i=>u.delTriple(a)},"-",8,S)])]))),128))]),n.dataModel.length<1?(l(),d("button",{key:0,type:"button",class:"btn btn-outline-dark mb-0",onClick:t[1]||(t[1]=o=>u.newTriple())},"+")):b("",!0),e("button",{type:"button",class:"btn btn-outline-primary mb-0",onClick:t[2]||(t[2]=(...o)=>u.submit&&u.submit(...o))},"Submit")]),n.debug==!1?(l(),d("a",{key:0,onClick:t[3]||(t[3]=o=>n.debug=!0)},"(show debug)")):b("",!0),n.debug?(l(),d("div",U,[e("a",{onClick:t[4]||(t[4]=o=>n.debug=!1)},"(hide debug)"),e("pre",null,"subject: "+p(n.subject)+`
`+p(n.dataModel)+`
      `,1)])):b("",!0)])}const q=h(C,[["render",F]]);export{q as default};
