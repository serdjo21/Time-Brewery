export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-4">
        {/* subtle pulse bar */}
        <div className="h-[2px] w-40 overflow-hidden bg-white/10">
          <div className="h-full w-1/3 animate-loading bg-white" />
        </div>

        <span className="text-xs tracking-[0.28em] text-white/50">
          LOADING
        </span>
      </div>
    </div>
  );
}
