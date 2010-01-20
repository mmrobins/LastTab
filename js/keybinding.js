$(document).bind('keydown', 'Ctrl+s', function() {
  chrome.extension.sendRequest({call: "changeTab"});
});
