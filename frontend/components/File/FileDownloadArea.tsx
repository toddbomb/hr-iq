import React, { memo, useState } from 'react';

function FileDownloadArea() {
  const [downloadLink, setDownloadLink] = useState('');

  const handleDownload = async () => {
    try {
      const response = await fetch('https://api.hriq.ai/report', {
        method: 'GET',
      });

      if (response.status === 200) {
        const blob = await response.blob();
        const downloadUrl = URL.createObjectURL(blob);
        setDownloadLink(downloadUrl);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  // Want to make it so that button only shows up when the report is available

  // temp - show button for frontend edits

  return (
    <div>
        <div className="flex flex-row items-center justify-center">
        {downloadLink ? (
            <a href={"https://dl.dropboxusercontent.com/s/koz04v12l8ayx3p/LorealMagnite.pdf?dl=0"} download="L'oréalMagnite.pdf" className={`flex flex-col items-center justify-center w-[240px] border-opacity-80 text-black px-[5px] py-[5px] rounded-lg hover:bg-white hover:bg-opacity-80 hover:text-[#252425] font-semibold bg-[#E7E7E7]`}>
            Download report
            </a>
        ) : null} 
            <a href={"https://dl.dropboxusercontent.com/s/koz04v12l8ayx3p/LorealMagnite.pdf?dl=0"} download="L'oréalMagnite.pdf" className={`flex flex-col items-center justify-center w-[240px] border-opacity-80 text-black px-[5px] py-[5px] rounded-lg hover:bg-white hover:bg-opacity-80 hover:text-[#252425] font-semibold bg-[#E7E7E7]`}>
            Download report
            </a>
        </div>
    </div>
  );
}

export default memo(FileDownloadArea);