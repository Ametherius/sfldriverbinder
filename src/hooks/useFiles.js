import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export function useFiles() {
  const allFiles = [];
  const allFolders = [];

  async function files(path = "") {
    const { data, error } = await supabase.storage
      .from("Driver Handbook")
      .list("*");
    if (error) throw error;

    for (const item of data || []) {
      const fullPath = path ? `${path}/${item.name}` : item.name;
    }
  }
}
