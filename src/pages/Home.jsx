
import logo from "./../assets/images/logo4.png";

const campusImage =
  "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SxokFKbv7bGBGU4EveZdMTIX3sSzIiPbLN2Og_hg1_wsTEiL2eWCEJNOrqLhK__EncIEQV0j2fF0ULdfRK01mMcN3lHfhpNIH82XwBPMwPXL7AkJ0JcypYexqo_DEHHZqPOSOJSoMnPGpi=s1360-w1360-h1020-rw";

const aboutImage =
  "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S6Zt9WdYeV5729dd1mtjQGz-oFBxtnpHe-8Vdi_oxVdk0bpFC1U9O1xMD0HosdQbp7SAtLMkjCQuKmwPZc0WcG5jc1w-WaZ_tTm-OrlTjuPva7zjZGeJXEL4V9GkPxnNpSO0tctXtj0ETs=s1360-w1360-h1020-rw";

const navLinks = [
  ["Home", "#home"],
  ["Our School", "#about"],
  ["Academics", "#academics"],
  ["Admissions", "#admissions"],
  ["Careers", "#careers"],
];

const academicFeatures = [
  {
    number: "01",
    title: "Academic Excellence",
    description:
      "Building strong foundations through meaningful classroom learning.",
    icon: "✳",
    style: "bg-[#E8EDFF]",
  },
  {
    number: "02",
    title: "Learning by Doing",
    description:
      "Encouraging students to explore through practical experiences.",
    icon: "↗",
    style: "bg-[#E8F0DE]",
  },
  {
    number: "03",
    title: "Future Ready",
    description:
      "Introducing students to modern technology and new ways of learning.",
    icon: "⌘",
    style: "bg-[#F7EBDD]",
  },
  {
    number: "04",
    title: "Sports & Fitness",
    description:
      "Supporting physical growth through sports and activities.",
    icon: "◉",
    style: "bg-[#F1E9F8]",
  },
  {
    number: "05",
    title: "Creative Thinking",
    description:
      "Making room for curiosity, imagination and self-expression.",
    icon: "✧",
    style: "bg-[#F8E9E9]",
  },
  {
    number: "06",
    title: "Values & Character",
    description:
      "Developing discipline, integrity and respect for others.",
    icon: "◇",
    style: "bg-[#E4EEF1]",
  },
];

const portalItems = [
  ["01", "Students", "Academic information and student services."],
  ["02", "Parents", "Stay connected with your child's school journey."],
  ["03", "Staff", "School-related staff information and services."],
  ["04", "Admissions", "Start your admission enquiry."],
];

function Eyebrow({ children, light = false }) {
  return (
    <p
      className={`text-[11px] font-bold uppercase tracking-[3px] ${
        light ? "text-[#D8F078]" : "text-[#657A3E]"
      }`}
    >
      {children}
    </p>
  );
}

function Home() {
  return (
    <main className="min-h-screen bg-[#F7F6F0] text-[#15233B] overflow-hidden">

      {/* Top strip */}
      <div className="bg-[#101D35] text-white">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-12 py-2.5 flex justify-between items-center text-[11px] tracking-wide">
          <p className="text-white/70 hidden sm:block">
            WELCOME TO SUNDERAM PUBLIC H.S. SCHOOL · INDORE
          </p>
          <p className="sm:hidden text-white/70">SUNDERAM · INDORE</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#D8F078] rounded-full" />
              Admissions Open
            </span>
            <a href="#contact" className="text-[#D8F078] hover:text-white transition">
              Contact ↗
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#F7F6F0]/95 backdrop-blur-xl border-b border-[#15233B]/10">
        <nav className="max-w-[1440px] mx-auto px-5 lg:px-12 h-[82px] flex items-center justify-between gap-5">
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="Sunderam School" className="w-14 h-14 object-contain" />
            <div>
              <h1 className="text-xl font-black tracking-[-1px] leading-none">
                SUNDERAM
              </h1>
              <p className="text-[11px] font-semibold text-slate-600 mt-1">
                Public H.S. School
              </p>
              <p className="text-[8px] tracking-[2px] text-slate-400 mt-1">
                NURSERY TO CLASS 12
              </p>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[13px] font-semibold text-[#526078] hover:text-[#657A3E] transition"
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href="/login"
            className="hidden sm:flex items-center gap-3 bg-[#15233B] text-white px-5 py-3 rounded-full text-xs font-bold hover:bg-[#657A3E] transition"
          >
            School Portal <span className="text-[#D8F078]">↗</span>
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative bg-[#F7F6F0]">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-12 pt-12 lg:pt-16 pb-16">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-12 items-center">

            <div className="relative z-10 py-5 lg:py-12">
              <Eyebrow>Learning · Growing · Becoming</Eyebrow>

              <h2 className="text-[54px] sm:text-[76px] lg:text-[88px] leading-[0.98] tracking-[-5px] font-black mt-7">
                A brighter
                <br />
                <span className="text-[#657A3E]">way to</span>
                <br />
                <span className="relative inline-block">
                  learn<span className="text-[#D1A45D]">.</span>
                  <span className="absolute -bottom-2 left-0 w-[85%] h-2 bg-[#D8F078] -z-10 rounded-full" />
                </span>
              </h2>

              <p className="text-[#647087] text-base sm:text-lg leading-8 max-w-lg mt-9">
                Every child has a world of potential. We create an environment
                where curiosity grows, character develops and learning becomes
                a lifelong journey.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-9">
                <a
                  href="/admissions"
                  className="bg-[#15233B] text-white px-7 py-4 rounded-full text-sm font-bold hover:bg-[#657A3E] transition flex items-center gap-4 group"
                >
                  Explore Admissions
                  <span className="text-[#D8F078] group-hover:translate-x-1 transition">
                    →
                  </span>
                </a>
                <a
                  href="#about"
                  className="text-sm font-bold border-b border-[#15233B]/30 pb-2 hover:border-[#657A3E] transition"
                >
                  Discover Sunderam
                </a>
              </div>

              <div className="flex items-center gap-4 mt-14 pt-7 border-t border-[#15233B]/10 max-w-md">
                <div className="text-3xl font-black text-[#15233B]">2004</div>
                <div className="text-xs leading-5 text-[#758096]">
                  A journey of learning
                  <br />
                  and growing in Indore
                </div>
                <div className="w-px h-10 bg-[#15233B]/15 mx-2" />
                <div className="text-3xl font-black text-[#15233B]">2</div>
                <div className="text-xs leading-5 text-[#758096]">
                  Acre
                  <br />
                  campus
                </div>
              </div>
            </div>

            <div className="relative min-h-[420px] sm:min-h-[570px]">
              <div className="absolute top-0 right-0 w-[88%] h-[90%] bg-[#D8F078] rounded-[45%_45%_20px_20px] rotate-2" />
              <div className="absolute top-0 right-0 w-[88%] h-[90%] overflow-hidden rounded-[45%_45%_20px_20px] shadow-2xl">
                <img
                  src={campusImage}
                  alt="Sunderam school campus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101D35]/55 via-transparent to-transparent" />
              </div>

              <div className="absolute left-0 bottom-4 sm:bottom-8 bg-white p-5 sm:p-6 rounded-2xl shadow-xl max-w-[230px]">
                <p className="text-[10px] tracking-[2px] font-bold text-[#657A3E] uppercase">
                  Our belief
                </p>
                <p className="text-lg font-bold leading-6 mt-3">
                  Education is a preparation for life.
                </p>
                <div className="w-10 h-1 bg-[#D8F078] mt-4 rounded-full" />
              </div>

              <div className="absolute top-10 left-0 sm:left-5 w-16 h-16 rounded-full bg-[#15233B] text-[#D8F078] flex items-center justify-center text-2xl shadow-xl">
                ✳
              </div>

              <p className="absolute right-0 bottom-[-22px] text-[10px] tracking-[3px] font-bold text-[#8991A0] uppercase [writing-mode:vertical-rl]">
                EST. 2004 · INDORE
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Moving-style message band */}
      <section className="bg-[#D8F078] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-12 py-5 flex flex-wrap justify-center sm:justify-between items-center gap-4 text-[#15233B]">
          <span className="text-xs sm:text-sm font-black tracking-wide">CURIOUS MINDS.</span>
          <span className="text-xl">✳</span>
          <span className="text-xs sm:text-sm font-black tracking-wide">CONFIDENT FUTURES.</span>
          <span className="text-xl">✳</span>
          <span className="text-xs sm:text-sm font-black tracking-wide">STRONGER VALUES.</span>
          <span className="text-xl">✳</span>
          <span className="text-xs sm:text-sm font-black tracking-wide">LIFELONG LEARNING.</span>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 lg:py-32 px-5 lg:px-12">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative">
            <div className="absolute -left-6 -top-6 w-32 h-32 border-l border-t-2 border-[#657A3E]" />
            <img
              src={aboutImage}
              alt="Sunderam school campus"
              className="relative w-full h-[380px] sm:h-[510px] object-cover rounded-[8px_80px_8px_8px]"
            />
            <div className="absolute -bottom-7 right-5 sm:right-10 bg-[#D8F078] p-6 sm:p-8 max-w-[220px]">
              <p className="text-4xl font-black">20+</p>
              <p className="text-xs font-semibold mt-1">Years of educational journey</p>
            </div>
          </div>

          <div className="lg:pl-5">
            <Eyebrow>More than a school</Eyebrow>
            <h2 className="text-4xl sm:text-6xl font-black tracking-[-2px] leading-[1.05] mt-6">
              Education that
              <br />
              <span className="text-[#657A3E]">shapes tomorrow.</span>
            </h2>

            <p className="text-[#647087] leading-8 mt-8">
              Sunderam Public H.S. School is an English and Hindi medium
              co-educational institution located in Indore, Madhya Pradesh.
            </p>
            <p className="text-[#647087] leading-8 mt-4">
              Established in 2004, the school provides an educational
              environment focused on knowledge, discipline, individual
              development and strong values.
            </p>
            <p className="text-[#647087] leading-8 mt-4">
              Spread across a two-acre campus, Sunderam encourages students
              to develop their abilities through academic learning,
              practical experiences and co-curricular activities.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-9 pt-7 border-t border-[#15233B]/10">
              <div>
                <p className="font-black text-xl">English & Hindi</p>
                <p className="text-xs text-[#7C8798] mt-1">Medium of education</p>
              </div>
              <div>
                <p className="font-black text-xl">Co-educational</p>
                <p className="text-xs text-[#7C8798] mt-1">Learning environment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academics */}
      <section id="academics" className="bg-[#15233B] text-white py-24 lg:py-32 px-5 lg:px-12">
        <div className="max-w-[1280px] mx-auto">

          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 mb-14">
            <div>
              <Eyebrow light>Learning has no limits</Eyebrow>
              <h2 className="text-4xl sm:text-6xl font-black tracking-[-2px] mt-5">
                The whole child.
                <br />
                <span className="text-[#D8F078]">The whole future.</span>
              </h2>
            </div>
            <p className="text-white/55 leading-7 max-w-sm">
              Education is more than textbooks. We encourage students to
              explore, experience and grow in different ways.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {academicFeatures.map((item, index) => (
              <article
                key={item.number}
                className={`group min-h-[245px] rounded-2xl p-7 sm:p-9 text-[#15233B] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                  index === 0
                    ? "bg-[#D8F078]"
                    : index === 1
                    ? "bg-[#E8EDFF]"
                    : index === 2
                    ? "bg-[#F7EBDD]"
                    : index === 3
                    ? "bg-[#E4EEF1]"
                    : index === 4
                    ? "bg-[#F1E9F8]"
                    : "bg-[#F8E9E9]"
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold opacity-50">{item.number}</span>
                  <span className="text-3xl group-hover:rotate-12 transition">
                    {item.icon}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-black tracking-tight">{item.title}</h3>
                  <p className="text-sm leading-6 text-[#526078] mt-3 max-w-xs">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Vision and mission */}
      <section className="py-24 lg:py-32 px-5 lg:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-2xl">
            <Eyebrow>What guides us</Eyebrow>
            <h2 className="text-4xl sm:text-6xl font-black tracking-[-2px] mt-5">
              More than marks.
              <br />
              <span className="text-[#657A3E]">A way of life.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 mt-14">
            <div className="bg-white border border-[#15233B]/10 p-8 sm:p-12 rounded-3xl">
              <p className="text-5xl text-[#657A3E]">✳</p>
              <Eyebrow>Our vision</Eyebrow>
              <h3 className="text-3xl sm:text-4xl font-black mt-5">
                Empowering Education
              </h3>
              <p className="text-[#647087] leading-8 mt-6">
                We believe in creating an education system where values
                are more important than academic scorecards, compassion
                than competence, and cooperation than competition.
              </p>
            </div>

            <div className="bg-[#D8F078] p-8 sm:p-12 rounded-3xl">
              <p className="text-5xl">✧</p>
              <Eyebrow>Our mission</Eyebrow>
              <h3 className="text-3xl sm:text-4xl font-black mt-5">
                Education for Life
              </h3>
              <p className="text-[#526078] leading-8 mt-6">
                Our mission is to develop discipline, integrity,
                a humanitarian spirit, positive attitudes and social
                and moral values in every student.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portals */}
      <section id="portals" className="bg-[#EDEFE7] py-24 lg:py-28 px-5 lg:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5 mb-12">
            <div>
              <Eyebrow>One connected community</Eyebrow>
              <h2 className="text-4xl sm:text-5xl font-black tracking-[-2px] mt-5">
                Your school, <span className="text-[#657A3E]">one click away.</span>
              </h2>
            </div>
            <p className="text-sm text-[#647087] max-w-sm leading-7">
              Dedicated access points for students, parents, teachers and
              admission enquiries.
            </p>
          </div>

          <div className="border-t border-[#15233B]/15">
            {portalItems.map(([number, title, description]) => (
              <a
                href="#contact"
                key={number}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-7 border-b border-[#15233B]/15 hover:px-4 transition-all"
              >
                <span className="text-xs text-[#8991A0] font-bold">{number}</span>
                <h3 className="text-2xl sm:text-3xl font-black flex-1 group-hover:text-[#657A3E] transition">
                  {title}
                </h3>
                <p className="text-sm text-[#758096] max-w-xs">{description}</p>
                <span className="text-2xl group-hover:translate-x-2 transition">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions */}
      <section id="admissions" className="px-5 lg:px-12 py-24">
        <div className="relative max-w-[1280px] mx-auto bg-[#15233B] text-white rounded-[30px] overflow-hidden">
          <div className="absolute right-[-80px] top-[-120px] w-[400px] h-[400px] rounded-full border-[70px] border-white/[0.04]" />
          <div className="absolute right-[140px] bottom-[-230px] w-[350px] h-[350px] rounded-full bg-[#D8F078]/10 blur-2xl" />

          <div className="relative px-8 py-16 sm:px-16 sm:py-20 max-w-3xl">
            <Eyebrow light>Every journey begins somewhere</Eyebrow>
            <h2 className="text-4xl sm:text-6xl font-black tracking-[-2px] leading-[1.05] mt-6">
              Give potential
              <br />
              a place to <span className="text-[#D8F078]">grow.</span>
            </h2>
            <p className="text-white/60 leading-8 mt-7 max-w-lg">
              Discover an environment where every student is encouraged
              to learn, grow and build a strong foundation for life.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-5 bg-[#D8F078] text-[#15233B] px-7 py-4 rounded-full font-bold text-sm mt-9 hover:bg-white transition"
            >
              Enquire About Admissions <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="px-5 lg:px-12 py-16 border-t border-[#15233B]/10">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <Eyebrow>Grow with us</Eyebrow>
            <h2 className="text-3xl sm:text-4xl font-black mt-4">
              Careers at Sunderam
            </h2>
            <p className="text-sm text-[#758096] mt-3">
              Join our team of passionate educators and professionals.
            </p>
          </div>
          <a
            href="#contact"
            className="border border-[#15233B] rounded-full px-7 py-4 text-sm font-bold hover:bg-[#15233B] hover:text-white transition"
          >
            Get in Touch ↗
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white py-24 px-5 lg:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14">
            <div>
              <Eyebrow>Let's connect</Eyebrow>
              <h2 className="text-5xl sm:text-6xl font-black tracking-[-2px] mt-5">
                Say
                <br />
                <span className="text-[#657A3E]">hello.</span>
              </h2>
              <p className="text-[#758096] leading-7 mt-7 max-w-sm">
                Have a question about the school or admissions?
                We'd be happy to hear from you.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="border-t-2 border-[#D8F078] pt-6">
                <p className="text-xs font-bold text-[#657A3E] uppercase tracking-widest">
                  Visit Us
                </p>
                <h3 className="text-xl font-black mt-4">Campus Address</h3>
                <p className="text-sm text-[#758096] leading-7 mt-3">
                  25, Vishal Nagar,<br />
                  Kushwah Nagar Square,<br />
                  Indore, Madhya Pradesh.
                </p>
              </div>

              <div className="border-t-2 border-[#D8F078] pt-6">
                <p className="text-xs font-bold text-[#657A3E] uppercase tracking-widest">
                  Call Us
                </p>
                <h3 className="text-xl font-black mt-4">Contact Numbers</h3>
                <div className="text-sm text-[#758096] leading-7 mt-3">
                  <p>0731-3251171</p>
                  <p>+91 9826049556</p>
                  <p>WhatsApp: 8435404440</p>
                </div>
              </div>

              <div className="border-t-2 border-[#D8F078] pt-6 sm:col-span-2">
                <p className="text-xs font-bold text-[#657A3E] uppercase tracking-widest">
                  Write to Us
                </p>
                <h3 className="text-xl font-black mt-4">Email Address</h3>
                <a
                  href="mailto:info@sunderampublicschool.com"
                  className="text-sm text-[#657A3E] mt-3 inline-block hover:underline"
                >
                  info@sunderampublicschool.com ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#101D35] text-white px-5 lg:px-12 pt-16 pb-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 pb-14">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Sunderam logo"
                  className="w-14 h-14 bg-white rounded-xl p-1 object-contain"
                />
                <div>
                  <h2 className="text-xl font-black">SUNDERAM</h2>
                  <p className="text-xs text-white/50">Public H.S. School</p>
                </div>
              </div>
              <p className="text-sm text-white/50 leading-7 max-w-xs mt-6">
                Inspiring minds, building character and preparing students
                for a meaningful future.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-6">Explore</h3>
              <div className="flex flex-col gap-4 text-sm text-white/50">
                <a href="#home" className="hover:text-[#D8F078]">Home</a>
                <a href="#about" className="hover:text-[#D8F078]">Our School</a>
                <a href="#academics" className="hover:text-[#D8F078]">Academics</a>
                <a href="/admissions" className="hover:text-[#D8F078]">Admissions</a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-6">Quick Access</h3>
              <div className="flex flex-col gap-4 text-sm text-white/50">
                <a href="#portals" className="hover:text-[#D8F078]">Student Portal</a>
                <a href="#portals" className="hover:text-[#D8F078]">Parent Portal</a>
                <a href="#portals" className="hover:text-[#D8F078]">Staff Portal</a>
                <a href="#careers" className="hover:text-[#D8F078]">Careers</a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-6">Find Us</h3>
              <div className="text-sm text-white/50 leading-8">
                <p>Indore, Madhya Pradesh</p>
                <p>0731-3251171</p>
                <p className="break-all">info@sunderampublicschool.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row justify-between gap-3 text-[11px] text-white/35">
            <p>© {new Date().getFullYear()} Sunderam Public H.S. School. All rights reserved.</p>
            <p>Learning Today. Leading Tomorrow.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Home;
