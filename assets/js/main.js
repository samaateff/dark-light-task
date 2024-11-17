/*********************************************************************
******************** Content section functionalty ********************
*********************************************************************/

// const myModal = new bootstrap.Modal(document.getElementById('payment_popup'))

// myModal.show()

/************* Calculation of section height ************/

if (document.querySelector("#footer") && document.querySelector("#header")) {
    const mainContentSection = document.querySelector("#content");
    const headerHeight       = document.querySelector("#header").offsetHeight;
    const footerHeight       = document.querySelector("#footer").offsetHeight;
    
    // Content Section main Height = 100vh - (headerHeight + footerHeight)
    mainContentSection.style.minHeight = `calc(100vh - ${headerHeight + footerHeight}px)`
    
    // Calculation height whine window resize
    window.onresize = () => {
        const headerHeight = document.querySelector("#header").offsetHeight;
        const footerHeight = document.querySelector("#footer").offsetHeight;
    
        // Content Section main Height = 100vh - (headerHeight + footerHeight)
        mainContentSection.style.minHeight = `calc(100vh - ${headerHeight + footerHeight}px)`
    }
}

if (document.querySelector("#dashboard-footer") && document.querySelector("#dashboard-header")) {
    const mainContentSection = document.querySelector("#content");
    const mainContentLayout  = document.querySelector(".dashboard-layout");
    const headerHeight       = document.querySelector("#dashboard-header").offsetHeight;
    const footerHeight       = document.querySelector("#dashboard-footer").offsetHeight;

    // Content Section main Height = 100vh - (headerHeight + footerHeight)
    mainContentSection.style.minHeight = `calc(100vh - ${headerHeight + footerHeight}px)`
    mainContentLayout.style.minHeight = `calc(100vh - ${headerHeight + footerHeight}px)`
    
    // Calculation height whine window resize
    window.onresize = () => {
        const headerHeight = document.querySelector("#dashboard-header").offsetHeight;
        const footerHeight = document.querySelector("#dashboard-footer").offsetHeight;
    
        // Content Section main Height = 100vh - (headerHeight + footerHeight)
        mainContentSection.style.minHeight = `calc(100vh - ${headerHeight + footerHeight}px)`
        mainContentLayout.style.minHeight = `calc(100vh - ${headerHeight + footerHeight}px)`
    }
}

/************* show body background ************/

if(document.querySelector("#header")) {
    document.body.classList.add("background")
}

/*********************************************************************
*************************** Form functionalty ************************
*********************************************************************/

/*********************** show & hide password **********************/
const passwordField = document.querySelectorAll(".input-field.password");

Array.from(passwordField).forEach((field) => {
    const input  = field.querySelector("input")
    const button = field.querySelector(".eye")

    button.onclick = () => {
        
        const icon  = button.querySelector("svg")

        if (input.getAttribute("type") == "password") {

            input.setAttribute("type", "text");

            icon.classList.remove("fa-eye")
            icon.classList.add("fa-eye-slash")

        } else {

            input.setAttribute("type", "password");

            icon.classList.add("fa-eye")
            icon.classList.remove("fa-eye-slash")
        }

        input.focus();
    }
})


/************* verification code ************/
const otpInput = document.querySelectorAll('.otp-inputs input');

if(otpInput.length != 0) {
    window.addEventListener('DOMContentLoaded', () => otpInput[0].focus());
}

Array.from(otpInput).forEach((input, index) => {

    input.oninput = (e) => {
        
        if(input.value.length > 1) {
            input.value = input.value.substr(0, 1);
        }
        
    }
  
    input.addEventListener("keyup", (e) => {
      
        const key = e.key; 
        
        if (key === "Backspace" || key === "Delete") {
            
            if (otpInput[index - 1]) {
                // Move to the next inputt
                otpInput[index - 1].focus();
            }
                
        } else {
                
            if (input.value.match(/\d/)) {
                if (otpInput[index + 1]) {
                    // Move to the next inputt
                    otpInput[index + 1].focus();
                }
            } else {
                input.value = ""
            }
        }
    })
}) 



/*********************************************************************
************************ Sliders functionalty ************************
*********************************************************************/

/******************* swiper js => lessons slider ******************/
const lessonsSlider = new Swiper('.lessons-slider', {
    // Optional parameters
    slidesPerView: "auto",
    freeMode: true,
    grabCursor: true,
    touchStartForcePreventDefault: true,
    direction: 'vertical',
    mousewheel: true
});

lessonsSlider.on('slideChange', () => {

    lessonsSlider.mousewheel.enable();
});

lessonsSlider.on('reachEnd', () => {
    
    document.querySelector('body').style.overflow = 'auto';

    lessonsSlider.mousewheel.disable()
});

lessonsSlider.on('reachBeginning', () => {
    
    document.querySelector('body').style.overflow = 'auto';

    lessonsSlider.mousewheel.disable()
});

/******************* swiper js => testimonials slider ******************/
const testimonialsNumberSlides = document.querySelectorAll('.teachers-slider .swiper-slide').length;
const testimonialsSlider = new Swiper('.testimonials-slider', {
    // Optional parameters
    slidesPerView: "auto",
    centeredSlides: true,
    centeredSlidesBounds: true,
    grabCursor: true,
    // loop: true,
    loop: (testimonialsNumberSlides >= 8) ? true : false,
    centerInsufficientSlides: true,
    // freeMode: true,
    grabCursor: true,
    touchStartForcePreventDefault: true,

    autoplay: {
        delay: 5000,
    },

    pagination: {
        el: '.testimonials-slider .swiper-pagination',
        type: 'bullets',
        clickable: true
    }
});

/******************* swiper js => teachers slider ******************/
const teachersNumberSlides = document.querySelectorAll('.teachers-slider .swiper-slide').length;
const teachersSlider = new Swiper('.teachers-slider', {
    // Optional parameters
    slidesPerView: "auto",
    centeredSlides: true,
    // centeredSlidesBounds: true,
    centeredSlidesBounds: (teachersNumberSlides >= 8) ? false : true,
    grabCursor: true,
    // loop: true,
    initialSlide: (teachersNumberSlides >= 8) ? 0 : 1,
    loop: (teachersNumberSlides >= 8) ? true : false,
    centerInsufficientSlides: true,
    // freeMode: true,
    grabCursor: true,
    touchStartForcePreventDefault: true,
    slidesPerView: 6,
    spaceBetween: 30,

    breakpoints: {
        1200: {
          slidesPerView: 5
        },
        992: {
          slidesPerView: 4
        },
        768: {
          slidesPerView: 3
        },
        0: {
          slidesPerView: 2
        }
    },
    autoplay: {
        delay: 5000,
    },

    navigation: {
      nextEl: '.teachers-slider .swiper-button-next',
      prevEl: '.teachers-slider .swiper-button-prev',
    },

    pagination: {
        el: '.teachers-slider .swiper-pagination',
        type: 'bullets',
        clickable: true,
        enabled: (teachersNumberSlides >= 6) ? true : false
    }
});

const teachersSliderBox         = document.querySelectorAll('.teachers-slider .swiper-wrapper');
const teachersSliderActiveSlide = document.querySelectorAll('.teachers-slider .swiper-slide-active');

console.log(teachersSliderBox);
console.log(teachersSliderActiveSlide);



/******************* swiper js => banners slider ******************/
const bannersSlider = new Swiper('.banners-slider', {
    // Optional parameters
    slidesPerView: "auto",
    loop: true,
    grabCursor: true,
    touchStartForcePreventDefault: true,

    autoplay: {
        delay: 5000,
    },

    pagination: {
        el: '.banners-slider .swiper-pagination',
        type: 'bullets',
        clickable: true
    }
});



/*********************************************************************
************************** Home functionalty *************************
*********************************************************************/

const cunterElements = document.querySelectorAll(".cunter");

Array.from(cunterElements).forEach((cunter) => {

    const cunterElementHeight     = cunter.offsetHeight;
    const cunterElementPageHeight = $(cunter).offset().top;
    const windowInnerHeight       = window.innerHeight;
    let status                    = true;   
    let windowScrollingVertical = window.scrollY;
    let EquationRunningAnmation = (cunterElementHeight + cunterElementPageHeight) - windowInnerHeight;

    // run function window loaded
    animationCutnter()

    // run function window scrolling
    window.addEventListener("scroll", () => {

        windowScrollingVertical = window.scrollY;
        EquationRunningAnmation = (cunterElementHeight + cunterElementPageHeight) - windowInnerHeight;

        animationCutnter()
    })

    function animationCutnter() {

        if (windowScrollingVertical >= EquationRunningAnmation && status) {

            const cutnterValue = cunter.textContent;
            const cutnterNum   = (Number.isNaN(parseInt(cutnterValue))) ? parseFloat(convertLangNumbers(cutnterValue)) : parseFloat(cunter.textContent) ;
            const speed        = (cutnterNum > 10) ? 500 / cutnterNum : 500 / (cutnterNum * 10);
            let   cunterValue  = 0;

            // Stop restarting the animation 
            status = false;
        
            const cunterInterval = setInterval(() => {

                if (cutnterNum < 10 ) {

                    cunterValue += .1

                    cunter.textContent = (Number.isNaN(parseInt(cutnterValue))) ? convertLangNumbers(cunterValue.toFixed(1)) : cunterValue.toFixed(1);
        
                    if (cunterValue.toFixed(1) == cutnterNum ) {

                        clearInterval(cunterInterval);
                    }

                } else {

                    cunterValue++

                    cunter.textContent = (Number.isNaN(parseInt(cutnterValue))) ? convertLangNumbers(cunterValue) : cunterValue;

                    if (cunterValue == cutnterNum) {

                        clearInterval(cunterInterval);
                    }
                }
        
        
            }, speed)
        }
    }

    function convertLangNumbers(number) {
        var arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
        var englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        number = number.toString();

        // if Arabic Number
        if (Number.isNaN(parseInt(number))) {

            for (var i = 0; i < arabicDigits.length; i++) {
              number = number.replace(new RegExp(arabicDigits[i], 'g'), englishDigits[i]);
            }

        // if English Number
        } else {
            
            for (var i = 0; i < englishDigits.length; i++) {
                number = number.replace(new RegExp(englishDigits[i], 'g'), arabicDigits[i]);
            }
        }
      
        return number;
    }
})

/*********************************************************************
************************ Student functionalty ************************
*********************************************************************/

const sideMenuButton        = document.querySelector(".sidemenu-toggler");
const sideMenuMobileButton  = document.querySelector(".mobile-toggler");
const sideMenuCloseButton   = document.querySelector("#side-menu .close-button");
const slideMenuSection      = document.querySelector("#side-menu");

if (sideMenuButton) {

    sideMenuButton.onclick = () => {

        slideMenuSection.classList.toggle("closed")
    }

    sideMenuMobileButton.onclick = () => {

        slideMenuSection.classList.toggle("open");

        if (document.body.style.overflow != "hidden") {

            document.body.style.overflow = "hidden"

        } else {

            document.body.style.overflow = "auto"
        }
    }


    sideMenuCloseButton.onclick = () => {

        slideMenuSection.classList.remove("open");

        document.body.style.overflow = "auto"
    }
}

/* alerts => add margin to last alert */
$(".main-alert").last().addClass("mb-4")


/* profile Image change  */
// const profileImageInput = document.getElementById("profile_image_input");

// if (profileImageInput) {

//     const profileImage = document.getElementById("profile_image");

//     profileImageInput.oninput = (e) => {

//         const image =  profileImageInput.files[0]
        
//         // create js constractor => FileReader
//         let reader = new FileReader();
//         reader.readAsDataURL(image);

//         reader.onloadend = () => {

//             // change image src by input file
//             profileImage.src = reader.result
//         }
//     }
// }


/* teachers filter mobile => hide filter to screens < 992px */
$(() => {

    $(window).on('load', function() {
        if ($(window).width() < 991) {
            // hide filter 
            $('#techers_search_filter').collapse('hide');

        }
    });
    
    $(window).on('resize', function() {
        if ($(window).width() < 991) {
            // hide filter 
            $('#techers_search_filter').collapse('hide');
        } else {
            // show filter 
            $('#techers_search_filter').collapse('show');
        }
    });
})


/******************  copy to clipboard ******************/
const clipboardButton = document.querySelectorAll(".clipboard");

Array.from(clipboardButton).forEach((button) => {

    const text = button.getAttribute("data-clipboard-text");
    
    button.addEventListener("click",() => {

        // Copy the text inside the text field
        navigator.clipboard.writeText(text);

        // add style 
        button.querySelector("svg").setAttribute("data-icon", "clipboard");
        button.querySelector(".copy-alet").classList.add("show")
        button.classList.add("active")

        // remove style after 2 second
        setTimeout(() => {
            button.querySelector("svg").setAttribute("data-icon", "copy");
            button.querySelector(".copy-alet").classList.remove("show")
            button.classList.remove("active")
        }, 2000)
    })
})


/************* circular Progress ************/
const circularProgress = document.querySelectorAll(".lesson-progress");

Array.from(circularProgress).forEach((progressBar) => {
    
    const skillsSectionHeight     = progressBar.offsetHeight;
    const skillsSectionPageHeight = progressBar.offsetTop;
    const windowInnerHeight       = window.innerHeight;
    let status                    = true;   
    let windowScrollingVertical = window.scrollY;
    let EquationRunningAnmation = (skillsSectionHeight + skillsSectionPageHeight) - windowInnerHeight;

    // run function window loaded
    animationProgress()

    // run function window scrolling
    window.addEventListener("scroll", () => {

        windowScrollingVertical = window.scrollY;
        EquationRunningAnmation = (skillsSectionHeight + skillsSectionPageHeight) - windowInnerHeight;

        animationProgress()
    })

    function animationProgress() {

        if (windowScrollingVertical >= EquationRunningAnmation && status) {
            circularProgress.forEach((prog) => {
                const progressValue = prog.querySelector(".percentage");
                const progressColor = prog.getAttribute("data-progress-color");
                const endValue      = Number(prog.getAttribute("data-percentage"));
                let   startValue    = 0;
                const speed         = 800 /endValue;

                // Stop restarting the animation 
                status = false;

                if (endValue > 0) {

                    const progress = setInterval(() => {
        
                        startValue++;
                
                        progressValue.textContent = `${startValue}%`;
                
                        prog.style.background = `conic-gradient(${progressColor} ${
                                startValue * 3.6
                            }deg,${prog.getAttribute("data-bg-color")} 0deg)`;
                        
                        if (startValue === endValue) {
                            clearInterval(progress);
                        }
                
                    }, speed);
                }
            })
        }
    }
});


/************* completion Progress ************/
const completionProgress = document.querySelectorAll(".completion-progress");

Array.from(completionProgress).forEach((progress) => {

    const progressPercentage = progress.querySelector(".percentage");
    const progressValue      = progress.querySelector(".inner-progress");
    const endValue           = Number(progress.getAttribute("data-percentage"));
    let   startValue         = 0;
    const speed              = 800 /endValue;

    // set Progress value
    progressPercentage.textContent = 0 + "%";
    progressPercentage.style.right = 0 + "%";
    progressValue.style.width      = "0"

    if (endValue > 0) {

        const progressInterval = setInterval(() => {

            startValue++;
    
            // reset Progress value
            progressPercentage.textContent = `${startValue}%`;
            progressPercentage.style.right = `${startValue}%`;
            progressValue.style.width      = `${startValue}%`

            
            if (startValue === endValue) {
                clearInterval(progressInterval);
            }
    
        }, speed);
    }

})


/************* change value options dropdown  ************/
const selectNumberCode = document.querySelector(".select-number-code");

if (selectNumberCode) {
    const input          = selectNumberCode.querySelector('input[type="hidden"]')
    const inputSearch    = selectNumberCode.querySelector('input[type="search"]')
    const dropdownBox    = selectNumberCode.querySelector(".options-dropdown");
    const dropdownButton = selectNumberCode.querySelector(".input-button");
    const dropdownTitle  = selectNumberCode.querySelector(".input-button span");
    const dropdownImage  = selectNumberCode.querySelector(".input-button .flag img");
    const options        = selectNumberCode.querySelectorAll(".options-dropdown .dropdown-item");

    if(options) {
        options.forEach(opt => {

            opt.addEventListener("click", (e) => {

                e.preventDefault();

                // option value
                const value = opt.getAttribute("data-value");
                const flag = opt.querySelector(".flag img").src;

                console.log(flag);

                // change inupt and title values
                input.value = value;
                dropdownTitle.textContent = value;
                dropdownImage.src = flag

                // close dropdown menu
                closeDropdown(dropdownBox, dropdownButton);
            })
        })
    }

    inputSearch.oninput = (e) => {
        
        options.forEach(opt => {

            if(!opt.textContent.trim().includes(e.target.value)) {

                opt.style.display = "none";

            } else {

                opt.style.display = "flex";
            }
        })
    }
}

/************* close options dropdown  ************/
const optionsDropdowns = document.querySelectorAll(".options-dropdown");

if (optionsDropdowns) {

    optionsDropdowns.forEach(option => {
        
        const closeButton = option.querySelector(".btn-close");
        const openbutton  = option.previousElementSibling

        if (closeButton) {

            closeButton.onclick = () => closeDropdown(option, openbutton);
        }
    })
}

function closeDropdown(option, button) {
    // hide dropdown
    option.classList.remove("show");
    // close jobs dropdown
    button.classList.remove("show");
    button.setAttribute("aria-expanded", "false")
}

/*********************************************************************
************************  Teacher functionalty ***********************
*********************************************************************/

/************* Materials library Taps  ************/
const libraryTaps = document.querySelectorAll("#materials_library .library-taps .tap-item");

Array.from(libraryTaps).forEach(tap => {

    tap.addEventListener("click", (e) => {

        // If the tab is locked while it is open and not changed
        if(tap.getAttribute("aria-expanded") === "false") {
            // remove Animations transform items
            document.querySelector(tap.getAttribute("data-bs-target")).classList.remove("collapsing")
            // change state to collapse
            tap.setAttribute("aria-expanded", "true")
            // remove collapsed
            tap.classList.remove("collapsed")
            // show tap
            document.querySelector(tap.getAttribute("data-bs-target")).classList.add("show")
        }
    })
})


/************* lesson recording options ************/
const recordingOptions = document.querySelectorAll(".recording-option");

Array.from(recordingOptions).forEach(option => {

    let optionStatus = option.querySelector('input').checked

    if(optionStatus) { 

        option.classList.add("active")

    } else {

        option.classList.remove("active")
    }
    
    option.addEventListener("click", (e) => {
        
        recordingOptions.forEach((opt) => {
            
            let optionStatus = opt.querySelector('input').checked

            if(optionStatus) { 

                opt.classList.add("active")
    
            } else {
    
                opt.classList.remove("active")
            }
    
        });
    })
})


/************* add & remove image from gallery and input ************/
// const inputFile = document.querySelector("#materials_library_files");
const uploaderFile = document.querySelector(".uploader-materials");

if (uploaderFile) {
    // set main varibles
    const uploaderFilesBox = uploaderFile.querySelector(".file-field");
    const inputFile        = uploaderFile.querySelector("#materials_library_files");
    const fileText         = uploaderFile.querySelector(".name-files");

    let allImages = new DataTransfer();

    inputFile.oninput = (e) => {
    
        const files = [...e.target.files];

        // add images to estates gallery
        files.forEach( (file) => addImageFile(file));
    }

    // when dragenter & dragover to uploaderFilesBox section
    ['dragenter', 'dragover'].forEach(eventName => {
        uploaderFilesBox.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
            uploaderFilesBox.classList.add("active")
        }, false)
    });
    
    // when dragleave & drop to uploaderFilesBox section
    ['dragleave', 'drop'].forEach(eventName => {
        uploaderFilesBox.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
            uploaderFilesBox.classList.remove("active")
        }, false)
    });

    uploaderFilesBox.ondrop = (e) => {

        // this all images files 
        let files = [...e.dataTransfer.files];

        // add images to estates gallery
        files.forEach( (file) => {

            // if flile type image or pdf
            if ((file.type.includes("image") || file.type.includes("pdf"))) {
                addImageFile(file)
            }
        })
    }

    // function => add image to estate gallery
    const addImageFile = (img) => {

        // change text files name

        if (allImages.files.length > 0) {

            fileText.textContent += " / " + img.name;

        } else {

            fileText.textContent = img.name;
        }

        // add image to all images file list
        allImages.items.add(img);

        // create js constractor => FileReader
        let reader = new FileReader();
        reader.readAsDataURL(img);

        // image complate load
        // reset input field safe images => all images upload
        reader.onloadend = () => inputFile.files = allImages.files;   
    } 
}














// let stream = null,
// 	audio = null,
// 	mixedStream = null,
// 	chunks = [], 
// 	recorder = null
// 	startButton = null,
// 	stopButton = null,
// 	downloadButton = null,
// 	recordedVideo = null;

// async function setupStream () {
// 	try {
// 		stream = await navigator.mediaDevices.getDisplayMedia({
// 			video: true
// 		});

// 		audio = await navigator.mediaDevices.getUserMedia({
// 			audio: {
// 				echoCancellation: true,
// 				noiseSuppression: true,
// 				sampleRate: 44100,
// 			},
// 		});

// 		setupVideoFeedback();
// 	} catch (err) {
// 		console.error(err)
// 	}
// }

// function setupVideoFeedback() {
// 	if (stream) {
// 		const video = document.querySelector('.video-feedback');
// 		video.srcObject = stream;
// 		video.play();
// 	} else {
// 		console.warn('No stream available');
// 	}
// }

// async function startRecording () {
// 	await setupStream();

// 	if (stream && audio) {
// 		mixedStream = new MediaStream([...stream.getTracks(), ...audio.getTracks()]);
// 		recorder = new MediaRecorder(mixedStream);
// 		recorder.ondataavailable = handleDataAvailable;
// 		recorder.onstop = handleStop;
// 		recorder.start(1000);
	
// 		startButton.disabled = true;
// 		stopButton.disabled = false;
	
// 		console.log('Recording started');
// 	} else {
// 		console.warn('No stream available.');
// 	}
// }

// function stopRecording () {
// 	recorder.stop();

// 	startButton.disabled = false;
// 	stopButton.disabled = true;
// }

// function handleDataAvailable (e) {
// 	chunks.push(e.data);
// }

// function handleStop (e) {
// 	const blob = new Blob(chunks, { 'type' : 'video/mp4' });
// 	chunks = [];

// 	downloadButton.href = URL.createObjectURL(blob);
// 	downloadButton.download = 'video.mp4';
// 	downloadButton.disabled = false;

// 	recordedVideo.src = URL.createObjectURL(blob);
// 	recordedVideo.load();
// 	recordedVideo.onloadeddata = function() {
// 		const rc = document.querySelector(".recorded-video-wrap");
// 		rc.classList.remove("hidden");
// 		rc.scrollIntoView({ behavior: "smooth", block: "start" });

// 		recordedVideo.play();
// 	}

// 	stream.getTracks().forEach((track) => track.stop());
// 	audio.getTracks().forEach((track) => track.stop());

// 	console.log('Recording stopped');
// }

// window.addEventListener('load', () => {
// 	startButton = document.querySelector('.start-recording');
// 	stopButton = document.querySelector('.stop-recording');
// 	downloadButton = document.querySelector('.download-video');
// 	recordedVideo = document.querySelector('.recorded-video');

// 	startButton.addEventListener('click', startRecording);
// 	stopButton.addEventListener('click', stopRecording);
// })


// الحصول على عنصر الفيديو أو الصوت المستهدف للتسجيل
// var targetElement = document.getElementById('recording_section');

// console.log(targetElement);

// // الحصول على مسار وسائط العرض والصوت للتسجيل
// var targetStream = targetElement.captureStream();

// // إنشاء MediaRecorder لتسجيل الفيديو أو الصوت
// var mediaRecorder = new MediaRecorder(targetStream);
// var chunks = [];

// // التوقف وتحويل البيانات المسجلة إلى ملف فيديو أو صوت عند الانتهاء
// mediaRecorder.onstop = function() {
//   var blob = new Blob(chunks, { type: 'video/webm' }); // يمكن استخدام 'audio/webm' للصوت فقط
//   var videoURL = URL.createObjectURL(blob);
//   var downloadLink = document.createElement('a');
//   downloadLink.href = videoURL;
//   downloadLink.download = 'recorded-video.webm'; // اسم الملف المُسجل
//   downloadLink.click();
// };

// // جمع البيانات المُسجلة
// mediaRecorder.ondataavailable = function(e) {
//   chunks.push(e.data);
// };

// // بدء تسجيل الفيديو أو الصوت عند الطلب
// document.getElementById('startRecordingButton').addEventListener('click', function() {
//     var targetStream = targetElement.captureStream();
//     console.log(targetStream);


// //   chunks = [];
// //   mediaRecorder.start();
// });

// // إيقاف تسجيل الفيديو أو الصوت عند الطلب
// document.getElementById('stopRecordingButton').addEventListener('click', function() {
//   mediaRecorder.stop();
// });