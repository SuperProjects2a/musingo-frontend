// ./src/azure-storage-blob.ts

// <snippet_package>
// THIS IS SAMPLE CODE ONLY - NOT MEANT FOR PRODUCTION USE
import { BlobServiceClient, ContainerClient} from '@azure/storage-blob';
import { Guid } from "guid-typescript";
const containerName = `images`;
const sasToken = process.env.REACT_APP_STORAGESASTOKEN;
const storageAccountName = process.env.REACT_APP_STORAGERESOURCENAME; 
// </snippet_package>

// <snippet_isStorageConfigured>
// Feature flag - disable storage feature to app if not configured
export const isStorageConfigured = () => {
  return (!storageAccountName || !sasToken) ? false : true;
}
// </snippet_isStorageConfigured>

// <snippet_getBlobsInContainer>
// return list of blobs in container to display
const getBlobsInContainer = async (containerClient: ContainerClient) => {
  const returnedBlobUrls: string[] = [];

  // get list of blobs in container
  // eslint-disable-next-line
  for await (const blob of containerClient.listBlobsFlat()) {
    // if image is public, just construct URL
    returnedBlobUrls.push(
      `https://${storageAccountName}.blob.core.windows.net/${containerName}/${blob.name}`
    );
  }

  return returnedBlobUrls;
}
// </snippet_getBlobsInContainer>

// <snippet_createBlobInContainer>
export const createBlobInContainer = async (containerClient: ContainerClient, file: File) => {
  
  // create blobClient for container
  const blobClient = containerClient.getBlockBlobClient(file.name);
  // set mimetype as determined from browser with file upload control
  const options = { blobHTTPHeaders: { blobContentType: file.type } };

  // upload file
  await blobClient.uploadData(file, options);
}
// </snippet_createBlobInContainer>

// <snippet_uploadFileToBlob>
const uploadFileToBlob = async (file: File | null) => {
  if (!file) return [];

  // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
  const blobService = new BlobServiceClient(
    `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
  );
  // get Container - full public read access
  const containerClient: ContainerClient = blobService.getContainerClient(containerName);
  // await containerClient.createIfNotExists({
  //   access: 'container',
  // });

  // upload file
  await createBlobInContainer(containerClient, file);
  

  // get list of blobs in container
  //return getBlobsInContainer(containerClient);
};
/** Upload blob to azure storage and return image url */
export const uploadFile = async (fileToUpload:File): Promise<string>  => {

  let str = fileToUpload.name.substring(0,fileToUpload.name.indexOf("."));

  const file = new File([fileToUpload],fileToUpload.name.replace(str,Guid.create().toString()), {type: fileToUpload.type});
  
  await uploadFileToBlob(file);

  return `https://musingoblob.blob.core.windows.net/images/${file.name}`;
};

export default uploadFileToBlob;
