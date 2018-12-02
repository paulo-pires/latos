/*==========================================================
    Author      : Ranjithprabhu K
    Date Created: 13 Jan 2016
    Description : Controller to handle Home page
    Change Log
    s.no      date    author     description     


 ===========================================================*/

dashboard.controller("HomeController", ['$rootScope', '$scope', '$state', '$location',  'Flash',
function ($rootScope, $scope, $state, $location,  Flash) {
    var vm = this;

    vm.showDetails = true;
    vm.home = {};
    
    vm.home.mainData = [
        {
            title: "Projects",
            value: "30+",
            theme: "aqua",
            icon: "puzzle-piece"
        },
        {
            title: "Designs",
            value: "250+",
            theme: "red",
            icon: "paint-brush"
        },
        {
            title: "Awards",
            value: "50+",
            theme: "green",
            icon: "trophy"
        },
        {
            title: "Cups of Beer",
            value: "0",
            theme: "yellow",
            icon: "glass"
        },
    ];

    //skills progress bar
    vm.home.skills = [
        {
            title: "Design & Development",
            theme: "aqua",
            percentage:80
        },
        {
            title: "Communication",
            theme: "red",
            percentage: 83
        },
        {
            title: "Planning & Progressing",
            theme: "green",
            percentage: 75
        },
        {
            title: "Problem Solving & Decision Making",
            theme: "yellow",
            percentage: 85
        },
        {
            title: "Loyal & Dedication",
            theme: "aqua",
            percentage: 100
        },
        {
            title: "Fun & Friendly",
            theme: "green",
            percentage: 95
        },
        {
            title: "Lazy & Sleepy",
            theme: "red",
            percentage: 40
        }
    ];

    vm.home.tools = [
       {
           Software: "Mongo DB",
           Percentage: "80",
           theme: "yellow",
           image: "mongodb"
       }
    ];

    //Tools I use Carousel
    $("#owl-demo").owlCarousel({


        items: 8, //10 items above 1000px browser width
        itemsDesktop: [1000, 5], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
    });
    $("#owl-demo").trigger('owl.play', 2000);

    // Custom Navigation Events
    $(".next").click(function () {
        $("#owl-demo").trigger('owl.next');
    })
    $(".prev").click(function () {
        $("#owl-demo").trigger('owl.prev');
    })
    $(".play").click(function () {
        $("#owl-demo").trigger('owl.play', 1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function () {
        $("#owl-demo").trigger('owl.stop');
    })

    //cartoon photo slider carosusel
    $("#owl-single").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: 5000, //Set AutoPlay to 3 seconds
    });
}]);

