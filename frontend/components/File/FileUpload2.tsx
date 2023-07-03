import React, {
    Dispatch,
    SetStateAction,
    useCallback,
    useState,
    memo,
    useRef,
  } from "react";
  import axios from "axios";
  import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
  import { compact } from "lodash";
  
  import LoadingText from "./LoadingText";
  import { FileLite } from "@/types/file";
  import FileViewerList from "./FileViewerList";
  
  type FileUpload2Props = {
    handleSetFiles: Dispatch<SetStateAction<FileLite[]>>;
    maxNumFiles: number;
    maxFileSizeMB: number;
  };
  
  function FileUpload2(props: FileUpload2Props) {
    const handleSetFiles = props.handleSetFiles;
  
    const [files, setFiles] = useState<FileLite[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [dragOver, setDragOver] = useState(false);
    const dropzoneRef = useRef<HTMLLabelElement>(null);
  
    const handleFileChange = useCallback(
      async (selectedFiles: FileList | null) => {
        if (selectedFiles && selectedFiles.length > 0) {
          setError("");
  
          if (files.length + selectedFiles.length > props.maxNumFiles) {
            setError(`You can only upload up to ${props.maxNumFiles} files.`);
            if (dropzoneRef.current) {
              (dropzoneRef.current as any).value = "";
            }
            return;
          }
  
          setLoading(true);
  
          const uploadedFiles = await Promise.all(
            Array.from(selectedFiles).map(async (file) => {
              // Check the file type
              if (
                file.size < props.maxFileSizeMB * 1024 * 1024
              ) {
                // Check if the file name already exists in the files state
  
                const formData = new FormData();
                formData.append("file", file);
                formData.append("filename", file.name);

              }
            })
          );
        }
      },
      [files, handleSetFiles, props.maxFileSizeMB, props.maxNumFiles]
    );
  
    const handleDragEnter = useCallback((event: React.DragEvent) => {
      event.preventDefault();
      setDragOver(true);
    }, []);
  
    const handleDragOver = useCallback((event: React.DragEvent) => {
      event.preventDefault();
    }, []);
  
    const handleDragLeave = useCallback((event: React.DragEvent) => {
      event.preventDefault();
      setDragOver(false);
    }, []);
  
    const handleDrop = useCallback(
      (event: React.DragEvent) => {
        event.preventDefault();
        setDragOver(false);
        const droppedFiles = event.dataTransfer.files;
        handleFileChange(droppedFiles);
      },
      [handleFileChange]
    );
  
    return (
      <div>
        <div className={`w-[240px] border-opacity-80 text-black px-[5px] py-[5px] rounded-lg hover:bg-white hover:bg-opacity-80 hover:text-[#252425]  font-semibold bg-[#E7E7E7]`}>
          <div className="flex flex-row items-center justify-center">
          <img src="upload.png" width="22px" height="22px" style={{ marginRight: '6px' }} alt="Upload Document" />
          <label
            htmlFor="dropzone-file"
            ref={dropzoneRef}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center justify-center text-black">
              {loading ? (
                <LoadingText  text="Uploading..." />
              ) : (
                <div>
                    <span className="font-semibold items-center justify-center">Upload New RFP Request</span>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    multiple
                    onChange={(event) => handleFileChange(event.target.files)}
                  />
                </div>
              )}
            </div>
          </label>
          </div>
  
          {error && (
            <div className="flex items-center justify-center w-full mt-4">
              <p className="text-sm text-red-500">{error}</p>
            </div>
          )}
  
          </div>
          {/* <FileViewerList files={files} title="Uploaded Files" />  */}
        {/* <FileViewerList files={files} title="Uploaded Files" /> */}
      </div>
      
    );
  }
  
  export default memo(FileUpload2);