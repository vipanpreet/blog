import axios from "axios";
import { BACK_URI } from "../../config/keys";

// Custom Upload Adapter
export class UploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  async upload() {
    return this.loader.file.then((file) => {
      const data = new FormData();
      data.append("file", file);
      const genericError = `Couldn't upload file: ${file.name}.`;
      return axios({
        data,
        method: "POST",
        url: `${BACK_URI}/api/upload`,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          this.loader.uploadTotal = progressEvent.total;
          this.loader.uploaded = progressEvent.loaded;
          const uploadPercentage = parseInt(
            Math.round((progressEvent.loaded / progressEvent.total) * 100)
          );
        },
      })
        .then(({ data }) => ({ default: data.url }))
        .catch(({ error }) => Promise.reject(error?.message ?? genericError));
    });
  }

  abort() {
    return Promise.reject();
  }
}
