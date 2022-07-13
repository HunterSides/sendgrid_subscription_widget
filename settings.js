// Change the url to the domain of your app
exports.url = "https://sg-subscription-widget.herokuapp.com/";

exports.senderEmail = "hunter.s.1337@gmail.com";
exports.senderName = "Hunter Sides";

// set 'exports.listId = null' to add contact to all contacts, but no specific list
// or a string with the listId to add to a specific list
exports.listId = "29916fc3-c035-4039-bd88-c6f3d02a5667"; //Developer newsletter
exports.listId = "47b7176a-980f-42b9-928e-afb05720b3cd"; //community newsletter
exports.listId = "ba8f318b-556e-4930-896a-1c64ec57b58f"; //MNO newsletter
exports.listId = "3d0db80e-11db-410a-8dc2-589a5f0af522"; //Investor newsletter
// set 'exports.templateId = null' to opt out of using a template
// or a string with the templateId to use a template
exports.templateId = null;

// receive an email when a new signup is confirmed
exports.sendNotification = true;
exports.notificationEmail = "admin@example.com";
