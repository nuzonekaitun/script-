// ระบบผู้ใช้
let users = JSON.parse(localStorage.getItem("users")) || {admin:{password:"1", credit:0}};
let currentUser = localStorage.getItem("loggedIn");
let cart = [];

// อัปเดตหน้าเว็บตามสถานะล็อคอิน
function updateUI() {
  if(currentUser){
    document.getElementById("login-page").style.display="none";
    document.getElementById("main-page").style.display="block";
    document.getElementById("user-credit").innerText = users[currentUser].credit || 0;
    if(currentUser==="admin") document.getElementById("admin").style.display="block";
    else document.getElementById("admin").style.display="none";
  }
}

// แสดงหน้า
function showPage(id){
  document.querySelectorAll(".page").forEach(p=>p.style.display="none");
  document.getElementById(id).style.display="block";
}

// ล็อคอิน
function login(){
  let u=document.getElementById("username").value;
  let p=document.getElementById("password").value;
  if(users[u] && users[u].password===p){
    currentUser=u;
    localStorage.setItem("loggedIn", u);
    updateUI();
  }else{
    document.getElementById("login-msg").innerText="ชื่อผู้ใช้หรือรหัสผิด";
  }
}

// สมัครสมาชิก
function signup(){
  let u=document.getElementById("username").value;
  let p=document.getElementById("password").value;
  if(!users[u]){
    users[u]={password:p, credit:0};
    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("login-msg").innerText="สมัครสมาชิกสำเร็จ!";
  }else document.getElementById("login-msg").innerText="ผู้ใช้นี้มีอยู่แล้ว";
}

// ออกจากระบบ
function logout(){ localStorage.removeItem("loggedIn"); location.reload(); }

// เติมเครดิตผู้ใช้ (Admin)
function addCreditToAll(){
  for(let u in users) users[u].credit += 100;
  localStorage.setItem("users", JSON.stringify(users));
  alert("เพิ่มเครดิตให้ผู้ใช้ทั้งหมดแล้ว");
  if(currentUser) document.getElementById("user-credit").innerText=users[currentUser].credit;
}

// ซื้อของฟรี
function buyFreeItem(){
  let chance = Math.random();
  if(chance<0.000000001) alert("คุณได้รับของฟรี!");
  else alert("×เกลือ×");
}

// ซื้อ Game Pass
function buyGamePass(){
  if(users[currentUser].credit>=100){
    users[currentUser].credit-=100;
    localStorage.setItem("users",JSON.stringify(users));
    document.getElementById("user-credit").innerText=users[currentUser].credit;
    let name=prompt("กรอกชื่อ ID Game Pass:");
    let pass=prompt("กรอกรหัส:");
    alert(`ซื้อ Game Pass สำเร็จ! ชื่อ: ${name}, รหัส: ${pass}`);
  }else alert("เครดิตไม่พอ");
}

// สุ่มของพิเศษ
function buySpecialItem(){
  if(users[currentUser].credit>=45){
    users[currentUser].credit-=45;
    localStorage.setItem("users",JSON.stringify(users));
    document.getElementById("user-credit").innerText=users[currentUser].credit;
    let now=new Date();
    if(now.getHours()===21){
      alert("สุ่มสำเร็จ! แอดมินจะส่ง ID ให้คุณภายใน 5 ชั่วโมง");
    }else{
      let chance=Math.random();
      if(chance<0.0005) alert("คุณได้รับ ID ราคา 1฿!");
      else alert("×เกลือ×");
    }
  }else alert("เครดิตไม่พอ");
}

// Admin เพิ่มของรางวัล
function addReward(){
  let reward=prompt("กรอกของรางวัลสำหรับผู้ใช้:");
  document.getElementById("admin-msg").innerText=`เพิ่มของรางวัล: ${reward}`;
}

// Initial
updateUI();
