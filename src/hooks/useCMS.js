"use client";
import { useEffect, useState } from "react";
import { sanity } from "@/sanity";

export function useCMS() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const cmsData = `*[_type == "section"]{
  _id,
  title,
  "files": *[_type == "pdfUpload" && references(^._id)]{
    _id,
    title,
    file{
      asset->{
        _id,
        url,
        originalFilename
      }
    }
  }
}`;
  async function getCMS() {
    try {
      const result = await sanity.fetch(cmsData);
      setData(result);
    } catch (err) {
      setError(err);
    }
  }

  useEffect(() => {
    getCMS();
    const id = setInterval(getCMS, 50000);
    return () => clearInterval(id);
  }, []);
  return { data };
}
