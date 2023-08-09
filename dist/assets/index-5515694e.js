(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const g of d.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&a(g)}).observe(document,{childList:!0,subtree:!0});function n(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerPolicy&&(d.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?d.credentials="include":o.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(o){if(o.ep)return;o.ep=!0;const d=n(o);fetch(o.href,d)}})();let b;const L=new Uint8Array(16);function S(){if(!b&&(b=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!b))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return b(L)}const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function E(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}const A=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),C={randomUUID:A};function N(e,t,n){if(C.randomUUID&&!t&&!e)return C.randomUUID();e=e||{};const a=e.random||(e.rng||S)();if(a[6]=a[6]&15|64,a[8]=a[8]&63|128,t){n=n||0;for(let o=0;o<16;++o)t[n+o]=a[o];return t}return E(a)}class h{constructor(t){this.id=N(),this.description=t,this.done=!1,this.createdAt=new Date}}const c={All:"all",Completed:"Completed",Pending:"Pending"},s={todos:[new h("jugar futbol"),new h("Estudiar ingles"),new h("ver television"),new h("trabajar el sabado"),new h("hacer deporte")],filter:c.All},p=()=>{localStorage.setItem("state",JSON.stringify(s))},v=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=c.All}=JSON.parse(localStorage.getItem("state"));s.todos=e,s.filter=t},P=()=>{v()},D=e=>{if(!e)throw new Error("aun no implementado");s.todos.push(new h(e)),p()},k=e=>{s.todos=s.todos.map(t=>(t.id===e&&(t.done=!t.done),p(),t))},I=e=>{s.todos=s.todos.filter(t=>t.id!==e),p()},U=()=>{s.todos=s.todos.filter(e=>!e.done),p()},x=()=>{s.todos=s.todos.filter(e=>e.done),p()},O=(e=c.All)=>{s.filter=e,p()},q=()=>s.filter,F=(e=c.All)=>{switch(e){case c.All:return[...s.todos];case c.Completed:return s.todos.filter(t=>t.done);case c.Pending:return s.todos.filter(t=>!t.done);default:throw new Error(`Option ${e} is not valid.`)}},i={initStore:P,loadStore:v,addTodo:D,toggleTodo:k,deleteTodo:I,deleteCompleted:U,setFilter:O,getCurrentFilter:q,getTodos:F,NoDeleteCompleted:x,saveStateToLocalStorage:p},M=`<section class="todoapp">\r
    <header class="header">\r
        <h1>Notas | Pendientes</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita hacer ?" autofocus>\r
    </header>\r
    \r
    <!-- This section should be hidden by default and shown when there are todos -->\r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <label for="toggle-all">Mark all as complete</label>\r
        <ul class="todo-list">\r
            <!-- These are here just to show the structure of the list items -->\r
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->\r
            <!-- <li class="completed" data-id="abc">\r
                <div class="view">\r
                    <input class="toggle" type="checkbox" checked>\r
                    <label>Lista JavaScript</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Create a TodoMVC template">\r
            </li> -->\r
            <!-- <li>\r
                <div class="view">\r
                    <input class="toggle" type="checkbox">\r
                    <label>Comprar un unicornio</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Rule the web">\r
            </li> -->\r
        </ul>\r
    </section>\r
\r
    <!-- This footer should hidden by default and shown when there are todos -->\r
    <footer class="footer">\r
        <!-- This should be "0 items left" by default -->\r
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>\r
        <!-- Remove this if you don't implement routing -->\r
        <ul class="filters">\r
            <li>\r
                <a class="selected filtro" class="selected" href="#/">Todos</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/active">Pendientes</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/completed">Completados</a>\r
            </li>\r
        </ul>\r
        <!-- Hidden if no completed items are left ↓ -->\r
        <button class="clear-completed">Borrar completados</button>\r
        <button class="clear-Nocompleted">Borrar No completados</button>\r
    </footer>\r
</section>\r
\r
\r
<footer class="info">\r
    <p>Template creado por <a href="http://sindresorhus.com">SENA 24 HORAS</a></p>\r
    <!-- Change this out with your name and url ↓ -->\r
    <p>Creado por <a href="http://todomvc.com">Ing. Andru Salas C</a></p>\r
    <p>Parte de <a href="http://todomvc.com">ADSO 2502165</a></p>\r
</footer>`,H=e=>{if(!e)throw new Error("no hay descripcion requerida");const t=`<div class="view">
  <input class="toggle" type="checkbox" ${e.done?"checked":""}>
  <label>${e.description}</label>
  <button class="destroy"></button>
</div>
<input class="edit" value="Create a TodoMVC template">`,n=document.createElement("li");return n.innerHTML=t,n.setAttribute("data-id",e.id),e.done&&n.classList.add("completed"),n};let f;const R=(e,t=[])=>{if(f||(f=document.querySelector(e)),!f)throw new Error(`el elemento ${e} no enocntrado`);f.innerHTML="",t.forEach(n=>{f.append(H(n))})};let w;const V=e=>{if(w||(w=document.querySelector(e)),!w)throw new Error(`Element ${e} not found`);w.innerHTML=i.getTodos(c.Pending).length},u={ClearCompletedButton:".clear-completed",DeleteNoComplete:".clear-Nocompleted",TodoList:".todo-list",NewTodoInput:"#new-todo-input",TodoFilters:".filtro",PendingCountLabel:"#pending-count"},$=e=>{const t=()=>{V(u.PendingCountLabel)},n=()=>{const l=i.getTodos(i.getCurrentFilter());R(u.TodoList,l),t()};(()=>{const l=document.createElement("div");l.innerHTML=M,document.querySelector(e).append(l),n()})();const a=document.querySelector(u.NewTodoInput),o=document.querySelector(u.TodoList),d=document.querySelector(u.ClearCompletedButton),g=document.querySelector(u.DeleteNoComplete),T=document.querySelectorAll(u.TodoFilters);a.addEventListener("keyup",l=>{l.keyCode===13&&l.target.value.trim().length!==0&&(i.addTodo(l.target.value),n(),l.target.value="")}),o.addEventListener("click",l=>{const m=l.target.closest("[data-id]");i.toggleTodo(m.getAttribute("data-id")),n()}),o.addEventListener("click",l=>{const m=l.target.className==="destroy",y=l.target.closest("[data-id]");!y||!m||(i.deleteTodo(y.getAttribute("data-id")),n())}),d.addEventListener("click",()=>{i.deleteCompleted(),n()}),g.addEventListener("click",()=>{i.NoDeleteCompleted(),n()}),T.forEach(l=>{l.addEventListener("click",m=>{switch(T.forEach(y=>y.classList.remove("selected")),m.target.classList.add("selected"),m.target.text){case"Todos":i.setFilter(c.All);break;case"Pendientes":i.setFilter(c.Pending);break;case"Completados":i.setFilter(c.Completed);break}n()})})};$("#app");i.initStore();
