const saveAsJson = (data) => {
  const dataToDownload = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const tempAnchor = document.createElement("a");

  const downloadUrl = URL.createObjectURL(dataToDownload);
  tempAnchor.href = downloadUrl;

  const filename = generateFilename();
  tempAnchor.setAttribute("download", filename);

  tempAnchor.click();
};

const generateFilename = () => {
  const BASE_FILENAME = "ros-dashboard-export";
  const EXTENSION = "json";

  const exportDate = new Date().toISOString();

  const filename = `${BASE_FILENAME}_${exportDate}.${EXTENSION}`;
  return filename;
};

const loadFromJson = async (event) => {
  const file = event.target.files[0];

  const fileReader = new FileReader();

  return new Promise((resolve, reject) => {
    fileReader.onerror = () => {
      fileReader.abort();
      reject(new DOMException("Problem parsing input file."));
    };

    fileReader.onload = () => {
      const data = JSON.parse(fileReader.result);
      resolve(data);
    };
    fileReader.readAsText(file);
  });
};

export { saveAsJson, loadFromJson };
