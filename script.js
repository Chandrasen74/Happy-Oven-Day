/*
 * Copyright (c) 2026 Chandrasen. All rights reserved.
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use is prohibited.
 */

element = document.getElementById("trigger");
microwave = document.getElementById("microwave")

element.addEventListener("click", function (e) {
    e.preventDefault;
    microwave.classList.remove("animated");
    microwave.offsetWidth = microwave.offsetWidth;
    microwave.classList.add("animated");
}, false);