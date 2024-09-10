        const text = document.querySelector(".sec-text");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Mina Medhat ";
            }, 0);
            setTimeout(() => {
                text.textContent = "Freelancer";
            }, 4000);
            setTimeout(() => {
                text.textContent = "data analyst";
            }, 8000);
        }

        textLoad();
        setInterval(textLoad, 12000);


        document.addEventListener("DOMContentLoaded", () => {
            const skillMain = document.querySelector('.skill-main');
            const skills = skillMain.querySelectorAll('.counter');
        
            const resetAnimations = () => {
                skills.forEach(skill => {
                    skill.style.animation = 'none'; // Reset animation
                    skill.offsetHeight; // Trigger reflow to restart animation
                    skill.style.animation = ''; // Apply animation class again
                });
            };
        
            const animateSkills = () => {
                skills.forEach(skill => {
                    const percentage = skill.parentElement.previousElementSibling.querySelector('.percentage').textContent;
                    skill.style.setProperty('--width', percentage); // Set custom property for width
                    skill.style.animation = `skillAnimation 2s forwards`; // Apply animation
                });
            };
        
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        resetAnimations(); // Reset animations
                        animateSkills(); // Reapply animations
                    }
                });
            }, { threshold: 0.1 }); // Adjust the threshold as needed
        
            observer.observe(skillMain);
        });
        




        document.addEventListener("DOMContentLoaded", () => {
            const part3 = document.getElementById('skills');
            const circles = part3.querySelectorAll('.circle');
        
            const animateCircles = () => {
                circles.forEach(elem => {
                    const dots = elem.getAttribute("data-dots"); 
                    const marked = elem.getAttribute("data-percent"); 
                    const percent = Math.floor((dots * marked) / 100); 
                    let points = "";
                    const rotate = 360 / dots;
        
                    for (let i = 0; i < dots; i++) {
                        points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg"></div>`; 
                    }
        
                    elem.innerHTML = points;
                    const pointsMarked = elem.querySelectorAll('.points');
        
                    for (let i = 0; i < percent; i++) {
                        pointsMarked[i].classList.add('marked'); 
                    }
                });
            };
        
            const resetCircles = () => {
                circles.forEach(elem => {
                    elem.innerHTML = ''; // Clear the existing content
                });
            };
        
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        resetCircles(); // Clear any existing content to reset animation
                        animateCircles();
                    }
                });
            }, { threshold: 0.1 }); // Adjust the threshold as needed
        
            observer.observe(part3);
        });
        



let icons = document.querySelectorAll('.skillsicons .icons');
    icons.forEach(icon => {
        icon.style.opacity = 0; // Hide icons initially
        icon.style.animation = 'none'; // Remove animation
        setTimeout(() => {
            icon.style.animation = ''; // Reapply animation
            icon.style.opacity = ''; // Reset opacity
        }, 10); // Small timeout to reapply the animation
    });








    

    
  // filter code 
  let next = document.querySelector('.next');
  let prev = document.querySelector('.prev');
  let slider = document.querySelector('.slider');
  let autoNextInterval;
  
  function moveNext() {
    let slides = document.querySelectorAll('.slides:not(.hide)');
    slider.append(slides[0]);
    resetAutoNext();
  }
  
  function movePrev() {
    let slides = document.querySelectorAll('.slides:not(.hide)');
    slider.prepend(slides[slides.length-1]);
    resetAutoNext();
  }
  
  next.addEventListener('click', moveNext);
  prev.addEventListener('click', movePrev);
  
  const filterButtons = document.querySelectorAll(".filter_buttons button");
  const filterableCards = document.querySelectorAll(".container .slider .slides");
  
  const filterCard = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
  
    const filterName = e.target.dataset.name;
  
    filterableCards.forEach(item => {
      if (item.dataset.name === filterName || filterName === "all") {
        item.classList.remove("hide");
        item.classList.add("show");
        item.style.display = 'block';
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
        item.style.display = 'none';
      }
    });
  
    // After filtering, find the first visible slide and prepend it to the slider
    let firstVisibleSlide = document.querySelector('.container .slider .slides.show');
    if (firstVisibleSlide) {
      slider.prepend(firstVisibleSlide);
    }
  
    resetAutoNext();
  };
  
  // Attach the filterCard function to the buttons
  filterButtons.forEach(button => button.addEventListener('click', filterCard));
  
  function autoNext() {
    moveNext();
  }
  
  function resetAutoNext() {
    clearInterval(autoNextInterval);
    autoNextInterval = setInterval(autoNext, 6000); // 10 seconds
  }
  
  // Start auto next slide
  resetAutoNext();
  













  


















  // Attach the filterCard function to the buttons
  filterButtons.forEach(button => button.addEventListener('click', filterCard));

  

let menuli= document.querySelectorAll('header a');

let sectiom= document.querySelectorAll('section');

document.addEventListener('DOMContentLoaded', (event) => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    function activeMenu() {
        let len = sections.length;

        while (--len && window.scrollY + 97 < sections[len].offsetTop) {}

        navLinks.forEach(link => link.classList.remove('active'));
        if (len >= 0) {
            navLinks[len].classList.add('active');
        }
    }

    activeMenu();
    window.addEventListener('scroll', activeMenu);
});


const header = document.querySelector("header");
window.addEventListener("scroll" ,function(){
    header.classList.toggle("sticky", this.window.scrollY > 50)

})









let menuicon =document.querySelector("#menu-icon");
let navlist =document.querySelector(".navbar");

let sections =document.querySelector("section");
let navlinks =document.querySelector("hearder nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top =window.scrollY;
        let offser =sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top <offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [herf* =' + id +']').classList.add('active')
            })
        }
    })
} 

menuicon.onclick =() => {
    menuicon.classList.toggle("bx-x");
    navlist.classList.toggle("active");
}





const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry ) => {
        if(entry.isIntersecting){
         entry.target.classList.add("show-items");
        }else{
         entry.target.classList.remove("show-items");

        }
    });
});
const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom= document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));


const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));

const scrollRight = document.querySelectorAll(".scroll-right");
scrollRight.forEach((el)=>observer.observe(el));

const scrollLeft = document.querySelectorAll(".scroll-left");
scrollLeft.forEach((el)=>observer.observe(el));






















const descriptions = {
    service1: `
      <h2>Data Analysis with Python</h2>
      <p>In this service, we harness the power of Python to perform a comprehensive data analysis process. By utilizing powerful libraries such as Pandas, NumPy, and Scikit-learn, we handle data cleaning, preprocessing, and exploratory data analysis (EDA) to uncover valuable insights hidden within your data.</p>
      <p>Our approach includes advanced techniques such as regression analysis, classification, clustering, and time-series forecasting to derive actionable insights tailored to your business needs. These insights help identify patterns, correlations, and trends that can inform strategic decisions, optimize operations, and drive business growth.</p>
      <p>With Python's robust capabilities, we transform your raw data into meaningful information that provides a competitive edge.</p>
    `,
    service2: `
      <h2>Dashboard Creation with Power BI</h2>
      <p>Our dashboard creation service leverages the powerful capabilities of Power BI to develop interactive and visually compelling dashboards. We integrate data from multiple sources, creating real-time dashboards that automatically update to reflect the latest information.</p>
      <p>Our custom visualizations highlight key metrics, trends, and performance indicators that are most relevant to your business objectives. The dashboards are designed to be user-friendly, allowing you to explore data intuitively and make informed decisions quickly.</p>
      <p>By presenting data in a clear and engaging manner, our Power BI dashboards empower you to monitor progress, identify opportunities, and address challenges effectively, ultimately enhancing your operational efficiency and strategic planning.</p>
    `,
    service3: `
      <h2>Customer Segmentation</h2>
      <p>Our customer segmentation service provides a deep understanding of your customer base, enabling more effective targeting. Using Python, we perform detailed customer segmentation analysis, employing methods such as RFM (Recency, Frequency, Monetary) analysis, k-means clustering, and hierarchical clustering to identify distinct customer groups based on their behavior and characteristics.</p>
      <p>This segmentation allows for personalized marketing strategies, improving customer engagement and loyalty. The results are presented in comprehensive reports and visualized using Power BI, providing clear insights into each segment’s unique traits and preferences.</p>
      <p>By leveraging customer segmentation, you can tailor your marketing efforts, optimize resource allocation, and enhance customer satisfaction, driving better business outcomes.</p>
    `,
    service4: `
    <h2>Advanced Web Scraping</h2>
    <p>Our advanced web scraping service allows you to extract critical data from websites, even those with challenging structures or sophisticated CAPTCHA systems. Whether it's scraping product data, customer reviews, or competitive pricing information, we ensure accuracy and reliability in the data collected.</p>
    <p>We have successfully scraped data from major platforms like Amazon and Noon, overcoming their complex CAPTCHA challenges using advanced techniques and tools. Our approach guarantees the extraction of high-quality data that is ready for analysis and integration into your decision-making processes.</p>
    <p>The scraped data can be transformed into actionable insights through detailed reports and visualizations, helping you stay ahead in a competitive market.</p>
    <p>Leverage our web scraping services to unlock the full potential of the data available online, driving informed decisions and enhancing business outcomes.</p>
  `
  };

  function showPopup(event, service) {
    event.preventDefault();
    document.getElementById('popup-content').innerHTML = descriptions[service];
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
  }

  function hidePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  }















  document.addEventListener("DOMContentLoaded", () => {
    const readMoreButtons = document.querySelectorAll(".read-more");
    const popTemplates = document.querySelectorAll(".pop-template");
    const navButtons = document.querySelectorAll(".nav-btn");

    // Initially hide all popups
    popTemplates.forEach(popTemplate => {
        popTemplate.style.display = "none";
    });

    readMoreButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const target = button.getAttribute("data-target");
            openPopUp(target);
        });
    });

    const openPopUp = (target) => {
        const popTemplate = document.getElementById(target);
        popTemplate.style.display = "flex";
    };

    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            const target = button.getAttribute("data-target");
            const currentPop = button.closest(".pop-template");
            currentPop.style.display = "none";
            openPopUp(target);
        });
    });

    popTemplates.forEach(popTemplate => {
        popTemplate.querySelector(".close-btn").addEventListener("click", () => {
            popTemplate.style.display = "none";
        });

        popTemplate.addEventListener("click", (e) => {
            if (e.target === popTemplate) {
                popTemplate.style.display = "none";
            }
        });
    });
});





document.addEventListener("DOMContentLoaded", function() {
    const readMoreBtns = document.querySelectorAll(".read-more");
    const popups = document.querySelectorAll(".pop-template");
    const closeBtns = document.querySelectorAll(".close-btn1" ,".close-btn1");

    readMoreBtns.forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = btn.getAttribute("data-target");
            document.getElementById(targetId).style.display = "flex";
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            btn.closest(".pop-template").style.display = "none";
        });
    });
});














document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll(".navbar1");
    const navButtons = document.querySelectorAll(".nav-buttons");

    window.addEventListener("scroll", () => {
        headers.forEach(header => {
            if (window.scrollY > 50) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        });

        navButtons.forEach(button => {
            if (window.scrollY > 50) {
                button.classList.add("sticky");
            } else {
                button.classList.remove("sticky");
            }
        });
    });

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar1 a');

    function activeMenu() {
        let len = sections.length;

        while (--len && window.scrollY + 97 < sections[len].offsetTop) {}

        navLinks.forEach(link => link.classList.remove('active'));
        if (len >= 0) {
            navLinks[len].classList.add('active');
        }
    }

    activeMenu();
    window.addEventListener('scroll', activeMenu);
});





document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    const popups = document.querySelectorAll('.pop-template');
    const closeButtons = document.querySelectorAll('.pop-template .close-btn1');
    
    let currentPopup = null;

    function showPopup(id) {
        // Hide all popups
        popups.forEach(popup => popup.style.display = 'none');
        
        // Show the targeted popup
        document.getElementById(id).style.display = 'block';
        
        // Update the currentPopup variable
        currentPopup = id;
    }

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const target = card.getAttribute('data-target');
            // Show the target popup
            showPopup(target);
        });
    });

    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.pop-template').style.display = 'none';
            currentPopup = null;
        });
    });

    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentPopup) {
                const target = btn.getAttribute('data-target');
                showPopup(target);
            }
        });
    });
});










// Disable right-click context menu
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, and other keys
document.addEventListener('keydown', function(event) {
    // F12
    if (event.key === 'F12') {
        event.preventDefault();
    }

    // Ctrl+Shift+I or Ctrl+Shift+J or Ctrl+U
    if (event.ctrlKey && (event.shiftKey && (event.key === 'I' || event.key === 'J') || event.key === 'U')) {
        event.preventDefault();
    }

    // Ctrl+S or Ctrl+P (to disable Save and Print)
    if (event.ctrlKey && (event.key === 'S' || event.key === 'P')) {
        event.preventDefault();
    }
});




