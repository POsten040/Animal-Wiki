

$(document).ready(function() {
    if ($(".koala-click").click()) {
        $(".koala").addClass(".show-class");
    }
    $(".beluga-click").click(function() {
        $(".beluga").toggle();
    });
    $(".robin-click").click(function() {
        $(".robin").toggle();
    });
});