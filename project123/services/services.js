function showDetails(serviceId) {
    const modal = document.getElementById('details-modal');
    const title = document.getElementById('service-title');
    const description = document.getElementById('service-description');
    const itemList = document.getElementById('service-items-list');
  
    modal.style.display = 'block';
  
    switch (serviceId) {
      case 1:
        title.textContent = 'Food Catering';
        description.textContent = 'We provide catering services for events of all sizes.';
        itemList.innerHTML = '<li>Appetizers</li>' +
                             '<li>Main Course</li>' +
                             '<li>Side Dishes</li>' +
                             '<li>Desserts</li>' +
                             '<li>Beverages</li>';
        break;
      case 2:
        title.textContent = 'Home Delivery';
        description.textContent = 'Get your favorite food delivered to your doorstep.';
        itemList.innerHTML = '<li>Pizza</li>' +
                             '<li>Burgers</li>' +
                             '<li>Pasta</li>' +
                             '<li>Sushi</li>' +
                             '<li>Salads</li>';
        break;
      case 3:
        title.textContent = 'Private Chef';
        description.textContent = 'Hire a private chef for an intimate dining experience.';
        itemList.innerHTML = '<li>Custom Menu Creation</li>' +
                             '<li>Personalized Dining Experience</li>' +
                             '<li>Special Dietary Accommodations</li>' +
                             '<li>Wine Pairing</li>' +
                             '<li>Chef\'s Specials</li>';
        break;
      default:
        break;
    }
  }
  
  function hideDetails() {
    const modal = document.getElementById('details-modal');
    modal.style.display = 'none';
  }
  