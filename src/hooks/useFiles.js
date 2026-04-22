import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export function useFiles() {
  const [allFiles, setAllFiles] = useState([]);
  const [allFolders, setAllFolders] = useState([]);

  async function files(path = "", fileAcc = [], folderAcc = []) {
    const { data, error } = await supabase.storage
      .from("Driver Handbook")
      .list(path || "", { limit: 1000 });
    if (error) throw error;

    for (const item of data || []) {
      const fullPath = path ? `${path}/${item.name}` : item.name;
      const isFolder = !item.metadata;

      if (isFolder) {
        folderAcc.push({ name: item.name, path: fullPath });
        await files(fullPath, fileAcc, folderAcc);
      } else {
        fileAcc.push({ name: item.name, path: fullPath });
      }
    }
    return { fileAcc, folderAcc };
  }
  useEffect(() => {
    (async () => {
      const { fileAcc, folderAcc } = await files("");
      setAllFiles(fileAcc);
      setAllFolders(folderAcc);
    })();
  }, []);
  return { files: allFiles, folders: allFolders };
}
