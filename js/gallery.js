// $(document).ready(function() {
//     $('#category-filter').change(function() {
//         var selectedCategory = $(this).val();

//         $('.car-card').each(function() {
//             var cardCategory = $(this).find('.car-category').text();
//             if (selectedCategory === 'all' || cardCategory === selectedCategory) {
//                 $(this).show();
//             } else {
//                 $(this).hide();
//             }
//         });
//     });
// });

$(document).ready(function() {
    function filterCars() {
        // Get selected categories
        var selectedCategories = [];
        $('input[type="checkbox"][id^="Sedan"], input[type="checkbox"][id^="Sport"], input[type="checkbox"][id^="Luxury"], input[type="checkbox"][id^="Hyper"]').each(function() {
            if ($(this).is(':checked')) {
                selectedCategories.push($(this).attr('id'));
            }
        });
        console.log(selectedCategories);

        // Get selected ratings
        var selectedRatings = [];
        $('input[type="checkbox"][id^="5"], input[type="checkbox"][id^="4"], input[type="checkbox"][id^="3"]').each(function() {
            if ($(this).is(':checked')) {
                selectedRatings.push($(this).attr('id'));
            }
        });
        console.log(selectedRatings);
        // Filter car cards
        $('.car-card').each(function() {
            var cardCategory = $(this).find('.car-category').text();
            var cardRating = $(this).find('.car-rating span').text();
            //kyknya masalah caps atoga***
            var showCard = true;

            // Check if card matches selected categories
            if (selectedCategories.length > 0 && !selectedCategories.includes(cardCategory)) {
                showCard = false;
            }

            // Check if card matches selected ratings
            if (selectedRatings.length > 0 && !selectedRatings.includes(cardRating)) {
                showCard = false;
            }

            // Show or hide card
            if (showCard) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }

    // Bind the filter function to checkbox change events
    $('input[type="checkbox"]').change(filterCars);
});
