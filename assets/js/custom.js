/*********************************************************************
*************************** Form functionalty ************************
*********************************************************************/

/*********************** Bootstrap Validation **********************/
(() => {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {

        // all forms
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        // custom select form
        const customSelectBoxs = document.querySelectorAll(".custom-select");

        Array.from(customSelectBoxs).forEach(select => {

            const input  = select.querySelector('input[type="hidden"]');
            const alert  = select.querySelector('.invalid-feedback');

            if (input.value === "") {
            
                event.preventDefault()
                event.stopPropagation()

                // add style invaild
                alert.style.display = "block";
                select.classList.add("invalid")
            }

        })

        // reset password
        const newPass = document.getElementById("new_password");
        const confirmPass = document.getElementById("confirm_password");
        
        if (newPass && confirmPass) {

            if(newPass.value != confirmPass.value) {
                confirmPass.nextElementSibling.style.display = "block";
                confirmPass.setCustomValidity("هذا الحقل غير صالح.");
    
                event.preventDefault()
                event.stopPropagation()
    
            } else {
    
                confirmPass.nextElementSibling.style.display = "none";
    
                if (newPass.validity.valid) {
    
                    form.submit()
    
                } else {
    
                    confirmPass.setCustomValidity("هذا الحقل غير صالح.");
                }
            }
        }
  
        form.classList.add('was-validated')

      }, false)
    })
})();


/*********************** custom select box **********************/

const customSelectBoxs = document.querySelectorAll(".custom-select");

Array.from(customSelectBoxs).forEach(select => {
    const input          = select.querySelector('input[type="hidden"]')
    const alert          = select.querySelector('.invalid-feedback')
    const dropdownBox    = select.querySelector(".dropdown-menu");
    const dropdownButton = select.querySelector(".input-button");
    const dropdownTitle  = select.querySelector(".input-button span");
    const options        = dropdownBox.querySelectorAll(".dropdown-item");

    Array.from(options).forEach(opt => {

        opt.addEventListener("click", (e) => {

            e.preventDefault();

            // option value
            const value = opt.getAttribute("data-select-value");
            const text = opt.textContent.trim();

            // change inupt and title values
            input.value = value;
            dropdownTitle.textContent = text;

            // add style vaild
            alert.style.display = "none";
            select.classList.remove("invalid")
        })
    })
})

/*********************** rate input box **********************/

const rateFieldSection = document.querySelectorAll(".rate-field")

Array.from(rateFieldSection).forEach(field => {

    const input = field.querySelector(".rate-value, #rate_value");
    const icons = field.querySelectorAll(".icon")

    icons.forEach((icon) => {

        const value = icon.getAttribute("data-rate");
        
        icon.onclick = () => {
            const allSvg = field.querySelectorAll(".icon svg");

            // set all svg
            allSvg.forEach(svg => svg.setAttribute("data-prefix", "far"))

            // actvite svg icon
            for (let i = 0; i < value; i++) {
                allSvg[i].setAttribute("data-prefix", "fas")
            }

            // change input value
            input.setAttribute("value", value)
        }
    })
})

/*********************************************************************
*************************** Filter functionalty **********************
*********************************************************************/

const filterItems = document.querySelectorAll(".filter-header .filter-item")

Array.from(filterItems).forEach(item => {

    item.addEventListener("click", () => {

        // add class active and remove from ather items
        filterItems.forEach(allItem => allItem.classList.remove("active"));
        item.classList.add("active")

        // loading to lessons section

        // fetch api and add lessons 
    })
})



/*********************************************************************
*************************** payment functionalty *********************
*********************************************************************/

// change pyment method
$(".methods-item").each((index, item) => {

    const input = $(item).children("input");

    if ($(input).attr("checked") == "checked") {

        $(item).addClass("active");
    }

    $(input).on("change", () => {

        // remove class active from all items
        $(".methods-item").each((index, item) => $(item).removeClass("active"))
        
        // add class active to this item
        $(item).addClass("active");
    })
})
   