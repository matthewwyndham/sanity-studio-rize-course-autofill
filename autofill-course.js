// ==UserScript==
// @name         Autofill Course
// @namespace    https://rizeedu.sanity.studio
// @version      2024-04-29
// @description  Adds functionality to Sanity UI to automatically fill the course field with the current course
// @author       Matt Wyndham
// @match        https://rizeedu.sanity.studio/*
// @match        http://localhost:3333/*
// @icon         data:image/gif;base64,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
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    (new MutationObserver(check)).observe(document, {childList: true, subtree: true});
    setTimeout(()=>{ buildControlButton() }, 1000);
})();

let last = null
let final = null
let course_code

function check(changes, observer) {
    // observer.disconnect() // to stop watching completely

    let toggle = document.querySelector('.button#course-autofill-control-button')
    if (toggle &&
        toggle.dataset.active === 'true' &&
        window.location.href.includes('structure/course;') &&
        !document.querySelector('[data-comments-field-id="course"] a[data-ui="ReferenceLinkCard"]')
      ) {

        let course_selector_query = '[data-comments-field-id="course"] div[data-ui="Autocomplete"] input#course'
        if(document.querySelector(course_selector_query)) {

            course_code = window.location.href.split('course;')[1]
            let course_selector_element = document.querySelector(course_selector_query)

            if (last != course_selector_element) {
                last = course_selector_element;

                // wait for the element to stop changing
                console.log('a')
                if (final !== null) { clearTimeout(final) }
                final = setTimeout(()=>{

                    // click the dropdown button
                    document.querySelector('[data-comments-field-id="course"] div[data-ui="Autocomplete"] button[data-ui="Button"]').click()
                console.log('b')

                    // wait for the list to load
                    setTimeout(()=>{
                        // click the element with id
                        document.querySelector(`li#course-option-${course_code}`).click()
                console.log('c')

                    }, 1500)

                }, 1500)
            }
        }
    }

}

function buildControlButton() {

    const buttonStyle = `:root{--transparent:oklch(0 0 0 / 0%);--purple-200:oklch(0.82 0.06 280);--purple-300:oklch(0.71 0.12 280);--purple-400:oklch(0.61 0.18 280);--purple-800:oklch(0.25 0.15 280);--purple-900:oklch(0.13 0.06 280)}.button#course-autofill-control-button{position:fixed;bottom:2px;left:2px;z-index:99;font-family:monospace;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;background:var(--purple-900);border:3px solid;border-color:var(--purple-400);border-radius:.75rem;color:var(--purple-300);padding:.75rem 1rem;text-decoration:none;transition:250ms ease-in-out;cursor:pointer;user-select:none}.button#course-autofill-control-button:focus,.button#course-autofill-control-button:hover{color:var(--purple-200);background-color:var(--purple-800)}.button#course-autofill-control-button:after{content:"";position:absolute;z-index:-1;inset:0;opacity:.6;border-radius:inherit;box-shadow:0 0 1em .5em var(--purple-300);transition:opacity 250ms ease-in-out}.button#course-autofill-control-button:focus::after,.button#course-autofill-control-button:hover::after{opacity:.6}.button#course-autofill-control-button svg{height:14px}`
    const adjustments_cog = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M6 4v4" /><path d="M6 12v8" /><path d="M13.199 14.399a2 2 0 1 0 -1.199 3.601" /><path d="M12 4v10" /><path d="M12 18v2" /><path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M18 4v1" /><path d="M18 9v2.5" /><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19.001 15.5v1.5" /><path d="M19.001 21v1.5" /><path d="M22.032 17.25l-1.299 .75" /><path d="M17.27 20l-1.3 .75" /><path d="M15.97 17.25l1.3 .75" /><path d="M20.733 20l1.3 .75" /></svg>`
    const adjustments_stop = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M6 6v2" /><path d="M6 12v8" /><path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M12 4v4m0 4v2" /><path d="M12 18v2" /><path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M18 4v1" /><path d="M18 9v5m0 4v2" /><path d="M3 3l18 18" /></svg>`

    let button_text = 'COURSE'
    if (document.querySelector('.button#course-autofill-control-button')) {
        console.log('found button already')
        return
    } else {

        // add button
        let button = document.createElement('div')
        button.id = 'course-autofill-control-button'
        button.className = 'button'
        button.title = 'Autofill the Course field with the current course (toggle)'

        // functionality
        button.dataset.active = localStorage.getItem('course-autofill-control-button') || 'false'
        button.innerHTML = (button.dataset.active === 'false' ? `${adjustments_stop} ${button_text}` : `${adjustments_cog} ${button_text}`)
        button.addEventListener('click', (event)=>{
            button.dataset.active = button.dataset.active === 'true' ? 'false' : 'true'
            button.innerHTML = (button.dataset.active === 'false' ? `${adjustments_stop} ${button_text}` : `${adjustments_cog} ${button_text}`)
            localStorage.setItem('course-autofill-control-button', button.dataset.active)
        })

        // add to doc
        document.querySelector('div#sanity').appendChild(button)

        // add styles
        let stylesheet = document.createElement('style')
        stylesheet.innerText = buttonStyle
        document.head.appendChild(stylesheet)

    }


}

/* original css

:root {
  --transparent: oklch(0 0 0 / 0%);
  --purple-200: oklch(0.82 0.06 280);
  --purple-300: oklch(0.71 0.12 280);
  --purple-400: oklch(0.61 0.18 280);
  --purple-800: oklch(0.25 0.15 280);
  --purple-900: oklch(0.13 0.06 280);
}

.button#course-autofill-control-button {
  position: fixed;
  bottom: 2px;
  left: 2px;
  z-index: 99;
  font-family: monospace;
  font-size: 10px;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--purple-900);
  border: 3px solid;
  border-color: var(--purple-400);
  border-radius: 0.75rem;
  color: var(--purple-300);
  padding: 0.75rem 1rem;
  text-decoration: none;
  transition: 250ms ease-in-out;
  transition-property: all;

  cursor: pointer;
  user-select: none;
}

.button#course-autofill-control-button:hover,
.button#course-autofill-control-button:focus {
  color: var(--purple-200);
  background-color: var(--purple-800);
}

.button#course-autofill-control-button:after {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 0;
  opacity: 0.6;
  border-radius: inherit;
  box-shadow: 0 0 1em 0.5em var(--purple-300);
  transition: 250ms ease-in-out;
  transition-property: opacity;
}

.button#course-autofill-control-button:hover::after,
.button#course-autofill-control-button:focus::after {
  opacity: 0.6;
}

.button#course-autofill-control-button svg {
  height: 14px;
}

*/
