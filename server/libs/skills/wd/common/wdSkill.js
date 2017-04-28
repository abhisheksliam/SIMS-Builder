const BaseSkill = require("../../common/baseSkill");
//Wrod based Common Functionality goes here 

const xmlUtil = require("../../../../utils/xmlUtil");

module.exports = class WordSkill extends BaseSkill {
    createCursorPosition(skillParams) {
        try {
            let paramValueObj = skillParams.paramsObj;
            let valueObj = { "id": paramValueObj.elementId, "cursorPosition": paramValueObj.cursorPosition };
            let resolveParams = { "attrValue": valueObj };
            return Promise.resolve(resolveParams);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    resourcePathWithImages(skillParams) {
        try {
            let paramValueObj = skillParams.paramsObj;

            /**Before returnig below promise we need to update resourse file by replaceing place holders by respective images.
             * 
             */
            let resolveParams = { "attrValue": paramValueObj["docData"] };
            return Promise.resolve(resolveParams);
        } catch (error) {
            return Promise.reject(error);
        }
    }
};