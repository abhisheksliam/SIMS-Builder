const templateHandler = require('./../modules/automation/templateHandler.js'),
      config          = require('./../config/automation.config');

class AutomationController {

  getTemplateList(appType) {

    return new Promise((resolve, reject) => {

      let query = (config.isValidApp(appType) ? ({'app': appType}) : {});

        templateHandler.getTemplates(query)
        .then((templates) => {
          let templateMetaList = templates.map(function (obj) {
            return {
              uuid: obj.uuid,
              name: obj.name,
              meta: obj.meta
            };
          });
          resolve(templateMetaList);
        }, (error) => {
          reject(error);
        });

    });
  }
}

module.exports = new AutomationController();


