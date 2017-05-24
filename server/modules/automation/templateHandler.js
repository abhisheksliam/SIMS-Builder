const templateModel = require('../../models/automation/template.model');

class TemplateHandler {

  getTemplates( query ) {

    return templateModel.get( query );
  };

};

module.exports = new TemplateHandler();


