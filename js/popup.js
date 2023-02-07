$(function() {
    var id_dic = {"app1":"#popup_app1", "app2":"#popup_app2", "app3":"#popup_app3", "web1":"#popup_web1", "web2":"#popup_web2", "web3":"#popup_web3"};
    var app_id;
    $(".apps").on("click", function() {
        app_id = $(this).attr("id");
        $(id_dic[app_id]).show();
        $("#fade").show();
    });

    $("#fade").on("click", function() {
        $(id_dic[app_id]).hide();
        $("#fade").hide();
    });
});