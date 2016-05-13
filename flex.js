$( document ).ready(function() {

    var $selectedItem = $("#flex-item-1");
    var $flexContainer = $("#flex-container");
    var $flexItem = $(".flex-item");

    var flexContainerColor = "white";
    var flexContainerColorHover = "lightgray";

    var $itemControl = $("#item-control");

    $flexContainer.hover(function(event) {
        //$flexContainer.css("background-color", flexContainerColorHover);
    }, function() {
        //$flexContainer.css("background-color", flexContainerColor);
    });


    $flexItem.hover(function(event) {
        //$flexContainer.css("background-color", flexContainerColor);
    }, function() {
        //$flexContainer.css("background-color", flexContainerColorHover);
    });

    function isRowDirection(direction) {
        return direction.charAt(0) === "r";
    }

    function changeFlexDirection(direction) {
        if(isRowDirection($flexContainer.css("flex-direction")) !== isRowDirection(direction)) {
            var animation1 = {};
            var animation2 = {};
            animation1[isRowDirection(direction) ? "width" : "height"] = 400;
            animation2[isRowDirection(direction) ? "height" : "width"] = 100;
            $flexContainer.animate(animation1, 400, "swing", function () {
                $flexContainer.css("flex-direction", direction);
                $flexContainer.animate(animation2);
            });
        } else {
            $flexContainer.css("flex-direction", direction);
        }
    }

    $flexItem.click(function() {
        $selectedItem = $(this)
        var itemNumber = $selectedItem.attr("data-number");
        $itemControl.removeClass();
        $itemControl.addClass("item-" + itemNumber);
    });

    $("html").click(function() {
        $(".dropdown-content").css("display", "none");
    });

    $("#container-control .dropdown-label").click(function (event) {
        $(".dropdown-content").css("display", "none");
        $("#container-control ." + $(this).attr("data-propertyName")).css("display", "flex");
        event.stopPropagation();
    })

    $("#container-control .dropdown-item").click(function() {
        var property = $(this).attr("data-propertyName");
        var value = $(this).attr("data-propertyValue");
        if (property === "flex-direction") {
            changeFlexDirection(value);
        } else {
            $flexContainer.css(property, value);
        }
        event.stopPropagation();
    })

    $("#item-control .dropdown-label").click(function (event) {
        $(".dropdown-content").css("display", "none");
        $("#item-control ." + $(this).attr("data-propertyName")).css("display", "flex");
        event.stopPropagation();
    })

    $("#item-control .dropdown-item").click(function() {
        var property = $(this).attr("data-propertyName");
        var value = $(this).attr("data-propertyValue");
        $selectedItem.css(property, value);
        event.stopPropagation();
    })

});