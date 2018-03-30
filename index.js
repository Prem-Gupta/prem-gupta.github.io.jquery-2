
$(document).ready(() => {

        getAllDetails();
        getAllFeeds();
}); 

let getAllDetails = () => {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        async: true,
        url: 'profile.json',

        success: (response) => {

            $('#dataSection').css('display', 'block');

            $('#userName').append(response.name);

            $('#favouriteEmail').append(response.email);

            $('#birthday').append(response.birthday);

            $('#profilePhoto').html('<img src="' + response.picture.data.url + '" class="img-fluid profileHeight"/>');

            $('#cover').css('background-image', 'url(' + response.cover.source + ')');



        }, error: (err) => {

            console.log(err.responseJSON.error.message);
            alert(err.responseJSON.error.message)

        }

    });

}



