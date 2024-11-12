

AOS.init();


$(document).ready(function(){
    
  $('.linav').click(function(){
     $('.navbar-collapse').collapse('hide');
  })


  


})

$(document).on('click','.getcv',function(){
    
  var link = document.createElement('a');
  link.href = "Assets/files/Hari_Resume.pdf";
  link.download = 'Hari_Resume.pdf';
  link.target = "_blank";
  link.click();

 
  
})

$(document).on('click','.callbtn',function(){
  var call = document.createElement('a');
  call.href = 'tel:+918270659243';
  call.click();

})




function sendemail() {

 
  
  var email = $("#email").val();
  var to_name = $("#name").val();
  var message = $("#Message").val(); 


  var templateParams = {
      email: email,
      to_name: to_name,
      message: message
  };

  if(email === "" && to_name === "" && message === ""){
    $('.nameerr-msg').text("Name is required!").show();
    $('.emailerr-msg ').text("Email is required!").show();
    $('.msgerr-msg').text("Message is required!").show();
  }


  if (!to_name || to_name.trim() === "") {
    $('.nameerr-msg').text("Name is required!").show();
    return;  
}
else {
  $('.nameerr-msg').hide(); 
}

if (!email || email.trim() === "") {
    $('.emailerr-msg ').text("Email is required!").show();
    return;  
}
else {
  $('.emailerr-msg').hide(); 
}



var emailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
if (!emailformat.test(email)) {
  $('.emailerr-msg ').text("Please enter a valid email address!").show();
    return;  
}

else {
  $('.emailerr-msg').hide(); 
}

if (!message || message.trim() === "") {
    $('.msgerr-msg').text("Message is required!").show();
    return; 
}

else {
  $('.msgerr-msg').hide(); 
}




  emailjs.send('service_h5c0rir', 'template_nnj419l' ,templateParams)
      .then(function(response) {
      
          console.log('SUCCESS!', response.status, response.text);
         
          window.alert("Message Sent successfully!  Thanks for your response.");
          $("#email").val('');
          $("#name").val('');
          $("#Message").val('');
       
      })
      .catch(function(error) {
          console.log('FAILED...', error);
          window.alert("Failed to send!");
      });
}
  // scroll animate webpage
  
$(document).ready(function() {
  
  $('a[href^="#"]').on('click', function(event) {
  
    var target = $(this.getAttribute('href'));
    if (target.length) {
     
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000); 
    }
  });
});

  // scroll animate webpage end

  /* preloader */

  $(window).on('load', function() {

    $('#preloader').fadeOut();  
    $('header .container').fadeIn();   
});


  /* preloader end*/