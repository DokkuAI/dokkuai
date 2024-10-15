"use client";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { dropPlugin } from "@react-pdf-viewer/drop";
import "@react-pdf-viewer/drop/lib/styles/index.css";
import { useEffect, useState } from 'react';
// import axios from 'axios';

export default function FileView({id}: {id: string}) {
    // const [pdfUrl, setPdfUrl] = useState('');
    // useEffect(()=>{
    //   getFileUrl(id);
    //   async function getFileUrl(id: string) {
    //     const res = await axios.get(`http://localhost:8080/v1/library/${id}`);
    //     setFileUrl(res.data);
    //   }
    // },[id])
    // useEffect(() => {
    //   async function getPDF() {
    //     const response = await axios.get(
    //       "https://d3ohoj0hhuci2p.cloudfront.net/temp/basic-link-1.pdf",
    //       {
    //         responseType: "blob",
    //       }
    //     );
    //     const file = new Blob([response.data], { type: "application/pdf" });
    //     const fileUrl = URL.createObjectURL(file);
    //     setPdfUrl(fileUrl);
    //   }
    //   getPDF();
    // })
  
    const defaultPluginInstance = defaultLayoutPlugin();
    const dropPluginInstance = dropPlugin();

    return (
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          defaultScale={1}
          fileUrl="https://d3ohoj0hhuci2p.cloudfront.net/temp/Geography.pdf"
          plugins={[defaultPluginInstance, dropPluginInstance]}
        />
      </Worker>
    );
  }
