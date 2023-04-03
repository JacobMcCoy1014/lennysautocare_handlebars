function validateForm() {
   var name = $("form[name='contactForm'] input[name='name']").val();
   var email = $("form[name='contactForm'] input[name='email']").val();
   var message = $("form[name='contactForm'] textarea[name='message']").val();
    
    if (name === "") {
      alert("Name must be filled out");
      return false;
    }
    if (email === "") {
      alert("Email must be filled out");
      return false;
    }
    if (message === "") {
      alert("Message must be filled out");
      return false;
    }
    return true;
  }
  
function submitMsg(){
    document.getElementById("msg").innerHTML = "Thank you for submitted a message! We Will get back to you ASAP";
}
 
  
function seeMore(){
    document.getElementById("more").innerHTML = "Detailing your car is a vital step in maintaining the overall health and longevity of your vehicle. Regular detailing helps to remove dirt, grime, and other contaminants from both the interior and exterior surfaces of your car, preventing them from causing permanent damage.It also helps to protect your car's paint, upholstery, and other surfaces from the harsh elements of the environment, such as UV rays, bird droppings, and acid rain. Detailing your car also helps to increase its resale value. A car that has been well-maintained and regularly detailed will command a higher price than a car that has been neglected. Additionally, detailing your car helps to improve its overall appearance, making it look newer and more attractive to potential buyers. Detailing is also important for your own health and well-being. The interior of your car can be a breeding ground for bacteria and allergens, especially if it is not cleaned regularly. Detailing helps to remove these harmful substances from your car's interior, ensuring that you and your passengers are breathing clean, fresh air. Finally, detailing your car can be a source of pride and satisfaction. A clean, well-maintained car looks and feels great to drive, and it can help to improve your mood and overall sense of well-being. It also shows that you take pride in your vehicle and that you are willing to invest the time and effort needed to keep it in top condition. In summary, detailing your car is an important part of maintaining the health, value, and appearance of your vehicle, as well as your own health and well-being.";
}



