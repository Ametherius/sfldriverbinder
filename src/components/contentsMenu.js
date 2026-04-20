export default function ContentsMenu({ isOpen }) {
  return (
    <div
      className={`w-60 border-r-4 border-green-950 z-20 bg-white h-screen overflow-y-scroll ${isOpen ? "" : "hidden"}`}
    >
      <div className="flex justify-center p-5">
        <h2 className="font-bold text-xl underline">Table Of Contents</h2>
      </div>
    </div>
  );
}
