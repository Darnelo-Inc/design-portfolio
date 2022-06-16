$(function() {

    let filter = $("[data-filter]");
    console.log(1);

    filter.on("click", function(event) {
        event.preventDefault();

	

        let cat = $(this).data('filter');
	console.log(2);

        if(cat == 'all') {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function() {
                let workCat = $(this).data('cat');

                if(workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });
});
