
import { useState } from "react";
import logo from "../../assets/images/logo4.png";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Authentication will be connected when we build the backend.
  };

  return (
    <div className="w-full max-w-[430px] mx-auto">

      {/* Heading */}
      <div className="mb-9">
        <div className="lg:hidden flex items-center gap-3 mb-12">
          <div className="w-12 h-12 rounded-xl bg-[#15233B] p-1.5">
            <img
              src={logo}
              alt="Sunderam logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h2 className="font-black text-lg text-[#15233B]">SUNDERAM</h2>
            <p className="text-xs text-slate-500">Public H.S. School</p>
          </div>
        </div>

        <p className="text-xs font-bold tracking-[3px] uppercase text-[#657A3E]">
          SCHOOL PORTAL
        </p>

        <h2 className="text-4xl sm:text-5xl font-black tracking-[-2px] text-[#15233B] mt-4">
          Welcome
          <br />
          <span className="text-[#657A3E]">back.</span>
        </h2>

        <p className="text-sm text-slate-500 mt-4 leading-6">
          Sign in with your school username and password to
          continue to your account.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Username */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-bold text-[#15233B] mb-2"
          >
            Username / School ID
          </label>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              ◉
            </span>

            <input
              id="username"
              type="text"
              autoComplete="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full h-14 bg-white border border-slate-200 rounded-xl pl-12 pr-4 text-sm text-[#15233B] placeholder:text-slate-400 outline-none transition focus:border-[#657A3E] focus:ring-4 focus:ring-[#657A3E]/10"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label
              htmlFor="password"
              className="text-sm font-bold text-[#15233B]"
            >
              Password
            </label>
          </div>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              ◈
            </span>

            <input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full h-14 bg-white border border-slate-200 rounded-xl pl-12 pr-16 text-sm text-[#15233B] placeholder:text-slate-400 outline-none transition focus:border-[#657A3E] focus:ring-4 focus:ring-[#657A3E]/10"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[#657A3E] hover:text-[#15233B] transition"
            >
              {showPassword ? "HIDE" : "SHOW"}
            </button>
          </div>
        </div>

        {/* Remember and forgot password */}
        <div className="flex items-center justify-between gap-3">
          <label className="flex items-center gap-2.5 text-sm text-slate-600 cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 accent-[#657A3E] rounded"
            />
            Remember me
          </label>

          <a
            href="#forgot-password"
            className="text-sm font-bold text-[#657A3E] hover:text-[#15233B] transition"
          >
            Forgot password?
          </a>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full h-14 rounded-xl bg-[#15233B] text-white font-bold text-sm flex items-center justify-center gap-3 hover:bg-[#657A3E] transition-all duration-300 shadow-lg shadow-[#15233B]/10 group"
        >
          Sign In
          <span className="text-[#D8F078] group-hover:translate-x-1 transition">
            →
          </span>
        </button>

      </form>

      {/* Security note */}
      <div className="flex items-start gap-3 mt-9 p-4 rounded-xl bg-[#EDF0E7]">
        <span className="text-[#657A3E] text-lg">✧</span>
        <div>
          <p className="text-xs font-bold text-[#15233B]">
            Secure School Access
          </p>
          <p className="text-[11px] text-slate-500 leading-5 mt-1">
            Your school account is intended for authorised users only.
            Please keep your login credentials private.
          </p>
        </div>
      </div>

      <p className="text-center text-xs text-slate-400 mt-9">
        Need help accessing your account?{" "}
        <a
          href="mailto:info@sunderampublicschool.com"
          className="font-bold text-[#657A3E] hover:underline"
        >
          Contact the school
        </a>
      </p>
    </div>
  );
}

export default LoginForm;
