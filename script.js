function compute()
{
    //reading the user input values
    var principal_elem = document.getElementById("principal")
    var principal = parseInt(principal_elem.value);
    var rate = document.getElementById("rate").value;
    var years = parseInt(document.getElementById("years").value);

    //validating the principal value
    if (isNaN(principal) || principal <= 0) {
        alert("Enter a positive number");
        principal_elem.focus()
        return;
    }

    //calculating the interest
    var interest = principal * years * rate / 100;

    //calculating the actual year
    var actual_year = new Date().getFullYear() + years;

    var result_span = document.getElementById("result");
    result_span.innerHTML = "If you deposit <mark>"+principal+"</mark>,<br>"
                          + "at an interest rate of <mark>"+rate+"%</mark>.<br>"
                          + "You will receive an amount of <mark>"+interest+"</mark>,<br>"
                          + "in the year <mark>"+actual_year+"</mark>";
}

function updateSliderIndicator()
{
    //fetching the value chosen by the user from the slider
    var slider_val = document.getElementById("rate").value;
    //setting the span to that value
    document.getElementById("rate_indicator").innerHTML = slider_val + "%"
}
        
