
import logo from "../../assets/images/logo4.png";

const campusImage =
  "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SxokFKbv7bGBGU4EveZdMTIX3sSzIiPbLN2Og_hg1_wsTEiL2eWCEJNOrqLhK__EncIEQV0j2fF0ULdfRK01mMcN3lHfhpNIH82XwBPMwPXL7AkJ0JcypYexqo_DEHHZqPOSOJSoMnPGpi=s1360-w1360-h1020-rw";

function LoginBrandPanel() {
  return (
    <section className="relative hidden lg:flex flex-col justify-between min-h-screen w-[52%] overflow-hidden bg-[#101D35] text-white p-12 xl:p-16">

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={campusImage}
          alt="Sunderam school campus"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#101D35] via-[#101D35]/90 to-[#172F50]/65" />
      </div>

      {/* Decorative shapes */}
      <div className="absolute -top-32 -right-32 w-[450px] h-[450px] rounded-full border border-white/10" />
      <div className="absolute -top-20 -right-20 w-[320px] h-[320px] rounded-full border border-white/10" />
      <div className="absolute bottom-20 -left-32 w-80 h-80 rounded-full bg-[#D8F078]/10 blur-3xl" />

      {/* Brand */}
      <div className="relative z-10 flex items-center gap-4">
        <div className="w-[62px] h-[62px] bg-white rounded-2xl p-1.5 flex items-center justify-center shadow-lg">
          <img
            src={logo}
            alt="Sunderam logo"
            className="w-full h-full object-contain"
          />
        </div>

        <div>
          <h1 className="text-2xl font-black tracking-tight">
            SUNDERAM
          </h1>
          <p className="text-sm text-white/65 font-medium">
            Public H.S. School
          </p>
        </div>
      </div>

      {/* Main message */}
      <div className="relative z-10 max-w-xl py-16">
        <div className="inline-flex items-center gap-3 border border-white/20 bg-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#D8F078]" />
          <span className="text-[10px] tracking-[2px] font-bold text-white/85">
            THE SUNDERAM COMMUNITY
          </span>
        </div>

        <h2 className="text-5xl xl:text-7xl font-black tracking-[-3px] leading-[1.05]">
          Your journey.
          <br />
          Your <span className="text-[#D8F078]">future.</span>
        </h2>

        <p className="text-white/65 text-base xl:text-lg leading-8 mt-8 max-w-md">
          One connected space for learning, communication and
          everything that makes your school journey meaningful.
        </p>

        <div className="flex flex-wrap gap-2 mt-10">
          {["Students", "Parents", "Teachers", "Administration"].map((role) => (
            <span
              key={role}
              className="border border-white/20 bg-white/[0.07] rounded-full px-4 py-2 text-xs text-white/80"
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom message */}
      <div className="relative z-10 flex items-center justify-between border-t border-white/15 pt-6">
        <div>
          <p className="text-[10px] tracking-[3px] text-[#D8F078] font-bold">
            LEARN · GROW · ACHIEVE
          </p>
          <p className="text-xs text-white/45 mt-2">
            Established in 2004 · Indore
          </p>
        </div>

        <div className="text-4xl text-[#D8F078]/70">✳</div>
      </div>
    </section>
  );
}

export default LoginBrandPanel;
