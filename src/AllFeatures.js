let allFeatures = require('./features-switch.json');

module.exports = {
  Feature1: allFeatures.FEATURE_FLAG_1 ? require('./Feature1').default : null,
  Feature2: allFeatures.FEATURE_FLAG_2 ? require('./Feature2').default : null,
  Feature3: allFeatures.FEATURE_FLAG_3 ? require('./Feature3').default : null,
  Feature4: allFeatures.FEATURE_FLAG_4 ? require('./Feature4').default : null,
  Feature5: allFeatures.FEATURE_FLAG_5 ? require('./Feature5').default : null,
  Feature6: allFeatures.FEATURE_FLAG_6 ? require('./Feature6').default : null,
  Feature7: allFeatures.FEATURE_FLAG_7 ? require('./Feature7').default : null,
  Feature8: allFeatures.FEATURE_FLAG_8 ? require('./Feature8').default : null
}
