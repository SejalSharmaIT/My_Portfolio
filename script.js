
  // Function to detect when skills section is in view
  const skillsSection = document.getElementById('skills');
  const skillProgressBars = document.querySelectorAll('.skill-progress');

  // Function to add animation to the skill bars
  function checkSkillBarsInView() {
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Check if the section is in the viewport
    if (sectionTop < windowHeight * 0.8) {
      skillProgressBars.forEach((bar) => {
        const progress = bar.getAttribute('style');
        const width = parseInt(progress.split(':')[1].split('%')[0].trim());
        bar.style.width = `${width}%`; // Animate the width based on the percentage
      });
    }
  }

  // Event listener to trigger the function on scroll
  window.addEventListener('scroll', checkSkillBarsInView);

