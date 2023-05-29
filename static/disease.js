// Disease options for General Checkup
var generalCheckupDiseases = [
    {
      name: "BP Checkup",
      icon: "fas fa-heartbeat"
    },
    {
      name: "Asthma Checkup",
      icon: "fas fa-lungs"
    },
    {
      name: "Eye Checkup",
      icon: "fas fa-eye"
    },
    {
      name: "Heart Checkup",
      icon: "fas fa-heart"
    },
    {
      name: "Lungs Checkup",
      icon: "fas fa-lungs"
    },
    {
      name: "Regular Checkup",
      icon: "fas fa-stethoscope"
    }
  ];
  
  // Disease options for Specific Disease
  var specificDisease = [
    {
      name: "Malaria",
      icon: "fas fa-mosquito"
    },
    {
      name: "Diabetes",
      icon: "fas fa-notes-medical"
    },
    {
      name: "Cancer",
      icon: "fas fa-ribbon"
    },
    {
      name: "Typhoid",
      icon: "fas fa-thermometer"
    },
    {
      name: "Fever",
      icon: "fas fa-thermometer-half"
    },
    {
      name: "Asthma",
      icon: "fas fa-lungs"
    }
  ];

  // Disease options for Labs and Tests
var LabsAndTests = [
  {
    name: "Blood Test",
    icon: "fas fa-tint"
  },
  {
    name: "Sugar Test",
    icon: "fas fa-heart"
  },
  {
    name: "Urine Test",
    icon: "fas fa-flask"
  },
  {
    name: "AIDS Test",
    icon: "fas fa-virus"
  },
  {
    name: "CT Scan",
    icon: "fa-solid fa-child"
  },
  {
    name: "ECG",
    icon: "fas fa-heartbeat"
  },
  {
    name: "EMG",
    icon: "fas fa-running"
  },
  {
    name: "EEG",
    icon: "fas fa-brain"
  },
  {
    name: "X-ray",
    icon: "fa-solid fa-x-ray"
  }
];
  
 // Function to display the disease options in the content section
function showDiseases(diseases) {
  var contentSection = document.getElementById("content-section");
  contentSection.innerHTML = "";

  diseases.forEach(function (disease) {
    var optionElement = document.createElement("div");
    optionElement.classList.add("disease-option");
    optionElement.innerHTML = `
      <div class="disease-icon">
        <i class="${disease.icon}"></i>
      </div>
      <p>${disease.name}</p>
    `;
    optionElement.setAttribute("data-disease-name", disease.name);
    optionElement.addEventListener("click", function () {
      updateDiseaseInput(disease.name);
    });

    contentSection.appendChild(optionElement);
  });

  // Add border and box shadow to the content section
  contentSection.style.border = "1px solid #ccc";
  contentSection.style.boxShadow = "2px 2px 4px rgba(0, 0, 0, 0.2)";
}

  
// Function to update the disease input field with the selected disease
function updateDiseaseInput(diseaseName) {
    var diseaseInput = document.getElementById("disease");
    diseaseInput.value = diseaseName;
  
    // Scroll to the form section
    document.getElementById("form-section").scrollIntoView({ behavior: "smooth" });
  }
  
  // Function to show the General Checkup diseases
  function showGeneralCheckupDiseases() {
    showDiseases(generalCheckupDiseases);
  }
  
  // Function to show the Specific Disease 
  function showSpecificDisease() {
    showDiseases(specificDisease);
  }

  // Function to show the Specific Tests and Scans
  function showTestsAndScans() {
    showDiseases(LabsAndTests);
  }
  