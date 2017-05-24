const config = {
    default: {
        appList: ['word', 'excel', 'ppt', 'access'],
        isValidApp: isValidApp
    },
    local: {},
    development: {},
    production: {}
};

const env = process.env.NODE_ENV || 'development';
module.exports = Object.assign(config['default'], config[env]);

/**
 * Config Helpers
 */

function isValidApp(appType) {
    if (appType) {
        appType = appType.trim().toLowerCase();
    }
    return this.appList.includes(appType);
}
