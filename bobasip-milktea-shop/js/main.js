/* ===== BobaSip shared JS ===== */
const CART_KEY = 'bobasip_cart';
const USER_KEY = 'bobasip_user';
const ORDER_KEY = 'bobasip_last_order';
const THEME_KEY = 'bobasip_theme';
const ORDERS_KEY = 'bobasip_orders';
const ADDRS_KEY = 'bobasip_addresses';
const PAYS_KEY = 'bobasip_payments';
const NOTIF_KEY = 'bobasip_notifications';
const SETTINGS_KEY = 'bobasip_settings';
const CUSTOM_PRODUCTS_KEY = 'bobasip_custom_products';
const PRODUCT_CATEGORIES = ['Milk Tea','Fruit Tea','Iced Coffee','Premium Iced Coffee','Mango Series','Fruit Yogurt','Cheesecake Series'];
const PRODUCT_IMAGE_FALLBACK = 'images/bobasip-logo.png';

const PRODUCTS = {
  'matcha': { id:'matcha', name:'Matcha', desc:'Milk Tea', mediumPrice:49, largePrice:59, icon:'leaf', image:'images/matcha.png', cat:'Milk Tea' },
  'wintermelon': { id:'wintermelon', name:'Wintermelon', desc:'Milk Tea', mediumPrice:49, largePrice:59, icon:'snowflake', image:'images/wintermelon.png', cat:'Milk Tea' },
  'okinawa': { id:'okinawa', name:'Okinawa', desc:'Milk Tea', mediumPrice:49, largePrice:59, icon:'cup-soda', image:'images/okinawa.png', cat:'Milk Tea' },
  'hokkaido': { id:'hokkaido', name:'Hokkaido', desc:'Milk Tea', mediumPrice:49, largePrice:59, icon:'cup-soda', image:'images/hokkaido.png', cat:'Milk Tea' },
  'chocolate': { id:'chocolate', name:'Chocolate', desc:'Milk Tea', mediumPrice:49, largePrice:59, icon:'cookie', image:'images/chocolate.png', cat:'Milk Tea' },
  'redvelvet': { id:'redvelvet', name:'Red Velvet', desc:'Milk Tea', mediumPrice:49, largePrice:59, icon:'heart', image:'images/redvelvet.png', cat:'Milk Tea' },
  'passionfruit': { id:'passionfruit', name:'Passion Fruit', desc:'Fruit Tea', mediumPrice:39, largePrice:49, icon:'citrus', image:'images/passionfruit.png', cat:'Fruit Tea' },
  'fourseason': { id:'fourseason', name:'Four Season', desc:'Fruit Tea', mediumPrice:39, largePrice:49, icon:'leaf', image:'images/fourseason.png', cat:'Fruit Tea' },
  'lychee': { id:'lychee', name:'Lychee', desc:'Fruit Tea', mediumPrice:39, largePrice:49, icon:'cherry', image:'images/lychee.png', cat:'Fruit Tea' },
  'kiwi': { id:'kiwi', name:'Kiwi', desc:'Fruit Tea', mediumPrice:39, largePrice:49, icon:'apple', image:'images/kiwi.png', cat:'Fruit Tea' },
  'saltedcaramel': { id:'saltedcaramel', name:'Salted Caramel', desc:'Iced Coffee', mediumPrice:49, largePrice:59, icon:'coffee', image:'images/saltedcaramel.png', cat:'Iced Coffee' },
  'spanishlatte': { id:'spanishlatte', name:'Spanish Latte', desc:'Iced Coffee', mediumPrice:49, largePrice:59, icon:'coffee', image:'images/spanishlatte.png', cat:'Iced Coffee' },
  'hazelnut': { id:'hazelnut', name:'Hazel Nut', desc:'Iced Coffee', mediumPrice:49, largePrice:59, icon:'coffee', image:'images/hazelnut.png', cat:'Iced Coffee' },
  'frenchvanilla': { id:'frenchvanilla', name:'French Vanilla', desc:'Iced Coffee', mediumPrice:49, largePrice:59, icon:'coffee', image:'images/frenchvanilla.png', cat:'Iced Coffee' },
  'icedamericano': { id:'icedamericano', name:'Iced Americano', desc:'Iced Coffee', mediumPrice:49, largePrice:59, icon:'coffee', image:'images/icedamericano.png', cat:'Iced Coffee' },
  'strawberrymilk': { id:'strawberrymilk', name:'Strawberry Milk', desc:'Premium Iced Coffee', mediumPrice:59, largePrice:69, icon:'heart', image:'images/strawberrymilk.png', cat:'Premium Iced Coffee' },
  'premcoffee': { id:'premcoffee', name:'Coffee', desc:'Premium Iced Coffee', mediumPrice:59, largePrice:69, icon:'coffee', image:'images/coffee.png', cat:'Premium Iced Coffee' },
  'caramelmacchiato': { id:'caramelmacchiato', name:'Caramel Macchiato', desc:'Premium Iced Coffee', mediumPrice:59, largePrice:69, icon:'coffee', image:'images/caramelmacchiato.png', cat:'Premium Iced Coffee' },
  'cappuccinocaramel': { id:'cappuccinocaramel', name:'Cappuccino Caramel', desc:'Premium Iced Coffee', mediumPrice:59, largePrice:69, icon:'coffee', image:'images/cappuccinocaramel.png', cat:'Premium Iced Coffee' },
  'matchalatte': { id:'matchalatte', name:'Matcha Latte', desc:'Premium Iced Coffee', mediumPrice:59, largePrice:69, icon:'leaf', image:'images/matchalatte.png', cat:'Premium Iced Coffee' },
  'mangomilktea': { id:'mangomilktea', name:'Mango Milk Tea', desc:'Mango Series', mediumPrice:49, largePrice:59, icon:'apple', image:'images/mangomilktea.png', cat:'Mango Series' },
  'mangocheesecake': { id:'mangocheesecake', name:'Mango Cheesecake', desc:'Mango Series', mediumPrice:69, largePrice:79, icon:'apple', image:'images/mangocheesecake.png', cat:'Mango Series' },
  'mangoyogurt': { id:'mangoyogurt', name:'Mango Yogurt', desc:'Mango Series', mediumPrice:69, largePrice:79, icon:'apple', image:'images/mangoyogurt.png', cat:'Mango Series' },
  'blueberry': { id:'blueberry', name:'Blueberry', desc:'Fruit Yogurt', mediumPrice:39, largePrice:49, icon:'grape', image:'images/blueberry.png', cat:'Fruit Yogurt' },
  'bluelemonade': { id:'bluelemonade', name:'Blue Lemonade', desc:'Fruit Yogurt', mediumPrice:39, largePrice:49, icon:'citrus', image:'images/bluelemonade.png', cat:'Fruit Yogurt' },
  'fourseasonyogurt': { id:'fourseasonyogurt', name:'Four Season', desc:'Fruit Yogurt', mediumPrice:39, largePrice:49, icon:'leaf', image:'images/fourseasonyogurt.png', cat:'Fruit Yogurt' },
  'applegreen': { id:'applegreen', name:'Apple Green', desc:'Fruit Yogurt', mediumPrice:39, largePrice:49, icon:'apple', image:'images/applegreen.png', cat:'Fruit Yogurt' },
  'strawberryyogurt': { id:'strawberryyogurt', name:'Strawberry', desc:'Fruit Yogurt', mediumPrice:39, largePrice:49, icon:'cherry', image:'images/strawberry.png', cat:'Fruit Yogurt' },
  'lycheeyogurt': { id:'lycheeyogurt', name:'Lychee', desc:'Fruit Yogurt', mediumPrice:39, largePrice:49, icon:'cherry', image:'images/lycheeyogurt.png', cat:'Fruit Yogurt' },
  'chocolatecheesecake': { id:'chocolatecheesecake', name:'Chocolate Cheesecake', desc:'Cheesecake Series', mediumPrice:59, largePrice:69, icon:'cookie', image:'images/chocolatecheesecake.png', cat:'Cheesecake Series' },
  'oreocheesecake': { id:'oreocheesecake', name:'Oreo Cheesecake', desc:'Cheesecake Series', mediumPrice:59, largePrice:69, icon:'cookie', image:'images/oreocheesecake.png', cat:'Cheesecake Series' },
  'oreomatcha': { id:'oreomatcha', name:'Oreo Matcha', desc:'Cheesecake Series', mediumPrice:59, largePrice:69, icon:'leaf', image:'images/oreomatcha.png', cat:'Cheesecake Series' },
  'redvelvetcake': { id:'redvelvetcake', name:'Red Velvet Cheesecake', desc:'Cheesecake Series', mediumPrice:59, largePrice:69, icon:'heart', image:'images/redvelvetcake.png', cat:'Cheesecake Series' },
  'cheesecake': { id:'cheesecake', name:'Cheesecake', desc:'Cheesecake Series', mediumPrice:59, largePrice:69, icon:'cookie', image:'images/cheesecake.png', cat:'Cheesecake Series' },
};

function getCustomProducts(){ try{ return JSON.parse(localStorage.getItem(CUSTOM_PRODUCTS_KEY))||{}; }catch(e){ return {}; } }
function saveCustomProducts(p){ try{ localStorage.setItem(CUSTOM_PRODUCTS_KEY, JSON.stringify(p||{})); }catch(e){ toast('Storage full - use a smaller image'); } }
const HIDDEN_KEY='bobasip_hidden_products';
function getHidden(){ return loadJSON(HIDDEN_KEY,[]); }
function getAllProducts(){ const all=Object.assign({}, PRODUCTS, getCustomProducts()); getHidden().forEach(id=>delete all[id]); return all; }
function getProduct(id){ const c=getCustomProducts(); return c[id] || PRODUCTS[id] || null; }

function cartKey(){ const u=getUser(); return CART_KEY+(u&&u.email?':'+u.email:''); }
function addrKey(){ const u=getUser(); const e=(u&&u.email)?String(u.email).trim().toLowerCase():''; return ADDRS_KEY+(e?':'+e:''); }
function paysKey(){ const u=getUser(); const e=(u&&u.email)?String(u.email).trim().toLowerCase():''; return PAYS_KEY+(e?':'+e:''); }
function selectedAddrKey(){ const u=getUser(); const e=(u&&u.email)?String(u.email).trim().toLowerCase():''; return 'bobasip_selected_address'+(e?':'+e:''); }
function getCart(){ try{return JSON.parse(localStorage.getItem(cartKey()))||[];}catch(e){return [];} }
// Restored product image: fall back to PRODUCTS so old carts/orders saved with
// image:null (before the images were put back) still show their picture.
function productImage(it){ return (it && it.image) || (it && getProduct(it.id) && getProduct(it.id).image) || null; }
function itemThumb(it, cls){ const img = productImage(it); return img ? `<img src="${esc(img)}" alt="${esc((it&&it.name)||'Product')}" class="${cls||'w-full h-full object-cover'}" />` : `<i data-lucide="${esc((it&&it.icon)||'cup-soda')}" class="w-5 h-5 text-brown"></i>`; }
// Admin profile picture: the BobaSip logo image that was put on the Admin
// account. Derived from role so an admin who is already logged in (saved
// user without an avatar field) gets the image back without logging in again.
function setAvatar(el, u){
  if(!el) return;
  const src = u && (u.avatar || (u.role==='admin' ? 'images/admin.png' : (u.role==='user' ? 'images/user.png' : null)));
  if(src){ el.style.overflow='hidden'; el.innerHTML = `<img src="${src}" alt="Profile" class="w-full h-full object-cover" />`; }
  else el.textContent = u ? (u.name||'G').charAt(0).toUpperCase() : 'G';
}
function saveCart(c){ localStorage.setItem(cartKey(), JSON.stringify(c)); updateCartBadges(); }
function cartCount(){ return getCart().reduce((s,i)=>s+i.qty,0); }
function cartSubtotal(){ return getCart().reduce((s,i)=>s+i.price*i.qty,0); }

function addToCart(id, size='Medium', qty=1, silent=false){
  const p = getProduct(id); if(!p) return;
  const price = size==='Large' ? p.largePrice : p.mediumPrice;
  const cart = getCart();
  const existing = cart.find(i=>i.id===id && i.size===size);
  if(existing) existing.qty += qty;
  else cart.push({id, name:p.name, price, icon:p.icon, image:p.image, size, qty});
  saveCart(cart);
  if(!silent) toast(p.name + ' (' + size + ') added to cart');
}
function openAddModal(id){
  const p = getProduct(id); if(!p) return;
  // remove existing modal
  const old = document.querySelector('#addModal'); if(old) old.remove();
  const modal = document.createElement('div');
  modal.id = 'addModal';
  modal.className = 'fixed inset-0 z-[70] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4';
  modal.innerHTML = `
    <div class="w-full max-w-md bg-white dark:bg-cream-2 border-2 border-brown/20 rounded-2xl p-6 shadow-soft max-h-[90vh] overflow-y-auto">
      <div class="flex items-center gap-3 mb-4">
        <img src="${p.image||'images/bobasip-logo.png'}" alt="${p.name}" class="w-24 h-24 rounded-xl object-cover bg-cream-2 p-1" />
        <div>
          <div class="font-display text-xl font-extrabold text-ink">${p.name}</div>
          <div class="text-ink-muted font-semibold text-sm">${p.desc} · ${p.cat}</div>
        </div>
      </div>
      <div class="mb-4">
        <div class="text-xs font-extrabold tracking-wide text-ink-soft mb-2">CHOOSE SIZE</div>
        <div class="grid grid-cols-2 gap-2">
          <button type="button" data-size="Medium" class="size-opt px-4 py-3 rounded-xl border-2 border-accent bg-accent/10 text-accent font-extrabold text-sm transition">Medium<br/><span class="text-lg">₱${p.mediumPrice}</span></button>
          <button type="button" data-size="Large" class="size-opt px-4 py-3 rounded-xl border-2 border-ink/10 bg-white dark:bg-cream-2 text-ink font-extrabold text-sm hover:border-accent transition">Large<br/><span class="text-lg">₱${p.largePrice}</span></button>
        </div>
      </div>
      <div class="mb-4">
        <div class="text-xs font-extrabold tracking-wide text-ink-soft mb-2">SUGAR LEVEL</div>
        <div class="grid grid-cols-4 gap-2">
          <button type="button" data-sugar="0%" class="sugar-opt px-2 py-2 rounded-xl border-2 border-ink/10 bg-white dark:bg-cream-2 text-ink font-bold text-xs hover:border-accent transition">0%</button>
          <button type="button" data-sugar="25%" class="sugar-opt px-2 py-2 rounded-xl border-2 border-ink/10 bg-white dark:bg-cream-2 text-ink font-bold text-xs hover:border-accent transition">25%</button>
          <button type="button" data-sugar="50%" class="sugar-opt px-2 py-2 rounded-xl border-2 border-accent bg-accent/10 text-accent font-bold text-xs transition">50%</button>
          <button type="button" data-sugar="75%" class="sugar-opt px-2 py-2 rounded-xl border-2 border-ink/10 bg-white dark:bg-cream-2 text-ink font-bold text-xs hover:border-accent transition">75%</button>
          <button type="button" data-sugar="100%" class="sugar-opt col-span-4 px-2 py-2 rounded-xl border-2 border-ink/10 bg-white dark:bg-cream-2 text-ink font-bold text-xs hover:border-accent transition">100%</button>
        </div>
      </div>
      <div class="mb-4">
        <div class="text-xs font-extrabold tracking-wide text-ink-soft mb-2">ADD-ONS</div>
        <div class="space-y-2">
          <label class="flex items-center justify-between p-2 rounded-xl border border-ink/10 bg-white dark:bg-cream-2"><div class="flex items-center gap-2"><input type="checkbox" data-addon="Pearls" data-price="10" class="addon-chk rounded border-ink/30"> <span class="text-sm font-semibold text-ink">Pearls</span></div><span class="text-xs font-bold text-accent">+₱10</span></label>
          <label class="flex items-center justify-between p-2 rounded-xl border border-ink/10 bg-white dark:bg-cream-2"><div class="flex items-center gap-2"><input type="checkbox" data-addon="Nata De Coco" data-price="10" class="addon-chk rounded border-ink/30"> <span class="text-sm font-semibold text-ink">Nata De Coco</span></div><span class="text-xs font-bold text-accent">+₱10</span></label>
          <label class="flex items-center justify-between p-2 rounded-xl border border-ink/10 bg-white dark:bg-cream-2"><div class="flex items-center gap-2"><input type="checkbox" data-addon="Cream Cheese" data-price="15" class="addon-chk rounded border-ink/30"> <span class="text-sm font-semibold text-ink">Cream Cheese</span></div><span class="text-xs font-bold text-accent">+₱15</span></label>
          <label class="flex items-center justify-between p-2 rounded-xl border border-ink/10 bg-white dark:bg-cream-2"><div class="flex items-center gap-2"><input type="checkbox" data-addon="Oreo Crumbles" data-price="15" class="addon-chk rounded border-ink/30"> <span class="text-sm font-semibold text-ink">Oreo Crumbles</span></div><span class="text-xs font-bold text-accent">+₱15</span></label>
        </div>
      </div>
      <div class="flex gap-2">
        <button type="button" id="cancelAdd" class="flex-1 px-4 py-3 rounded-xl bg-brown/8 text-brown font-extrabold text-sm hover:bg-brown/15 transition">Cancel</button>
        <button type="button" id="confirmAdd" class="flex-1 px-4 py-3 rounded-xl bg-gradient-to-br from-accent to-brown text-white font-extrabold text-sm shadow-soft hover:brightness-105 transition">Add to Cart</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  if(window.lucide) lucide.createIcons();
  let selectedSize = 'Medium';
  modal.querySelectorAll('.size-opt').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      selectedSize = btn.dataset.size;
      modal.querySelectorAll('.size-opt').forEach(b=>{
        b.classList.remove('border-accent','bg-accent/10','text-accent');
        b.classList.add('border-ink/10','bg-white','dark:bg-cream-2','text-ink');
      });
      btn.classList.remove('border-ink/10','bg-white','dark:bg-cream-2','text-ink');
      btn.classList.add('border-accent','bg-accent/10','text-accent');
    });
  });
  let selectedSugar = '50%';
  modal.querySelectorAll('.sugar-opt').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      selectedSugar = btn.dataset.sugar;
      modal.querySelectorAll('.sugar-opt').forEach(b=>{
        b.classList.remove('border-accent','bg-accent/10','text-accent');
        b.classList.add('border-ink/10','bg-white','dark:bg-cream-2','text-ink');
      });
      btn.classList.remove('border-ink/10','bg-white','dark:bg-cream-2','text-ink');
      btn.classList.add('border-accent','bg-accent/10','text-accent');
    });
  });
  modal.querySelector('#cancelAdd').addEventListener('click', ()=>modal.remove());
  modal.querySelector('#confirmAdd').addEventListener('click', ()=>{
    const confirmBtn = modal.querySelector('#confirmAdd');
    if(confirmBtn && confirmBtn.disabled) return;
    if(confirmBtn){ confirmBtn.disabled = true; confirmBtn.classList.add('opacity-60','pointer-events-none'); }
    const cancelBtn = modal.querySelector('#cancelAdd');
    if(cancelBtn){ cancelBtn.disabled = true; cancelBtn.classList.add('pointer-events-none','opacity-60'); }
    const addons = [];
    modal.querySelectorAll('.addon-chk:checked').forEach(chk=>{
      addons.push({name: chk.dataset.addon, price: parseInt(chk.dataset.price||'0',10)});
    });
    const base=(selectedSize==='Large'?p.largePrice:p.mediumPrice); const extra=addons.reduce((n,a)=>n+(a.price||0),0);
    const line={id,name:p.name,price:base+extra,icon:p.icon,image:p.image,size:selectedSize,sugar:selectedSugar,addons,addonTotal:extra,qty:1};
    const cart=getCart(); const ex=cart.find(i=>lineKey(i)===lineKey(line)); if(ex) ex.qty+=1; else cart.push(line); saveCart(cart);
    modal.remove();
    showLoadingSuccess('Added to cart', 'cart', {loadingMessage:'Adding to cart…', successMessage:'Added to cart'});
  });

  modal.addEventListener('click', (e)=>{ if(e.target===modal) modal.remove(); });
}
function removeFromCart(k){ saveCart(getCart().filter(i=>lineKey(i)!==k)); }
function setQty(k, qty){ const cart=getCart(); const it=cart.find(i=>lineKey(i)===k); if(!it) return; it.qty=Math.max(1,qty); saveCart(cart); }
function clearCart(){ localStorage.removeItem(cartKey()); updateCartBadges(); }

function updateCartBadges(){
  const n = cartCount();
  document.querySelectorAll('[data-cart-badge]').forEach(el=>{
    el.textContent = n;
    el.classList.toggle('hidden', n===0);
  });
  document.querySelectorAll('[data-cart-count-text]').forEach(el=>{
    el.textContent = n + ' item' + (n!==1?'s':'') + ' ready for checkout';
  });
}

function getUser(){ try{return JSON.parse(localStorage.getItem(USER_KEY));}catch(e){return null;} }
function saveUser(u){ localStorage.setItem(USER_KEY, JSON.stringify(u)); }
const ACCOUNTS_KEY='bobasip_accounts';
const STATUSES=['Pending Approval','Accepted','Preparing','Out for Delivery','Delivered','Rejected','Cancelled'];
const PUBLIC_PAGES=['welcome','login','signup','forgot'];
function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function lineKey(it){ return [it.id,it.size||'',it.sugar||'',(it.addons||[]).map(a=>a.name).sort().join('+')].join('|'); }
async function sha(t){ const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(t)); return Array.from(new Uint8Array(b)).map(x=>x.toString(16).padStart(2,'0')).join(''); }
function ordersForUser(){ const u=getUser()||{}; return loadJSON(ORDERS_KEY,[]).filter(o=>!o.hiddenByUser && (u.role==='admin' || !o.userEmail || o.userEmail===u.email)); }
const LAST_ORDER_PREFIX='bobasip_last_order:';
function lastOrderKey(email){ return LAST_ORDER_PREFIX + String(email||'guest'); }
function saveLastOrder(order){
  const u=getUser()||{};
  if(u.email) localStorage.setItem(lastOrderKey(u.email), JSON.stringify(order));
  localStorage.setItem(ORDER_KEY, JSON.stringify(order));
}
function getLastOrder(){
  const u=getUser()||{};
  const matches=(o)=>!!o && (u.role==='admin' || !u.email || !o.userEmail || o.userEmail===u.email);
  if(u.email){
    const own=loadJSON(lastOrderKey(u.email), null);
    if(matches(own)) return own;
  }
  const legacy=loadJSON(ORDER_KEY, null);
  if(matches(legacy)) return legacy;
  const visible=ordersForUser();
  return visible[0] || null;
}
function removeLastOrder(ref){
  const u=getUser()||{};
  if(u.email){
    const k=lastOrderKey(u.email);
    const own=loadJSON(k,null);
    if(own && own.ref===ref) localStorage.removeItem(k);
  }
  const legacy=loadJSON(ORDER_KEY,null);
  if(legacy && legacy.ref===ref) localStorage.removeItem(ORDER_KEY);
}
function statusColor(st){ st=st||'Pending Approval'; if(st==='Delivered') return 'bg-success/10 text-success'; if(st==='Rejected'||st==='Cancelled') return 'bg-red-50 text-red-600'; if(st==='Pending Approval') return 'bg-amber-100 text-amber-700'; if(st==='Accepted') return 'bg-blue-100 text-blue-700'; if(st==='Preparing') return 'bg-purple-100 text-purple-700'; if(st==='Out for Delivery') return 'bg-indigo-100 text-indigo-700'; return 'bg-accent/15 text-accent'; }
function statusBadge(o,canCancel){ const st=o.status||'Pending Approval'; const c=statusColor(st); let extra=''; if(canCancel && (st==='Pending Approval')) extra=`<button type="button" data-cancel="${esc(o.ref)}" class="px-2.5 py-1 rounded-lg bg-red-50 text-red-600 font-bold text-[11px] hover:bg-red-100 transition">Cancel</button>`; return `<span class="inline-flex px-2.5 py-1 rounded-full text-[11px] font-extrabold ${c}">${st}</span>`+extra; }
function adminStatusControl(o){ return `<select data-status="${esc(o.ref)}" class="px-2 py-1 rounded-lg border border-ink/15 bg-white dark:bg-cream-2 text-ink font-bold text-xs">${STATUSES.map(x=>`<option${x===(o.status||'Pending Approval')?' selected':''}>${x}</option>`).join('')}</select>`; }
function adminStats(){
  const base=loadJSON(ORDERS_KEY,[]).filter(o=>!o.hiddenByUser);
  const os=base.filter(o=>o.status!=='Cancelled' && o.status!=='Rejected' && o.status!=='Pending Approval');
  const m={};
  os.forEach(o=>(o.items||[]).forEach(i=>{ m[i.name]=(m[i.name]||0)+(i.qty||0); }));
  const top=Object.entries(m).sort((a,b)=>b[1]-a[1]).slice(0,6);
  const days=[],rev=[];
  for(let d=6;d>=0;d--){ const t=new Date(); t.setHours(0,0,0,0); t.setDate(t.getDate()-d); const n=new Date(t); n.setDate(n.getDate()+1); days.push(t.toLocaleDateString(undefined,{weekday:'short'})); rev.push(os.filter(o=>o.createdAt>=t.getTime()&&o.createdAt<n.getTime()).reduce((x,o)=>x+(o.total||0),0)); }
  const statusCount = (s)=>base.filter(o=>(o.status||'Pending Approval')===s).length;
  return {names:top.map(x=>x[0]),units:top.map(x=>x[1]),pay:['Card','GCash','Cash'].map(x=>os.filter(o=>o.payment===x).length),days,rev,count:base.length,revenue:os.reduce((x,o)=>x+(o.total||0),0),pending:statusCount('Pending Approval'),accepted:base.filter(o=>['Accepted','Preparing','Out for Delivery'].includes(o.status||'Pending Approval')).length,rejected:statusCount('Rejected'),completed:statusCount('Delivered')};
}
function renderAdminStats(){ const S=adminStats(); const pairs=[['#statTotalOrders',S.count],['#statRevenue',money(S.revenue)],['#statPending',S.pending],['#statAccepted',S.accepted],['#statRejected',S.rejected],['#statCompleted',S.completed]]; pairs.forEach(([q,v])=>{ const e=document.querySelector(q); if(e) e.textContent=v; }); try{ renderAdminRecentOrders(); }catch(e){} }
function renderAdminRecentOrders(){
  const list = document.getElementById('adminRecentOrders');
  if(!list) return;
  const rows = loadJSON(ORDERS_KEY, [])
    .filter(order=>!order.hiddenByUser)
    .slice()
    .sort((a,b)=>(Number(b.createdAt)||0)-(Number(a.createdAt)||0))
    .slice(0,5);
  if(!rows.length){ list.innerHTML='<div class="text-center text-ink-muted font-semibold py-8">No recent orders yet.</div>'; return; }
  list.innerHTML = rows.map(o=>`<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 bg-white/70 border border-white/60 rounded-2xl"><div class="min-w-0"><div class="font-extrabold">${esc(o.ref||'ORDER')} <span class="text-xs text-ink-muted font-semibold">${esc(o.date||'')}</span></div><div class="text-xs text-ink-muted font-semibold mt-1">${esc(o.userName||o.userEmail||'Customer')} · ${(o.items||[]).reduce((n,i)=>n+(Number(i.qty)||0),0)} item(s)</div></div><div class="flex items-center gap-3"><div class="text-right"><div class="text-xs font-bold text-ink-soft">${esc(o.status||'Pending Approval')}</div><div class="font-extrabold text-accent">${money(Number(o.total)||0)}</div></div><button type="button" data-print="${esc(o.ref||'')}" class="px-3 py-2 rounded-xl bg-brown/10 text-brown font-bold text-xs hover:bg-brown/20 transition">Print</button></div></div>`).join('');
  list.querySelectorAll('[data-print]').forEach(button=>button.addEventListener('click',()=>printReceipt(button.dataset.print)));
}
function renderAdminCharts(){
  if(!window.Chart){
    if(window._chartJsLoading) return;
    window._chartJsLoading = true;
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.3';
    script.onload = ()=>{ window._chartJsLoading=false; try{ renderAdminCharts(); }catch(e){ console.error(e); } };
    script.onerror = ()=>{ window._chartJsLoading=false; console.error('Chart.js failed to load'); };
    document.head.appendChild(script);
    return;
  }
  if(window._adminCharts){ window._adminCharts.forEach(c=>{ try{ c.destroy(); }catch(e){} }); }
  window._adminCharts = [];
  const S = adminStats();
  const salesCtx = document.getElementById('salesChart');
  if(salesCtx){
    window._adminCharts.push(new Chart(salesCtx, {
      type:'bar',
      data:{ labels:S.names,
        datasets:[{label:'Units sold',data:S.units,backgroundColor:'#c97b3a',borderRadius:8}]},
      options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{beginAtZero:true,grid:{color:'rgba(43,33,24,.06)'}}}}
    }));
  }
  const payCtx = document.getElementById('payChart');
  if(payCtx){
    window._adminCharts.push(new Chart(payCtx, {
      type:'doughnut',
      data:{labels:['Card','GCash','Cash'],datasets:[{data:S.pay,backgroundColor:['#6b4423','#c97b3a','#d4a056'],borderWidth:0}]},
      options:{responsive:true,maintainAspectRatio:false,cutout:'68%',plugins:{legend:{position:'bottom'}}}
    }));
  }
  const trendCtx = document.getElementById('trendChart');
  if(trendCtx){
    window._adminCharts.push(new Chart(trendCtx, {
      type:'line',
      data:{labels:S.days,datasets:[{label:'Revenue',data:S.rev,borderColor:'#c97b3a',backgroundColor:'rgba(201,123,58,.15)',fill:true,tension:.4,pointBackgroundColor:'#6b4423'}]},
      options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{beginAtZero:true,grid:{color:'rgba(43,33,24,.06)'}}}}
    }));
  }
}

function toast(msg){
  const t = document.querySelector('.toast');
  if(!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(()=>t.classList.remove('show'), 1800);
}

function showConfirm({title='Confirm', message='', confirmText='Confirm', cancelText='Cancel', onConfirm, danger=false, onSubmit, initialValue=''}={}){
  if(document.querySelector('[data-confirm-overlay]')) return;
  const overlay=document.createElement('div');
  overlay.setAttribute('data-confirm-overlay','1');
  overlay.className='ls-overlay fixed inset-0 z-[90] flex items-center justify-center bg-black/50 backdrop-blur-sm';
  const btnCls = danger ? 'ls-confirm-danger' : 'ls-confirm-primary';
  const input = onSubmit ? '<input id="confirmOverlayInput" type="text" value="' + esc(initialValue||'') + '" placeholder="Enter new value" class="ls-modal-input w-full px-4 py-2.5 rounded-xl border border-ink/15 bg-white dark:bg-cream-2 font-semibold text-sm outline-none mb-5" />' : '';
  overlay.innerHTML=`<div class="ls-modal-card relative w-[min(90vw,420px)] rounded-3xl bg-white dark:bg-cream-2 shadow-soft overflow-hidden text-center p-6 border border-white/60">
    <div class="ls-modal-title font-display text-xl font-extrabold mb-2">${esc(title)}</div>
    <div class="ls-modal-desc text-sm font-semibold mb-5">${esc(message)}</div>
    ${input}
    <div class="flex gap-2">
      <button type="button" class="ls-cancel ls-cancel-btn flex-1 px-5 py-2.5 rounded-xl font-extrabold transition">${esc(cancelText)}</button>
      <button type="button" class="ls-confirm ls-confirm-btn ${btnCls} flex-1 px-5 py-2.5 rounded-xl font-extrabold transition">${esc(confirmText)}</button>
    </div>
  </div>`;
  document.body.appendChild(overlay);
  const close=()=>overlay.remove();
  overlay.querySelector('.ls-cancel').addEventListener('click', close);
  overlay.querySelector('.ls-confirm').addEventListener('click', ()=>{ const val = onSubmit ? ((overlay.querySelector('#confirmOverlayInput')?.value||'').trim()) : undefined; close(); try{ onSubmit ? onSubmit(val) : onConfirm && onConfirm(); }catch(e){ console.error(e); } });
  overlay.addEventListener('click', (e)=>{ if(e.target===overlay) close(); });
}

function showLoadingSuccess(message, redirectUrl, opts){
  opts = opts || {};
  if(window._lsTimers){ window._lsTimers.forEach(clearTimeout); }
  window._lsTimers = [];
  const existing = document.querySelector('.ls-overlay'); if(existing) existing.remove();
  const overlay = document.createElement('div');
  overlay.className = 'ls-overlay fixed inset-0 z-[80] flex items-center justify-center bg-black/50 backdrop-blur-sm';
  const loadingMsg = opts.loadingMessage || message || 'Please wait';
  overlay.innerHTML = `
    <div class="bg-white dark:bg-cream-2 rounded-2xl p-8 shadow-soft text-center w-72 border border-white/60">
      <div class="ls-circle">
        <div class="ls-ring" id="lsRing"></div>
        <div class="ls-success" id="lsSuccess" aria-hidden="true">
          <svg class="ls-check-svg" viewBox="0 0 24 24"><path class="ls-check-path" d="M5 13l4 4L19 7"/></svg>
        </div>
      </div>
      <div id="lsMsg" class="font-display text-lg font-extrabold text-ink">${loadingMsg}</div>
      <div id="lsSub" class="text-sm font-semibold text-ink-muted mt-1">${opts.loadingSub || 'Please wait…'}</div>
    </div>
  `;
  document.body.appendChild(overlay);
  window._lsTimers.push(setTimeout(()=>{
    const ring = overlay.querySelector('#lsRing');
    const ok = overlay.querySelector('#lsSuccess');
    const msg = overlay.querySelector('#lsMsg');
    const sub = overlay.querySelector('#lsSub');
    if(ring) ring.style.display = 'none';
    if(ok) ok.classList.add('show');
    let successText = opts.successMessage;
    if(!successText){
      const name = getUser() ? (getUser().name||'').split(' ')[0] : '';
      successText = /welcome/i.test(message) ? ('Welcome, ' + name) : (String(message).toLowerCase().includes('account') ? 'Account created' : (String(message).toLowerCase().includes('log') ? 'Logged out' : 'Success'));
    }
    if(msg){
      msg.classList.remove('ls-msg-pop'); void msg.offsetWidth; msg.classList.add('ls-msg-pop');
      msg.textContent = successText;
    }
    if(sub) sub.textContent = opts.successSub || (opts.reload ? 'Refreshing…' : (redirectUrl ? 'Redirecting…' : 'Done'));
  }, opts.loadingMs || 900));
  window._lsTimers.push(setTimeout(()=>{
    if(typeof opts.onComplete === 'function') opts.onComplete();
    if(opts.reload){ location.reload(); return; }
    if(redirectUrl){
      var t=String(redirectUrl).replace(/^\//,'').replace(/\.html$/i,'');
      if(/^https?:/.test(redirectUrl)) window.location.href=redirectUrl; else navigateTo(t||'welcome');
    } else overlay.remove();
    window._lsTimers = [];
  }, opts.doneMs || 1950));
}

function showLoadingFailed(message, opts){
  opts = opts || {};
  if(window._lsTimers){ window._lsTimers.forEach(clearTimeout); }
  window._lsTimers = [];
  const existing = document.querySelector('.ls-overlay'); if(existing) existing.remove();
  const overlay = document.createElement('div');
  overlay.className = 'ls-overlay fixed inset-0 z-[80] flex items-center justify-center bg-black/50 backdrop-blur-sm';
  const loadingMsg = opts.loadingMessage || 'Checking…';
  overlay.innerHTML = `
    <div class="bg-white dark:bg-cream-2 rounded-2xl p-8 shadow-soft text-center w-72 border border-white/60">
      <div class="ls-circle">
        <div class="ls-ring" id="lsRing"></div>
        <div class="ls-failed" id="lsFailed" aria-hidden="true">
          <svg class="ls-x-svg" viewBox="0 0 24 24"><path class="ls-x-path" d="M6 6L18 18M18 6L6 18"/></svg>
        </div>
      </div>
      <div id="lsMsg" class="font-display text-lg font-extrabold text-ink">${loadingMsg}</div>
      <div id="lsSub" class="text-sm font-semibold text-ink-muted mt-1">${opts.loadingSub || 'Please wait…'}</div>
    </div>
  `;
  document.body.appendChild(overlay);
  window._lsTimers.push(setTimeout(()=>{
    const ring = overlay.querySelector('#lsRing');
    const fail = overlay.querySelector('#lsFailed');
    const msg = overlay.querySelector('#lsMsg');
    const sub = overlay.querySelector('#lsSub');
    if(ring) ring.style.display = 'none';
    if(fail) fail.classList.add('show');
    if(msg){
      msg.classList.remove('ls-msg-pop'); void msg.offsetWidth; msg.classList.add('ls-msg-pop');
      msg.textContent = opts.failedMessage || message || 'Failed';
    }
    if(sub) sub.textContent = opts.failedSub || 'Please check and try again';
  }, opts.loadingMs || 700));
  window._lsTimers.push(setTimeout(()=>{
    if(typeof opts.onComplete === 'function') opts.onComplete();
    overlay.remove();
    window._lsTimers = [];
  }, opts.doneMs || 1700));
}

function money(n){ return '₱' + (n||0).toLocaleString(); }
function printReceipt(ref){
    if(ref && typeof ref !== 'string') ref = null;
    const current = getLastOrder();
    ref = ref || (current||{}).ref;
    let o = (loadJSON(ORDERS_KEY,[])||[]).find(x=>x.ref===ref);
    if(!o){
      if(current && current.ref===ref) o = current;
    }
    if(!o){
      console.error('Order not found for ref:', ref);
      toast('Order not found');
      return;
    }
   const u = getUser();
   if(u && u.role !== 'admin' && o.userEmail && o.userEmail !== u.email){ toast('Access denied'); return; }
    const items = (o.items||[]).map(i=>`<tr><td style="padding:10px 0;border-bottom:1px solid #eee">${esc(i.name)} <span style="color:#7a6a58;font-size:12px">(${esc(i.size||'')})</span></td><td style="padding:10px 0;border-bottom:1px solid #eee;text-align:center">${Number(i.qty)||0}</td><td style="padding:10px 0;border-bottom:1px solid #eee;text-align:right">&#8369;${((Number(i.price)||0)*(Number(i.qty)||0)).toLocaleString()}</td></tr>`).join('');
  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Receipt ${esc(o.ref||'ORDER')} - BobaSip</title>
  <style>
    @page{margin:18mm}
    body{font-family:Georgia,"Times New Roman",serif;color:#2b1a12;margin:0;padding:24px;background:url("${location.origin}/images/printreceipt.png") no-repeat center center fixed;background-size:cover;-webkit-print-color-adjust:exact;print-color-adjust:exact;}
    .wrap{max-width:520px;margin:0 auto;border:none;padding:28px 28px 22px;background:transparent;}
    .head{display:flex;align-items:center;gap:14px;border-bottom:2px solid #2b2118;padding-bottom:14px;margin-bottom:14px}
    .head img{width:54px;height:54px;object-fit:contain}
    .brand h1{font-size:22px;margin:0;letter-spacing:.5px}
    .brand p{margin:2px 0 0;font-family:Arial,sans-serif;font-size:11px;color:#6b5a49;text-transform:uppercase;letter-spacing:1.2px}
    .meta{display:grid;grid-template-columns:1fr 1fr;gap:6px 16px;font-family:Arial,sans-serif;font-size:12px;margin:14px 0 18px}
    .meta b{display:block;font-size:10px;color:#7a6a58;text-transform:uppercase;letter-spacing:1px;margin-bottom:2px}
    table{width:100%;border-collapse:collapse;font-family:Arial,sans-serif;font-size:13px}
    thead th{text-align:left;font-size:10px;text-transform:uppercase;letter-spacing:1px;color:#7a6a58;border-bottom:2px solid #2b2118;padding-bottom:8px}
    .sum{margin-top:14px;border-top:2px solid #2b2118;padding-top:10px;font-family:Arial,sans-serif;font-size:13px}
    .sum .row{display:flex;justify-content:space-between;padding:3px 0}
    .sum .total{font-size:16px;font-weight:bold;border-top:1px dashed #cdbfae;margin-top:6px;padding-top:8px}
    .foot{margin-top:18px;padding-top:12px;border-top:1px solid #e6dccf;text-align:center;font-family:Arial,sans-serif;font-size:11px;color:#6b5a49}
    .actions{margin-top:16px;text-align:center}
    .actions button{font-family:Arial,sans-serif;font-weight:bold;background:#2b2118;color:#fff;border:none;padding:10px 18px;border-radius:6px;cursor:pointer}
    @media print{.actions{display:none}.wrap{border:none;padding:0}}
  </style></head><body>
    <div class="wrap">
      <div class="head">
        <img src="${location.origin}/images/bobasip-logo.png" alt="BobaSip" />
        <div class="brand"><h1>BobaSip</h1><p>Official Sales Receipt</p></div>
      </div>
      <div class="meta">
        <div><b>Receipt No.</b>${esc(o.ref||'—')}</div>
        <div><b>Date & Time</b>${esc(o.date||'')}</div>
        <div><b>Customer</b>${esc(o.userName||o.userEmail||"Customer")}</div>
        <div><b>Status</b>${esc(o.status||"Pending Approval")}</div>
        <div><b>Payment</b>${esc(o.payment||'Card')}</div>
        <div><b>Delivery Address</b>${esc(o.address)}</div>
      </div>
      <table>
        <thead><tr><th>Item</th><th style="text-align:center">Qty</th><th style="text-align:right">Amount</th></tr></thead>
        <tbody>${items}</tbody>
      </table>
      <div class="sum">
        <div class="row"><span>Subtotal</span><span>&#8369;${(Number(o.subtotal)||0).toLocaleString()}</span></div>
        <div class="row"><span>Delivery Fee</span><span>&#8369;${(Number(o.delivery)||0).toLocaleString()}</span></div>
        <div class="row total"><span>Total Paid</span><span>&#8369;${(Number(o.total)||0).toLocaleString()}</span></div>
      </div>
      <div class="foot">Thank you for your order. This serves as your official receipt.</div>
      <div class="actions"><button type="button" onclick="window.print()">Print Receipt</button></div>
    </div>
  </body></html>`;

  const w = window.open('', '_blank');
  if(w){ w.document.write(html); w.document.close(); setTimeout(()=>w.print(), 500); }
}


const THEME_REVEAL_MS = 640;
// Tuned for a fluid circular wipe: fast start, gentle settle.
const THEME_REVEAL_EASE = 'cubic-bezier(0.32, 0.72, 0, 1)';

function applyTheme(theme){
  if(theme==='dark') document.documentElement.classList.add('dark');
  else document.documentElement.classList.remove('dark');
  localStorage.setItem(THEME_KEY, theme);
}

function syncThemeButton(){
  const btn = document.querySelector('#themeToggle');
  if(!btn) return;
  const isDark = document.documentElement.classList.contains('dark');
  btn.innerHTML = isDark ? '<i data-lucide="sun" class="w-4 h-4"></i> Light mode' : '<i data-lucide="moon" class="w-4 h-4"></i> Dark mode';
  if(window.lucide) lucide.createIcons();
}

// Circular reveal theme toggle.
// - Uses the View Transitions API so the real DOM is captured and revealed
//   through a growing circle (no repaint of the whole page per frame).
// - The clip-path is the ONLY thing that animates, and it runs on the
//   compositor, so the wipe stays smooth (60/120fps) on a light page.
function toggleThemeWithReveal(e){
  const docEl = document.documentElement;
  const isDark = docEl.classList.contains('dark');
  const newTheme = isDark ? 'light' : 'dark';

  const px = (e && e.clientX != null) ? e.clientX : window.innerWidth/2;
  const py = (e && e.clientY != null) ? e.clientY : window.innerHeight/2;
  // Radius that covers the farthest corner from the click point.
  const maxR = Math.hypot(Math.max(px, window.innerWidth-px), Math.max(py, window.innerHeight-py));

  let reduced = false;
  try{ reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches; }catch(_){}
  if(reduced){
    applyTheme(newTheme);
    syncThemeButton();
    return;
  }

  // Ignore clicks while a reveal is running so transitions never stack.
  if(docEl._themeBusy) return;
  docEl._themeBusy = true;

  const release = ()=>{
    docEl._themeBusy = false;
  };

  // --- Preferred path: View Transitions + clip-path circle ---
  if(typeof document.startViewTransition === 'function'){
    let vt = null;
    try{
      vt = document.startViewTransition(()=>{
        applyTheme(newTheme);
        syncThemeButton();
      });
    }catch(_){ vt = null; }

    if(vt){
      vt.ready.then(()=>{
        const anim = docEl.animate(
          { clipPath: [`circle(0px at ${px}px ${py}px)`, `circle(${maxR}px at ${px}px ${py}px)`] },
          { duration: THEME_REVEAL_MS, easing: THEME_REVEAL_EASE, fill: 'both', pseudoElement: '::view-transition-new(root)' }
        );
        anim.addEventListener('finish', release);
        anim.addEventListener('cancel', release);
      }).catch(release);
      vt.finished.then(()=>{ release(); syncThemeButton(); }).catch(release);
      return;
    }
    release();
  }

  // --- Fallback: transform-only circle wipe (compositor friendly) ---
  const overlay = document.createElement('div');
  overlay.className = 'theme-circle-overlay';
  overlay.setAttribute('aria-hidden','true');
  overlay.style.left = px + 'px';
  overlay.style.top = py + 'px';
  overlay.style.width = (maxR * 2) + 'px';
  overlay.style.height = (maxR * 2) + 'px';
  overlay.style.background = newTheme === 'dark' ? '#1a1612' : '#faf5ec';
  document.body.appendChild(overlay);
  const anim = overlay.animate(
    { transform: ['scale(0)', 'scale(1)'] },
    { duration: THEME_REVEAL_MS, easing: THEME_REVEAL_EASE, fill: 'forwards' }
  );
  anim.addEventListener('finish', ()=>{
    applyTheme(newTheme);
    syncThemeButton();
    overlay.remove();
    release();
  });
  anim.addEventListener('cancel', ()=>{ overlay.remove(); release(); });
}

function toggleMoreSheet(u){
  const old=document.getElementById('moreSheet'); if(old){ old.remove(); return; }
  const isFil = loadJSON(SETTINGS_KEY, {lang:'English'}).lang === 'Filipino';
  const t = (s)=> isFil ? (I18N[s] || s) : s;
  const links=[['orders.html','receipt','Orders'],['addresses.html','map-pin','Addresses'],['payments.html','credit-card','Payments'],['notifications.html','bell','Notifications'],['settings.html','settings','Settings']];
  if(u&&u.role==='admin') links.push(['admin.html','shield','Admin']);
  const el=document.createElement('div'); el.id='moreSheet'; el.className='fixed inset-0 z-[9999] bg-black/40 flex items-end';
  el.innerHTML=`<div class="w-full bg-white dark:bg-cream-2 rounded-t-2xl p-4" style="padding-bottom:calc(1.5rem + env(safe-area-inset-bottom,0px))"><div class="grid grid-cols-3 gap-3">${links.map(l=>`<a href="${l[0]}" class="flex flex-col items-center gap-1 p-3 rounded-xl bg-brown/10 text-brown font-bold text-xs"><i data-lucide="${l[1]}" class="w-5 h-5"></i>${t(l[2])}</a>`).join('')}</div></div>`;
  el.addEventListener('click',e=>{ if(e.target===el) el.remove(); else if(e.target.closest('a')) setTimeout(()=>el.remove(),0); });
  document.body.appendChild(el); if(window.lucide) lucide.createIcons();
}
function renderNav(active){
  const u = getUser();
  const profileGroup = ['profile','orders','addresses','payments','notifications','settings'];
  document.querySelectorAll('.nav-links a[data-nav]').forEach(a=>{
    a.classList.toggle('active', a.dataset.nav === active);
  });
  document.querySelectorAll('aside nav').forEach(nav=>{
    if(nav.closest('[data-admin-sidebar]')) return;
    let adminLink = nav.querySelector('a[data-nav="admin"]');
    const currentPage = document.body.dataset.page;
    if(u && u.role==='admin' && currentPage !== 'admin'){
      if(!adminLink){
        adminLink = document.createElement('a');
        adminLink.href = 'admin.html';
        adminLink.dataset.nav = 'admin';
        if(nav.classList.contains('menu-nav')){
          adminLink.className = 'menu-nav-link';
          adminLink.innerHTML = '<i data-lucide="shield" class="menu-nav-icon"></i><span>Admin</span>';
        } else {
          adminLink.className = 'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold text-ink-soft hover:bg-brown/10 hover:text-brown transition';
          adminLink.innerHTML = '<i data-lucide="shield" class="w-5 h-5"></i> Admin';
        }
        nav.appendChild(adminLink);
      }
    } else if(adminLink){
      adminLink.remove();
    }
  });
  let navActive = active;
  if(active==='admin') navActive = (location.hash||'#dashboard').replace('#','') || 'dashboard';
  document.querySelectorAll('aside a[data-nav]').forEach(a=>{
    if(a.closest('[data-admin-sidebar]')) return;
    const on = a.dataset.nav === navActive;
    if(a.classList.contains('menu-nav-link')){
      a.classList.toggle('active', on);
      return;
    }
    a.classList.toggle('bg-brown/15', on);
    a.classList.toggle('text-brown', on);
    a.classList.toggle('text-ink-soft', !on);
  });
  const isShell = !!(document.querySelector('body > aside') && document.querySelector('body > main')) && window.innerWidth < 768;
  const uNav = getUser();
  const isAdminNav = !!(uNav && uNav.role==='admin');
  let bottom = document.querySelector('.bottom-nav');
  if(isShell && !isAdminNav){
    const items = [
      {href:'home.html', nav:'home', icon:'home', label:'Home'},
      {href:'menu.html', nav:'menu', icon:'cup-soda', label:'Menu'},
      {href:'cart.html', nav:'cart', icon:'shopping-cart', label:'Cart', badge:true},
      {href:'profile.html', nav:'profile', icon:'user', label:'Profile'},
      {href:'#more', nav:'more', icon:'menu', label:'More'},
    ];
    if(!bottom){
      bottom = document.createElement('nav');
      bottom.className = 'bottom-nav';
      bottom.setAttribute('aria-label','Primary');
      document.body.appendChild(bottom);
    }
      bottom.innerHTML = items.map(it=>{
      const on = it.nav === active || (it.nav==='more' && ['orders','addresses','payments','notifications','settings','admin'].includes(active));
      return `<a href="${it.href}" data-nav="${it.nav}" class="bn-item${on?' active':''}"><span class="bn-icon"><i data-lucide="${it.icon}" class="w-5 h-5"></i>${it.badge?'<span data-cart-badge class="bn-badge hidden">0</span>':''}</span><span class="bn-label" data-i18n="${it.label}">${it.label}</span></a>`;
    }).join('');
    const mb=bottom.querySelector('[data-nav="more"]'); if(mb) mb.addEventListener('click',e=>{ e.preventDefault(); toggleMoreSheet(u); });
  } else if(bottom){
    bottom.remove();
  }
  document.querySelectorAll('[data-user-name-nav]').forEach(e=>e.textContent = u?u.name.split(' ')[0]:'Guest');
  document.querySelectorAll('[data-user-avatar]').forEach(e=>setAvatar(e, u));
  updateCartBadges();
}

const ADMIN_SIDEBAR_CLASS = 'app-sidebar admin-sidebar';
const ADMIN_NAV_ITEMS = [
  {view:'dashboard', icon:'layout-dashboard', label:'Dashboard'},
  {view:'orders', icon:'receipt', label:'Orders'},
  {view:'menu', icon:'package', label:'Menu Management'},
  {view:'customers', icon:'users', label:'Customers'},
  {view:'notifications', icon:'bell', label:'Notifications'},
  {view:'settings', icon:'settings', label:'Settings'}
];

function adminNavActiveKey(page){
  if(page==='menu') return 'menu';
  if(page==='notifications') return 'notifications';
  if(page==='settings') return 'settings';
  if(page==='admin'){
    let v=(location.hash||'#dashboard').replace(/^#/,'').trim();
    if(v==='products') v='menu';
    return ['dashboard','orders','menu','customers','notifications','settings'].includes(v)?v:'dashboard';
  }
  return '';
}

function sidebarProfileHTML(admin){
  const href = admin ? (document.body.dataset.page==='admin' ? '#settings' : 'admin.html#settings') : 'profile.html';
  const sub = admin ? 'Admin settings' : 'View profile';
  return `<a href="${href}" class="sidebar-profile">
      <span data-user-avatar class="w-8 h-8 rounded-full bg-brown text-white flex items-center justify-center font-extrabold text-xs overflow-hidden">G</span>
      <div class="flex-1 min-w-0">
        <div data-user-name-nav class="font-bold text-sm truncate">Guest</div>
        <div class="text-[11px] text-ink-muted font-semibold">${sub}</div>
      </div>
    </a>`;
}

function adminSidebarHTML(active){
  const isAdminPage = document.body.dataset.page==='admin';
  const nav = ADMIN_NAV_ITEMS.map(item=>{
    const key = 'admin-'+item.view;
    const href = isAdminPage ? '#'+item.view : 'admin.html#'+item.view;
    const navAttr = ` data-admin-nav="${item.view}"`;
    const on = item.view===active;
    const badge = item.view==='notifications' ? `<span data-admin-notif-badge class="ml-auto hidden min-w-[20px] h-5 px-1.5 rounded-full bg-red-600 text-white text-[10px] font-extrabold leading-5 text-center">0</span>` : '';
    return `<a href="${href}" data-nav="${key}"${navAttr} class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold ${on?'bg-brown/15 text-brown':'text-ink-soft'} hover:bg-brown/10 hover:text-brown transition"><i data-lucide="${item.icon}" class="w-5 h-5"></i><span class="flex-1">${item.label}</span>${badge}</a>`;
  }).join('');
  return `<a href="welcome.html" class="flex items-center gap-2 font-display font-extrabold text-4xl text-ink mb-6">
      <img src="images/bobasip-logo.png" alt="BobaSip Logo" class="w-16 h-16 object-contain logo-adaptive" />
      <span>Boba<span class="text-accent">Sip</span></span>
    </a>
    <nav class="flex flex-col gap-1 flex-1 overflow-y-auto" aria-label="Admin navigation">${nav}</nav>
    ${sidebarProfileHTML(true)}`;
}

function setAdminSidebarActive(aside, active){
  if(!aside) return;
  aside.querySelectorAll('[data-admin-nav]').forEach(link=>{
    const on = link.dataset.adminNav === active;
    link.classList.toggle('bg-brown/15', on);
    link.classList.toggle('text-brown', on);
    link.classList.toggle('text-ink-soft', !on);
  });
}

function updateAdminSidebarLinks(aside){
  if(!aside) return;
  const page = document.body.dataset.page;
  const isAdminPage = page === 'admin';
  aside.querySelectorAll('[data-admin-nav]').forEach(link=>{
    const item = ADMIN_NAV_ITEMS.find(entry=>entry.view === link.dataset.adminNav);
    if(!item) return;
    link.setAttribute('href', isAdminPage ? '#' + item.view : 'admin.html#' + item.view);
  });
  aside.dataset.adminSidebarPage = page;
  setAdminSidebarActive(aside, adminNavActiveKey(page));
}

function initAdminSidebar(active){
  const aside = document.querySelector('body > aside');
  if(!aside) return;
  const page = document.body.dataset.page;
  document.body.classList.add('user-shell-page','admin-shell-page');
  if(!aside.id) aside.id = 'adminSidebar';
  aside.setAttribute('data-admin-sidebar','');
  aside.className = ADMIN_SIDEBAR_CLASS;
  let currentActive = active || adminNavActiveKey(page);
  if(currentActive==='products') currentActive='menu';
  if(aside.dataset.adminSidebarReady === '1'){
    if(aside.dataset.adminSidebarPage !== page){
      updateAdminSidebarLinks(aside);
    } else {
      setAdminSidebarActive(aside, currentActive);
    }
    initAdminSidebarDrawer();
    try{ updateAdminNotifBadges(); }catch(e){}
    return;
  }
  aside.innerHTML = adminSidebarHTML(currentActive);
  aside.dataset.adminSidebarReady = '1';
  aside.dataset.adminSidebarPage = page;
  const identity = getUser();
  document.querySelectorAll('[data-user-name-nav]').forEach(e=>{ e.textContent = identity ? identity.name.split(' ')[0] : 'Guest'; });
  document.querySelectorAll('[data-user-avatar]').forEach(e=>setAvatar(e, identity));
  initAdminSidebarDrawer();
  if(window.lucide) lucide.createIcons({root: aside});
  try{ updateAdminNotifBadges(); }catch(e){}
}

function closeAdminSidebar(){
  const aside = document.querySelector('body > aside[data-admin-sidebar]');
  if(!aside) return;
  aside.classList.remove('admin-open');
  const toggle = document.querySelector('[data-admin-sidebar-toggle]');
  if(toggle) toggle.setAttribute('aria-expanded', 'false');
  const backdrop = document.getElementById('adminSidebarBackdrop');
  if(backdrop) backdrop.classList.add('hidden');
}

function ensureAdminSidebarBackdrop(){
  let backdrop = document.getElementById('adminSidebarBackdrop');
  if(backdrop && backdrop.parentElement === document.body) return backdrop;
  if(backdrop) backdrop.remove();
  backdrop = document.createElement('div');
  backdrop.id = 'adminSidebarBackdrop';
  backdrop.className = 'admin-sidebar-backdrop hidden';
  backdrop.setAttribute('aria-hidden','true');
  document.body.appendChild(backdrop);
  return backdrop;
}

function initAdminSidebarDrawer(){
  if(window._adminDrawerGlobalBound) return;
  window._adminDrawerGlobalBound = true;
  window.addEventListener('resize',()=>{ if(window.innerWidth >= 768) closeAdminSidebar(); }, {passive:true});
  document.addEventListener('keydown',(e)=>{ if(e.key==='Escape') closeAdminSidebar(); });
  document.addEventListener('click',(e)=>{
    const toggle = e.target && e.target.closest ? e.target.closest('[data-admin-sidebar-toggle]') : null;
    const aside = document.querySelector('body > aside[data-admin-sidebar]');
    if(toggle && aside){
      e.preventDefault();
      const backdrop = ensureAdminSidebarBackdrop();
      const open = !aside.classList.contains('admin-open');
      aside.classList.toggle('admin-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      backdrop.classList.toggle('hidden', !open);
      return;
    }
    const backdrop = e.target && e.target.closest ? e.target.closest('#adminSidebarBackdrop') : null;
    if(backdrop){
      closeAdminSidebar();
      return;
    }
    const link = e.target && e.target.closest ? e.target.closest('aside[data-admin-sidebar] a') : null;
    if(link) closeAdminSidebar();
  });
}

async function initPage(page){
  let u = getUser();
  try{ if(typeof initSupabaseAuthListener==='function') initSupabaseAuthListener(); }catch(e){}
  try{ if(typeof isSupabaseEnabled==='function' && isSupabaseEnabled()){ u = await syncLocalUserFromSupabase() || getUser(); } }catch(e){ console.warn('Supabase session sync failed', e); }
  if(!PUBLIC_PAGES.includes(page) && !u){ setTimeout(()=>navigateTo('login'),0); return; }
  // Role-based route protection (DB-backed profile role when Supabase session active)
  const customerPages = ['home','menu','cart','checkout','confirmation','track','orders','addresses','payments','profile'];
  if(u){
    if(u.role==='admin' && customerPages.includes(page) && page!=='menu'){ setTimeout(()=>navigateTo('admin'),0); return; }
    if(u.role!=='admin' && page==='admin'){ setTimeout(()=>navigateTo('home'),0); return; }
  }
  renderNav(page);
  if(page==='home') initHome();
  if(page==='menu') initMenu();
  if(page==='cart') initCart();
  if(page==='checkout') initCheckout();
  if(page==='confirmation') initConfirmation();
  if(page==='track') initTrack();
  if(page==='profile') initProfile();
  if(page==='orders') initOrders();
  if(page==='addresses') initAddresses();
  if(page==='payments') initPayments();
  if(page==='notifications') initNotifications();
  if(page==='settings') initSettings();
  try{ if(u && u.role==='admin') initAdminNotificationCenter(); }catch(e){}
  try{ if(u && u.role!=='admin' && typeof initCustomerRealtime==='function') initCustomerRealtime(); }catch(e){}
  if(page==='signup') initSignup();
  if(page==='login') initLogin();
  if(page==='forgot') initForgot();
  if(page==='admin') initAdmin();
  if(window.lucide) lucide.createIcons();
}

// Time-of-day greeting. Uses the visitor's local clock so it always
// matches their actual time of day.
function greetingFor(date){
  const h = (date || new Date()).getHours();
  if(h < 12) return 'Good morning';
  if(h < 18) return 'Good afternoon';
  return 'Good evening';
}

// Home banner content that follows the same time buckets as the greeting.
const BANNER_CONTENT = {
  'Good morning':  { title:'SLOW MORNING',   text:'A fresh start in a cup. Brightly brewed, softly served.' },
  'Good afternoon':{ title:'SLOW AFTERNOON', text:'A little pause, in a cup. Freshly steeped. Quietly crafted.' },
  'Good evening':  { title:'SLOW EVENING',   text:'A quiet moment to end the day. Warmly brewed, gently shared.' },
};

function initHome(){
  const u = getUser();
  const nameEl = document.querySelector('[data-greet-name]');
  if(nameEl) nameEl.textContent = u ? u.name.split(' ')[0] : 'Guest';
  const greetEl = document.querySelector('[data-greet-text]');
  if(greetEl){
    greetEl.dataset.i18nEn = greetingFor();
    greetEl.textContent = greetEl.dataset.i18nEn;
  }
  applyBanner();
  document.querySelectorAll('[data-add]').forEach(btn=>{
    btn.addEventListener('click', ()=>openAddModal(btn.dataset.add));
  });
}

// Write the banner for the current time bucket.
function applyBanner(){
  const titleEl = document.querySelector('[data-banner-title]');
  const textEl  = document.querySelector('[data-banner-text]');
  if(!titleEl && !textEl) return;
  const key = greetingFor();
  const c = BANNER_CONTENT[key];
  if(!c) return;
  if(titleEl) titleEl.textContent = c.title;
  if(textEl)  textEl.textContent  = c.text;
}

function isAdminUser(){ const u=getUser(); return !!(u && u.role==='admin'); }

function sortMenuProducts(products, sort){
  const list = products.slice();
  const byName = (a,b)=>String(a.name||'').localeCompare(String(b.name||''), undefined, {sensitivity:'base'});
  if(sort==='name-asc') list.sort(byName);
  else if(sort==='name-desc') list.sort((a,b)=>byName(b,a));
  else if(sort==='price-asc') list.sort((a,b)=>(Number(a.mediumPrice)||0)-(Number(b.mediumPrice)||0));
  else if(sort==='price-desc') list.sort((a,b)=>(Number(b.mediumPrice)||0)-(Number(a.mediumPrice)||0));
  return list;
}

function menuActionButtons(p, admin){
  return admin
    ? `<button type="button" data-edit-product="${esc(p.id)}" class="menu-action-btn menu-edit-btn">Edit</button>
        <button type="button" data-del-product="${esc(p.id)}" class="menu-action-btn menu-delete-btn">Delete</button>`
    : `<button type="button" data-add="${esc(p.id)}" class="add menu-action-btn menu-add-btn">Add to cart</button>`;
}

function menuProductCard(p, admin){
  const cat = p.cat || p.desc || 'Uncategorized';
  const medium = p.mediumPrice != null ? `₱${esc(p.mediumPrice)}` : '—';
  const large = p.largePrice != null ? `₱${esc(p.largePrice)}` : '—';
  return `<article class="product menu-card" data-cat="${esc(cat)}" data-id="${esc(p.id)}">
    <div class="menu-card-image">
      <img src="${esc(p.image||PRODUCT_IMAGE_FALLBACK)}" alt="${esc(p.name||'Product')}" loading="lazy" decoding="async" />
    </div>
    <div class="menu-card-info">
      <h3 class="menu-card-name">${esc(p.name||'')}</h3>
      <div class="menu-card-cat">${esc(cat)}</div>
      <div class="menu-card-price"><span>M ${medium}</span><span class="menu-price-sep">·</span><span>L ${large}</span></div>
    </div>
    <div class="menu-card-actions">
      ${menuActionButtons(p, admin)}
    </div>
  </article>`;
}

function renderMenuGrid(){
  const grid = document.getElementById('menuGrid');
  if(!grid) return;
  const admin = isAdminUser();
  document.body.dataset.menuRole = admin ? 'admin' : 'user';
  const q = (document.querySelector('#menuSearch')?.value||'').trim().toLowerCase();
  const cat = grid.dataset.activeCat || 'All';
  const sort = document.querySelector('#menuSort')?.value || 'default';
  let products = Object.values(getAllProducts());
  if(cat !== 'All') products = products.filter(p=>(p.cat || p.desc)===cat);
  if(q) products = products.filter(p=>String(p.name||'').toLowerCase().includes(q));
  products = sortMenuProducts(products, sort);
  const note = document.querySelector('#menuAdminNote');
  if(note){ note.classList.toggle('hidden', !admin); note.classList.toggle('inline-flex', admin); }
  const empty = document.querySelector('#menuNoResults');
  if(!products.length){
    grid.innerHTML = '';
    if(empty) empty.classList.remove('hidden');
  } else {
    if(empty) empty.classList.add('hidden');
    grid.innerHTML = products.map(p=>menuProductCard(p, admin)).join('');
  }
  if(window.lucide) lucide.createIcons();
}

function openProductEditModal(id){
  if(!isAdminUser()){ toast('Admin access required'); return; }
  const p = getProduct(id);
  if(!p){ toast('Product not found'); return; }
  const old = document.querySelector('#editProductModal'); if(old) old.remove();
  const catOptions = PRODUCT_CATEGORIES.map(c=>`<option value="${esc(c)}"${c===(p.cat||p.desc)?' selected':''}>${esc(c)}</option>`).join('');
  const modal = document.createElement('div');
  modal.id = 'editProductModal';
  modal.className = 'fixed inset-0 z-[75] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4';
  modal.innerHTML = `
    <div class="w-full max-w-lg bg-white dark:bg-cream-2 border-2 border-brown/20 rounded-2xl p-5 sm:p-6 shadow-soft max-h-[90vh] overflow-y-auto">
      <div class="flex items-start justify-between gap-3 mb-4">
        <div>
          <h2 class="font-display text-xl font-extrabold">Edit Product</h2>
          <p class="text-ink-muted font-semibold text-xs mt-1">Update the details shown on the customer menu.</p>
        </div>
        <button type="button" data-edit-close class="w-9 h-9 rounded-full bg-brown/10 text-brown font-extrabold hover:bg-brown/20 transition" aria-label="Close">✕</button>
      </div>
      <form id="editProductForm" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="sm:col-span-2">
          <label for="editProdName" class="block text-xs font-extrabold tracking-wide text-ink-soft mb-1">PRODUCT NAME</label>
          <input id="editProdName" type="text" value="${esc(p.name||'')}" class="w-full px-4 py-2.5 rounded-xl border border-ink/15 bg-white dark:bg-cream-2 text-ink font-semibold text-sm" required />
        </div>
        <div>
          <label for="editProdCategory" class="block text-xs font-extrabold tracking-wide text-ink-soft mb-1">CATEGORY</label>
          <select id="editProdCategory" class="w-full px-4 py-2.5 rounded-xl border border-ink/15 bg-white dark:bg-cream-2 text-ink font-semibold text-sm">${catOptions}</select>
        </div>
        <div>
          <label for="editProdMedium" class="block text-xs font-extrabold tracking-wide text-ink-soft mb-1">MEDIUM PRICE (₱)</label>
          <input id="editProdMedium" type="number" min="1" step="1" value="${esc(p.mediumPrice!=null?p.mediumPrice:'')}" class="w-full px-4 py-2.5 rounded-xl border border-ink/15 bg-white dark:bg-cream-2 text-ink font-semibold text-sm" required />
        </div>
        <div>
          <label for="editProdLarge" class="block text-xs font-extrabold tracking-wide text-ink-soft mb-1">LARGE PRICE (₱)</label>
          <input id="editProdLarge" type="number" min="1" step="1" value="${esc(p.largePrice!=null?p.largePrice:'')}" class="w-full px-4 py-2.5 rounded-xl border border-ink/15 bg-white dark:bg-cream-2 text-ink font-semibold text-sm" required />
        </div>
        <div class="sm:col-span-2">
          <label for="editProdImage" class="block text-xs font-extrabold tracking-wide text-ink-soft mb-1">IMAGE</label>
          <div class="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
            <input id="editProdImage" type="text" value="${esc(p.image||'')}" placeholder="images/milktea.png or https://..." class="flex-1 px-4 py-2.5 rounded-xl border border-ink/15 bg-white dark:bg-cream-2 text-ink font-semibold text-sm" />
            <input id="editProdImageFile" type="file" accept="image/*" class="hidden" />
            <button type="button" id="editProdImageBtn" class="px-4 py-2.5 rounded-xl bg-brown/10 text-brown font-extrabold text-sm hover:bg-brown/20 transition whitespace-nowrap">Attach image</button>
            <button type="button" id="editProdImageClear" class="px-4 py-2.5 rounded-xl bg-red-50 text-red-600 font-extrabold text-sm hover:bg-red-100 transition whitespace-nowrap">Clear</button>
          </div>
          <div class="mt-2 flex items-center gap-3">
            <img id="editProdPreview" src="${esc(p.image||PRODUCT_IMAGE_FALLBACK)}" alt="Preview" class="w-14 h-14 rounded-lg object-contain border border-ink/10 bg-cream-2 p-1" />
            <div class="text-xs font-semibold text-ink-muted">JPG, PNG, or WEBP · max 300 KB</div>
          </div>
        </div>
        <div class="sm:col-span-2 flex justify-end gap-3 pt-2">
          <button type="button" data-edit-close class="px-5 py-2.5 rounded-xl bg-brown/8 text-brown font-extrabold text-sm hover:bg-brown/15 transition">Cancel</button>
          <button type="submit" class="px-5 py-2.5 rounded-xl bg-gradient-to-br from-accent to-brown text-white font-extrabold text-sm shadow-soft hover:brightness-105 transition">Save Changes</button>
        </div>
      </form>
    </div>`;
  document.body.appendChild(modal);
  if(window.lucide) lucide.createIcons();
  const onKey = (e)=>{ if(e.key==='Escape') close(); };
  function close(){ document.removeEventListener('keydown', onKey); modal.remove(); }
  document.addEventListener('keydown', onKey);
  modal.querySelectorAll('[data-edit-close]').forEach(b=>b.addEventListener('click', close));
  modal.addEventListener('click', (e)=>{ if(e.target===modal) close(); });
  const form = modal.querySelector('#editProductForm');
  const imgInput = modal.querySelector('#editProdImage');
  const fileInput = modal.querySelector('#editProdImageFile');
  const preview = modal.querySelector('#editProdPreview');
  const attachBtn = modal.querySelector('#editProdImageBtn');
  const clearBtn = modal.querySelector('#editProdImageClear');
  const setPreview = (src)=>{ if(preview) preview.src = src || PRODUCT_IMAGE_FALLBACK; };
  if(attachBtn && fileInput) attachBtn.addEventListener('click', ()=>fileInput.click());
  if(fileInput){
    fileInput.addEventListener('change', (e)=>{
      const file = e.target.files && e.target.files[0];
      if(!file) return;
      if(file.size>300*1024){ toast('Image too large (max 300 KB)'); e.target.value=''; return; }
      const reader = new FileReader();
      reader.onload = (ev)=>{ const dataUrl = ev.target.result; if(imgInput) imgInput.value = dataUrl; setPreview(dataUrl); };
      reader.readAsDataURL(file);
    });
  }
  if(imgInput) imgInput.addEventListener('input', ()=>setPreview(imgInput.value.trim()));
  if(clearBtn) clearBtn.addEventListener('click', ()=>{ if(imgInput) imgInput.value=''; if(fileInput) fileInput.value=''; setPreview(''); });
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(document.querySelector('.ls-overlay')) return;
    const submitBtn = form.querySelector('button[type="submit"]');
    if(submitBtn) submitBtn.disabled = true;
    try{
      const name = (form.querySelector('#editProdName')?.value||'').trim();
    const cat = (form.querySelector('#editProdCategory')?.value||'Milk Tea').trim();
    const mediumPrice = parseInt(form.querySelector('#editProdMedium')?.value||'0', 10);
    const largePrice = parseInt(form.querySelector('#editProdLarge')?.value||'0', 10);
    const image = (form.querySelector('#editProdImage')?.value||'').trim();
    if(!name){ toast('Please enter a product name'); return; }
    if(!(mediumPrice>0) || !(largePrice>0)){ toast('Please enter valid prices'); return; }
    const custom = getCustomProducts();
    const base = custom[id] || PRODUCTS[id] || p;
    custom[id] = Object.assign({}, base, {id, name, cat, desc:cat, mediumPrice, largePrice, image:image||PRODUCT_IMAGE_FALLBACK});
    saveCustomProducts(custom);
    close();
    renderMenuGrid();
    toast('Product updated');
    } finally {
      if(submitBtn) submitBtn.disabled = false;
    }
  });
  setTimeout(()=>{ const nameEl = modal.querySelector('#editProdName'); if(nameEl) nameEl.focus(); }, 0);
}

function deleteMenuProduct(id){
  if(!isAdminUser()){ toast('Admin access required'); return; }
  const p = getProduct(id);
  if(!p){ toast('Product not found'); return; }
  showConfirm({
    title:'Delete product?',
    message:`Delete "${p.name||'this product'}"? This removes it from the menu.`,
    confirmText:'Delete',
    danger:true,
    onConfirm:()=>{
      const custom = getCustomProducts();
      delete custom[id];
      saveCustomProducts(custom);
      const hidden = getHidden().filter(x=>x!==id);
      if(PRODUCTS[id]) hidden.push(id);
      saveJSON(HIDDEN_KEY, hidden);
      try{
        const cartKeys = [];
        for(let i=0;i<localStorage.length;i++){
          const k = localStorage.key(i);
          if(k && (k==='bobasip_cart' || k.indexOf('bobasip_cart:')===0)) cartKeys.push(k);
        }
        cartKeys.forEach(k=>{
          const cart = loadJSON(k, []);
          if(!Array.isArray(cart)) return;
          const next = cart.filter(i=>i.id!==id);
          if(next.length!==cart.length) saveJSON(k, next);
        });
      }catch(e){}
      try{ updateCartBadges(); }catch(e){}
      renderMenuGrid();
      toast('Product deleted');
    }
  });
}

function initMenu(){
  const grid = document.getElementById('menuGrid');
  if(!grid) return;
  if(isAdminUser()) initAdminSidebar('menu');
  const chips = Array.from(document.querySelectorAll('.chip[data-cat]'));
  let activeCat = grid.dataset.activeCat || 'All';
  function syncChips(){
    chips.forEach(ch=>{
      const on = ch.dataset.cat===activeCat;
      ch.classList.toggle('active', on);
      ch.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }
  chips.forEach(c=>{
    if(c._menuBound) return;
    c._menuBound = true;
    c.addEventListener('click', ()=>{ activeCat = c.dataset.cat; grid.dataset.activeCat = activeCat; syncChips(); renderMenuGrid(); });
  });
  grid.dataset.activeCat = activeCat;
  syncChips();
  renderMenuGrid();
  const search = document.querySelector('#menuSearch');
  if(search && !search._menuBound){ search._menuBound=true; search.addEventListener('input', renderMenuGrid); }
  const sort = document.querySelector('#menuSort');
  if(sort && !sort._menuBound){ sort._menuBound=true; sort.addEventListener('change', renderMenuGrid); }
  if(!grid._menuActionsBound){
    grid._menuActionsBound = true;
    grid.addEventListener('click', (e)=>{
      const admin = isAdminUser();
      const add = e.target.closest('[data-add]');
      if(add){
        if(admin){ toast('Admin users manage products from the menu'); return; }
        openAddModal(add.dataset.add);
        return;
      }
      const edit = e.target.closest('[data-edit-product]');
      if(edit){
        if(!admin){ toast('Admin access required'); return; }
        openProductEditModal(edit.dataset.editProduct);
        return;
      }
      const del = e.target.closest('[data-del-product]');
      if(del){
        if(!admin){ toast('Admin access required'); return; }
        deleteMenuProduct(del.dataset.delProduct);
        return;
      }
    });
  }
  const params = new URLSearchParams(window.location.search);
  const q = params.get('q');
  if(q && search){ search.value=q; renderMenuGrid(); }
}

function initCart(){
  const u=getUser(); if(u && u.role==='admin'){ navigateTo('admin'); return; }
  const list = document.querySelector('#cartList');
  const empty = document.querySelector('#cartEmpty');
  function render(){
    try {
    const cart = getCart();
    if(!cart.length){ list.innerHTML=''; empty.classList.remove('hidden'); updateTotals(); if(window.lucide) lucide.createIcons(); return; }
    empty.classList.add('hidden');
    list.innerHTML = cart.map(it=>`
      <div class="flex items-center gap-3 p-3.5 bg-white/70 backdrop-blur border border-white/60 rounded-2xl shadow-card">
        <div class="w-11 h-11 rounded-xl bg-cream-2 flex items-center justify-center flex-shrink-0 overflow-hidden">${itemThumb(it)}</div>
        <div class="flex-1 min-w-[160px]">
          <div class="font-bold text-base">${esc(it.name)}${it.size?' · '+it.size:''}</div>
          <div class="text-xs text-ink-muted font-semibold">${money(it.price)} each</div>${it.sugar?`<div class="text-xs text-ink-muted font-semibold">Sugar ${esc(it.sugar)}${(it.addons&&it.addons.length)?' · '+it.addons.map(a=>esc(a.name)).join(', '):''}</div>`:''}
        </div>
        <div class="flex items-center gap-1.5">
          <button type="button" data-dec="${esc(lineKey(it))}" class="w-8 h-8 rounded-lg bg-brown/10 text-brown font-extrabold text-base hover:bg-brown hover:text-white transition">−</button>
          <span class="min-w-[24px] text-center font-extrabold">${it.qty}</span>
          <button type="button" data-inc="${esc(lineKey(it))}" class="w-8 h-8 rounded-lg bg-brown/10 text-brown font-extrabold text-base hover:bg-brown hover:text-white transition">+</button>
        </div>
        <button type="button" data-rm="${esc(lineKey(it))}" class="px-2.5 py-1.5 rounded-lg bg-red-50 text-red-600 font-bold text-xs hover:bg-red-100 transition">Remove</button>
      </div>
    `).join('');
    list.querySelectorAll('[data-inc]').forEach(b=>b.addEventListener('click',()=>{const it=getCart().find(x=>lineKey(x)===b.dataset.inc); if(it){setQty(lineKey(it),it.qty+1);render();}}));
    list.querySelectorAll('[data-dec]').forEach(b=>b.addEventListener('click',()=>{const it=getCart().find(x=>lineKey(x)===b.dataset.dec); if(it && it.qty>1){setQty(lineKey(it),it.qty-1);render();}}));
    list.querySelectorAll('[data-rm]').forEach(b=>b.addEventListener('click',()=>{ if(document.querySelector('.ls-overlay')) return; removeFromCart(b.dataset.rm); render(); showLoadingSuccess('Removed', null, {loadingMessage:'Removing item…', successMessage:'Item removed'}); }));
    updateTotals();
    if(window.lucide) lucide.createIcons();
    } catch(err){ console.error('render error', err); if(list) list.innerHTML = '<div class="text-red-600 font-bold">Error: '+err.message+'</div>'; }
  }

  function updateTotals(){
    const sub = cartSubtotal();
    const del = sub>0 ? 40 : 0;
    const tot = sub+del;
    document.querySelectorAll('[data-subtotal]').forEach(e=>e.textContent=money(sub));
    document.querySelectorAll('[data-delivery]').forEach(e=>e.textContent=money(del));
    document.querySelectorAll('[data-total]').forEach(e=>e.textContent=money(tot));
    const btn = document.querySelector('#checkoutBtn');
    if(btn) btn.classList.toggle('pointer-events-none', sub===0);
    if(btn) btn.classList.toggle('opacity-50', sub===0);
  }
  render();
}

function initCheckout(){
  const u=getUser(); if(u && u.role==='admin'){ navigateTo('admin'); return; }
  const addrInp=document.querySelector('#address'); if(addrInp){ addrInp.value = localStorage.getItem(selectedAddrKey()) || (loadJSON(addrKey(),[]).find(a=>a.def)||{}).value || ''; }
  const sub = cartSubtotal();
  const del = sub>0?40:0;
  const tot = sub+del;
  document.querySelectorAll('[data-subtotal]').forEach(e=>e.textContent=money(sub));
  document.querySelectorAll('[data-delivery]').forEach(e=>e.textContent=money(del));
  document.querySelectorAll('[data-total]').forEach(e=>e.textContent=money(tot));
  const ol = document.querySelector('#orderLines');
  if(ol){
    const cart = getCart();
    if(!cart.length){ ol.innerHTML = '<div class="text-ink-muted font-semibold text-sm">No items in cart yet.</div>'; }
    else { ol.innerHTML = cart.map(it=>`<div class="flex items-center justify-between font-semibold text-sm text-ink-soft"><span class="inline-flex items-center gap-2"><span class="w-9 h-9 rounded-lg overflow-hidden bg-cream-2 flex items-center justify-center flex-shrink-0">${itemThumb(it)}</span>${esc(it.name)} × ${it.qty}</span><b class="text-ink">${money(it.price*it.qty)}</b></div>`).join(''); }
  }

  const paymentHost = document.querySelector('#paymentOptions');
  if(paymentHost && !paymentHost.dataset.rendered){
    let pays = loadJSON(PAYS_KEY, null);
    if(!Array.isArray(pays) || !pays.length) pays = DEFAULT_PAYS;
    const selected = pays.find(p=>p.def) || pays[0];
    paymentHost.innerHTML = pays.map((p,index)=>{
      const icon = p.type === 'gcash' ? 'smartphone' : p.type === 'cash' ? 'banknote' : 'credit-card';
      const active = p === selected;
      return `<button type="button" class="pay-opt ${active?'active':''} cursor-pointer px-3 py-3.5 rounded-xl border-2 ${active?'border-accent bg-accent/10 text-accent':'border-ink/10 bg-white text-ink'} text-center font-extrabold text-sm transition" data-pay="${esc(p.label)}"><i data-lucide="${icon}" class="w-5 h-5 mx-auto mb-1"></i><span class="block truncate">${esc(p.label)}</span></button>`;
    }).join('');
    paymentHost.dataset.rendered = '1';
    const hidden = document.querySelector('#payMethod'); if(hidden) hidden.value = selected.label;
  }
  document.querySelectorAll('.pay-opt').forEach(opt=>{
    opt.addEventListener('click', ()=>{
      document.querySelectorAll('.pay-opt').forEach(o=>{
        o.classList.remove('active');
        o.classList.remove('border-accent','bg-accent/10','text-accent');
        o.classList.add('border-ink/10','bg-white','text-ink');
      });
      opt.classList.add('active');
      opt.classList.remove('border-ink/10','bg-white','text-ink');
      opt.classList.add('border-accent','bg-accent/10','text-accent');
      const h = document.querySelector('#payMethod'); if(h) h.value = opt.dataset.pay;
    });
  });
  const form = document.querySelector('#checkoutForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      if(document.querySelector('.ls-overlay')) return;
      const cart = getCart();
      if(!cart.length){
        showLoadingFailed('Empty cart', {loadingMessage:'Placing order…', loadingSub:'Checking cart…', failedMessage:'Empty cart', failedSub:'Add items to cart before checking out'});
        return;
      }
      const addr = ((document.querySelector('#address')||{}).value||'').trim();
      if(!addr){
        showLoadingFailed('Missing address', {loadingMessage:'Placing order…', loadingSub:'Checking details…', failedMessage:'Missing address', failedSub:'Please enter a delivery address'});
        return;
      }
      const submitBtn = form.querySelector('button[type="submit"]');
      if(submitBtn){ submitBtn.disabled = true; }
      const u=getUser()||{};
      const ordersBefore = loadJSON(ORDERS_KEY, []);
      let ref = 'BS' + Math.floor(100000 + Math.random()*900000);
      for(let i=0;i<1000;i++){
        if(!ordersBefore.find(o=>o.ref===ref)) break;
        ref = 'BS' + Math.floor(100000 + Math.random()*900000);
      }
      const order = {
        ref,
        items: cart.map(it=>({id:it.id,name:it.name,price:Number(it.price)||0,icon:it.icon,image:it.image,size:it.size,qty:Number(it.qty)||1,sugar:it.sugar,addons:it.addons||[]})),
        subtotal: sub, delivery: del, total: tot,
        payment: (document.querySelector('#payMethod')||{}).value || 'Card',
        address: addr,
        date: new Date().toLocaleString(), createdAt: Date.now(), status: 'Pending Approval',
        statusUpdatedAt: Date.now(),
        userId: u.id || u.email || '', userEmail: u.email, userName: u.name,
        customer: { id: u.id || u.email || '', email: u.email||'', name: u.name||'Customer' },
      };
      const calcSub = order.items.reduce((s,i)=>s+(i.price||0)*(i.qty||0),0);
      const calcDel = calcSub>0?40:0;
      const calcTot = calcSub+calcDel;
      order.subtotal = calcSub; order.delivery = calcDel; order.total = calcTot;
      try{
        const nextOrders = [order].concat(ordersBefore);
        localStorage.setItem(ORDERS_KEY, JSON.stringify(nextOrders));
        saveLastOrder(order);
      }catch(e){
        console.error('Failed to save order', e);
        if(submitBtn) submitBtn.disabled=false;
        toast('We could not save your order. Please try again.');
        return;
      }
      clearCart();
      notifyOrderUpdate(order, {title:'Order submitted', msg:`Your order ${order.ref} has been submitted and is waiting for admin approval.`, ref:order.ref}, {eventKey:'order-submitted:'+order.ref});
      notifyAdminOrder(order, {title:'New order received', msg:`${order.userName||order.userEmail||'A customer'} placed order ${order.ref} (${money(order.total||0)}).`, ref:order.ref}, {eventKey:'admin-order-submitted:'+order.ref});
      showLoadingSuccess('Order placed', 'confirmation', {loadingMessage:'Placing order…', successMessage:'Order placed'});
    });
  }
}

function initConfirmation(){
  const u = getUser();
  if(u && u.role==='admin'){ navigateTo('admin'); return; }
  const o = getLastOrder();
  if(!o){ console.error('No order available for confirmation'); return; }
  const refEl = document.querySelector('[data-ref]');
  if(refEl) refEl.textContent = o.ref;
  const totEl = document.querySelector('[data-total]');
  if(totEl) totEl.textContent = money(o.total);
  const subEl = document.querySelector('[data-subtotal]');
  if(subEl) subEl.textContent = money(o.subtotal);
  const delEl = document.querySelector('[data-delivery]');
  if(delEl) delEl.textContent = money(o.delivery);
  const payEl = document.querySelector('[data-payment]');
  if(payEl) payEl.textContent = o.payment||'Card';
  const addrEl = document.querySelector('[data-address]');
  if(addrEl) addrEl.textContent = o.address||'-';
  const dateEl = document.querySelector('[data-date]');
  if(dateEl) dateEl.textContent = o.date||'';
  const statusEl = document.querySelector('[data-status]');
  if(statusEl){ statusEl.textContent = o.status||'Pending Approval'; statusEl.className = 'inline-flex px-2.5 py-1 rounded-full text-[11px] font-extrabold ' + statusColor(o.status); }
  const itemsEl = document.querySelector('[data-items]');
  if(itemsEl){
    itemsEl.innerHTML = (o.items||[]).map(it=>`<div class="flex items-center justify-between text-sm font-semibold text-ink-soft"><span class="inline-flex items-center gap-2"><span class="w-9 h-9 rounded-lg overflow-hidden bg-cream-2 flex items-center justify-center flex-shrink-0">${itemThumb(it)}</span>${esc(it.name)} × ${it.qty}${it.size?' · '+it.size:''}</span><b class="text-ink">${money(it.price*it.qty)}</b></div>`).join('');
  }
}

// ===== Track order simulation =====
// Orders advance on their own so the customer sees a live progress bar
// instead of a frozen timeline. Each stage lasts a fixed time; the admin
// can still override a status manually at any point.
const SIM_STAGES = [
  { status:'Pending',           label:'Order received',       ms: 45 * 1000 },
  { status:'Preparing',         label:'Preparing your drinks', ms: 60 * 1000 },
  { status:'Out for delivery',  label:'Out for delivery',      ms: 75 * 1000 },
  { status:'Delivered',         label:'Delivered',              ms: Infinity  },
];
const SIM_ORDER = ['Pending','Preparing','Out for delivery','Delivered'];

// Stage index for a status name.
function simIndexOf(status){
  const i = SIM_ORDER.indexOf(status);
  return i < 0 ? 0 : i;
}

// How long an order has been in its current stage (ms), using simSince.
function simElapsed(order, now){
  if(!order) return 0;
  const since = order.simSince || order.createdAt || now;
  return Math.max(0, now - since);
}

// Advance an order to the next stage if enough time has passed.
// Returns the new status when it changed, otherwise null.
function simAdvance(order, now){
  if(!order) return null;
  const status = order.status || 'Pending';
  if(status === 'Cancelled' || status === 'Delivered') return null;
  const idx = simIndexOf(status);
  const stage = SIM_STAGES[idx];
  if(!stage || stage.ms === Infinity) return null;
  if(simElapsed(order, now) < stage.ms) return null;
  const next = SIM_ORDER[idx + 1];
  if(!next) return null;
  order.status = next;
  order.simSince = now;
  return next;
}

// Push a simulation update to every stored order.
function simRunAll(now){
  const t = now || Date.now();
  let changed = false;
  const orders = loadJSON(ORDERS_KEY, []);
  if(orders.length){
    orders.forEach(o=>{
      const before = o.status;
      const next = simAdvance(o, t);
      if(next && next !== before) changed = true;
    });
    if(changed) saveJSON(ORDERS_KEY, orders);
  }
  return changed;
}

const TRACK_STEPS = ['Pending Approval','Accepted','Preparing','Out for Delivery','Delivered'];
function initTrack(){
  const u=getUser(); if(u && u.role==='admin'){ navigateTo('admin'); return; }
  try{ if(typeof syncOrdersFromSupabase==='function') syncOrdersFromSupabase(()=>{ try{ render(); }catch(e){} }); }catch(e){}
  const last=getLastOrder();
  const uu=u||{};
  if(last && last.userEmail && uu.role!=='admin' && last.userEmail!==uu.email && typeof isSupabaseEnabled==='function' && !isSupabaseEnabled()){ toast('Access denied'); navigateTo('orders'); return; }
  const cur=()=>{
    const l=getLastOrder();
    if(!l) return {};
    if(l.userEmail && uu.role!=='admin' && l.userEmail!==uu.email) return {};
    const fresh=loadJSON(ORDERS_KEY,[]).find(x=>x.ref===l.ref);
    if(fresh){
      if(uu.role!=='admin' && fresh.userEmail && fresh.userEmail!==uu.email) return {};
      return fresh;
    }
    return l;
  };
  const steps = Array.from(document.querySelectorAll('.timeline .tl-step'));
  const IDX={'Pending Approval':0,'Accepted':1,'Preparing':2,'Out for Delivery':3,'Delivered':4};
  function render(){
    const o = cur();
    const refEl = document.querySelector('[data-ref]'); if(refEl) refEl.textContent = o.ref||'—';
    const totEl = document.querySelector('[data-total]'); if(totEl) totEl.textContent = money(o.total||0);
    const subEl = document.querySelector('[data-subtotal]'); if(subEl) subEl.textContent = money(o.subtotal||0);
    const delEl = document.querySelector('[data-delivery]'); if(delEl) delEl.textContent = money(o.delivery||0);
    const payEl = document.querySelector('[data-payment]'); if(payEl) payEl.textContent = o.payment||'—';
    const addrEl = document.querySelector('[data-address]'); if(addrEl) addrEl.textContent = o.address||'—';
    const dateEl = document.querySelector('[data-date]'); if(dateEl) dateEl.textContent = o.date||'';
    const statusEl = document.querySelector('[data-status]'); if(statusEl){ statusEl.textContent = o.status||'Pending Approval'; statusEl.className='inline-flex px-2.5 py-1 rounded-full text-[11px] font-extrabold '+statusColor(o.status); }
    const updEl = document.querySelector('[data-updated]'); if(updEl) updEl.textContent = o.statusUpdatedAt ? new Date(o.statusUpdatedAt).toLocaleString() : (o.date||'');
    const msgEl = document.querySelector('[data-status-msg]');
    const st = o.status||'Pending Approval';
    const msgs = {
      'Pending Approval':'Your order is waiting for admin approval.',
      'Accepted':'Your order has been accepted! Our team will prepare your drinks shortly.',
      'Preparing':'Your drinks are currently being prepared.',
      'Out for Delivery':'Your order is on its way! Please get ready to receive it.',
      'Delivered':'Your order has been successfully delivered. Thank you for choosing BobaSip!',
      'Rejected':'Unfortunately, your order was rejected.',
    };
    if(msgEl) msgEl.textContent = msgs[st]||'';
    // rejection reason
    const rejEl = document.querySelector('[data-rejection]');
    if(rejEl){
      if(st==='Rejected' && o.rejectionReason){ rejEl.classList.remove('hidden'); rejEl.textContent = 'Reason: ' + o.rejectionReason; }
      else { rejEl.classList.add('hidden'); rejEl.textContent=''; }
    }
    const itemsEl = document.querySelector('[data-items]');
    if(itemsEl){
      itemsEl.innerHTML = (o.items||[]).map(it=>`<div class="flex items-center justify-between text-sm font-semibold text-ink-soft"><span class="inline-flex items-center gap-2"><span class="w-9 h-9 rounded-lg overflow-hidden bg-cream-2 flex items-center justify-center flex-shrink-0">${itemThumb(it)}</span>${esc(it.name)} × ${it.qty}${it.size?' · '+it.size:''}</span><b class="text-ink">${money(it.price*it.qty)}</b></div>`).join('');
    }
    // timeline
    if(steps.length){
      if(st==='Rejected' || st==='Cancelled'){
        steps.forEach(s=>s.classList.remove('done','active'));
      } else {
        const idx = IDX[st]!=null ? IDX[st] : 0;
        steps.forEach((s,i)=>{ s.classList.toggle('done', i < idx); s.classList.toggle('active', i === idx); });
      }
    }
    // progress bar (static by status)
    const barEl = document.querySelector('[data-sim-bar]');
    const statEl = document.querySelector('[data-sim-status]');
    const countEl = document.querySelector('[data-sim-countdown]');
    if(statEl) statEl.textContent = st;
    if(barEl){
      const pct = st==='Delivered'?100 : (st==='Out for Delivery'?75 : (st==='Preparing'?50 : (st==='Accepted'?25 : (st==='Pending Approval'?5 : 0))));
      barEl.style.width = pct+'%';
    }
    if(countEl){ countEl.textContent = st; }
  }
  render();
  const poll=setInterval(()=>{ if(document.body.dataset.page!=='track'){ clearInterval(poll); return; } render(); },3000);
}

function showProfileTab(tab){
  const panels = document.querySelectorAll('[data-panel]');
  panels.forEach(p=>p.classList.toggle('hidden', p.dataset.panel !== tab));
  // update sidebar active
  document.querySelectorAll('aside a[data-nav="profile"]').forEach(a=>a.classList.remove('bg-brown/15','text-brown'));
  // run init for that panel
  if(tab==='orders') initOrders();
  if(tab==='addresses') initAddresses();
  if(tab==='payments') initPayments();
  if(tab==='notifications') initNotifications();
  if(tab==='settings') initSettings();
  if(window.lucide) lucide.createIcons();
}
function initProfile(){
  const u = getUser(); if(u && u.role==='admin'){ navigateTo('admin'); return; }
  const nameEl = document.querySelector('[data-user-name]');
  const emailEl = document.querySelector('[data-user-email]');
  const avEl = document.querySelector('[data-user-avatar]');
  if(u){
    if(nameEl) nameEl.textContent = u.name;
    if(emailEl) emailEl.textContent = u.email;
    if(avEl) setAvatar(avEl, u);
  } else {
    if(nameEl) nameEl.textContent = 'Guest';
    if(emailEl) emailEl.textContent = 'Not signed in';
    if(avEl) avEl.textContent = 'G';
  }
  const ordersProfileCard = document.querySelector('[data-profile-card="orders"]');
  if (ordersProfileCard) {
    ordersProfileCard.classList.toggle('hidden', !!(u && u.role === 'admin'));
  }
  // tab switching
  const initial = (location.hash||'').replace('#','') || 'overview';
  const valid = ['overview','orders','addresses','payments','notifications','settings'];
  const tab = valid.includes(initial) ? initial : 'overview';
  document.querySelectorAll('[data-tab]').forEach(btn=>{
    btn.addEventListener('click', ()=>{ location.hash = btn.dataset.tab; });
  });
  if(!window._profileHashBound){
    window._profileHashBound = true;
    window.addEventListener('hashchange', ()=>{
      const t=(location.hash||'').replace('#','');
      const validTabs=['overview','orders','addresses','payments','notifications','settings'];
      if(document.body && document.body.dataset.page==='profile') showProfileTab(validTabs.includes(t)?t:'overview');
    });
  }
  showProfileTab(tab);
  // run initOrders etc for overview? no
  initOrders(); // pre-render if container exists (it's in hidden panel, fine)
}


function initForgot(){
  const form = document.querySelector('#forgotForm');
  if(!form) return;
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    if(document.querySelector('.ls-overlay')) return;
    const email = (form.querySelector('#email')?.value||'').trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if(!email || !emailOk){
      showLoadingFailed(!email ? 'Missing email' : 'Invalid email', {loadingMessage:'Sending reset link.', loadingSub:'Checking details.', failedMessage: !email ? 'Missing email' : 'Invalid email', failedSub: !email ? 'Please enter your email address' : 'Please enter a valid email address'});
      return;
    }
    if(typeof isSupabaseEnabled==='function' && isSupabaseEnabled()){
      try{
        const sb = await getSupabaseClient();
        if(sb && sb.auth){
          let redirectTo;
          try{ if(location.origin && location.origin!=='null') redirectTo = location.origin + location.pathname.replace(/[^\/]*$/, '') + 'login.html'; }catch(ex){}
          const { error } = await sb.auth.resetPasswordForEmail(email, redirectTo ? { redirectTo } : undefined);
          if(error){ showLoadingFailed('Reset failed', {loadingMessage:'Sending reset link.', loadingSub:'Please wait.', failedMessage:'Reset failed', failedSub:error.message||'Please try again'}); return; }
          showLoadingSuccess('Reset link sent', null, {loadingMessage:'Sending reset link.', loadingSub:'Please wait.', successMessage:'Reset link sent', successSub:'Check your email inbox'});
          return;
        }
      }catch(err){ console.error(err); showLoadingFailed('Reset failed', {loadingMessage:'Sending reset link.', loadingSub:'Please wait.', failedMessage:'Reset failed', failedSub:'Could not contact authentication service'}); return; }
    }
    showLoadingFailed('Not available', {loadingMessage:'Sending reset link.', loadingSub:'Checking configuration.', failedMessage:'Password reset unavailable', failedSub:'Configure Supabase to enable password reset emails.'});
  });
}

function initSignup(){
  const form = document.querySelector('#signupForm');
  if(!form) return;
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    if(document.querySelector('.ls-overlay')) return;
    const name = (form.querySelector('#name')?.value||'').trim();
    const email = (form.querySelector('#email')?.value||'').trim();
    const pass = (form.querySelector('#password')?.value||'');
    if(!name||!email||!pass){
      showLoadingFailed('Please fill all fields', {loadingMessage:'Creating account.', loadingSub:'Checking details.', failedMessage:'Missing fields', failedSub:'Please fill all fields'});
      return;
    }
    const em=email.toLowerCase();
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)){
      showLoadingFailed('Enter a valid email',{loadingMessage:'Creating account.',loadingSub:'Checking details.',failedMessage:'Cannot create account',failedSub:'Enter a valid email'}); return;
    }
    if(pass.length<6){
      showLoadingFailed('Password must be at least 6 characters',{loadingMessage:'Creating account.',loadingSub:'Checking details.',failedMessage:'Cannot create account',failedSub:'Password must be at least 6 characters'}); return;
    }
    if(typeof isSupabaseEnabled==='function' && isSupabaseEnabled()){
      try{
        const sb = await getSupabaseClient();
        if(sb && sb.auth){
          const { data, error } = await sb.auth.signUp({ email: em, password: pass, options: { data: { full_name: name, name: name } } });
          if(error){ showLoadingFailed(error.message||'Could not create account',{loadingMessage:'Creating account.',loadingSub:'Please wait.',failedMessage:'Sign up failed',failedSub:error.message||'Please try again'}); return; }
          // Profile created by DB trigger (handle_new_user) with role=customer. Never set admin client-side.
          if(data && data.session && data.user){
            try{ await ensureSupabaseSessionUser(); }catch(ex){}
            showLoadingSuccess('Account created', '/home', {successMessage:'Account created successfully!'});
          } else {
            showLoadingSuccess('Account created', '/login', {successMessage:'Account created successfully!', successSub:'Please check your email to confirm, then sign in.'});
          }
          return;
        }
      }catch(err){ console.error(err); showLoadingFailed('Could not create account',{loadingMessage:'Creating account.',loadingSub:'Please wait.',failedMessage:'Sign up failed',failedSub:'Please check your connection and try again'}); return; }
    }
    // Local fallback (offline/demo only)
    const bad=((ACCOUNTS[em]||loadJSON(ACCOUNTS_KEY,{})[em])?'Email is already registered':'');
    if(bad){ showLoadingFailed(bad,{loadingMessage:'Creating account.',loadingSub:'Checking details.',failedMessage:'Cannot create account',failedSub:bad}); return; }
    sha(pass).then(h=>{ const accs=loadJSON(ACCOUNTS_KEY,{}); accs[em]={name,email:em,role:'user',hash:h}; saveJSON(ACCOUNTS_KEY,accs); showLoadingSuccess('Account created', '/login', {successMessage:'Account created successfully! Please log in to continue.'}); });
  });
}

const ACCOUNTS = {
  'admin@bobasip.com': { name:'Admin', email:'admin@bobasip.com', role:'admin', hash:'240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9', avatar:'images/admin.png' },
  'user@bobasip.com': { name:'User', email:'user@bobasip.com', role:'user', hash:'e606e38b0d8c19b24cf0ee3808183162ea7cd63ff7912dbb22b5e803286b4446', avatar:'images/user.png' },
};

function initLogin(){
  const form = document.querySelector('#loginForm');
  if(!form) return;
  // If Supabase session exists, sync and redirect
  try{ if(typeof isSupabaseEnabled==='function' && isSupabaseEnabled()){ (async()=>{ try{ const local=await syncLocalUserFromSupabase(); if(local){ navigateTo(local.role==='admin'?'/admin':'/home'); } }catch(e){} })(); } }catch(e){}
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    if(document.querySelector('.ls-overlay')) return;
    const email = (form.querySelector('#email')?.value||'').trim().toLowerCase();
    const pass = (form.querySelector('#password')?.value||'');
    if(!email || !pass){
      showLoadingFailed('Missing fields', {loadingMessage:'Signing in.', loadingSub:'Checking credentials.', failedMessage:'Missing fields', failedSub:'Please enter email and password'});
      return;
    }
    const fail=(sub)=>showLoadingFailed('Invalid credentials',{loadingMessage:'Signing in.',loadingSub:'Checking credentials.',failedMessage:'Sign in failed',failedSub:sub||'Incorrect email or password'});
    const done=a=>{ saveUser({id:a.id,name:a.name,email:a.email,role:a.role,avatar:a.avatar||(a.role==='admin'?'images/admin.png':'images/user.png'),phone:a.phone,supabase:!!a.supabase}); try{ if(a.role!=='admin' && typeof initCustomerRealtime==='function') initCustomerRealtime(); }catch(e){} showLoadingSuccess('Welcome '+a.name, a.role==='admin'?'/admin':'/home'); };

    if(typeof isSupabaseEnabled==='function' && isSupabaseEnabled()){
      try{
        const sb = await getSupabaseClient();
        if(sb && sb.auth){
          const { data, error } = await sb.auth.signInWithPassword({ email, password: pass });
          if(!error && data && data.session && data.user){
            // Profile should exist via DB trigger (handle_new_user). Read it; retry once if not yet visible.
            let profile = await getSupabaseProfile(data.user.id);
            if(!profile){ try{ await new Promise(r=>setTimeout(r, 400)); }catch(ex){} profile = await getSupabaseProfile(data.user.id); }
            if(!profile){
              // Fallback: create/ensure own profile row only (no role) in case trigger/visibility lags; RLS restricts to self.
              try{ await sb.from('profiles').upsert({id:data.user.id,email:data.user.email,full_name:(data.user.user_metadata&& (data.user.user_metadata.full_name||data.user.user_metadata.name))||String(data.user.email||'').split('@')[0]||''},{onConflict:'id'}); profile = await getSupabaseProfile(data.user.id); }catch(ex){ console.warn('Profile ensure failed', ex); }
            }
            const local = sbUserToLocal(data.user, profile);
            if(local){ done(local); return; }
          } else if(error){
            const emsg = String(error.message||'').toLowerCase();
            if(/email not confirmed/.test(emsg)){ fail('Please confirm your email before signing in.'); return; }
            console.warn('Supabase sign-in failed', error);
            // fall through to local/demo fallback for known demo accounts
          }
        }
      }catch(err){ console.error('Supabase sign-in error', err); }
    }

    // Local/demo fallback
    const demo=ACCOUNTS[email];
    if(demo){ sha(pass).then(h=>{ if(h===demo.hash) done(demo); else fail(); }); return; }
    const reg=loadJSON(ACCOUNTS_KEY,{})[email]; if(!reg){ fail(); return; }
    sha(pass).then(h=>{ if(h===reg.hash) done(reg); else fail(); });
  });
}

function highlightAdminOrder(ref, attempt){
  try{
    const targetRef = String(ref || localStorage.getItem('bobasip_admin_highlight_order') || localStorage.getItem('bobasip_admin_order_ref') || '').trim();
    if(!targetRef) return false;
    const list = document.getElementById('adminOrdersList'); if(!list) return false;
    const safe = (window.CSS && CSS.escape) ? CSS.escape(targetRef) : String(targetRef).replace(/([\"\\])/g,'\\$1');
    const card = list.querySelector('[data-admin-order-ref="'+safe+'"]') || Array.from(list.children||[]).find(el=> ((el && el.getAttribute && el.getAttribute('data-admin-order-ref'))||'').trim()===targetRef || (el && (el.textContent||'')).indexOf(targetRef) !== -1);
    if(card){
      card.classList.add('admin-order-highlight');
      card.style.outline='3px solid var(--accent)';
      card.style.outlineOffset='2px';
      card.style.boxShadow='0 0 0 6px rgba(229,161,61,0.18)';
      try{ card.scrollIntoView({behavior:'smooth', block:'center'}); }catch(e){}
      try{ localStorage.removeItem('bobasip_admin_highlight_order'); }catch(e){}
      try{ localStorage.removeItem('bobasip_admin_order_ref'); }catch(e){}
      setTimeout(()=>{ try{ card.style.outline=''; card.style.outlineOffset=''; card.style.boxShadow=''; card.classList.remove('admin-order-highlight'); }catch(e){} }, 5000);
      return true;
    }
    const tries = Number(attempt||0);
    if(tries < 20){ setTimeout(()=>{ try{ highlightAdminOrder(targetRef, tries+1); }catch(e){} }, 150); }
    return false;
  }catch(e){ console.error(e); return false; }
}
async function tryFetchOrderFromServerByRef(ref){
  try{
    const target = String(ref||'').trim(); if(!target) return null;
    if(typeof hasSupabaseConfig !== 'function' || !hasSupabaseConfig()) return null;
    if(typeof getSupabaseClient !== 'function') return null;
    const sb = await getSupabaseClient();
    const session = (typeof getSupabaseSession==='function') ? await getSupabaseSession() : null;
    if(!sb || !session) return null;
    let data = null, error = null;
    ({ data, error } = await sb.from('orders').select('*').eq('order_number', target).maybeSingle());
    if(error || !data){ ({ data, error } = await sb.from('orders').select('*').eq('ref', target).maybeSingle()); }
    if(error || !data) return null;
    const o = Object.assign({}, data);
    if(o.user_name && !o.userName) o.userName = o.user_name;
    if(o.user_email && !o.userEmail) o.userEmail = o.user_email;
    if(o.created_at && !o.createdAt) o.createdAt = (new Date(o.created_at)).getTime();
    if(o.status_updated_at && !o.statusUpdatedAt) o.statusUpdatedAt = (new Date(o.status_updated_at)).getTime();
    if(o.rejection_reason && !o.rejectionReason) o.rejectionReason = o.rejection_reason;
    return o;
  }catch(e){ console.warn('order fetch by ref failed', e); return null; }
}
async function applyAdminOrderLocate(ref, opts){
  opts = opts || {};
  const target = String(ref||'').trim();
  if(!target){ try{ toast('Order reference is missing'); }catch(e){} return false; }
  try{ localStorage.setItem('bobasip_admin_order_ref', target); localStorage.setItem('bobasip_admin_highlight_order', target); }catch(e){}
  const setAll = ()=>{
    window._adminOrderFilterMode = 'all';
    const statusSel = document.getElementById('adminStatusFilter'); if(statusSel) statusSel.value = 'All';
    const search = document.getElementById('adminOrderSearch'); if(search){ search.value = target; try{ search.dispatchEvent(new Event('input',{bubbles:true})); }catch(e){} }
  };
  setAll();
  try{ if(typeof renderAdminOrders==='function') renderAdminOrders(); }catch(e){ console.error(e); }
  const getCard = ()=>{
    const list=document.getElementById('adminOrdersList'); if(!list) return null;
    const safe=(window.CSS&&CSS.escape)?CSS.escape(target):String(target).replace(/([\"\\])/g,'\\$1');
    return list.querySelector('[data-admin-order-ref="'+safe+'"]');
  };
  await new Promise(r=>setTimeout(r, opts.delay != null ? opts.delay : 100));
  try{
    let found = !!getCard();
    if(!found){ setAll(); try{ renderAdminOrders(); }catch(e){} await new Promise(r=>setTimeout(r,60)); found = !!getCard(); }
    if(!found){
      const localOrders = loadJSON(ORDERS_KEY, []);
      if(localOrders.some(o=>o && String(o.ref||'').trim()===target)){
        setAll(); try{ renderAdminOrders(); }catch(e){} await new Promise(r=>setTimeout(r,60)); found = !!getCard();
      }
    }
    if(!found){
      const fromDb = await tryFetchOrderFromServerByRef(target);
      if(fromDb && fromDb.ref){
        const orders = loadJSON(ORDERS_KEY, []);
        const nref = String(fromDb.ref).trim();
        if(!orders.some(o=>o && String(o.ref||'').trim()===nref)){ orders.unshift(fromDb); saveJSON(ORDERS_KEY, orders); }
        setAll(); try{ renderAdminOrders(); }catch(e){} await new Promise(r=>setTimeout(r,80)); found = !!getCard();
      }
    }
    if(found || getCard()){
      highlightAdminOrder(target, 0);
      return true;
    }
    try{ localStorage.removeItem('bobasip_admin_highlight_order'); localStorage.removeItem('bobasip_admin_order_ref'); }catch(e){}
    try{ toast('Order '+target+' not found. It may be unavailable or removed.'); }catch(e){}
    return false;
  }catch(e){ console.error(e); try{ toast('Could not locate order '+target); }catch(_){} return false; }
}
function renderAdminOrders(){
  const list = document.getElementById('adminOrdersList');
  if(!list) return;
  const q=(document.getElementById('adminOrderSearch')||{}).value||'';
  const ql=q.toLowerCase().trim();
  const mode = window._adminOrderFilterMode || 'all';
  const dropdownVal = (document.getElementById('adminStatusFilter')||{}).value||'All';
  let orders = loadJSON(ORDERS_KEY,[]).filter(o=>!o.hiddenByUser).slice();
  const sort = (document.getElementById('adminOrderSort')||{}).value || 'newest';
  if(mode === 'pending') orders = orders.filter(o=>(o.status||'Pending Approval')==='Pending Approval');
  else if(mode === 'accepted') orders = orders.filter(o=>['Accepted','Preparing','Out for Delivery'].includes(o.status||'Pending Approval'));
  else if(mode === 'rejected') orders = orders.filter(o=>(o.status||'Pending Approval')==='Rejected');
  else if(mode === 'completed') orders = orders.filter(o=>(o.status||'Pending Approval')==='Delivered');
  else if(mode === 'revenue') orders = orders.filter(o=>!['Pending Approval','Rejected','Cancelled'].includes(o.status||'Pending Approval'));
  else if(dropdownVal !== 'All') orders = orders.filter(o=>(o.status||'Pending Approval')===dropdownVal);
  if(sort === 'oldest') orders.sort((a,b)=>(Number(a.createdAt)||0)-(Number(b.createdAt)||0));
  else if(sort === 'total-high') orders.sort((a,b)=>(Number(b.total)||0)-(Number(a.total)||0));
  else if(sort === 'total-low') orders.sort((a,b)=>(Number(a.total)||0)-(Number(b.total)||0));
  else if(sort === 'status') orders.sort((a,b)=>String(a.status||'').localeCompare(String(b.status||'')));
  else orders.sort((a,b)=>(Number(b.createdAt)||0)-(Number(a.createdAt)||0));
  if(ql) orders = orders.filter(o=> (o.ref||'').toLowerCase().includes(ql) || (o.userName||'').toLowerCase().includes(ql) || (o.userEmail||'').toLowerCase().includes(ql) || (o.items||[]).some(it=>(it.name||'').toLowerCase().includes(ql)));
  const filterLabels = {all:'Showing: All orders', pending:'Showing: Pending orders', accepted:'Showing: Accepted / in-progress orders', rejected:'Showing: Rejected orders', completed:'Showing: Completed (delivered) orders', revenue:'Showing: Revenue orders', dropdown:'Showing: Filtered orders'};
  const labelEl = document.getElementById('adminOrderFilterLabel');
  if(labelEl){ labelEl.textContent = (mode !== 'all' && mode !== 'dropdown') ? (filterLabels[mode]||'') + '  ·  ' : ''; if(mode !== 'all') { const btn = document.createElement('button'); btn.type='button'; btn.textContent='Show all'; btn.className='ml-2 px-2 py-0.5 rounded-lg bg-brown/10 text-brown font-bold text-[11px] hover:bg-brown/20 transition'; btn.onclick=()=>{ window._adminOrderFilterMode='all'; const sel=document.getElementById('adminStatusFilter'); if(sel) sel.value='All'; renderAdminOrders(); }; labelEl.appendChild(btn); } }
  if(!orders.length){
    list.innerHTML = '<div class="text-center text-ink-muted font-semibold py-6">No matching orders</div>';
    return;
  }
  list.innerHTML = orders.map(o=>`
    <div class="bg-white/70 dark:bg-cream-2 border border-white/60 rounded-2xl p-4 shadow-card" data-admin-order-ref="${esc(o.ref||'')}">
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="font-extrabold text-ink">${esc(o.ref||'ORDER')}</span>
            <span class="inline-flex px-2.5 py-1 rounded-full text-[11px] font-extrabold ${statusColor(o.status)}">${o.status||'Pending Approval'}</span>
          </div>
          <div class="text-[11px] text-ink-muted font-semibold mt-0.5">${o.date||''} · ${o.payment||'Card'} · <span class="text-sm font-semibold text-ink break-words">${esc(o.userName||o.userEmail||'Customer')}</span></div>
          <div class="text-[11px] text-ink-muted font-semibold mt-0.5">Address: ${esc(o.address||'-')}</div>
          ${o.rejectionReason?`<div class="text-[11px] text-red-600 font-semibold mt-0.5">Reason: ${esc(o.rejectionReason)}</div>`:''}
          ${o.statusUpdatedAt?`<div class="text-[10px] text-ink-muted font-semibold mt-0.5">Updated: ${new Date(o.statusUpdatedAt).toLocaleString()}</div>`:''}
        </div>
        <div class="flex flex-wrap items-center gap-2 sm:justify-end sm:self-start">
          <button type="button" data-print="${esc(o.ref)}" class="admin-order-btn admin-order-btn-print inline-flex items-center justify-center w-auto whitespace-nowrap rounded-lg font-semibold transition" style="height:38px;padding:8px 14px;font-size:13px;border-radius:8px;">Print Receipt</button>${adminActionButtons(o)}
        </div>
      </div>
      <div class="flex flex-wrap gap-2 mt-2">${(o.items||[]).map(it=>`<span class="inline-flex items-center gap-2.5 bg-white dark:bg-cream-2 rounded-xl pl-1 pr-3 py-1 text-xs font-bold text-ink-soft"><span class="rounded-lg overflow-hidden bg-white dark:bg-cream-2 flex items-center justify-center flex-shrink-0" style="width:48px;height:48px">${itemThumb(it)}</span><span>${esc(it.name)} <span class="text-ink-muted font-semibold">×${it.qty}</span> ${it.size?`· ${it.size}`:''}</span></span>`).join('')}</div>
      <div class="flex items-center justify-between mt-3"><span class="text-xs text-ink-muted font-semibold">${(o.items||[]).reduce((n,i)=>n+(i.qty||0),0)} item(s)</span><span class="font-extrabold text-accent">${money(o.total||0)}</span></div>
    </div>
  `).join('');
  bindAdminOrderActions();
  try{ highlightAdminOrder(localStorage.getItem('bobasip_admin_highlight_order') || localStorage.getItem('bobasip_admin_order_ref')); }catch(e){}
}
function renderAdminCustomers(){
  const list = document.getElementById('adminCustomersList');
  if(!list) return;
  const query = (document.getElementById('adminCustomerSearch')?.value||'').trim().toLowerCase();
  const accounts = Object.values(Object.assign({}, typeof ACCOUNTS === 'object' ? ACCOUNTS : {}, loadJSON(ACCOUNTS_KEY, {})))
    .filter(a=>(a.role||'user') === 'user');
  const map = new Map();
  accounts.forEach(a=>{
    const key = String(a.email||'').trim().toLowerCase();
    if(!key) return;
    map.set(key, {name:a.name||'-', email:a.email||'-', orders:0, total:0, joined:''});
  });
  loadJSON(ORDERS_KEY, []).forEach(o=>{
    if(o.hiddenByUser) return;
    if(['Rejected','Cancelled'].includes(o.status)) return;
    const key = String(o.userEmail || o.userName || 'unknown').trim().toLowerCase();
    if(!map.has(key)) map.set(key, {name:o.userName||'-', email:o.userEmail||key, orders:0, total:0, joined:''});
    const customer = map.get(key);
    customer.orders += 1;
    customer.total += Number(o.total)||0;
  });
  let rows = Array.from(map.values());
  if(query){
    rows = rows.filter(c => (c.name||'').toLowerCase().includes(query) || (c.email||'').toLowerCase().includes(query));
  }
  if(!rows.length){ list.innerHTML = '<div class="text-center text-ink-muted font-semibold py-4">No customers found</div>'; return; }
  list.innerHTML = rows.map(c=>`<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 bg-white/70 border border-white/60 rounded-2xl"><div class="min-w-0"><div class="font-extrabold text-sm">${esc(c.name)}</div><div class="text-xs text-ink-muted font-semibold truncate">${esc(c.email)}</div></div><div class="flex items-center gap-4"><div class="text-right"><div class="text-xs font-bold text-ink-soft">${c.orders} order(s)</div><div class="font-extrabold text-accent">${money(c.total)}</div></div><button type="button" data-customer-view="${esc(c.email)}" class="px-3 py-2 rounded-xl bg-brown/10 text-brown font-bold text-xs hover:bg-brown/20 transition">View orders</button></div></div>`).join('');
  if(!list._customerBound){
    list._customerBound = true;
    list.addEventListener('click', e=>{
      const button = e.target && e.target.closest ? e.target.closest('[data-customer-view]') : null;
      if(!button) return;
      const email = button.getAttribute('data-customer-view') || '';
      const search = document.getElementById('adminOrderSearch');
      location.hash = 'orders';
      try{ if(window.__adminApplyView) window.__adminApplyView(); }catch(error){ console.error(error); }
      window._adminOrderFilterMode = 'all';
      if(search) search.value = email;
      try{ renderAdminOrders(); }catch(error){ console.error(error); }
    });
  }
}
function renderAdminAddresses(){
  const list = document.getElementById('adminAddressesList');
  if(!list) return;
  const q = (document.getElementById('adminAddressSearch')?.value||'').toLowerCase().trim();
  const orders = loadJSON(ORDERS_KEY, []);
  const map = {};
  orders.forEach(o=>{
    const addr = (o.address||'').trim();
    if(!addr) return;
    const key = (o.userEmail||o.userName||'unknown') + '|' + addr.toLowerCase();
    if(!map[key]) map[key] = {name:o.userName||'-', email:o.userEmail||'-', address:addr, refs:[], date:o.date||'', latest:o.createdAt||0};
    map[key].refs.push(o.ref);
    if((o.createdAt||0) > map[key].latest){ map[key].latest = o.createdAt||0; map[key].date = o.date||''; }
  });
  let rows = Object.values(map);
  if(q) rows = rows.filter(r => (r.name||'').toLowerCase().includes(q) || (r.email||'').toLowerCase().includes(q) || (r.address||'').toLowerCase().includes(q) || r.refs.some(ref=>(ref||'').toLowerCase().includes(q)));
  if(!rows.length){ list.innerHTML = '<div class="text-center text-ink-muted font-semibold py-6">No customer addresses yet</div>'; return; }
  list.innerHTML = rows.map(r=>`
    <div class="bg-white/70 dark:bg-cream-2 border border-white/60 rounded-2xl p-4 shadow-card">
      <div class="flex items-start justify-between gap-3">
        <div class="flex-1 min-w-0">
          <div class="font-extrabold text-ink">${esc(r.name)}</div>
          <div class="text-xs text-ink-muted font-semibold">${esc(r.email)}</div>
          <div class="text-sm font-semibold text-ink-soft mt-2">${esc(r.address)}</div>
          <div class="text-[11px] text-ink-muted font-semibold mt-1">Order${r.refs.length>1?'s':''}: ${r.refs.map(ref=>esc(ref)).join(', ')}</div>
          ${r.date?`<div class="text-[10px] text-ink-muted font-semibold mt-0.5">Last used: ${esc(r.date)}</div>`:''}
        </div>
      </div>
    </div>
  `).join('');
}
function renderAdminPayments(){
  const list = document.getElementById('adminPaymentsList');
  if(!list) return;
  const q = (document.getElementById('adminPaymentSearch')?.value||'').toLowerCase().trim();
  const methodFilter = (document.getElementById('adminPaymentMethodFilter')?.value||'All');
  const statusFilter = (document.getElementById('adminPaymentStatusFilter')?.value||'All');
  const orders = loadJSON(ORDERS_KEY, []);
  let rows = orders.map(o=>({ref:o.ref, customer:o.userName||o.userEmail||'-', email:o.userEmail||'-', method:o.payment||'Card', amount:o.total||0, status:o.status||'Pending Approval', date:o.date||'', createdAt:o.createdAt||0}));
  if(methodFilter !== 'All') rows = rows.filter(r=>r.method===methodFilter);
  if(statusFilter !== 'All') rows = rows.filter(r=>r.status===statusFilter);
  if(q) rows = rows.filter(r => (r.ref||'').toLowerCase().includes(q) || (r.customer||'').toLowerCase().includes(q) || (r.email||'').toLowerCase().includes(q) || (r.method||'').toLowerCase().includes(q));
  rows.sort((a,b)=>(b.createdAt||0)-(a.createdAt||0));
  if(!rows.length){ list.innerHTML = '<div class="text-center text-ink-muted font-semibold py-6">No payment records yet</div>'; return; }
  list.innerHTML = rows.map(r=>`
    <div class="bg-white/70 dark:bg-cream-2 border border-white/60 rounded-2xl p-4 shadow-card">
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="font-extrabold text-ink">${esc(r.ref)}</span>
            <span class="inline-flex px-2.5 py-1 rounded-full text-[11px] font-extrabold ${statusColor(r.status)}">${esc(r.status)}</span>
          </div>
          <div class="text-[11px] text-ink-muted font-semibold mt-0.5">${esc(r.customer)} · ${esc(r.email)}</div>
          <div class="text-[11px] text-ink-muted font-semibold mt-0.5">${esc(r.date)}</div>
        </div>
        <div class="text-right">
          <div class="text-xs font-bold text-ink-soft">${esc(r.method)}</div>
          <div class="font-extrabold text-accent">${money(r.amount)}</div>
        </div>
      </div>
    </div>
  `).join('');
}
function initAdminViews(){
   const TITLES = {
     dashboard: ['Admin Dashboard','Store overview, key stats, and recent orders'],
     orders: ['Customer Orders','View all orders placed by users and update status'],
     menu: ['Menu Management','Add, edit, hide, or delete menu products'],
     customers: ['Customers','Registered customers and their activity'],
     addresses: ['Customer Addresses','Delivery addresses associated with customer orders'],
     payments: ['Customer Payments','Payment records associated with customer orders'],
     reports: ['Sales Reports','Sales and order statistics'],
     notifications: ['Admin Notifications','Order alerts and notification preferences'],
     settings: ['Admin Settings','Customize your BobaSip experience']
   };
   const ALIASES = { products: 'menu' };
   function normalizeView(raw){
     let v = String(raw||'').replace(/^#/, '').trim();
     if(ALIASES[v]) v = ALIASES[v];
     return TITLES[v] ? v : 'dashboard';
   }
   function activeView(){ return normalizeView(location.hash || '#dashboard'); }
   function showSection(view, opts){
     view = normalizeView(view);
     const views = document.querySelectorAll('[data-admin-view]');
     views.forEach(v=>{ v.classList.toggle('hidden', v.dataset.adminView !== view); });
     const t = TITLES[view];
     const titleEl = document.getElementById('adminPageTitle');
     const subEl = document.getElementById('adminPageSubtitle');
     if(titleEl) titleEl.textContent = t[0];
     if(subEl) subEl.textContent = t[1];
     const aside = document.querySelector('body > aside[data-admin-sidebar]');
     if(aside){
       aside.querySelectorAll('[data-admin-nav]').forEach(a=>{
         const navView = normalizeView(a.dataset.adminNav);
         const on = navView === view;
         a.classList.toggle('bg-brown/15', on);
         a.classList.toggle('text-brown', on);
         a.classList.toggle('text-ink-soft', !on);
       });
     }
     if(view==='dashboard'){ try{ renderAdminStats(); }catch(e){} try{ renderAdminRecentOrders(); }catch(e){} }
     else if(view==='orders'){ try{ renderAdminOrders(); }catch(e){} }
     else if(view==='menu'){ try{ if(typeof renderAdminProducts==='function') renderAdminProducts(); else if(typeof window.renderAdminProducts==='function') window.renderAdminProducts(); }catch(e){} }
     else if(view==='customers'){ try{ renderAdminCustomers(); }catch(e){} }
     else if(view==='addresses'){ try{ renderAdminAddresses(); }catch(e){} }
     else if(view==='payments'){ try{ renderAdminPayments(); }catch(e){} try{ initAdminPaymentMethods(); }catch(e){} }
     else if(view==='reports'){ try{ renderAdminCharts(); }catch(e){} if(window._adminCharts){ window._adminCharts.forEach(c=>{ try{ c.resize(); }catch(e){} }); } }
     else if(view==='notifications'){ try{ initNotifications(); }catch(e){} }
     else if(view==='settings'){ try{ initSettings(); }catch(e){} }
     const desiredHash = '#'+view;
     if(opts && opts.replaceHash){
       try{ history.replaceState({page:'admin', view}, '', desiredHash); }catch(e){ try{ location.hash = view; }catch(_){} }
     } else if(opts && opts.syncHash && (location.hash||'') !== desiredHash){
       try{ history.replaceState({page:'admin', view}, '', desiredHash); }catch(e){}
     }
     return view;
   }
   function go(view){
     view = normalizeView(view);
     showSection(view);
     if((location.hash||'') !== '#'+view){
       try{ history.pushState({page:'admin', view}, '', '#'+view); }
       catch(e){ try{ location.hash = view; }catch(_){} }
     }
   }
   window.__adminApplyView = function(){ showSection(activeView(), {syncHash:true}); };
   window.__adminGoView = go;
   if(!window._adminNavDelegated){
     window._adminNavDelegated = true;
     document.addEventListener('click', e=>{
       const target = e.target && e.target.closest ? e.target.closest('[data-admin-nav]') : null;
       if(!target) return;
       if(document.body.dataset.page !== 'admin') return;
       const href = target.getAttribute('href') || '';
       if(!href.startsWith('#')) return;
       e.preventDefault();
       try{ go(normalizeView(target.dataset.adminNav || href)); }catch(error){ console.error(error); }
     });
   }
   if(!window._adminHashBound){
     window._adminHashBound = true;
     window.addEventListener('hashchange', ()=>{
       if(document.body && document.body.dataset.page === 'admin'){
         try{ showSection(activeView(), {syncHash:true}); }catch(e){ console.error(e); }
       }
     });
   }
   showSection(activeView(), {replaceHash: !location.hash || normalizeView(location.hash) !== String(location.hash||'').replace(/^#/, '').trim()});
}
function adminActionButtons(o){
  const st=o.status||'Pending Approval';
  const ref=esc(o.ref);
  if(st==='Pending Approval'){
    return `<button type="button" data-order-id="${ref}" data-action="accept" data-accept="${ref}" class="admin-order-btn inline-flex items-center justify-center w-auto whitespace-nowrap rounded-lg bg-green-600 text-white font-semibold hover:brightness-95 transition" style="height:38px;padding:8px 14px;font-size:13px;border-radius:8px;">Accept</button><button type="button" data-order-id="${ref}" data-action="reject" data-reject="${ref}" class="admin-order-btn inline-flex items-center justify-center w-auto whitespace-nowrap rounded-lg bg-red-600 text-white font-semibold hover:brightness-95 transition" style="height:38px;padding:8px 14px;font-size:13px;border-radius:8px;">Reject</button>`;
  }
  if(st==='Accepted'){
    return `<button type="button" data-order-id="${ref}" data-action="advance" data-advance="${ref}" data-next="Preparing" class="admin-order-btn inline-flex items-center justify-center w-auto whitespace-nowrap rounded-lg text-white font-semibold hover:brightness-95 transition" style="height:38px;padding:8px 14px;font-size:13px;border-radius:8px;background:#2563EB;border:1px solid #2563EB;">Move to Preparing</button>`;
  }
  if(st==='Preparing'){
    return `<button type="button" data-order-id="${ref}" data-action="advance" data-advance="${ref}" data-next="Out for Delivery" class="admin-order-btn inline-flex items-center justify-center w-auto whitespace-nowrap rounded-lg text-white font-semibold hover:brightness-95 transition" style="height:38px;padding:8px 14px;font-size:13px;border-radius:8px;background:#EA580C;border:1px solid #EA580C;">Move to Out for Delivery</button>`;
  }
  if(st==='Out for Delivery'){
    return `<button type="button" data-order-id="${ref}" data-action="advance" data-advance="${ref}" data-next="Delivered" class="admin-order-btn inline-flex items-center justify-center w-auto whitespace-nowrap rounded-lg bg-green-700 text-white font-semibold hover:brightness-95 transition" style="height:38px;padding:8px 14px;font-size:13px;border-radius:8px;">Mark Delivered</button>`;
  }
  return '';
}
function bindAdminOrderActions(){
  const list = document.getElementById('adminOrdersList');
  if(!list || list._adminActionsBound) return;
  list._adminActionsBound = true;
  list.addEventListener('click', (e)=>{
    const btn = e.target && e.target.closest ? e.target.closest('button') : null;
    if(!btn || !list.contains(btn)) return;
    if(btn.hasAttribute('data-print')){
      printReceipt(btn.getAttribute('data-print'));
      return;
    }
    const ref = btn.dataset.orderId || btn.dataset.accept || btn.dataset.reject || btn.dataset.advance;
    if(!ref) return;
    if(btn.dataset.action==='accept' || btn.hasAttribute('data-accept')){
      acceptOrder(ref);
    } else if(btn.dataset.action==='reject' || btn.hasAttribute('data-reject')){
      rejectOrderModal(ref);
    } else if(btn.dataset.action==='advance' || btn.hasAttribute('data-advance')){
      advanceOrder(ref, btn.dataset.next);
    }
  });
}
function getOrder(ref){ return loadJSON(ORDERS_KEY,[]).find(o=>o.ref===ref); }
function saveOrder(updated){
  const all=loadJSON(ORDERS_KEY,[]);
  const i=all.findIndex(o=>o.ref===updated.ref);
  if(i>=0) all[i]=updated; else all.unshift(updated);
  saveJSON(ORDERS_KEY,all);
  for(let i=0;i<localStorage.length;i++){
    const k=localStorage.key(i);
    if(k && k.indexOf(LAST_ORDER_PREFIX)===0){
      const last=loadJSON(k,null);
      if(last && last.ref===updated.ref) saveJSON(k, updated);
    }
  }
  const legacy=loadJSON(ORDER_KEY,null);
  if(legacy && legacy.ref===updated.ref) saveJSON(ORDER_KEY, updated);
}
function acceptOrder(ref){
  const o=getOrder(ref); if(!o){ toast('Order not found'); return; }
  if((o.status||'Pending Approval')!=='Pending Approval'){ toast('Order already decided'); return; }
  if(document.querySelector('[data-accept-overlay]')) return;
  // confirmation dialog
  const overlay=document.createElement('div');
  overlay.setAttribute('data-accept-overlay','1');
  overlay.className='ls-overlay fixed inset-0 z-[90] flex items-center justify-center bg-black/50 backdrop-blur-sm';
  overlay.innerHTML=`<div class="ls-modal-card relative w-[min(90vw,420px)] rounded-3xl bg-white dark:bg-cream-2 shadow-soft overflow-hidden text-center p-6">
    <div class="ls-modal-title font-display text-xl font-extrabold mb-2">Accept Order?</div>
    <div class="ls-modal-desc text-sm font-semibold mb-5">Accept order <b class="ls-modal-ref">${esc(ref)}</b> and notify the customer?</div>
    <div class="flex gap-2">
      <button type="button" class="ls-cancel ls-cancel-btn flex-1 px-5 py-2.5 rounded-xl font-extrabold transition">Cancel</button>
      <button type="button" class="ls-confirm ls-confirm-btn ls-confirm-accept flex-1 px-5 py-2.5 rounded-xl font-extrabold transition">Accept</button>
    </div>
  </div>`;
  document.body.appendChild(overlay);
  overlay.querySelector('.ls-cancel').addEventListener('click',()=>overlay.remove());
  overlay.querySelector('.ls-confirm').addEventListener('click',()=>{
    overlay.remove();
    const fresh=getOrder(ref); if(!fresh){ toast('Order not found'); return; }
    if((fresh.status||'Pending Approval')!=='Pending Approval'){ toast('Order already decided'); return; }
    try{
      fresh.status='Accepted';
      fresh.statusUpdatedAt=Date.now();
      fresh.acceptedAt=Date.now();
      (async()=>{
        try{
          if(typeof isSupabaseEnabled==='function' && isSupabaseEnabled()){
            const r = await updateOrderStatusInSupabase(fresh.ref,'Accepted');
            if(!r.ok){ toast('Could not update order in database'); return; }
          }
          saveOrder(fresh);
          notifyOrderUpdate(fresh, {title:'Order accepted', msg:'Good news! Your BobaSip order has been accepted. Our team is now preparing your drinks.', ref:fresh.ref}, {eventKey:'order-accepted:'+fresh.ref});
          renderAdminOrders(); renderAdminStats(); try{ renderAdminCustomers(); }catch(e){}
          toast(fresh.ref+' accepted');
        }catch(err){ console.error(err); toast('Failed to accept order'); }
      })();
    }catch(e){ console.error(e); toast('Failed to accept order'); }
  });
}
function rejectOrderModal(ref){
  const o=getOrder(ref); if(!o){ toast('Order not found'); return; }
  if((o.status||'Pending Approval')!=='Pending Approval'){ toast('Order already decided'); return; }
  if(document.querySelector('[data-reject-overlay]')) return;
  const overlay=document.createElement('div');
  overlay.setAttribute('data-reject-overlay','1');
  overlay.className='ls-overlay fixed inset-0 z-[90] flex items-center justify-center bg-black/50 backdrop-blur-sm';
  overlay.innerHTML=`<div class="ls-modal-card relative w-[min(90vw,460px)] rounded-3xl bg-white dark:bg-cream-2 shadow-soft overflow-hidden p-6">
    <div class="ls-modal-title font-display text-xl font-extrabold mb-2">Reject Order</div>
    <div class="ls-modal-desc text-sm font-semibold mb-3">Provide a reason for rejecting <b class="ls-modal-ref">${esc(ref)}</b>.</div>
    <textarea id="rejReason" rows="4" class="ls-modal-input w-full px-4 py-2.5 rounded-xl border border-ink/15 bg-white dark:bg-cream-2 font-semibold text-sm" placeholder="Enter rejection reason..."></textarea>
    <div class="flex gap-2 mt-4">
      <button type="button" class="ls-cancel ls-cancel-btn flex-1 px-5 py-2.5 rounded-xl font-extrabold transition">Cancel</button>
      <button type="button" class="ls-confirm ls-confirm-btn ls-confirm-danger flex-1 px-5 py-2.5 rounded-xl font-extrabold transition">Reject</button>
    </div>
  </div>`;
  document.body.appendChild(overlay);
  overlay.querySelector('.ls-cancel').addEventListener('click',()=>overlay.remove());
  overlay.querySelector('.ls-confirm').addEventListener('click',()=>{
    const reason=(overlay.querySelector('#rejReason').value||'').trim();
    if(!reason){ toast('Rejection reason required'); return; }
    overlay.remove();
    const fresh=getOrder(ref); if(!fresh){ toast('Order not found'); return; }
    if((fresh.status||'Pending Approval')!=='Pending Approval'){ toast('Order already decided'); return; }
    try{
      fresh.status='Rejected';
      fresh.rejectionReason=reason;
      fresh.statusUpdatedAt=Date.now();
      fresh.rejectedAt=Date.now();
      (async()=>{
        try{
          if(typeof isSupabaseEnabled==='function' && isSupabaseEnabled()){
            const r = await updateOrderStatusInSupabase(fresh.ref,'Rejected', reason);
            if(!r.ok){ toast('Could not update order in database'); return; }
          }
          saveOrder(fresh);
          notifyOrderUpdate(fresh, {title:'Order rejected', msg:"We're sorry! Your BobaSip order has been rejected. Reason: "+reason, ref:fresh.ref}, {eventKey:'order-rejected:'+fresh.ref});
          renderAdminOrders(); renderAdminStats(); try{ renderAdminCustomers(); }catch(e){}
          toast(fresh.ref+' rejected');
        }catch(err){ console.error(err); toast('Failed to reject order'); }
      })();
    }catch(e){ console.error(e); toast('Failed to reject order'); }
  });
}
function advanceOrder(ref,next){
  const o=getOrder(ref); if(!o){ toast('Order not found'); return; }
  const st=o.status||'Pending Approval';
  const allowed = {'Accepted':'Preparing','Preparing':'Out for Delivery','Out for Delivery':'Delivered'};
  if(allowed[st]!==next){ toast('Invalid status transition'); return; }
  showConfirm({
    title:'Confirm Status Update?',
    message:'Update order '+ref+' to '+next+'?',
    confirmText:'Confirm',
    cancelText:'Cancel',
    danger:false,
    onConfirm:()=>{
      const fresh=getOrder(ref); if(!fresh){ toast('Order not found'); return; }
      const freshSt=fresh.status||'Pending Approval';
      if(allowed[freshSt]!==next){ toast('Invalid status transition'); return; }
      try{
        fresh.status=next;
        fresh.statusUpdatedAt=Date.now();
        (async()=>{
          try{
            if(typeof isSupabaseEnabled==='function' && isSupabaseEnabled()){
              const r = await updateOrderStatusInSupabase(fresh.ref,next);
              if(!r.ok){ toast('Could not update order in database'); return; }
            }
            saveOrder(fresh);
            const msg=(next==='Preparing'?'Your BobaSip order is now being prepared.':(next==='Out for Delivery'?'Your BobaSip order is out for delivery! Please get ready to receive it.':'Your BobaSip order has been delivered. Thank you!'));
            notifyOrderUpdate(fresh, {title:'Order '+next, msg, ref:fresh.ref}, {eventKey:'order-'+String(next).toLowerCase().replace(/\s+/g,'-')+':'+fresh.ref});
            renderAdminOrders(); renderAdminStats(); try{ renderAdminCustomers(); }catch(e){}
            toast(fresh.ref+' -> '+next);
          }catch(err){ console.error(err); toast('Failed to update order'); }
        })();
      }catch(e){ console.error(e); toast('Failed to update order'); }
    }
  });
}
function initAdmin(){
  const u = getUser();
  if(!u || u.role!=='admin'){
    toast('Admin access required'); navigateTo('home');
    return;
  }
  const _initView = ((location.hash||'#dashboard').replace(/^#/,'')||'dashboard'); 
  initAdminSidebar(_initView==='products'?'menu':(['dashboard','orders','menu','customers','notifications','settings'].includes(_initView)?_initView:'dashboard'));
  try{ initAdminNotificationCenter(); }catch(e){}
  try{
    const langSel = document.getElementById('adminLang');
    if(langSel){
      const state = loadJSON(SETTINGS_KEY, {lang:'English'});
      langSel.value = state.lang || 'English';
      if(!langSel._bound){
        langSel._bound = true;
        langSel.addEventListener('change', ()=>{
          const st = loadJSON(SETTINGS_KEY, {lang:'English', currency:'PHP (₱)', sound:true});
          st.lang = langSel.value;
          saveJSON(SETTINGS_KEY, st);
          applyTranslations();
          if(window.lucide) lucide.createIcons();
          toast('Saved');
        });
      }
    }
    applyTranslations();
    if(window.lucide) lucide.createIcons();
  }catch(e){}
  try{ initAdminPaymentMethods(); }catch(e){}
  // clickable stat cards -> filter Orders
  document.querySelectorAll('[data-stat]').forEach(el=>{
    const card = el.parentElement; if(!card || card._statBound) return; card._statBound=true; card.style.cursor='pointer'; card.addEventListener('click',()=>{ window._adminOrderFilterMode = el.dataset.stat; location.hash='orders'; try{ if(window.__adminApplyView) window.__adminApplyView(); }catch(e){} try{ renderAdminOrders(); }catch(e){} });
  });
  const S=adminStats();
  const _sort=document.getElementById('adminOrderSort'); if(_sort&&!_sort._b){ _sort._b=true; _sort.addEventListener('change',renderAdminOrders); }
  const _sf=document.getElementById('adminStatusFilter'); if(_sf&&!_sf._b){ _sf._b=true; _sf.addEventListener('change',()=>{ window._adminOrderFilterMode='dropdown'; renderAdminOrders(); }); }
  const _ss=document.getElementById('adminOrderSearch'); if(_ss&&!_ss._b){ _ss._b=true; _ss.addEventListener('input',renderAdminOrders); }
const _cst=document.getElementById('adminCustomerSearch'); if(_cst&&!_cst._b){ _cst._b=true; _cst.addEventListener('input',renderAdminCustomers); }
const _as=document.getElementById('adminAddressSearch'); if(_as&&!_as._b){ _as._b=true; _as.addEventListener('input',renderAdminAddresses); }
const _ps=document.getElementById('adminPaymentSearch'); if(_ps&&!_ps._b){ _ps._b=true; _ps.addEventListener('input',renderAdminPayments); }
const _pm=document.getElementById('adminPaymentMethodFilter'); if(_pm&&!_pm._b){ _pm._b=true; _pm.addEventListener('change',renderAdminPayments); }
const _pst=document.getElementById('adminPaymentStatusFilter'); if(_pst&&!_pst._b){ _pst._b=true; _pst.addEventListener('change',renderAdminPayments); }
  initAdminViews();
  try{ if(typeof syncOrdersFromSupabase==='function') syncOrdersFromSupabase(()=>{ try{ renderAdminOrders(); renderAdminStats(); renderAdminCustomers(); renderAdminAddresses(); renderAdminPayments(); }catch(e){} }); }catch(e){}
  const orderRef = localStorage.getItem('bobasip_admin_order_ref') || localStorage.getItem('bobasip_admin_highlight_order');
  if(orderRef){
    try{ localStorage.removeItem('bobasip_admin_order_ref'); }catch(e){}
    if((location.hash||'') !== '#orders'){ try{ if(window.__adminGoView) window.__adminGoView('orders'); else location.hash='orders'; }catch(e){ location.hash='orders'; } }
    setTimeout(()=>{ try{ applyAdminOrderLocate(orderRef, {delay:60}); }catch(e){ console.error(e); } }, 30);
  }
  initAdminProducts();
}

function initAdminProducts(){
  const form = document.getElementById('addProductForm');
  const list = document.getElementById('adminProductsList');
  if(form && !form._imgBound){
    form._imgBound = true;
    const imgInput = form.querySelector('#prodImage');
    const fileInput = form.querySelector('#prodImageFile');
    const attachBtn = form.querySelector('#prodImageBtn');
    const clearBtn = form.querySelector('#prodImageClear');
    const preview = form.querySelector('#prodImagePreview');
    const nameEl = form.querySelector('#prodImageName');
    if(attachBtn && fileInput){
      attachBtn.addEventListener('click', ()=>fileInput.click());
    }
    if(clearBtn){
      clearBtn.addEventListener('click', ()=>{
        if(imgInput) imgInput.value = '';
        if(fileInput) fileInput.value = '';
        if(preview){ preview.src=''; preview.classList.add('hidden'); }
        if(nameEl){ nameEl.textContent=''; }
      });
    }
    if(fileInput){
      fileInput.addEventListener('change', (e)=>{
        const file = e.target.files && e.target.files[0];
        if(!file) return;
        if(file.size>300*1024){ toast('Image too large (max 300 KB)'); e.target.value=''; return; }
        if(nameEl){ nameEl.textContent = file.name; }
        const reader = new FileReader();
        reader.onload = (ev)=>{
          const dataUrl = ev.target.result;
          if(imgInput) imgInput.value = dataUrl;
          if(preview){ preview.src = dataUrl; preview.classList.remove('hidden'); }
        };
        reader.readAsDataURL(file);
      });
    }
    if(imgInput){
      imgInput.addEventListener('input', ()=>{
        const v = imgInput.value.trim();
        if(preview){
          if(v){ preview.src = v; preview.classList.remove('hidden'); } else { preview.src=''; preview.classList.add('hidden'); }
        }
        if(nameEl && !fileInput?.files?.length){ nameEl.textContent = v ? 'Using URL' : ''; }
      });
    }
  }
  if(!form && !list) return;
  window.renderAdminProducts = function renderAdminProducts(){
    if(!list) return;
    const hid=getHidden(), cust=getCustomProducts(), all=Object.values(Object.assign({},PRODUCTS,cust));
    list.innerHTML = all.map(p=>`<div class="flex items-center gap-3 p-3 bg-white/70 border border-white/60 rounded-xl${hid.includes(p.id)?' opacity-60':''}"><img src="${esc(p.image||'images/bobasip-logo.png')}" alt="${esc(p.name)}" class="w-12 h-12 rounded-lg object-cover bg-cream-2" /><div class="flex-1 min-w-0"><div class="font-extrabold text-sm truncate">${esc(p.name)}${cust[p.id]?' <span class="text-[10px] text-accent">CUSTOM</span>':''}${hid.includes(p.id)?' <span class="text-[10px] text-ink-muted">HIDDEN</span>':''}</div><div class="text-xs text-ink-muted font-semibold">${esc(p.cat)} · M ₱${p.mediumPrice} · L ₱${p.largePrice}</div></div><button type="button" data-toggle-product="${esc(p.id)}" class="px-3 py-1.5 rounded-lg bg-brown/10 text-brown font-bold text-xs">${hid.includes(p.id)?'Show':'Hide'}</button>${cust[p.id]?`<button type="button" data-del-product="${esc(p.id)}" class="px-3 py-1.5 rounded-lg bg-red-50 text-red-600 font-bold text-xs hover:bg-red-100 transition">Delete</button>`:''}</div>`).join('');
    list.querySelectorAll('[data-toggle-product]').forEach(b=>b.addEventListener('click',()=>{ const id=b.dataset.toggleProduct; const h=getHidden(); saveJSON(HIDDEN_KEY, h.includes(id)?h.filter(x=>x!==id):h.concat(id)); renderAdminProducts(); }));
    list.querySelectorAll('[data-del-product]').forEach(b=>b.addEventListener('click',()=>{ const id=b.dataset.delProduct; const c=getCustomProducts(); if(!PRODUCTS[id] && !c[id]) return; const name=(PRODUCTS[id]?PRODUCTS[id].name:c[id].name); showConfirm({title:'Delete product?', message:'Delete "'+name+'"? This removes it from the menu.', confirmText:'Delete', danger:true, onConfirm:()=>{ if(PRODUCTS[id]){ const hidden=getHidden(); if(!hidden.includes(id)) saveJSON(HIDDEN_KEY, hidden.concat(id)); } delete c[id]; saveCustomProducts(c); if(typeof renderAdminProducts==='function') renderAdminProducts(); toast('Product removed from menu'); }}); }));
  }
  if(form && !form._bound){
    form._bound = true;
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      if(document.querySelector('.ls-overlay')) return;
      const submitBtn = form.querySelector('button[type="submit"]');
      if(submitBtn){ submitBtn.disabled = true; submitBtn.setAttribute('aria-busy','true'); }
      try{
        const name = (form.querySelector('#prodName')?.value||'').trim();
        const cat = (form.querySelector('#prodCategory')?.value||'Milk Tea').trim();
        const desc = (form.querySelector('#prodDesc')?.value||cat).trim();
        const mediumPrice = parseInt(form.querySelector('#prodMedium')?.value||'0', 10);
        const largePrice = parseInt(form.querySelector('#prodLarge')?.value||'0', 10);
        const image = (form.querySelector('#prodImage')?.value||'').trim();
        const icon = (form.querySelector('#prodIcon')?.value||'cup-soda').trim() || 'cup-soda';
        if(!name){ showLoadingFailed('Missing name', {loadingMessage:'Adding product…', loadingSub:'Checking details…', failedMessage:'Missing name', failedSub:'Please enter a product name'}); return; }
        if(isNaN(mediumPrice) || isNaN(largePrice) || !(mediumPrice>0) || !(largePrice>0)){ showLoadingFailed('Invalid prices', {loadingMessage:'Adding product…', loadingSub:'Checking details…', failedMessage:'Invalid prices', failedSub:'Please enter valid prices'}); return; }
        let base = name.toLowerCase().replace(/[^a-z0-9]+/g,'').slice(0,24) || ('product'+Date.now());
        let id = base;
        const all = getAllProducts();
        let n = 2;
        while(all[id] || getCustomProducts()[id]){ id = base + n; n++; }
        const custom = getCustomProducts();
        custom[id] = { id, name, desc: desc||cat, mediumPrice, largePrice, icon, image: image||'images/bobasip-logo.png', cat };
        saveCustomProducts(custom);
        form.reset();
        const catSel = form.querySelector('#prodCategory'); if(catSel) catSel.value = cat;
        const imgInputR = form.querySelector('#prodImage');
        const fileInputR = form.querySelector('#prodImageFile');
        const previewR = form.querySelector('#prodImagePreview');
        const nameElR = form.querySelector('#prodImageName');
        if(imgInputR) imgInputR.value = '';
        if(fileInputR) fileInputR.value = '';
        if(previewR){ previewR.src=''; previewR.classList.add('hidden'); }
        if(nameElR){ nameElR.textContent=''; }
        renderAdminProducts();
        showLoadingSuccess('Product added', null, {loadingMessage:'Adding product…', successMessage:'Product added'});
      } finally {
        if(submitBtn){ submitBtn.disabled = false; submitBtn.removeAttribute('aria-busy'); }
      }
    });
  }
  renderAdminProducts();
}

function isAppShellPage(){ return !!document.querySelector('body > aside') && !!document.querySelector('body > main'); }

const ROUTE = {'':'welcome','/':'welcome','index':'welcome','welcome':'welcome','login':'login','signup':'signup','forgot':'forgot','home':'home','menu':'menu','cart':'cart','checkout':'checkout','confirmation':'confirmation','track':'track','profile':'profile','orders':'orders','addresses':'addresses','payments':'payments','notifications':'notifications','settings':'settings','admin':'admin'};
const PATH_FOR = {welcome:'welcome.html',login:'login.html',signup:'signup.html',forgot:'forgot.html',home:'home.html',menu:'menu.html',cart:'cart.html',checkout:'checkout.html',confirmation:'confirmation.html',track:'track.html',profile:'profile.html',orders:'orders.html',addresses:'addresses.html',payments:'payments.html',notifications:'notifications.html',settings:'settings.html',admin:'admin.html'};
function pageFromPath(){ const p=(location.pathname||'/').replace(/\/+$/,'').split('/').pop().replace(/\.html$/i,''); return ROUTE[p]||ROUTE['/'+p]|| (p===''?'welcome':null); }
function go(page){
  page = (page||'welcome').replace(/\.html$/i,'').replace(/^\//,'');
  if(page==='index'||page==='') page='welcome';
  navigateTo(ROUTE[page]||page);
}

function clearTransientUi(){
  if(window._lsTimers){ window._lsTimers.forEach(clearTimeout); window._lsTimers=[]; }
  document.querySelectorAll('.ls-overlay').forEach(el=>el.remove());
}

async function navigateTo(page, noPush, hash){
  page = (page||'welcome').replace(/\.html$/i,'').replace(/^\//,'');
  if(page==='index') page='welcome';
  const route = ROUTE[page]||page;
  const path = PATH_FOR[route] || ('/'+route);
  const url = path + (hash ? '#'+hash : '');
  const currentRoute = (document.body && document.body.dataset.page) || pageFromPath();
  const currentHash = (location.hash||'').replace(/^#/, '');
  if(route === currentRoute && !noPush && (!hash || currentHash === hash)){
    if(hash && document.body && document.body.dataset.page === 'admin' && window.__adminApplyView){
      try{ window.__adminApplyView(); }catch(e){ console.error(e); }
    }
    window.scrollTo({top:0,left:0,behavior:'auto'});
    return;
  }
  const navId = ++window.__navSeq || (window.__navSeq = 1);
  clearTransientUi();
  try{
    const res = await fetch(path, {credentials:'same-origin'});
    if(!res.ok){ window.location.href = url; return; }
    const html = await res.text();
    const doc = new DOMParser().parseFromString(html,'text/html');
    if(!doc.body){ window.location.href = url; return; }
    if(window.__navSeq !== navId) return;
    const currentAdminSidebar = document.querySelector('body > aside[data-admin-sidebar]');
    const targetIsAdminShell = route === 'admin' || route === 'notifications' || route === 'settings';
    const preserveAdminSidebar = !!currentAdminSidebar && targetIsAdminShell;
    const preservedSidebar = preserveAdminSidebar ? currentAdminSidebar : null;
    if(preservedSidebar){
      preservedSidebar.remove();
      closeAdminSidebar();
      Array.from(doc.body.children).forEach(child=>{ if(child.tagName === 'ASIDE') child.remove(); });
    }
    try{ if(noPush) history.replaceState({page:route},'',url); else history.pushState({page:route},'',url); }catch(e){}
    document.body.className = doc.body.className;
    document.body.dataset.page = doc.body.dataset.page || route;
    document.body.innerHTML = doc.body.innerHTML;
    if(preservedSidebar){
      const targetMain = document.querySelector('body > main');
      if(targetMain) document.body.insertBefore(preservedSidebar, targetMain);
      else document.body.prepend(preservedSidebar);
      document.body.classList.add('user-shell-page', 'admin-shell-page');
    }
    document.title = doc.title || document.title;
    renderNav(document.body.dataset.page);
    try{ await initPage(document.body.dataset.page); }catch(e){ console.error(e); }
    bindGlobalDelegates();
    initMobileSidebar();
    refreshTranslations();
    window.scrollTo({top:0,left:0,behavior:'auto'});
  }catch(e){ if(window.__navSeq === navId) window.location.href = url; }
}

function initMobileSidebar(){
  const sidebar = document.querySelector('body > aside') || document.querySelector('aside');
  const toggle = document.querySelector('#menuToggle');
  if(toggle){ toggle.style.display='none'; toggle.classList.add('hidden'); }
  const isMobile = window.innerWidth < 768;
  if(sidebar && sidebar.hasAttribute('data-admin-sidebar')){
    const bottom = document.querySelector('.bottom-nav');
    if(bottom) bottom.remove();
  } else if(sidebar){
    if(isMobile){
      sidebar.classList.add('hidden');
      sidebar.classList.remove('fixed','inset-0','z-50','w-full','max-w-[280px]');
    } else {
      sidebar.classList.remove('hidden','fixed','inset-0','z-50','w-full','max-w-[280px]');
      const bottom = document.querySelector('.bottom-nav');
      if(bottom) bottom.remove();
    }
  } else {
    const bottom = document.querySelector('.bottom-nav');
    if(bottom) bottom.remove();
  }
  if(!document._mnavResize){
    document._mnavResize = true;
    let t = 0;
    window.addEventListener('resize', ()=>{
      clearTimeout(t);
      t = setTimeout(()=>{
        initMobileSidebar();
        try{ renderNav(document.body.dataset.page||''); }catch(e){}
        if(window.lucide) lucide.createIcons();
      }, 100);
    }, {passive:true});
  }
}

function bindSidebarMobile(){ initMobileSidebar(); }


function bindGlobalDelegates(){
  document.querySelectorAll('[data-logout]').forEach(b=>{
    if(b._bound) return; b._bound=true;
    b.addEventListener('click',()=>{
      const u=getUser();
      const doLogout=async ()=>{ try{ await supabaseSignOut(); }catch(e){} try{ cleanupSupabaseRealtime(); }catch(e){} localStorage.removeItem(USER_KEY); showLoadingSuccess('Logging out', '/login'); };
      if(u&&u.role==='admin'){
        showConfirm({title:'Log out?', message:'Are you sure you want to log out of the admin panel?', confirmText:'Log out', cancelText:'Cancel', onConfirm:doLogout});
        return;
      }
      doLogout();
    });
  });
  const pr = document.querySelector('#printReceiptBtn');
  if(pr && !pr._bound){ pr._bound=true; pr.addEventListener('click', ()=>printReceipt()); }
}

function initSpaNav(){
  if(document._spaNav) return; document._spaNav=true;
  document.addEventListener('click', (e)=>{
    const a = e.target.closest('a[href]'); if(!a) return;
    if(e.defaultPrevented||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||a.target==='_blank') return;
    const href = (a.getAttribute('href')||'').trim();
    if(!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return;
    if(/^https?:/i.test(href) && !href.startsWith(location.origin)) return;
    const raw = href.replace(location.origin,'');
    const hashIndex = raw.indexOf('#');
    const hash = hashIndex >= 0 ? raw.slice(hashIndex+1) : '';
    let p = raw.split('?')[0].split('#')[0];
    if(p.startsWith('/')) p=p.slice(1);
    p = p.replace(/\.html$/i,'');
    const target = (p===''||p==='index') ? 'welcome' : (ROUTE[p]||p);
    if(target && (ROUTE[target]||ROUTE[p]||PATH_FOR[target]||PATH_FOR[p]||p==='')){
      e.preventDefault();
      navigateTo(target, false, hash);
    }
  });
  window.addEventListener('popstate', ()=>{
    const page = pageFromPath() || 'welcome';
    const hash = (location.hash||'').replace(/^#/, '');
    if(document.body && document.body.dataset.page === 'admin' && page === 'admin'){
      if(window.__adminApplyView){ try{ window.__adminApplyView(); }catch(e){ console.error(e); } }
      return;
    }
    navigateTo(page, true, hash);
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  if(window.lucide) lucide.createIcons();
  const savedTheme = localStorage.getItem(THEME_KEY) || 'light';

  applyTheme(savedTheme);
  const page = pageFromPath() || document.body.dataset.page || 'welcome'; document.body.dataset.page = page;
  (async()=>{ try { await initPage(page); } catch(e){ console.error('initPage error', e); } })();
  try{ 
    const path = location.pathname || '/';
    history.replaceState({page},'', path + location.hash);
  }catch(e){}

  bindGlobalDelegates();
  initMobileSidebar();
  initSpaNav();
  try{ applyTranslations(); if(window.lucide) lucide.createIcons(); }catch(e){}
  if(!document._pwDelegate){
    document._pwDelegate=true;
    document.addEventListener('click',(e)=>{
      const btn=e.target.closest('[data-toggle-pw]'); if(!btn) return;
      e.preventDefault();
      const inp = document.getElementById(btn.dataset.togglePw) || btn.closest('.relative')?.querySelector('input');
      if(!inp) return;
      inp.type = inp.type==='password'?'text':'password';
      const show = inp.type==='text';
      btn.innerHTML = `<i data-lucide="${show?'eye-off':'eye'}" class="w-6 h-6"></i>`;
      if(window.lucide) lucide.createIcons({root: btn});
    });
  }
  startGreetingClock();
  migrateOrders();
});

// Advance order statuses on a timer so a tracked order keeps moving
// even while the customer browses other pages.
function startOrderSimulation(){
  if(document._simTimer) clearInterval(document._simTimer);
  simRunAll();
  document._simTimer = setInterval(()=>{ simRunAll(); }, 1000);
}

// Keep the greeting live: if the page stays open across noon/evening,
// the greeting and home banner update without needing a reload.
function startGreetingClock(){
  if(document._greetClock) clearInterval(document._greetClock);
  const apply = ()=>{
    const el = document.querySelector('[data-greet-text]');
    if(el){
      const en = greetingFor();
      if(el.dataset.i18nEn !== en){
        el.dataset.i18nEn = en;
        const isFil = loadJSON(SETTINGS_KEY, {lang:'English'}).lang === 'Filipino';
        i18nSet(el, isFil);
      }
    }
    // The banner follows the same time buckets.
    const titleEl = document.querySelector('[data-banner-title]');
    if(titleEl){
      const key = greetingFor();
      const c = BANNER_CONTENT[key];
      if(c && titleEl.textContent.trim() !== c.title){
        titleEl.textContent = c.title;
        const textEl = document.querySelector('[data-banner-text]');
        if(textEl) textEl.textContent = c.text;
      }
    }
  };
  apply();
  document._greetClock = setInterval(apply, 30000);
}

function normalizeStatus(s){ s=s||'Pending Approval'; const map={'Pending':'Pending Approval','Out for delivery':'Out for Delivery'}; return map[s]||s; }
function migrateOrders(){ try{ const arr=loadJSON(ORDERS_KEY,[]); let changed=false; arr.forEach(o=>{ const ns=normalizeStatus(o.status); if(ns!==o.status){o.status=ns;changed=true;} }); if(changed) saveJSON(ORDERS_KEY,arr); }catch(e){} }
function loadJSON(k, fb){ try { return JSON.parse(localStorage.getItem(k)) || fb; } catch(e){ return fb; } }
function saveJSON(k, v){ localStorage.setItem(k, JSON.stringify(v)); }

function initOrders(){
  const u=getUser(); if(u && u.role==='admin'){ navigateTo('admin'); return; }
  const list = document.querySelector('#ordersList');
  if(!list) return;
  try{ if(typeof syncOrdersFromSupabase==='function') syncOrdersFromSupabase(()=>{ try{ render(); }catch(e){} }); }catch(e){}
  const qEl = document.querySelector('#ordersSearch');
  const sortEl = document.querySelector('#ordersSort');
  const base = ordersForUser();
  function render(){
    let orders = ordersForUser();
    const q = (qEl?.value||'').toLowerCase().trim();
    if(q) orders = orders.filter(o => (o.ref||'').toLowerCase().includes(q) || (o.payment||'').toLowerCase().includes(q) || (o.userName||'').toLowerCase().includes(q) || (o.userEmail||'').toLowerCase().includes(q) || (o.items||[]).some(it=> (it.name||'').toLowerCase().includes(q)));
    const s = sortEl?.value || 'newest';
    if(s==='oldest') orders = orders.slice().reverse();
    if(s==='high') orders = orders.slice().sort((a,b)=>(b.total||0)-(a.total||0));
    const all = ordersForUser();
    const countEl = document.querySelector('#ordersStatCount'); if(countEl) countEl.textContent = all.length;
    const totEl = document.querySelector('#ordersStatTotal'); if(totEl) totEl.textContent = money(all.reduce((n,o)=>n+(o.total||0),0));
    const lastEl = document.querySelector('#ordersStatLast'); if(lastEl) lastEl.textContent = all[0]?.ref ? `${all[0].ref} · ${all[0].date||''}` : '—';
    if(!orders.length){
      list.innerHTML = `<div class="text-center py-12 text-ink-muted font-semibold"><i data-lucide="receipt" class="w-12 h-12 mx-auto mb-2 opacity-50"></i><br/>${all.length?'No matching orders.':'No orders yet.'}<br/><a href="menu.html" class="inline-block mt-3 px-5 py-2.5 rounded-xl bg-gradient-to-br from-accent to-brown text-white font-extrabold">Browse menu</a></div>`;
      if(window.lucide) lucide.createIcons(); return;
    }
    list.innerHTML = orders.map((o)=>`
      <div class="bg-white/70 backdrop-blur border border-white/60 rounded-2xl p-4 shadow-card text-left">
        <div class="flex items-start justify-between gap-2 mb-2"><div><span class="font-extrabold">${esc(o.ref)}</span><div class="text-[11px] text-ink-muted font-semibold mt-0.5">${esc(o.date||'')} · ${esc(o.payment||'Card')}</div></div><div class="flex items-center gap-2 flex-wrap justify-end">${statusBadge(o,true)}<button type="button" data-print="${esc(o.ref)}" class="px-2.5 py-1 rounded-lg bg-brown/10 text-brown font-bold text-xs hover:bg-brown/20 transition">Print Receipt</button><button type="button" data-reorder="${esc(o.ref)}" class="px-2.5 py-1 rounded-lg bg-brown/10 text-brown font-bold text-xs hover:bg-brown/20 transition">Reorder</button><button type="button" data-track="${esc(o.ref)}" class="px-2.5 py-1 rounded-lg bg-accent/10 text-accent font-bold text-xs hover:bg-accent/20 transition">Track</button><button type="button" data-delorder="${esc(o.ref)}" class="px-2.5 py-1 rounded-lg bg-red-50 text-red-600 font-bold text-xs hover:bg-red-100 transition">Delete</button></div></div>
        <div class="flex flex-wrap gap-2 mt-2">${(o.items||[]).map(it=>`<span class="inline-flex items-center gap-2.5 bg-white rounded-xl pl-1 pr-3 py-1 text-xs font-bold text-ink-soft dark:bg-cream-2"><span class="rounded-lg overflow-hidden bg-white flex items-center justify-center flex-shrink-0 dark:bg-cream-2" style="width:54px;height:54px">${itemThumb(it)}</span><span>${esc(it.name)} <span class="text-ink-muted font-semibold">×${it.qty}</span></span></span>`).join('')}</div>
        <div class="flex items-center justify-between mt-3"><span class="text-xs text-ink-muted font-semibold">${(o.items||[]).reduce((n,i)=>n+(i.qty||0),0)} item(s)</span><span class="font-extrabold text-accent">${money(o.total||0)}</span></div>
      </div>
    `).join('');
    list.querySelectorAll('[data-delorder]').forEach(b=>b.addEventListener('click',()=>{
      if(document.querySelector('.ls-overlay')) return;
      const ref=b.dataset.delorder;
      const confirmDel = ()=>{
        let arr=loadJSON(ORDERS_KEY,[]);
        arr=arr.map(x=>x.ref===ref?{...x,hiddenByUser:true}:x); saveJSON(ORDERS_KEY,arr);
        removeLastOrder(ref);
        render();
        showLoadingSuccess('Order deleted', null, {loadingMessage:'Deleting order…', successMessage:'Order deleted'});
      };
      const doDelete = ()=>{
        if(document.querySelector('.ls-overlay')) return;
        confirmDel();
      };
      const overlay = document.createElement('div');
      overlay.className = 'ls-overlay fixed inset-0 z-[90] flex items-center justify-center bg-black/50 backdrop-blur-sm';
      overlay.innerHTML = `
        <div class="relative w-[min(90vw,380px)] rounded-3xl bg-white dark:bg-cream-2 shadow-soft overflow-hidden text-center">
          <div class="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-red-50/80"></div>
          <div class="absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-red-50/60"></div>
          <div class="relative px-6 pt-8 pb-6">
            <div class="mx-auto w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-red-500">
              <i data-lucide="trash-2" class="w-8 h-8"></i>
            </div>
            <div class="mt-4 font-display text-xl font-extrabold text-ink">Delete Order</div>
            <div class="mt-1 text-sm text-ink-muted font-semibold">Are you sure you want to delete order <span class="font-extrabold text-ink">${ref}</span>? This action cannot be undone.</div>
            <div class="mt-6 flex gap-2">
              <button type="button" class="ls-cancel flex-1 px-5 py-2.5 rounded-xl bg-brown/8 text-brown font-extrabold hover:bg-brown/15 transition">Cancel</button>
              <button type="button" class="ls-confirm flex-1 px-5 py-2.5 rounded-xl bg-red-500 text-white font-extrabold hover:brightness-95 transition">Delete</button>
            </div>
          </div>
        </div>`;
      document.body.appendChild(overlay);
      if(window.lucide) lucide.createIcons({root: overlay});
      overlay.querySelector('.ls-cancel').addEventListener('click', ()=>overlay.remove());
      overlay.querySelector('.ls-confirm').addEventListener('click', ()=>{ overlay.remove(); doDelete(); });
    }));
    list.querySelectorAll('[data-reorder]').forEach(b=>b.addEventListener('click',()=>{
      const ref=b.dataset.reorder; const o=loadJSON(ORDERS_KEY,[]).find(x=>x.ref===ref); if(!o) return;
      if(document.querySelector('.ls-overlay')) return;
      const cart = getCart();
      (o.items||[]).forEach(it=>{
        const size = it.size||'Medium';
        const incoming = {id:it.id, name:it.name, price:Number(it.price)||0, icon:it.icon, image:it.image, size, qty:Number(it.qty)||1, sugar:it.sugar, addons:it.addons||[]};
        const existing = cart.find(item=>lineKey(item)===lineKey(incoming));
        if(existing) existing.qty += incoming.qty;
        else cart.push(incoming);
      });
      saveCart(cart);
      showLoadingSuccess('Items added to cart', 'cart', {loadingMessage:'Adding items to cart…', successMessage:'Items added to cart'});
    }));
    list.querySelectorAll('[data-track]').forEach(b=>b.addEventListener('click',()=>{ const o=loadJSON(ORDERS_KEY,[]).find(x=>x.ref===b.dataset.track); const u=getUser()||{}; if(o && (u.role==='admin' || o.userEmail===u.email)) saveLastOrder(o); navigateTo('track'); }));
    list.querySelectorAll('[data-print]').forEach(b=>b.addEventListener('click',()=>{ printReceipt(b.dataset.print); }));
    list.querySelectorAll('[data-cancel]').forEach(b=>b.addEventListener('click',()=>{
      showConfirm({title:'Cancel Order', message:'Cancel this order? This cannot be undone.', confirmText:'Cancel order', cancelText:'Keep order', danger:true, onConfirm:()=>{ const arr=loadJSON(ORDERS_KEY,[]); const o=arr.find(x=>x.ref===b.dataset.cancel); if(o&&(o.status||'Pending Approval')==='Pending Approval'){ o.status='Cancelled'; o.statusUpdatedAt=Date.now(); saveJSON(ORDERS_KEY,arr); notifyAdminOrder(o, {title:'Order cancelled', msg:`${o.userName||o.userEmail||'A customer'} cancelled order ${o.ref}.`, ref:o.ref}, {eventKey:'admin-order-cancelled:'+o.ref}); render(); toast('Order cancelled'); } }});
    }));
    if(window.lucide) lucide.createIcons();
  }
  if(qEl && !qEl._bound){ qEl._bound=true; qEl.addEventListener('input', render); }
  if(sortEl && !sortEl._bound){ sortEl._bound=true; sortEl.addEventListener('change', render); }
  render();
}

function initAddresses(){
  const list = document.querySelector('#addressesList');
  if(!list) return;
  let addrs = loadJSON(addrKey(), []);
  function render(){
    const cEl=document.querySelector('#addrStatCount'); if(cEl) cEl.textContent=addrs.length;
    const dEl=document.querySelector('#addrStatDefault'); if(dEl) dEl.textContent=(addrs.find(a=>a.def)||{}).label||'—';
    if(!addrs.length){ list.innerHTML='<div class="text-center py-10 text-ink-muted font-semibold">No saved addresses yet.</div>'; }
    else list.innerHTML = addrs.map((a,i)=>`
      <div class="bg-white/70 backdrop-blur border border-white/60 rounded-2xl p-4 shadow-card text-left">
        <div class="flex items-center justify-between mb-1"><span class="font-extrabold">${esc(a.label)}</span>${a.def?'<span class="inline-flex px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-accent/15 text-accent">DEFAULT</span>':''}</div>
        <div class="text-sm font-semibold text-ink-soft">${esc(a.value)}</div>
        <div class="flex flex-wrap gap-2 mt-3">
          <button type="button" data-edit="${i}" class="px-3 py-1.5 rounded-lg bg-brown/10 text-brown font-bold text-xs hover:bg-brown/20 transition">Edit</button>
          <button type="button" data-use="${i}" class="px-3 py-1.5 rounded-lg bg-accent/10 text-accent font-bold text-xs hover:bg-accent/20 transition">Use for checkout</button>
          <button type="button" data-del="${i}" class="px-3 py-1.5 rounded-lg bg-red-50 text-red-600 font-bold text-xs hover:bg-red-100 transition">Remove</button>
          ${!a.def?`<button type="button" data-def="${i}" class="px-3 py-1.5 rounded-lg bg-brown/10 text-brown font-bold text-xs hover:bg-brown/20 transition">Set default</button>`:''}
        </div>
      </div>
    `).join('');
    list.querySelectorAll('[data-del]').forEach(b=>b.addEventListener('click',()=>{
      const i=+b.dataset.del; showConfirm({title:'Remove address?', message:'This address will be removed from your account.', confirmText:'Remove', danger:true, onConfirm:()=>{ addrs.splice(i,1); if(addrs.length && !addrs.some(a=>a.def)) addrs[0].def=true; saveJSON(addrKey(),addrs); render(); showLoadingSuccess('Address removed', null, {loadingMessage:'Removing address…', successMessage:'Address removed'}); }});
    }));
    list.querySelectorAll('[data-edit]').forEach(b=>b.addEventListener('click',()=>{
      const i=+b.dataset.edit; showConfirm({title:'Edit address', message:'Update the delivery address.', confirmText:'Save', onSubmit:(nv)=>{ if(nv && nv.trim()){ addrs[i].value=nv.trim(); saveJSON(addrKey(),addrs); render(); toast('Address updated'); } }, initialValue:addrs[i].value||''});
    }));
    list.querySelectorAll('[data-use]').forEach(b=>b.addEventListener('click',()=>{ localStorage.setItem(selectedAddrKey(), addrs[+b.dataset.use].value); toast('Address selected for checkout'); }));
    list.querySelectorAll('[data-def]').forEach(b=>b.addEventListener('click',()=>{ const i=+b.dataset.def; addrs.forEach((a,j)=>a.def=(j===i)); saveJSON(addrKey(),addrs); render(); toast('Default updated'); }));
    if(window.lucide) lucide.createIcons();
  }
  render();
  const addBtn = document.querySelector('#addAddressBtn') || document.querySelector('#addAddr');
  if(addBtn && !addBtn._bound){
    addBtn._bound=true;
    addBtn.addEventListener('click',()=>{
      const old = document.querySelector('#addrModal'); if(old) old.remove();
      const modal = document.createElement('div');
      modal.id = 'addrModal';
      modal.className = 'fixed inset-0 z-[70] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4';
      modal.innerHTML = `
        <div class="w-full max-w-md bg-white dark:bg-cream-2 border border-white/60 rounded-2xl p-5 shadow-card text-left">
          <h3 class="font-display text-lg font-extrabold mb-3">Add new address</h3>
          <div class="space-y-3">
            <div><label class="block text-xs font-extrabold tracking-wide text-ink-soft mb-1">LABEL</label>
              <input id="addrLabel" type="text" placeholder="e.g. Home, Work" class="w-full px-4 py-2.5 rounded-xl border border-ink/15 bg-white dark:bg-cream-2 text-ink font-semibold text-sm" />
            </div>
            <div><label class="block text-xs font-extrabold tracking-wide text-ink-soft mb-1">ADDRESS</label>
              <textarea id="addrValue" rows="3" placeholder="Full address" class="w-full px-4 py-2.5 rounded-xl border border-ink/15 bg-white dark:bg-cream-2 text-ink font-semibold text-sm"></textarea>
            </div>
          </div>
          <div class="flex gap-2 mt-4">
            <button type="button" id="cancelAddr" class="flex-1 px-4 py-2.5 rounded-xl bg-brown/8 text-brown font-extrabold text-sm hover:bg-brown/15 transition">Cancel</button>
            <button type="button" id="confirmAddr" class="flex-1 px-4 py-2.5 rounded-xl bg-gradient-to-br from-accent to-brown text-white font-extrabold text-sm shadow-soft hover:brightness-105 transition">Add</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
      modal.querySelector('#cancelAddr').addEventListener('click', ()=>modal.remove());
      modal.querySelector('#confirmAddr').addEventListener('click', ()=>{
        if(document.querySelector('.ls-overlay')) return;
        const confirmBtn = modal.querySelector('#confirmAddr');
        if(confirmBtn){ confirmBtn.disabled = true; }
        const label = (modal.querySelector('#addrLabel').value||'').trim() || 'Address';
        const value = (modal.querySelector('#addrValue').value||'').trim();
        if(!value){ if(confirmBtn) confirmBtn.disabled = false; showLoadingFailed('Missing address', {loadingMessage:'Adding address…', loadingSub:'Checking details…', failedMessage:'Missing address', failedSub:'Please enter an address'}); return; }
        addrs.push({label, value, def:addrs.length===0});
        saveJSON(addrKey(),addrs); render(); modal.remove(); showLoadingSuccess('Address added', null, {loadingMessage:'Adding address…', successMessage:'Address added'});
      });
      modal.addEventListener('click', (e)=>{ if(e.target===modal) modal.remove(); });
    });
  }
}

// Built-in payment methods, each with its own brand image.
const DEFAULT_PAYS = [
  {type:'cash',  label:'Cash on delivery', sub:'Pay when you receive',        def:true},
  {type:'card',  label:'Visa Card',        sub:'Pay with your debit or credit card'},
  {type:'gcash', label:'GCash',            sub:'Pay with your GCash wallet'},
];
const PAYS_REMOVED_KEY = 'bobasip_pays_removed';

function initPaymentMethods(manage){
  const user = getUser()||{};
  const adminView = !!manage && user.role === 'admin';
  manage = !!manage;
  const listSel = adminView ? '#adminPaymentMethodsList' : '#paymentsList';
  const storageKey = adminView ? PAYS_KEY : paysKey();
  const list = document.querySelector(listSel);
  if(!list) return;
  let pays = loadJSON(storageKey, null);
  if(!Array.isArray(pays)) pays = null;
  const removed = manage ? loadJSON(PAYS_REMOVED_KEY, []) : [];
  if(!pays){
    pays = DEFAULT_PAYS.map(p=>({...p}));
    saveJSON(storageKey, pays);
  }else if(manage){
    let added = false;
    DEFAULT_PAYS.forEach(d=>{
      const id = d.type+':'+d.label;
      if(removed.includes(id)) return;
      if(!pays.some(p=>p.type===d.type && p.label===d.label)){ pays.push({...d, def:false}); added = true; }
    });
    if(added) saveJSON(storageKey, pays);
  }
  function render(){
    const cEl=document.querySelector('#payStatCount'); if(cEl) cEl.textContent=pays.length;
    const dEl=document.querySelector('#payStatDefault'); if(dEl) dEl.textContent=(pays.find(p=>p.def)||{}).label||'—';
    list.innerHTML = pays.map((p,i)=>`
      <div class="bg-white/70 backdrop-blur border border-white/60 rounded-2xl p-4 shadow-card flex items-center gap-3 text-left">
        ${p.type==='card'?'<img src="images/Visa Card.png" alt="Visa" class="w-12 h-9 object-contain rounded-lg" />':(p.type==='gcash'?'<img src="images/Gcash.png" alt="GCash" class="w-12 h-9 object-contain rounded-lg" />':(p.type==='cash'?'<img src="images/cod.png" alt="Cash" class="w-12 h-9 object-contain rounded-lg" />':'<i data-lucide="wallet" class="w-8 h-8 text-brown"></i>'))}
        <div class="flex-1 min-w-0"><div class="font-extrabold truncate">${p.label}</div><div class="text-xs text-ink-muted font-semibold">${p.sub}</div></div>
        ${p.def?'<span class="inline-flex px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-accent/15 text-accent">DEFAULT</span>':''}
        ${manage ? `<div class="flex gap-1.5">${!p.def?`<button type="button" data-def="${i}" class="px-2.5 py-1.5 rounded-lg bg-brown/10 text-brown font-bold text-xs hover:bg-brown/20 transition">Default</button>`:``}<button type="button" data-del="${i}" class="px-2.5 py-1.5 rounded-lg bg-red-50 text-red-600 font-bold text-xs hover:bg-red-100 transition">Remove</button></div>` : ``}
      </div>
    `).join('');
    list.querySelectorAll('[data-del]').forEach(b=>b.addEventListener('click',()=>{
      const i=+b.dataset.del;
      showConfirm({title:'Remove payment method?', message:'This payment method will be removed.', confirmText:'Remove', danger:true, onConfirm:()=>{
        const gone = pays[i];
        // Remember built-in removals so they don't come back on reload.
        if(gone && DEFAULT_PAYS.some(d=>d.type===gone.type && d.label===gone.label)){
          const rm = loadJSON(PAYS_REMOVED_KEY, []);
          const id = gone.type+':'+gone.label;
          if(!rm.includes(id)){ rm.push(id); saveJSON(PAYS_REMOVED_KEY, rm); }
        }
        pays.splice(i,1);
        if(pays.length && !pays.some(p=>p.def)) pays[0].def=true;
        saveJSON(storageKey, pays);
        render();
        showLoadingSuccess('Removed', null, {loadingMessage:'Removing payment method…', successMessage:'Payment method removed'});
      }});
    }));
    list.querySelectorAll('[data-def]').forEach(b=>b.addEventListener('click',()=>{ const i=+b.dataset.def; pays.forEach((p,j)=>p.def=(j===i)); saveJSON(storageKey,pays); render(); toast('Default updated'); }));
    if(window.lucide) lucide.createIcons();
  }
  render();
  const addBtnSel = adminView ? '#adminAddPaymentBtn' : '#addPaymentBtn';
  const addBtn = document.querySelector(addBtnSel);
  if(addBtn && !addBtn._bound){
    addBtn._bound=true;
    addBtn.addEventListener('click',()=>{
      const old = document.querySelector('#payModal'); if(old) old.remove();
      const modal = document.createElement('div');
      modal.id = 'payModal';
      modal.className = 'fixed inset-0 z-[70] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4';
      modal.innerHTML = `
        <div class="w-full max-w-md bg-white dark:bg-cream-2 border border-white/60 rounded-2xl p-5 shadow-card text-left">
          <h3 class="font-display text-lg font-extrabold mb-3">Add payment method</h3>
          <div class="space-y-3">
            <div><label class="block text-xs font-extrabold tracking-wide text-ink-soft mb-1">TYPE</label>
              <select id="payType" class="w-full px-4 py-2.5 rounded-xl border border-ink/15 bg-white dark:bg-cream-2 text-ink font-semibold text-sm">
                <option value="card">Card</option><option value="gcash">GCash</option><option value="cash">Cash</option>
              </select>
            </div>
            <div><label class="block text-xs font-extrabold tracking-wide text-ink-soft mb-1">LABEL</label>
              <input id="payLabel" type="text" placeholder="e.g. Visa •••• 1234" class="w-full px-4 py-2.5 rounded-xl border border-ink/15 bg-white dark:bg-cream-2 text-ink font-semibold text-sm" />
            </div>
            <div><label class="block text-xs font-extrabold tracking-wide text-ink-soft mb-1">DETAILS</label>
              <input id="paySub" type="text" placeholder="e.g. Expires 12/27" class="w-full px-4 py-2.5 rounded-xl border border-ink/15 bg-white dark:bg-cream-2 text-ink font-semibold text-sm" />
            </div>
          </div>
          <div class="flex gap-2 mt-4">
            <button type="button" id="cancelPay" class="flex-1 px-4 py-2.5 rounded-xl bg-brown/8 text-brown font-extrabold text-sm hover:bg-brown/15 transition">Cancel</button>
            <button type="button" id="confirmPay" class="flex-1 px-4 py-2.5 rounded-xl bg-gradient-to-br from-accent to-brown text-white font-extrabold text-sm shadow-soft hover:brightness-105 transition">Add</button>
          </div>
        </div>`;
      document.body.appendChild(modal);
      modal.querySelector('#cancelPay').addEventListener('click', ()=>modal.remove());
      modal.querySelector('#confirmPay').addEventListener('click', ()=>{
        if(document.querySelector('.ls-overlay')) return;
        const confirmBtn = modal.querySelector('#confirmPay');
        if(confirmBtn) confirmBtn.disabled = true;
        const type = modal.querySelector('#payType').value;
        const labelInput = (modal.querySelector('#payLabel').value||'').trim();
        const subInput = (modal.querySelector('#paySub').value||'').trim();
        if(!labelInput){
          if(confirmBtn) confirmBtn.disabled = false;
          showLoadingFailed('Missing details', {loadingMessage:'Adding payment method…', loadingSub:'Checking details…', failedMessage:'Missing details', failedSub:'Please enter a label for this payment method'});
          return;
        }
        if(type !== 'cash' && !subInput){
          if(confirmBtn) confirmBtn.disabled = false;
          showLoadingFailed('Missing details', {loadingMessage:'Adding payment method…', loadingSub:'Checking details…', failedMessage:'Missing details', failedSub:'Please enter payment details'});
          return;
        }
        const label = labelInput || (type==='card'?'New Card':type==='gcash'?'GCash':'Cash');
        const sub = subInput || 'Added';
        pays.push({type, label, sub, def:pays.length===0});
        saveJSON(storageKey,pays); render(); modal.remove(); showLoadingSuccess('Payment method added', null, {loadingMessage:'Adding payment method…', successMessage:'Payment method added'});
      });
      modal.addEventListener('click', (e)=>{ if(e.target===modal) modal.remove(); });
    });
  }
}

function initPayments(){ initPaymentMethods(true); }
function initAdminPaymentMethods(){ initPaymentMethods(true); }

function notifUserId(u){ u=u||getUser()||{}; return u.id || u.userId || (u.email?String(u.email).trim().toLowerCase():null) || null; }
function notifInboxKey(email){ const u=email||(getUser()||{}).email||'guest'; return 'bobasip_notif_inbox:'+u; }
function getNotifInbox(email){ return loadJSON(notifInboxKey(email), []); }
function saveNotifInbox(email, arr){ saveJSON(notifInboxKey(email), arr); }
function addNotification(email, n){
  if(!email) return null;
  const inbox=getNotifInbox(email);
  if(n && n.eventKey && inbox.some(x=>x && x.eventKey===n.eventKey)) return null;
  const id = (n && n.id) || (Date.now()+Math.floor(Math.random()*1000));
  const createdAt = (n && (n.createdAt || n.created_at)) || Date.now();
  const item = Object.assign({
    id,
    read:false,
    time: (n && (n.time || n.orderDateTime || n.order_date_time || n.date)) || new Date(createdAt).toLocaleString(),
    ref: n && (n.ref || n.orderRef) || null,
    title: n && n.title || 'Notification',
    msg: n && (n.msg || n.message) || '',
    eventKey: n && n.eventKey || null,
    customerName: n && (n.customerName || n.customer_name) || null,
    totalAmount: n && (n.totalAmount != null ? n.totalAmount : n.total_amount != null ? n.total_amount : null),
    orderDateTime: n && (n.orderDateTime || n.order_date_time) || null,
    notificationType: n && (n.notificationType || n.notification_type) || null,
    createdAt
  }, n || {});
  inbox.unshift(item);
  saveNotifInbox(email, inbox);
  try{ if(typeof updateAdminNotifBadges==='function') updateAdminNotifBadges(String(email).toLowerCase()); }catch(e){}
  try{ if(typeof renderNotificationsInboxIfPresent==='function') renderNotificationsInboxIfPresent(String(email).toLowerCase()); }catch(e){}
  try{
    if(window.BroadcastChannel){
      if(!window.__notifBC) window.__notifBC=new BroadcastChannel('bobasip-notifs');
      window.__notifBC.postMessage({type:'notif-updated', email:String(email).toLowerCase()});
    }
  }catch(e){}
  try{ localStorage.setItem('bobasip_notif_ping', JSON.stringify({email:String(email).toLowerCase(), t:Date.now()})); }catch(e){}
  return item;
}

// ===== Notification preferences (per user) =====
function notifPrefsKey(email){ const e=String(email||(getUser()||{}).email||'guest').trim().toLowerCase(); return 'bobasip_notif_prefs:'+e; }
function cleanNotifPrefs(prefs){
  const p = prefs || {};
  return {order: p.order !== false, promo: p.promo !== false};
}
function getNotifPrefs(email){
  const key = notifPrefsKey(email);
  const saved = loadJSON(key, null);
  if(saved && typeof saved==='object') return cleanNotifPrefs(saved);
  // One-time migration from the old shared preference key.
  const legacy = loadJSON(NOTIF_KEY, null);
  if(legacy && typeof legacy==='object'){
    const merged = cleanNotifPrefs(legacy);
    saveJSON(key, merged);
    try{ localStorage.removeItem(NOTIF_KEY); }catch(e){}
    return merged;
  }
  return cleanNotifPrefs(null);
}
function saveNotifPrefs(email, prefs){ saveJSON(notifPrefsKey(email), cleanNotifPrefs(prefs)); }
function notifSeededKey(email){ const e=String(email||(getUser()||{}).email||'guest').trim().toLowerCase(); return 'bobasip_notif_seeded:'+e; }
function notifyOrderUpdate(order, n, opts){
  opts = opts || {};
  if(!order || !order.userEmail) return;
  if(getNotifPrefs(order.userEmail).order) addNotification(order.userEmail, Object.assign({}, n, {eventKey: opts.eventKey||null}));
}
function notifyAdminOrder(order, n, opts){
  opts = opts || {};
  const admins = Object.values(Object.assign({}, typeof ACCOUNTS === 'object' ? ACCOUNTS : {}, loadJSON(ACCOUNTS_KEY, {})))
    .filter(account=>(account.role||'user') === 'admin');
  const base = Object.assign({
    title: n && n.title || 'New order received',
    msg: n && (n.msg || n.message) || '',
    ref: (order && order.ref) || (n && n.ref) || null,
    eventKey: opts.eventKey || null,
    customerName: order ? (order.userName || order.userEmail || 'Customer') : (n && n.customerName) || null,
    totalAmount: order ? Number(order.total||0) : (n && n.totalAmount != null ? n.totalAmount : null),
    orderDateTime: order ? (order.date || null) : (n && n.orderDateTime) || null,
    notificationType: 'admin_new_order'
  }, n || {});
  admins.forEach(admin=>{
    if(admin && admin.email) addNotification(admin.email, Object.assign({}, base));
  });
  try{ if(typeof updateAdminNotifBadges==='function') updateAdminNotifBadges(); }catch(e){}
  // Best-effort server-side DB fanout (idempotent per admin per order) when endpoint is available.
  try{ if(typeof sendAdminOrderNotificationToServer==='function' && order && order.ref) sendAdminOrderNotificationToServer(order); }catch(e){}
}
function notifyPromotion(email, n){
  if(!email) return false;
  if(!getNotifPrefs(email).promo) return false;
  addNotification(email, n);
  return true;
}

function initNotifications(){
  const u=getUser()||{};
  if(u.role==='admin'){
    if(document.body.dataset.page!=='admin'){
      initAdminSidebar('notifications');
      const h=document.querySelector('h1'); if(h) h.textContent='Admin Notifications';
      const s=document.querySelector('main p'); if(s) s.textContent='Order alerts and notification preferences';
    }
    const promo=document.querySelector('[data-notif="promo"]');
    const promoRow=promo?.parentElement;
    if(promoRow) promoRow.style.display='none';
  }
  const toggles = document.querySelectorAll('[data-notif]');
  const email = u.email||'guest';
  let state = getNotifPrefs(email);
  if(u.role==='admin') state.promo = false;
  const legacy = loadJSON('bobasip_notif_inbox', null);
  if(legacy && !loadJSON(notifInboxKey(email), null)){
    saveNotifInbox(email, legacy);
  }
  let inbox = getNotifInbox(email);
  if(!localStorage.getItem(notifSeededKey(email))){
    if(!inbox || !inbox.length){
      const last = u.role === 'admin' ? null : getLastOrder();
      inbox = [
        {id:Date.now()+1, title:'Welcome to BobaSip', msg:'Explore new flavors and place your first order.', time:'Today', read:false},
        ...(last ? [{id:Date.now()+2, title:'Order placed', msg:`Order ${last.ref} was received successfully.`, time:last.date||'Recently', read:false, ref:last.ref}] : []),
      ];
      if(state.promo) inbox.push({id:Date.now()+3, title:'Promo', msg:'Try our featured drinks this week.', time:'This week', read:true});
      saveNotifInbox(email, inbox);
    }
    try{ localStorage.setItem(notifSeededKey(email),'1'); }catch(e){}
  }
  function render(){
    inbox = getNotifInbox(email);
    const en = document.querySelector('#notifStatEnabled'); if(en) en.textContent = Object.values(state).filter(Boolean).length;
    const unreadCount = inbox.filter(n=>!n.read).length;
    const un = document.querySelector('#notifStatUnread'); if(un) un.textContent = unreadCount;
    const box = document.querySelector('#notifInbox');
    if(box){
      if(!inbox.length) box.innerHTML = '<div class="text-center py-10 text-ink-muted font-semibold">Inbox is empty.</div>';
      else box.innerHTML = inbox.map(n=>{
        const isAdminNew = (n.notificationType==='admin_new_order' || (u.role==='admin' && n.ref && /new order/i.test(String(n.title||''))));
        const cname = n.customerName || (isAdminNew ? (String(n.msg||'').split(' placed order ')[0]) : '') || '';
        const total = (n.totalAmount!=null && !isNaN(Number(n.totalAmount))) ? Number(n.totalAmount) : null;
        const when = n.orderDateTime || n.time || '';
        const details = isAdminNew ? `
          <div class="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1 text-[11px] font-semibold text-ink-muted">
            ${n.ref?`<div><span class="text-ink-soft">Order Ref:</span> <span class="text-accent font-extrabold">${esc(n.ref)}</span></div>`:''}
            ${cname?`<div><span class="text-ink-soft">Customer:</span> ${esc(cname)}</div>`:''}
            ${total!=null?`<div><span class="text-ink-soft">Total:</span> ${money(total)}</div>`:''}
            ${when?`<div class="sm:col-span-2"><span class="text-ink-soft">Date &amp; Time:</span> ${esc(String(when))}</div>`:''}
          </div>` : (`${n.ref?`<div class="text-[11px] text-accent font-extrabold mt-1">Order ${esc(n.ref)}</div>`:''}<div class="text-[11px] text-ink-muted font-semibold mt-2">${esc(String(n.time||''))}</div>`);
        return `
        <div class="bg-white/70 dark:bg-cream-2 border border-white/60 rounded-2xl p-4 shadow-card text-left ${n.read?'opacity-80':''}" data-notif-row="${esc(String(n.id))}">
          <div class="flex items-start justify-between gap-2">
            <div class="flex-1 min-w-0">
              <div class="font-extrabold flex items-center gap-2">${n.read?'<span class="inline-block w-2 h-2 rounded-full bg-transparent"></span>':'<span class="inline-block w-2 h-2 rounded-full bg-accent" title="Unread"></span>'}<span>${esc(n.title||'Notification')}</span></div>
              <div class="text-sm font-semibold text-ink-soft mt-1">${esc(n.msg||'')}</div>
              ${details}
            </div>
            <div class="flex gap-1.5 flex-shrink-0 flex-wrap justify-end">
              ${n.ref?`<button type="button" data-openorder="${esc(n.ref)}" data-notif-id="${esc(String(n.id))}" class="px-2.5 py-1.5 rounded-lg bg-accent/10 text-accent font-bold text-xs hover:bg-accent/20 transition">View</button>`:''}
              ${!n.read?`<button type="button" data-read="${esc(String(n.id))}" class="px-2.5 py-1.5 rounded-lg bg-brown/10 text-brown font-bold text-xs hover:bg-brown/20 transition">Mark read</button>`:''}
              <button type="button" data-rmnotif="${esc(String(n.id))}" class="px-2.5 py-1.5 rounded-lg bg-red-50 text-red-600 font-bold text-xs hover:bg-red-100 transition">Delete</button>
            </div>
          </div>
        </div>`;
      }).join('');
      box.querySelectorAll('[data-read]').forEach(b=>b.addEventListener('click',()=>{
        const id=b.dataset.read; const item=inbox.find(n=>String(n.id)===String(id));
        inbox=inbox.map(n=>String(n.id)===String(id)?{...n,read:true}:n); saveNotifInbox(email,inbox); render();
        if(item) markNotificationReadOnServer(item,true);
        updateAdminNotifBadges();
      }));
      box.querySelectorAll('[data-rmnotif]').forEach(b=>b.addEventListener('click',()=>{
        if(document.querySelector('.ls-overlay')) return;
        const id=b.dataset.rmnotif; const item=inbox.find(n=>String(n.id)===String(id));
        inbox=inbox.filter(n=>String(n.id)!==String(id)); saveNotifInbox(email,inbox); render();
        if(item && item.dbId){ try{ (async()=>{ const sb=await getSupabaseClient(); const session=await getSupabaseSession(); if(sb&&session) await sb.from('notifications').delete().eq('id',item.dbId).eq('user_id',session.user.id); })(); }catch(e){} }
        showLoadingSuccess('Deleted', null, {loadingMessage:'Deleting notification.', successMessage:'Notification deleted'});
        updateAdminNotifBadges();
      }));
      box.querySelectorAll('[data-openorder]').forEach(b=>b.addEventListener('click',async ()=>{
        const ref = String(b.dataset.openorder||'').trim(); const nid=b.dataset.notifId;
        let item=inbox.find(n=>String(n.id)===String(nid));
        if(!ref){ toast('Order reference not found for this notification'); return; }
        inbox=getNotifInbox(email);
        item=inbox.find(n=>String(n.id)===String(nid));
        if(item && !item.read){
          inbox=inbox.map(n=>String(n.id)===String(nid)?{...n,read:true}:n);
          saveNotifInbox(email,inbox);
          try{ markNotificationReadOnServer(item,true); }catch(e){}
        }
        try{ if(typeof updateAdminNotifBadges==='function') updateAdminNotifBadges(); }catch(e){}
        try{ render(); }catch(e){}
        const cu=getUser()||{};
        if(cu.role==='admin'){
          try{ localStorage.setItem('bobasip_admin_order_ref', ref); localStorage.setItem('bobasip_admin_highlight_order', ref); }catch(e){}
          if(document.body.dataset.page==='admin'){
            try{
              if(window.__adminGoView) window.__adminGoView('orders');
              else { location.hash='orders'; if(window.__adminApplyView) window.__adminApplyView(); }
            }catch(e){ try{ location.hash='orders'; if(window.__adminApplyView) window.__adminApplyView(); }catch(_){} }
            try{ applyAdminOrderLocate(ref, {delay:80}); }catch(e){ console.error(e); toast('Could not open order '+ref); }
          } else {
            navigateTo('admin', false, 'orders');
          }
          return;
        }
        const o=loadJSON(ORDERS_KEY,[]).find(x=>x && String(x.ref||'')===ref);
        if(o && o.userEmail===cu.email){ saveLastOrder(o); navigateTo('track'); } else navigateTo('orders');
      }));
    }
    if(window.lucide) lucide.createIcons();
    updateAdminNotifBadges();
  }
  window.__renderNotifInbox = render;
  toggles.forEach(t=>{
    const key = t.dataset.notif;
    const apply=()=>{ const on=!!state[key]; t.classList.toggle('bg-accent', on); t.classList.toggle('bg-ink/20', !on); const knob=t.querySelector('div'); if(knob){ knob.classList.toggle('right-0.5', on); knob.classList.toggle('left-0.5', !on); } };
    apply();
    if(!t._bound){
      t._bound=true;
      t.addEventListener('click',()=>{
        state = getNotifPrefs(email);
        state[key]=!state[key];
        saveNotifPrefs(email, state);
        apply();
        render();
        toast(state[key]?'Enabled':'Disabled');
      });
    }
  });
  const mark=document.querySelector('#markAllRead'); if(mark && !mark._bound){ mark._bound=true; mark.addEventListener('click',()=>{ inbox=getNotifInbox(email).map(n=>({...n,read:true})); saveNotifInbox(email,inbox); render(); try{ if(typeof markAllNotificationsReadOnServer==='function') markAllNotificationsReadOnServer(); }catch(e){} try{ if(typeof updateAdminNotifBadges==='function') updateAdminNotifBadges(); }catch(e){} toast('All marked read'); }); }
  const clr=document.querySelector('#clearNotifs'); if(clr && !clr._bound){ clr._bound=true; clr.addEventListener('click',()=>{ showConfirm({title:'Clear inbox?', message:'All notifications in your inbox will be removed.', confirmText:'Clear inbox', danger:true, onConfirm:()=>{ saveNotifInbox(email,[]); render(); try{ if(typeof clearNotificationsOnServer==='function') clearNotificationsOnServer(); }catch(e){} try{ if(typeof updateAdminNotifBadges==='function') updateAdminNotifBadges(); }catch(e){} showLoadingSuccess('Inbox cleared', null, {loadingMessage:'Clearing inbox.', successMessage:'Inbox cleared'}); }}); }); }
  if(u.role==='admin'){
    try{ if(typeof initAdminNotificationCenter==='function') initAdminNotificationCenter(); }catch(e){}
    try{ if(typeof hasSupabaseConfig==='function' && hasSupabaseConfig() && typeof syncNotificationsFromServer==='function') syncNotificationsFromServer(true); }catch(e){}
  } else {
    try{ if(typeof initCustomerRealtime==='function') initCustomerRealtime(); }catch(e){}
    try{ if(typeof hasSupabaseConfig==='function' && hasSupabaseConfig() && typeof syncNotificationsFromServer==='function') syncNotificationsFromServer(true); }catch(e){}
  }
  render();
  try{ if(typeof updateAdminNotifBadges==='function') updateAdminNotifBadges(); }catch(e){}
}



// ===== Supabase integration (graceful fallback to localStorage when not configured) =====
function isSupabaseEnabled(){ try{ return typeof hasSupabaseConfig==='function' && hasSupabaseConfig(); }catch(e){ return false; } }
function sbUserToLocal(user, profile){
  if(!user) return null;
  // Role is sourced from public.profiles (DB) when available; never from client-writable metadata.
  const role = (profile && profile.role) ? profile.role : 'customer';
  const name = (profile && (profile.full_name || profile.name)) || (user.user_metadata && (user.user_metadata.full_name || user.user_metadata.name)) || (user.email ? String(user.email).split('@')[0] : 'User');
  const email = (profile && profile.email) || user.email || '';
  const avatar = (profile && profile.avatar) || (role==='admin' ? 'images/admin.png' : 'images/user.png');
  const localRole = role === 'admin' ? 'admin' : 'user';
  return { id: user.id, name, email, role: localRole, avatar, phone: (profile && profile.phone) || null, supabase:true };
}
async function getSupabaseProfile(userId){
  try{
    if(!isSupabaseEnabled()) return null;
    const sb = await getSupabaseClient(); if(!sb) return null;
    const uid = userId || (await getSupabaseSession())?.user?.id; if(!uid) return null;
    const { data, error } = await sb.from('profiles').select('*').eq('id', uid).maybeSingle();
    if(error) return null; return data || null;
  }catch(e){ return null; }
}
async function ensureSupabaseSessionUser(){
  try{
    if(!isSupabaseEnabled()) return null;
    const session = await getSupabaseSession(); if(!session || !session.user) return null;
    const profile = await getSupabaseProfile(session.user.id);
    const local = sbUserToLocal(session.user, profile);
    if(local) saveUser(local);
    return local;
  }catch(e){ return null; }
}
async function syncLocalUserFromSupabase(){
  if(!isSupabaseEnabled()) return getUser();
  try{
    const session = await getSupabaseSession();
    if(session && session.user) return await ensureSupabaseSessionUser();
    const u=getUser(); if(u && u.supabase){ try{ localStorage.removeItem(USER_KEY); }catch(e){} return null; }
    return u;
  }catch(e){ return getUser(); }
}
function initSupabaseAuthListener(){
  try{
    if(window.__sbAuthBound || !isSupabaseEnabled()) return;
    window.__sbAuthBound = true;
    (async()=>{
      try{
        const sb = await getSupabaseClient(); if(!sb || !sb.auth) return;
        sb.auth.onAuthStateChange(async (event, session)=>{
          try{
            if(event==='SIGNED_OUT' || !session){
              const u=getUser(); if(u && u.supabase){ try{ localStorage.removeItem(USER_KEY); }catch(e){} }
              try{ cleanupSupabaseRealtime(); }catch(e){}
              return;
            }
            if(session && session.user){
              const profile = await getSupabaseProfile(session.user.id);
              const local = sbUserToLocal(session.user, profile);
              if(local) saveUser(local);
              try{ if(local && local.role!=='admin') initCustomerRealtime(); }catch(e){}
              try{ if(local && local.role==='admin') initAdminNotificationCenter(); }catch(e){}
            }
          }catch(e){}
        });
      }catch(e){}
    })();
  }catch(e){}
}
async function supabaseSignOut(){
  try{ if(isSupabaseEnabled()){ const sb=await getSupabaseClient(); if(sb&&sb.auth) await sb.auth.signOut(); } }catch(e){ console.warn('Supabase signOut failed', e); }
}

function mapDbOrderToLocal(row){
  if(!row) return null;
  let items = row.items;
  if(typeof items === 'string'){ try{ items = JSON.parse(items); }catch(e){ items = []; } }
  if(!Array.isArray(items)) items = [];
  const createdAt = row.created_at ? (new Date(row.created_at)).getTime() : (row.createdAt || Date.now());
  const ref = row.order_number || row.ref || row.orderNo || '';
  const o = {
    id: row.id || null,
    dbId: row.id || null,
    ref,
    order_number: ref,
    userId: row.user_id || row.userId || '',
    userEmail: row.customer_email || row.user_email || row.userEmail || '',
    userName: row.customer_name || row.user_name || row.userName || 'Customer',
    customer: { id: row.user_id || '', email: row.customer_email || row.user_email || '', name: row.customer_name || row.user_name || 'Customer' },
    items: items.map(it=>({ id:it.product_id||it.id, name:it.product_name||it.name, price:Number(it.price||0), qty:Number(it.quantity!=null?it.quantity:it.qty||1), size:it.size||'', sugar:it.sugar_level||it.sugar||'', addons:it.toppings||it.addons||[], image:it.image||null, icon:it.icon||'cup-soda' })),
    subtotal: Number(row.subtotal||0),
    delivery: Number(row.delivery_fee!=null?row.delivery_fee:row.delivery||0),
    total: Number(row.total||0),
    payment: row.payment_method || row.payment || '',
    address: row.delivery_address || row.address || '',
    notes: row.notes || '',
    status: row.status || 'Pending Approval',
    rejectionReason: row.rejection_reason || row.rejectionReason || '',
    date: row.created_at ? new Date(row.created_at).toLocaleString() : (row.date||''),
    createdAt,
    statusUpdatedAt: row.status_updated_at ? (new Date(row.status_updated_at)).getTime() : (row.updated_at ? (new Date(row.updated_at)).getTime() : createdAt),
    hiddenByUser: !!row.hidden_by_user
  };
  return o;
}
function localOrderToDbRow(order, userId){
  return {
    user_id: userId,
    order_number: order.ref,
    status: order.status || 'Pending Approval',
    subtotal: Number(order.subtotal||0),
    delivery_fee: Number(order.delivery||0),
    total: Number(order.total||0),
    payment_method: order.payment || null,
    customer_name: order.userName || (order.customer&&order.customer.name) || null,
    customer_phone: order.customerPhone || null,
    customer_email: order.userEmail || (order.customer&&order.customer.email) || null,
    delivery_address: order.address || null,
    notes: order.notes || null,
    rejection_reason: order.rejectionReason || null,
    items: (order.items||[]).map(it=>({product_id:it.id,product_name:it.name,quantity:Number(it.qty||1),price:Number(it.price||0),size:it.size||null,sugar_level:it.sugar||null,ice_level:it.ice||null,toppings:it.addons||[],subtotal:(Number(it.price||0)*Number(it.qty||1)),image:it.image||null,icon:it.icon||null})),
    status_updated_at: new Date(order.statusUpdatedAt||Date.now()).toISOString()
  };
}
async function persistOrderToSupabase(order){
  try{
    if(!isSupabaseEnabled()) return {ok:false, skipped:true, reason:'not_configured'};
    const sb = await getSupabaseClient(); const session = await getSupabaseSession();
    if(!sb || !session || !session.user) return {ok:false, skipped:true, reason:'not_authenticated'};
    try{ await sb.from('profiles').upsert({id:session.user.id, email:session.user.email||order.userEmail||null, full_name: session.user.user_metadata?.full_name || session.user.user_metadata?.name || order.userName || ''}, {onConflict:'id'}); }catch(e){}
    const row = localOrderToDbRow(order, session.user.id);
    const { data: odata, error: oerr } = await sb.from('orders').insert(row).select('*').single();
    if(oerr) return {ok:false, error:oerr};
    const orderId = odata && odata.id;
    if(orderId){
      const items = (order.items||[]).map(it=>({
        order_id: orderId,
        product_id: it.id || null,
        product_name: it.name || 'Item',
        quantity: Number(it.qty||1),
        price: Number(it.price||0),
        size: it.size || null,
        sugar_level: it.sugar || null,
        ice_level: null,
        toppings: it.addons || [],
        subtotal: Number(it.price||0)*Number(it.qty||1)
      }));
      if(items.length){ try{ await sb.from('order_items').insert(items); }catch(e){ console.warn('order_items insert failed', e); } }
      try{
        await sb.from('notifications').insert({
          user_id: session.user.id,
          type: 'order_update',
          notification_type: 'order_submitted',
          title: 'Order submitted',
          message: 'Your order ' + String(order.ref||'') + ' has been submitted and is waiting for admin approval.',
          order_id: orderId,
          ref: order.ref,
          read: false,
          event_key: 'order-submitted:'+String(order.ref||''),
          customer_name: order.userName || null,
          total_amount: Number(order.total||0),
          order_date_time: order.date || null,
          user_email: order.userEmail || session.user.email || null
        });
      }catch(e){ console.warn('customer notification insert failed', e); }
    }
    try{ await sendAdminOrderNotificationToServer(order); }catch(e){}
    return {ok:true, data: odata};
  }catch(e){ return {ok:false, error:e}; }
}
async function syncOrdersFromSupabase(renderCb){
  try{
    if(!isSupabaseEnabled()) return false;
    const sb = await getSupabaseClient(); const session = await getSupabaseSession();
    if(!sb || !session || !session.user) return false;
    const u=getUser()||{};
    let q = sb.from('orders').select('*').order('created_at', {ascending:false}).limit(300);
    if(u.role !== 'admin') q = q.eq('user_id', session.user.id);
    const { data, error } = await q;
    if(error) return false;
    const mapped = (data||[]).map(mapDbOrderToLocal).filter(Boolean);
    const local = loadJSON(ORDERS_KEY, []);
    const byRef = new Map();
    mapped.forEach(o=>{ if(o&&o.ref) byRef.set(o.ref,o); });
    local.forEach(o=>{ if(o && o.ref && !byRef.has(o.ref) && !o.dbId) byRef.set(o.ref,o); });
    const merged = Array.from(byRef.values()).sort((a,b)=>(Number(b.createdAt)||0)-(Number(a.createdAt)||0));
    saveJSON(ORDERS_KEY, merged);
    try{ if(typeof renderCb==='function') renderCb(); }catch(e){}
    return true;
  }catch(e){ return false; }
}
async function updateOrderStatusInSupabase(ref, status, reason){
  try{
    if(!isSupabaseEnabled()) return {ok:false, skipped:true};
    const sb = await getSupabaseClient(); const session = await getSupabaseSession();
    if(!sb || !session || !session.user) return {ok:false, skipped:true};
    const patch = { status, status_updated_at: new Date().toISOString() };
    if(status==='Rejected' && reason) patch.rejection_reason = reason;
    const { data, error } = await sb.from('orders').update(patch).eq('order_number', ref).select('id,user_id,customer_email,customer_name,total,order_number,status').maybeSingle();
    if(error) return {ok:false, error};
    if(data && data.user_id){
      const msgMap = {
        'Accepted':'Good news! Your BobaSip order has been accepted. Our team is now preparing your drinks.',
        'Preparing':'Your BobaSip order is now being prepared.',
        'Out for Delivery':'Your BobaSip order is out for delivery! Please get ready to receive it.',
        'Delivered':'Your BobaSip order has been delivered. Thank you!',
        'Rejected':'We\'re sorry! Your BobaSip order has been rejected.' + (reason?(' Reason: '+reason):''),
        'Cancelled':'Your BobaSip order has been cancelled.'
      };
      const eventKey = 'order-'+String(status).toLowerCase().replace(/\s+/g,'-')+':'+ref;
      try{
        await sb.from('notifications').insert({
          user_id: data.user_id,
          type: 'order_update',
          notification_type: eventKey,
          title: 'Order '+status,
          message: msgMap[status] || ('Your order status is now '+status+'.'),
          order_id: data.id || null,
          ref: ref,
          read: false,
          event_key: eventKey,
          customer_name: data.customer_name || null,
          total_amount: data.total != null ? Number(data.total) : null,
          user_email: data.customer_email || null
        });
      }catch(e){}
    }
    return {ok:true, data};
  }catch(e){ return {ok:false, error:e}; }
}
function initCustomerRealtime(){
  try{
    if(!isSupabaseEnabled()) return;
    const u=getUser()||{}; if(!u || u.role==='admin') return;
    (async()=>{
      try{
        const sb = await getSupabaseClient(); const session = await getSupabaseSession();
        if(!sb || !session || !session.user) return;
        const uid = session.user.id; const email = notifEmailNorm(u.email||session.user.email||'');
        if(!window.__custNotifRealtime || window.__custNotifRealtime.uid!==uid){
          try{ if(window.__custNotifRealtime && window.__custNotifRealtime.channel) sb.removeChannel(window.__custNotifRealtime.channel); }catch(e){}
          const ch = sb.channel('cust-notifs-'+uid)
            .on('postgres_changes', { event:'*', schema:'public', table:'notifications', filter:'user_id=eq.'+uid }, (payload)=>{
              try{ if(payload && payload.new) mergeServerNotifications(email, [payload.new]); }catch(e){}
              try{ if(typeof renderNotificationsInboxIfPresent==='function') renderNotificationsInboxIfPresent(email); }catch(e){}
              try{ if(typeof window.__renderNotifInbox==='function' && document.querySelector('#notifInbox')) window.__renderNotifInbox(); }catch(e){}
              try{ updateAdminNotifBadges(email); }catch(e){}
              try{ syncNotificationsFromServer(true); }catch(e){}
            }).subscribe();
          window.__custNotifRealtime = { uid, channel: ch };
        }
        if(!window.__custOrdersRealtime || window.__custOrdersRealtime.uid!==uid){
          try{ if(window.__custOrdersRealtime && window.__custOrdersRealtime.channel) sb.removeChannel(window.__custOrdersRealtime.channel); }catch(e){}
          const ch2 = sb.channel('cust-orders-'+uid)
            .on('postgres_changes', { event:'*', schema:'public', table:'orders', filter:'user_id=eq.'+uid }, async ()=>{
              try{ await syncOrdersFromSupabase(()=>{ try{ if(document.body?.dataset?.page==='orders' && typeof initOrders==='function') initOrders(); }catch(e){} try{ if(document.body?.dataset?.page==='track'){} }catch(e){} }); }catch(e){}
              try{ if(document.body?.dataset?.page==='track' || document.body?.dataset?.page==='orders') location.reload ? null : null; }catch(e){}
            }).subscribe();
          window.__custOrdersRealtime = { uid, channel: ch2 };
        }
        try{ syncOrdersFromSupabase(); }catch(e){}
      }catch(e){}
    })();
  }catch(e){}
}
function cleanupSupabaseRealtime(){
  try{
    (async()=>{
      try{ const sb = await getSupabaseClient(); if(!sb) return;
        if(window.__custNotifRealtime?.channel){ try{ sb.removeChannel(window.__custNotifRealtime.channel); }catch(e){} window.__custNotifRealtime=null; }
        if(window.__custOrdersRealtime?.channel){ try{ sb.removeChannel(window.__custOrdersRealtime.channel); }catch(e){} window.__custOrdersRealtime=null; }
      }catch(e){}
    })();
  }catch(e){}
}


// ===== Admin notification center (auto-refresh, badge, cross-tab + Supabase realtime when configured) =====
function notifInboxKeyPrefix(){ return 'bobasip_notif_inbox:'; }
function notifEmailNorm(e){ return String(e||'').trim().toLowerCase(); }
function getCurrentAdminNotifEmail(){
  const u=getUser()||{};
  if(u.role!=='admin') return null;
  return notifEmailNorm(u.email||u.id||'');
}
function getUnreadNotifCount(email){
  email = notifEmailNorm(email || getCurrentAdminNotifEmail() || '');
  if(!email) return 0;
  return getNotifInbox(email).filter(n=>n && !n.read).length;
}
function updateAdminNotifBadges(targetEmail){
  try{
    const u=getUser()||{};
    if(u.role!=='admin'){
      document.querySelectorAll('[data-admin-notif-badge]').forEach(b=>{ b.classList.add('hidden'); b.textContent=''; });
      return;
    }
    const email = notifEmailNorm(u.email||'');
    if(targetEmail && notifEmailNorm(targetEmail)!==email) return;
    const count = getUnreadNotifCount(email);
    document.querySelectorAll('[data-admin-notif-badge]').forEach(b=>{
      if(count>0){ b.textContent = count>99 ? '99+' : String(count); b.classList.remove('hidden'); }
      else { b.textContent=''; b.classList.add('hidden'); }
    });
  }catch(e){}
}
function isAdminNotificationsInboxVisible(){
  try{
    const box = document.querySelector('#notifInbox'); if(!box) return false;
    if(document.body && document.body.dataset.page === 'notifications') return true;
    if(document.body && document.body.dataset.page === 'admin'){
      const view = document.querySelector('[data-admin-view="notifications"]');
      if(view && !view.classList.contains('hidden')) return true;
    }
    return false;
  }catch(e){ return false; }
}
function renderNotificationsInboxIfPresent(targetEmail){
  try{
    const u=getUser()||{};
    if(u.role!=='admin') return;
    const email = notifEmailNorm(u.email||'');
    if(targetEmail && notifEmailNorm(targetEmail)!==email) return;
    updateAdminNotifBadges(email);
    if(!isAdminNotificationsInboxVisible()) return;
    // Prefer existing inbox render (re-binds handlers, preserves state) to avoid stale DOM after re-renders
    if(typeof window.__renderNotifInbox === 'function'){ window.__renderNotifInbox(); return; }
    // If inbox exists but init hasn't bound render yet, initialize notifications view
    if(document.querySelector('#notifInbox')){ try{ initNotifications(); }catch(e){} }
  }catch(e){}
}

function getBobasipRuntimeConfig(){
  const w = (typeof window!=='undefined') ? window : {};
  const c = w.BOBASIP_CONFIG || {};
  const url = String(c.SUPABASE_URL || c.supabaseUrl || w.BOBASIP_SUPABASE_URL || w.SUPABASE_URL || '').trim();
  const anon = String(c.SUPABASE_ANON_KEY || c.supabaseAnonKey || w.BOBASIP_SUPABASE_ANON_KEY || w.SUPABASE_ANON_KEY || '').trim();
  return { supabaseUrl: url, supabaseAnonKey: anon };
}
function hasSupabaseConfig(){
  const c = getBobasipRuntimeConfig();
  return !!(c.supabaseUrl && c.supabaseAnonKey && /^https?:/i.test(c.supabaseUrl));
}
function loadSupabaseClientLib(){
  if(window.supabase && window.supabase.createClient) return Promise.resolve(window.supabase);
  if(window.__supabaseLibPromise) return window.__supabaseLibPromise;
  window.__supabaseLibPromise = new Promise((resolve, reject)=>{
    try{
      const existing = document.querySelector('script[data-supabase-lib]');
      if(existing){
        existing.addEventListener('load', ()=>resolve(window.supabase), {once:true});
        existing.addEventListener('error', reject, {once:true});
        return;
      }
      const s=document.createElement('script');
      s.src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js';
      s.async=true; s.defer=true; s.setAttribute('data-supabase-lib','1');
      s.onload=()=>resolve(window.supabase);
      s.onerror=(e)=>reject(e);
      document.head.appendChild(s);
    }catch(e){ reject(e); }
  });
  return window.__supabaseLibPromise;
}
async function getSupabaseClient(){
  try{
    if(!hasSupabaseConfig()) return null;
    if(window.__supabaseClient) return window.__supabaseClient;
    const lib = await loadSupabaseClientLib();
    if(!lib || !lib.createClient) return null;
    const c = getBobasipRuntimeConfig();
    window.__supabaseClient = lib.createClient(c.supabaseUrl, c.supabaseAnonKey, { auth: { persistSession:true, autoRefreshToken:true } });
    return window.__supabaseClient;
  }catch(e){ console.warn('Supabase client unavailable', e); return null; }
}
async function getSupabaseSession(){
  try{
    const sb = await getSupabaseClient(); if(!sb || !sb.auth) return null;
    const { data } = await sb.auth.getSession();
    return data ? data.session : null;
  }catch(e){ return null; }
}
function mapDbNotification(row){
  if(!row) return null;
  const createdAt = row.created_at ? (new Date(row.created_at)).getTime() : (row.createdAt || Date.now());
  const eventKey = row.event_key || row.eventKey || null;
  const ref = row.ref || row.order_ref || (eventKey && String(eventKey).indexOf('admin-order-submitted:')===0 ? String(eventKey).slice('admin-order-submitted:'.length) : null);
  const total = (row.total_amount != null ? Number(row.total_amount) : (row.totalAmount != null ? Number(row.totalAmount) : null));
  return {
    id: eventKey || (row.id != null ? ('db-'+row.id) : (Date.now()+Math.random())),
    dbId: row.id != null ? row.id : null,
    eventKey: eventKey,
    title: row.title || (row.notification_type==='admin_new_order' || eventKey ? 'New order received' : 'Notification'),
    msg: row.message || row.msg || '',
    ref: ref,
    read: !!row.read,
    createdAt: createdAt,
    time: row.order_date_time || row.orderDateTime || (row.created_at ? new Date(row.created_at).toLocaleString() : new Date(createdAt).toLocaleString()),
    customerName: row.customer_name || row.customerName || null,
    totalAmount: total,
    orderDateTime: row.order_date_time || row.orderDateTime || null,
    notificationType: row.notification_type || row.notificationType || (eventKey ? 'admin_new_order' : null)
  };
}
function mergeServerNotifications(email, rows){
  try{
    email = notifEmailNorm(email || getCurrentAdminNotifEmail() || ''); if(!email) return false;
    const inbox = getNotifInbox(email);
    const byEvent = new Map();
    const byDb = new Map();
    inbox.forEach((n,i)=>{ if(n && n.eventKey) byEvent.set(n.eventKey,i); if(n && n.dbId!=null) byDb.set(String(n.dbId),i); });
    let changed=false;
    (rows||[]).forEach(r=>{
      const mapped = mapDbNotification(r); if(!mapped) return;
      let idx = (mapped.dbId!=null && byDb.has(String(mapped.dbId))) ? byDb.get(String(mapped.dbId)) : (mapped.eventKey && byEvent.has(mapped.eventKey) ? byEvent.get(mapped.eventKey) : -1);
      if(idx>=0){
        const cur = inbox[idx] || {};
        // Preserve local read if user marked read locally; server read also honored
        const read = !!(cur.read || mapped.read);
        inbox[idx] = Object.assign({}, cur, mapped, { read, id: cur.id || mapped.id });
        byDb.set(String(inbox[idx].dbId||mapped.dbId||''), idx);
        if(inbox[idx].eventKey) byEvent.set(inbox[idx].eventKey, idx);
      } else {
        inbox.unshift(mapped);
        // rebuild maps simply
        idx = 0;
        byEvent.clear(); byDb.clear();
        inbox.forEach((n,i)=>{ if(n && n.eventKey) byEvent.set(n.eventKey,i); if(n && n.dbId!=null) byDb.set(String(n.dbId),i); });
      }
      changed=true;
    });
    if(changed){
      inbox.sort((a,b)=>(Number(b && b.createdAt)||0)-(Number(a && a.createdAt)||0));
      saveNotifInbox(email, inbox);
    }
    return changed;
  }catch(e){ console.warn('mergeServerNotifications failed', e); return false; }
}
async function syncNotificationsFromServer(renderIfVisible){
  try{
    if(!hasSupabaseConfig()) return false;
    const u=getUser()||{}; if(!u || !u.email) return false;
    const sb = await getSupabaseClient(); const session = await getSupabaseSession();
    if(!sb || !session || !session.user) return false;
    const { data, error } = await sb.from('notifications').select('*').eq('user_id', session.user.id).order('created_at', {ascending:false}).limit(200);
    if(error) return false;
    const changed = mergeServerNotifications(u.email, data||[]);
    try{ updateAdminNotifBadges(u.email); }catch(e){}
    if(renderIfVisible || isAdminNotificationsInboxVisible() || (typeof window.__renderNotifInbox==='function' && document.querySelector('#notifInbox'))){
      try{ renderNotificationsInboxIfPresent(u.email); }catch(e){}
      try{ if(typeof window.__renderNotifInbox==='function' && document.querySelector('#notifInbox')) window.__renderNotifInbox(); }catch(e){}
    } else if(changed){ try{ renderNotificationsInboxIfPresent(u.email); }catch(e){} }
    return true;
  }catch(e){ return false; }
}
async function markNotificationReadOnServer(item, read){
  try{
    if(!item || !hasSupabaseConfig()) return false;
    const sb = await getSupabaseClient(); const session = await getSupabaseSession();
    if(!sb || !session || !session.user) return false;
    let q = sb.from('notifications').update({ read: !!read }).eq('user_id', session.user.id);
    if(item.dbId!=null) q = q.eq('id', item.dbId);
    else if(item.eventKey) q = q.eq('event_key', item.eventKey);
    else return false;
    await q;
    return true;
  }catch(e){ return false; }
}
async function markAllNotificationsReadOnServer(){
  try{
    if(!hasSupabaseConfig()) return false;
    const sb = await getSupabaseClient(); const session = await getSupabaseSession();
    if(!sb || !session || !session.user) return false;
    await sb.from('notifications').update({ read:true }).eq('user_id', session.user.id).eq('read', false);
    return true;
  }catch(e){ return false; }
}
async function clearNotificationsOnServer(){
  try{
    if(!hasSupabaseConfig()) return false;
    const sb = await getSupabaseClient(); const session = await getSupabaseSession();
    if(!sb || !session || !session.user) return false;
    await sb.from('notifications').delete().eq('user_id', session.user.id);
    return true;
  }catch(e){ return false; }
}
async function initRealtimeAdminNotifications(){
  try{
    if(!hasSupabaseConfig()) return false;
    const u=getUser()||{}; if(u.role!=='admin') return false;
    const sb = await getSupabaseClient(); const session = await getSupabaseSession();
    if(!sb || !session || !session.user) return false;
    const uid = session.user.id;
    if(window.__adminNotifRealtime && window.__adminNotifRealtime.uid===uid) return true;
    try{ if(window.__adminNotifRealtime && window.__adminNotifRealtime.channel) sb.removeChannel(window.__adminNotifRealtime.channel); }catch(e){}
    const channel = sb.channel('admin-notifs-'+uid)
      .on('postgres_changes', { event:'*', schema:'public', table:'notifications', filter:'user_id=eq.'+uid }, (payload)=>{
        try{
          if(payload && payload.new){ mergeServerNotifications(u.email, [payload.new]); }
          else if(payload && payload.old && payload.eventType==='DELETE'){
            // reconcile deletes by refetch
          }
        }catch(e){}
        try{ updateAdminNotifBadges(u.email); renderNotificationsInboxIfPresent(u.email); }catch(e){}
        try{ syncNotificationsFromServer(true); }catch(e){}
      })
      .subscribe();
    window.__adminNotifRealtime = { uid, channel };
    return true;
  }catch(e){ console.warn('Realtime notifications unavailable', e); return false; }
}
async function sendAdminOrderNotificationToServer(order){
  try{
    if(!order || !order.ref) return false;
    await fetch('/api/notify', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ type:'admin_new_order', order: { ref:order.ref, userName:order.userName||order.customerName||'', userEmail:order.userEmail||'', total:order.total, date:order.date||order.orderDateTime||'', createdAt:order.createdAt||Date.now() } }) });
    return true;
  }catch(e){ return false; }
}
function initAdminNotificationCenter(){
  try{
    const u=getUser()||{}; if(u.role!=='admin') return;
    updateAdminNotifBadges(u.email);
    if(window.__adminNotifCenterBound) {
      // still try to ensure realtime/sync if config becomes available
      if(hasSupabaseConfig()){ syncNotificationsFromServer(true); initRealtimeAdminNotifications(); }
      return;
    }
    window.__adminNotifCenterBound = true;
    const email = notifEmailNorm(u.email||'');
    // Cross-tab (same browser): storage event
    window.addEventListener('storage', (e)=>{
      try{
        if(!e) return;
        const k = String(e.key||'');
        if(k === notifInboxKey(email) || k.indexOf(notifInboxKeyPrefix())===0 || k === 'bobasip_notif_ping'){
          updateAdminNotifBadges(email);
          renderNotificationsInboxIfPresent(email);
          if(hasSupabaseConfig()) syncNotificationsFromServer(true);
        }
      }catch(err){}
    });
    // Cross-tab: BroadcastChannel
    try{
      if(window.BroadcastChannel){
        if(!window.__notifBCRecv){
          window.__notifBCRecv = new BroadcastChannel('bobasip-notifs');
          window.__notifBCRecv.onmessage = (ev)=>{
            try{
              const d = ev && ev.data || {};
              if(d && d.type==='notif-updated'){
                const t = notifEmailNorm(d.email||'');
                if(!t || t===email){ updateAdminNotifBadges(email); renderNotificationsInboxIfPresent(email); }
                if(hasSupabaseConfig()) syncNotificationsFromServer(true);
              }
            }catch(err){}
          };
        }
      }
    }catch(e){}
    // Refresh on focus/visibility (helps when navigating/returning)
    window.addEventListener('focus', ()=>{ try{ updateAdminNotifBadges(email); renderNotificationsInboxIfPresent(email); if(hasSupabaseConfig()) syncNotificationsFromServer(true); }catch(e){} });
    document.addEventListener('visibilitychange', ()=>{ if(!document.hidden){ try{ updateAdminNotifBadges(email); renderNotificationsInboxIfPresent(email); if(hasSupabaseConfig()) syncNotificationsFromServer(true); }catch(e){} } });
    // Lightweight poll fallback for cases without storage events (same-tab async) / badge freshness
    if(!window.__adminNotifPoll){ window.__adminNotifPoll = setInterval(()=>{ try{ updateAdminNotifBadges(email); if(isAdminNotificationsInboxVisible()) renderNotificationsInboxIfPresent(email); }catch(e){} }, 4000); }
    // Supabase sync + realtime (cross-device when configured with Supabase Auth session + RLS)
    if(hasSupabaseConfig()){
      syncNotificationsFromServer(true);
      initRealtimeAdminNotifications();
      // periodic background sync as safety net
      if(!window.__adminNotifSyncPoll){ window.__adminNotifSyncPoll = setInterval(()=>{ try{ syncNotificationsFromServer(isAdminNotificationsInboxVisible()); }catch(e){} }, 15000); }
    }
  }catch(e){}
}


// Translation dictionary. Keys are the English source strings; values are Filipino.
// English entries map to themselves so switching back is always possible.
const I18N = {
  // Sidebar / nav
  'Home':'Home', 'Menu':'Menu', 'Cart':'Cart', 'Profile':'Profile',
  'Orders':'Mga Order', 'Addresses':'Mga Address', 'Payments':'Mga Pagbabayad',
  'Notifications':'Mga Abiso', 'Settings':'Mga Setting', 'Admin':'Admin',
  'View profile':'Tingnan ang profile', 'LOG OUT':'MAG-LOG OUT', 'Log out':'Mag-log out',
  'More':'Higit pa',
  // Settings page
  'App Settings':'Mga Setting ng App', 'Customize your BobaSip experience':'I-customize ang BobaSip experience mo',
  'Appearance':'Hitsura', 'Theme':'Tema', 'Light / Dark mode':'Light / Dark mode',
  'Preferences':'Mga Kagustuhan', 'Language':'Wika', 'App display language':'Wika ng display ng app',
  'Currency':'Pera', 'Price display':'Pagpapakita ng presyo',
  'Sound effects':'Mga tunog na epekto', 'UI sounds':'Mga tunog ng UI',
  'Data':'Datos', 'Clear cart':'Burahin ang cart', 'Clear local app data':'Burahin ang lokal na datos ng app',
  'About':'Tungkol sa', 'Milktea Ordering & Shop Management':'Pamamahala ng Pag-order ng Milktea',
  'BSIT 3I · First Semester A.Y. 2025-2026':'BSIT 3I · Unang Semestre A.Y. 2025-2026',
  'BobaSip v1.0.0':'BobaSip v1.0.0',
  // Shared actions
  'Add to cart':'Idagdag sa cart', 'PROCEED TO CHECKOUT':'MAGPATULOY SA CHECKOUT',
  'PLACE ORDER':'GUMAWA NG ORDER', 'Reorder':'Ulitin ang order', 'Track':'Subaybayan',
  'Delete':'Burahin', 'Browse menu':'Tingnan ang menu',
  // Time-of-day greetings
  'Good morning':'Magandang umaga', 'Good afternoon':'Magandang hapon', 'Good evening':'Magandang gabi',
};

// Find the text node holding an element's label.
// Prefers a direct text child so icons/elements inside the label are preserved.
function i18nTextNode(el){
  const direct = Array.from(el.childNodes).filter(n=>n.nodeType===3 && n.textContent.trim());
  if(direct.length) return direct[0];
  // Fall back to a nested label span (e.g. .bn-label)
  const nested = el.querySelector('.bn-label');
  if(nested){
    const inner = Array.from(nested.childNodes).filter(n=>n.nodeType===3 && n.textContent.trim());
    if(inner.length) return inner[0];
  }
  return null;
}

// The English source for an element:
//  - data-i18n="English text" is authoritative (survives re-renders)
//  - otherwise capture the current label once and remember it
function i18nSource(el, node){
  const attr = el.getAttribute('data-i18n');
  if(attr) return attr;
  if(el.dataset.i18nEn !== undefined) return el.dataset.i18nEn;
  const raw = (node ? node.textContent : el.textContent).trim();
  if(!raw) return null;
  el.dataset.i18nEn = raw;
  return raw;
}

// Write the label for the requested language.
function i18nSet(el, isFil){
  const en = i18nSource(el, i18nTextNode(el));
  if(en === null) return;
  const target = isFil ? (I18N[en] || en) : en;
  const node = i18nTextNode(el);
  if(!node) return;
  const current = node.textContent.trim();
  if(current === target) return;
  // Preserve the label's leading/trailing whitespace.
  const lead = (node.textContent.match(/^\s*/) || [''])[0];
  const tail = (node.textContent.match(/\s*$/) || [''])[0];
  node.textContent = lead + target + tail;
}

function applyTranslations(){
  const state = loadJSON(SETTINGS_KEY, {lang:'English', currency:'PHP (₱)', sound:true});
  const isFil = state.lang === 'Filipino';

  // Nav links: the label lives in a text node next to the icon.
  document.querySelectorAll('aside nav a, .bottom-nav a').forEach(a=>{
    i18nSet(a, isFil);
  });

  // Everything else opts in with data-i18n="English source text".
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    i18nSet(el, isFil);
  });

  // The time-of-day greeting: its English source is set by initHome().
  document.querySelectorAll('[data-greet-text]').forEach(el=>{
    i18nSet(el, isFil);
  });
}

// Re-apply the current language after dynamic content is rendered.
function refreshTranslations(){
  try{ applyTranslations(); if(window.lucide) lucide.createIcons(); }catch(e){}
}


function initSettings(){
  const u=getUser();
  if(u && u.role==='admin' && document.body.dataset.page!=='admin'){
    initAdminSidebar('settings');
    const h=document.querySelector('h1'); if(h){ h.textContent='Admin Settings'; h.removeAttribute('data-i18n'); }
  }
  const selects = document.querySelectorAll('[data-setting]');
  const toggles = document.querySelectorAll('[data-toggle]');
  const state = loadJSON(SETTINGS_KEY, {lang:'English', currency:'PHP (₱)', sound:true});
  const themeBtn = document.querySelector('#themeToggle');
  if(themeBtn && !themeBtn._bound2){
    themeBtn._bound2=true;
    themeBtn.addEventListener('click', (e)=>{ toggleThemeWithReveal(e); });
    syncThemeButton();
  }
  selects.forEach(s=>{
    const key=s.dataset.setting;
    if(state[key]!==undefined) s.value=state[key];
    if(!s._bound){ s._bound=true; s.addEventListener('change',()=>{ state[key]=s.value; saveJSON(SETTINGS_KEY,state); toast('Saved'); if(key==='lang'){ refreshTranslations(); } }); }
  });
  refreshTranslations();
  toggles.forEach(t=>{
    const key=t.dataset.toggle; if(!key) return;
    const apply=()=>{ const on=!!state[key]; t.classList.toggle('bg-accent', on); t.classList.toggle('bg-ink/20', !on); const knob=t.querySelector('div'); if(knob){ knob.classList.toggle('right-0.5', on); knob.classList.toggle('left-0.5', !on); } };
    apply();
    if(!t._bound){ t._bound=true; t.addEventListener('click',()=>{ state[key]=!state[key]; saveJSON(SETTINGS_KEY,state); apply(); toast(state[key]?'Enabled':'Disabled'); }); }
  });
  const cc=document.querySelector('#clearCartData'); if(cc && !cc._bound){ cc._bound=true; cc.addEventListener('click',()=>{ showConfirm({title:'Clear cart?', message:'All items in your cart will be removed.', confirmText:'Clear cart', danger:true, onConfirm:()=>{ localStorage.removeItem(cartKey()); updateCartBadges(); showLoadingSuccess('Cart cleared', null, {loadingMessage:'Clearing cart…', successMessage:'Cart cleared'}); }}); }); }
  const ca=document.querySelector('#clearAppData'); if(ca && !ca._bound){ ca._bound=true; ca.addEventListener('click',()=>{ showConfirm({title:'Clear local app data?', message:'Clear local BobaSip app data on this device? Your theme preference will be kept.', confirmText:'Clear data', danger:true, onConfirm:()=>{ Object.keys(localStorage).forEach(k=>{ if(k === 'bobasip_theme') return; if(k.indexOf('bobasip_') === 0) localStorage.removeItem(k); }); showLoadingSuccess('Local data cleared', null, {loadingMessage:'Clearing local data…', successMessage:'Local data cleared', successSub:'Refreshing…', reload:true}); }}); }); }
}



























