import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Camera,
  Code2,
  Coffee,
  ExternalLink,
  Heart,
  Home,
  ShieldCheck,
  Shuffle,
  Sparkles,
  Sprout,
  TrendingUp,
  UserRound,
  X,
} from "lucide-react";
import LogoutButton from "../components/LogoutButton.jsx";
import PageTransition from "../components/PageTransition.jsx";
import familyImage from "../assets/family-memory.png";
import { getSession } from "../routes/auth.js";

const siblingProfileUrl = "https://nattazxin.com/#profile";
const siblingPhotoUrl =
  "https://nattazxin.com/Photo/optimized/20230220_005806.jpg";
const aomsubPhotoUrl = "https://ik.imagekit.io/gonkvdlk0/IMG_0973.jpg";
const napawanPhotoUrl =
  "https://ik.imagekit.io/gonkvdlk0/IMG_20221110_204735.jpg";
const chaiwatPhotoUrl = "https://ik.imagekit.io/gonkvdlk0/20180405_175353.jpg";
const unclePaPhotoUrl =
  "https://ik.imagekit.io/gonkvdlk0/Screenshot%202026-05-08%20010800.png";
const auntNetPhotoUrl =
  "https://ik.imagekit.io/gonkvdlk0/Screenshot%202026-05-08%20011911.png";
const grandfatherPhotoUrl =
  "https://ik.imagekit.io/gonkvdlk0/558915512_24689000160742479_8851945750755795137_n.jpg";
const grandmotherPhotoUrl =
  "https://ik.imagekit.io/gonkvdlk0/Screenshot%202026-05-08%20012139.png";
const happyFamilyPhotoUrl = "https://ik.imagekit.io/gonkvdlk0/20180513_193219.jpg";
const contractorFieldPhotoUrl =
  "https://ik.imagekit.io/gonkvdlk0/20160627_110906.jpg";
const ordinationFamilyPhotoUrl =
  "https://ik.imagekit.io/gonkvdlk0/20190412_113617.jpg";
const familyPlatformPhotoUrl =
  "https://ik.imagekit.io/gonkvdlk0/FB_IMG_1582381996862.jpg";
const swimmingMedalsPhotoUrl =
  "https://ik.imagekit.io/gonkvdlk0/FB_IMG_1582382340895.jpg";
const templeFairToyPhotoUrl =
  "https://ik.imagekit.io/gonkvdlk0/FB_IMG_1582382820799.jpg";
const littleAomsubPhotoUrl =
  "https://ik.imagekit.io/gonkvdlk0/FB_IMG_1582383241201.jpg";
const sneakyLookPhotoUrl =
  "https://ik.imagekit.io/gonkvdlk0/FB_IMG_1582384362705.jpg";
const familyMealPhotoUrl =
  "https://ik.imagekit.io/gonkvdlk0/IMG_20200304_184358.jpg";
const parentsCouplePhotoUrl = "https://ik.imagekit.io/gonkvdlk0/IMG_1407.JPG";
const fatherStudentPhotoUrl =
  "https://ik.imagekit.io/gonkvdlk0/Screenshot%202026-05-08%20015159.png";
const loveFatherPhotoUrl =
  "https://ik.imagekit.io/gonkvdlk0/FB_IMG_1691827777656.jpg";
const littleKidPhotoUrlOne =
  "https://ik.imagekit.io/gonkvdlk0/20231001203858305.jpg";
const littleKidPhotoUrlTwo =
  "https://ik.imagekit.io/gonkvdlk0/20231001203851990.jpg";
const workingWithFatherPhotoUrl = "https://ik.imagekit.io/gonkvdlk0/IMG_2771.jpg";
const fatherChangingLightPhotoUrl =
  "https://ik.imagekit.io/gonkvdlk0/20251221_172817.jpg";
const cowboyNightParentsPhotoUrl = "https://ik.imagekit.io/gonkvdlk0/IMG_1716.JPG";
const aomsinEatingPhotoUrl = "https://ik.imagekit.io/gonkvdlk0/IMG_1752.JPG";
const meAndDadPhotoUrl = "https://ik.imagekit.io/gonkvdlk0/IMG_1753.JPG";
const galaxyJ7ProPhotoUrl = "https://ik.imagekit.io/gonkvdlk0/20180328_131512.jpg";
const durianPhotoUrlOne = "https://ik.imagekit.io/gonkvdlk0/20180430_192425.jpg";
const durianPhotoUrlTwo = "https://ik.imagekit.io/gonkvdlk0/20180430_192316.jpg";
const durianPhotoUrlThree = "https://ik.imagekit.io/gonkvdlk0/20180430_192421.jpg";
const loveMomPhotoUrls = [
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%94%E0%B8%94%E0%B8%94/IMG_20200627_160637.jpg",
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%94%E0%B8%94%E0%B8%94/IMG_0218.PNG",
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%94%E0%B8%94%E0%B8%94/IMG_20220708_002141.jpg",
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%94%E0%B8%94%E0%B8%94/IMG_20230115_151906.jpg",
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%94%E0%B8%94%E0%B8%94/IMG_20200627_160647.jpg",
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%94%E0%B8%94%E0%B8%94/20190412_134541.jpg",
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%94%E0%B8%94%E0%B8%94/20190329_165001.jpg",
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%94%E0%B8%94%E0%B8%94/20231229174423458.jpg",
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%94%E0%B8%94%E0%B8%94/20190412_075422.jpg",
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%94%E0%B8%94%E0%B8%94/20231229172113665.jpg",
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%94%E0%B8%94%E0%B8%94/20190329_194753.jpg",
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%94%E0%B8%94%E0%B8%94/20190407_103102.jpg",
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%94%E0%B8%94%E0%B8%94/20250520_213625.jpg",
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%94%E0%B8%94%E0%B8%94/20181202_161119.jpg",
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%94%E0%B8%94%E0%B8%94/20190407_170834.jpg",
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%94%E0%B8%94%E0%B8%94/Screenshot_2024-02-29-20-45-47-881_jp.naver.line.android.jpg",
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%94%E0%B8%94%E0%B8%94/20181202_152112.jpg",
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%94%E0%B8%94%E0%B8%94/IMG_1717.JPG",
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%94%E0%B8%94%E0%B8%94/IMG_20220708_002019.jpg",
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%94%E0%B8%94%E0%B8%94/FB_IMG_1728664041710.jpg",
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%94%E0%B8%94%E0%B8%94/IMG_5133.JPG",
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%94%E0%B8%94%E0%B8%94/FB_IMG_1691827727829.jpg",
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%94%E0%B8%94%E0%B8%94/FB_IMG_1626205243489.jpg",
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%94%E0%B8%94%E0%B8%94/20181021_185529.jpg",
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%94%E0%B8%94%E0%B8%94/IMG_20221210_201314.jpg",
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%94%E0%B8%94%E0%B8%94/20181005_131740.jpg",
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%94%E0%B8%94%E0%B8%94/IMG_1754.JPG",
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%94%E0%B8%94%E0%B8%94/IMG_1740.JPG",
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%94%E0%B8%94%E0%B8%94/IMG_1741.JPG",
  "https://ik.imagekit.io/gonkvdlk0/%E0%B8%94%E0%B8%94%E0%B8%94/IMG_20220708_001957.jpg",
];

const grandfather = {
  name: "นายวิญญู พึ่งภักดี",
  nickname: "ตาแดง",
  relation: "ตา",
  role: "ภูล้อมฟาร์ม",
  detail: "พ่อของแม่",
  initials: "ตา",
  icon: Sprout,
  photo: grandfatherPhotoUrl,
  photoClassName: "object-position-grandfather",
};

const grandmother = {
  name: "นางพิจิตรา พึ่งภักดี",
  nickname: "ยายปาน",
  relation: "ยาย",
  role: "ภูล้อมฟาร์ม",
  detail: "แม่ของแม่",
  initials: "ยา",
  icon: Sprout,
  photo: grandmotherPhotoUrl,
};

const uncle = {
  name: "สุรวุฒิ พึ่งภักดี",
  nickname: "น้าแป๊ะ",
  relation: "น้าชาย",
  role: "Dev",
  detail: "น้าชายสายเทคของครอบครัว",
  initials: "ป",
  icon: Code2,
  photo: unclePaPhotoUrl,
};

const mother = {
  name: "นภาวรรณ พึ่งภักดี",
  prefix: "นางสาว",
  nickname: "แอ๊ะ",
  relation: "แม่",
  role: "ธุรกิจส่วนตัว",
  detail: "ร้านกาแฟ ร้านน้ำ และลานเบียร์",
  initials: "ม",
  icon: Coffee,
  photo: napawanPhotoUrl,
};

const aunt = {
  name: "น้าเนตร",
  nickname: "น้าเนตร",
  relation: "น้าผู้หญิง",
  role: "นักเทรด Forex",
  detail: "สายวิเคราะห์ตลาดและการลงทุน",
  initials: "น",
  icon: TrendingUp,
  photo: auntNetPhotoUrl,
};

const father = {
  name: "ชัยวัฒน์ แซ่ตั้ง",
  prefix: "นาย",
  nickname: "จุ้ย",
  relation: "พ่อ",
  role: "สถาปนิกระดับสามัญ",
  detail: "ฮีโร่ของบ้าน",
  initials: "พ",
  icon: ShieldCheck,
  photo: chaiwatPhotoUrl,
  hero: true,
};

const aomsin = {
  name: "ณัฐภัทร พึ่งภักดี",
  prefix: "นาย",
  nickname: "ออมสิน",
  relation: "พี่ชาย",
  role: "Fullstack Developer",
  detail: "คลิกชื่อเพื่อไปหน้าโปรไฟล์",
  initials: "อส",
  icon: Code2,
  href: siblingProfileUrl,
  photo: siblingPhotoUrl,
};

const aomsub = {
  name: "ภูเบศ พึ่งภักดี",
  prefix: "นาย",
  nickname: "ออมทรัพย์",
  relation: "ฉัน",
  role: "Dev และงานที่เกี่ยวข้องกับธุรกิจ",
  detail: "เจ้าของพื้นที่ Family Memory",
  initials: "อท",
  icon: BriefcaseBusiness,
  photo: aomsubPhotoUrl,
};

const memoryPhotos = [
  {
    src: happyFamilyPhotoUrl,
    title: "รูปครอบครัวสุขสันต์เฮฮาครบ 4 คน",
    caption: "ความทรงจำอบอุ่นของบ้านเรา",
  },
  {
    src: contractorFieldPhotoUrl,
    title: "พ่อลงพื้นที่ทำงานรับเหมา",
    caption: "มีตาโก้ทำงานอยู่ด้วย",
  },
  {
    src: ordinationFamilyPhotoUrl,
    title: "กระผมบวชพระ",
    caption: "โยมพ่อ โยมแม่ โยมพี่ ร่วมกันถ่ายรูปอนุโมทนาบุญ",
  },
  {
    src: familyPlatformPhotoUrl,
    title: "ถ่ายที่แพลตฟอร์มพ่อแม่ลูก",
    caption: "อีกหนึ่งวันของครอบครัวที่อยู่ด้วยกัน",
  },
  {
    src: swimmingMedalsPhotoUrl,
    title: "พ่อมาเชียร์แข่งที่สระว่ายน้ำ",
    caption: "สมัยยังตั้งใจว่ายน้ำ ได้เหรียญเต็มคอเลย",
  },
  {
    src: templeFairToyPhotoUrl,
    title: "สมัยได้ของเล่นงานวัด",
    caption: "ความสุขเล็ก ๆ ที่จำได้เสมอ",
  },
  {
    src: littleAomsubPhotoUrl,
    title: "ออมทรัพย์ตัวน้อย",
    caption: "ช่วงเวลาวัยเด็กที่น่าจดจำ",
  },
  {
    src: sneakyLookPhotoUrl,
    title: "แอบมองเธออยู่นะจ๊ะ",
    caption: "แต่เธอไม่รู้บ้างเลย",
  },
  {
    src: familyMealPhotoUrl,
    title: "กินข้าวพร้อมหน้า",
    caption: "ช่วงเวลาที่ได้อยู่กันพร้อมหน้า",
  },
  {
    src: parentsCouplePhotoUrl,
    title: "พ่อและแม่รูปคู่",
    caption: "ภาพคู่ของคนสำคัญที่สุดของบ้าน",
  },
  {
    src: fatherStudentPhotoUrl,
    title: "พ่อสมัยนักศึกษา",
    caption: "อีกช่วงเวลาหนึ่งของฮีโร่ของบ้าน",
  },
  {
    src: loveFatherPhotoUrl,
    title: "I love father",
    caption: "รักพ่อเสมอ",
  },
  {
    src: littleKidPhotoUrlOne,
    title: "รูปเด็กน้อย",
    caption: "ความทรงจำวัยเด็ก",
  },
  {
    src: littleKidPhotoUrlTwo,
    title: "รูปเด็กน้อย",
    caption: "อีกมุมหนึ่งของวัยเด็ก",
  },
  {
    src: workingWithFatherPhotoUrl,
    title: "ทำงานร่วมกันกับพ่อ",
    caption: "ช่วงเวลาที่ได้อยู่ข้าง ๆ และเรียนรู้จากพ่อ",
  },
  {
    src: fatherChangingLightPhotoUrl,
    title: "พ่อเปลี่ยนหลอดไฟ",
    caption: "งานเล็ก ๆ ที่พ่อยังคอยดูแลบ้านเสมอ",
  },
  {
    src: cowboyNightParentsPhotoUrl,
    title: "Cowboy night",
    caption: "My father and My mother",
  },
  {
    src: aomsinEatingPhotoUrl,
    title: "ออมสิน eating",
    caption: "โมเมนต์กินข้าวของออมสิน",
  },
  {
    src: meAndDadPhotoUrl,
    title: "Me and Dad",
    caption: "ผมกับพ่อ",
  },
  {
    src: galaxyJ7ProPhotoUrl,
    title: "ถ่ายด้วยโทรศัพท์มือถือ Galaxy J7 Pro",
    caption: "อีกภาพหนึ่งในความทรงจำ",
  },
  {
    src: durianPhotoUrlOne,
    title: "กินทุเรียน",
    caption: "โมเมนต์อร่อยของครอบครัว",
  },
  {
    src: durianPhotoUrlTwo,
    title: "กินทุเรียน",
    caption: "ความสุขเรียบง่ายบนโต๊ะกินข้าว",
  },
  {
    src: durianPhotoUrlThree,
    title: "กินทุเรียน",
    caption: "อีกภาพของช่วงเวลากินทุเรียนด้วยกัน",
  },
  ...loveMomPhotoUrls.map((src, index) => ({
    src,
    title: "I love my mom",
    caption: `รูปความทรงจำของแม่ รูปที่ ${index + 1}`,
  })),
];

const familyFunctions = [
  {
    id: "tree",
    label: "ฟังก์ชันที่ 1",
    title: "แผนผังครอบครัว",
    description: "สายใยครอบครัวพึ่งภักดีจากตาและยาย สู่พ่อแม่ และลูกชายสองคน",
    icon: Home,
  },
  {
    id: "memories",
    label: "ฟังก์ชันที่ 2",
    title: "รูปแห่งความทรงจำ",
    description: "ผนังรูปครอบครัวที่ค่อย ๆ เติมเรื่องราวสำคัญเข้าไปทีละภาพ",
    icon: Camera,
  },
  {
    id: "america",
    label: "ฟังก์ชันที่ 3",
    title: "ทำงานที่อเมริกา",
    description: "เทียบเวลา BKK - Montana และนับถอยหลังวันที่กลับไทย",
    icon: BriefcaseBusiness,
  },
];

const chaiwatLetter = [
  {
    title: "เปิดใจจากออมทรัพย์",
    body: (
      <>
        หวัดดีพ่อ ยินดีที่ได้คุยกันแบบเปิดอกนะครับ <strong>ผมออมทรัพย์เองนะ</strong>
      </>
    ),
  },
  {
    body: (
      <>
        อยากให้พ่อรู้ไว้เสมอว่า <mark>พ่อทำหน้าที่ของคำว่า "พ่อ" ได้ดีที่สุด</mark>{" "}
        เท่าที่มนุษย์คนนึงจะทำได้แล้ว ต่อไปนี้ไม่ต้องห่วงอะไรแล้วนะ{" "}
        <u>ผมจะหาทางพยายามดูแลพ่อเพิ่มเติมให้เอง</u>
      </>
    ),
  },
  {
    title: "ขอบคุณสำหรับการดูแล",
    body: (
      <>
        ผมอยากขอบคุณสำหรับการดูแล การเทคแคร์ การเอาใจใส่ และการบริหารจัดการเวลาทุกอย่างตลอดชีวิตที่ผ่านมา
        <strong> ขอบคุณมากจริงๆ กับทุกสิ่งที่พ่อทำ</strong> มันมีค่าสำหรับผมมากๆ ในทุกๆ อย่าง
        ผมตระหนักและหวนนึกถึงความทรงจำเหล่านั้นได้เสมอ{" "}
        <em>พ่อและแม่คือแหล่งความสบายใจของผมมาตลอดเลยนะครับ</em>
      </>
    ),
  },
  {
    title: "สิ่งที่ผมเห็นมาตลอด",
    body: (
      <>
        ผมโตพอที่จะรับฟัง รับรู้ และเห็นปัญหาของครอบครัวเรามามาก และผมก็เห็นมาตลอดว่าพ่อตั้งหน้ารับมือกับทุกอย่างได้เป็นอย่างดี
        การเป็นหัวหน้าครอบครัวมันแบกภาระหนักหนาสาหัสจริงๆ พ่อต้องแบกหน้าเผชิญกับทุกสิ่งเพื่อหาเงินมาจุนเจือครอบครัว
        หาเงินมาจ่ายทั้งภาระหนี้สิน ค่าบ้าน ค่าน้ำ ค่าไฟ ค่ารถ ค่าเทอม ค่ากิน ค่าอยู่...{" "}
        <mark>สารพัดค่าใช้จ่ายที่พ่อพยายามอย่างหนักมากๆ เพื่อเลี้ยงดูพวกเรา</mark>
      </>
    ),
  },
  {
    title: "งานหนักของสถาปนิก",
    body: (
      <>
        ผมเห็นมาตลอดว่าในอาชีพสถาปนิก พ่อต้องทำงานหนักและอดทนแค่ไหน ต้องอดหลับอดนอนเพื่อทำงาน
        อยู่ที่ทำงานก็ต้องทำตลอดแทบไม่ได้พัก พอกลับถึงบ้านมาก็ยังต้องมาทำงานบ้านต่ออีก
        ต้องแลกมาด้วยการฝืนร่างกายตัวเอง ดื่ม M-150 เครื่องดื่มชูกำลังวันละหลายๆ ขวดให้พอมีแรงทำงานต่อไหว
        จนสุดท้ายความเหนื่อยล้าพวกนั้นก็แลกมาด้วยปัญหาสุขภาพจนพ่อเป็นโรคเบาหวาน
      </>
    ),
  },
  {
    body: (
      <>
        รวมถึงอุบัติเหตุตกต้นไม้ที่พ่อเคยเจอ และอีกหลายๆ อย่างที่พ่อต้องเจ็บตัว ต้องเหนื่อยยาก
        <strong> ทุกสิ่งทุกอย่างที่พ่อเคยกระทำเพื่อครอบครัวเรา ผมเห็นและจดจำมันไว้เสมอ</strong>
      </>
    ),
  },
  {
    title: "บทเรียนที่พ่อส่งต่อ",
    body: (
      <>
        คติประจำใจ คำคม คำพูดสร้างแรงบันดาลใจต่างๆ ทั้งจากสารพัดสิ่งที่พ่อดู พ่อฟัง พ่ออ่าน...{" "}
        <em>"วิทยายุทธ์"</em> เหล่านั้น ผมซึมซับมาตลอดนะครับ สิ่งที่พ่อทำ สิ่งที่พ่อคิด
        บางเรื่องอาจจะมีทั้งมุมที่ดีและไม่ดีปะปนกันไป แต่ทุกอย่างล้วนเป็นบทเรียนที่ทำให้ผมเห็นผลลัพธ์ของการกระทำทุกประการ
        และหล่อหลอมให้ผมเติบโตมาจนถึงวันนี้
      </>
    ),
  },
  {
    title: "ให้ผมช่วยแบกรับบ้างนะ",
    body: (
      <>
        ขอขอบคุณสำหรับทุกสิ่งทุกอย่างในชีวิตที่พ่อมอบให้ ขอบคุณจริงๆ ครับที่พยายามอดทนและเสียสละมากขนาดนี้เพื่อแม่
        พี่ออมสิน และผม <mark>พ่อเก่งมากๆ แล้วที่แบกรับทุกอย่างมาได้ไกลขนาดนี้</mark>{" "}
        <u>พักบ้างนะครับ ดูแลสุขภาพตัวเองให้ดี</u> ต่อจากนี้ไป ให้ผมได้เป็นคนช่วยแบกรับและดูแลครอบครัวของเราบ้างนะ
      </>
    ),
  },
  {
    body: (
      <>
        <strong>Respect You always, my hero.</strong>{" "}
        <em>รักและเคารพพ่อเสมอครับ</em>
      </>
    ),
    closing: true,
  },
];

const napawanLetter = [
  {
    title: "ถึงแม่ ก่อนออมทรัพย์เดินทาง",
    body: (
      <>
        หวัดดีแม่ <strong>ผมออมทรัพย์นะ</strong>
      </>
    ),
  },
  {
    body: (
      <>
        ตอนนี้ผมกำลังจะเดินทางไปทำงานที่อเมริกาแล้วนะ ไปคราวนี้
        <mark>ไม่ต้องห่วงเลย</mark> เดี๋ยวผมจะคอยถ่ายรูปบรรยากาศสวยๆ
        กลับมาฝากแม่บ่อยๆ นะครับ ผมจะตั้งใจทำงานและ
        <strong>พยายามหาเงินมาให้ได้เยอะๆ เลยครับ</strong>
      </>
    ),
  },
  {
    title: "ขอบคุณสำหรับการสนับสนุน",
    body: (
      <>
        ผมอยากขอบคุณแม่มากๆ สำหรับการส่งเสียและการสนับสนุนครั้งยิ่งใหญ่ในครั้งนี้{" "}
        <mark>แม่ทำหน้าที่ของคำว่า "แม่" ได้ยอดเยี่ยมมากจริงๆ ครับ</mark>{" "}
        สำหรับออมทรัพย์แล้ว แม่เป็นผู้หญิงคนนึงที่เก่งและเข้มแข็งมากๆ เลยนะ
      </>
    ),
  },
  {
    title: "ขอให้แม่แข็งแรงขึ้นทุกวัน",
    body: (
      <>
        ผมอยากให้แม่ดูแลรักษาสุขภาพตัวเองดีๆ แข็งแรงๆ ยิ้มให้ได้เยอะๆ นะครับ{" "}
        <u>ขอให้แม่มีกำลังใจสู้กับภาวะร่างกายที่เป็นอยู่ในปัจจุบัน</u>{" "}
        และขอให้สุขภาพร่างกายดีขึ้น หายในเร็ววันนะครับ{" "}
        <em>ผมคอยเป็นกำลังใจให้แม่เสมอนะ</em>
      </>
    ),
  },
  {
    title: "สัญญาว่าจะพยายามเต็มที่",
    body: (
      <>
        ชีวิตคนเราก็คงเหมือนมีดอกกุหลาบรายล้อม มีทั้งความสวยงามให้เราชื่นชมและมีหนามแหลมคมให้ต้องคอยระวัง
        ผมเองก็ไม่รู้เหมือนกันว่าในอนาคต ผมจะสามารถหาเงินมาผ่อนค่าบ้าน ค่ารถ
        โปะหนี้สินต่างๆ หรือดูแลพ่อกับแม่ได้เต็มที่อย่างที่ใจผมหวังไว้รึเปล่า...{" "}
        <strong>แต่ผมสัญญาเลยนะว่าผมจะพยายามอย่างเต็มที่ที่สุด</strong>
      </>
    ),
  },
  {
    body: (
      <>
        ผมจะดิ้นรนทำงาน หาเงิน และสร้างรายได้จากทุกช่องทางเท่าที่ผมจะทำได้{" "}
        <mark>ให้สมกับความเหน็ดเหนื่อยที่พ่อและแม่สู้ดูแลผมมาตลอด</mark>
      </>
    ),
  },
  {
    body: (
      <>
        ผมจะพยายามหอบเอา <strong>"แจ็ค"</strong> กลับมาให้ครอบครัวเราให้ได้นะครับ{" "}
        <u>แม่ดูแลตัวเองรักษาตัวดีๆ นะ</u>
      </>
    ),
  },
  {
    body: (
      <>
        <strong>รักแม่ครับผม</strong>{" "}
        <em>ขอบคุณมากจริงๆ สำหรับทุกสิ่งทุกอย่างในชีวิตที่แม่ได้มอบให้</em>
      </>
    ),
    closing: true,
  },
];

const privateLettersByUser = {
  "Chaiwat Saetang": {
    keyPrefix: "chaiwat-letter",
    heading: "จากออมทรัพย์ ถึง ชัยวัฒน์",
    letter: chaiwatLetter,
  },
  "Napawan Phungphugdee": {
    keyPrefix: "napawan-letter",
    heading: "จากออมทรัพย์ ถึง นภาวรรณ",
    letter: napawanLetter,
  },
};

function PersonCard({ person, tone = "default", index = 0 }) {
  const Icon = person.icon || UserRound;
  const displayName = `${person.prefix ? `${person.prefix} ` : ""}${person.name}`;
  const className = `lineage-card ${tone === "hero" ? "is-hero" : ""} ${
    tone === "root" ? "is-root" : ""
  }`;

  return (
    <motion.article
      className={className}
      initial={{ opacity: 0, y: 18, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.06 }}
    >
      <div className="lineage-photo">
        {person.photo ? (
          <img
            className={person.photoClassName || ""}
            src={person.photo}
            alt={`รูปโปรไฟล์ ${person.nickname}`}
          />
        ) : (
          <>
            <Camera className="h-9 w-9 text-emerald-900/20" />
            <span>{person.initials}</span>
          </>
        )}
      </div>
      <div className="min-w-0">
        <div className="lineage-chip">
          <Icon className="h-3.5 w-3.5" />
          {person.relation}
        </div>
        <h3>
          {person.href ? (
            <a href={person.href} target="_blank" rel="noreferrer">
              {displayName}
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : (
            displayName
          )}
        </h3>
        <p>({person.nickname})</p>
        <strong>{person.role}</strong>
        <small>{person.detail}</small>
      </div>
    </motion.article>
  );
}

function ThreadLabel({ children, variant = "green" }) {
  return (
    <div className={`thread-label ${variant === "gold" ? "is-gold" : ""}`}>
      <span />
      <strong>{children}</strong>
      <span />
    </div>
  );
}

function FunctionBentoMenu({ activeFunction, onChange }) {
  return (
    <aside className="family-bento-menu" aria-label="เมนูฟังก์ชัน Family Memory">
      <div className="bento-menu-heading">
        <Sparkles className="h-5 w-5 text-ember" />
        <div>
          <p>เลือกพื้นที่</p>
          <h2>Family Memory</h2>
        </div>
      </div>

      <div className="bento-menu-grid">
        {familyFunctions.map((item) => {
          const Icon = item.icon;
          const isActive = activeFunction === item.id;

          return (
            <button
              className={`bento-menu-card ${isActive ? "is-active" : ""}`}
              key={item.id}
              type="button"
              onClick={() => onChange(item.id)}
              aria-pressed={isActive}
            >
              <span className="bento-icon">
                <Icon className="h-5 w-5" />
              </span>
              <small>{item.label}</small>
              <strong>{item.title}</strong>
              <em>{item.description}</em>
            </button>
          );
        })}
      </div>
    </aside>
  );
}

function MemoryLightbox({ photo, onClose }) {
  if (!photo) {
    return null;
  }

  return createPortal(
    <motion.div
      className="memory-lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.figure
        className="memory-lightbox"
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="memory-lightbox-close"
          type="button"
          onClick={onClose}
          aria-label="ปิดรูป"
        >
          <X className="h-5 w-5" />
        </button>
        <img src={photo.src} alt={photo.title} />
        <figcaption>
          <strong>{photo.title}</strong>
          <span>{photo.caption}</span>
        </figcaption>
      </motion.figure>
    </motion.div>,
    document.body,
  );
}

function MemoryGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  function openRandomPhoto() {
    const randomIndex = Math.floor(Math.random() * memoryPhotos.length);
    setSelectedPhoto(memoryPhotos[randomIndex]);
  }

  useEffect(() => {
    if (!selectedPhoto) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setSelectedPhoto(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPhoto]);

  return (
    <section className="memory-gallery-section" aria-label="รูปแห่งความทรงจำ">
      <MemoryLightbox
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
      <div className="memory-gallery-heading">
        <div>
          <p>Function 02</p>
          <h2>รูปแห่งความทรงจำ</h2>
        </div>
        <div className="memory-gallery-actions">
          <button type="button" onClick={openRandomPhoto}>
            <Shuffle className="h-5 w-5" />
            สุ่มดูรูป
          </button>
          <div className="memory-gallery-count">
            <Camera className="h-5 w-5" />
            {memoryPhotos.length} photos
          </div>
        </div>
      </div>

      <div className="memory-gallery-grid">
        {memoryPhotos.map((photo, index) => (
          <motion.figure
            className="memory-photo-card"
            key={`${photo.src}-${photo.title}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: Math.min(index * 0.04, 0.28) }}
            tabIndex={0}
            role="button"
            aria-label={`เปิดรูป ${photo.title}`}
            onClick={() => setSelectedPhoto(photo)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setSelectedPhoto(photo);
              }
            }}
          >
            <img src={photo.src} alt={photo.title} loading="lazy" />
            <figcaption>
              <Sparkles className="h-4 w-4" />
              <span>
                <strong>{photo.title}</strong>
                {photo.caption}
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

function FamilyTreeBoard() {
  const catPhotos = [
    {
      name: "อ้วง",
      src: "https://ik.imagekit.io/gonkvdlk0/IMG_0559.jpg",
    },
  ];

  return (
    <section className="family-tree-stack" aria-label="แผนผังครอบครัวพึ่งภักดี">
      <div className="lineage-board">
        <div className="lineage-board-title">
          <p>ครอบครัว</p>
          <h2>พึ่งภักดี Family Tree</h2>
        </div>

        <div className="lineage-generation roots">
          <PersonCard person={grandfather} tone="root" index={0} />
          <div className="couple-knot">
            <Heart className="h-5 w-5" />
            ตา + ยาย
          </div>
          <PersonCard person={grandmother} tone="root" index={1} />
        </div>

        <ThreadLabel>ลูกของตาแดงและยายปาน</ThreadLabel>

        <div className="lineage-generation siblings">
          <PersonCard person={uncle} index={0} />
          <PersonCard person={mother} index={1} />
          <PersonCard person={aunt} index={2} />
        </div>

        <ThreadLabel variant="gold">
          พ่อเชื่อมกับแม่ กลายเป็นบ้านของลูกชายสองคน
        </ThreadLabel>

        <div className="lineage-generation marriage">
          <PersonCard person={father} tone="hero" index={0} />
          <div className="marriage-knot">
            <Heart className="h-6 w-6" />
            พ่อ + แม่
          </div>
          <PersonCard person={mother} index={1} />
        </div>

        <ThreadLabel>ออมสิน และ ออมทรัพย์</ThreadLabel>

        <div className="lineage-generation children">
          <PersonCard person={aomsin} index={0} />
          <PersonCard person={aomsub} index={1} />
        </div>
      </div>

      <section className="cat-family-board" aria-label="กรอบครอบครัวแมว">
        <div className="cat-family-heading">
          <div>
            <p>Cat Family</p>
            <h2>ครอบครัวแมว</h2>
          </div>
          <span>เว้นช่องรูปไว้ 16 รูป</span>
        </div>

        <div className="cat-photo-grid">
          {Array.from({ length: 16 }, (_, index) => {
            const cat = catPhotos[index];

            return (
              <div
                className={`cat-photo-slot ${cat ? "has-photo" : ""}`}
                key={`cat-slot-${index + 1}`}
              >
                {cat ? (
                  <>
                    <img src={cat.src} alt={`รูปแมว ${cat.name}`} loading="lazy" />
                    <strong>{cat.name}</strong>
                  </>
                ) : (
                  <>
                    <Camera className="h-7 w-7" />
                    <strong>Cat {String(index + 1).padStart(2, "0")}</strong>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}

const bkkTimeFormatter = new Intl.DateTimeFormat("th-TH", {
  timeZone: "Asia/Bangkok",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

const montanaTimeFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Denver",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

const workStartDate = new Date("2026-05-18T00:00:00+07:00");
const returnThailandDate = new Date("2026-09-12T00:00:00+07:00");
const millisecondsPerDay = 24 * 60 * 60 * 1000;

function getCountdownParts(now) {
  const totalDays = Math.ceil((returnThailandDate - workStartDate) / millisecondsPerDay);
  const remainingMs = returnThailandDate - now;
  const elapsedMs = now - workStartDate;
  const remainingDays = Math.max(0, Math.ceil(remainingMs / millisecondsPerDay));
  const elapsedDays = Math.min(totalDays, Math.max(0, Math.floor(elapsedMs / millisecondsPerDay)));
  const progress = Math.min(100, Math.max(0, (elapsedDays / totalDays) * 100));

  return {
    totalDays,
    remainingDays,
    elapsedDays,
    progress,
    hasStarted: now >= workStartDate,
    hasReturned: now >= returnThailandDate,
  };
}

function AmericaWorkPanel() {
  const [now, setNow] = useState(() => new Date());
  const countdown = getCountdownParts(now);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="america-work-panel" aria-label="ทำงานที่อเมริกา">
      <div className="america-panel-heading">
        <div>
          <p>Function 03</p>
          <h2>BKK - Montana Time Bridge</h2>
        </div>
        <div className="america-status-pill">
          <Sparkles className="h-5 w-5" />
          ขอบคุณคั้บ รักษาสุขภาพด้วย
        </div>
      </div>

      <div className="timezone-grid">
        <article className="timezone-card">
          <span>Bangkok, Thailand</span>
          <strong>{bkkTimeFormatter.format(now)}</strong>
          <small>Asia/Bangkok</small>
        </article>
        <article className="timezone-card is-montana">
          <span>Montana, USA</span>
          <strong>{montanaTimeFormatter.format(now)}</strong>
          <small>America/Denver</small>
        </article>
      </div>

      <div className="time-difference-card">
        <p>เวลา BKK เร็วกว่า Montana โดยประมาณ</p>
        <strong>13 ชั่วโมง 0 นาที 0 วินาที</strong>
        <small>ช่วง พ.ค. - ก.ย. Montana ใช้เวลา Mountain Daylight Time</small>
      </div>

      <div className="return-countdown-card">
        <div>
          <p>นับถอยหลังกลับไทย</p>
          <h3>18 พ.ค. 2569 - 12 ก.ย. 2569</h3>
        </div>
        <strong>
          {countdown.hasReturned ? "กลับถึงไทยแล้ว" : `${countdown.remainingDays} วัน`}
        </strong>
        <div className="return-progress" aria-hidden="true">
          <span style={{ width: `${countdown.progress}%` }} />
        </div>
        <small>
          {countdown.hasStarted
            ? `ผ่านไปแล้ว ${countdown.elapsedDays} จาก ${countdown.totalDays} วัน`
            : `ยังไม่เริ่มเดินทาง เหลือ ${Math.max(
                0,
                Math.ceil((workStartDate - now) / millisecondsPerDay),
              )} วันก่อนเริ่มงาน`}
        </small>
      </div>

      <div className="health-note-card">
        <Heart className="h-7 w-7 text-ember" />
        <p>
          ขอบคุณคั้บ รักษาสุขภาพด้วยนะครับ กินข้าว พักผ่อน และดูแลตัวเองดี ๆ
          ระหว่างที่ผมไปทำงานที่อเมริกา
        </p>
      </div>
    </section>
  );
}

function PrivateLetterModal({ open, onClose, heading, letter }) {
  if (!open) {
    return null;
  }

  return (
    <motion.div
      className="letter-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="private-letter-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.article
        className="chaiwat-letter"
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          className="letter-close-button"
          type="button"
          onClick={onClose}
          aria-label="ปิดข้อความ"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="letter-heading">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-ember/40 bg-ember/15 shadow-gold">
            <Heart className="h-7 w-7 text-ember" />
          </div>
          <div>
            <p>ข้อความส่วนตัว</p>
            <h2 id="private-letter-title">{heading}</h2>
          </div>
        </div>
        <div className="letter-scroll">
          {letter.map((paragraph, index) => (
            <section
              className={`letter-paragraph ${paragraph.closing ? "is-closing" : ""}`}
              key={`${paragraph.title || "letter"}-${index}`}
            >
              {paragraph.title ? <h3>{paragraph.title}</h3> : null}
              <p>{paragraph.body}</p>
            </section>
          ))}
        </div>
        <button className="letter-read-button" type="button" onClick={onClose}>
          อ่านแล้วครับ
        </button>
      </motion.article>
    </motion.div>
  );
}

export default function Family() {
  const session = getSession();
  const [activeLetter, setActiveLetter] = useState(null);
  const [letterSeenKey, setLetterSeenKey] = useState("");
  const [activeFunction, setActiveFunction] = useState("tree");
  const currentFunction =
    familyFunctions.find((item) => item.id === activeFunction) || familyFunctions[0];

  useEffect(() => {
    const letterConfig = privateLettersByUser[session?.username];

    if (!letterConfig) {
      return;
    }

    const key = `${letterConfig.keyPrefix}-${session.issuedAt}`;
    setLetterSeenKey(key);

    if (!window.sessionStorage.getItem(key)) {
      setActiveLetter(letterConfig);
    }
  }, [session?.issuedAt, session?.username]);

  function closePrivateLetter() {
    if (letterSeenKey) {
      window.sessionStorage.setItem(letterSeenKey, "read");
    }

    setActiveLetter(null);
  }

  return (
    <PageTransition className="page-shell family-page-shell">
      <PrivateLetterModal
        open={Boolean(activeLetter)}
        onClose={closePrivateLetter}
        heading={activeLetter?.heading || ""}
        letter={activeLetter?.letter || []}
      />
      <div
        className="cinematic-bg"
        style={{ backgroundImage: `url(${familyImage})` }}
      />
      <div className="signal-grid" />
      <div className="noise-layer" />

      <section className="section-pad flex min-h-[100svh] flex-col gap-8 py-10">
        <nav className="flex items-center justify-between gap-4">
          <div className="eyebrow">
            <Heart className="h-4 w-4 text-ember" />
            Family Memory
          </div>
          <LogoutButton />
        </nav>

        <div className="family-function-layout">
          <FunctionBentoMenu
            activeFunction={activeFunction}
            onChange={setActiveFunction}
          />

          <div className="family-function-stage">
            <motion.div
              className="family-function-hero"
              key={`hero-${activeFunction}`}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              <p>{currentFunction.label}</p>
              <h1>{currentFunction.title}</h1>
              <span>{currentFunction.description}</span>
            </motion.div>

            <motion.div
              className="family-function-content"
              key={activeFunction}
              initial={{ opacity: 0, y: 28, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {activeFunction === "tree" ? (
                <FamilyTreeBoard />
              ) : activeFunction === "memories" ? (
                <MemoryGallery />
              ) : (
                <AmericaWorkPanel />
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
