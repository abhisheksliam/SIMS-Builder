const path = require('path');
const config = require('../config/config');
const fs = require('fs');
const multer = require('multer');
const mkdirp = require('mkdirp');
const fse = require('fs-extra');
const ResourceUtil = require('../utils/resourceUtil');
const XMLUtil = require('../utils/XMLUtil');

const fileTypeFolderMap = {
    "SKILL": config.fileStore.skillFolder,
    "RESOURCE": config.fileStore.resourceFolder,
    "XML": config.fileStore.xmlFolder
};

const resTypeMap = {
    "png": "img",
    "jpeg": "img",
    "jpg": "img",
    "json": "json",
    "txt": "text",
    "html": "html",
    "xml": "xml"
};
const fileTypeFunctionMap = {
    "csv": "readCsvFile"
}

class FileStoreController {
    readCsvFile(absolutePath) {
        return new Promise(function (resolve, reject) {
            let resultArr = [];
            const csv = require('csvtojson');
            csv()
                .fromFile(absolutePath)
                .on('json', (jsonObj) => {
                    console.log(jsonObj);
                    resultArr.push(jsonObj);

                    // combine csv header row and csv line to a json object 
                    // jsonObj.a ==> 1 or 4 
                })
                .on('done', (error) => {
                    if (resultArr.length == 0) {
                        var error = new Error("Error occured while reading the csv type file at path " + absolutePath);
                        reject(error);
                    }
                    else {
                        var resolveParam = { "fileData": resultArr, "filePath": absolutePath };
                        resolve(resolveParam);
                    }
                })
        });
    }
    // Below function was a duplicate. Use 'getStepXMLFolderPath' instead.
    // getFileStoreStepFolderPath(taskId, stepIdx) {
    //  }

    getSimsXmlStepFolderPath(taskId, stepIdx) {
        return this.getTaskFolderPath(taskId, stepIdx) + stepIdx + "/";
    }

    copyAssetToTaskFolder(srcPath, taskParams) {

        var filepathArr = srcPath.split("/")
        var fileName = filepathArr[filepathArr.length - 1].trim();
        var fileTypeArr = fileName.split(".")
        var fileType = fileTypeArr[fileTypeArr.length - 1];
        var resFileType = fileType;
        if (resTypeMap[fileType]) {
            resFileType = resTypeMap[fileType]
        }
        //path to save the file
        var absFilePath = this.getStepXMLFolderPath(taskParams.taskId, taskParams.stepIndex);

        //path to return for the file
        var srcPath = config.fileStore.resourceFolder + srcPath;
        var destPath = this.getStepXMLFolderPath(taskParams.taskId, taskParams.stepIndex);
        var relativeXmlPath = this.getSimsXmlStepFolderPath(taskParams.taskId, taskParams.stepIndex);

        if (taskParams.parentFolder) {
            destPath += taskParams.parentFolder + "/"
            relativeXmlPath += taskParams.parentFolder + "/";
        }

        destPath += fileName;

        return new Promise(function (resolve, reject) {

            fse.copy(srcPath, destPath, { overwrite: false }, function (error) {
                if (!error) {
                    var resolveParam = { "filePath": relativeXmlPath + fileName, "fileType": resFileType };
                    resolve(resolveParam);
                }
                else {
                    reject(error);
                }
            });

        });
    }
    /**
     * @param {*} sourceFileLocation : Location from which file to be copied 
     * Ex: "GO16.WD.12.12B.02.T1/1/1493790231823.DocumentData.json"
     * @param {*} resourceMap : It's an object which contains following key-value pairs:
     *   AssetFolderHierarchy: Any custom folder hierarchy
     *   fileName: "1493790231823.DocumentData.json"
     *   resourceType: "step | skill" => 
     *          skill means that it's a skill resource and has to be copied from "filestore/skills/" folder
     *          step means that it's a user uploaded resource and has to be copied from "filestore/resources/" folder
     * @param {*} taskId : Task ID
     * @param {*} stepIndex : Step Index
     * OUTPUT : This function copies the resource file from a source location to corresponding 
     * destination and returns the promise for same
     */
    copyAssetToTaskFolderEnhanced(sourceFileLocation, resourceMap, taskId, stepIndex) {

        let srcPath;
        if (resourceMap.resourceType === "step")
            srcPath = config.fileStore.resourceFolder + sourceFileLocation;
        else
            srcPath = path.join(config.fileStore.skillFolder, sourceFileLocation);

        let destPath = path.join(this.getStepAssetsFolderPath(taskId, stepIndex), resourceMap.AssetFolderHierarchy, resourceMap.fileName);

        return new Promise((resolve, reject) => {
            fse.copy(srcPath, destPath, { overwrite: false }, error => {
                if (!error) {
                    resolve("success");
                }
                else {
                    reject(error);
                }
            });
        });
    }

    readTaskRes(filepath, readFileType) {
        var absolutePath = config.fileStore.resourceFolder + filepath;
        if (readFileType && fileTypeFunctionMap[readFileType]) {

            return this[fileTypeFunctionMap[readFileType]](absolutePath);
        }
        else {
            return new Promise(function (resolve, reject) {
                fs.readFile(absolutePath, 'utf8', function (error, fileData) {
                    if (!error) {
                        var resolveParam = { "fileData": fileData, "filePath": absolutePath };
                        resolve(resolveParam);
                    }
                    else {
                        reject(error);
                    }
                });
            });
        }

    }
    
    getTaskFolderPath(taskId) {
        return '{#approot#}/';
    }

    saveStepXML(taskId, stepIndex, OutputXML) {

        let folderPath = this.getStepXMLFolderPath(taskId, stepIndex);
        let fileName = "task.xml";//this will come from out side.
        return this.saveFileToFileStore(folderPath, fileName, OutputXML);
    }

    /**
     * 
     * @param {*} taskParams TaskParamas contains task metadata.
     * @param {*} File The data that is to be stored in the File
     * @param {*} FileName Name for the File to be stored
     * Output: Relative Path of the File saved in File Store to be added in Task XML
     */
    saveTaskResources(taskParams, File, FileName) {
        let destPath = this.getStepXMLFolderPath(taskParams.taskId, taskParams.stepIndex);
        let relativeXmlPath = this.getSimsXmlStepFolderPath(taskParams.taskId, taskParams.stepIndex);
        let fileName = FileName; //this will come from out side.
        return this.saveFileToFileStore(destPath, fileName, File).then(()=>{
            var relativeResourcePath = relativeXmlPath+fileName;
            return Promise.resolve(relativeResourcePath);
        });
    }

    saveResourceFile() {
        return this.uploadFileHandler();
    }

    removeResourceFile(filePath) {
        return new Promise((resolve, reject) => {
            filePath = config.fileStore.resourceFolder + filePath;
            fs.unlink(filePath, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve("success");
                }
            });
        });
    }

    getFileFromFileStore(filePath, folder) {
        return new Promise((resolve, reject) => {
            let absolutePath = filePath;

            if (folder) {
                absolutePath = folder + filePath;
            }

            fs.readFile(absolutePath, 'utf8', function (error, data) {
                if (error) {
                    error.filePath = filePath;
                    reject(error);
                }
                else {
                    resolve(data);
                }
            });
        })
    }

    uploadFileHandler() {
        let self = this;
        let storage = multer.diskStorage({
            destination: function (req, file, callback) {
                let taskId = req.body.taskId;
                let stepIndex = req.body.stepIndex;
                let resFolderPath = ResourceUtil.getUploadResourceFolderRelativePath(taskId, stepIndex);
                req.body.folder = resFolderPath;
                let destinationFolder = self.getUploadedResourceFolderPath(resFolderPath);

                self.createFolder(destinationFolder)
                    .then((success) => {
                        callback(null, destinationFolder);
                    }, (error) => {
                        console.log("Folder not created.");
                    });
            },
            filename: function (req, file, callback) {
                let timestamp = new Date().getTime().toString();
                let fileName = timestamp + "." + file.originalname;

                req.body.filePath = req.body.folder + fileName;
                callback(null, fileName);
            }
        });
        let upload = multer({ storage: storage });
        return upload.fields([{ name: 'dzfile', maxCount: 1 }]);
    }

    createFolder(folderPath) {
        return new Promise((resolve, reject) => {
            mkdirp(folderPath, (error) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(true);
                }
            });
        });
    }

    getStepXMLFolderPath(taskId, stepIndex) {
        return config.fileStore.xmlFolder + taskId + "/" + stepIndex + "/";
    }
    
    /**
     * @param {*} taskId : Task ID
     * @param {*} stepIndex : Step Number
     * OUTPUT : Absolute Folder Path of the corresponding Task till the Assets folder
     */
    getStepAssetsFolderPath(taskId, stepIndex) {
        return this.getStepXMLFolderPath(taskId, stepIndex) + "Assets/";
    }

    getUploadedResourceFolderPath(relPath) {
        return config.fileStore.resourceFolder + relPath;
    }

    saveFileToFileStore(filepath, fileName, file) {
        return this.createFolder(filepath)
            .then((success) => {
                fs.writeFile(filepath + fileName, file, (err) => {
                    if (err) {
                        return Promise.reject(err);
                    }
                    else {
                        return Promise.resolve("saved in directory");
                    }
                });
            }, (err) => {
                return Promise.reject(err);
            });
    }

    getResourcePath(filePath, folder) {
        return folder + filePath;
    }
}

module.exports.fileStoreController = new FileStoreController();
module.exports.fileTypeFolderMap = fileTypeFolderMap;
