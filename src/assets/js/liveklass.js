function copy_link_to_share(id) {
    navigator.clipboard.writeText(get_host() + '/classes/' + id)
    let element = document.getElementById('copy_sharable_link')
    element.innerText = 'Link Copied';

    setTimeout(function () {
        let element = document.getElementById('copy_sharable_link')
        element.innerText = 'Copy Sharable Link';
    }, 1000);
}

function get_host() {
    return 'https://liveklass.io'
}

function get_media_url() {
    return 'https://storage.liveklass.io/liveklass/'
}
