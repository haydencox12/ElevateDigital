// Populate the "Selected Plan" field from URL parameter
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedPlan = urlParams.get('plan');
    if (selectedPlan) {
      document.getElementById('plan').value = selectedPlan;
    }
  };
  
  // Handle Form Submission
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh
    document.getElementById('successMessage').hidden = false; // Show success message
    this.reset(); // Clear the form fields
  });