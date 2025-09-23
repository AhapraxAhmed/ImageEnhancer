import Home from "./components/Home";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-gray-200 px-4 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-white mb-3">
          AI Image Enhancer
        </h1>
        <p className="text-lg text-gray-400">
          Upload your image and let AI make it shine
        </p>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-2xl bg-gray-900 shadow-lg rounded-2xl p-6 border border-gray-800 hover:border-gray-500 transition-all">
        <Home />
      </div>

      {/* Footer */}
      <div className="text-sm text-gray-500 mt-8">
        Powered By <span className="text-gray-200">@AhmedAhaprax</span>
      </div>

      <Analytics />
    </div>
  );
};

export default App;
