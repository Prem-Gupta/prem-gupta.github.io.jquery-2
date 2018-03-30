$(document).ready(() => {
    getAllFeeds();
}); 



let getAllFeeds = () => {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        async: true,
        url: 'feeds.json',

        success: (response) => {

            $('#dataSection').css('display', 'block');
        //  console.log(response.feed.data);
        var details;
            for(i in response.feed.data){
                // console.log(response.feed.data[i].story)
                 $('#storydetails').append(response.feed.data[i].story).append("<br>");
                 $('#messagedetails').append(response.feed.data[i].message).append("<br>");

            }
           
        }, error: (err) => {

            console.log(err.responseJSON.error.message);
            alert(err.responseJSON.error.message)

        }

    });

}









