// $(document).ready(function(){
//   $(".nav_about_us").mouseover(function(){
//     $(".about").css("mix-blend-mode", "multiply");
//   });
//   $(".nav_about_us").mouseout(function(){
//     $(".about").css("color", "#fafafa");
//   });
// });


/*NAV_TEXT_HOVER*/

$( document ).ready(function(){
      $(".nav_about_us").on( "mouseover", function() {
        $(".about").addClass( "transp", 1000 );
      });

      $(".nav_about_us").on( "mouseout", function() {
        $(".about").removeClass( "transp", 1000 );
      });
    });

    $( document ).ready(function(){
        $(".nav_garden").on( "mouseover", function() {
          $(".garden").addClass( "transp", 1000 );
        });

        $(".nav_garden").on( "mouseout", function() {
          $(".garden").removeClass( "transp", 1000 );
        });
      });

      $( document ).ready(function(){
        $(".nav_video").on( "mouseover", function() {
          $(".video").addClass( "transp", 1000 );
        });

        $(".nav_video").on( "mouseout", function() {
          $(".video").removeClass( "transp", 1000 );
        });
      });

      $( document ).ready(function(){
        $(".nav_book").on( "mouseover", function() {
          $(".book").addClass( "transp", 1000 );
        });

        $(".nav_book").on( "mouseout", function() {
          $(".book").removeClass( "transp", 1000 );
        });
      });

      $( document ).ready(function(){
        $(".play_tangles").on( "mouseover", function() {
          $(".process").addClass( "transp", 1000 );
        });

        $(".play_tangles").on( "mouseout", function() {
          $(".process").removeClass( "transp", 1000 );
        });
      });


/*BURGER*/

$( document ).ready(function(){
	  $( ".header_burger" ).click(function(){
	    $( ".header_burger, .header_menu" ).toggleClass('active');
      $( "body" ).toggleClass('lock');
	  });
    });


/*POSTERS_ON_THE_MAIN*/

$(document).ready(function(){
  $(".arch_picture").mouseover(function(){
    $(".poster_01").css("visibility", "visible");
    // $("poster_01").animate({visibility:'visible'},500);
    $(".poster_02").css("visibility", "visible");
    $(".poster_03").css("visibility", "visible");
  });
  $(".arch_picture").mouseout(function(){
    $(".poster_01").css("visibility", "hidden");
    $(".poster_02").css("visibility", "hidden");
    $(".poster_03").css("visibility", "hidden");
  });
});

$(document).ready(function(){
  $(".events").mouseover(function(){
    $(".poster_01").css("visibility", "visible");
    $(".poster_02").css("visibility", "visible");
    $(".poster_03").css("visibility", "visible");
  });
  $(".events").mouseout(function(){
    $(".poster_01").css("visibility", "hidden");
    $(".poster_02").css("visibility", "hidden");
    $(".poster_03").css("visibility", "hidden");
  });
});

$(document).ready(function(){
  $(".poster_01").mouseover(function(){
    $(".poster_01").css("visibility", "visible");
    $(".poster_02").css("visibility", "visible");
    $(".poster_03").css("visibility", "visible");
  });
  $(".poster_01").mouseout(function(){
    $(".poster_01").css("visibility", "hidden");
    $(".poster_02").css("visibility", "hidden");
    $(".poster_03").css("visibility", "hidden");
  });
});

$(document).ready(function(){
  $(".poster_02").mouseover(function(){
    $(".poster_01").css("visibility", "visible");
    $(".poster_02").css("visibility", "visible");
    $(".poster_03").css("visibility", "visible");
  });
  $(".poster_02").mouseout(function(){
    $(".poster_01").css("visibility", "hidden");
    $(".poster_02").css("visibility", "hidden");
    $(".poster_03").css("visibility", "hidden");
  });
});

$(document).ready(function(){
  $(".poster_03").mouseover(function(){
    $(".poster_01").css("visibility", "visible");
    $(".poster_02").css("visibility", "visible");
    $(".poster_03").css("visibility", "visible");
  });
  $(".poster_03").mouseout(function(){
    $(".poster_01").css("visibility", "hidden");
    $(".poster_02").css("visibility", "hidden");
    $(".poster_03").css("visibility", "hidden");
  });
});

/*POSTERS_ON_THE_MAIN*/


/*STORE_ON_THE_MAIN*/

$(document).ready(function(){
  $(".arch_picture_2").mouseover(function(){
    $(".case").css("visibility", "visible");
    $(".tshirt").css("visibility", "visible");
    $(".blue_vinyl").css("visibility", "visible");
  });
  $(".arch_picture_2").mouseout(function(){
    $(".case").css("visibility", "hidden");
    $(".tshirt").css("visibility", "hidden");
    $(".blue_vinyl").css("visibility", "hidden");
  });
});

$(document).ready(function(){
  $(".store").mouseover(function(){
    $(".case").css("visibility", "visible");
    $(".tshirt").css("visibility", "visible");
    $(".blue_vinyl").css("visibility", "visible");
  });
  $(".store").mouseout(function(){
    $(".case").css("visibility", "hidden");
    $(".tshirt").css("visibility", "hidden");
    $(".blue_vinyl").css("visibility", "hidden");
  });
});

$(document).ready(function(){
  $(".case").mouseover(function(){
    $(".case").css("visibility", "visible");
    $(".tshirt").css("visibility", "visible");
    $(".blue_vinyl").css("visibility", "visible");
  });
  $(".case").mouseout(function(){
    $(".case").css("visibility", "hidden");
    $(".tshirt").css("visibility", "hidden");
    $(".blue_vinyl").css("visibility", "hidden");
  });
});

$(document).ready(function(){
  $(".tshirt").mouseover(function(){
    $(".case").css("visibility", "visible");
    $(".tshirt").css("visibility", "visible");
    $(".blue_vinyl").css("visibility", "visible");
  });
  $(".tshirt").mouseout(function(){
    $(".case").css("visibility", "hidden");
    $(".tshirt").css("visibility", "hidden");
    $(".blue_vinyl").css("visibility", "hidden");
  });
});

$(document).ready(function(){
  $(".blue_vinyl").mouseover(function(){
    $(".case").css("visibility", "visible");
    $(".tshirt").css("visibility", "visible");
    $(".blue_vinyl").css("visibility", "visible");
  });
  $(".blue_vinyl").mouseout(function(){
    $(".case").css("visibility", "hidden");
    $(".tshirt").css("visibility", "hidden");
    $(".blue_vinyl").css("visibility", "hidden");
  });
});

/*STORE_ON_THE_MAIN*/


/*----POSTERS----*/

$(document).ready(function(){
  $(".circle_1").mouseover(function(){
    $(".poster_1").css("opacity", "1");
  });
  $(".circle_1").mouseout(function(){
  $(".poster_1").css("opacity", "0");
  });
});

$(document).ready(function(){
  $(".circle_2").mouseover(function(){
    $(".poster_2").css("opacity", "1");
  });
  $(".circle_2").mouseout(function(){
  $(".poster_2").css("opacity", "0");
  });
});

$(document).ready(function(){
  $(".circle_3").mouseover(function(){
    $(".poster_3").css("opacity", "1");
  });
  $(".circle_3").mouseout(function(){
  $(".poster_3").css("opacity", "0");
  });
});

$(document).ready(function(){
  $(".circle_4").mouseover(function(){
    $(".poster_4").css("opacity", "1");
  });
  $(".circle_4").mouseout(function(){
  $(".poster_4").css("opacity", "0");
  });
});

/*----POSTERS----*/


/*----ITEMS----*/

$(document).ready(function(){
  $(".tshirt_store").mouseover(function(){
    $(".item_upper_bg_1").css("display", "block");
  });
  $(".tshirt_store").mouseout(function(){
  $(".item_upper_bg_1").css("display", "none");
});
});


$(document).ready(function(){
  $(".yellow_bag").mouseover(function(){
    $(".item_upper_bg_2").css("display", "block");
  });
  $(".yellow_bag").mouseout(function(){
  $(".item_upper_bg_2").css("display", "none");
});
});


$(document).ready(function(){
  $(".blue_bag").mouseover(function(){
    $(".item_upper_bg_3").css("display", "block");
  });
  $(".blue_bag").mouseout(function(){
  $(".item_upper_bg_3").css("display", "none");
});
});


$(document).ready(function(){
  $(".yellow_vinyl").mouseover(function(){
    $(".item_upper_bg_4").css("display", "block");
  });
  $(".yellow_vinyl").mouseout(function(){
  $(".item_upper_bg_4").css("display", "none");
});
});


$(document).ready(function(){
  $(".blue_vinyl_store").mouseover(function(){
    $(".item_upper_bg_5").css("display", "block");
  });
  $(".blue_vinyl_store").mouseout(function(){
  $(".item_upper_bg_5").css("display", "none");
});
});


$(document).ready(function(){
  $(".green_vinyl").mouseover(function(){
    $(".item_upper_bg_6").css("display", "block");
  });
  $(".green_vinyl").mouseout(function(){
  $(".item_upper_bg_6").css("display", "none");
});
});


$(document).ready(function(){
  $(".headphones").mouseover(function(){
    $(".item_upper_bg_7").css("display", "block");
  });
  $(".headphones").mouseout(function(){
  $(".item_upper_bg_7").css("display", "none");
});
});


$(document).ready(function(){
  $(".case_store").mouseover(function(){
    $(".item_upper_bg_8").css("display", "block");
  });
  $(".case_store").mouseout(function(){
  $(".item_upper_bg_8").css("display", "none");
});
});


$(document).ready(function(){
  $(".disk").mouseover(function(){
    $(".item_upper_bg_9").css("display", "block");
  });
  $(".disk").mouseout(function(){
  $(".item_upper_bg_9").css("display", "none");
});
});
