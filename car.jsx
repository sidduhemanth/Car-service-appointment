document.addEventListener('DOMContentLoaded', function() {

    const appointmentForm = document.getElementById('appointmentForm');
    const confirmationModal = document.getElementById('confirmationModal');
    const closeModal = document.querySelector('.close');
    const confirmationDetails = document.getElementById('confirmationDetails');
    const printBtn = document.getElementById('printBtn');
    
    
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('appointment-date').min = today;
    
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
  
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            carMake: document.getElementById('car-make').value,
            carModel: document.getElementById('car-model').value,
            carYear: document.getElementById('car-year').value,
            serviceType: document.getElementById('service-type').value,
            appointmentDate: document.getElementById('appointment-date').value,
            appointmentTime: document.getElementById('appointment-time').value,
            notes: document.getElementById('notes').value
        };
        
     
        const formattedDate = new Date(formData.appointmentDate).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
      
        let confirmationHTML = `
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Vehicle:</strong> ${formData.carYear} ${formData.carMake} ${formData.carModel}</p>
            <p><strong>Service:</strong> ${formData.serviceType}</p>
            <p><strong>Appointment Date:</strong> ${formattedDate} at ${formData.appointmentTime}</p>
        `;
        
        if (formData.notes) {
            confirmationHTML += `<p><strong>Notes:</strong> ${formData.notes}</p>`;
        }
        
        confirmationHTML += `
            <p class="confirmation-note">We've sent a confirmation email to ${formData.email}. 
            Please arrive 10 minutes before your scheduled time.</p>
        `;
        
        confirmationDetails.innerHTML = confirmationHTML;
        confirmationModal.style.display = 'block';
        
       
        appointmentForm.reset();
    });
    
    closeModal.addEventListener('click', function() {
        confirmationModal.style.display = 'none';
    });
    

    window.addEventListener('click', function(e) {
        if (e.target === confirmationModal) {
            confirmationModal.style.display = 'none';
        }
    });
    
    printBtn.addEventListener('click', function() {
        window.print();
    });
    
    const carMakeSelect = document.getElementById('car-make');
    const carModelInput = document.getElementById('car-model');
    
    carMakeSelect.addEventListener('change', function() {
        if (this.value === 'Other') {
            
        }
    });
    
    
    const serviceTypeSelect = document.getElementById('service-type');
    
    serviceTypeSelect.addEventListener('change', function() {
       
        const service = this.value;
        console.log(`Selected service: ${service}`);
    });
});