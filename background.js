// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {
    // only on klassroom web pages
    const urlRegex = /^https:\/\/web\.klassroom\.fr/;

    if (!urlRegex.test(tab.url)) {
        console.log('URL does not match pattern : ' + tab.url);
        return;
    }

    console.log('save picture');
});
