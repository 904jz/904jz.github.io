function sendMail(){
    var link = "mailto:jordanzebouni@gmail.com"
                + "?subject=" + encodeURIComponent("Let's chat about an opportunity!")
                + "&body=" + encodeURIComponent("Hi Jordan! We saw your website and would love to talk with you to discuss an opportunity. Let us know when you have time to talk. Thanks!");

    window.location.href = link;            

}