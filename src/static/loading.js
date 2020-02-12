let loading;
document.addEventListener("DOMContentLoaded", function() {
    loading = document.getElementById("loading-container");
});

function setLoading() {
    loading.hidden = false;
}

function unsetLoading() {
    loading.hidden = true;
}