import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { removeImage, uploadMultiImage } from "../../../redux/image/imageActions";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Compressor from "compressorjs";

const Dropzone = ({ images, setimages, setFiles, disabled }) => {
  const dispatch = useDispatch();

  const [progress, setProgress] = useState(0);
  const [preview, setpreview] = useState([]);
  const [sizeError, setsizeError] = useState("");
  const maxSize = 1 * 1024 * 2048; // for 1MB

  const fileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setProgress(percentage);
      console.log(percentage);
    },
  };

  const imageRemoveHandler = (public_id) => {
    dispatch(removeImage(public_id));
    let filtered = images.filter((img) => img.public_id !== public_id);
    setimages(filtered);
  };

  const addFiles = async (e) => {
    let totalsize = 0;
    setProgress(0);
    setFiles(e.target.files);

    const formData = new FormData();
    if (e.target.files) {
      for (var i = 0; i < e.target.files.length; i++) {
        new Compressor(e.target.files[i], {
          quality: 0.8,
          height: 1000,
          success: async (compressedResult) => {
            preview.push(URL.createObjectURL(compressedResult));
            formData.append("photos", compressedResult);
            totalsize += compressedResult.size;
            if (totalsize >= maxSize) {
              setsizeError("selected images size exceeds 1mb");
              e.target.value = "";
              return;
            } else if (!compressedResult.name.match(/\.(jpg|jpeg|png)$/)) {
              setsizeError("Invalid image please upload JPG JPEG PNG only");
              e.target.value = "";
              return;
            } else {
              setsizeError("");
            }
            let data = await uploadMultiImage(formData, fileOptions);
            setFiles([]);
            e.target.value = "";
            let copy = images.concat(data);
            setimages(copy);
          },
        });
      }
    }
  };

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(images);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setimages(items);
  }
  return (
    <section className={`relative w-full ${disabled && "pointer-events-none"}`}>
      {sizeError.length > 0 && (
        <div className="flex items-center">
          <h4 className="text-xs text-red-400 mb-2 uppercase">
            {sizeError}{" "}
            <span
              className="cursor-pointer text-gray-600 px-1.5 rounded-full bg-gray-200"
              onClick={() => setsizeError("")}
            >
              x
            </span>
          </h4>
        </div>
      )}

      {progress > 0 && progress <= 98 && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white bg-opacity-95 z-30">
          <div className="my-0 mx-auto w-20">
            <CircularProgressbar
              value={progress}
              text={`${progress}%`}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: "butt",
                textSize: "16px",
                pathTransitionDuration: 0.5,
                pathColor: `rgba(60, 150, 201, ${progress / 100})`,
                textColor: "#333",
                trailColor: "#373b45",
                backgroundColor: "#3e98c7",
              })}
            />
          </div>
        </div>
      )}
      {/* {images?.images.length > 0 && ( */}

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="images" direction="horizontal">
          {(provided) => (
            <div className="img-box" {...provided.droppableProps} ref={provided.innerRef}>
              {images.length > 0 ? (
                images?.map((image, index) => {
                  return (
                    <Draggable
                      key={image.public_id}
                      draggableId={String(image?.public_id)}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="w-2/12 inline-block mr-1 border border-solid border-gray-200 p-2"
                        >
                          <div className="relative">
                            <div
                              onClick={() => imageRemoveHandler(image?.public_id)}
                              className="absolute flex justify-center items-center cursor-default pb-0.5 text-xs leading-4 rounded-3xl w-6 h-6 shadow bg-white -top-1 -right-1"
                            >
                              x
                            </div>
                            <img src={image?.url} alt="" />
                          </div>
                        </div>
                      )}
                    </Draggable>
                  );
                })
              ) : (
                <p className="text-gray-500 text-sm text-center mt-4">No Images Available</p>
              )}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {/* )} */}
      {images?.length < 5 && (
        <label style={{ position: "relative" }} htmlFor="file">
          <div className="border-dashed border border-gray-300 py-4 text-center cursor-pointer">
            <input
              style={{ opacity: 0, width: "100%", height: "100%", position: "absolute" }}
              type="file"
              id="file"
              onChange={(e) => addFiles(e)}
              multiple
            />
            <p className="text-xs text-gray-500">click to select images</p>
          </div>
        </label>
      )}
    </section>
  );
};
export default Dropzone;
