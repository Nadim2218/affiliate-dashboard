$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});


    function toggleDropdown() {
        document.getElementById("notificationDropdown").classList.toggle("show");
    }

    window.onclick = function(event) {
        if (!event.target.matches('.quicktech-noti') && !event.target.matches('.fa-bell')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }



   
          
