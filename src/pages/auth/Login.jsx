
import LoginBrandPanel from "../../components/auth/LoginBrandPanel";
import LoginForm from "../../components/auth/LoginForm";

function Login() {
  return (
    <main className="min-h-screen bg-[#F7F6F0] flex">

      {/* Left branding panel */}
      <LoginBrandPanel />

      {/* Right login area */}
      <section className="flex-1 min-h-screen flex flex-col px-6 sm:px-12 lg:px-16 xl:px-24 py-7">

        {/* Top navigation */}
        <div className="flex justify-end items-center">
          <a
            href="/"
            className="text-xs font-semibold text-slate-500 hover:text-[#657A3E] transition flex items-center gap-2"
          >
            <span>←</span>
            Back to website
          </a>
        </div>

        {/* Login form */}
        <div className="flex-1 flex items-center justify-center py-12">
          <LoginForm />
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 border-t border-[#15233B]/10 pt-5">
          <p className="text-[10px] text-slate-400">
            © {new Date().getFullYear()} Sunderam Public H.S. School
          </p>
          <p className="text-[10px] text-slate-400">
            LEARN · GROW · ACHIEVE
          </p>
        </div>

      </section>
    </main>
  );
}

export default Login;
