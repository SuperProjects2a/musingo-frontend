
import { BlobServiceClient, ContainerClient} from '@azure/storage-blob';
import { Guid } from "guid-typescript";
const containerName = `images`;
const sasToken = process.env.REACT_APP_STORAGESASTOKEN;
const storageAccountName = process.env.REACT_APP_STORAGERESOURCENAME; 

export const isStorageConfigured = () => {
  return (!storageAccountName || !sasToken) ? false : true;
}
const getBlobsInContainer = async (containerClient: ContainerClient) => {
  const returnedBlobUrls: string[] = [];

  for await (const blob of containerClient.listBlobsFlat()) {
    returnedBlobUrls.push(
      `https://${storageAccountName}.blob.core.windows.net/${containerName}/${blob.name}`
    );
  }

  return returnedBlobUrls;
}

export const createBlobInContainer = async (containerClient: ContainerClient, file: File) => {
  
  const blobClient = containerClient.getBlockBlobClient(file.name);

  const options = { blobHTTPHeaders: { blobContentType: file.type } };

  await blobClient.uploadData(file, options);
}

const uploadFileToBlob = async (file: File | null) => {
  if (!file) return [];

  const blobService = new BlobServiceClient(
    `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
  );
  const containerClient: ContainerClient = blobService.getContainerClient(containerName);

  await createBlobInContainer(containerClient, file);
};

/** Upload blob to azure storage and return image url */
export const uploadFile = async (fileToUpload:File): Promise<string>  => {

  let str = fileToUpload.name.substring(0,fileToUpload.name.indexOf("."));

  const file = new File([fileToUpload],fileToUpload.name.replace(str,Guid.create().toString()), {type: fileToUpload.type});
  
  await uploadFileToBlob(file);

  return `https://musingoblob.blob.core.windows.net/images/${file.name}`;
};

export default uploadFileToBlob;
