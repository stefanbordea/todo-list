// Check off specific todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

// Click on X to delete todo
$("ul").on("click", "span", function (event) {
    $(this)
        .parent()
        .fadeOut(500, function () {
            $(this).remove();
        });
    // Applies the event only to the specified element and not the parent elements
    event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        // Grab new todo from text input
        var todoText = $(this).val();
        $(this).val("");
        // Create a new li and add it to ul
        $("ul").append(
            "<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " +
                todoText +
                "</li>"
        );
    }
});

$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
});
