window.onload = function() {
    function updateDateTime() {
        var now = new Date();
        var day = now.getDate();
        var month = now.getMonth() + 1;
        var year = now.getFullYear();
        if (day < 10) day = '0' + day;
        if (month < 10) month = '0' + month;
        document.getElementById("date").innerText = day + '.' + month + '.' + year;

        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        if (hours < 10) hours = '0' + hours;
        if (minutes < 10) minutes = '0' + minutes;
        if (seconds < 10) seconds = '0' + seconds;
        document.getElementById("clock").innerText = hours + ':' + minutes + ':' + seconds;
    }

    updateDateTime();

    setInterval(updateDateTime, 1000);
};
