$(function () {
  let sideBarWidth = $("#sideBarList").innerWidth();
  $("#sidebar").animate({ left: -sideBarWidth }, 1000);
  $(".loader").fadeOut(1000, function () {
    $(".loaderContainer").fadeOut(1000, function () {
      $("body").css("overflow", "auto");
      $(".loaderContainer").remove();
    });
  });

  $("#sideBarToggle").click(function () {
    if ($("#sidebar").css("left") == "0px") {
      $("#sidebar").animate({ left: -sideBarWidth }, 1000);
      $("#homeText,  #sideBarToggle").animate({ marginLeft: "0px" }, 1000);
    } else {
      $("#sidebar").animate({ left: "0px" }, 1000);
      $("#homeText , #sideBarToggle").animate({ marginLeft: "20%" }, 1000);
    }
  });
  $("#sideBarClose").click(function () {
    $("#sidebar").animate({ left: -sideBarWidth }, 1000);
    $("#homeText ,  #sideBarToggle").animate({ marginLeft: "0px" }, 1000);
  });

  //accordion
  let accordions = $(".accordion");
  for (let i = 0; i < accordions.length; i++) {
    accordions.eq(i).click(function () {
      let panel = accordions.eq(i).next();

      if (panel.hasClass("active")) {
        panel.removeClass("active");
        panel.slideUp(1000);
      } else {
        panel.addClass("active");
        $(".panel").slideUp(1000);
        panel.slideDown(1000);
      }
    });
  }

  // counter function call
  $("#userMessage").keydown(function (e) {
    let numberOfCharcters = $("#userMessage").val().length;

    if (numberOfCharcters >= 100) {
      $(".messageRemainingchars").html("your available character finished ");
      $(".messageRemainingchars").css("color", "red");
    } else {
      $("#messageRemainingchars").html(99 - numberOfCharcters);
    }
  });

  loopcounter("myCountdown");
});
