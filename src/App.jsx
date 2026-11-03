import { useState } from 'react';
import { Atom, FlaskConical, Microscope, Telescope, Cpu, BookOpen, Menu, X, Globe2, ChevronRight, ArrowUpRight, Users, FileText, Trophy, CalendarDays, ExternalLink } from 'lucide-react';

const FB='https://www.facebook.com/share/19aprnCA35/';
const LINE='https://line.me/ti/g2/ji3Z0g0k3CeL0nVrw28d7bbG8noT6w43Eia-xw?utm_source=invitation&utm_medium=link_copy&utm_campaign=default';
const nav=[['home','หน้าแรก','Home'],['about','เกี่ยวกับเรา','About'],['staff','บุคลากร','Staff'],['subjects','สาขาวิชา','Subjects'],['news','ข่าวประชาสัมพันธ์','News'],['resources','คลังสื่อการเรียนรู้','Learning'],['documents','ใบงานและเอกสาร','Documents'],['works','ผลงานนักเรียน','Student works'],['activities','กิจกรรมและรางวัล','Activities'],['systems','ระบบออนไลน์','Online systems']];
const subjects=[
 [Atom,'ฟิสิกส์','Physics','เรียนรู้กฎธรรมชาติ พลังงาน แรง และการเคลื่อนที่'],
 [FlaskConical,'เคมี','Chemistry','สำรวจสาร ปฏิกิริยา และการเปลี่ยนแปลงของสสาร'],
 [Microscope,'ชีววิทยา','Biology','ทำความเข้าใจสิ่งมีชีวิตและระบบนิเวศ'],
 [Telescope,'โลก ดาราศาสตร์และอวกาศ','Earth & Space','เปิดมุมมองสู่โลก ระบบสุริยะ และเอกภพ'],
 [Cpu,'เทคโนโลยีและวิทยาการคำนวณ','Technology','พัฒนาทักษะดิจิทัลและนวัตกรรม'],
 [BookOpen,'วิทยาศาสตร์ทั่วไป','General Science','สร้างพื้นฐานการคิด วิเคราะห์ และกระบวนการทางวิทยาศาสตร์']
];
export default function App(){
 const [en,setEn]=useState(false),[open,setOpen]=useState(false),[active,setActive]=useState('home');
 const go=id=>{setActive(id);setOpen(false);document.getElementById(id)?.scrollIntoView({behavior:'smooth'});};
 const labels=[['news','ข่าวประชาสัมพันธ์','NEWS & ANNOUNCEMENTS','ติดตามข่าวสาร ประกาศ และความเคลื่อนไหวของกลุ่มสาระฯ'],['resources','คลังสื่อการเรียนรู้','LEARNING RESOURCES','แหล่งรวมวิดีโอ ใบความรู้ สไลด์ และสื่อประกอบการเรียน'],['documents','ใบงานและเอกสาร','WORKSHEETS & DOCUMENTS','ใบงาน แบบฝึกหัด แบบทดสอบ และเอกสารประกอบการเรียน'],['works','ผลงานนักเรียน','STUDENT ACHIEVEMENTS','พื้นที่นำเสนอโครงงาน สิ่งประดิษฐ์ และความสำเร็จของนักเรียน'],['activities','กิจกรรมและรางวัล','ACTIVITIES & AWARDS','ประมวลภาพกิจกรรม การแข่งขัน และรางวัล'],['systems','ระบบออนไลน์','ONLINE SERVICES','รวมระบบออนไลน์และบริการดิจิทัลของกลุ่มสาระฯ']];
 return <div>
  <div className="top"><div className="wrap">กลุ่มสาระการเรียนรู้วิทยาศาสตร์และเทคโนโลยี <span>โรงเรียนสุวรรณภูมิวิทยาลัย</span></div></div>
  <header><div className="wrap head">
   <a className="brand" href="#home" onClick={e=>{e.preventDefault();go('home')}}><img src="/assets/scitech-logo.svg" alt="Sci-Tech logo"/><span><b>Sci-Tech Suwanwit</b><small>Science and Technology</small></span></a>
   <nav className={open?'nav show':'nav'}>{nav.map(([id,th,eng])=><button className={active===id?'chosen':''} key={id} onClick={()=>go(id)}>{en?eng:th}</button>)}</nav>
   <div className="tools"><button className="lang" onClick={()=>setEn(!en)}><Globe2 size={16}/>{en?'TH':'EN'}</button><button className="hamb" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>
  </div></header>
  <main>
   <section id="home" className="hero"><div className="wrap hero-grid"><div><label>✦ LEARN • EXPLORE • INNOVATE</label><h1>{en?'Science &':'วิทยาศาสตร์'}<em>{en?'Technology':'และเทคโนโลยี'}</em></h1><h2>{en?'Suwannaphumwittayalai School':'โรงเรียนสุวรรณภูมิวิทยาลัย'}</h2><p>{en?'A space for knowledge, creativity, scientific discovery and learning achievements.':'พื้นที่แห่งการเรียนรู้ การค้นคว้า ความคิดสร้างสรรค์ และการเผยแพร่ผลงานของชุมชนแห่งการเรียนรู้'}</p><div className="actions"><button className="primary" onClick={()=>go('about')}>รู้จักกลุ่มสาระ <ChevronRight size={18}/></button><button className="secondary" onClick={()=>go('resources')}>คลังสื่อการเรียนรู้ <ArrowUpRight size={17}/></button></div><small className="motto">● จุดเริ่มต้นของการเรียนรู้ คือความสงสัยใคร่รู้</small></div><div className="hero-art"><div className="ring"><img src="/assets/scitech-logo.svg" alt="ตราสัญลักษณ์ Sci-Tech"/></div><span className="float f1"><Atom/> SCIENCE</span><span className="float f2"><Cpu/> TECHNOLOGY</span></div></div><div className="ribbon">SCIENCE　 ━━━━━　 TECHNOLOGY　 ━━━━━　 INNOVATION</div></section>
   <section id="about" className="wrap about"><div><small>ABOUT SCI-TECH</small><h2>เรียนรู้เพื่อเข้าใจ<br/>สร้างสรรค์เพื่ออนาคต</h2></div><p>ยินดีต้อนรับสู่เว็บไซต์กลุ่มสาระการเรียนรู้วิทยาศาสตร์และเทคโนโลยี โรงเรียนสุวรรณภูมิวิทยาลัย ศูนย์กลางข้อมูลข่าวสาร กิจกรรม ผลงาน และสื่อการเรียนรู้สำหรับนักเรียน ครู ผู้ปกครอง ศิษย์เก่า และประชาชนทั่วไป</p></section>
   <section id="subjects" className="subjects"><div className="wrap"><small>OUR SUBJECT AREAS</small><h2>สาขาวิชาของเรา</h2><div className="cards">{subjects.map(([Icon,th,eng,desc],i)=><article key={th}><Icon/><i>0{i+1}</i><h3>{en?eng:th}</h3><p>{desc}</p></article>)}</div></div></section>
   <section className="quick"><div className="wrap"><small>DISCOVER MORE</small><h2>พื้นที่แห่งการเรียนรู้และการแบ่งปัน</h2><div className="quickgrid">{[[FileText,'ข่าวประชาสัมพันธ์','news'],[BookOpen,'คลังสื่อการเรียนรู้','resources'],[FileText,'ใบงานและเอกสาร','documents'],[Trophy,'ผลงานนักเรียน','works'],[CalendarDays,'กิจกรรมและรางวัล','activities'],[Globe2,'ระบบออนไลน์','systems']].map(([Icon,title,id])=><button key={id} onClick={()=>go(id)}><Icon/>{title}<ArrowUpRight/></button>)}</div></div></section>
   <section id="staff" className="staff wrap"><Users/><div><small>OUR PEOPLE</small><h2>บุคลากรกลุ่มสาระฯ</h2><p>ทำเนียบครูและบุคลากร ผู้ร่วมสร้างสรรค์การเรียนรู้และพัฒนาศักยภาพของผู้เรียน</p></div></section>
   {labels.map(([id,title,kicker,desc])=><section id={id} className="placeholder" key={id}><div className="wrap"><div><small>{kicker}</small><h2>{title}</h2><p>{desc}</p></div><span>กำลังเตรียมข้อมูล</span></div></section>)}
  </main>
  <footer><div className="wrap footmain"><div className="footbrand"><img src="/assets/scitech-logo.svg" alt="Sci-Tech logo"/><div><b>Sci-Tech Suwanwit</b><small>Science and Technology</small><small>Suwannaphumwittayalai School</small></div></div><div className="social"><a href={FB} target="_blank" rel="noopener noreferrer"><b className="fb">f</b><span><strong>Facebook</strong><small>กลุ่มสาระวิทยาศาสตร์และเทคโนโลยี</small></span><ExternalLink/></a><a href={LINE} target="_blank" rel="noopener noreferrer"><b className="line">LINE</b><span><strong>SW Sci-Tech 8</strong><small>เข้าร่วมโอเพนแชท</small></span><ExternalLink/></a></div></div><div className="copyright">Copyright © 2026 วิทยาศาสตร์และเทคโนโลยี โรงเรียนสุวรรณภูมิวิทยาลัย <b>| By Kru JuJe</b></div></footer>
  <button className="up" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} aria-label="กลับขึ้นด้านบน">↑</button>
 </div>;
}