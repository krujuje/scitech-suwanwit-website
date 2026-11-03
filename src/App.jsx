import { useEffect, useState } from 'react';
import { Atom, FlaskConical, Microscope, Telescope, Cpu, BookOpen, Menu, X, Globe2, ChevronRight, ArrowUpRight, Users, FileText, Trophy, CalendarDays, ExternalLink, ChevronLeft, ChevronRight as NextIcon, Pause, Play } from 'lucide-react';

const FB='https://www.facebook.com/share/19aprnCA35/';
const LINE='https://line.me/ti/g2/ji3Z0g0k3CeL0nVrw28d7bbG8noT6w43Eia-xw?utm_source=invitation&utm_medium=link_copy&utm_campaign=default';
const LOGO='/assets/logo-scitech.webp';
const slides=[
 {src:'/assets/activity-01.jpg',alt:'ภาพกิจกรรมเด่นของกลุ่มสาระวิทยาศาสตร์และเทคโนโลยี 1',title:'เรียนรู้ผ่านการลงมือปฏิบัติ',caption:'กิจกรรมการเรียนรู้และพัฒนาทักษะทางวิทยาศาสตร์'},
 {src:'/assets/activity-02.jpg',alt:'ภาพกิจกรรมเด่นของกลุ่มสาระวิทยาศาสตร์และเทคโนโลยี 2',title:'สร้างประสบการณ์นอกห้องเรียน',caption:'เปิดพื้นที่ให้นักเรียนได้ค้นพบและทดลอง'},
 {src:'/assets/activity-03.jpg',alt:'ภาพกิจกรรมเด่นของกลุ่มสาระวิทยาศาสตร์และเทคโนโลยี 3',title:'เวทีแห่งความคิดสร้างสรรค์',caption:'ส่งเสริมการคิดวิเคราะห์และการสร้างนวัตกรรม'},
 {src:'/assets/activity-04.jpg',alt:'ภาพกิจกรรมเด่นของกลุ่มสาระวิทยาศาสตร์และเทคโนโลยี 4',title:'ร่วมกิจกรรมอย่างสร้างสรรค์',caption:'พัฒนาศักยภาพผู้เรียนผ่านกิจกรรมที่หลากหลาย'},
 {src:'/assets/activity-05.jpg',alt:'ภาพกิจกรรมเด่นของกลุ่มสาระวิทยาศาสตร์และเทคโนโลยี 5',title:'ความภาคภูมิใจของพวกเรา',caption:'บันทึกความทรงจำและผลงานของชุมชนการเรียนรู้'}
];
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
 const [slide,setSlide]=useState(0),[paused,setPaused]=useState(false);
 const go=id=>{setActive(id);setOpen(false);document.getElementById(id)?.scrollIntoView({behavior:'smooth'});};
 useEffect(()=>{if(paused)return;const timer=window.setInterval(()=>setSlide(s=>(s+1)%slides.length),5000);return()=>window.clearInterval(timer);},[paused]);
 const labels=[['news','ข่าวประชาสัมพันธ์','NEWS & ANNOUNCEMENTS','ติดตามข่าวสาร ประกาศ และความเคลื่อนไหวของกลุ่มสาระฯ'],['resources','คลังสื่อการเรียนรู้','LEARNING RESOURCES','แหล่งรวมวิดีโอ ใบความรู้ สไลด์ และสื่อประกอบการเรียน'],['documents','ใบงานและเอกสาร','WORKSHEETS & DOCUMENTS','ใบงาน แบบฝึกหัด แบบทดสอบ และเอกสารประกอบการเรียน'],['works','ผลงานนักเรียน','STUDENT ACHIEVEMENTS','พื้นที่นำเสนอโครงงาน สิ่งประดิษฐ์ และความสำเร็จของนักเรียน'],['activities','กิจกรรมและรางวัล','ACTIVITIES & AWARDS','ประมวลภาพกิจกรรม การแข่งขัน และรางวัล'],['systems','ระบบออนไลน์','ONLINE SERVICES','รวมระบบออนไลน์และบริการดิจิทัลของกลุ่มสาระฯ']];
 return <div>
  <div className="top"><div className="wrap">กลุ่มสาระการเรียนรู้วิทยาศาสตร์และเทคโนโลยี <span>โรงเรียนสุวรรณภูมิวิทยาลัย</span></div></div>
  <header><div className="wrap head">
   <a className="brand" href="#home" onClick={e=>{e.preventDefault();go('home')}}><img src={LOGO} alt="ตราสัญลักษณ์กลุ่มสาระวิทยาศาสตร์และเทคโนโลยี"/><span><b className="en-font">Sci-Tech Suwanwit</b><small className="en-font">Science and Technology</small></span></a>
   <nav className={open?'nav show':'nav'}>{nav.map(([id,th,eng])=><button className={`${active===id?'chosen':''} ${en?'en-font':''}`} key={id} onClick={()=>go(id)}>{en?eng:th}</button>)}</nav>
   <div className="tools"><button className="lang en-font" onClick={()=>setEn(!en)}><Globe2 size={16}/>{en?'TH':'EN'}</button><button className="hamb" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>
  </div></header>
  <main>
   <section id="home" className="hero"><div className="wrap hero-grid"><div><label className="en-font">✦ LEARN • EXPLORE • INNOVATE</label><h1 className="hero-title"><span className={`hero-title-line hero-title-first ${en?'en-font':''}`}>{en?'Science &':'วิทยาศาสตร์'}</span><span className={`hero-title-line hero-title-second ${en?'en-font':''}`}>{en?'Technology':'และเทคโนโลยี'}</span></h1><h2 className={en?'en-font':''}>{en?'Suwannaphumwittayalai School':'โรงเรียนสุวรรณภูมิวิทยาลัย'}</h2><p className={en?'en-font':''}>{en?'A space for knowledge, creativity, scientific discovery and learning achievements.':'พื้นที่แห่งการเรียนรู้ การค้นคว้า ความคิดสร้างสรรค์ และการเผยแพร่ผลงานของชุมชนแห่งการเรียนรู้'}</p><div className="actions"><button className="primary" onClick={()=>go('about')}>รู้จักกลุ่มสาระ <ChevronRight size={18}/></button><button className="secondary" onClick={()=>go('resources')}>คลังสื่อการเรียนรู้ <ArrowUpRight size={17}/></button></div><small className="motto">● จุดเริ่มต้นของการเรียนรู้ คือความสงสัยใคร่รู้</small></div>
    <div className="hero-art" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} aria-label="สไลด์ภาพกิจกรรมเด่น">
     <div className="slide-frame"><img key={slides[slide].src} className="slide-photo" src={slides[slide].src} alt={slides[slide].alt}/><div className="slide-shade"/><div className="slide-copy"><span className="en-font">HIGHLIGHT ACTIVITIES · 0{slide+1}/{slides.length}</span><h3>{slides[slide].title}</h3><p>{slides[slide].caption}</p></div>
      <button className="slide-arrow prev" onClick={()=>setSlide(s=>(s-1+slides.length)%slides.length)} aria-label="ภาพก่อนหน้า"><ChevronLeft/></button><button className="slide-arrow next" onClick={()=>setSlide(s=>(s+1)%slides.length)} aria-label="ภาพถัดไป"><NextIcon/></button>
      <div className="slide-controls"><div className="slide-dots">{slides.map((item,i)=><button key={item.src} className={i===slide?'dot active':'dot'} onClick={()=>setSlide(i)} aria-label={'แสดงภาพที่ '+(i+1)}/>)}</div><button className="pause" onClick={()=>setPaused(p=>!p)} aria-label={paused?'เล่นสไลด์':'หยุดสไลด์'}>{paused?<Play size={15}/>:<Pause size={15}/>}</button></div>
     </div><div className="slide-note en-font"><span>✦</span> MOMENTS OF LEARNING & INSPIRATION</div>
    </div>
   </div><div className="ribbon en-font">SCIENCE　 ━━━━━　 TECHNOLOGY　 ━━━━━　 INNOVATION</div></section>
   <section id="about" className="wrap about"><div><small className="en-font">ABOUT SCI-TECH</small><h2>เรียนรู้เพื่อเข้าใจ<br/>สร้างสรรค์เพื่ออนาคต</h2></div><p>ยินดีต้อนรับสู่เว็บไซต์กลุ่มสาระการเรียนรู้วิทยาศาสตร์และเทคโนโลยี โรงเรียนสุวรรณภูมิวิทยาลัย ศูนย์กลางข้อมูลข่าวสาร กิจกรรม ผลงาน และสื่อการเรียนรู้สำหรับนักเรียน ครู ผู้ปกครอง ศิษย์เก่า และประชาชนทั่วไป</p></section>
   <section id="subjects" className="subjects"><div className="wrap"><small className="en-font">OUR SUBJECT AREAS</small><h2>สาขาวิชาของเรา</h2><div className="cards">{subjects.map(([Icon,th,eng,desc],i)=><article key={th}><Icon/><i>0{i+1}</i><h3 className={en?'en-font':''}>{en?eng:th}</h3><p>{desc}</p></article>)}</div></div></section>
   <section className="quick"><div className="wrap"><small className="en-font">DISCOVER MORE</small><h2>พื้นที่แห่งการเรียนรู้และการแบ่งปัน</h2><div className="quickgrid">{[[FileText,'ข่าวประชาสัมพันธ์','news'],[BookOpen,'คลังสื่อการเรียนรู้','resources'],[FileText,'ใบงานและเอกสาร','documents'],[Trophy,'ผลงานนักเรียน','works'],[CalendarDays,'กิจกรรมและรางวัล','activities'],[Globe2,'ระบบออนไลน์','systems']].map(([Icon,title,id])=><button key={id} onClick={()=>go(id)}><Icon/>{title}<ArrowUpRight/></button>)}</div></div></section>
   <section id="staff" className="staff wrap"><Users/><div><small className="en-font">OUR PEOPLE</small><h2>บุคลากรกลุ่มสาระฯ</h2><p>ทำเนียบครูและบุคลากร ผู้ร่วมสร้างสรรค์การเรียนรู้และพัฒนาศักยภาพของผู้เรียน</p></div></section>
   {labels.map(([id,title,kicker,desc])=><section id={id} className="placeholder" key={id}><div className="wrap"><div><small className="en-font">{kicker}</small><h2>{title}</h2><p>{desc}</p></div><span>กำลังเตรียมข้อมูล</span></div></section>)}
  </main>
  <footer><div className="wrap footmain"><div className="footbrand"><img src={LOGO} alt="ตราสัญลักษณ์ Sci-Tech"/><div><b className="en-font">Sci-Tech Suwanwit</b><small className="en-font">Science and Technology</small><small className="en-font">Suwannaphumwittayalai School</small></div></div><div className="social"><a href={FB} target="_blank" rel="noopener noreferrer"><b className="fb">f</b><span><strong className="en-font">Facebook</strong><small>กลุ่มสาระวิทยาศาสตร์และเทคโนโลยี</small></span><ExternalLink/></a><a href={LINE} target="_blank" rel="noopener noreferrer"><b className="line">LINE</b><span><strong className="en-font">SW Sci-Tech 8</strong><small>เข้าร่วมโอเพนแชท</small></span><ExternalLink/></a></div></div><div className="copyright">Copyright © 2026 วิทยาศาสตร์และเทคโนโลยี โรงเรียนสุวรรณภูมิวิทยาลัย <b className="en-font">| By Kru JuJe</b></div></footer>
  <button className="up" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} aria-label="กลับขึ้นด้านบน">↑</button>
 </div>;
}
