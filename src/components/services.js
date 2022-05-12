let windowWidth = window.screen.width < window.outerWidth ?
                  window.screen.width : window.outerWidth;
let mobile = windowWidth < 500;

const services = (() => {

    const editPlaceholder = (element, name, placeholderText) => {
        element.setAttribute('placeholder', placeholderText);
        const placeholder = element.getAttribute('placeholder');

        if (element.innerHTML == '') {
            element.innerHTML = placeholder;
        }

        element.addEventListener('focus', function (e) {
            const value = e.target.innerHTML;
            value === placeholder && (e.target.innerHTML = '');
            if (mobile) {
                document.getElementById("title-container").style.visibility = "hidden";
                document.getElementById("control-panel").style.visibility = "hidden";
            }
        });

        element.addEventListener('blur', function (e) {
            const value = e.target.innerHTML;
            value === '' && (e.target.innerHTML = placeholder);
            if (mobile) {
                document.getElementById("title-container").style.visibility = "visible";
                document.getElementById("control-panel").style.visibility = "visible";
            }
        });

        element.addEventListener("keydown", function(event) {
            // Number 13 is the "Enter" key on the keyboard
            if (event.keyCode === 13) {
                // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            element.blur();
            }
        });
    
        return;
    };


    return {
        editPlaceholder
      };
  })();
    
    
export {
    services
 }


