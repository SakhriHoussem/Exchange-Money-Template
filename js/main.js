
$(document).ready(function() {

    $("[data-action='login']").click(function (event) {
        event.preventDefault();
        $("#login_block").modal();
    });



        // login model teb
    $("#list_tab a").click(function (e) {
        e.preventDefault()
        $(this).tab('show');
    })
});