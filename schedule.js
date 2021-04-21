$(document).ready(function()
{
    $("#schedule").on("click", schedule) ;
});

function schedule(event){
    event.preventDefault();
    
     let checkedDay= $("input[name=day]:checked").attr("id")

    
    if (checkedDay === "monday")
    {
        $("p#activity").text("JavaScript - 6:00pm ");

    }
    else if (checkedDay === "tuesday")
    {
        $("p#activity").text("Walk dog - 5:00pm");
    }
    else if(checkedDay === "wednesday")
    {
        $("p#activity").text("Take a salt bath -7:00pm");
    }
    else if(checkedDay === "thursday")
    {
        $("p#activity").text("Go to the gym - 3:30 pm");
    }
    else if(checkedDay === "friday")
    {
        $("p#activity").text("practice JavaScript - 9:00am");
    }
    else if(checkedDay === "saturday")
    {
        $("p#activity").text("Practice golf - 1:00 pm");
    }

    else if(checkedDay === "sunday")
    {
        $("p#activity").text("Family dinner 6:30 pm");
    }


}

