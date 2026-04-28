export default function ContentsMenu({ isOpen, cms }) {
  const cmsData = Array.isArray(cms) ? cms : [];
  return (
    <div
      className={`w-60 border-r-4 border-green-950 z-20 fixed top-[headerHeight] left-0 bg-white h-screen overflow-y-scroll ${isOpen ? "" : "hidden"}`}
    >
      <div className="flex justify-center p-5">
        <h2 className="font-bold text-xl underline">Table Of Contents</h2>
      </div>
      <div className="p-2">
        {cmsData.map((d) => (
          <div key={d._id}>
            <h3 className="pl-3 font-bold">{d.title}</h3>
            <ol type="a" className="list-[lower-alpha]">
              {(d.files ?? []).map((file) => (
                <li key={file._id} className="ml-10 my-2">
                  <a
                    href={file?.file?.asset?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline"
                  >
                    {file.title.slice(3) ?? "View PDF"}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}
