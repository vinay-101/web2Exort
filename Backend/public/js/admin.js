document.addEventListener("DOMContentLoaded", function () {
  // Get the current URL path
  var currentPath = window.location.pathname;

  // Get all the navigation links
  var navLinks = document.querySelectorAll("nav ul li a");

  // Loop through each link and compare its href with the current path
  for (var i = 0; i < navLinks.length; i++) {
    var link = navLinks[i];
    var linkPath = link.getAttribute("href");
    var menuName = link.dataset.menuName;
    // Check if the link's href matches the current path
    console.log("14", menuName);
    if (
      currentPath === linkPath ||
      (menuName && currentPath.includes(menuName))
    ) {
      // Add the 'active' class to the parent <li> element
      link.parentElement.classList.add("menu_active");

      // Open the parent submenu
      var parentSubmenu = findParentSubmenu(link);
      if (parentSubmenu) {
        parentSubmenu.style.display = "block";

        // Change the font awesome arrow icon to an angle down icon
        var angleDownIcon = parentSubmenu.parentElement.querySelector("p i");
        if (angleDownIcon) {
          angleDownIcon.classList.remove("fa-angle-left");
          angleDownIcon.classList.add("fa-angle-down");
        }
      }
    }
  }

  // Function to find the parent submenu of a given link
  function findParentSubmenu(link) {
    var parent = link.parentElement;
    while (parent && !parent.classList.contains("nav-treeview")) {
      parent = parent.parentElement;
    }
    return parent;
  }
});

function confirmation() {
  return confirm("Are you sure! you want to Delete this?");
}

// Initialize CKEditor on the 'description' textarea
// document.addEventListener("DOMContentLoaded", function () {
//     CKEDITOR.replace('description', {
//         removePlugins: 'image,uploadimage',  // Remove image plugins
//         toolbar: [
//             { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike'] },
//             { name: 'paragraph', items: ['NumberedList', 'BulletedList', 'Blockquote'] },
//             { name: 'links', items: ['Link', 'Unlink'] },
//             { name: 'tools', items: ['Maximize'] }
//         ],

//     });
//     CKEDITOR.replace('editDescription');
// });

document.addEventListener("DOMContentLoaded", function () {
  try {
    CKEDITOR.replace("description", {
      removePlugins: "image,uploadimage",
      toolbar: [
        {
          name: "basicstyles",
          items: ["Bold", "Italic", "Underline", "Strike"],
        },
        {
          name: "paragraph",
          items: ["NumberedList", "BulletedList", "Blockquote"],
        },
        { name: "links", items: ["Link", "Unlink"] },
        { name: "tools", items: ["Maximize"] },
      ],
      height: 200,
      on: {
        instanceReady: function () {
          console.log("CKEditor initialized successfully");
        },
      },
    });
  } catch (e) {
    console.error("Failed to initialize CKEditor:", e);
  }
});

// Preview of image while uploading
function previewImage() {
  const imageInput = document.getElementById("imageInput");
  const imagePreview = document.getElementById("imagePreview");

  imageInput.addEventListener("change", function () {
    const file = imageInput.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const img = new Image();
        img.src = e.target.result;
        img.style.maxWidth = "100%";
        img.style.maxHeight = "200px"; // Set maximum height or remove this line for the original size
        imagePreview.innerHTML = "";
        imagePreview.appendChild(img);
      };

      reader.readAsDataURL(file);
    } else {
      imagePreview.innerHTML = "No image selected";
    }
  });
}
// Preview of image while edit
function EditpreviewImage() {
  const imageInput = document.getElementById("EditimageInput");
  const imagePreview = document.getElementById("EditimagePreview");

  imageInput.addEventListener("change", function () {
    const file = imageInput.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const img = new Image();
        img.src = e.target.result;
        img.style.maxWidth = "100%";
        img.style.maxHeight = "300px"; // Set maximum height or remove this line for the original size
        imagePreview.innerHTML = "";
        imagePreview.appendChild(img);
      };

      reader.readAsDataURL(file);
    } else {
      imagePreview.innerHTML = "No image selected";
    }
  });
}

function previewCoverImage() {
  $(document).ready(function () {
    $("#coverInput").change(function () {
      // Clear the preview div
      $("#imageCoverPreview").html("");

      if (this.files && this.files.length > 0) {
        for (let i = 0; i < this.files.length; i++) {
          let reader = new FileReader();

          reader.onload = function (e) {
            // Create a container for each image with a delete icon
            let imageContainer = $('<div class="image-cover-container"></div>');
            let image = $(
              '<img class="coverInput" src="' + e.target.result + '">'
            );
            let deleteIcon = $(
              '<i id="delete-cover-icon" class="fas fa-times delete-icon"></i>'
            );

            // Add the image and delete icon to the container
            imageContainer.append(image, deleteIcon);

            // Append the container to the preview div
            $("#imageCoverPreview").append(imageContainer);

            // Add a click event to the delete icon
            deleteIcon.click(function () {
              imageContainer.remove(); // Remove the image container when the delete icon is clicked
            });
          };

          reader.readAsDataURL(this.files[i]);
        }
      }
    });
  });
}

// while updating image it replace existing image
function replaceImagePreview() {
  // Get references to the input and image elements
  const imageInput = document.getElementById("image-input");
  const imagePreview = document.getElementById("image-preview");

  // Add an event listener to the file input
  imageInput.addEventListener("change", function () {
    const file = imageInput.files[0];

    // Check if a file was selected
    if (file) {
      // Create a FileReader to read the file
      const reader = new FileReader();

      // Set up the FileReader to update the image preview when the file is loaded
      reader.onload = function (e) {
        imagePreview.src = e.target.result;
      };

      // Read the selected file as a data URL
      reader.readAsDataURL(file);
    } else {
      // If no file is selected, clear the image preview
      imagePreview.src = "#";
    }
  });
}

function previewMultipleImages(input) {
  var preview = document.getElementById("imageshowsPreview");
  preview.innerHTML = "";

  if (input.files) {
    var filesAmount = input.files.length;

    for (var i = 0; i < filesAmount; i++) {
      var reader = new FileReader();

      reader.onload = function (event) {
        var imgElement = document.createElement("img");
        imgElement.setAttribute("src", event.target.result);
        imgElement.setAttribute(
          "style",
          "max-width: 200px; max-height: 200px; margin: 10px;"
        );
        preview.appendChild(imgElement);
      };

      reader.readAsDataURL(input.files[i]);
    }
  }
}

// qr download
$(document).ready(function () {
  let selectedCheckboxes = [];
  let isRequestInProgress = false;

  function updateSelectedCheckboxes() {
    selectedCheckboxes = $(".form-check-input:checked")
      .map(function () {
        return $(this).attr("id");
      })
      .get();
  }

  function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  }

  const storeModalInputs = debounce(function () {
    const firstHeading = $("#firstHeadingDownload").val();
    const companyHeading = $("#companyHeadingDownload").val();
    localStorage.setItem("firstHeadingDownload", firstHeading);
    localStorage.setItem("companyHeadingDownload", companyHeading);
  }, 300);

  $("#firstHeadingDownload, #companyHeadingDownload").on(
    "input",
    storeModalInputs
  );

  $("#selectAll").change(function () {
    $(".form-check-input").prop("checked", $(this).prop("checked"));
    updateSelectedCheckboxes();
  });

  $(".form-check-input").change(updateSelectedCheckboxes);

  $("#submitBtn").click(function (event) {
    event.preventDefault();

    if (isRequestInProgress) {
      alert("A download request is already in progress. Please wait.");
      return;
    }

    const firstHeading = $("#firstHeadingDownload").val();
    const companyHeading = $("#companyHeadingDownload").val();

    if (!firstHeading || !companyHeading) {
      alert('Please provide both "First Heading" and "Company Heading".');
      return;
    }

    // get the category value
    const category = $("#categoryField").val();

    // check if the category is doorbell
    if (category == 1) {
      if (firstHeading.length > 8) {
        alert("First heading should not be more than 8 characters");
        event.preventDefault();
        event.stopPropagation(); // Stop event from bubbling up
        return false;
      }
      if (companyHeading.length > 26) {
        alert("Company heading should not be more than 26 characters");
        event.preventDefault();
        event.stopPropagation(); // Stop event from bubbling up
        return false;
      }
    }

    if (selectedCheckboxes.length === 0) {
      alert("Please select at least one QR code.");
      return;
    }

    isRequestInProgress = true;
    $("#submitBtn").prop("disabled", true).text("Processing...");

    $.ajax({
      url: `/admin/qr/download`,
      method: "POST",
      xhrFields: { responseType: "blob" },
      contentType: "application/json",
      data: JSON.stringify({
        id: selectedCheckboxes,
        firstHeading,
        companyHeading,
      }),
      success: function (response, status, xhr) {
        const contentType = xhr.getResponseHeader("Content-Type");

        if (contentType.includes("application/pdf")) {
          const blob = new Blob([response], { type: "application/pdf" });
          const downloadUrl = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = downloadUrl;

          const contentDisposition = xhr.getResponseHeader(
            "Content-Disposition"
          );
          const fileName = contentDisposition
            ? contentDisposition.split("filename=")[1].trim()
            : "qrcode.pdf";

          link.download = fileName;
          link.click();
          window.URL.revokeObjectURL(downloadUrl);
        } else if (contentType.includes("application/json")) {
          const reader = new FileReader();
          reader.onload = function () {
            try {
              const responseText = reader.result;
              const jsonResponse = JSON.parse(responseText);
              alert(jsonResponse.message || "An unknown error occurred.");
            } catch (e) {
              alert("Failed to parse the server response.");
            }
          };
          reader.readAsText(response);
        } else {
          alert("Unexpected response format. Please try again.");
        }
      },
      error: function (xhr) {
        const contentType = xhr.getResponseHeader("Content-Type");
        if (contentType && contentType.includes("application/json")) {
          try {
            const errorResponse = JSON.parse(xhr.responseText);
            alert(errorResponse.message || "An unknown error occurred.");
          } catch (e) {
            alert("At this time this QR is not downloadable.");
          }
        } else if (xhr.responseType === "blob") {
          const reader = new FileReader();
          reader.onload = function () {
            try {
              const responseText = reader.result;
              const errorResponse = JSON.parse(responseText);
              alert(errorResponse.message || "An unknown error occurred.");
            } catch (e) {
              alert("Failed to parse the server response.");
            }
          };
          reader.readAsText(xhr.response);
        } else {
          alert("An unexpected error occurred. Please try again.");
        }
      },
      complete: function () {
        isRequestInProgress = false;
        $("#submitBtn").prop("disabled", false).text("Download");
        $("#qrDownloadModal").modal("hide"); // Close the modal
      },
    });
  });
});

// QR range download
$(document).ready(function () {
  // Attach a submit event handler to the form
  $("#qrRangeForm").on("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const submitButton = $("#download_Btn"); // The submit button
    const originalButtonText = submitButton.text(); // Store the original text

    // Collect form data
    const from = $("#fromField").val();
    const to = $("#toField").val();
    const category = $("#categoryField").val();
    const firstHeading = $("#firstHeading").val();
    const companyHeading = $("#companyHeading").val();

    // Validate the fields
    if (!from || !to || !category || !firstHeading || !companyHeading) {
      alert("Please fill in all required fields.");
      submitButton.prop("disabled", false).text(originalButtonText); // Re-enable the button
      return;
    }

    // Prepare the payload
    const payload = {
      from,
      to,
      category,
      firstHeading,
      companyHeading,
    };

    // check if the category is doorbell
    if (category == 1) {
      if (firstHeading.length > 8) {
        alert("First heading should not be more than 8 characters");
        event.preventDefault();
        event.stopPropagation(); // Stop event from bubbling up
        return false;
      }
      if (companyHeading.length > 26) {
        alert("Company heading should not be more than 26 characters");
        event.preventDefault();
        event.stopPropagation(); // Stop event from bubbling up
        return false;
      }
    }

    // Disable the button and show "Processing..." text
    submitButton.prop("disabled", true).text("Processing...");

    // Send the request
    fetch("/admin/qr/download/by/range", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(async (response) => {
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to download.");
        }

        // Extract file name from Content-Disposition header
        const contentDisposition = response.headers.get("Content-Disposition");
        let fileName = "qrcode_range.pdf"; // Default file name
        if (contentDisposition && contentDisposition.includes("filename=")) {
          fileName = contentDisposition
            .split("filename=")[1]
            .replace(/['"]/g, "");
        }

        // Convert response to Blob
        const blob = await response.blob();
        return { blob, fileName };
      })
      .then(({ blob, fileName }) => {
        // Trigger file download
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName; // Use the extracted or default file name
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url); // Revoke URL
      })
      .catch((error) => {
        console.error("Error:", error.message);
        alert(error.message);
      })
      .finally(() => {
        // Re-enable the button and reset the text
        submitButton.prop("disabled", false).text(originalButtonText);
        $("#qrRangeModal").modal("hide"); // Close the modal
      });
  });
});

// Helper function to update localStorage
async function updateLocalStorageIfNeeded() {
  // Simulate a localStorage update (replace this logic with your actual updates)
  // Example: Fetch updated headings from an API or dynamically set them
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.setItem("firstHeading", "Updated First Heading");
      localStorage.setItem("companyHeading", "Updated Company Heading");
      resolve();
    }, 100); // Simulating an async update delay
  });
}

async function fetchUnreadCounters() {
  const response = await fetch(`/admin/unread-counters`);
  const jsonResponse = await response.json();
  document.getElementById("contactUsCounter").textContent =
    jsonResponse.data.contactUsCount;
  document.getElementById("orderCounter").textContent =
    jsonResponse.data.orderCounter;
  // document.getElementById('feedbackCounter').textContent = jsonResponse.data.feedbackCount;
}

fetchUnreadCounters();
