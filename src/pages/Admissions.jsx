import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, GraduationCap, ShieldCheck } from "lucide-react";
import logo from "../assets/images/logo4.png";

const initialForm = {
  studentName: "",
  dateOfBirth: "",
  classApplying: "",
  parentName: "",
  phone: "",
  email: "",
  previousSchool: "",
  message: "",
};

const classes = [
  "Nursery",
  "LKG",
  "UKG",
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
  "Class 12",
];

function Field({ label, name, value, onChange, type = "text", placeholder, required = true }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-[#25334A]">
        {label}{required && <span className="ml-1 text-[#D18B45]">*</span>}
      </span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-[#DCE2E8] bg-white px-4 py-3 text-sm text-[#17243A] outline-none transition placeholder:text-[#A0A9B5] focus:border-[#2866A8] focus:ring-4 focus:ring-[#2866A8]/10"
      />
    </label>
  );
}

export default function Admissions() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Frontend-only for now. Connect this form to an API when the backend is ready.
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#F5F6F3] p-3 sm:p-5 lg:p-8">
      <div className="mx-auto grid min-h-[calc(100vh-2rem)] max-w-7xl overflow-hidden rounded-[28px] bg-white shadow-[0_24px_80px_rgba(20,38,62,0.12)] lg:grid-cols-[0.88fr_1.12fr]">
        {/* Brand panel */}
        <section className="relative flex min-h-[340px] flex-col justify-between overflow-hidden bg-[#15549A] px-7 py-8 text-white sm:px-10 sm:py-10 lg:min-h-[760px] lg:px-12 lg:py-12">
          <div className="absolute -right-28 top-20 h-72 w-72 rounded-full bg-[#2C82C9]/50 blur-2xl" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#2387D1]/60 blur-2xl" />
          <div className="absolute -right-16 bottom-20 h-52 w-52 rounded-full border-[35px] border-white/10" />

          <a href="/" className="relative z-10 inline-flex w-fit items-center gap-3">
            <img src={logo} alt="Sunderam Public H.S. School logo" className="h-14 w-14 rounded-2xl bg-white object-contain p-1.5" />
            <span className="leading-tight">
              <span className="block text-sm font-bold tracking-wide">SUNDERAM</span>
              <span className="block text-[10px] font-medium tracking-[0.2em] text-white/75">PUBLIC H.S. SCHOOL</span>
            </span>
          </a>

          <div className="relative z-10 max-w-lg py-10">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90">
              <GraduationCap size={14} /> Admissions open
            </span>
            <p className="mb-3 text-sm font-medium text-blue-100">A warm welcome to every new beginning</p>
            <h1 className="max-w-md text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl">
              Every great journey starts <span className="text-[#D8F078]">with a first step.</span>
            </h1>
            <p className="mt-6 max-w-md text-sm leading-7 text-blue-100/90 sm:text-base">
              Tell us a little about your child. Our admissions team will get in touch and guide you through the next steps.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/20 pt-5 text-xs text-blue-100">
            <span className="inline-flex items-center gap-2"><ShieldCheck size={15} /> A supportive learning environment</span>
            <span>Indore, Madhya Pradesh</span>
          </div>
        </section>

        {/* Form panel */}
        <section className="px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
          <a href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#687487] transition hover:text-[#15549A]">
            <ArrowLeft size={16} /> Back to home
          </a>

          {submitted ? (
            <div className="flex min-h-[560px] flex-col items-center justify-center text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#EEF5E5] text-[#657A3E]">
                <CheckCircle2 size={34} />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#657A3E]">Enquiry received</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#17243A]">Thank you for reaching out.</h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-[#6D7785]">
                Your details have been captured in this demo page. The form is not connected to the school's server yet, so no enquiry has been sent.
              </p>
              <button
                type="button"
                onClick={() => { setForm(initialForm); setSubmitted(false); }}
                className="mt-8 rounded-full bg-[#15549A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#10447E]"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#657A3E]">Start here</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#17243A] sm:text-4xl">Admission enquiry</h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-[#788291]">
                  Share the details below and our team can help you understand the admission process.
                  <span className="mt-1 block text-xs">Fields marked with * are required.</span>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[#9AA3AE]">Student details</h3>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Student's full name" name="studentName" value={form.studentName} onChange={handleChange} placeholder="Enter student's name" />
                    <Field label="Date of birth" name="dateOfBirth" value={form.dateOfBirth} onChange={handleChange} type="date" />
                    <label className="block sm:col-span-2">
                      <span className="mb-2 block text-sm font-semibold text-[#25334A]">Class applying for <span className="ml-1 text-[#D18B45]">*</span></span>
                      <select
                        name="classApplying"
                        value={form.classApplying}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-[#DCE2E8] bg-white px-4 py-3 text-sm text-[#17243A] outline-none transition focus:border-[#2866A8] focus:ring-4 focus:ring-[#2866A8]/10"
                      >
                        <option value="">Select class</option>
                        {classes.map((item) => <option key={item} value={item}>{item}</option>)}
                      </select>
                    </label>
                  </div>
                </div>

                <div className="border-t border-[#EDF0F2] pt-6">
                  <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[#9AA3AE]">Parent / guardian details</h3>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Parent / guardian name" name="parentName" value={form.parentName} onChange={handleChange} placeholder="Enter parent or guardian name" />
                    <Field label="Mobile number" name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="10-digit mobile number" />
                    <Field label="Email address" name="email" value={form.email} onChange={handleChange} type="email" placeholder="you@example.com" />
                    <Field label="Previous school" name="previousSchool" value={form.previousSchool} onChange={handleChange} placeholder="School name (if applicable)" required={false} />
                  </div>
                </div>

                <label className="block border-t border-[#EDF0F2] pt-6">
                  <span className="mb-2 block text-sm font-semibold text-[#25334A]">Anything you'd like us to know? <span className="text-xs font-normal text-[#9AA3AE]">(Optional)</span></span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Write your question or preferred time to contact you..."
                    className="w-full resize-y rounded-xl border border-[#DCE2E8] bg-white px-4 py-3 text-sm text-[#17243A] outline-none transition placeholder:text-[#A0A9B5] focus:border-[#2866A8] focus:ring-4 focus:ring-[#2866A8]/10"
                  />
                </label>

                <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xs text-xs leading-5 text-[#9AA3AE]">By submitting, you agree that the school may contact you about this enquiry.</p>
                  <button type="submit" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#15549A] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#15549A]/20 transition hover:-translate-y-0.5 hover:bg-[#10447E]">
                    Submit enquiry <ArrowRight size={17} />
                  </button>
                </div>
              </form>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
