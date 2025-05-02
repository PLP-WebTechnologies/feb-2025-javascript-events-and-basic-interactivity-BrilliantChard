// Event Handling
document.getElementById('click-me').addEventListener('click', () => {
    alert("Hey, you've Clicked Me!");
  });
  
// Retain color for "Hover Over Me" box
document.getElementById('hover-box').addEventListener('mouseover', () => {
    document.getElementById('hover-box').style.backgroundColor = '#ffeb3b';
  });
  
  document.getElementById('hover-box').addEventListener('mouseout', () => {
    // Keep the color after hover
    document.getElementById('hover-box').style.backgroundColor = '#fff';
  });
  
  document.getElementById('keypress-input').addEventListener('keypress', (e) => {
    console.log(`Key pressed: ${e.key}`);
  });
  
  // Interactive Elements
  document.getElementById('color-changer').addEventListener('click', () => {
    const button = document.getElementById('color-changer');
    const currentColor = button.style.backgroundColor;
  
    // Toggle between two colors
    button.style.backgroundColor = currentColor === 'rgb(76, 175, 80)' ? '#ff5722' : '#4caf50';
  });
  
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');

// Different Background colors for tabs  

  const tabColors = {
    1: '#ffeb3b', 
    2: '#4caf50', 
    3: '#2196f3'  
  };
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Hiding all tab contents and resetting background colors
      tabContents.forEach(content => {
        content.style.display = 'none';
        content.style.backgroundColor = ''; // Reset background color
      });
  
      // Displaying the selected tab content and apply its unique background color
      const selectedTabContent = document.getElementById(`tab-${tab.dataset.tab}`);
      selectedTabContent.style.display = 'block';
      selectedTabContent.style.backgroundColor = tabColors[tab.dataset.tab];
    });
  });
  
  // Form Validation
  document.getElementById('validation-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (!email.includes('@')) {
      alert('Invalid email format!');
      return;
    }
  
    if (password.length < 8) {
      alert('Password must be at least 8 characters long!');
      return;
    }
  
    alert('Form submitted successfully!');
  });