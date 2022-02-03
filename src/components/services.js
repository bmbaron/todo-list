const services = (() => {

    const editPlaceholder = (element, placeholderText) => {

        element.contentEditable = true;
        element.setAttribute('placeholder', placeholderText);
        const placeholder = element.getAttribute('placeholder');

        if (element.innerHTML == '') {

            element.innerHTML = placeholder;

            element.addEventListener('focus', function (e) {
            const value = e.target.innerHTML;
            value === placeholder && (e.target.innerHTML = '');
            });

            element.addEventListener('blur', function (e) {
            const value = e.target.innerHTML;
            value === '' && (e.target.innerHTML = placeholder);
            });
        }

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


