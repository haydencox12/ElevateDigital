// Scroll to Contact Form and Pre-Fill Plan
function scrollToContact(plan) {
    document.getElementById('plan').value = plan;
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }
  
  // Handle Form Submission
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh
    document.getElementById('successMessage').hidden = false; // Show success message
    this.reset(); // Clear the form fields
  });