export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-400 to-purple-700 text-white font-sans">
      <div className="bg-black/40 p-12 rounded-3xl shadow-xl text-center">
        <h1 className="text-5xl font-bold mb-4">🚀 Coming Soon!</h1>
        <p className="text-xl mb-8">
          We&apos;re working hard to bring you something amazing.
          <br />
          Stay tuned for updates!
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <span className="w-6 h-6 rounded-full bg-white opacity-30 animate-pulse" />
          <span className="w-6 h-6 rounded-full bg-white opacity-30 animate-pulse [animation-delay:.5s]" />
          <span className="w-6 h-6 rounded-full bg-white opacity-30 animate-pulse [animation-delay:1s]" />
        </div>
      </div>
    </div>
  );
}
